/* =========================================================================
   DỮ LIỆU LỊCH SỬ KHỐI 12 - CHUẨN CẤU TRÚC GỐC
   Bản quyền thuộc về số ĐT: 0943.930.787
========================================================================= */

const dataKhoi12 = {
    1: {
        title: "Bài 1: Liên hợp quốc và Trật tự thế giới hai cực I-an-ta",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Hội nghị I-an-ta (tháng 2/1945) có sự tham gia của nguyên thủ 3 cường quốc nào?", options: ["Anh, Pháp, Mỹ.", "Liên Xô, Mỹ, Anh.", "Liên Xô, Mỹ, Pháp.", "Mỹ, Anh, Trung Quốc."], answer: 1 },
                { type: 'mcq', text: "Theo quyết định của Hội nghị I-an-ta, khu vực nào thuộc phạm vi ảnh hưởng của Liên Xô?", options: ["Tây Âu.", "Đông Nam Á.", "Đông Âu.", "Tây Đức."], answer: 2 },
                { type: 'mcq', text: "Tổ chức Liên hợp quốc chính thức được thành lập vào ngày tháng năm nào?", options: ["24/10/1945.", "25/04/1945.", "26/06/1945.", "02/09/1945."], answer: 0 },
                { type: 'mcq', text: "Cơ quan nào của Liên hợp quốc chịu trách nhiệm chính trong việc duy trì hòa bình và an ninh quốc tế?", options: ["Đại hội đồng.", "Hội đồng Bảo an.", "Ban Thư kí.", "Hội đồng Quản thác."], answer: 1 },
                { type: 'mcq', text: "Đặc trưng lớn nhất của trật tự thế giới được hình thành sau Chiến tranh thế giới thứ hai là gì?", options: ["Sự thống trị tuyệt đối của Mỹ.", "Thế giới chia thành hai phe TBCN và XHCN do Mỹ và Liên Xô đứng đầu.", "Sự hình thành thế giới đa cực.", "Sự ra đời của các khối liên minh kinh tế toàn cầu."], answer: 1 },
                { type: 'mcq', text: "Năm cường quốc có quyền phủ quyết (Veto) tại Hội đồng Bảo an Liên hợp quốc bao gồm:", options: ["Mỹ, Anh, Pháp, Đức, Nhật.", "Liên Xô (Nga), Mỹ, Anh, Pháp, Trung Quốc.", "Nga, Mỹ, Nhật, Ấn Độ, Trung Quốc.", "Mỹ, Anh, Pháp, I-ta-li-a, Trung Quốc."], answer: 1 },
                { type: 'mcq', text: "Một trong những mục tiêu cốt lõi của Liên hợp quốc là gì?", options: ["Duy trì hòa bình và an ninh quốc tế.", "Thành lập một chính phủ toàn cầu.", "Can thiệp vũ trang vào tất cả các cuộc xung đột.", "Xóa bỏ biên giới các quốc gia."], answer: 0 },
                { type: 'mcq', text: "Sự phân chia phạm vi ảnh hưởng tại Hội nghị I-an-ta chủ yếu tập trung ở hai khu vực nào?", options: ["Châu Á và Châu Phi.", "Châu Âu và Châu Á.", "Châu Mỹ và Châu Âu.", "Châu Úc và Châu Á."], answer: 1 },
                { type: 'mcq', text: "Tuyên ngôn Quốc tế Nhân quyền được Đại hội đồng Liên hợp quốc thông qua vào năm nào?", options: ["1945.", "1948.", "1954.", "1977."], answer: 1 },
                { type: 'mcq', text: "Sự kiện nào đánh dấu sự sụp đổ của Trật tự thế giới hai cực I-an-ta?", options: ["Hiệp định Giơ-ne-vơ (1954).", "Chiến tranh Việt Nam kết thúc (1975).", "Chế độ XHCN ở Liên Xô và Đông Âu sụp đổ (1989-1991).", "Chiến tranh Lạnh kết thúc (1989)."], answer: 2 }
            ],
            tf: [
                { type: 'tf', text: "Về Hội nghị I-an-ta (1945):", options: [
                    { text: "a) Hội nghị diễn ra khi Chiến tranh thế giới thứ hai bước vào giai đoạn kết thúc.", answer: true },
                    { text: "b) Hội nghị đã thống nhất mục tiêu chung là tiêu diệt tận gốc chủ nghĩa phát xít Đức và quân phiệt Nhật.", answer: true },
                    { text: "c) Hội nghị đã thỏa thuận phân chia phạm vi ảnh hưởng ở châu Phi và Mỹ La-tinh.", answer: false },
                    { text: "d) Những quyết định của Hội nghị đã tạo khuôn khổ cho Trật tự thế giới mới.", answer: true }
                ]},
                { type: 'tf', text: "Về tổ chức Liên hợp quốc:", options: [
                    { text: "a) Được thành lập nhằm mục đích ngăn chặn chiến tranh, duy trì hòa bình thế giới.", answer: true },
                    { text: "b) Hiến chương Liên hợp quốc quy định nguyên tắc bình đẳng chủ quyền giữa các quốc gia.", answer: true },
                    { text: "c) Liên hợp quốc có quyền can thiệp vào công việc nội bộ của các quốc gia thành viên.", answer: false },
                    { text: "d) Việt Nam chính thức trở thành thành viên của Liên hợp quốc vào năm 1977.", answer: true }
                ]},
                { type: 'tf', text: "Về Hội đồng Bảo an Liên hợp quốc:", options: [
                    { text: "a) Là cơ quan duy nhất có quyền áp dụng các biện pháp cưỡng chế, kể cả vũ lực.", answer: true },
                    { text: "b) Mọi quyết định của Hội đồng Bảo an phải được tất cả 193 nước thành viên thông qua.", answer: false },
                    { text: "c) Áp dụng nguyên tắc nhất trí giữa 5 Ủy viên thường trực.", answer: true },
                    { text: "d) Hội đồng Bảo an đã giải quyết triệt để mọi cuộc xung đột trên thế giới từ năm 1945 đến nay.", answer: false }
                ]},
                { type: 'tf', text: "Về Trật tự hai cực I-an-ta:", options: [
                    { text: "a) Hình thành sự đối đầu gay gắt giữa hai phe TBCN và XHCN.", answer: true },
                    { text: "b) Dẫn đến sự bùng nổ của cuộc Chiến tranh lạnh kéo dài hơn 4 thập kỉ.", answer: true },
                    { text: "c) Mọi quốc gia trên thế giới đều phải gia nhập một trong hai khối quân sự NATO hoặc Vác-sa-va.", answer: false },
                    { text: "d) Sự tan rã của Liên Xô đánh dấu sự chấm dứt của Trật tự hai cực I-an-ta.", answer: true }
                ]},
                { type: 'tf', text: "Về quan hệ quốc tế trong thời kì Chiến tranh lạnh:", options: [
                    { text: "a) Diễn ra các cuộc chạy đua vũ trang quy mô lớn giữa Mỹ và Liên Xô.", answer: true },
                    { text: "b) Xảy ra xung đột quân sự trực tiếp giữa quân đội Mỹ và quân đội Liên Xô ở châu Âu.", answer: false },
                    { text: "c) Xuất hiện các cuộc chiến tranh cục bộ mang đậm dấu ấn đối đầu hai cực.", answer: true },
                    { text: "d) Nửa sau những năm 80, xu thế đối thoại và hòa hoãn bắt đầu xuất hiện.", answer: true }
                ]},
                { type: 'tf', text: "Về vai trò của Liên hợp quốc đối với toàn cầu:", options: [
                    { text: "a) Góp phần to lớn vào việc giải trừ chủ nghĩa thực dân.", answer: true },
                    { text: "b) Đã xóa bỏ hoàn toàn được nạn đói và bệnh tật trên toàn cầu.", answer: false },
                    { text: "c) Thúc đẩy hợp tác quốc tế về kinh tế, văn hóa, giáo dục và nhân đạo.", answer: true },
                    { text: "d) Đóng vai trò là diễn đàn quốc tế lớn nhất để điều hòa các quan hệ quốc tế.", answer: true }
                ]},
                { type: 'tf', text: "Về nước Đức sau CTTG II theo quy định của I-an-ta:", options: [
                    { text: "a) Nước Đức phải bồi thường chiến tranh và bị tiêu diệt tận gốc chủ nghĩa phát xít.", answer: true },
                    { text: "b) Nước Đức bị chia cắt thành 4 vùng do Mỹ, Anh, Pháp, Liên Xô chiếm đóng.", answer: true },
                    { text: "c) Thủ đô Béc-lin được giao hoàn toàn cho Mỹ quản lý.", answer: false },
                    { text: "d) Sự phân chia nước Đức là nguyên nhân trực tiếp dẫn đến Chiến tranh Lạnh ở châu Âu.", answer: true }
                ]},
                { type: 'tf', text: "Về Nhật Bản sau CTTG II theo thỏa thuận I-an-ta:", options: [
                    { text: "a) Nhật Bản bị quân đội Mỹ chiếm đóng với danh nghĩa Đồng minh.", answer: true },
                    { text: "b) Liên Xô được trả lại miền Nam đảo Xa-kha-lin và 4 đảo thuộc quần đảo Cu-rin.", answer: true },
                    { text: "c) Nhật Bản bị chia cắt thành hai miền Nam - Bắc như Triều Tiên.", answer: false },
                    { text: "d) Nhật Bản phải từ bỏ mọi thuộc địa đã chiếm đóng trước đó.", answer: true }
                ]},
                { type: 'tf', text: "Về sự sụp đổ của trật tự I-an-ta:", options: [
                    { text: "a) Bắt đầu bằng sự sụp đổ của bức tường Béc-lin và nước Đức thống nhất.", answer: true },
                    { text: "b) Khối quân sự Vác-sa-va giải thể là một biểu hiện của sự sụp đổ.", answer: true },
                    { text: "c) Sự sụp đổ của I-an-ta dẫn đến việc Mỹ dễ dàng thiết lập ngay trật tự đơn cực.", answer: false },
                    { text: "d) Mở ra một thời kỳ phát triển mới của quan hệ quốc tế theo hướng đa cực.", answer: true }
                ]},
                { type: 'tf', text: "Về đóng góp của Việt Nam tại Liên hợp quốc:", options: [
                    { text: "a) Việt Nam đã hoàn thành xuất sắc vai trò Ủy viên không thường trực Hội đồng Bảo an.", answer: true },
                    { text: "b) Việt Nam là một trong những nước đóng góp ngân sách lớn nhất cho Liên hợp quốc.", answer: false },
                    { text: "c) Cử lực lượng tham gia các phái bộ Gìn giữ hòa bình của Liên hợp quốc tại châu Phi.", answer: true },
                    { text: "d) Việt Nam luôn tuân thủ Hiến chương LHQ trong giải quyết các tranh chấp quốc tế.", answer: true }
                ]}
            ]
        }
    },
    2: {
        title: "Bài 2: Thế giới sau Chiến tranh lạnh và Xu thế đa cực",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Sau khi Chiến tranh lạnh kết thúc, trật tự thế giới đang định hình theo xu hướng nào?", options: ["Trật tự đơn cực.", "Trật tự đa cực, nhiều trung tâm.", "Trật tự hai cực kiểu mới.", "Chủ nghĩa đa phương khu vực."], answer: 1 },
                { type: 'mcq', text: "Quốc gia nào có tham vọng thiết lập trật tự thế giới 'đơn cực' sau Chiến tranh lạnh?", options: ["Nga.", "Trung Quốc.", "Nhật Bản.", "Mỹ."], answer: 3 },
                { type: 'mcq', text: "Đặc điểm chung của quan hệ quốc tế sau Chiến tranh lạnh là gì?", options: ["Hòa bình, hợp tác và phát triển là xu thế chủ đạo.", "Chiến tranh thế giới có nguy cơ bùng nổ cao.", "Sự đối đầu ý thức hệ giữa các liên minh quân sự gia tăng.", "Kinh tế không còn là nhân tố quyết định sức mạnh quốc gia."], answer: 0 },
                { type: 'mcq', text: "Hiện tượng nào nổi lên như một xu thế khách quan, chi phối nền kinh tế toàn cầu từ sau Chiến tranh lạnh?", options: ["Quốc hữu hóa nền kinh tế.", "Toàn cầu hóa kinh tế.", "Phân lập các thị trường.", "Chủ nghĩa bảo hộ mậu dịch tuyệt đối."], answer: 1 },
                { type: 'mcq', text: "Để thích ứng với xu thế của thế giới sau Chiến tranh lạnh, hầu hết các quốc gia đều điều chỉnh chiến lược phát triển lấy trọng tâm là lĩnh vực nào?", options: ["Quân sự.", "Chính trị.", "Kinh tế.", "Văn hóa."], answer: 2 },
                { type: 'mcq', text: "Sự kiện nào diễn ra vào ngày 11/9/2001 đã làm thay đổi sâu sắc chính sách đối ngoại của Mỹ và thế giới?", options: ["Khủng hoảng tài chính toàn cầu.", "Vụ tấn công khủng bố vào tòa tháp đôi ở Mỹ.", "Mỹ rút khỏi Hiệp ước chống tên lửa đạn đạo.", "Chiến tranh Vùng Vịnh bùng nổ."], answer: 1 },
                { type: 'mcq', text: "Tổ chức nào sau đây là biểu hiện của xu thế liên kết khu vực ngày càng mạnh mẽ?", options: ["Liên hợp quốc (UN).", "Tổ chức Thương mại Thế giới (WTO).", "Liên minh châu Âu (EU).", "Tổ chức Y tế Thế giới (WHO)."], answer: 2 },
                { type: 'mcq', text: "Trong bối cảnh thế giới đa cực, các nước đang phát triển phải đối mặt với thách thức lớn nhất nào?", options: ["Thiếu hụt vũ khí hạt nhân.", "Nguy cơ tụt hậu về kinh tế, khoa học kĩ thuật và đánh mất bản sắc văn hóa.", "Sự xâm lược quân sự trực tiếp của các nước lớn.", "Gia tăng dân số quá nhanh."], answer: 1 },
                { type: 'mcq', text: "Sức mạnh tổng hợp của một quốc gia trong thế kỉ XXI được đánh giá dựa trên yếu tố cốt lõi nào?", options: ["Sức mạnh quân sự.", "Quy mô dân số.", "Sức mạnh kinh tế, khoa học - công nghệ.", "Diện tích lãnh thổ."], answer: 2 },
                { type: 'mcq', text: "Đâu KHÔNG phải là một trung tâm quyền lực trong trật tự thế giới đa cực hiện nay?", options: ["Mỹ.", "Trung Quốc.", "Liên minh châu Âu (EU).", "Khối Vác-sa-va."], answer: 3 }
            ],
            tf: [
                { type: 'tf', text: "Về sự kết thúc Chiến tranh lạnh:", options: [
                    { text: "a) Tháng 12/1989, Mỹ và Liên Xô chính thức cùng tuyên bố chấm dứt Chiến tranh lạnh.", answer: true },
                    { text: "b) Chiến tranh lạnh kết thúc dẫn đến sự giải thể của khối NATO.", answer: false },
                    { text: "c) Giúp giảm bớt căng thẳng quốc tế, tạo điều kiện giải quyết hòa bình nhiều cuộc xung đột.", answer: true },
                    { text: "d) Sau sự kiện này, Mỹ ngay lập tức thiết lập được thế giới đơn cực.", answer: false }
                ]},
                { type: 'tf', text: "Về xu thế đa cực trong quan hệ quốc tế hiện nay:", options: [
                    { text: "a) Là một quá trình khách quan do sự phát triển không đều về kinh tế giữa các nước.", answer: true },
                    { text: "b) Mỹ dù là siêu cường nhưng không thể một mình chi phối toàn bộ thế giới.", answer: true },
                    { text: "c) Các trung tâm kinh tế lớn như EU, Nhật Bản, Trung Quốc ngày càng vươn lên mạnh mẽ.", answer: true },
                    { text: "d) Trong thế giới đa cực, Liên hợp quốc hoàn toàn mất đi vai trò của mình.", answer: false }
                ]},
                { type: 'tf', text: "Về sự điều chỉnh chiến lược của các cường quốc:", options: [
                    { text: "a) Hầu hết các nước đều lấy phát triển kinh tế làm trọng tâm.", answer: true },
                    { text: "b) Tăng cường chạy đua vũ trang hạt nhân là ưu tiên số một của tất cả các nước lớn.", answer: false },
                    { text: "c) Các nước lớn tăng cường đối thoại, thỏa hiệp, tránh xung đột trực tiếp.", answer: true },
                    { text: "d) Cạnh tranh về khoa học - công nghệ trở thành mặt trận khốc liệt nhất.", answer: true }
                ]},
                { type: 'tf', text: "Về xu thế toàn cầu hóa kinh tế:", options: [
                    { text: "a) Thúc đẩy sự phát triển xã hội hóa lực lượng sản xuất ở mức độ rất cao.", answer: true },
                    { text: "b) Toàn cầu hóa chỉ mang lại lợi ích cho các nước đang phát triển.", answer: false },
                    { text: "c) Toàn cầu hóa kéo theo sự phụ thuộc lẫn nhau ngày càng chặt chẽ giữa các quốc gia.", answer: true },
                    { text: "d) Làm gia tăng khoảng cách giàu nghèo và bất bình đẳng xã hội trên toàn cầu.", answer: true }
                ]},
                { type: 'tf', text: "Về các thách thức an ninh toàn cầu (An ninh phi truyền thống):", options: [
                    { text: "a) Chủ nghĩa khủng bố quốc tế trở thành mối đe dọa lớn đối với an ninh thế giới.", answer: true },
                    { text: "b) Biến đổi khí hậu, dịch bệnh không được coi là vấn đề an ninh.", answer: false },
                    { text: "c) Việc giải quyết các thách thức toàn cầu đòi hỏi sự hợp tác của cộng đồng quốc tế.", answer: true },
                    { text: "d) Xung đột sắc tộc, tôn giáo và tranh chấp lãnh thổ vẫn diễn ra ở nhiều khu vực.", answer: true }
                ]},
                { type: 'tf', text: "Về xu thế hòa bình, hợp tác và phát triển:", options: [
                    { text: "a) Là xu thế chủ đạo chi phối quan hệ quốc tế sau Chiến tranh lạnh.", answer: true },
                    { text: "b) Xu thế này loại trừ hoàn toàn nguy cơ xảy ra chiến tranh ở các khu vực.", answer: false },
                    { text: "c) Tạo môi trường quốc tế thuận lợi cho Việt Nam tiến hành công cuộc Đổi mới.", answer: true },
                    { text: "d) Các tranh chấp quốc tế ngày càng được ưu tiên giải quyết bằng biện pháp hòa bình.", answer: true }
                ]},
                { type: 'tf', text: "Về tổ chức G20 và các diễn đàn kinh tế mới:", options: [
                    { text: "a) G20 bao gồm các nền kinh tế phát triển và mới nổi lớn nhất thế giới.", answer: true },
                    { text: "b) G20 được thành lập nhằm thay thế hoàn toàn tổ chức Liên hợp quốc.", answer: false },
                    { text: "c) Phản ánh sự dịch chuyển quyền lực kinh tế về phía các nước đang phát triển.", answer: true },
                    { text: "d) Việt Nam hiện là thành viên thường trực của G20.", answer: false }
                ]},
                { type: 'tf', text: "Về chính sách đối ngoại của Mỹ sau Chiến tranh lạnh:", options: [
                    { text: "a) Mỹ triển khai chiến lược 'Cam kết và mở rộng' trong thập niên 90.", answer: true },
                    { text: "b) Mỹ từ bỏ vai trò lãnh đạo thế giới để tập trung phát triển kinh tế nội địa.", answer: false },
                    { text: "c) Sử dụng khẩu hiệu dân chủ, nhân quyền để can thiệp vào công việc nội bộ nước khác.", answer: true },
                    { text: "d) Mỹ vẫn là siêu cường kinh tế, quân sự số một thế giới hiện nay.", answer: true }
                ]},
                { type: 'tf', text: "Về sự trỗi dậy của Trung Quốc:", options: [
                    { text: "a) Nhờ công cuộc Cải cách mở cửa, Trung Quốc đã vươn lên thành nền kinh tế lớn thứ 2 thế giới.", answer: true },
                    { text: "b) Trung Quốc đã gia nhập WTO và hội nhập sâu rộng vào kinh tế toàn cầu.", answer: true },
                    { text: "c) Sự vươn lên của Trung Quốc không có ảnh hưởng gì đến cục diện thế giới.", answer: false },
                    { text: "d) Trung Quốc đang cạnh tranh ảnh hưởng quyết liệt với Mỹ trên nhiều lĩnh vực.", answer: true }
                ]},
                { type: 'tf', text: "Về cơ hội và thách thức của Việt Nam trong xu thế mới:", options: [
                    { text: "a) Việt Nam có cơ hội tiếp thu vốn, công nghệ và kinh nghiệm quản lý tiên tiến.", answer: true },
                    { text: "b) Việt Nam đối mặt với sự cạnh tranh kinh tế gay gắt trên thị trường quốc tế.", answer: true },
                    { text: "c) Hội nhập quốc tế buộc Việt Nam phải từ bỏ mục tiêu xây dựng chủ nghĩa xã hội.", answer: false },
                    { text: "d) Khẩu hiệu 'kết hợp sức mạnh dân tộc với sức mạnh thời đại' tiếp tục được phát huy cao độ.", answer: true }
                ]}
            ]
        }
    },
    3: {
        title: "Bài 3: Quá trình hình thành và phát triển của ASEAN",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Hiệp hội các quốc gia Đông Nam Á (ASEAN) được thành lập vào ngày tháng năm nào?", options: ["8/8/1967.", "18/8/1945.", "24/10/1945.", "28/7/1995."], answer: 0 },
                { type: 'mcq', text: "Tổ chức ASEAN được thành lập tại thủ đô của quốc gia nào?", options: ["Gia-các-ta (In-đô-nê-xi-a).", "Băng Cốc (Thái Lan).", "Ma-ni-la (Phi-líp-pin).", "Cua-la Lăm-pơ (Ma-lai-xi-a)."], answer: 1 },
                { type: 'mcq', text: "Năm quốc gia sáng lập ASEAN bao gồm:", options: ["Thái Lan, In-đô-nê-xi-a, Ma-lai-xi-a, Phi-líp-pin, Xin-ga-po.", "Thái Lan, Việt Nam, In-đô-nê-xi-a, Phi-líp-pin, Miến Điện.", "Xin-ga-po, Bru-nây, Thái Lan, Ma-lai-xi-a, Phi-líp-pin.", "Việt Nam, Lào, Cam-pu-chia, Thái Lan, Miến Điện."], answer: 0 },
                { type: 'mcq', text: "Văn kiện nào đánh dấu sự ra đời của ASEAN?", options: ["Hiến chương ASEAN.", "Tuyên bố Băng Cốc.", "Hiệp ước Ba-li.", "Tuyên bố tầm nhìn ASEAN."], answer: 1 },
                { type: 'mcq', text: "Hiệp ước Thân thiện và Hợp tác ở Đông Nam Á (Hiệp ước Ba-li) được kí kết vào năm nào?", options: ["1967.", "1976.", "1995.", "2007."], answer: 1 },
                { type: 'mcq', text: "Nguyên tắc cốt lõi nào của ASEAN được khẳng định trong Hiệp ước Ba-li?", options: ["Sử dụng vũ lực để giải quyết tranh chấp.", "Can thiệp sâu vào công việc nội bộ của các nước thành viên.", "Tôn trọng độc lập, chủ quyền, toàn vẹn lãnh thổ và không can thiệp vào công việc nội bộ của nhau.", "Quyết định theo đa số quá bán."], answer: 2 },
                { type: 'mcq', text: "Việt Nam chính thức gia nhập ASEAN vào năm nào?", options: ["1992.", "1995.", "1997.", "1999."], answer: 1 },
                { type: 'mcq', text: "Sự kiện nào đánh dấu ASEAN bao gồm trọn vẹn 10 quốc gia Đông Nam Á?", options: ["Việt Nam gia nhập ASEAN (1995).", "Lào và Miến Điện gia nhập ASEAN (1997).", "Cam-pu-chia gia nhập ASEAN (1999).", "Đông Ti-mo trở thành quan sát viên (2002)."], answer: 2 },
                { type: 'mcq', text: "Quốc gia nào hiện tại ở Đông Nam Á CHƯA là thành viên chính thức của ASEAN?", options: ["Lào.", "Miến Điện (My-an-ma).", "Đông Ti-mo (Ti-mo Lét-xte).", "Bru-nây."], answer: 2 },
                { type: 'mcq', text: "Bối cảnh quốc tế nào đã thôi thúc các nước Đông Nam Á thành lập ASEAN?", options: ["Chiến tranh thế giới thứ hai vừa kết thúc.", "Chiến tranh lạnh căng thẳng, các nước muốn liên kết để hạn chế ảnh hưởng của các nước lớn và phát triển kinh tế.", "Liên hợp quốc kêu gọi thành lập các khối liên minh quân sự.", "Khủng hoảng tài chính châu Á đang diễn ra gay gắt."], answer: 1 }
            ],
            tf: [
                { type: 'tf', text: "Về hoàn cảnh ra đời của ASEAN:", options: [
                    { text: "a) Các nước Đông Nam Á vừa giành được độc lập, có nhu cầu hợp tác để phát triển kinh tế.", answer: true },
                    { text: "b) ASEAN được thành lập dưới sự chỉ đạo trực tiếp của Liên hợp quốc.", answer: false },
                    { text: "c) Các nước muốn liên kết lại để hạn chế sự can thiệp của các cường quốc bên ngoài.", answer: true },
                    { text: "d) Sự xuất hiện của các tổ chức liên kết khu vực trên thế giới (như EEC) đã cổ vũ các nước Đông Nam Á.", answer: true }
                ]},
                { type: 'tf', text: "Về Tuyên bố Băng Cốc (1967):", options: [
                    { text: "a) Là văn kiện nền tảng, tuyên bố thành lập Hiệp hội các quốc gia Đông Nam Á.", answer: true },
                    { text: "b) Xác định mục tiêu của ASEAN là liên minh quân sự chống lại phe XHCN.", answer: false },
                    { text: "c) Nhấn mạnh mục tiêu thúc đẩy tăng trưởng kinh tế, tiến bộ xã hội và phát triển văn hóa khu vực.", answer: true },
                    { text: "d) Quy định ASEAN sẽ mở rộng kết nạp tất cả các nước châu Á.", answer: false }
                ]},
                { type: 'tf', text: "Về Hiệp ước Ba-li (1976):", options: [
                    { text: "a) Đánh dấu bước khởi sắc của ASEAN sau một thời gian dài hoạt động mờ nhạt.", answer: true },
                    { text: "b) Đề ra nguyên tắc giải quyết các tranh chấp bằng biện pháp hòa bình.", answer: true },
                    { text: "c) Xóa bỏ biên giới quốc gia giữa các nước thành viên.", answer: false },
                    { text: "d) Nguyên tắc đồng thuận (consensus) là một đặc trưng quan trọng trong phương cách hoạt động của ASEAN.", answer: true }
                ]},
                { type: 'tf', text: "Về quá trình phát triển thành ASEAN 10:", options: [
                    { text: "a) Quá trình mở rộng thành viên diễn ra rất nhanh chóng ngay sau khi thành lập.", answer: false },
                    { text: "b) Bru-nây gia nhập ASEAN năm 1984, trở thành thành viên thứ 6.", answer: true },
                    { text: "c) Việc giải quyết xong vấn đề Cam-pu-chia (1991) đã tháo gỡ rào cản lớn nhất cho việc mở rộng ASEAN.", answer: true },
                    { text: "d) Từ 'ASEAN 5' phát triển thành 'ASEAN 10' đã biến khu vực từ đối đầu sang đối thoại, hợp tác.", answer: true }
                ]},
                { type: 'tf', text: "Về quan hệ giữa Việt Nam và ASEAN trước năm 1995:", options: [
                    { text: "a) Từ 1967 đến 1975, quan hệ giữa Việt Nam và ASEAN khá căng thẳng do bối cảnh Chiến tranh lạnh.", answer: true },
                    { text: "b) Việt Nam đã nộp đơn gia nhập ASEAN ngay từ năm 1967 nhưng bị từ chối.", answer: false },
                    { text: "c) Trong thập niên 80, quan hệ lại trở nên đối đầu do vấn đề Cam-pu-chia.", answer: true },
                    { text: "d) Năm 1992, Việt Nam kí Hiệp ước Ba-li, mở ra thời kì đối thoại và hợp tác.", answer: true }
                ]},
                { type: 'tf', text: "Về ý nghĩa của việc thành lập ASEAN:", options: [
                    { text: "a) Đặt nền móng cho một khu vực Đông Nam Á hòa bình, ổn định.", answer: true },
                    { text: "b) Biến Đông Nam Á thành khu vực giàu có nhất thế giới ngay lập tức.", answer: false },
                    { text: "c) Khởi đầu quá trình liên kết kinh tế nội khối.", answer: true },
                    { text: "d) Tạo tiếng nói chung của khu vực trên các diễn đàn quốc tế.", answer: true }
                ]},
                { type: 'tf', text: "Về các nguyên tắc hoạt động của ASEAN (Phương cách ASEAN):", options: [
                    { text: "a) Quyết định dựa trên đa số phiếu bầu của các thành viên.", answer: false },
                    { text: "b) Không can thiệp vào công việc nội bộ của nhau.", answer: true },
                    { text: "c) Tôn trọng chủ quyền và toàn vẹn lãnh thổ.", answer: true },
                    { text: "d) Giải quyết hòa bình các tranh chấp, không đe dọa sử dụng vũ lực.", answer: true }
                ]},
                { type: 'tf', text: "Về Hiến chương ASEAN (2007):", options: [
                    { text: "a) Là văn kiện pháp lý quan trọng nhất, tạo khung pháp lý cho Cộng đồng ASEAN.", answer: true },
                    { text: "b) Chuyển ASEAN từ một hiệp hội lỏng lẻo thành một tổ chức có tư cách pháp nhân.", answer: true },
                    { text: "c) Hiến chương quy định loại bỏ quyền phủ quyết của các nước nhỏ.", answer: false },
                    { text: "d) Thể hiện quyết tâm hội nhập sâu rộng hơn của các nước Đông Nam Á.", answer: true }
                ]},
                { type: 'tf', text: "Về vai trò của Liên Xô và Mỹ đối với ASEAN:", options: [
                    { text: "a) Mỹ là quốc gia trực tiếp soạn thảo Tuyên bố Băng Cốc.", answer: false },
                    { text: "b) Sự rút quân của Mỹ sau chiến tranh Việt Nam làm các nước ASEAN phải tăng cường liên kết tự cường.", answer: true },
                    { text: "c) Sự sụp đổ của Liên Xô tác động đến cục diện khu vực, tạo thuận lợi cho ASEAN mở rộng.", answer: true },
                    { text: "d) Liên Xô từng viện trợ kinh tế để ASEAN hoạt động trong thập niên 70.", answer: false }
                ]},
                { type: 'tf', text: "Về đặc điểm của tổ chức ASEAN:", options: [
                    { text: "a) Là một tổ chức hợp tác toàn diện mang tính khu vực.", answer: true },
                    { text: "b) Là một liên minh quân sự tương tự như NATO ở châu Á.", answer: false },
                    { text: "c) Mức độ liên kết kinh tế ban đầu khá lỏng lẻo, chủ yếu là hợp tác chính trị - an ninh.", answer: true },
                    { text: "d) Bao gồm các quốc gia có chế độ chính trị, tôn giáo, văn hóa rất đa dạng.", answer: true }
                ]}
            ]
        }
    },
    4: {
        title: "Bài 4: Cộng đồng ASEAN và vai trò của Việt Nam",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Cộng đồng ASEAN (AC) chính thức được thành lập vào ngày tháng năm nào?", options: ["31/12/2015.", "8/8/2007.", "1/1/2000.", "28/7/1995."], answer: 0 },
                { type: 'mcq', text: "Cộng đồng ASEAN được xây dựng dựa trên bao nhiêu trụ cột chính?", options: ["2 trụ cột.", "3 trụ cột.", "4 trụ cột.", "5 trụ cột."], answer: 1 },
                { type: 'mcq', text: "Đâu KHÔNG phải là một trụ cột của Cộng đồng ASEAN?", options: ["Cộng đồng Chính trị - An ninh ASEAN (APSC).", "Cộng đồng Kinh tế ASEAN (AEC).", "Cộng đồng Văn hóa - Xã hội ASEAN (ASCC).", "Cộng đồng Quân sự - Phòng thủ ASEAN (AMDC)."], answer: 3 },
                { type: 'mcq', text: "Mục tiêu chính của Cộng đồng Kinh tế ASEAN (AEC) là gì?", options: ["Xóa bỏ hoàn toàn đồng nội tệ của các nước thành viên.", "Tạo ra một thị trường chung và cơ sở sản xuất thống nhất, tự do luân chuyển hàng hóa, dịch vụ, đầu tư, lao động có tay nghề.", "Thành lập một ngân hàng trung ương duy nhất của châu Á.", "Xây dựng các tập đoàn kinh tế độc quyền nhà nước."], answer: 1 },
                { type: 'mcq', text: "Cộng đồng Văn hóa - Xã hội ASEAN (ASCC) hướng tới mục tiêu cốt lõi nào?", options: ["Xây dựng một nền văn hóa đồng nhất, loại bỏ văn hóa bản địa.", "Lấy con người làm trung tâm, thúc đẩy đoàn kết, hiểu biết và nâng cao chất lượng cuộc sống.", "Kí kết các hiệp ước phòng thủ quân sự chung.", "Cấm giao lưu văn hóa với các nước ngoài khối ASEAN."], answer: 1 },
                { type: 'mcq', text: "Sự kiện nào thể hiện dấu ấn đậm nét của Việt Nam khi giữ vai trò Chủ tịch luân phiên ASEAN năm 2020?", options: ["Đăng cai Đại hội Thể thao Đông Nam Á (SEA Games).", "Lãnh đạo ASEAN ứng phó hiệu quả với đại dịch COVID-19 (Hội nghị cấp cao trực tuyến).", "Thành lập khu vực mậu dịch tự do AFTA.", "Kết nạp Đông Ti-mo vào ASEAN."], answer: 1 },
                { type: 'mcq', text: "Vai trò của Việt Nam trong việc mở rộng ASEAN là gì?", options: ["Ngăn cản các nước Đông Dương khác gia nhập ASEAN.", "Việt Nam là cầu nối quan trọng giúp Lào, Miến Điện và Cam-pu-chia gia nhập ASEAN, hoàn tất ý tưởng ASEAN 10.", "Việt Nam là nước sáng lập ra ASEAN.", "Việt Nam tự ý kết nạp các nước mà không cần thông qua hiệp hội."], answer: 1 },
                { type: 'mcq', text: "Tầm nhìn Cộng đồng ASEAN 2025 có tên gọi là gì?", options: ["Cùng nhau vươn xa.", "ASEAN năng động, hội nhập và hướng tới người dân.", "Vững vàng tiến bước, hướng tới tương lai.", "Châu Á trỗi dậy."], answer: 1 },
                { type: 'mcq', text: "Trong lĩnh vực an ninh, Việt Nam đã đóng góp sáng kiến nào quan trọng để duy trì hòa bình trên Biển Đông cùng ASEAN?", options: ["Kêu gọi Mỹ triển khai quân đội đồn trú thường xuyên.", "Thúc đẩy kí kết DOC và hướng tới hoàn thiện COC.", "Rút khỏi các diễn đàn đa phương để đàm phán song phương.", "Xây dựng các căn cứ quân sự liên hợp của ASEAN."], answer: 1 },
                { type: 'mcq', text: "Khẩu hiệu (Motto) của ASEAN là gì?", options: ["Một Tầm nhìn, Một Bản sắc, Một Cộng đồng.", "Hòa bình, Độc lập, Tự do.", "Đoàn kết là sức mạnh.", "Đa dạng trong thống nhất."], answer: 0 }
            ],
            tf: [
                { type: 'tf', text: "Về Cộng đồng ASEAN (AC):", options: [
                    { text: "a) Việc thành lập Cộng đồng ASEAN là bước ngoặt lịch sử sau gần 50 năm thành lập Hiệp hội.", answer: true },
                    { text: "b) Đánh dấu mức độ liên kết cao nhất, chặt chẽ nhất của các nước Đông Nam Á.", answer: true },
                    { text: "c) AC ra đời làm mất đi chủ quyền quốc gia của các nước thành viên.", answer: false },
                    { text: "d) Phản ánh nhu cầu hợp tác sâu rộng để đối phó với các thách thức toàn cầu.", answer: true }
                ]},
                { type: 'tf', text: "Về Cộng đồng Chính trị - An ninh ASEAN (APSC):", options: [
                    { text: "a) Nhằm biến ASEAN thành một khối liên minh quân sự để phòng thủ.", answer: false },
                    { text: "b) Mục tiêu là xây dựng môi trường hòa bình, ổn định, chia sẻ các chuẩn mực chung.", answer: true },
                    { text: "c) Khẳng định cam kết giải quyết tranh chấp bằng biện pháp hòa bình.", answer: true },
                    { text: "d) Tôn trọng tính trung tâm của ASEAN trong cấu trúc khu vực đang định hình.", answer: true }
                ]},
                { type: 'tf', text: "Về Cộng đồng Kinh tế ASEAN (AEC):", options: [
                    { text: "a) AEC tạo ra một thị trường chung rộng lớn với hơn 600 triệu dân.", answer: true },
                    { text: "b) Cho phép lao động phổ thông di chuyển tự do không giới hạn giữa các nước.", answer: false },
                    { text: "c) Giúp tăng cường sức cạnh tranh của ASEAN trên thị trường toàn cầu.", answer: true },
                    { text: "d) Tạo ra sự phát triển đồng đều tuyệt đối giữa các nước thành viên.", answer: false }
                ]},
                { type: 'tf', text: "Về Cộng đồng Văn hóa - Xã hội ASEAN (ASCC):", options: [
                    { text: "a) Nhằm xây dựng một cộng đồng hướng vào người dân và lấy người dân làm trung tâm.", answer: true },
                    { text: "b) Thúc đẩy bảo vệ môi trường, ứng phó biến đổi khí hậu và quản lý thiên tai.", answer: true },
                    { text: "c) Yêu cầu mọi nước phải nói chung một ngôn ngữ là tiếng Anh trong giao tiếp hàng ngày.", answer: false },
                    { text: "d) Nâng cao bản sắc ASEAN thông qua giao lưu văn hóa, thể thao, giáo dục.", answer: true }
                ]},
                { type: 'tf', text: "Về đóng góp chung của Việt Nam trong ASEAN:", options: [
                    { text: "a) Việt Nam luôn là thành viên chủ động, tích cực và có trách nhiệm.", answer: true },
                    { text: "b) Đóng góp lớn nhất của Việt Nam là viện trợ tài chính vô hoàn lại cho các nước thành viên.", answer: false },
                    { text: "c) Góp phần củng cố đoàn kết nội khối và phát huy vai trò trung tâm của ASEAN.", answer: true },
                    { text: "d) Đã đăng cai tổ chức thành công nhiều Hội nghị cấp cao ASEAN (1998, 2010, 2020).", answer: true }
                ]},
                { type: 'tf', text: "Về quan điểm đối ngoại của Việt Nam trong ASEAN:", options: [
                    { text: "a) Coi trọng việc giữ vững môi trường hòa bình để phát triển đất nước.", answer: true },
                    { text: "b) Luôn tìm cách áp đặt quan điểm của mình lên các nước nhỏ hơn.", answer: false },
                    { text: "c) Gắn kết chặt chẽ lợi ích quốc gia với lợi ích chung của toàn khu vực.", answer: true },
                    { text: "d) Tích cực tham gia xây dựng các quy tắc, chuẩn mực ứng xử chung của khu vực.", answer: true }
                ]},
                { type: 'tf', text: "Về Tuyên bố ứng xử các bên ở Biển Đông (DOC):", options: [
                    { text: "a) Được ASEAN và Trung Quốc kí kết vào năm 2002 tại Cam-pu-chia.", answer: true },
                    { text: "b) Là văn kiện có tính ràng buộc pháp lý cao nhất, có chế tài xử phạt quân sự.", answer: false },
                    { text: "c) Cam kết giải quyết tranh chấp bằng hòa bình, tôn trọng luật pháp quốc tế (UNCLOS 1982).", answer: true },
                    { text: "d) Việt Nam có vai trò tích cực trong việc thúc đẩy kí kết DOC.", answer: true }
                ]},
                { type: 'tf', text: "Về thách thức của ASEAN trong giai đoạn hiện nay:", options: [
                    { text: "a) Sự đa dạng về trình độ phát triển kinh tế tạo ra khoảng cách nội khối lớn.", answer: true },
                    { text: "b) Cạnh tranh chiến lược giữa các nước lớn (Mỹ - Trung) gây sức ép chia rẽ ASEAN.", answer: true },
                    { text: "c) Tổ chức ASEAN hiện đang đối mặt với nguy cơ giải thể do khủng hoảng tài chính.", answer: false },
                    { text: "d) Biến đổi khí hậu, an ninh mạng, dịch bệnh là những thách thức chung cần ứng phó.", answer: true }
                ]},
                { type: 'tf', text: "Về lợi ích của Việt Nam khi tham gia Cộng đồng ASEAN:", options: [
                    { text: "a) Mở rộng thị trường xuất khẩu, thu hút FDI mạnh mẽ.", answer: true },
                    { text: "b) Nâng cao vị thế và uy tín chính trị trên trường quốc tế.", answer: true },
                    { text: "c) Được các nước ASEAN bảo vệ miễn phí về mặt quân sự.", answer: false },
                    { text: "d) Có cơ hội tiếp thu kinh nghiệm quản lý, khoa học kĩ thuật tiên tiến.", answer: true }
                ]},
                { type: 'tf', text: "Đánh giá vai trò trung tâm của ASEAN:", options: [
                    { text: "a) ASEAN là động lực thúc đẩy các diễn đàn đa phương khu vực (ARF, EAS, APEC).", answer: true },
                    { text: "b) Các cường quốc lớn đều tôn trọng và ủng hộ vai trò trung tâm của ASEAN.", answer: true },
                    { text: "c) ASEAN có quyền phủ quyết mọi quyết định của Liên hợp quốc tại châu Á.", answer: false },
                    { text: "d) Giúp Đông Nam Á trở thành một trong những khu vực năng động nhất thế giới.", answer: true }
                ]}
            ]
        }
    },
    5: {
        title: "Bài 5: Cách mạng tháng Tám năm 1945",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Hội nghị Ban Chấp hành Trung ương Đảng lần thứ 8 (tháng 5/1941) do ai chủ trì?", options: ["Trần Phú.", "Nguyễn Văn Cừ.", "Lê Duẩn.", "Nguyễn Ái Quốc."], answer: 3 },
                { type: 'mcq', text: "Nhiệm vụ hàng đầu của cách mạng Việt Nam được xác định tại Hội nghị Trung ương 8 (1941) là gì?", options: ["Giải phóng giai cấp công nhân.", "Đánh đổ phong kiến, chia ruộng đất cho dân cày.", "Giải phóng dân tộc.", "Xây dựng chủ nghĩa xã hội."], answer: 2 },
                { type: 'mcq', text: "Mặt trận Việt Minh (Việt Nam độc lập đồng minh) được thành lập vào năm nào?", options: ["1930.", "1939.", "1941.", "1945."], answer: 2 },
                { type: 'mcq', text: "Chỉ thị 'Nhật - Pháp bắn nhau và hành động của chúng ta' (12/3/1945) đã xác định kẻ thù chính cụ thể trước mắt của nhân dân Đông Dương là ai?", options: ["Thực dân Pháp.", "Phát xít Nhật.", "Pháp và Nhật.", "Quân Đồng minh."], answer: 1 },
                { type: 'mcq', text: "Sự kiện nào tạo ra 'thời cơ ngàn năm có một' cho Cách mạng tháng Tám (1945)?", options: ["Phát xít Đức đầu hàng Đồng minh.", "Pháp quay trở lại xâm lược Đông Dương.", "Nhật Bản đảo chính Pháp.", "Phát xít Nhật đầu hàng Đồng minh không điều kiện."], answer: 3 },
                { type: 'mcq', text: "Quốc dân Đại hội Tân Trào (16/8/1945) đã quyết định điều gì?", options: ["Tán thành chủ trương Tổng khởi nghĩa, cử ra Ủy ban Dân tộc giải phóng Việt Nam do Hồ Chí Minh làm Chủ tịch.", "Đổi tên Đảng thành Đảng Lao động Việt Nam.", "Quyết định tiến hành kháng chiến chống Pháp.", "Thành lập Chính phủ Liên hiệp kháng chiến."], answer: 0 },
                { type: 'mcq', text: "Khởi nghĩa giành chính quyền ở Hà Nội thắng lợi vào ngày nào?", options: ["19/8/1945.", "23/8/1945.", "25/8/1945.", "2/9/1945."], answer: 0 },
                { type: 'mcq', text: "Bản Tuyên ngôn Độc lập (2/9/1945) đã trích dẫn Tuyên ngôn của hai quốc gia nào?", options: ["Anh và Pháp.", "Nga và Mỹ.", "Mỹ và Pháp.", "Trung Quốc và Nhật Bản."], answer: 2 },
                { type: 'mcq', text: "Hình thái của cuộc Cách mạng tháng Tám năm 1945 ở Việt Nam là gì?", options: ["Tổng bãi công của công nhân.", "Khởi nghĩa từng phần tiến lên Tổng khởi nghĩa.", "Đấu tranh nghị trường kết hợp biểu tình.", "Chiến tranh giải phóng dân tộc quy mô lớn."], answer: 1 },
                { type: 'mcq', text: "Nguyên nhân chủ quan quan trọng nhất quyết định thắng lợi của Cách mạng tháng Tám (1945) là gì?", options: ["Sự lãnh đạo đúng đắn, sáng tạo của Đảng và Chủ tịch Hồ Chí Minh.", "Lực lượng vũ trang của Việt Nam rất hùng hậu.", "Sự đầu hàng của phát xít Nhật.", "Sự giúp đỡ to lớn của Liên Xô và Trung Quốc."], answer: 0 }
            ],
            tf: [
                { type: 'tf', text: "Về Hội nghị Ban Chấp hành Trung ương Đảng (5/1941):", options: [
                    { text: "a) Đánh dấu sự hoàn chỉnh chủ trương chuyển hướng chỉ đạo chiến lược của Đảng.", answer: true },
                    { text: "b) Đặt nhiệm vụ giải phóng dân tộc lên hàng đầu, tạm gác khẩu hiệu cách mạng ruộng đất.", answer: true },
                    { text: "c) Quyết định thành lập Mặt trận Liên hiệp quốc dân Việt Nam (Liên Việt).", answer: false },
                    { text: "d) Giải quyết vấn đề dân tộc trong khuôn khổ từng nước Đông Dương.", answer: true }
                ]},
                { type: 'tf', text: "Về sự chuẩn bị lực lượng cho khởi nghĩa vũ trang:", options: [
                    { text: "a) Lực lượng chính trị được xây dựng và tập hợp rộng rãi trong các Hội Cứu quốc của Mặt trận Việt Minh.", answer: true },
                    { text: "b) Lực lượng vũ trang chủ lực được xây dựng với quy mô hàng triệu quân mang vũ khí hiện đại.", answer: false },
                    { text: "c) Đội Việt Nam Tuyên truyền Giải phóng quân được thành lập ngày 22/12/1944.", answer: true },
                    { text: "d) Căn cứ địa cách mạng Bắc Sơn - Võ Nhai và Cao Bằng được củng cố và mở rộng.", answer: true }
                ]},
                { type: 'tf', text: "Về cao trào kháng Nhật cứu nước (từ 3/1945):", options: [
                    { text: "a) Bùng nổ ngay sau khi Nhật đảo chính Pháp.", answer: true },
                    { text: "b) Phong trào 'Phá kho thóc, giải quyết nạn đói' đã đáp ứng nguyện vọng cấp bách của nông dân.", answer: true },
                    { text: "c) Đây là cuộc tập dượt cuối cùng, chuẩn bị trực tiếp cho Tổng khởi nghĩa.", answer: true },
                    { text: "d) Đảng đã ra lệnh Tổng khởi nghĩa trên toàn quốc ngay trong ngày 12/3/1945.", answer: false }
                ]},
                { type: 'tf', text: "Về thời cơ của Cách mạng tháng Tám:", options: [
                    { text: "a) Thời cơ khách quan xuất hiện khi Nhật đầu hàng Đồng minh (15/8/1945).", answer: true },
                    { text: "b) Thời cơ tồn tại rất lâu dài, kéo dài đến hết năm 1945.", answer: false },
                    { text: "c) Thời cơ chỉ thực sự chín muồi khi quân Đồng minh chưa kịp kéo vào Đông Dương.", answer: true },
                    { text: "d) Đảng ta đã nhạy bén, chớp đúng 'thời cơ ngàn năm có một' để phát lệnh Tổng khởi nghĩa.", answer: true }
                ]},
                { type: 'tf', text: "Về diễn biến Tổng khởi nghĩa tháng Tám:", options: [
                    { text: "a) Cuộc khởi nghĩa nổ ra nhanh chóng, ít đổ máu và thắng lợi trong vòng 15 ngày.", answer: true },
                    { text: "b) Lực lượng vũ trang đóng vai trò quyết định, lực lượng chính trị là lực lượng xung kích.", answer: false },
                    { text: "c) Thắng lợi ở Hà Nội (19/8), Huế (23/8), Sài Gòn (25/8) có ý nghĩa quyết định đối với cả nước.", answer: true },
                    { text: "d) Ngày 30/8/1945, vua Bảo Đại thoái vị, trao ấn kiếm cho chính quyền cách mạng.", answer: true }
                ]},
                { type: 'tf', text: "Về Tuyên ngôn Độc lập (2/9/1945):", options: [
                    { text: "a) Khẳng định quyền độc lập, tự do của dân tộc Việt Nam trước toàn thế giới.", answer: true },
                    { text: "b) Là văn bản pháp lý chính thức khai sinh ra nước Việt Nam Dân chủ Cộng hòa.", answer: true },
                    { text: "c) Tuyên bố Việt Nam sẽ gia nhập Liên minh quân sự phương Tây.", answer: false },
                    { text: "d) Thể hiện lập trường kiên quyết bảo vệ nền độc lập vừa giành được.", answer: true }
                ]},
                { type: 'tf', text: "Về nguyên nhân thắng lợi của Cách mạng tháng Tám:", options: [
                    { text: "a) Truyền thống yêu nước nồng nàn và tinh thần đoàn kết của dân tộc.", answer: true },
                    { text: "b) Sự chuẩn bị chu đáo suốt 15 năm của Đảng qua các phong trào cách mạng.", answer: true },
                    { text: "c) Quân Nhật ở Đông Dương tự nguyện giao chính quyền cho Việt Minh mà không kháng cự.", answer: false },
                    { text: "d) Điều kiện khách quan thuận lợi khi phe phát xít bị tiêu diệt.", answer: true }
                ]},
                { type: 'tf', text: "Về ý nghĩa lịch sử đối với dân tộc:", options: [
                    { text: "a) Phá tan xiềng xích nô lệ của thực dân Pháp hơn 80 năm và ách thống trị của phát xít Nhật.", answer: true },
                    { text: "b) Lật đổ chế độ phong kiến quân chủ tồn tại ngót ngàn năm ở Việt Nam.", answer: true },
                    { text: "c) Mở ra kỉ nguyên mới: kỉ nguyên độc lập, tự do gắn liền với chủ nghĩa xã hội.", answer: true },
                    { text: "d) Đưa Việt Nam trở thành quốc gia công nghiệp phát triển nhất Đông Nam Á.", answer: false }
                ]},
                { type: 'tf', text: "Về ý nghĩa quốc tế của Cách mạng tháng Tám:", options: [
                    { text: "a) Là thắng lợi đầu tiên trong thời đại mới của một dân tộc nhược tiểu tự giải phóng.", answer: true },
                    { text: "b) Cổ vũ mạnh mẽ phong trào giải phóng dân tộc trên thế giới.", answer: true },
                    { text: "c) Góp phần làm tan rã hệ thống thuộc địa của chủ nghĩa đế quốc.", answer: true },
                    { text: "d) Là nguyên nhân trực tiếp làm sụp đổ chủ nghĩa phát xít ở châu Âu.", answer: false }
                ]},
                { type: 'tf', text: "Đánh giá tính chất của Cách mạng tháng Tám:", options: [
                    { text: "a) Là một cuộc cách mạng giải phóng dân tộc điển hình.", answer: true },
                    { text: "b) Mang đậm tính chất dân chủ vì đã đem lại quyền tự do, dân chủ cho nhân dân.", answer: true },
                    { text: "c) Là một cuộc cách mạng tư sản do giai cấp tư sản lãnh đạo.", answer: false },
                    { text: "d) Có tính bạo lực cách mạng, dựa vào sức mạnh của quần chúng nhân dân.", answer: true }
                ]}
            ]
        }
    },
    6: {
        title: "Bài 6: Cuộc kháng chiến chống thực dân Pháp (1945 - 1954)",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Khó khăn lớn nhất đe dọa trực tiếp đến sự tồn vong của nước Việt Nam Dân chủ Cộng hòa ngay sau Cách mạng tháng Tám là gì?", options: ["Nạn đói.", "Nạn dốt.", "Ngân quỹ nhà nước trống rỗng.", "Thù trong giặc ngoài (ngoại xâm và nội phản)."], answer: 3 },
                { type: 'mcq', text: "Để giải quyết khó khăn về tài chính, Chính phủ đã phát động phong trào gì?", options: ["Hũ gạo cứu đói.", "Tuần lễ Vàng và Quỹ độc lập.", "Bình dân học vụ.", "Tăng gia sản xuất."], answer: 1 },
                { type: 'mcq', text: "Sự kiện nào là nguyên nhân trực tiếp làm bùng nổ cuộc kháng chiến toàn quốc chống thực dân Pháp (12/1946)?", options: ["Pháp đánh chiếm Nam Bộ.", "Pháp khiêu khích ở Hải Phòng và Lạng Sơn.", "Pháp gửi tối hậu thư đòi tước vũ khí của Vệ quốc đoàn ở Hà Nội.", "Hội nghị Phông-ten-nơ-blô thất bại."], answer: 2 },
                { type: 'mcq', text: "Đường lối kháng chiến chống Pháp của Đảng được tóm tắt trong 4 từ nào?", options: ["Nhanh chóng, bất ngờ, triệt để, toàn diện.", "Toàn dân, toàn diện, trường kì, tự lực cánh sinh.", "Liên minh, hiện đại, thần tốc, táo bạo.", "Du kích, phòng ngự, phản công, chiến thắng."], answer: 1 },
                { type: 'mcq', text: "Chiến dịch nào đã làm thất bại hoàn toàn chiến lược 'đánh nhanh thắng nhanh' của thực dân Pháp?", options: ["Chiến dịch Việt Bắc thu - đông (1947).", "Chiến dịch Biên giới thu - đông (1950).", "Chiến dịch Tây Bắc (1952).", "Chiến dịch Điện Biên Phủ (1954)."], answer: 0 },
                { type: 'mcq', text: "Chiến thắng Biên giới thu - đông (1950) có ý nghĩa chiến lược như thế nào đối với cuộc kháng chiến?", options: ["Giải phóng hoàn toàn thủ đô Hà Nội.", "Đánh bại Kế hoạch Na-va của Pháp.", "Quân ta giành được quyền chủ động về chiến lược trên chiến trường chính Bắc Bộ.", "Buộc Pháp phải kí Hiệp định Pa-ri."], answer: 2 },
                { type: 'mcq', text: "Đại hội đại biểu toàn quốc lần thứ II của Đảng (2/1951) đã quyết định đổi tên Đảng thành gì?", options: ["Đảng Cộng sản Đông Dương.", "Đảng Lao động Việt Nam.", "Đảng Cộng sản Việt Nam.", "Đảng Dân chủ Việt Nam."], answer: 1 },
                { type: 'mcq', text: "Điểm then chốt của Kế hoạch Na-va (1953) của thực dân Pháp là gì?", options: ["Tập trung binh lực, xây dựng đội quân cơ động chiến lược mạnh.", "Xây dựng phòng tuyến boong-ke ở Đồng bằng Bắc Bộ.", "Đánh phá miền Bắc bằng không quân.", "Cầu viện quân đội Mỹ trực tiếp tham chiến."], answer: 0 },
                { type: 'mcq', text: "Tập đoàn cứ điểm Điện Biên Phủ được Pháp và Mỹ đánh giá là", options: ["pháo đài không thể công phá.", "căn cứ tạm thời để rút lui.", "trung tâm huấn luyện lính mới.", "trạm trung chuyển vũ khí."], answer: 0 },
                { type: 'mcq', text: "Hiệp định Giơ-ne-vơ (1954) quy định vĩ tuyến nào là giới tuyến quân sự tạm thời chia cắt hai miền Nam - Bắc Việt Nam?", options: ["Vĩ tuyến 13.", "Vĩ tuyến 16.", "Vĩ tuyến 17.", "Vĩ tuyến 20."], answer: 2 }
            ],
            tf: [
                { type: 'tf', text: "Về tình hình Việt Nam sau Cách mạng tháng Tám (1945):", options: [
                    { text: "a) Đất nước ở trong tình thế 'ngàn cân treo sợi tóc'.", answer: true },
                    { text: "b) Hơn 20 vạn quân Tưởng kéo vào miền Bắc, quân Anh dọn đường cho Pháp ở miền Nam.", answer: true },
                    { text: "c) Liên hợp quốc cử lực lượng gìn giữ hòa bình đến bảo vệ Việt Nam.", answer: false },
                    { text: "d) Chính quyền cách mạng còn non trẻ, thiếu thốn kinh nghiệm và tài chính.", answer: true }
                ]},
                { type: 'tf', text: "Về sách lược ngoại giao của ta (9/1945 - 12/1946):", options: [
                    { text: "a) Trước 6/3/1946: Ta hòa hoãn với Tưởng ở miền Bắc để tập trung đánh Pháp ở miền Nam.", answer: true },
                    { text: "b) Kí Hiệp định Sơ bộ (6/3/1946) và Tạm ước (14/9/1946) để mượn tay Pháp đuổi Tưởng.", answer: true },
                    { text: "c) Ta từ chối mọi sự nhượng bộ đối với thực dân Pháp.", answer: false },
                    { text: "d) Sách lược này giúp ta tranh thủ thời gian hòa bình để củng cố lực lượng.", answer: true }
                ]},
                { type: 'tf', text: "Về Lời kêu gọi toàn quốc kháng chiến (19/12/1946):", options: [
                    { text: "a) Do Chủ tịch Hồ Chí Minh soạn thảo.", answer: true },
                    { text: "b) Khẳng định quyết tâm thà hi sinh tất cả chứ nhất định không chịu mất nước, không chịu làm nô lệ.", answer: true },
                    { text: "c) Kêu gọi quân Đồng minh can thiệp bằng vũ trang.", answer: false },
                    { text: "d) Là lời hịch cứu quốc, phát động toàn dân đứng lên đánh giặc.", answer: true }
                ]},
                { type: 'tf', text: "Về đường lối kháng chiến chống Pháp:", options: [
                    { text: "a) 'Toàn dân' nghĩa là huy động sức mạnh của toàn thể dân tộc, không phân biệt già trẻ, gái trai.", answer: true },
                    { text: "b) 'Trường kì' là đánh nhanh thắng nhanh để tiết kiệm nguồn lực.", answer: false },
                    { text: "c) 'Toàn diện' là đánh giặc trên mọi mặt trận: quân sự, chính trị, kinh tế, văn hóa, ngoại giao.", answer: true },
                    { text: "d) 'Tự lực cánh sinh' là dựa vào sức mình là chính, nhưng không từ chối sự giúp đỡ của quốc tế.", answer: true }
                ]},
                { type: 'tf', text: "Về Chiến dịch Việt Bắc thu - đông (1947):", options: [
                    { text: "a) Pháp âm mưu tiêu diệt cơ quan đầu não kháng chiến và bộ đội chủ lực của ta.", answer: true },
                    { text: "b) Ta đã sử dụng chiến thuật 'Vườn không nhà trống' và phục kích trên các tuyến đường giao thông.", answer: true },
                    { text: "c) Ta đã bắt sống được Tổng chỉ huy quân đội Pháp.", answer: false },
                    { text: "d) Buộc Pháp phải chuyển từ 'đánh nhanh thắng nhanh' sang 'đánh lâu dài'.", answer: true }
                ]},
                { type: 'tf', text: "Về Chiến dịch Biên giới thu - đông (1950):", options: [
                    { text: "a) Là chiến dịch tiến công lớn đầu tiên do ta chủ động mở.", answer: true },
                    { text: "b) Mục tiêu nhằm tiêu diệt một bộ phận sinh lực địch, khai thông biên giới Việt - Trung.", answer: true },
                    { text: "c) Sau chiến dịch, Pháp phải rút toàn bộ quân khỏi Đông Dương.", answer: false },
                    { text: "d) Đánh dấu bước phát triển của nghệ thuật chiến dịch Việt Nam.", answer: true }
                ]},
                { type: 'tf', text: "Về Chiến dịch Điện Biên Phủ (1954):", options: [
                    { text: "a) Ta đã thay đổi phương châm tác chiến từ 'đánh nhanh thắng nhanh' sang 'đánh chắc, tiến chắc'.", answer: true },
                    { text: "b) Chiến dịch diễn ra trong 3 đợt, kéo dài 56 ngày đêm.", answer: true },
                    { text: "c) Mỹ đã sử dụng bom nguyên tử để giải cứu quân Pháp tại đây.", answer: false },
                    { text: "d) Đập tan hoàn toàn nỗ lực chiến tranh cao nhất của Pháp - Mỹ, quyết định cục diện đàm phán.", answer: true }
                ]},
                { type: 'tf', text: "Về Hiệp định Giơ-ne-vơ (1954):", options: [
                    { text: "a) Các nước tham gia công nhận các quyền dân tộc cơ bản: độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ của 3 nước Đông Dương.", answer: true },
                    { text: "b) Quy định ngừng bắn, lập lại hòa bình, tập kết chuyển quân theo khu vực.", answer: true },
                    { text: "c) Việt Nam sẽ tổ chức hiệp thương tổng tuyển cử tự do thống nhất đất nước vào năm 1956.", answer: true },
                    { text: "d) Mỹ là nước duy nhất ký cam kết hỗ trợ tái thiết miền Bắc Việt Nam.", answer: false }
                ]},
                { type: 'tf', text: "Về nguyên nhân thắng lợi của cuộc kháng chiến chống Pháp:", options: [
                    { text: "a) Sự lãnh đạo sáng suốt của Đảng và Chủ tịch Hồ Chí Minh với đường lối đúng đắn.", answer: true },
                    { text: "b) Sức mạnh của khối đại đoàn kết toàn dân tộc, tinh thần yêu nước bất khuất.", answer: true },
                    { text: "c) Sự suy yếu và khủng hoảng kinh tế nghiêm trọng của nước Mỹ.", answer: false },
                    { text: "d) Sự ủng hộ, giúp đỡ của các nước XHCN và nhân dân tiến bộ trên thế giới.", answer: true }
                ]},
                { type: 'tf', text: "Đánh giá ý nghĩa lịch sử của cuộc kháng chiến chống Pháp:", options: [
                    { text: "a) Chấm dứt ách đô hộ gần một thế kỉ của thực dân Pháp.", answer: true },
                    { text: "b) Giải phóng hoàn toàn miền Bắc, tạo cơ sở để tiến lên xây dựng CNXH.", answer: true },
                    { text: "c) Đưa Việt Nam trở thành nước phát triển công nghiệp đứng đầu châu Á.", answer: false },
                    { text: "d) Cổ vũ mạnh mẽ phong trào giải phóng dân tộc, làm sụp đổ chủ nghĩa thực dân kiểu cũ.", answer: true }
                ]}
            ]
        }
    },
    7: {
        title: "Bài 7: Cuộc kháng chiến chống Mỹ, cứu nước (1954 - 1975)",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Nhiệm vụ của cách mạng hai miền Nam - Bắc Việt Nam sau năm 1954 là gì?", options: ["Cả nước cùng tiến lên xây dựng chủ nghĩa xã hội.", "Miền Bắc tiến hành cách mạng XHCN, miền Nam tiếp tục cách mạng dân tộc dân chủ nhân dân.", "Miền Bắc xây dựng TBCN, miền Nam xây dựng XHCN.", "Cả hai miền đều chịu sự quản thác của Liên hợp quốc."], answer: 1 },
                { type: 'mcq', text: "Phong trào 'Đồng khởi' (1959-1960) ở miền Nam bùng nổ mạnh mẽ nhất từ tỉnh nào?", options: ["Quảng Nam.", "Tây Ninh.", "Bến Tre.", "Trà Vinh."], answer: 2 },
                { type: 'mcq', text: "Chiến lược 'Chiến tranh đặc biệt' (1961-1965) của Mỹ ở miền Nam được tiến hành bằng lực lượng chủ yếu nào?", options: ["Quân viễn chinh Mỹ.", "Quân đội đồng minh của Mỹ.", "Quân đội Sài Gòn dưới sự chỉ huy của cố vấn Mỹ.", "Lính đánh thuê Liên hợp quốc."], answer: 2 },
                { type: 'mcq', text: "Xương sống của chiến lược 'Chiến tranh đặc biệt' là gì?", options: ["Quân đội Mỹ.", "Ấp chiến lược.", "Vũ khí hiện đại.", "Không quân và Hải quân."], answer: 1 },
                { type: 'mcq', text: "Thắng lợi nào của quân dân miền Nam đã làm phá sản về cơ bản chiến lược 'Chiến tranh đặc biệt' của Mỹ?", options: ["Chiến thắng Ấp Bắc.", "Chiến thắng Bình Giã.", "Chiến thắng Vạn Tường.", "Cuộc Tổng tiến công Xuân Mậu Thân."], answer: 1 },
                { type: 'mcq', text: "Điểm mới của chiến lược 'Chiến tranh cục bộ' (1965-1968) so với 'Chiến tranh đặc biệt' là gì?", options: ["Sử dụng cố vấn quân sự Mỹ.", "Sử dụng vũ khí, phương tiện chiến tranh của Mỹ.", "Mở rộng chiến tranh ra toàn Đông Dương.", "Đưa lực lượng lớn quân viễn chinh Mỹ và chư hầu trực tiếp tham chiến."], answer: 3 },
                { type: 'mcq', text: "Chiến thắng Vạn Tường (1965) chứng tỏ điều gì?", options: ["Quân dân miền Nam có khả năng đánh bại quân viễn chinh Mỹ.", "Mỹ đã thua trong Chiến tranh cục bộ.", "Quân đội Sài Gòn đã tan rã hoàn toàn.", "Đánh dấu sự kết thúc của chiến tranh."], answer: 0 },
                { type: 'mcq', text: "Sự kiện nào buộc Mỹ phải tuyên bố 'phi Mỹ hóa' chiến tranh xâm lược, ngừng ném bom miền Bắc và ngồi vào bàn đàm phán Pa-ri?", options: ["Phong trào Đồng khởi (1960).", "Chiến thắng Vạn Tường (1965).", "Cuộc Tổng tiến công và nổi dậy Xuân Mậu Thân (1968).", "Trận Điện Biên Phủ trên không (1972)."], answer: 2 },
                { type: 'mcq', text: "Bản chất của chiến lược 'Việt Nam hóa chiến tranh' (1969-1973) là gì?", options: ["Rút toàn bộ quân Mỹ, để Việt Nam tự giải quyết.", "Dùng người Việt đánh người Việt bằng vũ khí và viện trợ Mỹ.", "Lôi kéo các nước châu Á tham chiến.", "Chia Việt Nam thành nhiều quốc gia nhỏ."], answer: 1 },
                { type: 'mcq', text: "Thắng lợi của chiến dịch nào trong mùa Xuân 1975 đã chuyển cuộc kháng chiến chống Mỹ từ tiến công chiến lược sang Tổng tiến công chiến lược trên toàn miền Nam?", options: ["Chiến dịch Phước Long.", "Chiến dịch Tây Nguyên.", "Chiến dịch Huế - Đà Nẵng.", "Chiến dịch Hồ Chí Minh."], answer: 1 }
            ],
            tf: [
                { type: 'tf', text: "Về tình hình Việt Nam sau Hiệp định Giơ-ne-vơ (1954):", options: [
                    { text: "a) Đất nước bị chia cắt làm hai miền với hai chế độ chính trị khác nhau.", answer: true },
                    { text: "b) Miền Bắc hoàn toàn giải phóng, bước vào thời kì quá độ lên chủ nghĩa xã hội.", answer: true },
                    { text: "c) Mỹ tôn trọng Hiệp định, không can thiệp vào miền Nam.", answer: false },
                    { text: "d) Mỹ dựng lên chính quyền Ngô Đình Diệm, biến miền Nam thành thuộc địa kiểu mới.", answer: true }
                ]},
                { type: 'tf', text: "Về Nghị quyết 15 của Trung ương Đảng (1/1959):", options: [
                    { text: "a) Xác định con đường cơ bản của cách mạng miền Nam là sử dụng bạo lực cách mạng.", answer: true },
                    { text: "b) Chỉ đạo miền Nam đấu tranh chính trị đơn thuần, cấm sử dụng vũ trang.", answer: false },
                    { text: "c) Kết hợp đấu tranh chính trị với đấu tranh vũ trang để lật đổ chính quyền Mỹ - Diệm.", answer: true },
                    { text: "d) Nghị quyết đã thắp sáng ngọn lửa cho phong trào Đồng khởi bùng nổ.", answer: true }
                ]},
                { type: 'tf', text: "Về cuộc chiến đấu chống 'Chiến tranh đặc biệt' (1961-1965):", options: [
                    { text: "a) Ta kết hợp đấu tranh chính trị, quân sự, binh vận trên 3 vùng chiến lược.", answer: true },
                    { text: "b) Phong trào phá 'ấp chiến lược' diễn ra quyết liệt, làm phá sản xương sống của địch.", answer: true },
                    { text: "c) Mỹ đã sử dụng bom nguyên tử để cứu vãn chiến lược này.", answer: false },
                    { text: "d) Chiến thắng Ấp Bắc (1963) dấy lên phong trào 'Thi đua Ấp Bắc, giết giặc lập công'.", answer: true }
                ]},
                { type: 'tf', text: "Về cuộc Tổng tiến công và nổi dậy Xuân Mậu Thân (1968):", options: [
                    { text: "a) Ta bất ngờ tấn công đồng loạt vào các đô thị, cơ quan đầu não của địch trên toàn miền Nam.", answer: true },
                    { text: "b) Ta đã giải phóng và giữ được hoàn toàn Sài Gòn ngay trong đợt 1.", answer: false },
                    { text: "c) Làm lung lay ý chí xâm lược của Mỹ, buộc Mỹ phải xuống thang chiến tranh.", answer: true },
                    { text: "d) Mở ra bước ngoặt của cuộc kháng chiến, buộc Mỹ phải đàm phán ở Pa-ri.", answer: true }
                ]},
                { type: 'tf', text: "Về Trận 'Điện Biên Phủ trên không' (12/1972):", options: [
                    { text: "a) Mỹ dùng B-52 ném bom rải thảm Hà Nội, Hải Phòng để ép ta nhượng bộ tại bàn đàm phán.", answer: true },
                    { text: "b) Quân dân miền Bắc đã lập nên kì tích, bắn rơi nhiều máy bay B-52 của Mỹ.", answer: true },
                    { text: "c) Thất bại này buộc Mỹ phải ký kết Hiệp định Giơ-ne-vơ.", answer: false },
                    { text: "d) Là đòn quyết định buộc Mỹ phải kí Hiệp định Pa-ri (1/1973).", answer: true }
                ]},
                { type: 'tf', text: "Về Hiệp định Pa-ri (1973):", options: [
                    { text: "a) Mỹ phải công nhận độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của Việt Nam.", answer: true },
                    { text: "b) Mỹ cam kết rút hết quân đội Mỹ và quân đồng minh về nước.", answer: true },
                    { text: "c) Các lực lượng vũ trang cách mạng miền Nam phải giải giáp vũ khí.", answer: false },
                    { text: "d) Tạo ra bước ngoặt 'đánh cho Mỹ cút', tạo đà để 'đánh cho ngụy nhào'.", answer: true }
                ]},
                { type: 'tf', text: "Về vai trò của hậu phương miền Bắc:", options: [
                    { text: "a) Miền Bắc vừa sản xuất, vừa chiến đấu chống chiến tranh phá hoại của Mỹ.", answer: true },
                    { text: "b) Là hậu phương lớn, chi viện sức người, sức của to lớn cho tiền tuyến miền Nam.", answer: true },
                    { text: "c) Tuyến đường Hồ Chí Minh (trên bộ và trên biển) là mạch máu nối liền Nam - Bắc.", answer: true },
                    { text: "d) Miền Bắc không bị Mỹ ném bom do có thỏa thuận quốc tế bảo vệ.", answer: false }
                ]},
                { type: 'tf', text: "Về cuộc Tổng tiến công và nổi dậy Xuân 1975:", options: [
                    { text: "a) Được thực hiện qua 3 chiến dịch: Tây Nguyên, Huế - Đà Nẵng, Hồ Chí Minh.", answer: true },
                    { text: "b) Chiến dịch Tây Nguyên mở màn bằng trận đánh táo bạo vào Buôn Ma Thuột.", answer: true },
                    { text: "c) Mất đúng 2 năm chiến đấu liên tục mới giải phóng được Sài Gòn.", answer: false },
                    { text: "d) Chiến dịch Hồ Chí Minh (26/4 - 30/4/1975) kết thúc thắng lợi cuộc kháng chiến.", answer: true }
                ]},
                { type: 'tf', text: "Đánh giá nguyên nhân thắng lợi của cuộc kháng chiến chống Mỹ:", options: [
                    { text: "a) Sự lãnh đạo sáng suốt của Đảng với đường lối chính trị, quân sự độc lập, tự chủ.", answer: true },
                    { text: "b) Sức mạnh của hậu phương miền Bắc và tiền tuyến miền Nam.", answer: true },
                    { text: "c) Sự viện trợ hoàn toàn bằng binh lính trực tiếp tham chiến của Liên Xô và Trung Quốc.", answer: false },
                    { text: "d) Tình đoàn kết chiến đấu của 3 nước Đông Dương và sự ủng hộ của nhân dân thế giới.", answer: true }
                ]},
                { type: 'tf', text: "Về ý nghĩa lịch sử của cuộc kháng chiến chống Mỹ:", options: [
                    { text: "a) Kết thúc 21 năm chiến tranh, hoàn thành cách mạng dân tộc dân chủ nhân dân trên cả nước.", answer: true },
                    { text: "b) Bảo vệ vững chắc thành quả của cuộc Cách mạng tháng Tám.", answer: true },
                    { text: "c) Đưa Việt Nam trở thành siêu cường thống trị khu vực châu Á.", answer: false },
                    { text: "d) Cổ vũ phong trào GPDT, góp phần làm đảo lộn chiến lược toàn cầu của Mỹ.", answer: true }
                ]}
            ]
        }
    },
    8: {
        title: "Bài 8: Công cuộc Đổi mới ở Việt Nam từ năm 1986 đến nay",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Đại hội nào của Đảng Cộng sản Việt Nam đã khởi xướng đường lối Đổi mới toàn diện đất nước?", options: ["Đại hội IV (1976).", "Đại hội V (1982).", "Đại hội VI (1986).", "Đại hội VII (1991)."], answer: 2 },
                { type: 'mcq', text: "Hoàn cảnh trong nước buộc Đảng ta phải tiến hành công cuộc Đổi mới là gì?", options: ["Kinh tế phát triển quá nóng gây lạm phát.", "Khủng hoảng kinh tế - xã hội trầm trọng do duy trì quá lâu cơ chế bao cấp.", "Bị Mỹ dùng vũ lực đe dọa xâm lược lại.", "Nông nghiệp được cơ giới hóa hoàn toàn nhưng công nghiệp lạc hậu."], answer: 1 },
                { type: 'mcq', text: "Hoàn cảnh quốc tế tác động trực tiếp đến quyết định Đổi mới của Đảng ta (1986) là gì?", options: ["Chiến tranh thế giới thứ ba bùng nổ.", "Sự sụp đổ hoàn toàn của chủ nghĩa xã hội ở Đông Âu.", "Cuộc cách mạng khoa học kĩ thuật và những cải tổ, cải cách ở Liên Xô, Trung Quốc.", "Sự ra đời của tổ chức WTO."], answer: 2 },
                { type: 'mcq', text: "Trọng tâm của đường lối Đổi mới được Đại hội VI xác định là gì?", options: ["Đổi mới chính trị.", "Đổi mới văn hóa.", "Đổi mới kinh tế.", "Đổi mới quốc phòng."], answer: 2 },
                { type: 'mcq', text: "Trong đổi mới kinh tế, Đảng chủ trương xóa bỏ cơ chế quản lý nào?", options: ["Cơ chế thị trường tự do.", "Cơ chế quản lý kinh tế tập trung, quan liêu, bao cấp.", "Cơ chế khoán sản phẩm trong nông nghiệp.", "Cơ chế hạch toán kinh doanh độc lập."], answer: 1 },
                { type: 'mcq', text: "Mô hình kinh tế tổng quát của Việt Nam trong thời kì Đổi mới là gì?", options: ["Kinh tế tự nhiên, tự cung tự cấp.", "Kinh tế tư bản chủ nghĩa hoàn toàn.", "Nền kinh tế hàng hóa nhiều thành phần, vận hành theo cơ chế thị trường có sự quản lí của Nhà nước định hướng XHCN.", "Nền kinh tế kế hoạch hóa tập trung tuyệt đối."], answer: 2 },
                { type: 'mcq', text: "Ba chương trình kinh tế lớn được đề ra tại Đại hội VI (1986) là gì?", options: ["Công nghiệp nặng, điện lực, khai khoáng.", "Lương thực - thực phẩm, hàng tiêu dùng, hàng xuất khẩu.", "Nông nghiệp, công nghiệp, dịch vụ.", "Giáo dục, y tế, văn hóa."], answer: 1 },
                { type: 'mcq', text: "Chính sách đối ngoại của Việt Nam thời kì Đổi mới mang phương châm gì?", options: ["Đóng cửa để bảo vệ an ninh quốc gia.", "Việt Nam muốn là bạn với tất cả các nước trong cộng đồng thế giới, phấn đấu vì hòa bình, độc lập và phát triển.", "Chỉ quan hệ với các nước Xã hội chủ nghĩa.", "Liên minh quân sự với các cường quốc lớn."], answer: 1 },
                { type: 'mcq', text: "Sự kiện nào đánh dấu Việt Nam hội nhập sâu rộng vào nền kinh tế toàn cầu?", options: ["Bình thường hóa quan hệ với Mỹ (1995).", "Gia nhập ASEAN (1995).", "Chính thức gia nhập Tổ chức Thương mại Thế giới WTO (2007).", "Ký kết Hiệp định thương mại tự do với EU."], answer: 2 },
                { type: 'mcq', text: "Bản chất của công cuộc Đổi mới ở Việt Nam là gì?", options: ["Từ bỏ mục tiêu chủ nghĩa xã hội.", "Thay đổi hoàn toàn hệ thống chính trị và từ bỏ vai trò của Đảng.", "Khắc phục những sai lầm khuyết điểm, làm cho mục tiêu XHCN được thực hiện hiệu quả bằng những hình thức, bước đi phù hợp.", "Quay trở lại thời kì phong kiến."], answer: 2 }
            ],
            tf: [
                { type: 'tf', text: "Về sự cần thiết phải Đổi mới:", options: [
                    { text: "a) Nền kinh tế lâm vào khủng hoảng, lạm phát có lúc lên tới ba con số (gần 800%).", answer: true },
                    { text: "b) Đời sống nhân dân gặp vô vàn khó khăn, thiếu thốn lương thực, thực phẩm.", answer: true },
                    { text: "c) Mô hình kinh tế kế hoạch hóa tập trung đã bộc lộ những nhược điểm kìm hãm sản xuất.", answer: true },
                    { text: "d) Sự cần thiết phải đổi mới do sức ép từ việc bị Mỹ xâm lược bằng quân sự.", answer: false }
                ]},
                { type: 'tf', text: "Về quan điểm Đổi mới của Đảng:", options: [
                    { text: "a) Đổi mới phải toàn diện, đồng bộ từ kinh tế, chính trị đến tổ chức tư tưởng.", answer: true },
                    { text: "b) Đổi mới chính trị là thay đổi chế độ chính trị, thực hiện đa nguyên đa đảng.", answer: false },
                    { text: "c) Trọng tâm là đổi mới kinh tế, gắn liền với giữ vững ổn định chính trị.", answer: true },
                    { text: "d) Đổi mới là để xây dựng CNXH hiệu quả hơn, không phải là từ bỏ CNXH.", answer: true }
                ]},
                { type: 'tf', text: "Về thành tựu bước đầu (1986-1990):", options: [
                    { text: "a) Đã giải quyết được hoàn toàn tình trạng lạm phát ngay trong 1 năm.", answer: false },
                    { text: "b) Từ chỗ thiếu ăn triền miên, Việt Nam đã đáp ứng được nhu cầu lương thực và có dự trữ, xuất khẩu.", answer: true },
                    { text: "c) Hàng hóa trên thị trường dồi dào, đa dạng hơn.", answer: true },
                    { text: "d) Nền kinh tế hàng hóa nhiều thành phần bắt đầu hình thành và phát triển.", answer: true }
                ]},
                { type: 'tf', text: "Về công nghiệp hóa, hiện đại hóa (CNH, HĐH):", options: [
                    { text: "a) CNH, HĐH là quá trình xây dựng cơ sở vật chất kĩ thuật cho CNXH.", answer: true },
                    { text: "b) Nông nghiệp không còn vai trò gì trong thời kỳ CNH, HĐH.", answer: false },
                    { text: "c) Gắn liền với phát triển kinh tế tri thức và hội nhập kinh tế quốc tế.", answer: true },
                    { text: "d) Chuyển dịch cơ cấu kinh tế theo hướng tăng tỉ trọng công nghiệp và dịch vụ.", answer: true }
                ]},
                { type: 'tf', text: "Về thành tựu sau gần 40 năm Đổi mới:", options: [
                    { text: "a) Việt Nam đã thoát khỏi tình trạng kém phát triển, trở thành nước có thu nhập trung bình.", answer: true },
                    { text: "b) Tốc độ tăng trưởng kinh tế luôn ở mức âm trong nhiều năm liền.", answer: false },
                    { text: "c) Đời sống vật chất, tinh thần của nhân dân được cải thiện rõ rệt.", answer: true },
                    { text: "d) Tiềm lực quốc phòng, an ninh được tăng cường, chủ quyền quốc gia được giữ vững.", answer: true }
                ]},
                { type: 'tf', text: "Về đổi mới hệ thống chính trị:", options: [
                    { text: "a) Nâng cao năng lực lãnh đạo và sức chiến đấu của Đảng.", answer: true },
                    { text: "b) Xây dựng Nhà nước pháp quyền XHCN của nhân dân, do nhân dân, vì nhân dân.", answer: true },
                    { text: "c) Chia sẻ quyền lực lãnh đạo cho nhiều đảng phái khác nhau.", answer: false },
                    { text: "d) Phát huy quyền làm chủ của nhân dân và vai trò của Mặt trận Tổ quốc.", answer: true }
                ]},
                { type: 'tf', text: "Về Đổi mới văn hóa - xã hội:", options: [
                    { text: "a) Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc.", answer: true },
                    { text: "b) Từ chối tiếp thu tinh hoa văn hóa nhân loại để bảo vệ truyền thống.", answer: false },
                    { text: "c) Gắn tăng trưởng kinh tế với thực hiện tiến bộ và công bằng xã hội.", answer: true },
                    { text: "d) Công tác xóa đói giảm nghèo đạt được những thành tựu nổi bật được quốc tế công nhận.", answer: true }
                ]},
                { type: 'tf', text: "Về hạn chế, thách thức của Đổi mới:", options: [
                    { text: "a) Nền kinh tế đã phát triển hoàn hảo, không còn bất cứ khuyết tật nào.", answer: false },
                    { text: "b) Nguy cơ tụt hậu xa hơn về kinh tế so với các nước trong khu vực và thế giới.", answer: true },
                    { text: "c) Tình trạng tham nhũng, suy thoái tư tưởng chính trị ở một bộ phận cán bộ.", answer: true },
                    { text: "d) Khoảng cách phân hóa giàu nghèo ngày càng gia tăng.", answer: true }
                ]},
                { type: 'tf', text: "Về chủ trương mở cửa, hội nhập:", options: [
                    { text: "a) Đa phương hóa, đa dạng hóa quan hệ đối ngoại.", answer: true },
                    { text: "b) Tích cực và chủ động hội nhập kinh tế quốc tế sâu rộng.", answer: true },
                    { text: "c) Chỉ thu hút đầu tư nước ngoài vào lĩnh vực nông nghiệp.", answer: false },
                    { text: "d) Sẵn sàng là bạn, là đối tác tin cậy của các nước trong cộng đồng quốc tế.", answer: true }
                ]},
                { type: 'tf', text: "Đánh giá ý nghĩa của công cuộc Đổi mới:", options: [
                    { text: "a) Có ý nghĩa sống còn đối với sự nghiệp xây dựng chủ nghĩa xã hội ở nước ta.", answer: true },
                    { text: "b) Chứng minh tính đúng đắn của đường lối lãnh đạo của Đảng.", answer: true },
                    { text: "c) Đưa Việt Nam trở thành siêu cường kinh tế số 1 châu Á.", answer: false },
                    { text: "d) Tạo ra thế và lực mới để Việt Nam vững bước vào kỉ nguyên hội nhập.", answer: true }
                ]}
            ]
        }
    },
    9: {
        title: "Bài 9: Lịch sử đối ngoại Việt Nam thời cận - hiện đại",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Từ cuối kỉ XIX đến đầu kỉ XX, hoạt động đối ngoại của nhân dân ta chủ yếu nhằm mục đích gì?", options: ["Thiết lập quan hệ thương mại với châu Âu.", "Cầu viện sự giúp đỡ của quốc tế để đánh đuổi thực dân Pháp.", "Phát triển văn hóa và giáo dục.", "Mở rộng lãnh thổ ra khu vực Đông Nam Á."], answer: 1 },
                { type: 'mcq', text: "Nhà ngoại giao xuất sắc, người đã gửi Bản Yêu sách của nhân dân An Nam đến Hội nghị Véc-xai (1919) là ai?", options: ["Phan Bội Châu.", "Phan Châu Trinh.", "Nguyễn Ái Quốc.", "Hồ Tùng Mậu."], answer: 2 },
                { type: 'mcq', text: "Đâu là thành tựu ngoại giao đầu tiên của nước Việt Nam Dân chủ Cộng hòa ngay sau Cách mạng tháng Tám (1945)?", options: ["Kí kết Hiệp định Giơ-ne-vơ.", "Gia nhập Liên hợp quốc.", "Kí kết Hiệp định Sơ bộ (6/3/1946) và Tạm ước (14/9/1946) để bảo vệ chính quyền non trẻ.", "Được Mỹ công nhận độc lập."], answer: 2 },
                { type: 'mcq', text: "Tháng 1/1950, quốc gia nào là nước đầu tiên công nhận và đặt quan hệ ngoại giao với Việt Nam Dân chủ Cộng hòa?", options: ["Liên Xô.", "Cộng hòa Nhân dân Trung Hoa.", "Cuba.", "Pháp."], answer: 1 },
                { type: 'mcq', text: "Hiệp định Giơ-ne-vơ (1954) là thắng lợi ngoại giao quan trọng vì", options: ["lần đầu tiên các cường quốc công nhận các quyền dân tộc cơ bản của Việt Nam.", "buộc Mỹ phải bồi thường chiến tranh.", "đưa Việt Nam gia nhập ASEAN.", "đánh dấu Việt Nam thống nhất hoàn toàn."], answer: 0 },
                { type: 'mcq', text: "Trong cuộc kháng chiến chống Mỹ, mặt trận ngoại giao đóng vai trò gì?", options: ["Chỉ có tính chất biểu tượng, không có tác dụng thực tế.", "Phối hợp chặt chẽ với đấu tranh chính trị và quân sự, tạo nên sức mạnh tổng hợp.", "Là mặt trận duy nhất quyết định thắng lợi.", "Chỉ nhằm mục đích kêu gọi viện trợ kinh tế."], answer: 1 },
                { type: 'mcq', text: "Hiệp định Pa-ri (1973) là kết quả của cuộc đàm phán kéo dài nhất trong lịch sử ngoại giao Việt Nam, kéo dài bao lâu?", options: ["1 năm.", "3 năm.", "Gần 5 năm.", "10 năm."], answer: 2 },
                { type: 'mcq', text: "Từ năm 1986 đến nay, chính sách đối ngoại của Việt Nam được thực hiện theo nguyên tắc nào?", options: ["Độc lập, tự chủ, hòa bình, hợp tác và phát triển.", "Liên minh quân sự để phòng thủ.", "Bế quan tỏa cảng để tự lực tự cường.", "Sử dụng sức mạnh quân sự để giải quyết tranh chấp."], answer: 0 },
                { type: 'mcq', text: "Năm 1995 đánh dấu 3 sự kiện ngoại giao quan trọng của Việt Nam, đó là gì?", options: ["Gia nhập LHQ, bình thường hóa quan hệ với Trung Quốc, gia nhập WTO.", "Gia nhập ASEAN, bình thường hóa quan hệ với Mỹ, kí Hiệp định khung với EU.", "Gia nhập APEC, gia nhập ASEAN, bình thường hóa quan hệ với Nhật.", "Gia nhập WTO, bình thường hóa quan hệ với Mỹ, gia nhập Liên hợp quốc."], answer: 1 },
                { type: 'mcq', text: "Nghệ thuật ngoại giao đặc sắc của Việt Nam được Tổng Bí thư Nguyễn Phú Trọng ví với hình ảnh gì?", options: ["Ngoại giao cây tre (gốc vững, thân chắc, cành uyển chuyển).", "Ngoại giao cây tùng (hiên ngang, cứng cỏi).", "Ngoại giao cây liễu (mềm mại, chịu đựng).", "Ngoại giao hoa sen (tinh khiết, cách biệt)."], answer: 0 }
            ],
            tf: [
                { type: 'tf', text: "Về hoạt động ngoại giao đầu thế kỉ XX:", options: [
                    { text: "a) Phan Bội Châu thực hiện chủ trương cầu viện Nhật Bản (phong trào Đông Du).", answer: true },
                    { text: "b) Các nhà yêu nước đã tranh thủ được sự viện trợ quân sự khổng lồ từ phương Tây.", answer: false },
                    { text: "c) Nguyễn Ái Quốc đã thiết lập mối liên hệ giữa cách mạng Việt Nam với phong trào công nhân quốc tế.", answer: true },
                    { text: "d) Ngoại giao giai đoạn này chưa mang lại độc lập nhưng đã mở rộng tầm nhìn của người Việt ra thế giới.", answer: true }
                ]},
                { type: 'tf', text: "Về ngoại giao thời kì 1945 - 1946:", options: [
                    { text: "a) Vận dụng khéo léo sách lược 'Hòa để tiến'.", answer: true },
                    { text: "b) Lợi dụng mâu thuẫn giữa quân Tưởng và quân Pháp để phân hóa kẻ thù.", answer: true },
                    { text: "c) Chủ tịch Hồ Chí Minh đã nhượng bộ nguyên tắc độc lập để đổi lấy hòa bình.", answer: false },
                    { text: "d) Ngoại giao đã giúp bảo toàn lực lượng, kéo dài thời gian chuẩn bị kháng chiến.", answer: true }
                ]},
                { type: 'tf', text: "Về đàm phán và kí kết Hiệp định Giơ-ne-vơ (1954):", options: [
                    { text: "a) Đoàn đại biểu Việt Nam do Phạm Văn Đồng làm trưởng đoàn tham gia đàm phán.", answer: true },
                    { text: "b) Là thắng lợi ngoại giao được tạo đà từ chiến thắng vang dội tại Điện Biên Phủ.", answer: true },
                    { text: "c) Hiệp định quy định nước ta bị chia cắt vĩnh viễn thành hai quốc gia độc lập.", answer: false },
                    { text: "d) Ta đã biết lợi dụng mâu thuẫn giữa các nước lớn để giành lợi ích tối đa.", answer: true }
                ]},
                { type: 'tf', text: "Về ngoại giao trong kháng chiến chống Mỹ:", options: [
                    { text: "a) Mặt trận ngoại giao được nâng lên thành một mặt trận chiến lược (bên cạnh quân sự, chính trị).", answer: true },
                    { text: "b) Ta đã thiết lập được Mặt trận nhân dân thế giới ủng hộ Việt Nam chống Mỹ.", answer: true },
                    { text: "c) Ta từ chối hoàn toàn đàm phán với Mỹ cho đến khi miền Nam được giải phóng.", answer: false },
                    { text: "d) Cục diện 'vừa đánh vừa đàm' được vận dụng xuất sắc tại Hội nghị Pa-ri.", answer: true }
                ]},
                { type: 'tf', text: "Về Hiệp định Pa-ri (1973):", options: [
                    { text: "a) Là đỉnh cao của nghệ thuật ngoại giao Việt Nam thời đại Hồ Chí Minh.", answer: true },
                    { text: "b) Buộc Mỹ rút quân nhưng không được yêu cầu quân đội miền Bắc rút khỏi miền Nam.", answer: true },
                    { text: "c) Hiệp định được kí kết trong bối cảnh Mỹ vừa chiến thắng trận 'Điện Biên Phủ trên không'.", answer: false },
                    { text: "d) Thắng lợi này đã mở ra cơ hội chiến lược để ta tiến lên giải phóng hoàn toàn miền Nam.", answer: true }
                ]},
                { type: 'tf', text: "Về ngoại giao thời kì Đổi mới (từ 1986):", options: [
                    { text: "a) Chuyển từ chính sách đối ngoại thiên về ý thức hệ sang đa phương hóa, đa dạng hóa.", answer: true },
                    { text: "b) Việt Nam đã bình thường hóa quan hệ với các cựu thù như Mỹ, Trung Quốc.", answer: true },
                    { text: "c) Kinh tế ngoại giao không được coi trọng bằng ngoại giao quân sự.", answer: false },
                    { text: "d) Phá vỡ triệt để thế bị bao vây, cô lập của thập kỉ 80.", answer: true }
                ]},
                { type: 'tf', text: "Về hội nhập quốc tế của Việt Nam hiện nay:", options: [
                    { text: "a) Trở thành thành viên có trách nhiệm của Liên hợp quốc, ASEAN, WTO, APEC.", answer: true },
                    { text: "b) Tham gia kí kết nhiều Hiệp định Thương mại Tự do (FTA) thế hệ mới (CPTPP, EVFTA).", answer: true },
                    { text: "c) Tự cô lập mình khỏi các xu thế toàn cầu hóa do sợ bị đồng hóa.", answer: false },
                    { text: "d) Chủ trương giải quyết các tranh chấp quốc tế, đặc biệt là Biển Đông bằng luật pháp quốc tế.", answer: true }
                ]},
                { type: 'tf', text: "Đánh giá về nghệ thuật 'Ngoại giao cây tre':", options: [
                    { text: "a) Kiên định về nguyên tắc (độc lập, chủ quyền), nhưng linh hoạt về sách lược.", answer: true },
                    { text: "b) Chấp nhận gió chiều nào che chiều ấy, không có lập trường rõ ràng.", answer: false },
                    { text: "c) Dựa trên sức mạnh của khối đại đoàn kết dân tộc và kết hợp sức mạnh thời đại.", answer: true },
                    { text: "d) Đã giúp Việt Nam nâng cao vị thế chưa từng có trên trường quốc tế.", answer: true }
                ]},
                { type: 'tf', text: "Về đối ngoại Đảng, ngoại giao Nhà nước và đối ngoại Nhân dân:", options: [
                    { text: "a) Đây là ba trụ cột của nền ngoại giao Việt Nam toàn diện, hiện đại.", answer: true },
                    { text: "b) Đối ngoại nhân dân không có tác dụng gì trong thời đại công nghệ số.", answer: false },
                    { text: "c) Sự phối hợp nhịp nhàng giữa ba trụ cột tạo nên sức mạnh tổng hợp.", answer: true },
                    { text: "d) Trong kháng chiến chống Mỹ, đối ngoại nhân dân đã tranh thủ được sự ủng hộ rộng rãi của nhân dân Mỹ yêu chuộng hòa bình.", answer: true }
                ]},
                { type: 'tf', text: "Đánh giá chung về lịch sử đối ngoại:", options: [
                    { text: "a) Ngoại giao luôn là một vũ khí sắc bén bảo vệ Tổ quốc từ sớm, từ xa.", answer: true },
                    { text: "b) Truyền thống ngoại giao hòa hiếu, nhân đạo được kế thừa và phát huy.", answer: true },
                    { text: "c) Ngoại giao Việt Nam luôn phụ thuộc hoàn toàn vào các nước lớn.", answer: false },
                    { text: "d) Hồ Chí Minh là người đặt nền móng cho nền ngoại giao hiện đại của Việt Nam.", answer: true }
                ]}
            ]
        }
    },
    10: {
        title: "Bài 10: Hồ Chí Minh trong lịch sử Việt Nam",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Sự kiện nào đánh dấu bước ngoặt trong cuộc đời hoạt động của Nguyễn Ái Quốc (từ người yêu nước thành người cộng sản)?", options: ["Gửi Bản yêu sách 8 điểm đến Hội nghị Véc-xai (1919).", "Đọc Sơ thảo Luận cương của V.I. Lê-nin (7/1920) và bỏ phiếu tán thành gia nhập Quốc tế Cộng sản (12/1920).", "Thành lập Hội Việt Nam Cách mạng Thanh niên (1925).", "Chủ trì Hội nghị thành lập Đảng (1930)."], answer: 1 },
                { type: 'mcq', text: "Tác phẩm nào của Nguyễn Ái Quốc (xuất bản năm 1927) đã phác thảo những vấn đề cơ bản về đường lối cứu nước của cách mạng Việt Nam?", options: ["Bản án chế độ thực dân Pháp.", "Đường Kách mệnh.", "Con rồng tre.", "Nhật kí trong tù."], answer: 1 },
                { type: 'mcq', text: "Vai trò lớn nhất của Nguyễn Ái Quốc tại Hội nghị hợp nhất các tổ chức cộng sản (đầu năm 1930) là gì?", options: ["Chỉ đạo khởi nghĩa vũ trang.", "Thống nhất các tổ chức cộng sản thành một Đảng duy nhất và thông qua Cương lĩnh chính trị đầu tiên.", "Kêu gọi viện trợ từ Liên Xô.", "Soạn thảo Luận cương chính trị."], answer: 1 },
                { type: 'mcq', text: "Năm 1941, sau 30 năm bôn ba tìm đường cứu nước, Hồ Chí Minh đã trở về nước và làm việc tại đâu?", options: ["Pác Bó (Cao Bằng).", "Tân Trào (Tuyên Quang).", "Bắc Sơn (Lạng Sơn).", "Hà Nội."], answer: 0 },
                { type: 'mcq', text: "Bản Tuyên ngôn Độc lập do Chủ tịch Hồ Chí Minh soạn thảo và đọc ngày 2/9/1945 có ý nghĩa gì cốt lõi?", options: ["Kêu gọi quân đội Pháp rút khỏi Việt Nam.", "Khẳng định độc lập, chủ quyền của dân tộc Việt Nam và khai sinh ra nước VNDCCH.", "Tuyên chiến với phát xít Nhật.", "Thiết lập chế độ quân chủ lập hiến."], answer: 1 },
                { type: 'mcq', text: "Tư tưởng cốt lõi của Hồ Chí Minh về con đường giải phóng dân tộc là gì?", options: ["Dựa vào sự giúp đỡ của các cường quốc phương Tây.", "Cách mạng tư sản là con đường duy nhất.", "Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản.", "Tiến hành đấu tranh bằng con đường cải lương, thương lượng."], answer: 2 },
                { type: 'mcq', text: "Câu nói 'Không có gì quý hơn độc lập, tự do' được Chủ tịch Hồ Chí Minh nêu ra trong hoàn cảnh nào?", options: ["Khi đọc Tuyên ngôn Độc lập (1945).", "Trong Lời kêu gọi toàn quốc kháng chiến chống Pháp (1946).", "Trong Lời kêu gọi chống Mỹ, cứu nước (17/7/1966).", "Trong Di chúc (1969)."], answer: 2 },
                { type: 'mcq', text: "Tư tưởng đại đoàn kết của Hồ Chí Minh được cô đúc trong câu nói nổi tiếng nào?", options: ["'Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công'.", "'Không có gì quý hơn độc lập tự do'.", "'Dĩ bất biến, ứng vạn biến'.", "'Các Vua Hùng đã có công dựng nước...'."], answer: 0 },
                { type: 'mcq', text: "Trong Di chúc, Chủ tịch Hồ Chí Minh đã căn dặn Đảng ta điều gì đầu tiên?", options: ["Phát triển kinh tế thị trường.", "Xây dựng lực lượng vũ trang.", "Việc giữ gìn sự đoàn kết nhất trí của Đảng như giữ gìn con ngươi của mắt mình.", "Mở rộng quan hệ ngoại giao."], answer: 2 },
                { type: 'mcq', text: "UNESCO đã tôn vinh Chủ tịch Hồ Chí Minh với danh hiệu gì vào năm 1987?", options: ["Nhà hoạt động chính trị xuất sắc nhất châu Á.", "Anh hùng giải phóng dân tộc và Nhà văn hóa kiệt xuất của Việt Nam.", "Lãnh tụ vĩ đại của phong trào công nhân quốc tế.", "Nhà quân sự thiên tài của thế kỉ XX."], answer: 1 }
            ],
            tf: [
                { type: 'tf', text: "Về quá trình tìm đường cứu nước của Nguyễn Ái Quốc (1911-1920):", options: [
                    { text: "a) Năm 1911, Người ra đi tìm đường cứu nước với khát vọng tự do cho đồng bào.", answer: true },
                    { text: "b) Người đã khảo sát thực tiễn nhiều nước tư bản và các thuộc địa trên thế giới.", answer: true },
                    { text: "c) Người quyết định đi theo con đường cách mạng tư sản của Pháp và Mỹ.", answer: false },
                    { text: "d) Việc đọc Luận cương của Lê-nin (1920) đã giúp Người tìm ra con đường cứu nước đúng đắn.", answer: true }
                ]},
                { type: 'tf', text: "Về vai trò chuẩn bị thành lập Đảng (1921-1930):", options: [
                    { text: "a) Truyền bá chủ nghĩa Mác - Lênin vào phong trào công nhân và yêu nước Việt Nam.", answer: true },
                    { text: "b) Chuẩn bị về tư tưởng, chính trị và tổ chức cho sự ra đời của Đảng.", answer: true },
                    { text: "c) Trực tiếp lãnh đạo khởi nghĩa Yên Bái để gây tiếng vang.", answer: false },
                    { text: "d) Sáng lập Cương lĩnh chính trị đầu tiên đúng đắn, sáng tạo.", answer: true }
                ]},
                { type: 'tf', text: "Về sự lãnh đạo của Hồ Chí Minh trong Cách mạng tháng Tám (1945):", options: [
                    { text: "a) Người triệu tập và chủ trì Hội nghị Trung ương 8, chuyển hướng chiến lược cách mạng.", answer: true },
                    { text: "b) Sáng lập Mặt trận Việt Minh để tập hợp sức mạnh đại đoàn kết toàn dân tộc.", answer: true },
                    { text: "c) Trực tiếp cầm quân đánh chiếm Phủ Khâm sai ở Hà Nội.", answer: false },
                    { text: "d) Ra Lời kêu gọi Tổng khởi nghĩa: 'Đem sức ta mà tự giải phóng cho ta'.", answer: true }
                ]},
                { type: 'tf', text: "Về tư tưởng độc lập dân tộc gắn liền với chủ nghĩa xã hội:", options: [
                    { text: "a) Là sợi chỉ đỏ xuyên suốt trong tư tưởng và sự nghiệp của Hồ Chí Minh.", answer: true },
                    { text: "b) Độc lập dân tộc là tiền đề, điều kiện tiên quyết để tiến lên xây dựng CNXH.", answer: true },
                    { text: "c) Chủ nghĩa xã hội là cơ sở bảo đảm vững chắc cho độc lập dân tộc.", answer: true },
                    { text: "d) Người cho rằng Việt Nam không cần trải qua dân chủ mà tiến thẳng lên CNXH.", answer: false }
                ]},
                { type: 'tf', text: "Về vai trò của Hồ Chí Minh trong hai cuộc kháng chiến (Pháp, Mỹ):", options: [
                    { text: "a) Người là linh hồn, vị Tổng Tư lệnh tối cao dẫn dắt toàn dân tộc kháng chiến.", answer: true },
                    { text: "b) Vạch ra đường lối kháng chiến toàn dân, toàn diện, trường kì.", answer: true },
                    { text: "c) Đã nhìn thấy ngày miền Nam hoàn toàn giải phóng trước khi qua đời.", answer: false },
                    { text: "d) Lời kêu gọi của Người là mệnh lệnh non sông, cổ vũ tinh thần chiến đấu của quân dân.", answer: true }
                ]},
                { type: 'tf', text: "Về nghệ thuật ngoại giao Hồ Chí Minh:", options: [
                    { text: "a) Thể hiện tư tưởng 'Dĩ bất biến, ứng vạn biến'.", answer: true },
                    { text: "b) Kiên định mục tiêu độc lập chủ quyền, linh hoạt nhượng bộ về sách lược khi cần thiết.", answer: true },
                    { text: "c) Luôn sử dụng vũ lực đe dọa trong các cuộc đàm phán quốc tế.", answer: false },
                    { text: "d) Tranh thủ tối đa sự đồng tình, ủng hộ của nhân dân thế giới.", answer: true }
                ]},
                { type: 'tf', text: "Về đạo đức và phong cách Hồ Chí Minh:", options: [
                    { text: "a) Là tấm gương mẫu mực về Cần, Kiệm, Liêm, Chính, Chí công vô tư.", answer: true },
                    { text: "b) Lối sống giản dị, gần gũi, yêu thương con người.", answer: true },
                    { text: "c) Phong cách làm việc quan liêu, xa rời thực tế quần chúng.", answer: false },
                    { text: "d) Sự thống nhất giữa lời nói và việc làm là nét nổi bật trong phong cách của Người.", answer: true }
                ]},
                { type: 'tf', text: "Về sự tôn vinh của quốc tế đối với Hồ Chí Minh:", options: [
                    { text: "a) Được bạn bè quốc tế yêu mến, kính trọng vì những cống hiến cho hòa bình nhân loại.", answer: true },
                    { text: "b) Được UNESCO vinh danh là Anh hùng giải phóng dân tộc, Nhà văn hóa kiệt xuất.", answer: true },
                    { text: "c) Giải thưởng Nobel Hòa bình đã được trao cho Người năm 1973.", answer: false },
                    { text: "d) Nhiều quốc gia trên thế giới đã dựng tượng và đặt tên đường phố mang tên Người.", answer: true }
                ]},
                { type: 'tf', text: "Đánh giá vai trò của tư tưởng Hồ Chí Minh hiện nay:", options: [
                    { text: "a) Tư tưởng Hồ Chí Minh cùng với chủ nghĩa Mác-Lênin là nền tảng tư tưởng, kim chỉ nam cho hành động của Đảng.", answer: true },
                    { text: "b) Là tài sản tinh thần vô giá của dân tộc Việt Nam.", answer: true },
                    { text: "c) Chỉ có giá trị trong thời kì đấu tranh giải phóng dân tộc, không còn phù hợp với hiện nay.", answer: false },
                    { text: "d) Soi đường cho công cuộc xây dựng, phát triển đất nước và hội nhập quốc tế.", answer: true }
                ]},
                { type: 'tf', text: "Về Bản Di chúc lịch sử:", options: [
                    { text: "a) Là những lời dặn dò tâm huyết cuối cùng của Người để lại cho toàn Đảng, toàn dân.", answer: true },
                    { text: "b) Khẳng định niềm tin tất thắng vào sự nghiệp chống Mỹ cứu nước.", answer: true },
                    { text: "c) Đề cập đến việc xây dựng lại đất nước 'đàng hoàng hơn, to đẹp hơn'.", answer: true },
                    { text: "d) Yêu cầu Đảng phải từ bỏ quyền lãnh đạo sau khi chiến tranh kết thúc.", answer: false }
                ]}
            ]
        }
    }
};
