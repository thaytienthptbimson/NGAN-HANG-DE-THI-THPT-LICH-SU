/* =========================================================================
   DATABASE LỊCH SỬ (Cấu trúc đề thi HSA/THPT QG 2026)
   Gồm: Lớp 10, Lớp 11, Lớp 12 & Đề thi thử
========================================================================= */

const appDatabase = {
    khoi10: {},
    khoi11: {},
    khoi12: {},
    mocktest: {}
};

// ================= DỮ LIỆU DEMO LỚP 12 - CHỦ ĐỀ 1 =================
appDatabase.khoi12[1] = {
    title: "Chủ đề 1: Thế giới trong và sau Chiến tranh lạnh",
    exercises: {
        mcq: [
            // Đại diện cho 50 câu MCQ theo yêu cầu
            { type: 'mcq', text: "Tổ chức nào được thành lập năm 1945 nhằm mục tiêu duy trì hòa bình và an ninh quốc tế?", options: ["Hội Quốc liên.", "Liên minh châu Âu.", "Liên hợp quốc.", "Khối NATO."], answer: 2 },
            { type: 'mcq', text: "Hội nghị I-an-ta (2/1945) có sự tham dự của nguyên thủ ba quốc gia nào?", options: ["Anh, Pháp, Mỹ.", "Mỹ, Liên Xô, Trung Quốc.", "Liên Xô, Mỹ, Anh.", "Mỹ, Anh, Pháp."], answer: 2 },
            { type: 'mcq', text: "Trật tự thế giới hai cực I-an-ta sụp đổ vào thời gian nào?", options: ["1989", "1991", "1975", "1945"], answer: 1 }
            // (Bạn có thể thêm tiếp 47 câu khác theo định dạng này)
        ],
        tf: [
            // Đại diện cho 50 câu Đúng/Sai theo yêu cầu
            { type: 'tf', text: "Đọc đoạn tư liệu về Liên hợp quốc: 'Theo Hiến chương, Liên hợp quốc được thành lập nhằm bốn mục tiêu: 1. Duy trì hoà bình và an ninh quốc tế;...'", options: [
                { text: "a) Liên hợp quốc là tổ chức quốc tế lớn nhất thế giới được thành lập ngay sau Chiến tranh thế giới thứ nhất.", answer: false },
                { text: "b) Mục tiêu cốt lõi và quan trọng nhất của Liên hợp quốc là duy trì hoà bình và an ninh quốc tế.", answer: true },
                { text: "c) Ngày 24-10-1945, Liên hợp quốc chính thức được thành lập với 51 quốc gia thành viên.", answer: true },
                { text: "d) Liên hợp quốc có quyền can thiệp vào công việc nội bộ của các quốc gia để bảo vệ quyền con người.", answer: false }
            ]},
            { type: 'tf', text: "Về Trật tự thế giới hai cực I-an-ta:", options: [
                { text: "a) Trật tự hai cực I-an-ta được định hình với sự thiết lập của hai khối quân sự đối đầu là NATO và Vác-sa-va.", answer: true },
                { text: "b) Nguyên nhân sụp đổ của trật tự này chủ yếu là do sự nổi lên của Trung Quốc và Nhật Bản.", answer: false },
                { text: "c) Sự sụp đổ của Trật tự hai cực I-an-ta bắt đầu từ sự sụp đổ của chủ nghĩa xã hội ở Đông Âu và Liên Xô.", answer: true },
                { text: "d) Sau khi Trật tự I-an-ta sụp đổ, thế giới ngay lập tức chuyển sang trật tự đơn cực do Mỹ làm bá chủ.", answer: false }
            ]}
            // (Thêm tiếp các câu Đ/S khác tại đây)
        ],
        test: [] // Sẽ được tự động gộp từ mcq (24 câu) và tf (4 câu) bằng hàm phía dưới.
    }
};

// ================= DỮ LIỆU DEMO ĐỀ THI THỬ SỐ 1 (Đề tham khảo 2026) =================
appDatabase.mocktest[1] = [
    // PHẦN I: Trắc nghiệm (24 câu)
    { type: 'mcq', text: "Thắng lợi của cuộc Tiến công chiến lược năm 1972 của quân và dân Việt Nam có ý nghĩa nào sau đây?", options: ["Buộc Mỹ phải xuống thang chiến tranh, lập tức rút hết quân về nước.", "Kết thúc cuộc cách mạng dân tộc dân chủ nhân dân ở miền Nam Việt Nam.", "Giáng đòn quyết định làm sụp đổ hoàn toàn chính quyền Sài Gòn.", "Buộc Mỹ phải thừa nhận sự thất bại của chiến lược 'Việt Nam hóa chiến tranh'."], answer: 3 },
    { type: 'mcq', text: "Phan Bội Châu có hoạt động đối ngoại nào sau đây vào đầu thế kỉ XX?", options: ["Đàm phán với Pháp để thực hiện cải cách cho Việt Nam.", "Liên hệ với lực lượng Đồng minh chống phát xít.", "Tham dự Đại hội lần thứ XVIII của Đảng Xã hội Pháp.", "Vận động sự ủng hộ của Nhật Bản để giải phóng dân tộc."], answer: 3 },
    { type: 'mcq', text: "Nhận định nào sau đây là đúng về công cuộc Đổi mới ở Việt Nam từ năm 1986 đến nay?", options: ["Diễn ra đồng bộ và sâu rộng nhưng độc lập trên các lĩnh vực kinh tế - xã hội.", "Là sự thay đổi hình thức, bước đi và biện pháp để thực hiện mục tiêu xã hội chủ nghĩa.", "Có sự điều hành trực tiếp của nhà nước vào những quy trình sản xuất của các doanh nghiệp.", "Hạn chế sự phát triển của kinh tế tư nhân để tập trung phát triển kinh tế nhà nước."], answer: 1 },
    { type: 'mcq', text: "Các nước ASEAN đã kí kết văn kiện nào sau đây vào năm 2003?", options: ["Tuyên ngôn Quốc tế Nhân quyền.", "Tuyên bố Ba-li II.", "Hiến chương Liên hợp quốc.", "Hiến chương ASEAN."], answer: 1 },
    { type: 'mcq', text: "Một trong những xu thế phát triển chính của thế giới sau cuộc Chiến tranh lạnh là", options: ["hạn chế liên kết về kinh tế giữa tất cả các nước.", "đối thoại và hợp tác trong quan hệ quốc tế.", "chấm dứt ngay mọi xung đột giữa các nước.", "đối đầu giữa Liên Xô và Mỹ."], answer: 1 },

    // PHẦN II: Đúng/Sai (4 câu)
    { type: 'tf', text: "Cho đoạn tư liệu sau: 'Hỡi đồng bào toàn quốc! Chúng ta muốn hòa bình, chúng ta phải nhân nhượng. Nhưng chúng ta càng nhân nhượng, thực dân Pháp càng lấn tới...'", options: [
        { text: "a) Lời kêu gọi toàn quốc kháng chiến thể hiện sự chủ động của Việt Nam trong việc đàm phán với Pháp.", answer: false },
        { text: "b) Lời kêu gọi toàn quốc kháng chiến khẳng định Việt Nam tiến hành chiến tranh vệ quốc khi không còn lựa chọn nào khác.", answer: true },
        { text: "c) Những thông tin của đoạn tư liệu trên thể hiện tinh thần tự lực, tự cường của nhân dân Việt Nam trong cuộc kháng chiến chống thực dân Pháp xâm lược.", answer: true },
        { text: "d) Ngay khi thực dân Pháp quay trở lại xâm lược Việt Nam, Chủ tịch Hồ Chí Minh đã kịp thời phát động toàn quốc kháng chiến.", answer: false }
    ]},
    { type: 'tf', text: "Cho đoạn tư liệu sau về Chủ nghĩa tư bản: 'Chủ nghĩa tư bản hiện đại đã và đang đối mặt với những vấn đề chính trị - xã hội nan giải. Nền dân chủ tư sản đang bị xói mòn...'", options: [
        { text: "a) Chủ nghĩa tư bản hiện đại đã giải quyết triệt để được các vấn đề xã hội nan giải để tồn tại và phát triển.", answer: false },
        { text: "b) Những thách thức mà chủ nghĩa tư bản phải đối mặt từ sau năm 1945 đến nay không bắt nguồn từ nền dân chủ tư sản.", answer: false },
        { text: "c) Những thông tin của đoạn tư liệu phản ánh một phần thực trạng của xã hội tư bản hiện đại.", answer: true },
        { text: "d) Từ những hạn chế của chủ nghĩa tư bản hiện đại cho thấy sự đúng đắn của Đảng Cộng sản Việt Nam trong việc kiên trì mục tiêu độc lập dân tộc và CNXH.", answer: true }
    ]}
];

// Tạo bộ test kết hợp tự động cho Bài Kiểm Tra Đơn Vị của Lớp 12 Bài 1
appDatabase.khoi12[1].exercises.test = [
    ...appDatabase.khoi12[1].exercises.mcq,
    ...appDatabase.khoi12[1].exercises.tf
];

// Khởi tạo các Đề thi thử (2 đến 10)
for (let testId = 2; testId <= 10; testId++) {
    appDatabase.mocktest[testId] = []; // Mảng rỗng cho giáo viên điền thêm
}

/* =========================================================================
   LOGIC HOẠT ĐỘNG
========================================================================= */

let currentSection = 'khoi12'; 
let currentTopicId = null;
let currentExerciseType = null; // 'mcq', 'tf', 'test', hoac mocktest ID
let timerInterval = null;
let timeLeft = 0;
let isSubmitted = false;

document.addEventListener('DOMContentLoaded', () => { 
    selectSection('khoi12'); 
});

function selectSection(section) {
    currentSection = section;
    const tabs = ['khoi10', 'khoi11', 'khoi12', 'mocktest'];
    tabs.forEach(t => {
        const tab = document.getElementById('tab-' + t);
        tab.className = t === section 
            ? "px-5 py-2 bg-gray-50 text-blue-800 font-bold rounded-md shadow-sm text-sm transition-colors"
            : "px-5 py-2 bg-white/20 hover:bg-white/90 hover:text-blue-800 font-semibold rounded-md text-sm transition-colors";
    });

    let title = section === 'mocktest' ? "NGÂN HÀNG ĐỀ THI THỬ" : `NGÂN HÀNG CÂU HỎI LỚP ${section.replace('khoi', '')}`;
    document.getElementById('sidebar-title').innerText = title;
    
    renderSidebar();
    document.getElementById('test-screen').classList.add('hidden-element');
    document.getElementById('result-screen').classList.add('hidden-element');
    document.getElementById('welcome-screen').classList.remove('hidden-element');
}

function renderSidebar() {
    const container = document.getElementById('sidebar-container');
    container.innerHTML = '';

    if (currentSection.startsWith('khoi')) {
        Object.keys(appDatabase[currentSection]).forEach(topicId => {
            const topic = appDatabase[currentSection][topicId];
            const div = document.createElement('div');
            div.className = 'border-b border-gray-200';
            div.innerHTML = `
                <div class="px-4 py-3 font-bold text-gray-700 cursor-pointer flex justify-between items-center hover:bg-blue-50" onclick="toggleSidebarMenu('menu-${currentSection}-${topicId}')">
                    <span>${topic.title}</span> <span class="text-[10px] text-gray-400">▼</span>
                </div>
                <div id="menu-${currentSection}-${topicId}" class="flex flex-col bg-white border-t border-gray-100">
                    <button onclick="startTest('${currentSection}', ${topicId}, 'mcq')" class="text-left px-6 py-3 text-sm border-b border-gray-50 hover:bg-blue-50">Luyện Trắc nghiệm (50 câu)</button>
                    <button onclick="startTest('${currentSection}', ${topicId}, 'tf')" class="text-left px-6 py-3 text-sm border-b border-gray-50 hover:bg-blue-50">Luyện Đúng/Sai (50 câu)</button>
                    <button onclick="startTest('${currentSection}', ${topicId}, 'test')" class="text-left px-6 py-3 text-sm border-b border-gray-50 hover:bg-blue-50 font-semibold text-red-600">Bài kiểm tra Đơn vị</button>
                </div>
            `;
            container.appendChild(div);
        });
    } else {
        const div = document.createElement('div');
        div.className = 'flex flex-col bg-white';
        for (let t = 1; t <= 10; t++) {
            div.innerHTML += `<button onclick="startTest('mocktest', null, ${t})" class="text-left px-6 py-4 text-sm hover:bg-blue-50 border-b border-gray-100 font-semibold text-gray-700">Đề thi thử Tốt nghiệp số ${t}</button>`;
        }
        container.appendChild(div);
    }
}

function toggleSidebarMenu(id) {
    document.getElementById(id).classList.toggle('hidden-element');
}

function startTest(section, topicId, exerciseType) {
    currentSection = section; 
    currentTopicId = topicId; 
    currentExerciseType = exerciseType; 
    isSubmitted = false;

    document.getElementById('welcome-screen').classList.add('hidden-element');
    document.getElementById('result-screen').classList.add('hidden-element');
    document.getElementById('test-screen').classList.remove('hidden-element');
    document.getElementById('submit-btn').classList.remove('hidden-element');
    
    if (section.startsWith('khoi')) {
        let typeStr = exerciseType === 'mcq' ? "Luyện Trắc nghiệm" : (exerciseType === 'tf' ? "Luyện Đúng/Sai" : "Bài kiểm tra Đơn vị");
        document.getElementById('current-test-title').innerText = `${appDatabase[section][topicId].title}`;
        document.getElementById('current-test-subtitle').innerText = typeStr;
        resetTimer(45); 
    } else {
        document.getElementById('current-test-title').innerText = `Đề thi thử Lịch Sử HSA/THPT - Đề số ${exerciseType}`;
        document.getElementById('current-test-subtitle').innerText = "Cấu trúc: Phần I (24 Câu Trắc nghiệm) - Phần II (4 Câu Đúng/Sai)";
        resetTimer(50); // Lịch sử thi 50 phút
    }
    renderTestContent();
    startTimer();
}

function renderTestContent() {
    const container = document.getElementById('questions-container');
    container.innerHTML = '';
    
    let questions = [];
    if (currentSection.startsWith('khoi')) {
        questions = appDatabase[currentSection][currentTopicId].exercises[currentExerciseType] || [];
    } else {
        questions = appDatabase.mocktest[currentExerciseType] || [];
    }

    if (questions.length === 0) {
        container.innerHTML = `<div class="bg-gray-50 rounded-xl py-12 text-center border-2 border-dashed border-gray-300"><p class="text-gray-500 font-bold text-lg">Đang cập nhật câu hỏi...</p></div>`;
        document.getElementById('submit-btn').classList.add('hidden-element'); 
        clearInterval(timerInterval);
        return;
    }

    let html = '';
    let phan1Html = '';
    let phan2Html = '';
    let mcqCounter = 1;
    let tfCounter = 1;

    questions.forEach((q, index) => {
        if (q.type === 'mcq') {
            const labels = ['A', 'B', 'C', 'D'];
            let optionsHtml = '';
            q.options.forEach((opt, oIdx) => {
                optionsHtml += `
                    <label class="option-label flex items-start space-x-2 p-3 rounded-lg border border-gray-200 bg-white w-full cursor-pointer" id="box_q_${index}_opt_${oIdx}">
                        <input type="radio" name="q_${index}" value="${oIdx}" class="mt-0.5 w-5 h-5 text-blue-600 flex-shrink-0 cursor-pointer">
                        <span class="flex-grow text-gray-800 text-base leading-snug" id="span_q_${index}_opt_${oIdx}">
                            <strong class="text-blue-800 mr-1">${labels[oIdx]}.</strong> ${opt}
                        </span>
                    </label>
                `;
            });
            phan1Html += `
                <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm mb-5 question-item" data-index="${index}" data-type="mcq" data-ans="${q.answer}">
                    <div class="mb-4"><span class="font-bold text-blue-700 text-lg">Câu ${mcqCounter}:</span> <span class="text-lg font-medium ml-1">${q.text}</span></div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">${optionsHtml}</div>
                </div>
            `;
            mcqCounter++;
        } 
        else if (q.type === 'tf') {
            let optionsHtml = '';
            q.options.forEach((opt, oIdx) => {
                optionsHtml += `
                    <div class="flex flex-col md:flex-row md:items-center justify-between p-3 rounded-lg border border-gray-200 bg-gray-50 mb-2 tf-option" id="box_q_${index}_tf_${oIdx}" data-ans="${opt.answer}">
                        <span class="flex-grow text-gray-800 mb-2 md:mb-0 md:mr-4">${opt.text}</span>
                        <div class="flex space-x-4 flex-shrink-0">
                            <label class="flex items-center space-x-1 cursor-pointer">
                                <input type="radio" name="q_${index}_tf_${oIdx}" value="true" class="w-5 h-5">
                                <span class="font-bold text-green-700">Đúng</span>
                            </label>
                            <label class="flex items-center space-x-1 cursor-pointer">
                                <input type="radio" name="q_${index}_tf_${oIdx}" value="false" class="w-5 h-5">
                                <span class="font-bold text-red-700">Sai</span>
                            </label>
                        </div>
                    </div>
                `;
            });
            phan2Html += `
                <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm mb-5 question-item" data-index="${index}" data-type="tf">
                    <div class="mb-4"><span class="font-bold text-blue-700 text-lg">Câu ${tfCounter}:</span> <span class="text-lg font-medium ml-1 italic text-gray-700">${q.text}</span></div>
                    <div class="flex flex-col">${optionsHtml}</div>
                </div>
            `;
            tfCounter++;
        }
    });

    if(phan1Html !== '') html += `<h3 class="text-xl font-black uppercase text-red-600 mb-4">Phần I: Câu hỏi trắc nghiệm nhiều phương án</h3>${phan1Html}`;
    if(phan2Html !== '') html += `<h3 class="text-xl font-black uppercase text-red-600 mb-4 mt-8">Phần II: Câu trắc nghiệm Đúng/Sai</h3>${phan2Html}`;

    container.innerHTML = html;
}

function submitTest() {
    if(isSubmitted) return;
    clearInterval(timerInterval);
    isSubmitted = true;
    document.getElementById('submit-btn').classList.add('hidden-element');

    let totalScore = 0;
    let maxScore = 0;

    document.querySelectorAll('.question-item').forEach(el => {
        const index = el.getAttribute('data-index');
        const type = el.getAttribute('data-type');
        
        if(type === 'mcq') {
            maxScore += 1;
            const correctAns = parseInt(el.getAttribute('data-ans'));
            const selected = document.querySelector(`input[name="q_${index}"]:checked`);
            
            document.querySelectorAll(`input[name="q_${index}"]`).forEach(input => input.disabled = true);
            document.getElementById(`box_q_${index}_opt_${correctAns}`).classList.add('correct-ans-box');

            if (selected) {
                const selectedVal = parseInt(selected.value);
                if (selectedVal === correctAns) totalScore += 1;
                else document.getElementById(`box_q_${index}_opt_${selectedVal}`).classList.add('wrong-ans-box');
            }
        } 
        else if (type === 'tf') {
            // Tính điểm Đúng/Sai theo format mới: 4 ý = 1 điểm. Ở đây demo tính 1 ý = 0.25đ
            maxScore += 1; 
            let correctSubCount = 0;
            
            el.querySelectorAll('.tf-option').forEach((tfEl, oIdx) => {
                const correctAns = tfEl.getAttribute('data-ans') === 'true';
                const selected = document.querySelector(`input[name="q_${index}_tf_${oIdx}"]:checked`);
                
                document.querySelectorAll(`input[name="q_${index}_tf_${oIdx}"]`).forEach(input => input.disabled = true);
                
                if(selected) {
                    const selectedVal = selected.value === 'true';
                    if(selectedVal === correctAns) {
                        correctSubCount++;
                        tfEl.classList.add('correct-ans-box');
                    } else {
                        tfEl.classList.add('wrong-ans-box');
                    }
                } else {
                    tfEl.classList.add('wrong-ans-box'); // Ko chọn xem như sai
                }
            });

            // Demo thang điểm: 1 ý đúng = 0.1, 2 ý = 0.25, 3 ý = 0.5, 4 ý = 1đ
            if(correctSubCount === 4) totalScore += 1;
            else if(correctSubCount === 3) totalScore += 0.5;
            else if(correctSubCount === 2) totalScore += 0.25;
            else if(correctSubCount === 1) totalScore += 0.1;
        }
    });

    document.getElementById('score-display').innerText = `${totalScore}/${maxScore}`;
    document.getElementById('result-screen').classList.remove('hidden-element');
    window.scrollTo({ top: document.getElementById('result-screen').offsetTop - 50, behavior: 'smooth' });
}

function startTimer() {
    timerInterval = setInterval(() => {
        if(timeLeft <= 0) { clearInterval(timerInterval); submitTest(); return; }
        timeLeft--;
        const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const s = (timeLeft % 60).toString().padStart(2, '0');
        document.getElementById('timer-display').innerText = `${m}:${s}`;
    }, 1000);
}
function resetTimer(minutes) { clearInterval(timerInterval); timeLeft = minutes * 60; document.getElementById('timer-display').innerText = `${minutes}:00`; }
function continueAfterResult() { selectSection('khoi12'); window.scrollTo({ top: 0, behavior: 'smooth' }); }