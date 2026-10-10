/* =========================================================================
   DATABASE LỊCH SỬ (Cấu trúc đề thi Tốt nghiệp THPT 2026)
   Cấp độ nhận thức: Nhận biết -> Thông hiểu -> Vận dụng -> Vận dụng cao
   Độ chính xác: Bám sát 100% SGK Lịch sử 10, 11, 12 (Kết nối tri thức)

   YÊU CẦU: index.html phải nạp các file dữ liệu TRƯỚC app.js, theo thứ tự:
     data_khoi10.js -> data_khoi11.js -> data_khoi12.js -> data_mocktest.js -> app.js
   (tất cả đặt chung một thư mục)
========================================================================= */

// Bọc toàn bộ trong một hàm tự chạy để các biến của app.js không bao giờ
// trùng tên với biến toàn cục của các file dữ liệu (tránh lỗi "already been declared").
(function () {
    'use strict';

    /* ---------------------------------------------------------------------
       1. NẠP DỮ LIỆU TỪ CÁC FILE BÊN NGOÀI
    --------------------------------------------------------------------- */
    const appDatabase = {
        khoi10: typeof dataKhoi10 !== 'undefined' ? dataKhoi10 : {},
        khoi11: typeof dataKhoi11 !== 'undefined' ? dataKhoi11 : {},
        khoi12: typeof dataKhoi12 !== 'undefined' ? dataKhoi12 : {},
        mocktest: typeof dataMocktest !== 'undefined' ? dataMocktest : {}
    };

    // Tự động nạp "Bài kiểm tra" bằng cách trộn MCQ và TF của từng chủ đề
    [appDatabase.khoi10, appDatabase.khoi11, appDatabase.khoi12].forEach(khoi => {
        Object.keys(khoi).forEach(topicId => {
            const topic = khoi[topicId];
            if (!topic) return;
            topic.exercises = topic.exercises || {};
            topic.exercises.test = [
                ...(topic.exercises.mcq || []),
                ...(topic.exercises.tf || [])
            ];
        });
    });

    /* ---------------------------------------------------------------------
       2. HẰNG SỐ & TRẠNG THÁI
    --------------------------------------------------------------------- */
    const SECTIONS = {
        khoi10:   { label: 'Lớp 10',     file: 'data_khoi10.js',   varName: 'dataKhoi10' },
        khoi11:   { label: 'Lớp 11',     file: 'data_khoi11.js',   varName: 'dataKhoi11' },
        khoi12:   { label: 'Lớp 12',     file: 'data_khoi12.js',   varName: 'dataKhoi12' },
        mocktest: { label: 'Đề thi thử', file: 'data_mocktest.js', varName: 'dataMocktest' }
    };
    const MODES = {
        mcq:  'Trắc nghiệm nhiều lựa chọn',
        tf:   'Trắc nghiệm Đúng/Sai',
        test: 'Bài kiểm tra tổng hợp'
    };
    const MOCK_MINUTES = 50;
    const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

    const TAB_ACTIVE = 'px-5 py-2 bg-gray-50 text-blue-800 font-bold rounded-md shadow-sm text-sm transition-colors';
    const TAB_IDLE   = 'px-5 py-2 bg-white/20 hover:bg-white/90 hover:text-blue-800 font-semibold rounded-md text-sm transition-colors';

    let currentSection = 'khoi12';
    let currentQuestions = [];
    let currentMeta = null;
    let submitted = false;
    let activeKey = '';          // nút đang được chọn ở sidebar
    let timerId = null;
    let timerStartedAt = 0;
    let timerLimitSec = 0;       // 0 = đếm tiến (không giới hạn)

    /* ---------------------------------------------------------------------
       3. TIỆN ÍCH
    --------------------------------------------------------------------- */
    const $ = (id) => document.getElementById(id);

    function esc(s) {
        return String(s == null ? '' : s)
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }

    function sortedKeys(obj) {
        return Object.keys(obj || {}).sort((a, b) => Number(a) - Number(b));
    }

    function fmtTime(sec) {
        sec = Math.max(0, Math.floor(sec));
        return String(Math.floor(sec / 60)).padStart(2, '0') + ':' + String(sec % 60).padStart(2, '0');
    }

    function fmtScore(n) {
        return String(Number(n.toFixed(2)));
    }

    // Đáp án có thể là số (0-3) hoặc chữ cái ('A'-'D')
    function answerIndex(a) {
        if (typeof a === 'number') return a;
        if (typeof a === 'string') {
            const i = LETTERS.indexOf(a.trim().toUpperCase());
            if (i >= 0) return i;
            if (/^\d+$/.test(a.trim())) return Number(a.trim());
        }
        return -1;
    }

    function isValidQuestion(q) {
        if (!q || typeof q.text !== 'string' || !Array.isArray(q.options) || q.options.length === 0) return false;
        if (q.type === 'mcq') return q.options.length >= 2 && answerIndex(q.answer) >= 0 && answerIndex(q.answer) < q.options.length;
        if (q.type === 'tf') return q.options.every(o => o && typeof o.text === 'string' && typeof o.answer === 'boolean');
        return false;
    }

    function countByType(list) {
        const arr = Array.isArray(list) ? list.filter(isValidQuestion) : [];
        return {
            mcq: arr.filter(q => q.type === 'mcq').length,
            tf: arr.filter(q => q.type === 'tf').length,
            total: arr.length
        };
    }

    /* ---------------------------------------------------------------------
       4. ĐỒNG HỒ
    --------------------------------------------------------------------- */
    function renderTimer(sec) {
        const el = $('timer-text');
        if (el) el.textContent = fmtTime(sec);
    }

    function stopTimer() {
        if (timerId) { clearInterval(timerId); timerId = null; }
    }

    function resetTimerDisplay() {
        stopTimer();
        const box = $('timer-display');
        if (box) box.classList.remove('animate-pulse');
        renderTimer(MOCK_MINUTES * 60);
    }

    function startTimer(limitSec) {
        stopTimer();
        timerLimitSec = limitSec;
        timerStartedAt = Date.now();
        const tick = () => {
            const elapsed = Math.floor((Date.now() - timerStartedAt) / 1000);
            const box = $('timer-display');
            if (timerLimitSec > 0) {
                const left = timerLimitSec - elapsed;
                renderTimer(left);
                if (box) box.classList.toggle('animate-pulse', left <= 300);
                if (left <= 0) {
                    stopTimer();
                    alert('Đã hết giờ làm bài! Hệ thống sẽ tự động nộp bài.');
                    submitTest(true);
                }
            } else {
                renderTimer(elapsed);
            }
        };
        tick();
        timerId = setInterval(tick, 1000);
    }

    /* ---------------------------------------------------------------------
       5. ĐIỀU HƯỚNG MÀN HÌNH & TAB
    --------------------------------------------------------------------- */
    function showScreens(welcome, test, result) {
        $('welcome-screen').classList.toggle('hidden-element', !welcome);
        $('test-screen').classList.toggle('hidden-element', !test);
        $('result-screen').classList.toggle('hidden-element', !result);
    }

    function updateTabs() {
        Object.keys(SECTIONS).forEach(key => {
            const btn = $('tab-' + key);
            if (btn) btn.className = key === currentSection ? TAB_ACTIVE : TAB_IDLE;
        });
    }

    function backToWelcome() {
        currentQuestions = [];
        currentMeta = null;
        submitted = false;
        activeKey = '';
        $('questions-container').innerHTML = '';
        resetTimerDisplay();
        showScreens(true, false, false);
    }

    function inProgress() {
        return currentQuestions.length > 0 && !submitted;
    }

    function selectSection(section) {
        if (!SECTIONS[section]) return;
        if (inProgress() && !confirm('Bạn đang làm dở một bài. Chuyển mục sẽ làm mất bài làm hiện tại. Tiếp tục?')) return;
        currentSection = section;
        updateTabs();
        backToWelcome();
        renderSidebar();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    /* ---------------------------------------------------------------------
       6. SIDEBAR (DANH MỤC)
    --------------------------------------------------------------------- */
    const BTN_BASE = 'w-full text-left px-3 py-2 rounded-lg border text-sm font-medium transition-colors flex items-center justify-between gap-2';
    const BTN_IDLE = 'bg-white border-gray-200 text-gray-700 hover:bg-blue-50 hover:border-blue-300';
    const BTN_ACTIVE = 'bg-blue-600 border-blue-600 text-white shadow';
    const BTN_OFF = 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed';

    function sidebarButton(key, label, hint, enabled, attrs) {
        const cls = !enabled ? BTN_OFF : (key === activeKey ? BTN_ACTIVE : BTN_IDLE);
        return `<button type="button" class="${BTN_BASE} ${cls}" ${enabled ? attrs : 'disabled'}>
                    <span>${esc(label)}</span><span class="text-xs opacity-80 whitespace-nowrap">${esc(hint)}</span>
                </button>`;
    }

    function emptyNotice(section) {
        const info = SECTIONS[section];
        return `<div class="m-2 p-4 bg-amber-50 border border-amber-200 text-amber-800 rounded-xl text-sm leading-relaxed">
                    <b>Chưa có dữ liệu cho mục này.</b><br>
                    Hãy kiểm tra file <code class="font-bold">${esc(info.file)}</code> đã nằm cùng thư mục với index.html
                    và có khai báo <code class="font-bold">const ${esc(info.varName)} = {...}</code>.
                </div>`;
    }

    function renderSidebar() {
        const container = $('sidebar-container');
        const title = $('sidebar-title');
        const keepScroll = container.scrollTop;
        let html = '';

        if (currentSection === 'mocktest') {
            title.textContent = 'Đề thi thử';
            const ids = sortedKeys(appDatabase.mocktest);
            if (ids.length === 0) {
                html = emptyNotice('mocktest');
            } else {
                ids.forEach(id => {
                    const c = countByType(appDatabase.mocktest[id]);
                    const key = 'mocktest|' + id + '|mock';
                    const label = 'Đề thi thử số ' + id;
                    const hint = c.total ? `${c.mcq} TN + ${c.tf} Đ/S` : 'Đang cập nhật';
                    html += `<div class="mb-2">${sidebarButton(key, label, hint, c.total > 0,
                        `data-action="start" data-topic="${esc(id)}" data-mode="mock"`)}</div>`;
                });
            }
        } else {
            title.textContent = SECTIONS[currentSection].label + ' - Chủ đề';
            const data = appDatabase[currentSection];
            const ids = sortedKeys(data);
            if (ids.length === 0) {
                html = emptyNotice(currentSection);
            } else {
                ids.forEach(id => {
                    const topic = data[id];
                    const ex = (topic && topic.exercises) || {};
                    const nMcq = countByType(ex.mcq).total;
                    const nTf = countByType(ex.tf).total;
                    const nTest = countByType(ex.test).total;
                    const btn = (mode, label, n) => sidebarButton(
                        currentSection + '|' + id + '|' + mode, label, n ? n + ' câu' : 'Trống', n > 0,
                        `data-action="start" data-topic="${esc(id)}" data-mode="${mode}"`);
                    html += `<div class="bg-white border border-gray-200 rounded-xl p-3 mb-3 shadow-sm">
                                <div class="text-sm font-bold text-blue-900 mb-2 leading-snug">${esc(topic.title || ('Chủ đề ' + id))}</div>
                                <div class="space-y-1.5">
                                    ${btn('mcq', 'Trắc nghiệm', nMcq)}
                                    ${btn('tf', 'Đúng / Sai', nTf)}
                                    ${btn('test', 'Bài kiểm tra', nTest)}
                                </div>
                            </div>`;
                });
            }
        }
        container.innerHTML = html;
        container.scrollTop = keepScroll;
    }

    /* ---------------------------------------------------------------------
       7. VÀO BÀI & HIỂN THỊ CÂU HỎI
    --------------------------------------------------------------------- */
    function startTest(section, topicId, mode) {
        if (inProgress() && !confirm('Bạn đang làm dở một bài. Mở bài mới sẽ làm mất bài làm hiện tại. Tiếp tục?')) return;

        let list, title, subtitle, limit = 0;
        if (section === 'mocktest') {
            list = appDatabase.mocktest[topicId];
            title = 'Đề thi thử số ' + topicId;
            subtitle = 'Cấu trúc đề thi tốt nghiệp THPT 2026 · Thời gian ' + MOCK_MINUTES + ' phút';
            limit = MOCK_MINUTES * 60;
        } else {
            const topic = appDatabase[section] && appDatabase[section][topicId];
            if (!topic) return;
            list = topic.exercises && topic.exercises[mode];
            title = topic.title || ('Chủ đề ' + topicId);
            subtitle = SECTIONS[section].label + ' · ' + (MODES[mode] || mode);
        }

        const valid = (Array.isArray(list) ? list : []).filter(isValidQuestion);
        if (valid.length === 0) {
            alert('Mục này chưa có câu hỏi hợp lệ.');
            return;
        }

        // Phần I (nhiều lựa chọn) đứng trước Phần II (đúng/sai) - giữ nguyên thứ tự trong mỗi phần
        currentQuestions = [
            ...valid.filter(q => q.type === 'mcq'),
            ...valid.filter(q => q.type === 'tf')
        ];
        currentMeta = { section, topicId, mode, title, limit };
        submitted = false;
        activeKey = section + '|' + topicId + '|' + mode;

        $('current-test-title').textContent = title;
        $('current-test-subtitle').textContent = subtitle;
        renderQuestions();
        renderSidebar();
        $('submit-btn').classList.remove('hidden-element');
        showScreens(false, true, false);
        startTimer(limit);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function partHeading(type) {
        if (type === 'mcq') {
            return `<div class="bg-blue-50 border-l-4 border-blue-600 rounded-r-lg px-4 py-3">
                        <h3 class="font-bold text-blue-900 uppercase text-sm md:text-base">Phần I. Trắc nghiệm nhiều phương án lựa chọn</h3>
                        <p class="text-sm text-gray-600 mt-0.5">Mỗi câu hỏi chỉ chọn một phương án đúng.</p>
                    </div>`;
        }
        return `<div class="bg-blue-50 border-l-4 border-blue-600 rounded-r-lg px-4 py-3">
                    <h3 class="font-bold text-blue-900 uppercase text-sm md:text-base">Phần II. Trắc nghiệm đúng/sai</h3>
                    <p class="text-sm text-gray-600 mt-0.5">Trong mỗi ý a), b), c), d) ở mỗi câu, chọn Đúng hoặc Sai.</p>
                </div>`;
    }

    function renderQuestions() {
        const hasBoth = currentQuestions.some(q => q.type === 'mcq') && currentQuestions.some(q => q.type === 'tf');
        let html = '';
        let lastType = null, mcqNo = 0, tfNo = 0;

        currentQuestions.forEach((q, i) => {
            if (hasBoth && q.type !== lastType) html += partHeading(q.type);
            lastType = q.type;

            if (q.type === 'mcq') {
                mcqNo++;
                html += `<div id="q-${i}" class="question-box bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                    <p class="font-semibold text-gray-900 mb-4 leading-relaxed"><span class="text-blue-700 font-bold">Câu ${mcqNo}.</span> ${esc(q.text)}</p>
                    <div>
                        ${q.options.map((opt, k) => `
                        <label class="option-label flex items-start gap-3 p-3 mb-2 border border-gray-200 rounded-lg bg-white" data-idx="${k}">
                            <input type="radio" name="q${i}" value="${k}" class="mt-1 accent-blue-600">
                            <span class="text-gray-700"><b>${LETTERS[k]}.</b> ${esc(opt)}</span>
                        </label>`).join('')}
                    </div>
                </div>`;
            } else {
                tfNo++;
                const hasPrefix = /^\s*Câu\s*\d+/i.test(q.text);
                const prefix = hasPrefix ? '' : `<span class="text-blue-700 font-bold">Câu ${tfNo}.</span> `;
                html += `<div id="q-${i}" class="question-box bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                    <p class="font-semibold text-gray-900 mb-4 leading-relaxed">${prefix}${esc(q.text)}</p>
                    <div>
                        ${q.options.map((st, j) => `
                        <div class="tf-row border border-gray-200 rounded-lg p-3 mb-2 bg-white">
                            <p class="text-gray-800 mb-2 leading-relaxed">${esc(st.text)}</p>
                            <div class="flex gap-2">
                                <label class="option-label flex items-center gap-2 px-4 py-1.5 border border-gray-200 rounded-lg bg-white" data-stmt="${j}" data-val="1">
                                    <input type="radio" name="q${i}_${j}" value="1" class="accent-blue-600"><span>Đúng</span>
                                </label>
                                <label class="option-label flex items-center gap-2 px-4 py-1.5 border border-gray-200 rounded-lg bg-white" data-stmt="${j}" data-val="0">
                                    <input type="radio" name="q${i}_${j}" value="0" class="accent-blue-600"><span>Sai</span>
                                </label>
                            </div>
                        </div>`).join('')}
                    </div>
                </div>`;
            }
        });
        $('questions-container').innerHTML = html;
    }

    /* ---------------------------------------------------------------------
       8. NỘP BÀI & CHẤM ĐIỂM
       Phần I: 0,25 điểm/câu. Phần II: đúng 1 ý = 0,1 | 2 ý = 0,25 | 3 ý = 0,5 | 4 ý = 1,0
       Điểm hiển thị quy về thang 10 (đề đủ 24 câu TN + 4 câu Đ/S = đúng 10 điểm).
    --------------------------------------------------------------------- */
    function tfPoints(correct, total) {
        if (total === 4) return [0, 0.1, 0.25, 0.5, 1][correct];
        return total > 0 ? correct / total : 0;
    }

    function markLabel(label, isCorrect, isChosen) {
        const span = label.querySelector('span');
        if (isCorrect) {
            label.classList.add('correct-ans-box');
            if (span) span.classList.add('correct-ans-text');
        } else if (isChosen) {
            label.classList.add('wrong-ans-box');
            if (span) span.classList.add('wrong-ans-text');
        }
    }

    function countUnanswered() {
        let n = 0;
        currentQuestions.forEach((q, i) => {
            if (q.type === 'mcq') {
                if (!document.querySelector(`input[name="q${i}"]:checked`)) n++;
            } else {
                q.options.forEach((_, j) => {
                    if (!document.querySelector(`input[name="q${i}_${j}"]:checked`)) n++;
                });
            }
        });
        return n;
    }

    function submitTest(force) {
        if (submitted || currentQuestions.length === 0) return;

        const unanswered = countUnanswered();
        if (force !== true && unanswered > 0 &&
            !confirm(`Bạn còn ${unanswered} mục chưa trả lời. Vẫn nộp bài?`)) return;

        submitted = true;
        const elapsed = Math.floor((Date.now() - timerStartedAt) / 1000);
        stopTimer();

        let mcqTotal = 0, mcqRight = 0;
        let tfTotal = 0, tfFull = 0, stmtTotal = 0, stmtRight = 0;
        let points = 0, maxPoints = 0;

        currentQuestions.forEach((q, i) => {
            const box = $('q-' + i);
            if (!box) return;
            box.querySelectorAll('input').forEach(inp => { inp.disabled = true; });

            if (q.type === 'mcq') {
                mcqTotal++; maxPoints += 0.25;
                const right = answerIndex(q.answer);
                const chosenEl = document.querySelector(`input[name="q${i}"]:checked`);
                const chosen = chosenEl ? Number(chosenEl.value) : -1;
                if (chosen === right) { mcqRight++; points += 0.25; }
                box.querySelectorAll('.option-label').forEach(label => {
                    const idx = Number(label.dataset.idx);
                    markLabel(label, idx === right, idx === chosen);
                });
            } else {
                tfTotal++; maxPoints += 1;
                let correctCount = 0;
                q.options.forEach((st, j) => {
                    stmtTotal++;
                    const chosenEl = document.querySelector(`input[name="q${i}_${j}"]:checked`);
                    const chosen = chosenEl ? chosenEl.value === '1' : null;
                    if (chosen === st.answer) { correctCount++; stmtRight++; }
                    box.querySelectorAll(`.option-label[data-stmt="${j}"]`).forEach(label => {
                        const val = label.dataset.val === '1';
                        markLabel(label, val === st.answer, chosen !== null && val === chosen);
                    });
                });
                if (correctCount === q.options.length) tfFull++;
                points += tfPoints(correctCount, q.options.length);
            }
        });

        const score10 = maxPoints > 0 ? (points / maxPoints) * 10 : 0;
        $('score-display').textContent = fmtScore(score10) + '/10';

        const parts = [];
        if (mcqTotal) parts.push(`Phần I: ${mcqRight}/${mcqTotal} câu đúng`);
        if (tfTotal) parts.push(`Phần II: ${stmtRight}/${stmtTotal} ý đúng (${tfFull}/${tfTotal} câu đúng trọn vẹn)`);
        parts.push(`Thời gian: ${fmtTime(elapsed)}`);
        const detail = $('score-detail');
        if (detail) detail.textContent = parts.join('  •  ');

        $('submit-btn').classList.add('hidden-element');
        showScreens(false, true, true);
        $('result-screen').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function continueAfterResult() {
        backToWelcome();
        renderSidebar();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    /* ---------------------------------------------------------------------
       9. GẮN SỰ KIỆN & KHỞI TẠO
    --------------------------------------------------------------------- */
    $('sidebar-container').addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-action="start"]');
        if (!btn || btn.disabled) return;
        startTest(currentSection, btn.dataset.topic, btn.dataset.mode);
    });

    // Các hàm được gọi trực tiếp từ thuộc tính onclick trong index.html
    window.selectSection = selectSection;
    window.submitTest = submitTest;
    window.continueAfterResult = continueAfterResult;

    // Cảnh báo sớm trong Console nếu thiếu file dữ liệu
    Object.keys(SECTIONS).forEach(key => {
        if (Object.keys(appDatabase[key]).length === 0) {
            console.warn('[Lịch sử] Chưa có dữ liệu cho "' + SECTIONS[key].label + '" - kiểm tra file ' + SECTIONS[key].file);
        }
    });

    updateTabs();
    renderSidebar();
    resetTimerDisplay();
})();
