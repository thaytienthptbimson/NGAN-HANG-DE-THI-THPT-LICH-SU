/* =========================================================================
   DỮ LIỆU LỊCH SỬ KHỐI 11 - ĐẦY ĐỦ 10 BÀI
   Bản quyền thuộc về số ĐT: 0943.930.787
========================================================================= */

const dataKhoi11 = {
    1: {
        title: "Bài 1: Một số vấn đề chung về cách mạng tư sản",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Mục tiêu cơ bản của các cuộc cách mạng tư sản là gì?", options: ["Xóa bỏ rào cản kìm hãm sự phát triển của nền kinh tế TBCN.", "Xóa bỏ giai cấp tư sản.", "Đưa giai cấp công nhân lên nắm quyền.", "Bảo vệ chế độ phong kiến."], answer: 0 },
                { type: 'mcq', text: "Lực lượng lãnh đạo cách mạng tư sản Anh (thế kỉ XVII) là giai cấp nào?", options: ["Tư sản và quý tộc mới.", "Công nhân và nông dân.", "Quý tộc phong kiến.", "Tiểu tư sản."], answer: 0 },
                { type: 'mcq', text: "Vì sao Cách mạng tư sản Pháp (cuối thế kỉ XVIII) được đánh giá là một cuộc 'Đại cách mạng'?", options: ["Quy mô lớn nhất châu Âu.", "Giải quyết triệt để nhiệm vụ dân tộc, dân chủ.", "Đây là cuộc cách mạng đầu tiên.", "Nổ ra ở nước giàu nhất."], answer: 1 },
                { type: 'mcq', text: "Cuộc Chiến tranh giành độc lập của 13 thuộc địa Anh ở Bắc Mỹ mang tính chất gì?", options: ["Chiến tranh đế quốc.", "Cách mạng tư sản.", "Cách mạng vô sản.", "Cải cách nông nô."], answer: 1 },
                { type: 'mcq', text: "Đâu là tiền đề về tư tưởng của Cách mạng tư sản Pháp thế kỉ XVIII?", options: ["Triết học Ánh sáng.", "Phong trào Văn hóa Phục hưng.", "Cải cách tôn giáo.", "Chủ nghĩa Mác - Lênin."], answer: 0 },
                { type: 'mcq', text: "Kết quả lớn nhất của cuộc Cách mạng tư sản Pháp là gì?", options: ["Lật đổ chế độ quân chủ chuyên chế.", "Đánh đuổi quân xâm lược.", "Giải phóng nô lệ.", "Đưa giai cấp vô sản lên nắm quyền."], answer: 0 },
                { type: 'mcq', text: "Bản Tuyên ngôn Độc lập của nước Mỹ (1776) có điểm tiến bộ nào nổi bật?", options: ["Khẳng định quyền con người và quyền công dân.", "Giải phóng nô lệ da đen.", "Công nhận quyền bầu cử của phụ nữ.", "Chia đều ruộng đất cho nông dân."], answer: 0 },
                { type: 'mcq', text: "Cách mạng tư sản Anh (thế kỉ XVII) thiết lập thể chế chính trị nào?", options: ["Cộng hòa tổng thống.", "Quân chủ lập hiến.", "Quân chủ chuyên chế.", "Cộng hòa đại nghị."], answer: 1 },
                { type: 'mcq', text: "Nhiệm vụ dân chủ trong các cuộc cách mạng tư sản có ý nghĩa là gì?", options: ["Lật đổ ách thống trị ngoại xâm.", "Xóa bỏ chế độ phong kiến, xác lập nền dân chủ tư sản.", "Mở rộng lãnh thổ đất nước.", "Đem lại ruộng đất cho tất cả nông dân."], answer: 1 },
                { type: 'mcq', text: "Động lực chính quyết định thắng lợi của các cuộc cách mạng tư sản là", options: ["sự giúp đỡ của nước ngoài.", "sức mạnh của quần chúng nhân dân.", "vũ khí hiện đại.", "sự ủng hộ của nhà vua."], answer: 1 }
            ],
            tf: [
                { type: 'tf', text: "Về tiền đề của các cuộc cách mạng tư sản:", options: [
                    { text: "a) Kinh tế tư bản chủ nghĩa phát triển mạnh trong lòng chế độ phong kiến.", answer: true },
                    { text: "b) Mâu thuẫn gay gắt giữa tư sản, nhân dân với chế độ phong kiến chuyên chế.", answer: true },
                    { text: "c) Các nước tư bản đều nhận được sự viện trợ lớn từ bên ngoài.", answer: false },
                    { text: "d) Sự xuất hiện của hệ tư tưởng vô sản làm bùng nổ cách mạng.", answer: false }
                ]},
                { type: 'tf', text: "Về Cách mạng tư sản Pháp (1789):", options: [
                    { text: "a) Triết học Ánh sáng đã dọn đường cho cách mạng bùng nổ.", answer: true },
                    { text: "b) Cách mạng bắt đầu bằng sự kiện quần chúng đánh chiếm ngục Ba-xti.", answer: true },
                    { text: "c) Cách mạng đã giữ lại toàn bộ đặc quyền của nhà vua và giới tăng lữ.", answer: false },
                    { text: "d) Đây là cuộc cách mạng tư sản triệt để nhất thời kì cận đại.", answer: true }
                ]},
                { type: 'tf', text: "Về Chiến tranh giành độc lập ở Bắc Mỹ:", options: [
                    { text: "a) Nhiệm vụ hàng đầu là đánh đuổi thực dân Anh, giành độc lập dân tộc.", answer: true },
                    { text: "b) Nền cộng hòa được thiết lập với bộ máy nhà nước tam quyền phân lập.", answer: true },
                    { text: "c) Ngay sau chiến tranh, mọi người dân Bắc Mỹ đều được chia ruộng đất.", answer: false },
                    { text: "d) Thắng lợi của cuộc chiến này không có ảnh hưởng gì đến châu Âu.", answer: false }
                ]},
                { type: 'tf', text: "Về lãnh đạo các cuộc cách mạng tư sản:", options: [
                    { text: "a) Lãnh đạo chung là giai cấp tư sản và các tầng lớp đại diện cho phương thức sản xuất mới.", answer: true },
                    { text: "b) Ở Anh, lãnh đạo là liên minh giữa tư sản và quý tộc mới.", answer: true },
                    { text: "c) Quần chúng nhân dân luôn nắm quyền lãnh đạo tối cao.", answer: false },
                    { text: "d) Lãnh đạo cách mạng luôn kiên quyết bảo vệ quyền lợi của nông dân.", answer: false }
                ]},
                { type: 'tf', text: "Về kết quả và ý nghĩa của cách mạng tư sản:", options: [
                    { text: "a) Mở đường cho chủ nghĩa tư bản phát triển trên phạm vi toàn cầu.", answer: true },
                    { text: "b) Xóa bỏ triệt để mọi hình thức bóc lột trong xã hội.", answer: false },
                    { text: "c) Thiết lập các chế độ chính trị: Cộng hòa hoặc Quân chủ lập hiến.", answer: true },
                    { text: "d) Giai cấp công nhân hoàn toàn được giải phóng sau cách mạng tư sản.", answer: false }
                ]},
                { type: 'tf', text: "Về Tuyên ngôn Nhân quyền và Dân quyền (Pháp 1789):", options: [
                    { text: "a) Bản Tuyên ngôn nêu cao khẩu hiệu 'Tự do - Bình đẳng - Bác ái'.", answer: true },
                    { text: "b) Khẳng định quyền sở hữu tài sản tư nhân là quyền thiêng liêng.", answer: true },
                    { text: "c) Bản Tuyên ngôn bảo vệ quyền lợi cho giai cấp công nhân.", answer: false },
                    { text: "d) Đánh dấu sự chấm dứt của chế độ độc tài tư sản.", answer: false }
                ]},
                { type: 'tf', text: "Về đặc điểm của Cách mạng tư sản Anh:", options: [
                    { text: "a) Diễn ra dưới hình thức một cuộc nội chiến.", answer: true },
                    { text: "b) Đã đưa vua Sác-lơ I lên làm Hoàng đế châu Âu.", answer: false },
                    { text: "c) Là cuộc cách mạng tư sản không triệt để.", answer: true },
                    { text: "d) Nông dân Anh được chia toàn bộ ruộng đất của quý tộc.", answer: false }
                ]},
                { type: 'tf', text: "Về động lực cách mạng tư sản:", options: [
                    { text: "a) Quần chúng nhân dân là động lực chính đưa cách mạng tiến lên.", answer: true },
                    { text: "b) Quân đội nước ngoài là động lực lớn nhất.", answer: false },
                    { text: "c) Mỗi khi cách mạng gặp nguy hiểm, nhân dân lại đứng lên bảo vệ.", answer: true },
                    { text: "d) Quần chúng nhân dân luôn được hưởng mọi thành quả cách mạng.", answer: false }
                ]},
                { type: 'tf', text: "Về xu hướng phát triển sau cách mạng tư sản:", options: [
                    { text: "a) Kinh tế tư bản chủ nghĩa nhanh chóng mở rộng và phát triển.", answer: true },
                    { text: "b) Các nước tư bản chuyển sang xây dựng chủ nghĩa xã hội.", answer: false },
                    { text: "c) Xảy ra cuộc Cách mạng công nghiệp làm thay đổi bộ mặt xã hội.", answer: true },
                    { text: "d) Mâu thuẫn giữa tư sản và vô sản ngày càng trở nên gay gắt.", answer: true }
                ]},
                { type: 'tf', text: "Đánh giá chung về cách mạng tư sản:", options: [
                    { text: "a) Là bước tiến lớn của nhân loại, thay thế chế độ phong kiến lỗi thời.", answer: true },
                    { text: "b) Giải quyết được triệt để mọi bất công trong xã hội loài người.", answer: false },
                    { text: "c) Các quyền tự do, dân chủ ban đầu chỉ phục vụ cho giai cấp tư sản.", answer: true },
                    { text: "d) Quần chúng nhân dân là người đóng vai trò quyết định thắng lợi.", answer: true }
                ]}
            ]
        }
    },
    2: {
        title: "Bài 2: Sự xác lập và phát triển của Chủ nghĩa tư bản",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Sự kiện nào đánh dấu chủ nghĩa tư bản được xác lập trên phạm vi thế giới?", options: ["Cách mạng tư sản Pháp bùng nổ.", "Cách mạng công nghiệp hoàn thành ở châu Âu và Bắc Mỹ.", "Chủ nghĩa đế quốc hình thành.", "Chiến tranh thế giới thứ nhất kết thúc."], answer: 1 },
                { type: 'mcq', text: "Đặc điểm nổi bật của chủ nghĩa đế quốc (cuối kỉ XIX - đầu kỉ XX) là gì?", options: ["Chỉ phát triển nông nghiệp.", "Sự hình thành các tổ chức độc quyền chi phối kinh tế - chính trị.", "Bãi bỏ hoàn toàn quân đội.", "Xóa bỏ ranh giới quốc gia."], answer: 1 },
                { type: 'mcq', text: "Quốc gia nào được mệnh danh là 'công xưởng của thế giới' trong thế kỉ XIX?", options: ["Mỹ.", "Pháp.", "Anh.", "Đức."], answer: 2 },
                { type: 'mcq', text: "Sự phát triển của chủ nghĩa tư bản hiện đại (từ sau CTTG II) gắn liền với cuộc cách mạng nào?", options: ["Cách mạng công nghiệp lần thứ nhất.", "Cách mạng khoa học - công nghệ hiện đại.", "Cách mạng văn hóa.", "Cách mạng xanh."], answer: 1 },
                { type: 'mcq', text: "Một trong những thách thức lớn nhất của chủ nghĩa tư bản hiện đại là gì?", options: ["Khủng hoảng kinh tế, tài chính mang tính chu kì.", "Thiếu hụt nguồn nhân lực trí thức.", "Sự xâm lược của các nước phong kiến.", "Không có khả năng sản xuất hàng hóa."], answer: 0 },
                { type: 'mcq', text: "Các tổ chức độc quyền như Các-ten, Tơ-rớt, Xanh-đi-ca xuất hiện đầu tiên ở đâu?", options: ["Châu Á.", "Châu Phi.", "Châu Âu và Bắc Mỹ.", "Mỹ La-tinh."], answer: 2 },
                { type: 'mcq', text: "Sự dung hợp giữa tư bản ngân hàng và tư bản công nghiệp đã tạo ra tầng lớp nào?", options: ["Tư sản công nghiệp.", "Tư bản tài chính.", "Địa chủ phong kiến.", "Thương nhân."], answer: 1 },
                { type: 'mcq', text: "Động lực chủ yếu thúc đẩy các nước tư bản phương Tây đi xâm lược thuộc địa là gì?", options: ["Khai hóa văn minh.", "Nhu cầu về thị trường và thuộc địa.", "Giúp đỡ các nước nghèo.", "Truyền bá tôn giáo."], answer: 1 },
                { type: 'mcq', text: "Sau Chiến tranh lạnh, chủ nghĩa tư bản hiện đại có xu hướng nào nổi bật?", options: ["Toàn cầu hóa kinh tế.", "Đóng cửa thị trường.", "Quay lại chế độ phong kiến.", "Xóa bỏ tiền tệ."], answer: 0 },
                { type: 'mcq', text: "Chủ nghĩa tư bản hiện đại ngày nay có khả năng tự điều chỉnh như thế nào?", options: ["Điều tiết vĩ mô nền kinh tế thông qua nhà nước tư sản.", "Nhường quyền lãnh đạo cho công nhân.", "Chia đều của cải cho mọi người.", "Xóa bỏ hoàn toàn độc quyền."], answer: 0 }
            ],
            tf: [
                { type: 'tf', text: "Về sự xác lập của chủ nghĩa tư bản:", options: [
                    { text: "a) Cách mạng công nghiệp là động lực chính xác lập CNTB trên toàn thế giới.", answer: true },
                    { text: "b) Quá trình này diễn ra hòa bình, không có chiến tranh xâm lược.", answer: false },
                    { text: "c) Nó mở ra kỉ nguyên văn minh công nghiệp cho nhân loại.", answer: true },
                    { text: "d) Các nước châu Á là lực lượng tiên phong trong quá trình này.", answer: false }
                ]},
                { type: 'tf', text: "Về giai đoạn chủ nghĩa đế quốc:", options: [
                    { text: "a) Là giai đoạn phát triển cao của chủ nghĩa tư bản.", answer: true },
                    { text: "b) Cạnh tranh tự do nhường chỗ cho sự thống trị của các tổ chức độc quyền.", answer: true },
                    { text: "c) Các cường quốc từ bỏ việc tranh giành thuộc địa.", answer: false },
                    { text: "d) Dẫn đến các cuộc chiến tranh đế quốc phân chia thế giới.", answer: true }
                ]},
                { type: 'tf', text: "Về chủ nghĩa tư bản hiện đại:", options: [
                    { text: "a) Bắt đầu từ sau Chiến tranh thế giới thứ hai đến nay.", answer: true },
                    { text: "b) Đã giải quyết triệt để mâu thuẫn giữa tư sản và vô sản.", answer: false },
                    { text: "c) Lực lượng sản xuất phát triển mạnh mẽ nhờ cách mạng khoa học - công nghệ.", answer: true },
                    { text: "d) Không còn xảy ra các cuộc khủng hoảng kinh tế chu kỳ.", answer: false }
                ]},
                { type: 'tf', text: "Về tiềm năng và thách thức của CNTB hiện đại:", options: [
                    { text: "a) Có năng lực to lớn trong ứng dụng khoa học kĩ thuật.", answer: true },
                    { text: "b) Khoảng cách giàu nghèo trong xã hội ngày càng được thu hẹp.", answer: false },
                    { text: "c) Sự bất bình đẳng xã hội vẫn là một thách thức lớn.", answer: true },
                    { text: "d) Nhà nước tư sản hoàn toàn bất lực trong việc điều tiết kinh tế.", answer: false }
                ]},
                { type: 'tf', text: "Về các tổ chức độc quyền:", options: [
                    { text: "a) Tập trung quy mô sản xuất lớn, nắm giữ vị trí then chốt của nền kinh tế.", answer: true },
                    { text: "b) Chỉ hoạt động trong lĩnh vực nông nghiệp.", answer: false },
                    { text: "c) Có khả năng chi phối cả chính sách đối nội, đối ngoại của nhà nước.", answer: true },
                    { text: "d) Đã xóa bỏ hoàn toàn sự cạnh tranh trên thị trường.", answer: false }
                ]},
                { type: 'tf', text: "Về toàn cầu hóa tư bản chủ nghĩa:", options: [
                    { text: "a) Là xu thế khách quan do sự phát triển của lực lượng sản xuất.", answer: true },
                    { text: "b) Các công ty xuyên quốc gia đóng vai trò động lực chính.", answer: true },
                    { text: "c) Toàn cầu hóa mang lại lợi ích cân bằng tuyệt đối cho mọi quốc gia.", answer: false },
                    { text: "d) Các nước đang phát triển đối mặt với nguy cơ bị tụt hậu và lệ thuộc.", answer: true }
                ]},
                { type: 'tf', text: "Đánh giá vai trò của chủ nghĩa tư bản đối với lịch sử:", options: [
                    { text: "a) Đã tạo ra khối lượng của cải vật chất khổng lồ cho nhân loại.", answer: true },
                    { text: "b) Là hình thái kinh tế - xã hội hoàn hảo nhất, không thể thay thế.", answer: false },
                    { text: "c) Đã thúc đẩy quá trình xã hội hóa sản xuất cao độ.", answer: true },
                    { text: "d) Sự phát triển của CNTB luôn gắn liền với hòa bình và hợp tác tuyệt đối.", answer: false }
                ]},
                { type: 'tf', text: "Về nền dân chủ tư sản hiện đại:", options: [
                    { text: "a) Quyền tự do, dân chủ của người dân được mở rộng hơn trước.", answer: true },
                    { text: "b) Bản chất vẫn là nền dân chủ bảo vệ lợi ích cho thiểu số tư sản.", answer: true },
                    { text: "c) Người lao động hoàn toàn nắm quyền quyết định chính sách quốc gia.", answer: false },
                    { text: "d) Các phong trào đấu tranh vì dân sinh, dân chủ vẫn diễn ra thường xuyên.", answer: true }
                ]},
                { type: 'tf', text: "Về sự điều tiết của nhà nước tư bản:", options: [
                    { text: "a) Nhà nước can thiệp vĩ mô để hạn chế khủng hoảng kinh tế.", answer: true },
                    { text: "b) Nhà nước quốc hữu hóa toàn bộ các công ty tư nhân.", answer: false },
                    { text: "c) Sử dụng công cụ thuế, pháp luật để xoa dịu mâu thuẫn xã hội.", answer: true },
                    { text: "d) Sự điều tiết này đã làm thay đổi hoàn toàn bản chất bóc lột của CNTB.", answer: false }
                ]},
                { type: 'tf', text: "Về xu hướng chuyển dịch của CNTB hiện nay:", options: [
                    { text: "a) Chuyển từ kinh tế công nghiệp sang nền kinh tế tri thức.", answer: true },
                    { text: "b) Từ bỏ hoàn toàn mục tiêu lợi nhuận để bảo vệ môi trường.", answer: false },
                    { text: "c) Chú trọng phát triển kinh tế xanh, kinh tế số để thích ứng.", answer: true },
                    { text: "d) Từ chối áp dụng trí tuệ nhân tạo (AI) vào sản xuất.", answer: false }
                ]}
            ]
        }
    },
    3: {
        title: "Bài 3: Sự hình thành Liên bang Xô viết",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Liên bang Cộng hòa xã hội chủ nghĩa Xô viết (Liên Xô) chính thức thành lập vào thời gian nào?", options: ["Năm 1917.", "Năm 1922.", "Năm 1924.", "Năm 1930."], answer: 1 },
                { type: 'mcq', text: "Cơ sở tư tưởng cho việc thành lập Liên bang Xô viết là gì?", options: ["Chủ nghĩa Tam dân.", "Tư tưởng triết học Ánh sáng.", "Chủ nghĩa Mác - Lênin.", "Tư tưởng cải cách của Sa hoàng."], answer: 2 },
                { type: 'mcq', text: "Ai là người có công lao lớn nhất trong việc sáng lập Liên bang Xô viết?", options: ["I. Xta-lin.", "Ph. Ăng-ghen.", "C. Mác.", "V.I. Lê-nin."], answer: 3 },
                { type: 'mcq', text: "Mục đích lớn nhất của việc thành lập Liên bang Xô viết là gì?", options: ["Xâm lược các nước châu Âu.", "Tạo nên sức mạnh tổng hợp để bảo vệ và xây dựng chủ nghĩa xã hội.", "Thiết lập nền quân chủ chuyên chế mới.", "Khôi phục lại đế quốc Nga cũ."], answer: 1 },
                { type: 'mcq', text: "Nguyên tắc cơ bản nhất trong quá trình thành lập Liên bang Xô viết là gì?", options: ["Sự bình đẳng, tự quyết và tự nguyện gia nhập của các dân tộc.", "Ép buộc bằng sức mạnh quân sự.", "Chỉ có nước Nga có quyền lãnh đạo tuyệt đối.", "Bắt buộc đồng hóa văn hóa."], answer: 0 },
                { type: 'mcq', text: "Ý nghĩa quốc tế của việc thành lập Liên bang Xô viết là gì?", options: ["Chứng minh chủ nghĩa tư bản đã sụp đổ.", "Cổ vũ mạnh mẽ phong trào giải phóng dân tộc trên toàn thế giới.", "Mở đầu cuộc Chiến tranh lạnh.", "Làm tan rã hệ thống thuộc địa ở châu Phi."], answer: 1 },
                { type: 'mcq', text: "Đại hội Xô viết toàn Liên bang lần thứ nhất (12/1922) đã thông qua văn kiện nào?", options: ["Tuyên ngôn thành lập Liên bang Xô viết và Hiệp ước Liên bang.", "Hiến pháp Liên Xô.", "Chính sách kinh tế mới (NEP).", "Sắc lệnh hòa bình."], answer: 0 },
                { type: 'mcq', text: "Trước khi thành lập Liên Xô, nước Nga Xô viết đã thực hiện chính sách gì để phục hồi kinh tế (1921)?", options: ["Chính sách cộng sản thời chiến.", "Chính sách kinh tế mới (NEP).", "Tập thể hóa nông nghiệp.", "Công nghiệp hóa xã hội chủ nghĩa."], answer: 1 },
                { type: 'mcq', text: "Bản Hiến pháp đầu tiên của Liên Xô được thông qua vào năm nào?", options: ["1917.", "1922.", "1924.", "1936."], answer: 2 },
                { type: 'mcq', text: "Khi mới thành lập (1922), Liên Xô gồm bao nhiêu nước cộng hòa?", options: ["4 nước.", "11 nước.", "15 nước.", "20 nước."], answer: 0 }
            ],
            tf: [
                { type: 'tf', text: "Về sự cần thiết thành lập Liên Xô:", options: [
                    { text: "a) Nước Nga và các nước cộng hòa Xô viết bị tàn phá nặng nề sau nội chiến.", answer: true },
                    { text: "b) Cần phải liên minh lại để chống lại sự đe dọa của các nước tư bản.", answer: true },
                    { text: "c) Việc thành lập nhằm mục đích khôi phục ngai vàng của Sa hoàng.", answer: false },
                    { text: "d) Cần có sự thống nhất về kinh tế và quốc phòng để xây dựng CNXH.", answer: true }
                ]},
                { type: 'tf', text: "Về quá trình thành lập Liên Xô:", options: [
                    { text: "a) Diễn ra dựa trên sự ép buộc quân sự của nước Nga Xô viết.", answer: false },
                    { text: "b) Tháng 12/1922, Đại hội Xô viết toàn Nga lần thứ 10 đề nghị thành lập Liên bang.", answer: true },
                    { text: "c) 4 nước cộng hòa đầu tiên gia nhập là Nga, U-crai-na, Bê-lô-rút, Ngoại Cáp-ca-dơ.", answer: true },
                    { text: "d) Quá trình này xóa bỏ hoàn toàn bản sắc văn hóa của các dân tộc.", answer: false }
                ]},
                { type: 'tf', text: "Về tư tưởng của Lê-nin trong việc lập Liên Xô:", options: [
                    { text: "a) Quyền bình đẳng giữa các dân tộc là nguyên tắc cốt lõi.", answer: true },
                    { text: "b) Các dân tộc có quyền tự quyết định vận mệnh của mình.", answer: true },
                    { text: "c) Yêu cầu các nước nhỏ phải nộp thuế cống nạp cho nước Nga.", answer: false },
                    { text: "d) Xây dựng một khối đoàn kết hữu nghị giữa các dân tộc Xô viết.", answer: true }
                ]},
                { type: 'tf', text: "Về Hiến pháp Liên Xô (1924):", options: [
                    { text: "a) Chính thức hoàn thành quá trình thành lập Nhà nước Liên bang Xô viết.", answer: true },
                    { text: "b) Quy định quyền lực tối cao thuộc về Hoàng đế.", answer: false },
                    { text: "c) Khẳng định quyền bầu cử và ứng cử của mọi công dân.", answer: true },
                    { text: "d) Quy định nền kinh tế tư bản chủ nghĩa là chủ đạo.", answer: false }
                ]},
                { type: 'tf', text: "Về ý nghĩa đối với trong nước của việc lập Liên Xô:", options: [
                    { text: "a) Tạo ra sức mạnh tổng hợp để vượt qua khó khăn kinh tế.", answer: true },
                    { text: "b) Làm suy yếu lực lượng quân sự của nước Nga Xô viết.", answer: false },
                    { text: "c) Là tiền đề để tiến hành công nghiệp hóa xã hội chủ nghĩa.", answer: true },
                    { text: "d) Xóa bỏ tình trạng chia rẽ, thù hằn dân tộc do chế độ cũ để lại.", answer: true }
                ]},
                { type: 'tf', text: "Về ý nghĩa quốc tế:", options: [
                    { text: "a) Liên Xô trở thành chỗ dựa vững chắc cho phong trào cách mạng thế giới.", answer: true },
                    { text: "b) Phá vỡ hoàn toàn hệ thống thuộc địa của chủ nghĩa đế quốc ngay lập tức.", answer: false },
                    { text: "c) Cổ vũ các dân tộc bị áp bức đứng lên đấu tranh giành độc lập.", answer: true },
                    { text: "d) Chứng minh mô hình nhà nước vô sản là một thực thể sinh động, có thật.", answer: true }
                ]},
                { type: 'tf', text: "Về Chính sách kinh tế mới (NEP):", options: [
                    { text: "a) Là bước chuẩn bị quan trọng về vật chất cho sự ra đời của Liên Xô.", answer: true },
                    { text: "b) NEP đã cấm hoàn toàn tự do buôn bán trên thị trường.", answer: false },
                    { text: "c) Khôi phục nền kinh tế hàng hóa nhiều thành phần dưới sự kiểm soát của Nhà nước.", answer: true },
                    { text: "d) Được Lê-nin đề xướng và áp dụng thành công.", answer: true }
                ]},
                { type: 'tf', text: "Về cơ cấu nhà nước Liên Xô:", options: [
                    { text: "a) Là nhà nước đa dân tộc, liên bang các nước cộng hòa.", answer: true },
                    { text: "b) Đại hội Xô viết toàn Liên bang là cơ quan quyền lực cao nhất.", answer: true },
                    { text: "c) Các nước cộng hòa thành viên không có quyền tách khỏi Liên bang.", answer: false },
                    { text: "d) Chính quyền các cấp đều do đại biểu của công nhân, nông dân bầu ra.", answer: true }
                ]},
                { type: 'tf', text: "Đánh giá chung về sự ra đời của Liên Xô:", options: [
                    { text: "a) Là một sự kiện mang tính bước ngoặt trong lịch sử nhân loại thế kỉ XX.", answer: true },
                    { text: "b) Đánh dấu sự chấm dứt của chiến tranh thế giới thứ nhất.", answer: false },
                    { text: "c) Đã thiết lập được một mô hình nhà nước đối lập với các nước tư bản.", answer: true },
                    { text: "d) Tuyệt đối không gặp bất cứ sự chống phá nào từ bên ngoài.", answer: false }
                ]},
                { type: 'tf', text: "Về mô hình xây dựng XHCN ở Liên Xô giai đoạn đầu:", options: [
                    { text: "a) Ưu tiên phát triển công nghiệp nặng.", answer: true },
                    { text: "b) Thực hiện khoán hộ cho từng nông dân cá thể.", answer: false },
                    { text: "c) Tập thể hóa nông nghiệp với quy mô lớn.", answer: true },
                    { text: "d) Từng bước nâng cao dân trí và đời sống văn hóa cho nhân dân.", answer: true }
                ]}
            ]
        }
    },
    4: {
        title: "Bài 4: Sự phát triển của CNXH từ sau CTTG II đến nay",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Sau CTTG II, chủ nghĩa xã hội đã vượt ra khỏi phạm vi một nước trở thành một hệ thống thế giới gắn liền với sự kiện nào?", options: ["Sự ra đời của các nước Dân chủ nhân dân Đông Âu.", "Thắng lợi của cách mạng Cuba.", "Chiến tranh Triều Tiên bùng nổ.", "Khối Vác-sa-va được thành lập."], answer: 0 },
                { type: 'mcq', text: "Quốc gia nào ở châu Á đi lên xây dựng chủ nghĩa xã hội từ năm 1949?", options: ["Việt Nam.", "Triều Tiên.", "Trung Quốc.", "Lào."], answer: 2 },
                { type: 'mcq', text: "Sự sụp đổ của hệ thống XHCN ở Đông Âu và Liên Xô diễn ra vào khoảng thời gian nào?", options: ["Cuối những năm 70.", "Cuối những năm 80 - đầu những năm 90 của thế kỉ XX.", "Đầu thế kỉ XXI.", "Giai đoạn 1945 - 1954."], answer: 1 },
                { type: 'mcq', text: "Nguyên nhân sâu xa nào dẫn đến sự sụp đổ của CNXH ở Liên Xô và Đông Âu?", options: ["Đường lối lãnh đạo mang tính chủ quan, duy ý chí, cơ chế tập trung quan liêu bao cấp.", "Sự tấn công quân sự của Mỹ và NATO.", "Không có tài nguyên thiên nhiên.", "Nhân dân không ủng hộ chủ nghĩa xã hội."], answer: 0 },
                { type: 'mcq', text: "Công cuộc Cải cách mở cửa ở Trung Quốc (1978) do ai khởi xướng?", options: ["Mao Trạch Đông.", "Chu Ân Lai.", "Đặng Tiểu Bình.", "Tập Cận Bình."], answer: 2 },
                { type: 'mcq', text: "Thành tựu lớn nhất của công cuộc Đổi mới ở Việt Nam (từ 1986) là gì?", options: ["Trở thành siêu cường quân sự thế giới.", "Đưa đất nước ra khỏi khủng hoảng, kinh tế tăng trưởng khá, vị thế quốc tế được nâng cao.", "Trở thành nước xuất khẩu vũ khí số một.", "Loại bỏ hoàn toàn kinh tế tư nhân."], answer: 1 },
                { type: 'mcq', text: "Quốc gia nào ở Tây Bán cầu là lá cờ đầu của phong trào xây dựng CNXH?", options: ["Vê-nê-xu-ê-la.", "Cu-ba.", "Mê-hi-cô.", "Ác-hen-ti-na."], answer: 1 },
                { type: 'mcq', text: "Đặc điểm chung trong công cuộc cải cách, đổi mới ở Trung Quốc và Việt Nam là gì?", options: ["Lấy cải tổ chính trị làm trọng tâm.", "Chuyển sang nền kinh tế thị trường định hướng xã hội chủ nghĩa.", "Từ bỏ sự lãnh đạo của Đảng Cộng sản.", "Phụ thuộc hoàn toàn vào viện trợ của phương Tây."], answer: 1 },
                { type: 'mcq', text: "Hội đồng Tương trợ Kinh tế (SEV) ra đời nhằm mục đích gì?", options: ["Thành lập liên minh quân sự chống NATO.", "Tăng cường sự hợp tác kinh tế, kĩ thuật giữa các nước XHCN.", "Xóa bỏ biên giới giữa các quốc gia Đông Âu.", "Cạnh tranh trực tiếp với ASEAN."], answer: 1 },
                { type: 'mcq', text: "Bài học quan trọng nhất từ sự sụp đổ của Liên Xô đối với Việt Nam là gì?", options: ["Phải xây dựng nền kinh tế đóng kín tự cung tự cấp.", "Kiên định con đường XHCN, giữ vững vai trò lãnh đạo của Đảng, kết hợp đổi mới kinh tế với ổn định chính trị.", "Bãi bỏ hoàn toàn các doanh nghiệp nhà nước.", "Tiến hành đa nguyên, đa đảng."], answer: 1 }
            ],
            tf: [
                { type: 'tf', text: "Về sự mở rộng của Chủ nghĩa xã hội sau CTTG II:", options: [
                    { text: "a) CNXH từ một nước đã trở thành hệ thống thế giới trải dài từ châu Âu sang châu Á.", answer: true },
                    { text: "b) Thắng lợi của Hồng quân Liên Xô tạo điều kiện thuận lợi cho sự ra đời của các nước Đông Âu.", answer: true },
                    { text: "c) Nước Mỹ đã hỗ trợ tài chính cho việc xây dựng CNXH ở châu Âu.", answer: false },
                    { text: "d) Sự mở rộng này làm thay đổi căn bản so sánh lực lượng trên thế giới.", answer: true }
                ]},
                { type: 'tf', text: "Về nguyên nhân sụp đổ của CNXH ở Liên Xô:", options: [
                    { text: "a) Do chậm đổi mới cơ chế quản lý kinh tế tập trung quan liêu bao cấp.", answer: true },
                    { text: "b) Do quân đội Liên Xô bị quân đội Mỹ đánh bại trên chiến trường.", answer: false },
                    { text: "c) Mắc sai lầm nghiêm trọng trong quá trình Cải tổ (từ 1985).", answer: true },
                    { text: "d) Sự chống phá tinh vi của các thế lực thù địch trong và ngoài nước.", answer: true }
                ]},
                { type: 'tf', text: "Về công cuộc Cải cách mở cửa ở Trung Quốc:", options: [
                    { text: "a) Lấy phát triển kinh tế làm trung tâm, tiến hành cải cách mở cửa.", answer: true },
                    { text: "b) Chuyển nền kinh tế từ kế hoạch hóa tập trung sang kinh tế thị trường XHCN.", answer: true },
                    { text: "c) Chấp nhận từ bỏ vai trò lãnh đạo của Đảng Cộng sản Trung Quốc.", answer: false },
                    { text: "d) Đã biến Trung Quốc thành nền kinh tế lớn thứ hai thế giới.", answer: true }
                ]},
                { type: 'tf', text: "Về công cuộc Đổi mới ở Việt Nam (từ 1986):", options: [
                    { text: "a) Đổi mới toàn diện, đồng bộ nhưng trọng tâm là đổi mới kinh tế.", answer: true },
                    { text: "b) Phát triển nền kinh tế hàng hóa nhiều thành phần có sự quản lý của nhà nước.", answer: true },
                    { text: "c) Thay đổi hoàn toàn mục tiêu độc lập dân tộc và chủ nghĩa xã hội.", answer: false },
                    { text: "d) Đã chủ động hội nhập kinh tế quốc tế sâu rộng.", answer: true }
                ]},
                { type: 'tf', text: "Về đất nước Cu-ba:", options: [
                    { text: "a) Bắt đầu đi lên CNXH sau thắng lợi của cách mạng năm 1959.", answer: true },
                    { text: "b) Luôn nhận được sự ủng hộ kinh tế mạnh mẽ từ Hoa Kỳ.", answer: false },
                    { text: "c) Phải đối mặt với lệnh cấm vận kinh tế kéo dài của Mỹ.", answer: true },
                    { text: "d) Đã đạt nhiều thành tựu lớn về y tế và giáo dục.", answer: true }
                ]},
                { type: 'tf', text: "Về bản chất của sự sụp đổ ở Liên Xô và Đông Âu:", options: [
                    { text: "a) Là sự sụp đổ của một mô hình CNXH cụ thể có nhiều khuyết tật.", answer: true },
                    { text: "b) Chứng minh lý luận của chủ nghĩa Mác - Lênin là hoàn toàn sai lầm.", answer: false },
                    { text: "c) Là một tổn thất vô cùng to lớn đối với phong trào cách mạng thế giới.", answer: true },
                    { text: "d) Đã tạo cơ hội cho các nước XHCN còn lại nhìn nhận và cải cách đổi mới.", answer: true }
                ]},
                { type: 'tf', text: "Về hệ thống các nước XHCN hiện nay:", options: [
                    { text: "a) Không còn bất cứ quốc gia nào đi theo con đường XHCN.", answer: false },
                    { text: "b) Các nước như Trung Quốc, Việt Nam, Cu-ba, Lào đang từng bước phát triển và đạt thành tựu.", answer: true },
                    { text: "c) Đều áp dụng một mô hình kinh tế giống hệt nhau.", answer: false },
                    { text: "d) Các nước XHCN hiện nay đóng vai trò quan trọng trong trật tự thế giới đa cực.", answer: true }
                ]},
                { type: 'tf', text: "Về kinh tế thị trường định hướng XHCN:", options: [
                    { text: "a) Là mô hình kinh tế sáng tạo của quá trình cải cách, đổi mới.", answer: true },
                    { text: "b) Loại bỏ hoàn toàn sự quản lý của Nhà nước.", answer: false },
                    { text: "c) Chấp nhận sự tồn tại của nhiều thành phần kinh tế (kể cả kinh tế tư nhân).", answer: true },
                    { text: "d) Kinh tế nhà nước đóng vai trò chủ đạo.", answer: true }
                ]},
                { type: 'tf', text: "Về quá trình Cải tổ của M. Goóc-ba-chốp (Liên Xô):", options: [
                    { text: "a) Bắt đầu từ năm 1985 nhằm khắc phục sự trì trệ của đất nước.", answer: true },
                    { text: "b) Thực hiện đa nguyên chính trị, đa đảng đối lập gây ra rối loạn chính trị.", answer: true },
                    { text: "c) Quá trình cải tổ đã thành công rực rỡ, cứu vãn được Liên Xô.", answer: false },
                    { text: "d) Sự thiếu kiên định về tư tưởng đã dẫn đến mất quyền lãnh đạo của Đảng.", answer: true }
                ]},
                { type: 'tf', text: "Về triển vọng của CNXH trong thế kỉ XXI:", options: [
                    { text: "a) Sức sống của CNXH vẫn được khẳng định qua thành tựu của các nước cải cách.", answer: true },
                    { text: "b) Chủ nghĩa tư bản đã giải quyết được mọi mâu thuẫn nên CNXH không còn cần thiết.", answer: false },
                    { text: "c) Con đường xây dựng CNXH là một quá trình lâu dài, khó khăn và phức tạp.", answer: true },
                    { text: "d) Quá trình đổi mới phải gắn liền với thực tiễn đặc thù của mỗi quốc gia.", answer: true }
                ]}
            ]
        }
    },
    5: {
        title: "Bài 5: Quá trình xâm lược và cai trị của CNTD ở Đông Nam Á",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Từ thế kỉ XVI, các nước tư bản phương Tây tiến hành xâm lược Đông Nam Á nhằm mục đích chính là gì?", options: ["Khai hóa văn minh cho cư dân bản địa.", "Tìm kiếm thị trường, hương liệu và nguyên liệu.", "Truyền bá tri thức khoa học kĩ thuật.", "Giao lưu văn hóa nghệ thuật."], answer: 1 },
                { type: 'mcq', text: "Vương quốc nào ở Đông Nam Á là quốc gia duy nhất giữ được nền độc lập tương đối trước làn sóng xâm lược của thực dân phương Tây?", options: ["Việt Nam.", "Phi-líp-pin.", "Xiêm (Thái Lan).", "In-đô-nê-xi-a."], answer: 2 },
                { type: 'mcq', text: "Thực dân Anh đã biến quốc gia nào ở Đông Nam Á thành thuộc địa rộng lớn và quan trọng nhất của mình?", options: ["Mã Lai.", "In-đô-nê-xi-a.", "Đông Dương.", "Miến Điện."], answer: 0 },
                { type: 'mcq', text: "Chính sách cai trị nổi bật và thâm độc nhất của thực dân phương Tây ở Đông Nam Á về chính trị là gì?", options: ["Đồng hóa văn hóa.", "Khai thác triệt để tài nguyên.", "'Chia để trị' nhằm gây chia rẽ dân tộc, tôn giáo.", "Phát triển công nghiệp nặng."], answer: 2 },
                { type: 'mcq', text: "Về kinh tế, thực dân phương Tây đã biến Đông Nam Á thành khu vực có đặc điểm gì?", options: ["Trung tâm công nghiệp cơ khí của thế giới.", "Nền kinh tế nông - công nghiệp phát triển đồng bộ.", "Nền kinh tế tự cung tự cấp, độc lập hoàn toàn.", "Nơi cung cấp nguyên liệu rẻ mạt và thị trường tiêu thụ hàng hóa ế thừa."], answer: 3 },
                { type: 'mcq', text: "Quần đảo Phi-líp-pin bị thực dân nào đô hộ đầu tiên và lâu dài nhất trước khi bị Mỹ chiếm?", options: ["Anh.", "Hà Lan.", "Tây Ban Nha.", "Pháp."], answer: 2 },
                { type: 'mcq', text: "Sự kiện Vua Ra-ma V (Chu-la-long-con) tiến hành cải cách (cuối thế kỉ XIX) có ý nghĩa như thế nào đối với Xiêm?", options: ["Làm cho Xiêm bị mất độc lập hoàn toàn.", "Giúp Xiêm phát triển theo hướng tư bản chủ nghĩa, bảo vệ được nền độc lập.", "Biến Xiêm thành cường quốc quân sự đi xâm lược nước khác.", "Làm bùng nổ chiến tranh nông dân."], answer: 1 },
                { type: 'mcq', text: "Ba nước Đông Dương (Việt Nam, Lào, Campuchia) trở thành thuộc địa của đế quốc nào?", options: ["Anh.", "Pháp.", "Tây Ban Nha.", "Hà Lan."], answer: 1 },
                { type: 'mcq', text: "Đặc điểm chung trong chính sách giáo dục của thực dân ở Đông Nam Á là gì?", options: ["Giáo dục bắt buộc miễn phí cho mọi người dân.", "Khuyến khích du học ở phương Tây.", "Thi hành chính sách 'ngu dân', hạn chế mở trường học.", "Xây dựng hệ thống đại học tiên tiến nhất châu Á."], answer: 2 },
                { type: 'mcq', text: "Tác động lớn nhất của quá trình xâm lược và cai trị của thực dân phương Tây đối với xã hội Đông Nam Á là gì?", options: ["Xóa bỏ hoàn toàn chế độ phong kiến ngay lập tức.", "Làm xuất hiện các giai cấp, tầng lớp xã hội mới (công nhân, tư sản, tiểu tư sản).", "Nông dân được giải phóng và có ruộng đất.", "Các dân tộc đoàn kết thành một khối thống nhất."], answer: 1 }
            ],
            tf: [
                { type: 'tf', text: "Về bối cảnh xâm lược Đông Nam Á:", options: [
                    { text: "a) Phương Tây đang trong giai đoạn phát triển chủ nghĩa tư bản cần thị trường.", answer: true },
                    { text: "b) Các quốc gia Đông Nam Á đang ở thời kì phong kiến suy thoái, khủng hoảng.", answer: true },
                    { text: "c) Đông Nam Á nghèo nàn tài nguyên nên phương Tây ít chú ý.", answer: false },
                    { text: "d) Vị trí địa lý ngã tư đường giao thương là một yếu tố thu hút thực dân.", answer: true }
                ]},
                { type: 'tf', text: "Về chính sách cai trị chính trị:", options: [
                    { text: "a) Thực dân phương Tây thường duy trì bộ máy phong kiến tay sai để dễ bề cai trị.", answer: true },
                    { text: "b) Thực hiện chính sách 'chia để trị', chia cắt lãnh thổ và dân tộc.", answer: true },
                    { text: "c) Trao toàn bộ quyền tự quyết chính trị cho người bản xứ.", answer: false },
                    { text: "d) Thiết lập các chế độ cai trị trực tiếp hoặc gián tiếp tùy từng vùng.", answer: true }
                ]},
                { type: 'tf', text: "Về chính sách bóc lột kinh tế:", options: [
                    { text: "a) Tập trung cướp đoạt ruộng đất lập đồn điền cao su, cà phê, lúa gạo.", answer: true },
                    { text: "b) Đầu tư phát triển mạnh mẽ ngành công nghiệp nặng, luyện kim, chế tạo máy.", answer: false },
                    { text: "c) Đặt ra vô số các loại thuế khóa nặng nề.", answer: true },
                    { text: "d) Nền kinh tế Đông Nam Á bị kìm hãm, phụ thuộc chặt chẽ vào chính quốc.", answer: true }
                ]},
                { type: 'tf', text: "Về văn hóa - giáo dục:", options: [
                    { text: "a) Thực dân truyền bá rộng rãi các tư tưởng dân chủ tự do của phương Tây.", answer: false },
                    { text: "b) Thi hành chính sách 'ngu dân', dung túng hủ tục lạc hậu.", answer: true },
                    { text: "c) Ép buộc người bản xứ phải thay đổi phong tục tập quán truyền thống.", answer: true },
                    { text: "d) Xây dựng cơ sở hạ tầng giáo dục lớn để phát triển nhân tài cho thuộc địa.", answer: false }
                ]},
                { type: 'tf', text: "Về sự biến đổi xã hội ở Đông Nam Á:", options: [
                    { text: "a) Xã hội phân hóa sâu sắc, xuất hiện giai cấp công nhân và tư sản.", answer: true },
                    { text: "b) Giai cấp nông dân ngày càng giàu có nhờ bán được nhiều nông sản.", answer: false },
                    { text: "c) Giai cấp công nhân ra đời từ các đồn điền, hầm mỏ, nhà máy của tư bản.", answer: true },
                    { text: "d) Mâu thuẫn bao trùm nhất là mâu thuẫn giữa toàn thể dân tộc với đế quốc xâm lược.", answer: true }
                ]},
                { type: 'tf', text: "Về phong trào đấu tranh chống xâm lược (từ thế kỉ XVI đến XIX):", options: [
                    { text: "a) Nhân dân Đông Nam Á đã nổi dậy chống ngoại xâm ngay từ những ngày đầu.", answer: true },
                    { text: "b) Đa số các cuộc đấu tranh giai đoạn này đều giành thắng lợi triệt để.", answer: false },
                    { text: "c) Phong trào mang đậm tính chất tự phát và bị đàn áp đẫm máu.", answer: true },
                    { text: "d) Các cuộc khởi nghĩa thường do văn thân, sĩ phu hoặc nông dân lãnh đạo.", answer: true }
                ]},
                { type: 'tf', text: "Về trường hợp của Xiêm (Thái Lan):", options: [
                    { text: "a) Xiêm không bị xâm lược là do có địa hình đồi núi bao bọc hoàn toàn.", answer: false },
                    { text: "b) Các vị vua Xiêm chủ động mở cửa, cải cách đất nước theo hướng phương Tây.", answer: true },
                    { text: "c) Xiêm đã sử dụng chính sách ngoại giao 'cây tre', lợi dụng mâu thuẫn Anh - Pháp.", answer: true },
                    { text: "d) Xiêm trở thành một đế quốc mạnh đi xâm lược lại các nước láng giềng.", answer: false }
                ]},
                { type: 'tf', text: "Đánh giá về hệ quả của sự cai trị thực dân:", options: [
                    { text: "a) Làm cho khu vực Đông Nam Á tụt hậu nghiêm trọng so với thế giới.", answer: true },
                    { text: "b) Phá vỡ cấu trúc làng xã truyền thống ở một số nơi.", answer: true },
                    { text: "c) Là nguyên nhân duy nhất giúp Đông Nam Á hiện đại hóa.", answer: false },
                    { text: "d) Để lại những mâu thuẫn biên giới, sắc tộc dai dẳng đến tận ngày nay.", answer: true }
                ]},
                { type: 'tf', text: "Về thực dân Hà Lan ở In-đô-nê-xi-a:", options: [
                    { text: "a) Công ty Đông Ấn Hà Lan là công cụ đắc lực để xâm chiếm và bóc lột.", answer: true },
                    { text: "b) Hà Lan chủ yếu khai thác vàng và bạc tại đây.", answer: false },
                    { text: "c) Thực thi 'Chế độ trồng chung' ép nông dân trồng cây hương liệu xuất khẩu.", answer: true },
                    { text: "d) Đã biến In-đô-nê-xi-a thành một quốc gia công nghiệp.", answer: false }
                ]},
                { type: 'tf', text: "Về sự can thiệp của Mỹ ở Phi-líp-pin:", options: [
                    { text: "a) Mỹ đã giúp Phi-líp-pin đánh đuổi Tây Ban Nha để trao trả độc lập.", answer: false },
                    { text: "b) Mỹ tiến hành chiến tranh Mỹ - Tây Ban Nha (1898) để nẫng tay trên Phi-líp-pin.", answer: true },
                    { text: "c) Mỹ đã thiết lập ách thống trị tàn bạo dập tắt nền cộng hòa non trẻ của Phi-líp-pin.", answer: true },
                    { text: "d) Dưới thời Mỹ, tiếng Anh được phổ cập rộng rãi tại Phi-líp-pin.", answer: true }
                ]}
            ]
        }
    },
    6: {
        title: "Bài 6: Hành trình đi đến độc lập dân tộc ở Đông Nam Á",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Phong trào giải phóng dân tộc ở Đông Nam Á chuyển sang thời kì đấu tranh theo xu hướng vô sản từ khi nào?", options: ["Cuối thế kỉ XIX.", "Đầu thế kỉ XX, đặc biệt sau Cách mạng tháng Mười Nga.", "Sau Chiến tranh thế giới thứ hai.", "Thập niên 90 của thế kỉ XX."], answer: 1 },
                { type: 'mcq', text: "Ba quốc gia đầu tiên ở Đông Nam Á chớp thời cơ Nhật đầu hàng Đồng minh để tuyên bố độc lập năm 1945 là", options: ["In-đô-nê-xi-a, Việt Nam, Lào.", "Việt Nam, Lào, Campuchia.", "Mã Lai, Miến Điện, Phi-líp-pin.", "Thái Lan, In-đô-nê-xi-a, Việt Nam."], answer: 0 },
                { type: 'mcq', text: "Giai cấp nào đóng vai trò lãnh đạo phong trào giải phóng dân tộc theo khuynh hướng dân chủ tư sản ở Đông Nam Á đầu kỉ XX?", options: ["Công nhân.", "Tư sản dân tộc và trí thức tiểu tư sản.", "Nông dân.", "Địa chủ phong kiến."], answer: 1 },
                { type: 'mcq', text: "Sự kiện nào đánh dấu bước ngoặt vĩ đại của cách mạng Việt Nam, đưa giai cấp công nhân lên nắm quyền lãnh đạo?", options: ["Khởi nghĩa Yên Bái (1930).", "Sự thành lập Đảng Cộng sản Việt Nam (1930).", "Cách mạng tháng Tám (1945).", "Chiến thắng Điện Biên Phủ (1954)."], answer: 1 },
                { type: 'mcq', text: "Trong giai đoạn 1945-1975, nhân dân Việt Nam, Lào, Campuchia phải tiến hành kháng chiến chống lại các đế quốc nào?", options: ["Anh và Pháp.", "Pháp và Nhật.", "Pháp và Mỹ.", "Hà Lan và Tây Ban Nha."], answer: 2 },
                { type: 'mcq', text: "Phong trào độc lập ở Phi-líp-pin cuối kỉ XIX gắn liền với tên tuổi của vị anh hùng dân tộc nào?", options: ["Hô-xê Ri-đan.", "A-qui-nal-đô.", "Xu-các-nô.", "Ra-ma V."], answer: 0 },
                { type: 'mcq', text: "Chiến thắng Điện Biên Phủ (1954) của Việt Nam có tác động như thế nào đến phong trào giải phóng dân tộc trên thế giới?", options: ["Là hồi chuông báo tử của chủ nghĩa thực dân kiểu mới.", "Giáng đòn quyết định làm sụp đổ hoàn toàn hệ thống thuộc địa của chủ nghĩa thực dân cũ.", "Kết thúc Chiến tranh lạnh.", "Thúc đẩy các nước châu Phi tiến hành cải cách kinh tế."], answer: 1 },
                { type: 'mcq', text: "Quốc gia nào ở Đông Nam Á giành độc lập muộn nhất (vào năm 2002)?", options: ["Bru-nây.", "Đông Ti-mo.", "Cam-pu-chia.", "Miến Điện (My-an-ma)."], answer: 1 },
                { type: 'mcq', text: "Mĩ thực hiện chiến lược gì ở Đông Dương (1954-1975) nhằm chia cắt lâu dài khu vực này?", options: ["Chủ nghĩa thực dân kiểu cũ.", "Chủ nghĩa thực dân kiểu mới.", "Chính sách láng giềng thân thiện.", "Chính sách Cây gậy lớn."], answer: 1 },
                { type: 'mcq', text: "Từ hành trình đi đến độc lập, các nước Đông Nam Á đã rút ra bài học cốt lõi nào cho công cuộc bảo vệ chủ quyền hiện nay?", options: ["Chỉ cần dựa vào sự bảo vệ của Liên hợp quốc.", "Giữ vững độc lập tự chủ, phát huy sức mạnh đại đoàn kết toàn dân tộc.", "Xây dựng các khối liên minh quân sự khép kín.", "Bế quan tỏa cảng để tránh bị can thiệp."], answer: 1 }
            ],
            tf: [
                { type: 'tf', text: "Về sự phát triển của phong trào GPDT đầu thế kỉ XX:", options: [
                    { text: "a) Xuất hiện khuynh hướng dân chủ tư sản do giai cấp tư sản lãnh đạo.", answer: true },
                    { text: "b) Khuynh hướng vô sản hình thành và phát triển nhờ sự truyền bá của chủ nghĩa Mác-Lênin.", answer: true },
                    { text: "c) Các phong trào đấu tranh giai đoạn này đều giành thắng lợi rực rỡ ngay lập tức.", answer: false },
                    { text: "d) Sự thành lập các Đảng Cộng sản đã mở ra con đường đấu tranh mới.", answer: true }
                ]},
                { type: 'tf', text: "Về Cách mạng tháng Tám (1945) ở Việt Nam:", options: [
                    { text: "a) Là cuộc cách mạng đẫm máu nhất trong lịch sử Đông Nam Á.", answer: false },
                    { text: "b) Biết chớp đúng thời cơ Nhật đầu hàng Đồng minh để Tổng khởi nghĩa.", answer: true },
                    { text: "c) Lật đổ ngai vàng phong kiến và ách thống trị của phát xít, thực dân.", answer: true },
                    { text: "d) Tạo hiệu ứng domino, cổ vũ mạnh mẽ In-đô-nê-xi-a và Lào nổi dậy.", answer: true }
                ]},
                { type: 'tf', text: "Về cuộc kháng chiến chống Pháp và chống Mỹ (1945-1975):", options: [
                    { text: "a) Đây là cuộc chiến đấu của nhân dân ba nước Đông Dương chống kẻ thù chung.", answer: true },
                    { text: "b) Chiến dịch Điện Biên Phủ (1954) kết thúc ách đô hộ của thực dân Pháp.", answer: true },
                    { text: "c) Cuộc kháng chiến chống Mỹ kết thúc bằng Hiệp định Giơ-ne-vơ.", answer: false },
                    { text: "d) Thắng lợi mùa Xuân 1975 đã giải phóng hoàn toàn miền Nam Việt Nam.", answer: true }
                ]},
                { type: 'tf', text: "Về phong trào độc lập ở In-đô-nê-xi-a:", options: [
                    { text: "a) Ngày 17/8/1945, Xu-các-nô đọc bản Tuyên ngôn Độc lập.", answer: true },
                    { text: "b) Ngay sau đó, In-đô-nê-xi-a được thực dân Hà Lan công nhận độc lập trong hòa bình.", answer: false },
                    { text: "c) Phải trải qua cuộc đấu tranh quân sự và ngoại giao gay gắt mới buộc Hà Lan công nhận (1949).", answer: true },
                    { text: "d) In-đô-nê-xi-a là quốc gia có dân số theo đạo Công giáo đông nhất khu vực.", answer: false }
                ]},
                { type: 'tf', text: "Đánh giá ý nghĩa thắng lợi của phong trào GPDT ở ĐNÁ:", options: [
                    { text: "a) Chấm dứt hoàn toàn ách thống trị của chủ nghĩa thực dân.", answer: true },
                    { text: "b) Đưa các quốc gia Đông Nam Á bước vào kỉ nguyên độc lập, tự chủ.", answer: true },
                    { text: "c) Làm sụp đổ hệ thống xã hội chủ nghĩa trên thế giới.", answer: false },
                    { text: "d) Góp phần làm tan rã hệ thống thuộc địa của chủ nghĩa đế quốc toàn cầu.", answer: true }
                ]},
                { type: 'tf', text: "Về phong trào ở Phi-líp-pin:", options: [
                    { text: "a) Nước Cộng hòa Phi-líp-pin ra đời sớm nhất Đông Nam Á (1899) nhưng bị Mỹ bóp chết.", answer: true },
                    { text: "b) Năm 1946, Mỹ trao trả độc lập cho Phi-líp-pin do áp lực đấu tranh mạnh mẽ.", answer: true },
                    { text: "c) Phi-líp-pin là nước duy nhất đánh bại hoàn toàn quân đội Mỹ bằng quân sự.", answer: false },
                    { text: "d) Sau độc lập, Phi-líp-pin thiết lập chế độ quân chủ lập hiến.", answer: false }
                ]},
                { type: 'tf', text: "Về khối đoàn kết chiến đấu ba nước Đông Dương:", options: [
                    { text: "a) Được hình thành trên cơ sở có chung kẻ thù và khát vọng độc lập.", answer: true },
                    { text: "b) Liên minh chiến đấu này là nhân tố quan trọng quyết định thắng lợi của cả ba nước.", answer: true },
                    { text: "c) Mĩ đã thành công trong việc chia rẽ hoàn toàn ba nước bằng chính sách 'Đông Dương hóa'.", answer: false },
                    { text: "d) Tuyến đường Hồ Chí Minh là biểu tượng sinh động của tình đoàn kết Việt - Lào - Cam.", answer: true }
                ]},
                { type: 'tf', text: "Về trường hợp của Bru-nây và Đông Ti-mo:", options: [
                    { text: "a) Bru-nây giành độc lập từ tay thực dân Anh vào năm 1984.", answer: true },
                    { text: "b) Đông Ti-mo từng là thuộc địa của Bồ Đào Nha và sau đó bị In-đô-nê-xi-a sáp nhập.", answer: true },
                    { text: "c) Đông Ti-mo trở thành quốc gia độc lập thông qua một cuộc chiến tranh hạt nhân.", answer: false },
                    { text: "d) Hiện nay, Đông Ti-mo đã là thành viên chính thức của ASEAN.", answer: false }
                ]},
                { type: 'tf', text: "Đặc điểm chung của hành trình giành độc lập:", options: [
                    { text: "a) Là một quá trình lâu dài, gian khổ và đầy hi sinh.", answer: true },
                    { text: "b) Kết hợp nhiều hình thức đấu tranh: vũ trang, chính trị, ngoại giao.", answer: true },
                    { text: "c) Mọi quốc gia đều dựa hoàn toàn vào sự giải phóng của quân Đồng minh.", answer: false },
                    { text: "d) Tinh thần yêu nước và chủ nghĩa dân tộc là động lực mạnh mẽ nhất.", answer: true }
                ]},
                { type: 'tf', text: "Hệ quả đối với khu vực và thế giới:", options: [
                    { text: "a) Sự ra đời của các quốc gia độc lập tạo tiền đề thành lập tổ chức ASEAN.", answer: true },
                    { text: "b) Làm thay đổi bản đồ địa chính trị khu vực châu Á - Thái Bình Dương.", answer: true },
                    { text: "c) Dẫn đến sự bùng nổ của Chiến tranh thế giới thứ ba.", answer: false },
                    { text: "d) Các nước Đông Nam Á trở thành đối tác bình đẳng trong quan hệ quốc tế.", answer: true }
                ]}
            ]
        }
    },
    7: {
        title: "Bài 7: Khái quát về chiến tranh bảo vệ Tổ quốc trong lịch sử Việt Nam",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Hoàn cảnh chung dẫn đến các cuộc kháng chiến bảo vệ Tổ quốc của dân tộc Việt Nam là gì?", options: ["Việt Nam là một nước giàu có, quân đội mạnh nhất khu vực.", "Việt Nam có vị trí địa lý chiến lược quan trọng và tài nguyên phong phú.", "Việt Nam luôn chủ động đem quân đi xâm lược các nước khác.", "Sự can thiệp của các tổ chức quốc tế."], answer: 1 },
                { type: 'mcq', text: "Trận đánh nào đã kết thúc ách đô hộ 1000 năm của phong kiến phương Bắc, mở ra kỉ nguyên độc lập tự chủ?", options: ["Trận Bạch Đằng (938).", "Trận Như Nguyệt (1077).", "Trận Ngọc Hồi - Đống Đa (1789).", "Trận Chi Lăng - Xương Giang (1427)."], answer: 0 },
                { type: 'mcq', text: "Tư tưởng quân sự nổi bật của Trần Hưng Đạo trong 3 lần kháng chiến chống Mông - Nguyên là gì?", options: ["'Tiên phát chế nhân'.", "'Khoan thư sức dân để làm kế sâu rễ bền gốc'.", "'Tốc chiến tốc quyết'.", "Xây dựng thành lũy kiên cố cố thủ."], answer: 1 },
                { type: 'mcq', text: "Chiến thuật 'Vườn không nhà trống' được quân dân nhà Trần sử dụng hiệu quả nhất để chống lại quân thù nào?", options: ["Quân Tống.", "Quân Mông - Nguyên.", "Quân Minh.", "Quân Thanh."], answer: 1 },
                { type: 'mcq', text: "Nguyên nhân chủ quan quan trọng nhất dẫn đến thắng lợi của các cuộc kháng chiến bảo vệ Tổ quốc là gì?", options: ["Vũ khí vượt trội hơn kẻ thù.", "Lòng yêu nước, tinh thần đoàn kết toàn dân và sự lãnh đạo tài tình của các tướng lĩnh.", "Kẻ thù gặp thiên tai, dịch bệnh.", "Sự giúp đỡ của các nước láng giềng."], answer: 1 },
                { type: 'mcq', text: "Sự thất bại của nhà Hồ trong cuộc kháng chiến chống Minh (1406-1407) để lại bài học đắt giá nào?", options: ["Không được xây dựng thành lũy kiên cố.", "Quân đội đông không bằng vũ khí tốt.", "Mất lòng dân là mất nước, không dựa vào dân thì mọi thành lũy đều vô dụng.", "Không được cải cách đất nước khi có chiến tranh."], answer: 2 },
                { type: 'mcq', text: "Tướng giặc nào đã phải bỏ mạng trong trận Chi Lăng (1427)?", options: ["Thoát Hoan.", "Liễu Thăng.", "Tôn Sĩ Nghị.", "Hầu Nhân Bảo."], answer: 1 },
                { type: 'mcq', text: "Cuộc kháng chiến chống Tống thời Lý (1075-1077) gắn liền với tên tuổi của vị anh hùng nào?", options: ["Lê Hoàn.", "Trần Quốc Tuấn.", "Lý Thường Kiệt.", "Nguyễn Huệ."], answer: 2 },
                { type: 'mcq', text: "Đặc điểm nổi bật của nghệ thuật quân sự Việt Nam trong lịch sử là gì?", options: ["Lấy thịt đè người, dùng quân số đông để áp đảo.", "Lấy nhỏ đánh lớn, lấy ít địch nhiều, lấy yếu chống mạnh.", "Chỉ đánh các trận phòng ngự trên biển.", "Chủ yếu sử dụng lính đánh thuê người nước ngoài."], answer: 1 },
                { type: 'mcq', text: "Trận Ngọc Hồi - Đống Đa (1789) là chiến công hiển hách của quân đội nào?", options: ["Quân đội nhà Lý.", "Quân đội nhà Trần.", "Quân đội Tây Sơn.", "Quân đội nhà Nguyễn."], answer: 2 }
            ],
            tf: [
                { type: 'tf', text: "Về vị trí chiến lược của Việt Nam:", options: [
                    { text: "a) Việt Nam nằm trên trục đường giao thông huyết mạch của khu vực Đông Nam Á.", answer: true },
                    { text: "b) Lãnh thổ Việt Nam là cầu nối giữa lục địa Á-Âu với khu vực hải đảo.", answer: true },
                    { text: "c) Việt Nam bị bao bọc hoàn toàn bởi sa mạc và núi tuyết.", answer: false },
                    { text: "d) Sự phong phú về tài nguyên và vị trí hiểm yếu khiến VN luôn bị các đế quốc nhòm ngó.", answer: true }
                ]},
                { type: 'tf', text: "Về cuộc kháng chiến chống quân Nam Hán (938):", options: [
                    { text: "a) Ngô Quyền đã sử dụng kế cắm cọc gỗ nhọn bọc sắt trên sông Bạch Đằng.", answer: true },
                    { text: "b) Lợi dụng chế độ thủy triều lên xuống để đánh giặc.", answer: true },
                    { text: "c) Thất bại của trận đánh này khiến nước ta rơi vào ách Bắc thuộc lần thứ hai.", answer: false },
                    { text: "d) Mở ra kỉ nguyên độc lập, tự chủ lâu dài cho dân tộc.", answer: true }
                ]},
                { type: 'tf', text: "Về kháng chiến chống Tống thời Lý:", options: [
                    { text: "a) Lý Thường Kiệt chủ động đem quân đánh sang đất Tống để tự vệ (Tiên phát chế nhân).", answer: true },
                    { text: "b) Phòng tuyến sông Như Nguyệt được xây dựng như một bức tường thành không thể vượt qua.", answer: true },
                    { text: "c) Quân Lý đã tàn sát toàn bộ tù binh Tống sau khi chiến thắng.", answer: false },
                    { text: "d) Kết thúc bằng việc giảng hòa, mở đường cho giặc rút quân giữ thể diện.", answer: true }
                ]},
                { type: 'tf', text: "Về ba lần kháng chiến chống Mông - Nguyên (Thế kỉ XIII):", options: [
                    { text: "a) Kẻ thù là đội quân xâm lược mạnh nhất, tàn bạo nhất thế giới lúc bấy giờ.", answer: true },
                    { text: "b) Hội nghị Diên Hồng là biểu tượng của tinh thần đoàn kết toàn dân quyết chiến.", answer: true },
                    { text: "c) Nhà Trần giành chiến thắng chủ yếu nhờ có vũ khí súng thần công hiện đại.", answer: false },
                    { text: "d) Kế sách 'Vườn không nhà trống' đã triệt nguồn lương thực của giặc.", answer: true }
                ]},
                { type: 'tf', text: "Về cuộc kháng chiến chống Thanh (1789):", options: [
                    { text: "a) Vua Lê Chiêu Thống đã cầu viện quân Thanh vào xâm lược nước ta.", answer: true },
                    { text: "b) Quang Trung tiến quân thần tốc, đánh tan 29 vạn quân Thanh trong dịp Tết Kỷ Dậu.", answer: true },
                    { text: "c) Quân Tây Sơn phải mất 5 năm mới giải phóng được Thăng Long.", answer: false },
                    { text: "d) Trận Ngọc Hồi - Đống Đa là đòn quyết định tiêu diệt ý chí xâm lược của quân Thanh.", answer: true }
                ]},
                { type: 'tf', text: "Về nguyên nhân thắng lợi của các cuộc kháng chiến:", options: [
                    { text: "a) Lòng yêu nước nồng nàn và tinh thần bất khuất của dân tộc.", answer: true },
                    { text: "b) Sự lãnh đạo tài tình, mưu lược của các vị anh hùng dân tộc.", answer: true },
                    { text: "c) Địch luôn chủ động rút lui vì thương cảm nhân dân ta.", answer: false },
                    { text: "d) Khối đại đoàn kết toàn dân tạo thành sức mạnh vô địch.", answer: true }
                ]},
                { type: 'tf', text: "Về bài học kinh nghiệm 'lấy dân làm gốc':", options: [
                    { text: "a) Sức mạnh bảo vệ Tổ quốc bắt nguồn từ sức mạnh của nhân dân.", answer: true },
                    { text: "b) Phải chăm lo đời sống nhân dân, 'khoan thư sức dân' trong thời bình.", answer: true },
                    { text: "c) Chỉ cần có quân đội chuyên nghiệp là đủ, không cần động viên nhân dân.", answer: false },
                    { text: "d) Bài học này vẫn giữ nguyên giá trị trong công cuộc xây dựng và bảo vệ đất nước hiện nay.", answer: true }
                ]},
                { type: 'tf', text: "Về nghệ thuật quân sự Việt Nam:", options: [
                    { text: "a) Nghệ thuật đánh du kích, tiêu hao sinh lực địch là phổ biến.", answer: true },
                    { text: "b) Kết hợp linh hoạt giữa đánh du kích và các trận quyết chiến chiến lược.", answer: true },
                    { text: "c) Việt Nam luôn chọn cách dàn quân đánh đối mặt trên các cánh đồng lớn.", answer: false },
                    { text: "d) Tận dụng triệt để yếu tố địa hình, thời tiết, khí hậu để bày binh bố trận.", answer: true }
                ]},
                { type: 'tf', text: "Về vai trò của ngoại giao trong chiến tranh:", options: [
                    { text: "a) Dùng ngoại giao để mua chuộc tướng giặc bằng vàng bạc.", answer: false },
                    { text: "b) Kết hợp 'đánh' và 'đàm' để nhanh chóng kết thúc chiến tranh.", answer: true },
                    { text: "c) Mở đường hiếu sinh, cấp thuyền ngựa cho giặc về nước để giữ hòa hiếu.", answer: true },
                    { text: "d) Ngoại giao góp phần bảo vệ thành quả chiến thắng trên chiến trường.", answer: true }
                ]},
                { type: 'tf', text: "Đánh giá chung về lịch sử chống ngoại xâm:", options: [
                    { text: "a) Dân tộc Việt Nam có lịch sử chống ngoại xâm oai hùng, liên tục.", answer: true },
                    { text: "b) Thử thách chiến tranh đã tôi luyện bản lĩnh kiên cường của người Việt.", answer: true },
                    { text: "c) Lịch sử chống ngoại xâm làm cho kinh tế Việt Nam luôn phát triển rực rỡ nhất thế giới.", answer: false },
                    { text: "d) Là niềm tự hào, nguồn sức mạnh tinh thần to lớn cho thế hệ trẻ.", answer: true }
                ]}
            ]
        }
    },
    8: {
        title: "Bài 8: Một số cuộc khởi nghĩa và chiến tranh giải phóng trong lịch sử Việt Nam",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Khởi nghĩa Hai Bà Trưng (năm 40) bùng nổ nhằm chống lại ách đô hộ của triều đại phong kiến phương Bắc nào?", options: ["Nhà Triệu.", "Nhà Hán (Đông Hán).", "Nhà Đường.", "Nhà Ngô."], answer: 1 },
                { type: 'mcq', text: "Ai là người lãnh đạo cuộc khởi nghĩa chống lại ách đô hộ của nhà Lương và lập ra nước Vạn Xuân (544)?", options: ["Mai Thúc Loan.", "Phùng Hưng.", "Lý Bí.", "Bà Triệu."], answer: 2 },
                { type: 'mcq', text: "Cuộc khởi nghĩa Lam Sơn (1418-1427) do Lê Lợi lãnh đạo nhằm đánh đuổi quân xâm lược nào?", options: ["Quân Tống.", "Quân Mông - Nguyên.", "Quân Minh.", "Quân Thanh."], answer: 2 },
                { type: 'mcq', text: "Trong khởi nghĩa Lam Sơn, Nguyễn Trãi đã soạn thảo bản thiên cổ hùng văn nào để tuyên cáo kết thúc chiến tranh?", options: ["Nam quốc sơn hà.", "Hịch tướng sĩ.", "Bình Ngô đại cáo.", "Chiếu dời đô."], answer: 2 },
                { type: 'mcq', text: "Đặc điểm nổi bật của phong trào Tây Sơn (cuối kỉ XVIII) là gì?", options: ["Từ một cuộc nổi dậy của nông dân phát triển thành chiến tranh bảo vệ Tổ quốc.", "Là cuộc khởi nghĩa của quý tộc phong kiến.", "Chỉ giới hạn ở vùng Nam Bộ.", "Thất bại nhanh chóng do thiếu sự ủng hộ của nhân dân."], answer: 0 },
                { type: 'mcq', text: "Ai là người đã có câu nói nổi tiếng: 'Tôi muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ, chém cá kình ở biển Đông...'?", options: ["Hai Bà Trưng.", "Bà Triệu (Triệu Thị Trinh).", "Bùi Thị Xuân.", "Nguyễn Thị Định."], answer: 1 },
                { type: 'mcq', text: "Khởi nghĩa Phùng Hưng (cuối kỉ VIII) chống lại ách đô hộ của triều đại nào?", options: ["Nhà Hán.", "Nhà Đường.", "Nhà Tống.", "Nhà Minh."], answer: 1 },
                { type: 'mcq', text: "Phong trào Tây Sơn đã lập nên những chiến công hiển hách nào?", options: ["Đánh tan quân Xiêm (Rạch Gầm - Xoài Mút) và quân Thanh (Ngọc Hồi - Đống Đa).", "Chiến thắng Bạch Đằng và Như Nguyệt.", "Chiến thắng Chi Lăng - Xương Giang.", "Chiến thắng Điện Biên Phủ."], answer: 0 },
                { type: 'mcq', text: "Bài học rút ra từ các cuộc khởi nghĩa trong thời kì Bắc thuộc là gì?", options: ["Sức sống mãnh liệt của dân tộc không thể bị đồng hóa.", "Dân tộc ta thích bị nước ngoài cai trị.", "Khởi nghĩa vũ trang luôn mang lại độc lập vĩnh viễn.", "Chỉ có cầu viện nước ngoài mới giành được độc lập."], answer: 0 },
                { type: 'mcq', text: "Tư tưởng nhân nghĩa trong khởi nghĩa Lam Sơn được thể hiện như thế nào?", options: ["'Việc nhân nghĩa cốt ở yên dân / Quân điếu phạt trước lo trừ bạo'.", "'Sát Thát'.", "'Quyết tử cho Tổ quốc quyết sinh'.", "'Tốc chiến tốc quyết'."], answer: 0 }
            ],
            tf: [
                { type: 'tf', text: "Về phong trào đấu tranh thời Bắc thuộc:", options: [
                    { text: "a) Diễn ra liên tục, bền bỉ suốt 1000 năm chống đồng hóa và bóc lột.", answer: true },
                    { text: "b) Đều dẫn đến việc thành lập các nhà nước độc lập tồn tại lâu dài.", answer: false },
                    { text: "c) Thể hiện tinh thần yêu nước, khát vọng độc lập của nhân dân ta.", answer: true },
                    { text: "d) Phụ nữ đóng vai trò quan trọng (Hai Bà Trưng, Bà Triệu).", answer: true }
                ]},
                { type: 'tf', text: "Về Khởi nghĩa Lam Sơn (1418-1427):", options: [
                    { text: "a) Bắt đầu từ vùng rừng núi Lam Sơn (Thanh Hóa).", answer: true },
                    { text: "b) Ban đầu gặp rất nhiều khó khăn, nghĩa quân phải 3 lần rút lên núi Chí Linh.", answer: true },
                    { text: "c) Nghĩa quân đã sử dụng chiến thuật dàn quân đánh trực diện ngay từ đầu.", answer: false },
                    { text: "d) Chuyển hướng chiến lược vào Nghệ An đã mở ra bước ngoặt cho cuộc khởi nghĩa.", answer: true }
                ]},
                { type: 'tf', text: "Về Hội thề Lũng Nhai trong khởi nghĩa Lam Sơn:", options: [
                    { text: "a) Lê Lợi cùng 18 người đồng chí hướng đã làm lễ tế cáo trời đất, thề sống chết có nhau.", answer: true },
                    { text: "b) Hội thề thể hiện tinh thần đoàn kết, đồng lòng chống giặc.", answer: true },
                    { text: "c) Đây là hiệp ước đầu hàng giặc Minh.", answer: false },
                    { text: "d) Là hạt nhân lãnh đạo vững chắc của cuộc khởi nghĩa.", answer: true }
                ]},
                { type: 'tf', text: "Về Nguyễn Trãi trong khởi nghĩa Lam Sơn:", options: [
                    { text: "a) Ông là người vạch ra chiến lược 'Đánh vào lòng người' (Tâm công).", answer: true },
                    { text: "b) Trực tiếp cầm gươm giết chết tướng giặc Liễu Thăng.", answer: false },
                    { text: "c) Đóng vai trò mưu sĩ xuất sắc, là linh hồn của cuộc khởi nghĩa.", answer: true },
                    { text: "d) Viết Bình Ngô đại cáo - bản tuyên ngôn độc lập thứ hai của dân tộc.", answer: true }
                ]},
                { type: 'tf', text: "Về phong trào Tây Sơn (1771-1789):", options: [
                    { text: "a) Do 3 anh em Nguyễn Nhạc, Nguyễn Huệ, Nguyễn Lữ lãnh đạo.", answer: true },
                    { text: "b) Xuất phát điểm là một cuộc đấu tranh của giai cấp tư sản.", answer: false },
                    { text: "c) Đã lần lượt lật đổ các tập đoàn phong kiến Nguyễn, Trịnh, Lê.", answer: true },
                    { text: "d) Đóng vai trò quyết định trong việc thống nhất đất nước bước đầu.", answer: true }
                ]},
                { type: 'tf', text: "Về trận Rạch Gầm - Xoài Mút (1785):", options: [
                    { text: "a) Là trận thủy chiến lừng lẫy đánh tan 5 vạn quân Xiêm xâm lược.", answer: true },
                    { text: "b) Nguyễn Huệ đã triệt để lợi dụng địa hình khúc sông hẹp để mai phục.", answer: true },
                    { text: "c) Trận đánh này diễn ra trên sông Hồng ở miền Bắc.", answer: false },
                    { text: "d) Chấm dứt hoàn toàn âm mưu can thiệp của triều đình Xiêm.", answer: true }
                ]},
                { type: 'tf', text: "Về nguyên nhân thắng lợi của khởi nghĩa Lam Sơn và phong trào Tây Sơn:", options: [
                    { text: "a) Nhờ sự ủng hộ nhiệt tình của đông đảo quần chúng nhân dân.", answer: true },
                    { text: "b) Sự lãnh đạo kiệt xuất của Lê Lợi, Nguyễn Trãi, Quang Trung.", answer: true },
                    { text: "c) Các đội quân xâm lược đều tự nguyện rút lui vì sợ hãi.", answer: false },
                    { text: "d) Nghệ thuật quân sự sáng tạo, linh hoạt, chớp đúng thời cơ.", answer: true }
                ]},
                { type: 'tf', text: "Về tính chất của phong trào Tây Sơn:", options: [
                    { text: "a) Mang tính chất của một cuộc khởi nghĩa nông dân điển hình.", answer: true },
                    { text: "b) Mang tính chất của một cuộc chiến tranh giải phóng và bảo vệ Tổ quốc.", answer: true },
                    { text: "c) Là một cuộc chiến tranh tôn giáo.", answer: false },
                    { text: "d) Giải quyết thành công cả hai nhiệm vụ: dân tộc và giai cấp.", answer: true }
                ]},
                { type: 'tf', text: "Đánh giá vai trò của Nguyễn Huệ - Quang Trung:", options: [
                    { text: "a) Là vị anh hùng áo vải cờ đào, một thiên tài quân sự bách chiến bách thắng.", answer: true },
                    { text: "b) Đã thực hiện chính sách ngoại giao mềm dẻo với nhà Thanh sau chiến tranh.", answer: true },
                    { text: "c) Ông đã xây dựng thành công chủ nghĩa xã hội ở Việt Nam.", answer: false },
                    { text: "d) Khôi phục kinh tế, văn hóa bằng các chính sách Chiếu Khuyến nông, Chiếu Lập học.", answer: true }
                ]},
                { type: 'tf', text: "Về ý nghĩa lịch sử của các cuộc khởi nghĩa:", options: [
                    { text: "a) Đập tan ách thống trị ngoại bang, bảo vệ nền độc lập dân tộc.", answer: true },
                    { text: "b) Để lại kho tàng kinh nghiệm quân sự phong phú cho đời sau.", answer: true },
                    { text: "c) Khẳng định chân lý: dân tộc Việt Nam không bao giờ chịu khuất phục.", answer: true },
                    { text: "d) Là nguyên nhân dẫn đến sự nghèo đói của đất nước trong nhiều thế kỉ.", answer: false }
                ]}
            ]
        }
    },
    9: {
        title: "Bài 9: Cuộc cải cách của Hồ Quý Ly và triều Hồ",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Cuộc cải cách của Hồ Quý Ly diễn ra trong bối cảnh nào?", options: ["Nhà Trần đang phát triển rực rỡ.", "Khủng hoảng trầm trọng của chế độ phong kiến cuối triều Trần.", "Sau khi đánh bại quân xâm lược Minh.", "Đất nước đang bị chia cắt đàng Trong - đàng Ngoài."], answer: 1 },
                { type: 'mcq', text: "Trên lĩnh vực kinh tế - tài chính, chính sách nổi bật nhất của Hồ Quý Ly là gì?", options: ["Phát hành tiền giấy (Thông bảo hội sao).", "Miễn thuế cho toàn bộ nông dân.", "Mở rộng giao thương quốc tế tự do.", "Đẩy mạnh khai thác dầu mỏ."], answer: 0 },
                { type: 'mcq', text: "Chính sách 'Hạn điền' của Hồ Quý Ly nhằm mục đích gì?", options: ["Khuyến khích vương hầu, quý tộc mở rộng điền trang.", "Hạn chế diện tích ruộng đất sở hữu tư nhân của vương hầu, quý tộc, quan lại.", "Chia đều ruộng đất cho tất cả mọi người.", "Tịch thu toàn bộ ruộng đất của chùa chiền."], answer: 1 },
                { type: 'mcq', text: "Chính sách 'Hạn nô' của triều Hồ quy định điều gì?", options: ["Khuyến khích mua bán nô tì.", "Giải phóng toàn bộ nô tì.", "Quy định số lượng nô tì tối đa mà các quan lại, vương hầu được phép giữ.", "Bắt dân thường làm nô tì cho nhà nước."], answer: 2 },
                { type: 'mcq', text: "Về quân sự - quốc phòng, Hồ Quý Ly đã có những hành động gì nổi bật?", options: ["Giải tán quân đội để tiết kiệm ngân sách.", "Tăng cường quân số, xây dựng hệ thống phòng tuyến (Thành nhà Hồ, thành Đa Bang), chế tạo súng thần cơ.", "Dựa hoàn toàn vào quân đội lính đánh thuê nước ngoài.", "Chỉ tập trung xây dựng thủy quân."], answer: 1 },
                { type: 'mcq', text: "Về văn hóa - giáo dục, Hồ Quý Ly đã đề cao chữ viết nào?", options: ["Chữ Hán.", "Chữ Nôm.", "Chữ Quốc ngữ.", "Chữ Phạn."], answer: 1 },
                { type: 'mcq', text: "Hồ Quý Ly lập ra nhà Hồ và đổi quốc hiệu nước ta là gì?", options: ["Đại Việt.", "Đại Cồ Việt.", "Đại Ngu.", "Vạn Xuân."], answer: 2 },
                { type: 'mcq', text: "Nhược điểm lớn nhất dẫn đến sự thất bại của cuộc cải cách Hồ Quý Ly là gì?", options: ["Không có chính sách kinh tế nào.", "Quá chú trọng văn hóa, bỏ bê quân sự.", "Tiến hành quá dồn dập, đụng chạm đến quyền lợi của nhiều tầng lớp, làm mất lòng dân.", "Bị nông dân phản đối vì chia quá nhiều ruộng đất cho họ."], answer: 2 },
                { type: 'mcq', text: "Công trình kiến trúc vĩ đại nào được xây dựng dưới triều Hồ và hiện là Di sản Văn hóa Thế giới?", options: ["Hoàng thành Thăng Long.", "Cố đô Huế.", "Thành Tây Đô (Thành nhà Hồ).", "Thánh địa Mỹ Sơn."], answer: 2 },
                { type: 'mcq', text: "Ý nghĩa khách quan của cuộc cải cách Hồ Quý Ly là gì?", options: ["Cứu vãn được sự sụp đổ của nhà Trần.", "Xóa bỏ hoàn toàn chế độ phong kiến.", "Thể hiện nỗ lực chấn hưng đất nước, góp phần làm suy yếu thế lực quý tộc họ Trần, thúc đẩy sự phát triển của Nho giáo.", "Đưa Việt Nam trở thành đế quốc mạnh nhất châu Á."], answer: 2 }
            ],
            tf: [
                { type: 'tf', text: "Về bối cảnh cải cách của Hồ Quý Ly:", options: [
                    { text: "a) Cuối thế kỉ XIV, nhà Trần suy yếu, mâu thuẫn xã hội gay gắt.", answer: true },
                    { text: "b) Nông dân, nô tì liên tục nổi dậy khởi nghĩa.", answer: true },
                    { text: "c) Kinh tế nông nghiệp phát triển hưng thịnh chưa từng có.", answer: false },
                    { text: "d) Đe dọa xâm lược từ nhà Minh ở phương Bắc ngày càng lớn.", answer: true }
                ]},
                { type: 'tf', text: "Về chính sách kinh tế 'Hạn điền':", options: [
                    { text: "a) Thu hồi ruộng đất thừa của quý tộc sung vào của công.", answer: true },
                    { text: "b) Giúp tăng diện tích ruộng đất công của nhà nước.", answer: true },
                    { text: "c) Nhận được sự ủng hộ nhiệt tình của các vương hầu nhà Trần.", answer: false },
                    { text: "d) Góp phần giảm bớt quyền lực kinh tế của thế lực phong kiến cũ.", answer: true }
                ]},
                { type: 'tf', text: "Về chính sách phát hành tiền giấy:", options: [
                    { text: "a) Tiền giấy 'Thông bảo hội sao' lần đầu tiên được sử dụng ở Việt Nam.", answer: true },
                    { text: "b) Nhà nước cấm hoàn toàn việc sử dụng tiền đồng.", answer: true },
                    { text: "c) Việc phát hành tiền giấy diễn ra suôn sẻ, không gây xáo trộn kinh tế.", answer: false },
                    { text: "d) Nhằm mục đích thu đồng về để đúc vũ khí.", answer: true }
                ]},
                { type: 'tf', text: "Về chính sách giáo dục và thi cử:", options: [
                    { text: "a) Mở rộng hệ thống trường học xuống tận phủ, châu.", answer: true },
                    { text: "b) Đưa Toán học vào nội dung thi cử.", answer: true },
                    { text: "c) Bãi bỏ hoàn toàn Nho giáo, đề cao Phật giáo.", answer: false },
                    { text: "d) Bổ sung môn thi viết chữ Nôm.", answer: false } // Note: Hồ Quý Ly đề cao chữ Nôm nhưng chưa đưa vào thi chính thức thay Hán
                ]},
                { type: 'tf', text: "Về quân sự và quốc phòng:", options: [
                    { text: "a) Hồ Nguyên Trừng chế tạo thành công súng thần cơ (đại bác).", answer: true },
                    { text: "b) Xây dựng Thành nhà Hồ bằng đá tảng kiên cố chỉ trong 3 tháng.", answer: true },
                    { text: "c) Nhờ vũ khí hiện đại, nhà Hồ đã đánh bại quân Minh xâm lược.", answer: false },
                    { text: "d) Lập sổ hộ tịch để kiểm soát dân số và tăng cường bắt lính.", answer: true }
                ]},
                { type: 'tf', text: "Về chính sách tôn giáo:", options: [
                    { text: "a) Đề cao Nho giáo, biến Nho giáo thành hệ tư tưởng độc tôn.", answer: true },
                    { text: "b) Đàn áp khốc liệt Đạo giáo.", answer: false },
                    { text: "c) Hạn chế sự phát triển của Phật giáo, bắt sư sãi chưa đến 50 tuổi phải hoàn tục.", answer: true },
                    { text: "d) Tịch thu bớt ruộng đất của chùa chiền.", answer: true }
                ]},
                { type: 'tf', text: "Đánh giá mặt tích cực của cải cách:", options: [
                    { text: "a) Thể hiện tinh thần yêu nước, tự cường của Hồ Quý Ly.", answer: true },
                    { text: "b) Giải quyết triệt để mọi mâu thuẫn giai cấp trong xã hội.", answer: false },
                    { text: "c) Có nhiều tư tưởng vượt trước thời đại (như dùng tiền giấy, Toán học).", answer: true },
                    { text: "d) Tăng cường sức mạnh tập quyền của nhà nước.", answer: true }
                ]},
                { type: 'tf', text: "Đánh giá nguyên nhân thất bại:", options: [
                    { text: "a) Các chính sách đụng chạm đến quyền lợi của tầng lớp quý tộc Trần, gây chia rẽ.", answer: true },
                    { text: "b) Áp dụng các biện pháp bạo lực, cưỡng chế làm mất lòng dân.", answer: true },
                    { text: "c) Do Hồ Quý Ly không có năng lực quản lý nhà nước.", answer: false },
                    { text: "d) Thiếu nền tảng sức mạnh đoàn kết toàn dân khi ứng phó ngoại xâm.", answer: true }
                ]},
                { type: 'tf', text: "Về bài học lịch sử từ triều Hồ:", options: [
                    { text: "a) Cải cách phải phù hợp với thực tiễn, tiến hành từng bước vững chắc.", answer: true },
                    { text: "b) Phải chú trọng xây dựng khối đại đoàn kết toàn dân tộc.", answer: true },
                    { text: "c) Chỉ cần vũ khí tốt, thành lũy cao là giữ được nước.", answer: false },
                    { text: "d) Sức mạnh quốc phòng phải dựa trên thế trận lòng dân.", answer: true }
                ]},
                { type: 'tf', text: "Về nhân vật Hồ Quý Ly:", options: [
                    { text: "a) Ông là một nhà cải cách lớn, quyết đoán và có tầm nhìn xa.", answer: true },
                    { text: "b) Tuy nhiên, ông đã soán ngôi nhà Trần một cách hợp pháp thông qua bầu cử.", answer: false },
                    { text: "c) Sự nghiệp của ông để lại nhiều tranh cãi trong lịch sử dân tộc.", answer: true },
                    { text: "d) Ông đã hi sinh oanh liệt trên chiến trường để bảo vệ kinh thành.", answer: false }
                ]}
            ]
        }
    },
    10: {
        title: "Bài 10: Cuộc cải cách của Lê Thánh Tông (Thế kỉ XV)",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Cuộc cải cách của Lê Thánh Tông diễn ra trong bối cảnh nào?", options: ["Đất nước đang bị quân Minh đô hộ.", "Nhà nước Lê sơ đang trong giai đoạn phát triển thịnh vượng nhưng bộ máy cai trị cần kiện toàn.", "Chế độ phong kiến đang khủng hoảng suy vong.", "Vua Lê Thái Tổ vừa mới lên ngôi."], answer: 1 },
                { type: 'mcq', text: "Trọng tâm trong cuộc cải cách của Lê Thánh Tông là lĩnh vực nào?", options: ["Hành chính - Bộ máy nhà nước.", "Kinh tế - Nông nghiệp.", "Văn hóa - Nghệ thuật.", "Quân sự - Vũ khí."], answer: 0 },
                { type: 'mcq', text: "Để tập trung quyền lực vào tay nhà vua, Lê Thánh Tông đã có quyết định gì bãi bỏ các chức vụ cấp cao?", options: ["Bãi bỏ chức Tể tướng, Đại hành khiển, tự mình trực tiếp điều hành 6 bộ.", "Bãi bỏ Lục bộ, thành lập Hội đồng cơ mật.", "Chuyển giao quyền lực cho Thái hậu.", "Giao quyền điều hành cho các tướng lĩnh quân đội."], answer: 0 },
                { type: 'mcq', text: "Về hành chính địa phương, Lê Thánh Tông chia cả nước thành bao nhiêu đạo thừa tuyên?", options: ["10 đạo thừa tuyên.", "13 đạo thừa tuyên.", "15 đạo thừa tuyên.", "18 đạo thừa tuyên."], answer: 1 },
                { type: 'mcq', text: "Bộ luật nổi tiếng được ban hành dưới thời Lê Thánh Tông có tên là gì?", options: ["Hình thư.", "Hình luật.", "Quốc triều hình luật (Luật Hồng Đức).", "Hoàng Việt luật lệ."], answer: 2 },
                { type: 'mcq', text: "Điểm tiến bộ nổi bật mang tính nhân văn của Luật Hồng Đức là gì?", options: ["Bảo vệ quyền lợi của nô tì.", "Có một số điều khoản bảo vệ quyền lợi của phụ nữ (quyền chia tài sản, từ hôn).", "Xóa bỏ hình phạt tử hình.", "Công nhận quyền tự do ngôn luận."], answer: 1 },
                { type: 'mcq', text: "Lê Thánh Tông đã đề cao hệ tư tưởng nào để làm nền tảng cho việc trị nước?", options: ["Phật giáo.", "Đạo giáo.", "Nho giáo.", "Thiên Chúa giáo."], answer: 2 },
                { type: 'mcq', text: "Về giáo dục, Lê Thánh Tông đã có biện pháp gì để tuyển chọn nhân tài?", options: ["Cho bốc thăm để làm quan.", "Chỉ chọn con cháu quý tộc.", "Tổ chức thi cử quy củ, chặt chẽ, dựng bia Tiến sĩ ở Văn Miếu.", "Mua bán chức tước bổ sung công quỹ."], answer: 2 },
                { type: 'mcq', text: "Chính sách ruộng đất nổi bật nhất được ban hành dưới thời Lê Thánh Tông là gì?", options: ["Khoán hộ.", "Tịch điền.", "Quân điền.", "Doanh điền."], answer: 2 },
                { type: 'mcq', text: "Đánh giá chung về cuộc cải cách của Lê Thánh Tông, nhận định nào đúng nhất?", options: ["Là cuộc cải cách toàn diện, đưa chế độ phong kiến Việt Nam đạt đến đỉnh cao huy hoàng.", "Là cuộc cải cách thất bại do không được quan lại ủng hộ.", "Chỉ có tác dụng về mặt văn hóa, không có ý nghĩa kinh tế.", "Làm suy yếu sức mạnh quốc phòng của đất nước."], answer: 0 }
            ],
            tf: [
                { type: 'tf', text: "Về cải cách bộ máy chính quyền trung ương:", options: [
                    { text: "a) Bãi bỏ các chức vụ quan trọng như Tướng quốc, Đại tổng quản để vua trực tiếp nắm quyền.", answer: true },
                    { text: "b) Thành lập Lục bộ (Lại, Hộ, Lễ, Binh, Hình, Công) chịu trách nhiệm trực tiếp trước nhà vua.", answer: true },
                    { text: "c) Vua Lê Thánh Tông giao toàn quyền quyết định cho Lục bộ, tự mình lui về làm Thái thượng hoàng.", answer: false },
                    { text: "d) Đặt ra Lục khoa để thanh tra, giám sát hoạt động của Lục bộ.", answer: true }
                ]},
                { type: 'tf', text: "Về cải cách hành chính địa phương:", options: [
                    { text: "a) Chia cả nước thành 13 đạo thừa tuyên.", answer: true },
                    { text: "b) Đứng đầu mỗi đạo thừa tuyên là một vị Vương gia cai quản.", answer: false },
                    { text: "c) Thiết lập 3 ti (Đô ti, Thừa ti, Hiến ti) cùng quản lý một đạo để kiểm soát lẫn nhau.", answer: true },
                    { text: "d) Bộ máy hành chính được tổ chức chặt chẽ từ trung ương đến cấp xã.", answer: true }
                ]},
                { type: 'tf', text: "Về Quốc triều hình luật (Luật Hồng Đức):", options: [
                    { text: "a) Là bộ luật hoàn chỉnh và đồ sộ nhất của thời kỳ phong kiến Việt Nam.", answer: true },
                    { text: "b) Mang đậm tư tưởng Nho giáo: bảo vệ quyền lợi vua, quan lại, tôn ti trật tự.", answer: true },
                    { text: "c) Không có bất cứ điều khoản nào bảo vệ người nghèo, phụ nữ hay người cô quả.", answer: false },
                    { text: "d) Có những quy định nghiêm khắc bảo vệ chủ quyền, biên giới quốc gia.", answer: true }
                ]},
                { type: 'tf', text: "Về văn hóa, giáo dục và thi cử:", options: [
                    { text: "a) Giáo dục Nho học được độc tôn, thi cử trở thành con đường chính để làm quan.", answer: true },
                    { text: "b) Dựng bia Tiến sĩ để vinh danh người đỗ đạt và khuyến khích học tập.", answer: true },
                    { text: "c) Lê Thánh Tông đã đóng cửa Quốc Tử Giám để tiết kiệm ngân sách.", answer: false },
                    { text: "d) Bản thân vua Lê Thánh Tông là người lập ra Hội Tao Đàn và tự xưng là Tao Đàn Đô Nguyên Súy.", answer: true }
                ]},
                { type: 'tf', text: "Về quân sự và quốc phòng:", options: [
                    { text: "a) Quân đội được tổ chức theo chế độ 'Ngụ binh ư nông' (gửi binh ở nhà nông).", answer: true },
                    { text: "b) Quân đội chỉ gồm toàn lính đánh thuê từ phương Bắc.", answer: false },
                    { text: "c) Đề cao kỉ luật quân đội, thường xuyên tổ chức duyệt binh, tập trận.", answer: true },
                    { text: "d) Ban hành 43 điều kỉ luật quân đội để răn đe.", answer: true }
                ]},
                { type: 'tf', text: "Về kinh tế và xã hội:", options: [
                    { text: "a) Khuyến khích khai hoang, mở rộng diện tích canh tác.", answer: true },
                    { text: "b) Ban hành phép Quân điền, chia ruộng đất công cho quan lại và nông dân nghèo.", answer: true },
                    { text: "c) Đóng cửa giao thương với tất cả các nước để bảo vệ an ninh.", answer: false },
                    { text: "d) Xã hội ổn định, thái bình, xuất hiện câu ca dao: 'Đời vua Thái Tổ, Thái Tông / Thóc lúa đầy đồng trâu chẳng buồn ăn'.", answer: true }
                ]},
                { type: 'tf', text: "Đánh giá tính chất của cuộc cải cách:", options: [
                    { text: "a) Là cuộc cải cách có tính đồng bộ, toàn diện và sâu sắc.", answer: true },
                    { text: "b) Mang đậm dấu ấn cá nhân tài năng của vua Lê Thánh Tông.", answer: true },
                    { text: "c) Là sự sao chép nguyên xi mô hình nhà nước của phương Tây.", answer: false },
                    { text: "d) Nhằm xây dựng một nhà nước pháp quyền hiện đại của giai cấp tư sản.", answer: false }
                ]},
                { type: 'tf', text: "Đánh giá ý nghĩa lịch sử của cải cách Lê Thánh Tông:", options: [
                    { text: "a) Đưa nhà nước Lê sơ phát triển đến đỉnh cao của chế độ quân chủ chuyên chế tập quyền.", answer: true },
                    { text: "b) Tạo ra nền tảng kinh tế - xã hội vững chắc, quốc phòng hùng mạnh.", answer: true },
                    { text: "c) Làm mất đi bản sắc văn hóa dân tộc do quá sùng bái Nho giáo.", answer: false },
                    { text: "d) Để lại nhiều bài học giá trị về quản lý, điều hành và xây dựng luật pháp.", answer: true }
                ]},
                { type: 'tf', text: "So sánh cải cách Hồ Quý Ly và Lê Thánh Tông:", options: [
                    { text: "a) Cả hai cuộc cải cách đều diễn ra lúc chế độ phong kiến đang khủng hoảng.", answer: false },
                    { text: "b) Cải cách Lê Thánh Tông thành công rực rỡ, còn Hồ Quý Ly bị thất bại.", answer: true },
                    { text: "c) Cả hai đều chú trọng củng cố bộ máy nhà nước và sức mạnh quân sự.", answer: true },
                    { text: "d) Hồ Quý Ly được nhân dân ủng hộ nhiều hơn Lê Thánh Tông.", answer: false }
                ]},
                { type: 'tf', text: "Về bản đồ Hồng Đức:", options: [
                    { text: "a) Là bộ bản đồ quốc gia đầu tiên do nhà nước phong kiến Việt Nam tổ chức vẽ.", answer: true },
                    { text: "b) Thể hiện ý thức bảo vệ chủ quyền lãnh thổ và biển đảo dân tộc.", answer: true },
                    { text: "c) Bản đồ này do các giáo sĩ phương Tây vẽ tặng cho vua Lê.", answer: false },
                    { text: "d) Có vẽ rõ hai quần đảo Hoàng Sa và Trường Sa thuộc chủ quyền Đại Việt.", answer: true }
                ]}
            ]
        }
    }
};
