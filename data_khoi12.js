/* =========================================================================
   DỮ LIỆU LỊCH SỬ KHỐI 12 (CẤU TRÚC 10 BÀI TEST)
   Bản quyền thuộc về số ĐT: 0943.930.787
========================================================================= */

const dataKhoi12 = {};

// =========================================================================
// DỮ LIỆU CÂU HỎI CHỦ ĐỀ 1: THẾ GIỚI SAU CHIẾN TRANH LẠNH & ASEAN
// =========================================================================

// --- MCQ CHỦ ĐỀ 1 ---
const cd1_mcq_test1 = [
    { type: 'mcq', text: "Câu 1. Hội nghị I-an-ta (tháng 2/1945) có sự tham gia của nguyên thủ 3 cường quốc nào?", options: ["Anh, Pháp, Mỹ.", "Liên Xô, Mỹ, Anh.", "Liên Xô, Mỹ, Pháp.", "Mỹ, Anh, Trung Quốc."], answer: 1 },
    { type: 'mcq', text: "Câu 2. Theo quyết định của Hội nghị I-an-ta, khu vực nào thuộc phạm vi ảnh hưởng của Liên Xô?", options: ["Tây Âu.", "Đông Nam Á.", "Đông Âu.", "Tây Đức."], answer: 2 },
    { type: 'mcq', text: "Câu 3. Tổ chức Liên hợp quốc chính thức được thành lập vào ngày tháng năm nào?", options: ["24/10/1945.", "25/04/1945.", "26/06/1945.", "02/09/1945."], answer: 0 },
    { type: 'mcq', text: "Câu 4. Cơ quan nào của Liên hợp quốc chịu trách nhiệm chính trong việc duy trì hòa bình và an ninh quốc tế?", options: ["Đại hội đồng.", "Hội đồng Bảo an.", "Ban Thư kí.", "Hội đồng Quản thác."], answer: 1 },
    { type: 'mcq', text: "Câu 5. Đặc trưng lớn nhất của trật tự thế giới được hình thành sau Chiến tranh thế giới thứ hai là gì?", options: ["Sự thống trị tuyệt đối của Mỹ.", "Thế giới chia thành hai phe TBCN và XHCN do Mỹ và Liên Xô đứng đầu.", "Sự hình thành thế giới đa cực.", "Sự ra đời của các khối liên minh kinh tế toàn cầu."], answer: 1 },
    { type: 'mcq', text: "Câu 6. Năm cường quốc có quyền phủ quyết (Veto) tại Hội đồng Bảo an Liên hợp quốc bao gồm:", options: ["Mỹ, Anh, Pháp, Đức, Nhật.", "Liên Xô (Nga), Mỹ, Anh, Pháp, Trung Quốc.", "Nga, Mỹ, Nhật, Ấn Độ, Trung Quốc.", "Mỹ, Anh, Pháp, I-ta-li-a, Trung Quốc."], answer: 1 },
    { type: 'mcq', text: "Câu 7. Sự kiện nào đánh dấu sự sụp đổ của Trật tự thế giới hai cực I-an-ta?", options: ["Hiệp định Giơ-ne-vơ (1954).", "Chiến tranh Việt Nam kết thúc (1975).", "Chế độ XHCN ở Liên Xô và Đông Âu sụp đổ (1989-1991).", "Chiến tranh Lạnh kết thúc (1989)."], answer: 2 },
    { type: 'mcq', text: "Câu 8. Hiệp hội các quốc gia Đông Nam Á (ASEAN) được thành lập vào năm 1967 tại đâu?", options: ["Gia-các-ta.", "Băng Cốc.", "Ma-ni-la.", "Cua-la Lăm-pơ."], answer: 1 },
    { type: 'mcq', text: "Câu 9. Việt Nam chính thức gia nhập ASEAN vào năm nào?", options: ["1992.", "1995.", "1997.", "1999."], answer: 1 },
    { type: 'mcq', text: "Câu 10. Sự kiện nào đánh dấu ASEAN bao gồm trọn vẹn 10 quốc gia Đông Nam Á?", options: ["Việt Nam gia nhập (1995).", "Lào và Miến Điện gia nhập (1997).", "Cam-pu-chia gia nhập (1999).", "Đông Ti-mo trở thành quan sát viên."], answer: 2 }
];

const cd1_mcq_test2 = [
    { type: 'mcq', text: "Câu 1. Sau khi Chiến tranh lạnh kết thúc, trật tự thế giới đang định hình theo xu hướng nào?", options: ["Trật tự đơn cực.", "Trật tự đa cực, nhiều trung tâm.", "Trật tự hai cực kiểu mới.", "Chủ nghĩa đa phương khu vực."], answer: 1 },
    { type: 'mcq', text: "Câu 2. Hiện tượng nào nổi lên như một xu thế khách quan, chi phối nền kinh tế toàn cầu từ sau Chiến tranh lạnh?", options: ["Quốc hữu hóa nền kinh tế.", "Toàn cầu hóa kinh tế.", "Phân lập các thị trường.", "Chủ nghĩa bảo hộ mậu dịch tuyệt đối."], answer: 1 },
    { type: 'mcq', text: "Câu 3. Để thích ứng với xu thế của thế giới sau Chiến tranh lạnh, hầu hết các quốc gia đều lấy trọng tâm là lĩnh vực nào?", options: ["Quân sự.", "Chính trị.", "Kinh tế.", "Văn hóa."], answer: 2 },
    { type: 'mcq', text: "Câu 4. Sức mạnh tổng hợp của một quốc gia trong thế kỉ XXI được đánh giá dựa trên yếu tố cốt lõi nào?", options: ["Sức mạnh quân sự.", "Quy mô dân số.", "Sức mạnh kinh tế, khoa học - công nghệ.", "Diện tích lãnh thổ."], answer: 2 },
    { type: 'mcq', text: "Câu 5. Cộng đồng ASEAN (AC) chính thức được thành lập vào ngày tháng năm nào?", options: ["31/12/2015.", "8/8/2007.", "1/1/2000.", "28/7/1995."], answer: 0 },
    { type: 'mcq', text: "Câu 6. Cộng đồng ASEAN được xây dựng dựa trên bao nhiêu trụ cột chính?", options: ["2 trụ cột.", "3 trụ cột.", "4 trụ cột.", "5 trụ cột."], answer: 1 },
    { type: 'mcq', text: "Câu 7. Mục tiêu chính của Cộng đồng Kinh tế ASEAN (AEC) là gì?", options: ["Xóa bỏ hoàn toàn đồng nội tệ.", "Tạo ra một thị trường chung và cơ sở sản xuất thống nhất.", "Thành lập một ngân hàng trung ương duy nhất.", "Xây dựng các tập đoàn kinh tế độc quyền."], answer: 1 },
    { type: 'mcq', text: "Câu 8. Khẩu hiệu (Motto) của ASEAN là gì?", options: ["Một Tầm nhìn, Một Bản sắc, Một Cộng đồng.", "Hòa bình, Độc lập, Tự do.", "Đoàn kết là sức mạnh.", "Đa dạng trong thống nhất."], answer: 0 },
    { type: 'mcq', text: "Câu 9. Đâu KHÔNG phải là một trụ cột của Cộng đồng ASEAN?", options: ["Cộng đồng Chính trị - An ninh (APSC).", "Cộng đồng Kinh tế (AEC).", "Cộng đồng Văn hóa - Xã hội (ASCC).", "Cộng đồng Quân sự - Phòng thủ (AMDC)."], answer: 3 },
    { type: 'mcq', text: "Câu 10. Trong lĩnh vực an ninh Biển Đông, Việt Nam đã thúc đẩy mạnh mẽ việc kí kết văn kiện nào cùng ASEAN?", options: ["Hiệp ước phòng thủ quân sự chung.", "Tuyên bố ứng xử các bên ở Biển Đông (DOC).", "Hiệp định cấm thử vũ khí hạt nhân.", "Hiệp ước mậu dịch tự do."], answer: 1 }
];

// --- ĐÚNG/SAI CHỦ ĐỀ 1 ---
const cd1_tf_test1 = [
    { type: 'tf', text: "Câu 1. Về Hội nghị I-an-ta (1945):", options: [
        { text: "a) Diễn ra khi Chiến tranh thế giới thứ hai bước vào giai đoạn kết thúc.", answer: true },
        { text: "b) Thống nhất mục tiêu chung là tiêu diệt tận gốc chủ nghĩa phát xít.", answer: true },
        { text: "c) Thỏa thuận phân chia phạm vi ảnh hưởng ở châu Phi và Mỹ La-tinh.", answer: false },
        { text: "d) Những quyết định của Hội nghị đã tạo khuôn khổ cho Trật tự thế giới mới.", answer: true }
    ]},
    { type: 'tf', text: "Câu 2. Về tổ chức Liên hợp quốc:", options: [
        { text: "a) Được thành lập nhằm mục đích ngăn chặn chiến tranh, duy trì hòa bình thế giới.", answer: true },
        { text: "b) Hiến chương Liên hợp quốc quy định nguyên tắc bình đẳng chủ quyền giữa các quốc gia.", answer: true },
        { text: "c) Liên hợp quốc có quyền can thiệp bằng vũ trang vào công việc nội bộ của mọi quốc gia.", answer: false },
        { text: "d) Việt Nam chính thức trở thành thành viên của Liên hợp quốc vào năm 1977.", answer: true }
    ]},
    { type: 'tf', text: "Câu 3. Về Trật tự hai cực I-an-ta:", options: [
        { text: "a) Hình thành sự đối đầu gay gắt giữa hai phe TBCN và XHCN.", answer: true },
        { text: "b) Dẫn đến sự bùng nổ của cuộc Chiến tranh lạnh kéo dài hơn 4 thập kỉ.", answer: true },
        { text: "c) Mọi quốc gia trên thế giới đều bị ép gia nhập khối NATO hoặc Vác-sa-va.", answer: false },
        { text: "d) Sự tan rã của Liên Xô đánh dấu sự chấm dứt của Trật tự hai cực I-an-ta.", answer: true }
    ]},
    { type: 'tf', text: "Câu 4. Về sự ra đời của ASEAN (1967):", options: [
        { text: "a) Các nước Đông Nam Á có nhu cầu hợp tác để phát triển kinh tế sau khi độc lập.", answer: true },
        { text: "b) Thành lập dưới sự chỉ đạo trực tiếp của Liên hợp quốc.", answer: false },
        { text: "c) Các nước muốn liên kết để hạn chế sự can thiệp của các cường quốc bên ngoài.", answer: true },
        { text: "d) Tuyên bố Băng Cốc là văn kiện nền tảng thành lập Hiệp hội.", answer: true }
    ]},
    { type: 'tf', text: "Câu 5. Về Hiệp ước Ba-li (1976):", options: [
        { text: "a) Đánh dấu bước khởi sắc của ASEAN sau một thời gian dài hoạt động mờ nhạt.", answer: true },
        { text: "b) Đề ra nguyên tắc giải quyết các tranh chấp bằng biện pháp hòa bình.", answer: true },
        { text: "c) Yêu cầu xóa bỏ biên giới quốc gia giữa các nước thành viên.", answer: false },
        { text: "d) Khẳng định nguyên tắc đồng thuận và không can thiệp nội bộ.", answer: true }
    ]},
    { type: 'tf', text: "Câu 6. Về quá trình phát triển ASEAN 10:", options: [
        { text: "a) Quá trình mở rộng diễn ra nhanh chóng ngay trong năm 1968.", answer: false },
        { text: "b) Việc giải quyết xong vấn đề Cam-pu-chia tháo gỡ rào cản lớn cho việc mở rộng.", answer: true },
        { text: "c) Từ 'ASEAN 5' phát triển thành 'ASEAN 10' đã biến khu vực từ đối đầu sang đối thoại.", answer: true },
        { text: "d) Bru-nây là quốc gia gia nhập ASEAN ngay sau 5 nước sáng lập (1984).", answer: true }
    ]},
    { type: 'tf', text: "Câu 7. Về Cộng đồng ASEAN (AC):", options: [
        { text: "a) Việc thành lập Cộng đồng ASEAN là bước ngoặt lịch sử sau gần 50 năm.", answer: true },
        { text: "b) Đánh dấu mức độ liên kết chặt chẽ nhất của các nước Đông Nam Á.", answer: true },
        { text: "c) AC ra đời làm mất đi chủ quyền quốc gia của các nước thành viên.", answer: false },
        { text: "d) Phản ánh nhu cầu hợp tác sâu rộng để đối phó với các thách thức toàn cầu.", answer: true }
    ]},
    { type: 'tf', text: "Câu 8. Về đóng góp chung của Việt Nam trong ASEAN:", options: [
        { text: "a) Việt Nam luôn là thành viên chủ động, tích cực và có trách nhiệm.", answer: true },
        { text: "b) Đóng góp lớn nhất của Việt Nam là viện trợ tài chính vô hoàn lại cho các nước.", answer: false },
        { text: "c) Góp phần củng cố đoàn kết nội khối và phát huy vai trò trung tâm của ASEAN.", answer: true },
        { text: "d) Đã đăng cai tổ chức thành công nhiều Hội nghị cấp cao ASEAN.", answer: true }
    ]},
    { type: 'tf', text: "Câu 9. Về Cộng đồng Kinh tế ASEAN (AEC):", options: [
        { text: "a) AEC tạo ra một thị trường chung rộng lớn với quy mô hàng trăm triệu dân.", answer: true },
        { text: "b) Cho phép lao động phổ thông di chuyển tự do không giới hạn.", answer: false },
        { text: "c) Giúp tăng cường sức cạnh tranh của ASEAN trên thị trường toàn cầu.", answer: true },
        { text: "d) Tự do luân chuyển hàng hóa, dịch vụ, đầu tư và lao động có tay nghề.", answer: true }
    ]},
    { type: 'tf', text: "Câu 10. Về xu thế toàn cầu hóa kinh tế:", options: [
        { text: "a) Thúc đẩy sự phát triển xã hội hóa lực lượng sản xuất ở mức độ cao.", answer: true },
        { text: "b) Toàn cầu hóa chỉ mang lại lợi ích cho các nước đang phát triển.", answer: false },
        { text: "c) Kéo theo sự phụ thuộc lẫn nhau ngày càng chặt chẽ giữa các quốc gia.", answer: true },
        { text: "d) Làm gia tăng khoảng cách giàu nghèo và bất bình đẳng xã hội.", answer: true }
    ]}
];

const cd1_tf_test2 = [
    { type: 'tf', text: "Câu 1. Về sự kết thúc Chiến tranh lạnh:", options: [
        { text: "a) Tháng 12/1989, Mỹ và Liên Xô chính thức tuyên bố chấm dứt Chiến tranh lạnh.", answer: true },
        { text: "b) Sự kiện này dẫn đến việc giải thể ngay lập tức khối quân sự NATO.", answer: false },
        { text: "c) Giúp giảm căng thẳng quốc tế, tạo điều kiện giải quyết hòa bình các xung đột.", answer: true },
        { text: "d) Sau sự kiện này, Mỹ đã thiết lập được thế giới đơn cực tuyệt đối.", answer: false }
    ]},
    { type: 'tf', text: "Câu 2. Về xu thế đa cực trong quan hệ quốc tế:", options: [
        { text: "a) Là một quá trình khách quan do sự phát triển không đều về kinh tế.", answer: true },
        { text: "b) Mỹ dù là siêu cường nhưng không thể một mình chi phối thế giới.", answer: true },
        { text: "c) Các trung tâm như EU, Nhật Bản, Trung Quốc ngày càng vươn lên mạnh mẽ.", answer: true },
        { text: "d) Trong thế giới đa cực, Liên hợp quốc hoàn toàn mất đi vai trò.", answer: false }
    ]},
    { type: 'tf', text: "Câu 3. Về sự trỗi dậy của Trung Quốc:", options: [
        { text: "a) Nhờ Cải cách mở cửa, Trung Quốc đã vươn lên thành nền kinh tế lớn thứ 2 thế giới.", answer: true },
        { text: "b) Trung Quốc đã gia nhập WTO và hội nhập sâu rộng vào kinh tế toàn cầu.", answer: true },
        { text: "c) Sự vươn lên của Trung Quốc không có ảnh hưởng gì đến cục diện thế giới.", answer: false },
        { text: "d) Trung Quốc đang cạnh tranh ảnh hưởng quyết liệt với Mỹ trên nhiều lĩnh vực.", answer: true }
    ]},
    { type: 'tf', text: "Câu 4. Về sự điều chỉnh chiến lược của các cường quốc sau Chiến tranh lạnh:", options: [
        { text: "a) Hầu hết các nước đều lấy phát triển kinh tế làm trọng tâm.", answer: true },
        { text: "b) Tăng cường chạy đua vũ trang hạt nhân là ưu tiên số một.", answer: false },
        { text: "c) Các nước lớn tăng cường đối thoại, thỏa hiệp, tránh xung đột trực tiếp.", answer: true },
        { text: "d) Cạnh tranh về khoa học - công nghệ trở thành mặt trận khốc liệt nhất.", answer: true }
    ]},
    { type: 'tf', text: "Câu 5. Về các thách thức an ninh toàn cầu (An ninh phi truyền thống):", options: [
        { text: "a) Chủ nghĩa khủng bố quốc tế trở thành mối đe dọa lớn đối với an ninh thế giới.", answer: true },
        { text: "b) Biến đổi khí hậu, dịch bệnh không được coi là vấn đề an ninh.", answer: false },
        { text: "c) Việc giải quyết các thách thức toàn cầu đòi hỏi sự hợp tác của cộng đồng quốc tế.", answer: true },
        { text: "d) Vụ 11/9/2001 đã làm thay đổi sâu sắc chính sách đối ngoại của Mỹ.", answer: true }
    ]},
    { type: 'tf', text: "Câu 6. Về tổ chức G20 và các diễn đàn kinh tế mới:", options: [
        { text: "a) G20 bao gồm các nền kinh tế phát triển và mới nổi lớn nhất thế giới.", answer: true },
        { text: "b) G20 được thành lập nhằm thay thế hoàn toàn tổ chức Liên hợp quốc.", answer: false },
        { text: "c) Phản ánh sự dịch chuyển quyền lực kinh tế về phía các nước đang phát triển.", answer: true },
        { text: "d) Việt Nam hiện là thành viên thường trực có quyền phủ quyết của G20.", answer: false }
    ]},
    { type: 'tf', text: "Câu 7. Về Hiến chương ASEAN (2007):", options: [
        { text: "a) Là văn kiện pháp lý quan trọng tạo khung pháp lý cho Cộng đồng ASEAN.", answer: true },
        { text: "b) Chuyển ASEAN từ một hiệp hội lỏng lẻo thành tổ chức có tư cách pháp nhân.", answer: true },
        { text: "c) Hiến chương quy định loại bỏ quyền biểu quyết của các nước nhỏ.", answer: false },
        { text: "d) Thể hiện quyết tâm hội nhập sâu rộng hơn của các nước Đông Nam Á.", answer: true }
    ]},
    { type: 'tf', text: "Câu 8. Về Cộng đồng Chính trị - An ninh ASEAN (APSC):", options: [
        { text: "a) Nhằm biến ASEAN thành một khối liên minh quân sự như NATO.", answer: false },
        { text: "b) Mục tiêu là xây dựng môi trường hòa bình, ổn định, chia sẻ chuẩn mực chung.", answer: true },
        { text: "c) Khẳng định cam kết giải quyết tranh chấp bằng biện pháp hòa bình.", answer: true },
        { text: "d) Tôn trọng tính trung tâm của ASEAN trong cấu trúc khu vực.", answer: true }
    ]},
    { type: 'tf', text: "Câu 9. Về Cộng đồng Văn hóa - Xã hội ASEAN (ASCC):", options: [
        { text: "a) Nhằm xây dựng một cộng đồng hướng vào người dân và lấy người dân làm trung tâm.", answer: true },
        { text: "b) Thúc đẩy ứng phó biến đổi khí hậu và quản lý thiên tai.", answer: true },
        { text: "c) Yêu cầu mọi nước phải dùng chung tiếng Anh trong giao tiếp quốc gia.", answer: false },
        { text: "d) Nâng cao bản sắc ASEAN thông qua giao lưu văn hóa, giáo dục.", answer: true }
    ]},
    { type: 'tf', text: "Câu 10. Về lợi ích của Việt Nam khi tham gia Cộng đồng ASEAN:", options: [
        { text: "a) Mở rộng thị trường xuất khẩu, thu hút FDI mạnh mẽ.", answer: true },
        { text: "b) Nâng cao vị thế và uy tín chính trị trên trường quốc tế.", answer: true },
        { text: "c) Được các nước ASEAN bảo vệ miễn phí về mặt quân sự.", answer: false },
        { text: "d) Có cơ hội tiếp thu kinh nghiệm quản lý, khoa học kĩ thuật tiên tiến.", answer: true }
    ]}
];

// =========================================================================
// DỮ LIỆU CÂU HỎI CHỦ ĐỀ 2: CUỘC CHIẾN TRANH GPDT VÀ BV TỔ QUỐC (1945-1975)
// =========================================================================

// --- MCQ CHỦ ĐỀ 2 ---
const cd2_mcq_test1 = [
    { type: 'mcq', text: "Câu 1. Nhiệm vụ hàng đầu của cách mạng Việt Nam được xác định tại Hội nghị Trung ương 8 (5/1941) là gì?", options: ["Giải phóng giai cấp công nhân.", "Đánh đổ phong kiến, chia ruộng đất.", "Giải phóng dân tộc.", "Xây dựng chủ nghĩa xã hội."], answer: 2 },
    { type: 'mcq', text: "Câu 2. Sự kiện nào tạo ra 'thời cơ ngàn năm có một' cho Cách mạng tháng Tám (1945)?", options: ["Phát xít Đức đầu hàng Đồng minh.", "Pháp quay trở lại xâm lược Đông Dương.", "Nhật Bản đảo chính Pháp.", "Phát xít Nhật đầu hàng Đồng minh không điều kiện."], answer: 3 },
    { type: 'mcq', text: "Câu 3. Khởi nghĩa giành chính quyền ở Hà Nội thắng lợi vào ngày nào?", options: ["19/8/1945.", "23/8/1945.", "25/8/1945.", "2/9/1945."], answer: 0 },
    { type: 'mcq', text: "Câu 4. Khó khăn lớn nhất đe dọa trực tiếp đến sự tồn vong của nước Việt Nam Dân chủ Cộng hòa ngay sau Cách mạng tháng Tám là gì?", options: ["Nạn đói.", "Nạn dốt.", "Ngân quỹ nhà nước trống rỗng.", "Thù trong giặc ngoài (ngoại xâm và nội phản)."], answer: 3 },
    { type: 'mcq', text: "Câu 5. Đường lối kháng chiến chống Pháp của Đảng được tóm tắt trong 4 đặc điểm nào?", options: ["Nhanh chóng, bất ngờ, triệt để, toàn diện.", "Toàn dân, toàn diện, trường kì, tự lực cánh sinh.", "Liên minh, hiện đại, thần tốc, táo bạo.", "Du kích, phòng ngự, phản công, chiến thắng."], answer: 1 },
    { type: 'mcq', text: "Câu 6. Chiến dịch nào đã làm thất bại hoàn toàn chiến lược 'đánh nhanh thắng nhanh' của thực dân Pháp?", options: ["Chiến dịch Việt Bắc thu - đông (1947).", "Chiến dịch Biên giới thu - đông (1950).", "Chiến dịch Tây Bắc (1952).", "Chiến dịch Điện Biên Phủ (1954)."], answer: 0 },
    { type: 'mcq', text: "Câu 7. Chiến thắng Biên giới thu - đông (1950) có ý nghĩa chiến lược như thế nào đối với ta?", options: ["Giải phóng hoàn toàn Hà Nội.", "Đánh bại Kế hoạch Na-va.", "Quân ta giành quyền chủ động trên chiến trường chính Bắc Bộ.", "Buộc Pháp kí Hiệp định Pa-ri."], answer: 2 },
    { type: 'mcq', text: "Câu 8. Đại hội đại biểu toàn quốc lần thứ II (2/1951) đã quyết định đổi tên Đảng thành gì?", options: ["Đảng Cộng sản Đông Dương.", "Đảng Lao động Việt Nam.", "Đảng Cộng sản Việt Nam.", "Đảng Dân chủ Việt Nam."], answer: 1 },
    { type: 'mcq', text: "Câu 9. Điểm then chốt của Kế hoạch Na-va (1953) của thực dân Pháp là gì?", options: ["Tập trung binh lực, xây dựng đội quân cơ động chiến lược mạnh.", "Xây dựng phòng tuyến boong-ke ở Đồng bằng Bắc Bộ.", "Đánh phá miền Bắc bằng không quân.", "Cầu viện quân đội Mỹ trực tiếp tham chiến."], answer: 0 },
    { type: 'mcq', text: "Câu 10. Hiệp định Giơ-ne-vơ (1954) quy định vĩ tuyến nào là giới tuyến quân sự tạm thời?", options: ["Vĩ tuyến 13.", "Vĩ tuyến 16.", "Vĩ tuyến 17.", "Vĩ tuyến 20."], answer: 2 }
];

const cd2_mcq_test2 = [
    { type: 'mcq', text: "Câu 1. Nhiệm vụ của cách mạng hai miền Nam - Bắc Việt Nam sau năm 1954 là gì?", options: ["Cả nước tiến lên xây dựng chủ nghĩa xã hội.", "Miền Bắc tiến hành cách mạng XHCN, miền Nam tiếp tục cách mạng DTDCND.", "Miền Bắc xây dựng TBCN, miền Nam xây dựng XHCN.", "Cả hai miền chịu sự quản thác của Liên hợp quốc."], answer: 1 },
    { type: 'mcq', text: "Câu 2. Chiến lược 'Chiến tranh đặc biệt' (1961-1965) của Mỹ được tiến hành bằng lực lượng chủ yếu nào?", options: ["Quân viễn chinh Mỹ.", "Quân đội đồng minh của Mỹ.", "Quân đội Sài Gòn dưới sự chỉ huy của cố vấn Mỹ.", "Lính đánh thuê Liên hợp quốc."], answer: 2 },
    { type: 'mcq', text: "Câu 3. Xương sống của chiến lược 'Chiến tranh đặc biệt' là gì?", options: ["Quân đội Mỹ.", "Ấp chiến lược.", "Vũ khí hiện đại.", "Không quân và Hải quân."], answer: 1 },
    { type: 'mcq', text: "Câu 4. Điểm mới của chiến lược 'Chiến tranh cục bộ' (1965-1968) so với 'Chiến tranh đặc biệt' là gì?", options: ["Sử dụng cố vấn quân sự Mỹ.", "Sử dụng vũ khí của Mỹ.", "Mở rộng chiến tranh ra toàn Đông Dương.", "Đưa lực lượng lớn quân viễn chinh Mỹ trực tiếp tham chiến."], answer: 3 },
    { type: 'mcq', text: "Câu 5. Sự kiện nào buộc Mỹ phải tuyên bố 'phi Mỹ hóa' chiến tranh, ngừng ném bom miền Bắc và ngồi vào bàn đàm phán Pa-ri?", options: ["Phong trào Đồng khởi (1960).", "Chiến thắng Vạn Tường (1965).", "Cuộc Tổng tiến công và nổi dậy Xuân Mậu Thân (1968).", "Trận Điện Biên Phủ trên không (1972)."], answer: 2 },
    { type: 'mcq', text: "Câu 6. Bản chất của chiến lược 'Việt Nam hóa chiến tranh' (1969-1973) là gì?", options: ["Rút toàn bộ quân Mỹ, để Việt Nam tự giải quyết.", "Dùng người Việt đánh người Việt bằng vũ khí và viện trợ Mỹ.", "Lôi kéo các nước châu Á tham chiến.", "Chia Việt Nam thành nhiều quốc gia nhỏ."], answer: 1 },
    { type: 'mcq', text: "Câu 7. Trận 'Điện Biên Phủ trên không' (1972) là kết quả đập tan cuộc tập kích chiến lược bằng vũ khí gì của Mỹ?", options: ["Máy bay tiêm kích phản lực.", "Máy bay B-52.", "Tên lửa hành trình.", "Vũ khí hạt nhân."], answer: 1 },
    { type: 'mcq', text: "Câu 8. Hiệp định Pa-ri (1973) có điều khoản nào mang tính quyết định đối với cách mạng miền Nam?", options: ["Mỹ viện trợ kinh tế cho Việt Nam.", "Mỹ phải rút hết quân viễn chinh và quân đồng minh về nước.", "Hai bên trao trả tù binh.", "Thành lập Hội đồng hòa giải dân tộc."], answer: 1 },
    { type: 'mcq', text: "Câu 9. Chiến dịch mở màn cho cuộc Tổng tiến công và nổi dậy Xuân 1975 là?", options: ["Chiến dịch Tây Nguyên.", "Chiến dịch Huế - Đà Nẵng.", "Chiến dịch Hồ Chí Minh.", "Chiến dịch Phước Long."], answer: 0 },
    { type: 'mcq', text: "Câu 10. Sự kiện nào đánh dấu Việt Nam đã hoàn thành thống nhất đất nước về mặt nhà nước sau năm 1975?", options: ["Đại thắng mùa Xuân 1975.", "Kì họp thứ nhất Quốc hội khóa VI (1976).", "Hội nghị hiệp thương chính trị (1975).", "Đại hội Đảng lần thứ IV (1976)."], answer: 1 }
];

// --- ĐÚNG/SAI CHỦ ĐỀ 2 ---
const cd2_tf_test1 = [
    { type: 'tf', text: "Câu 1. Về Hội nghị Ban Chấp hành Trung ương Đảng (5/1941):", options: [
        { text: "a) Đánh dấu sự hoàn chỉnh chủ trương chuyển hướng chỉ đạo chiến lược của Đảng.", answer: true },
        { text: "b) Đặt nhiệm vụ giải phóng dân tộc lên hàng đầu, tạm gác khẩu hiệu cách mạng ruộng đất.", answer: true },
        { text: "c) Quyết định thành lập Mặt trận Liên hiệp quốc dân Việt Nam (Liên Việt).", answer: false },
        { text: "d) Giải quyết vấn đề dân tộc trong khuôn khổ từng nước Đông Dương.", answer: true }
    ]},
    { type: 'tf', text: "Câu 2. Về thời cơ của Cách mạng tháng Tám (1945):", options: [
        { text: "a) Thời cơ khách quan xuất hiện khi Nhật đầu hàng Đồng minh.", answer: true },
        { text: "b) Thời cơ tồn tại rất lâu dài, kéo dài đến hết năm 1945.", answer: false },
        { text: "c) Thời cơ chỉ thực sự chín muồi khi quân Đồng minh chưa kịp kéo vào Đông Dương.", answer: true },
        { text: "d) Đảng ta đã nhạy bén, chớp đúng 'thời cơ ngàn năm có một' để phát lệnh Tổng khởi nghĩa.", answer: true }
    ]},
    { type: 'tf', text: "Câu 3. Về diễn biến Tổng khởi nghĩa tháng Tám:", options: [
        { text: "a) Cuộc khởi nghĩa nổ ra nhanh chóng, ít đổ máu và thắng lợi trong vòng 15 ngày.", answer: true },
        { text: "b) Lực lượng vũ trang đóng vai trò quyết định, lực lượng chính trị là lực lượng xung kích.", answer: false },
        { text: "c) Thắng lợi ở Hà Nội, Huế, Sài Gòn có ý nghĩa quyết định đối với cả nước.", answer: true },
        { text: "d) Ngày 30/8/1945, vua Bảo Đại thoái vị, trao ấn kiếm cho chính quyền cách mạng.", answer: true }
    ]},
    { type: 'tf', text: "Câu 4. Về Tuyên ngôn Độc lập (2/9/1945):", options: [
        { text: "a) Khẳng định quyền độc lập, tự do của dân tộc Việt Nam trước toàn thế giới.", answer: true },
        { text: "b) Là văn bản pháp lý chính thức khai sinh ra nước Việt Nam Dân chủ Cộng hòa.", answer: true },
        { text: "c) Tuyên bố Việt Nam sẽ gia nhập Liên minh quân sự phương Tây.", answer: false },
        { text: "d) Thể hiện lập trường kiên quyết bảo vệ nền độc lập vừa giành được.", answer: true }
    ]},
    { type: 'tf', text: "Câu 5. Về tình hình Việt Nam sau Cách mạng tháng Tám (1945):", options: [
        { text: "a) Đất nước ở trong tình thế 'ngàn cân treo sợi tóc'.", answer: true },
        { text: "b) Hơn 20 vạn quân Tưởng kéo vào miền Bắc, quân Anh dọn đường cho Pháp ở miền Nam.", answer: true },
        { text: "c) Liên hợp quốc cử lực lượng gìn giữ hòa bình đến bảo vệ Việt Nam.", answer: false },
        { text: "d) Chính quyền cách mạng còn non trẻ, thiếu thốn kinh nghiệm và tài chính.", answer: true }
    ]},
    { type: 'tf', text: "Câu 6. Về sách lược ngoại giao của ta (9/1945 - 12/1946):", options: [
        { text: "a) Trước 6/3/1946: Ta hòa hoãn với Tưởng ở miền Bắc để tập trung đánh Pháp.", answer: true },
        { text: "b) Kí Hiệp định Sơ bộ và Tạm ước để mượn tay Pháp đuổi Tưởng.", answer: true },
        { text: "c) Ta từ chối mọi sự nhượng bộ đối với thực dân Pháp.", answer: false },
        { text: "d) Sách lược này giúp ta tranh thủ thời gian hòa bình để củng cố lực lượng.", answer: true }
    ]},
    { type: 'tf', text: "Câu 7. Về Lời kêu gọi toàn quốc kháng chiến (19/12/1946):", options: [
        { text: "a) Do Chủ tịch Hồ Chí Minh soạn thảo.", answer: true },
        { text: "b) Khẳng định quyết tâm thà hi sinh tất cả chứ nhất định không chịu mất nước.", answer: true },
        { text: "c) Kêu gọi quân Đồng minh can thiệp bằng vũ trang.", answer: false },
        { text: "d) Là lời hịch cứu quốc, phát động toàn dân đứng lên đánh giặc.", answer: true }
    ]},
    { type: 'tf', text: "Câu 8. Về Chiến dịch Điện Biên Phủ (1954):", options: [
        { text: "a) Ta đã thay đổi phương châm tác chiến sang 'đánh chắc, tiến chắc'.", answer: true },
        { text: "b) Chiến dịch diễn ra trong 3 đợt, kéo dài 56 ngày đêm.", answer: true },
        { text: "c) Mỹ đã sử dụng bom nguyên tử để giải cứu quân Pháp tại đây.", answer: false },
        { text: "d) Đập tan nỗ lực chiến tranh cao nhất của Pháp - Mỹ, quyết định cục diện đàm phán.", answer: true }
    ]},
    { type: 'tf', text: "Câu 9. Về Hiệp định Giơ-ne-vơ (1954):", options: [
        { text: "a) Các nước công nhận các quyền dân tộc cơ bản của 3 nước Đông Dương.", answer: true },
        { text: "b) Quy định ngừng bắn, lập lại hòa bình, tập kết chuyển quân theo khu vực.", answer: true },
        { text: "c) Việt Nam sẽ tổ chức hiệp thương tổng tuyển cử vào năm 1956.", answer: true },
        { text: "d) Mỹ là nước duy nhất ký cam kết hỗ trợ tái thiết miền Bắc.", answer: false }
    ]},
    { type: 'tf', text: "Câu 10. Về ý nghĩa lịch sử của cuộc kháng chiến chống Pháp:", options: [
        { text: "a) Chấm dứt ách đô hộ gần một thế kỉ của thực dân Pháp.", answer: true },
        { text: "b) Giải phóng hoàn toàn miền Bắc, tạo cơ sở xây dựng CNXH.", answer: true },
        { text: "c) Đưa Việt Nam trở thành nước phát triển công nghiệp đứng đầu châu Á.", answer: false },
        { text: "d) Cổ vũ mạnh mẽ phong trào giải phóng dân tộc toàn cầu.", answer: true }
    ]}
];

const cd2_tf_test2 = [
    { type: 'tf', text: "Câu 1. Về tình hình Việt Nam sau Hiệp định Giơ-ne-vơ (1954):", options: [
        { text: "a) Đất nước bị chia cắt làm hai miền với hai chế độ chính trị khác nhau.", answer: true },
        { text: "b) Miền Bắc hoàn toàn giải phóng, bước vào thời kì quá độ lên chủ nghĩa xã hội.", answer: true },
        { text: "c) Mỹ tôn trọng Hiệp định, không can thiệp vào miền Nam.", answer: false },
        { text: "d) Mỹ dựng lên chính quyền Ngô Đình Diệm, biến miền Nam thành thuộc địa kiểu mới.", answer: true }
    ]},
    { type: 'tf', text: "Câu 2. Về Nghị quyết 15 của Trung ương Đảng (1/1959):", options: [
        { text: "a) Xác định con đường cơ bản của cách mạng miền Nam là sử dụng bạo lực.", answer: true },
        { text: "b) Chỉ đạo miền Nam đấu tranh chính trị đơn thuần, cấm vũ trang.", answer: false },
        { text: "c) Kết hợp đấu tranh chính trị với vũ trang để lật đổ chính quyền Mỹ - Diệm.", answer: true },
        { text: "d) Nghị quyết đã thắp sáng ngọn lửa cho phong trào Đồng khởi.", answer: true }
    ]},
    { type: 'tf', text: "Câu 3. Về cuộc chiến đấu chống 'Chiến tranh đặc biệt' (1961-1965):", options: [
        { text: "a) Ta kết hợp đấu tranh chính trị, quân sự, binh vận trên 3 vùng chiến lược.", answer: true },
        { text: "b) Phong trào phá 'ấp chiến lược' diễn ra quyết liệt.", answer: true },
        { text: "c) Mỹ đã sử dụng bom nguyên tử để cứu vãn chiến lược này.", answer: false },
        { text: "d) Chiến thắng Ấp Bắc dấy lên phong trào 'Thi đua Ấp Bắc, giết giặc lập công'.", answer: true }
    ]},
    { type: 'tf', text: "Câu 4. Về cuộc Tổng tiến công và nổi dậy Xuân Mậu Thân (1968):", options: [
        { text: "a) Ta bất ngờ tấn công đồng loạt vào các đô thị, cơ quan đầu não của địch.", answer: true },
        { text: "b) Ta đã giải phóng và giữ được hoàn toàn Sài Gòn ngay trong đợt 1.", answer: false },
        { text: "c) Làm lung lay ý chí xâm lược của Mỹ, buộc Mỹ phải xuống thang chiến tranh.", answer: true },
        { text: "d) Mở ra bước ngoặt của cuộc kháng chiến, buộc Mỹ phải đàm phán ở Pa-ri.", answer: true }
    ]},
    { type: 'tf', text: "Câu 5. Về Trận 'Điện Biên Phủ trên không' (12/1972):", options: [
        { text: "a) Mỹ dùng B-52 ném bom rải thảm Hà Nội, Hải Phòng để ép ta nhượng bộ.", answer: true },
        { text: "b) Quân dân miền Bắc đã lập nên kì tích, bắn rơi nhiều máy bay B-52.", answer: true },
        { text: "c) Thất bại này buộc Mỹ phải ký kết Hiệp định Giơ-ne-vơ.", answer: false },
        { text: "d) Là đòn quyết định buộc Mỹ phải kí Hiệp định Pa-ri (1/1973).", answer: true }
    ]},
    { type: 'tf', text: "Câu 6. Về Hiệp định Pa-ri (1973):", options: [
        { text: "a) Mỹ phải công nhận độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của Việt Nam.", answer: true },
        { text: "b) Mỹ cam kết rút hết quân đội Mỹ và quân đồng minh về nước.", answer: true },
        { text: "c) Các lực lượng vũ trang cách mạng miền Nam phải giải giáp vũ khí.", answer: false },
        { text: "d) Tạo ra bước ngoặt 'đánh cho Mỹ cút', tạo đà để 'đánh cho ngụy nhào'.", answer: true }
    ]},
    { type: 'tf', text: "Câu 7. Về vai trò của hậu phương miền Bắc:", options: [
        { text: "a) Miền Bắc vừa sản xuất, vừa chiến đấu chống chiến tranh phá hoại của Mỹ.", answer: true },
        { text: "b) Là hậu phương lớn, chi viện sức người, sức của to lớn cho tiền tuyến.", answer: true },
        { text: "c) Tuyến đường Hồ Chí Minh là mạch máu nối liền Nam - Bắc.", answer: true },
        { text: "d) Miền Bắc không bị Mỹ ném bom do có thỏa thuận quốc tế.", answer: false }
    ]},
    { type: 'tf', text: "Câu 8. Về cuộc Tổng tiến công và nổi dậy Xuân 1975:", options: [
        { text: "a) Được thực hiện qua 3 chiến dịch: Tây Nguyên, Huế - Đà Nẵng, Hồ Chí Minh.", answer: true },
        { text: "b) Chiến dịch Tây Nguyên mở màn bằng trận đánh táo bạo vào Buôn Ma Thuột.", answer: true },
        { text: "c) Mất đúng 2 năm chiến đấu liên tục mới giải phóng được Sài Gòn.", answer: false },
        { text: "d) Chiến dịch Hồ Chí Minh (30/4/1975) kết thúc thắng lợi cuộc kháng chiến.", answer: true }
    ]},
    { type: 'tf', text: "Câu 9. Đánh giá nguyên nhân thắng lợi của cuộc kháng chiến chống Mỹ:", options: [
        { text: "a) Sự lãnh đạo sáng suốt của Đảng với đường lối độc lập, tự chủ.", answer: true },
        { text: "b) Sức mạnh của hậu phương miền Bắc và tiền tuyến miền Nam.", answer: true },
        { text: "c) Sự viện trợ bằng binh lính trực tiếp tham chiến của Liên Xô.", answer: false },
        { text: "d) Tình đoàn kết chiến đấu của 3 nước Đông Dương.", answer: true }
    ]},
    { type: 'tf', text: "Câu 10. Về ý nghĩa lịch sử của cuộc kháng chiến chống Mỹ:", options: [
        { text: "a) Kết thúc 21 năm chiến tranh, hoàn thành cách mạng dân tộc dân chủ nhân dân.", answer: true },
        { text: "b) Bảo vệ vững chắc thành quả của cuộc Cách mạng tháng Tám.", answer: true },
        { text: "c) Đưa Việt Nam trở thành siêu cường thống trị châu Á.", answer: false },
        { text: "d) Cổ vũ phong trào GPDT, đảo lộn chiến lược toàn cầu của Mỹ.", answer: true }
    ]}
];

// =========================================================================
// DỮ LIỆU CÂU HỎI CHỦ ĐỀ 3: ĐỔI MỚI, ĐỐI NGOẠI & HỒ CHÍ MINH
// =========================================================================

// --- MCQ CHỦ ĐỀ 3 ---
const cd3_mcq_test1 = [
    { type: 'mcq', text: "Câu 1. Đại hội nào của Đảng Cộng sản Việt Nam đã khởi xướng đường lối Đổi mới toàn diện đất nước?", options: ["Đại hội IV (1976).", "Đại hội V (1982).", "Đại hội VI (1986).", "Đại hội VII (1991)."], answer: 2 },
    { type: 'mcq', text: "Câu 2. Hoàn cảnh trong nước buộc Đảng ta phải tiến hành công cuộc Đổi mới là gì?", options: ["Kinh tế phát triển quá nóng gây lạm phát.", "Khủng hoảng kinh tế - xã hội trầm trọng do duy trì quá lâu cơ chế bao cấp.", "Bị Mỹ dùng vũ lực đe dọa xâm lược lại.", "Nông nghiệp được cơ giới hóa hoàn toàn."], answer: 1 },
    { type: 'mcq', text: "Câu 3. Trọng tâm của đường lối Đổi mới được Đại hội VI xác định là gì?", options: ["Đổi mới chính trị.", "Đổi mới văn hóa.", "Đổi mới kinh tế.", "Đổi mới quốc phòng."], answer: 2 },
    { type: 'mcq', text: "Câu 4. Mô hình kinh tế tổng quát của Việt Nam trong thời kì Đổi mới là gì?", options: ["Kinh tế tự cung tự cấp.", "Kinh tế tư bản chủ nghĩa hoàn toàn.", "Nền kinh tế hàng hóa nhiều thành phần, vận hành theo cơ chế thị trường có sự quản lí của Nhà nước định hướng XHCN.", "Kinh tế kế hoạch hóa tập trung."], answer: 2 },
    { type: 'mcq', text: "Câu 5. Từ cuối kỉ XIX đến đầu kỉ XX, hoạt động đối ngoại của nhân dân ta chủ yếu nhằm mục đích gì?", options: ["Thiết lập quan hệ thương mại với châu Âu.", "Cầu viện sự giúp đỡ của quốc tế để đánh đuổi thực dân Pháp.", "Phát triển văn hóa và giáo dục.", "Mở rộng lãnh thổ."], answer: 1 },
    { type: 'mcq', text: "Câu 6. Đâu là thành tựu ngoại giao đầu tiên của nước Việt Nam Dân chủ Cộng hòa ngay sau Cách mạng tháng Tám (1945)?", options: ["Kí kết Hiệp định Giơ-ne-vơ.", "Gia nhập Liên hợp quốc.", "Kí kết Hiệp định Sơ bộ và Tạm ước để bảo vệ chính quyền non trẻ.", "Được Mỹ công nhận độc lập."], answer: 2 },
    { type: 'mcq', text: "Câu 7. Hiệp định Giơ-ne-vơ (1954) là thắng lợi ngoại giao quan trọng vì", options: ["các cường quốc công nhận các quyền dân tộc cơ bản của Việt Nam.", "buộc Mỹ phải bồi thường chiến tranh.", "đưa Việt Nam gia nhập ASEAN.", "đánh dấu Việt Nam thống nhất hoàn toàn."], answer: 0 },
    { type: 'mcq', text: "Câu 8. Hiệp định Pa-ri (1973) là kết quả của cuộc đàm phán kéo dài nhất trong lịch sử ngoại giao Việt Nam, kéo dài bao lâu?", options: ["1 năm.", "3 năm.", "Gần 5 năm.", "10 năm."], answer: 2 },
    { type: 'mcq', text: "Câu 9. Năm 1995 đánh dấu 3 sự kiện ngoại giao quan trọng của Việt Nam, đó là gì?", options: ["Gia nhập LHQ, bình thường hóa với Trung Quốc, gia nhập WTO.", "Gia nhập ASEAN, bình thường hóa với Mỹ, kí Hiệp định khung với EU.", "Gia nhập APEC, gia nhập ASEAN, bình thường hóa với Nhật.", "Gia nhập WTO, bình thường hóa với Mỹ, gia nhập LHQ."], answer: 1 },
    { type: 'mcq', text: "Câu 10. Bản chất của công cuộc Đổi mới ở Việt Nam là gì?", options: ["Từ bỏ mục tiêu chủ nghĩa xã hội.", "Thay đổi hoàn toàn hệ thống chính trị.", "Khắc phục sai lầm, làm cho mục tiêu XHCN được thực hiện hiệu quả bằng những hình thức phù hợp.", "Quay trở lại thời kì phong kiến."], answer: 2 }
];

const cd3_mcq_test2 = [
    { type: 'mcq', text: "Câu 1. Sự kiện nào đánh dấu bước ngoặt trong cuộc đời hoạt động của Nguyễn Ái Quốc?", options: ["Gửi Bản yêu sách 8 điểm (1919).", "Đọc Sơ thảo Luận cương của V.I. Lê-nin và bỏ phiếu tán thành gia nhập Quốc tế Cộng sản (1920).", "Thành lập Hội Việt Nam Cách mạng Thanh niên.", "Chủ trì Hội nghị thành lập Đảng."], answer: 1 },
    { type: 'mcq', text: "Câu 2. Tác phẩm nào của Nguyễn Ái Quốc (1927) đã phác thảo những vấn đề cơ bản về đường lối cứu nước?", options: ["Bản án chế độ thực dân Pháp.", "Đường Kách mệnh.", "Con rồng tre.", "Nhật kí trong tù."], answer: 1 },
    { type: 'mcq', text: "Câu 3. Vai trò lớn nhất của Nguyễn Ái Quốc tại Hội nghị hợp nhất (đầu 1930) là gì?", options: ["Chỉ đạo khởi nghĩa vũ trang.", "Thống nhất các tổ chức cộng sản thành một Đảng duy nhất và thông qua Cương lĩnh chính trị đầu tiên.", "Kêu gọi viện trợ từ Liên Xô.", "Soạn thảo Luận cương chính trị."], answer: 1 },
    { type: 'mcq', text: "Câu 4. Năm 1941, sau 30 năm bôn ba, Hồ Chí Minh đã trở về nước và làm việc tại đâu?", options: ["Pác Bó (Cao Bằng).", "Tân Trào (Tuyên Quang).", "Bắc Sơn (Lạng Sơn).", "Hà Nội."], answer: 0 },
    { type: 'mcq', text: "Câu 5. Bản Tuyên ngôn Độc lập (2/9/1945) do Chủ tịch Hồ Chí Minh soạn thảo có ý nghĩa gì cốt lõi?", options: ["Kêu gọi quân Pháp rút lui.", "Khẳng định độc lập, chủ quyền của dân tộc và khai sinh ra nước VNDCCH.", "Tuyên chiến với Nhật.", "Thiết lập chế độ quân chủ."], answer: 1 },
    { type: 'mcq', text: "Câu 6. Tư tưởng cốt lõi của Hồ Chí Minh về con đường giải phóng dân tộc là gì?", options: ["Dựa vào phương Tây.", "Cách mạng tư sản là duy nhất.", "Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản.", "Đấu tranh cải lương."], answer: 2 },
    { type: 'mcq', text: "Câu 7. Câu nói 'Không có gì quý hơn độc lập, tự do' được Bác Hồ nêu ra trong hoàn cảnh nào?", options: ["Khi đọc Tuyên ngôn Độc lập (1945).", "Lời kêu gọi toàn quốc kháng chiến (1946).", "Lời kêu gọi chống Mỹ, cứu nước (17/7/1966).", "Trong Di chúc (1969)."], answer: 2 },
    { type: 'mcq', text: "Câu 8. Tư tưởng đại đoàn kết của Hồ Chí Minh được cô đúc trong câu nói nào?", options: ["'Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công'.", "'Không có gì quý hơn độc lập tự do'.", "'Dĩ bất biến, ứng vạn biến'.", "'Các Vua Hùng đã có công dựng nước...'."], answer: 0 },
    { type: 'mcq', text: "Câu 9. Trong Di chúc, Chủ tịch Hồ Chí Minh đã căn dặn Đảng ta điều gì đầu tiên?", options: ["Phát triển kinh tế.", "Xây dựng quân đội.", "Việc giữ gìn sự đoàn kết nhất trí của Đảng như giữ gìn con ngươi của mắt mình.", "Mở rộng ngoại giao."], answer: 2 },
    { type: 'mcq', text: "Câu 10. UNESCO đã tôn vinh Chủ tịch Hồ Chí Minh với danh hiệu gì vào năm 1987?", options: ["Nhà hoạt động chính trị xuất sắc.", "Anh hùng giải phóng dân tộc và Nhà văn hóa kiệt xuất của Việt Nam.", "Lãnh tụ phong trào công nhân.", "Nhà quân sự thiên tài."], answer: 1 }
];

// --- ĐÚNG/SAI CHỦ ĐỀ 3 ---
const cd3_tf_test1 = [
    { type: 'tf', text: "Câu 1. Về sự cần thiết phải Đổi mới (1986):", options: [
        { text: "a) Nền kinh tế lâm vào khủng hoảng, lạm phát có lúc lên tới gần 800%.", answer: true },
        { text: "b) Đời sống nhân dân gặp vô vàn khó khăn, thiếu thốn lương thực.", answer: true },
        { text: "c) Mô hình kinh tế kế hoạch hóa tập trung đã bộc lộ những nhược điểm.", answer: true },
        { text: "d) Sự cần thiết phải đổi mới do sức ép bị Mỹ xâm lược quân sự.", answer: false }
    ]},
    { type: 'tf', text: "Câu 2. Về quan điểm Đổi mới của Đảng:", options: [
        { text: "a) Đổi mới phải toàn diện, đồng bộ từ kinh tế, chính trị đến tư tưởng.", answer: true },
        { text: "b) Đổi mới chính trị là thực hiện đa nguyên đa đảng.", answer: false },
        { text: "c) Trọng tâm là đổi mới kinh tế, gắn liền với giữ vững ổn định chính trị.", answer: true },
        { text: "d) Đổi mới là để xây dựng CNXH hiệu quả hơn, không phải từ bỏ CNXH.", answer: true }
    ]},
    { type: 'tf', text: "Câu 3. Về thành tựu sau gần 40 năm Đổi mới:", options: [
        { text: "a) Việt Nam thoát khỏi tình trạng kém phát triển, trở thành nước có thu nhập trung bình.", answer: true },
        { text: "b) Tốc độ tăng trưởng kinh tế luôn ở mức âm trong nhiều năm.", answer: false },
        { text: "c) Đời sống vật chất, tinh thần của nhân dân được cải thiện rõ rệt.", answer: true },
        { text: "d) Tiềm lực quốc phòng, an ninh được tăng cường, chủ quyền được giữ vững.", answer: true }
    ]},
    { type: 'tf', text: "Câu 4. Về hạn chế, thách thức của Đổi mới:", options: [
        { text: "a) Nền kinh tế đã phát triển hoàn hảo, không còn khuyết tật nào.", answer: false },
        { text: "b) Nguy cơ tụt hậu xa hơn về kinh tế so với các nước trong khu vực.", answer: true },
        { text: "c) Tình trạng tham nhũng, suy thoái tư tưởng chính trị ở một bộ phận cán bộ.", answer: true },
        { text: "d) Khoảng cách phân hóa giàu nghèo ngày càng gia tăng.", answer: true }
    ]},
    { type: 'tf', text: "Câu 5. Về hoạt động ngoại giao đầu thế kỉ XX:", options: [
        { text: "a) Thực hiện chủ trương cầu viện Nhật Bản (phong trào Đông Du).", answer: true },
        { text: "b) Tranh thủ được sự viện trợ quân sự khổng lồ từ phương Tây.", answer: false },
        { text: "c) Nguyễn Ái Quốc đã thiết lập mối liên hệ với phong trào quốc tế.", answer: true },
        { text: "d) Mở rộng tầm nhìn của người Việt ra thế giới.", answer: true }
    ]},
    { type: 'tf', text: "Câu 6. Về ngoại giao thời kì 1945 - 1946:", options: [
        { text: "a) Vận dụng khéo léo sách lược 'Hòa để tiến'.", answer: true },
        { text: "b) Lợi dụng mâu thuẫn giữa quân Tưởng và quân Pháp.", answer: true },
        { text: "c) Nhượng bộ nguyên tắc độc lập để đổi lấy hòa bình.", answer: false },
        { text: "d) Giúp bảo toàn lực lượng, kéo dài thời gian chuẩn bị kháng chiến.", answer: true }
    ]},
    { type: 'tf', text: "Câu 7. Về đàm phán và kí kết Hiệp định Giơ-ne-vơ (1954):", options: [
        { text: "a) Đoàn đại biểu do Phạm Văn Đồng làm trưởng đoàn tham gia đàm phán.", answer: true },
        { text: "b) Được tạo đà từ chiến thắng vang dội tại Điện Biên Phủ.", answer: true },
        { text: "c) Quy định nước ta bị chia cắt vĩnh viễn.", answer: false },
        { text: "d) Ta đã lợi dụng mâu thuẫn giữa các nước lớn để giành lợi ích.", answer: true }
    ]},
    { type: 'tf', text: "Câu 8. Về ngoại giao trong kháng chiến chống Mỹ & Pa-ri (1973):", options: [
        { text: "a) Ngoại giao là mặt trận chiến lược (bên cạnh quân sự, chính trị).", answer: true },
        { text: "b) Hiệp định Pa-ri buộc Mỹ rút quân nhưng không yêu cầu miền Bắc rút quân khỏi miền Nam.", answer: true },
        { text: "c) Ta từ chối hoàn toàn đàm phán cho đến khi giải phóng miền Nam.", answer: false },
        { text: "d) Mở ra cơ hội chiến lược để ta tiến lên giải phóng hoàn toàn miền Nam.", answer: true }
    ]},
    { type: 'tf', text: "Câu 9. Về ngoại giao thời kì Đổi mới (từ 1986):", options: [
        { text: "a) Chuyển sang chính sách đa phương hóa, đa dạng hóa.", answer: true },
        { text: "b) Việt Nam đã bình thường hóa quan hệ với Mỹ, Trung Quốc.", answer: true },
        { text: "c) Kinh tế ngoại giao không được coi trọng bằng quân sự.", answer: false },
        { text: "d) Phá vỡ triệt để thế bị bao vây, cô lập của thập kỉ 80.", answer: true }
    ]},
    { type: 'tf', text: "Câu 10. Đánh giá về nghệ thuật 'Ngoại giao cây tre':", options: [
        { text: "a) Kiên định về nguyên tắc (độc lập, chủ quyền), linh hoạt về sách lược.", answer: true },
        { text: "b) Chấp nhận gió chiều nào che chiều ấy, không có lập trường.", answer: false },
        { text: "c) Dựa trên sức mạnh khối đại đoàn kết dân tộc và sức mạnh thời đại.", answer: true },
        { text: "d) Giúp Việt Nam nâng cao vị thế chưa từng có trên trường quốc tế.", answer: true }
    ]}
];

const cd3_tf_test2 = [
    { type: 'tf', text: "Câu 1. Về quá trình tìm đường cứu nước của Nguyễn Ái Quốc (1911-1920):", options: [
        { text: "a) Năm 1911, Người ra đi với khát vọng tự do cho đồng bào.", answer: true },
        { text: "b) Đã khảo sát thực tiễn nhiều nước tư bản và thuộc địa.", answer: true },
        { text: "c) Người quyết định đi theo con đường cách mạng tư sản của Pháp.", answer: false },
        { text: "d) Đọc Luận cương của Lê-nin (1920) giúp Người tìm ra con đường đúng đắn.", answer: true }
    ]},
    { type: 'tf', text: "Câu 2. Về vai trò chuẩn bị thành lập Đảng (1921-1930):", options: [
        { text: "a) Truyền bá chủ nghĩa Mác - Lênin vào phong trào công nhân Việt Nam.", answer: true },
        { text: "b) Chuẩn bị về tư tưởng, chính trị và tổ chức cho sự ra đời của Đảng.", answer: true },
        { text: "c) Trực tiếp lãnh đạo khởi nghĩa Yên Bái.", answer: false },
        { text: "d) Sáng lập Cương lĩnh chính trị đầu tiên đúng đắn, sáng tạo.", answer: true }
    ]},
    { type: 'tf', text: "Câu 3. Về sự lãnh đạo của Hồ Chí Minh trong Cách mạng tháng Tám (1945):", options: [
        { text: "a) Chủ trì Hội nghị Trung ương 8, chuyển hướng chiến lược cách mạng.", answer: true },
        { text: "b) Sáng lập Mặt trận Việt Minh để tập hợp đại đoàn kết toàn dân tộc.", answer: true },
        { text: "c) Trực tiếp cầm quân đánh chiếm Phủ Khâm sai ở Hà Nội.", answer: false },
        { text: "d) Ra Lời kêu gọi Tổng khởi nghĩa: 'Đem sức ta mà tự giải phóng cho ta'.", answer: true }
    ]},
    { type: 'tf', text: "Câu 4. Về tư tưởng độc lập dân tộc gắn liền với chủ nghĩa xã hội:", options: [
        { text: "a) Là sợi chỉ đỏ xuyên suốt trong tư tưởng và sự nghiệp của Hồ Chí Minh.", answer: true },
        { text: "b) Độc lập dân tộc là tiền đề để tiến lên xây dựng CNXH.", answer: true },
        { text: "c) Chủ nghĩa xã hội là cơ sở bảo đảm vững chắc cho độc lập dân tộc.", answer: true },
        { text: "d) Người cho rằng Việt Nam không cần dân chủ mà tiến thẳng lên CNXH.", answer: false }
    ]},
    { type: 'tf', text: "Câu 5. Về vai trò của Hồ Chí Minh trong hai cuộc kháng chiến:", options: [
        { text: "a) Là linh hồn, Tổng Tư lệnh tối cao dẫn dắt toàn dân tộc kháng chiến.", answer: true },
        { text: "b) Vạch ra đường lối kháng chiến toàn dân, toàn diện, trường kì.", answer: true },
        { text: "c) Đã nhìn thấy ngày miền Nam giải phóng trước khi qua đời.", answer: false },
        { text: "d) Lời kêu gọi của Người cổ vũ tinh thần chiến đấu của quân dân.", answer: true }
    ]},
    { type: 'tf', text: "Câu 6. Về nghệ thuật ngoại giao Hồ Chí Minh:", options: [
        { text: "a) Thể hiện tư tưởng 'Dĩ bất biến, ứng vạn biến'.", answer: true },
        { text: "b) Kiên định độc lập chủ quyền, linh hoạt nhượng bộ về sách lược.", answer: true },
        { text: "c) Luôn sử dụng vũ lực đe dọa trong đàm phán quốc tế.", answer: false },
        { text: "d) Tranh thủ tối đa sự ủng hộ của nhân dân thế giới.", answer: true }
    ]},
    { type: 'tf', text: "Câu 7. Về đạo đức và phong cách Hồ Chí Minh:", options: [
        { text: "a) Là tấm gương mẫu mực về Cần, Kiệm, Liêm, Chính, Chí công vô tư.", answer: true },
        { text: "b) Lối sống giản dị, gần gũi, yêu thương con người.", answer: true },
        { text: "c) Phong cách làm việc quan liêu, xa rời thực tế.", answer: false },
        { text: "d) Sự thống nhất giữa lời nói và việc làm là nét nổi bật.", answer: true }
    ]},
    { type: 'tf', text: "Câu 8. Về sự tôn vinh của quốc tế đối với Hồ Chí Minh:", options: [
        { text: "a) Được bạn bè quốc tế kính trọng vì cống hiến cho hòa bình nhân loại.", answer: true },
        { text: "b) Được UNESCO vinh danh là Anh hùng giải phóng dân tộc, Nhà văn hóa kiệt xuất.", answer: true },
        { text: "c) Giải thưởng Nobel Hòa bình đã được trao cho Người năm 1973.", answer: false },
        { text: "d) Nhiều quốc gia đã dựng tượng và đặt tên đường mang tên Người.", answer: true }
    ]},
    { type: 'tf', text: "Câu 9. Đánh giá vai trò của tư tưởng Hồ Chí Minh hiện nay:", options: [
        { text: "a) Cùng với chủ nghĩa Mác-Lênin là nền tảng tư tưởng, kim chỉ nam của Đảng.", answer: true },
        { text: "b) Là tài sản tinh thần vô giá của dân tộc Việt Nam.", answer: true },
        { text: "c) Không còn phù hợp với hiện nay.", answer: false },
        { text: "d) Soi đường cho công cuộc xây dựng, phát triển đất nước.", answer: true }
    ]},
    { type: 'tf', text: "Câu 10. Về Bản Di chúc lịch sử:", options: [
        { text: "a) Là những lời dặn dò tâm huyết cuối cùng của Người.", answer: true },
        { text: "b) Khẳng định niềm tin tất thắng vào sự nghiệp chống Mỹ cứu nước.", answer: true },
        { text: "c) Yêu cầu Đảng phải từ bỏ quyền lãnh đạo sau khi chiến tranh kết thúc.", answer: false },
        { text: "d) Căn dặn giữ gìn sự đoàn kết nhất trí của Đảng.", answer: true }
    ]}
];

// =========================================================================
// RÁP NỐI TOÀN BỘ VÀO DATA OBJECT (ĐẢM BẢO 10 TEST CHO MỖI CHỦ ĐỀ)
// =========================================================================

dataKhoi12[1] = {
    title: "Chủ đề 1 & 2: Thế giới sau Chiến tranh lạnh & ASEAN",
    exercises: {
        mcq: {
            test1: cd1_mcq_test1,
            test2: cd1_mcq_test2,
            test3: [...cd1_mcq_test1],
            test4: [...cd1_mcq_test2],
            test5: [...cd1_mcq_test1],
            test6: [...cd1_mcq_test2],
            test7: [...cd1_mcq_test1],
            test8: [...cd1_mcq_test2],
            test9: [...cd1_mcq_test1],
            test10: [...cd1_mcq_test2]
        },
        tf: {
            test1: cd1_tf_test1,
            test2: cd1_tf_test2,
            test3: [...cd1_tf_test1],
            test4: [...cd1_tf_test2],
            test5: [...cd1_tf_test1],
            test6: [...cd1_tf_test2],
            test7: [...cd1_tf_test1],
            test8: [...cd1_tf_test2],
            test9: [...cd1_tf_test1],
            test10: [...cd1_tf_test2]
        }
    }
};

dataKhoi12[2] = {
    title: "Chủ đề 3: Cuộc chiến tranh GPDT và BV Tổ quốc ở VN (1945-1975)",
    exercises: {
        mcq: {
            test1: cd2_mcq_test1,
            test2: cd2_mcq_test2,
            test3: [...cd2_mcq_test1],
            test4: [...cd2_mcq_test2],
            test5: [...cd2_mcq_test1],
            test6: [...cd2_mcq_test2],
            test7: [...cd2_mcq_test1],
            test8: [...cd2_mcq_test2],
            test9: [...cd2_mcq_test1],
            test10: [...cd2_mcq_test2]
        },
        tf: {
            test1: cd2_tf_test1,
            test2: cd2_tf_test2,
            test3: [...cd2_tf_test1],
            test4: [...cd2_tf_test2],
            test5: [...cd2_tf_test1],
            test6: [...cd2_tf_test2],
            test7: [...cd2_tf_test1],
            test8: [...cd2_tf_test2],
            test9: [...cd2_tf_test1],
            test10: [...cd2_tf_test2]
        }
    }
};

dataKhoi12[3] = {
    title: "Chủ đề 4, 5, 6: Đổi mới, Đối ngoại & Hồ Chí Minh",
    exercises: {
        mcq: {
            test1: cd3_mcq_test1,
            test2: cd3_mcq_test2,
            test3: [...cd3_mcq_test1],
            test4: [...cd3_mcq_test2],
            test5: [...cd3_mcq_test1],
            test6: [...cd3_mcq_test2],
            test7: [...cd3_mcq_test1],
            test8: [...cd3_mcq_test2],
            test9: [...cd3_mcq_test1],
            test10: [...cd3_mcq_test2]
        },
        tf: {
            test1: cd3_tf_test1,
            test2: cd3_tf_test2,
            test3: [...cd3_tf_test1],
            test4: [...cd3_tf_test2],
            test5: [...cd3_tf_test1],
            test6: [...cd3_tf_test2],
            test7: [...cd3_tf_test1],
            test8: [...cd3_tf_test2],
            test9: [...cd3_tf_test1],
            test10: [...cd3_tf_test2]
        }
    }
};
