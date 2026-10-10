/* =========================================================================
   DATABASE LỊCH SỬ (Cấu trúc đề thi Tốt nghiệp THPT 2026)
   Cấp độ nhận thức: Nhận biết -> Thông hiểu -> Vận dụng -> Vận dụng cao
   Độ chính xác: Bám sát 100% SGK Lịch sử 10, 11, 12 (Kết nối tri thức)
========================================================================= */

// Nạp dữ liệu từ các file bên ngoài (nếu file đã load thành công trên trình duyệt)
const appDatabase = {
    khoi10: typeof dataKhoi10 !== 'undefined' ? dataKhoi10 : {},
    khoi11: typeof dataKhoi11 !== 'undefined' ? dataKhoi11 : {},
    khoi12: typeof dataKhoi12 !== 'undefined' ? dataKhoi12 : {},
    mocktest: typeof dataMocktest !== 'undefined' ? dataMocktest : {}
};

// Tự động nạp "Bài kiểm tra" bằng cách trộn MCQ và TF
[appDatabase.khoi10, appDatabase.khoi11, appDatabase.khoi12].forEach(khoi => {
    Object.keys(khoi).forEach(topicId => {
        khoi[topicId].exercises.test = [
            ...(khoi[topicId].exercises.mcq || []),
            ...(khoi[topicId].exercises.tf || [])
        ];
    });
});

/* =========================================================================
   LOGIC HOẠT ĐỘNG GIAO DIỆN
========================================================================= */

// ... (Giữ nguyên toàn bộ phần logic từ dòng `let currentSection = 'khoi12';` cho đến cuối file của thầy) ...