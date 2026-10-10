/* =========================================================================
   DỮ LIỆU LỊCH SỬ KHỐI 10 - TOÀN BỘ 10 BÀI (SGK Kết nối tri thức)
   Bản quyền thuộc về số ĐT: 0943.930.787
========================================================================= */

const dataKhoi10 = {
    1: {
        title: "Bài 1: Hiện thực lịch sử và lịch sử được con người nhận thức",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Khái niệm 'hiện thực lịch sử' được hiểu là gì?", options: ["Những câu chuyện kể dân gian.", "Những ghi chép của các nhà sử học.", "Sự tưởng tượng của con người về quá khứ.", "Tất cả những gì đã diễn ra trong quá khứ."], answer: 3 },
                { type: 'mcq', text: "Đặc điểm nổi bật của hiện thực lịch sử là gì?", options: ["Có thể thay đổi theo thời gian.", "Tồn tại hoàn toàn khách quan, không phụ thuộc vào ý muốn chủ quan của con người.", "Chỉ bao gồm các sự kiện chính trị lớn.", "Phụ thuộc vào nhận thức của nhà sử học."], answer: 1 },
                { type: 'mcq', text: "Lịch sử được con người nhận thức là gì?", options: ["Những hiểu biết của con người về hiện thực lịch sử, được trình bày, tái hiện theo những cách khác nhau.", "Những dự đoán về tương lai.", "Bản sao chính xác 100% của quá khứ.", "Sự lặp lại của quá khứ."], answer: 0 },
                { type: 'mcq', text: "Sử học là ngành khoa học nghiên cứu về vấn đề gì?", options: ["Quá khứ của loài người.", "Các hiện tượng tự nhiên.", "Tương lai của nhân loại.", "Sự vận động của vũ trụ."], answer: 0 },
                { type: 'mcq', text: "Đối tượng nghiên cứu của Sử học là gì?", options: ["Chỉ nghiên cứu về các bậc vĩ nhân.", "Quá trình hình thành Trái Đất.", "Chỉ nghiên cứu lịch sử quốc gia.", "Toàn bộ quá khứ của loài người."], answer: 3 },
                { type: 'mcq', text: "Một trong những chức năng khoa học cơ bản của Sử học là gì?", options: ["Khôi phục các sự kiện lịch sử diễn ra trong quá khứ.", "Dự báo thời tiết.", "Giáo dục tư tưởng, tình cảm.", "Xây dựng các công trình kiến trúc."], answer: 0 },
                { type: 'mcq', text: "Nhiệm vụ nhận thức của Sử học nhằm mục đích gì?", options: ["Góp phần giáo dục đạo đức.", "Cung cấp tri thức khoa học, giúp con người tìm hiểu, khám phá hiện thực lịch sử một cách khách quan, khoa học.", "Sáng tác văn học nghệ thuật.", "Dự báo tương lai."], answer: 1 },
                { type: 'mcq', text: "Vì sao giữa hiện thực lịch sử và lịch sử được con người nhận thức luôn có khoảng cách?", options: ["Vì quá khứ thường xuyên bị thay đổi.", "Vì con người không thể nhận thức và tái hiện hoàn toàn đầy đủ hiện thực lịch sử đúng như nó đã xảy ra.", "Vì con người không quan tâm đến quá khứ.", "Vì sử học không phải là khoa học."], answer: 1 },
                { type: 'mcq', text: "Lịch sử được con người nhận thức phụ thuộc vào yếu tố quan trọng nhất nào của người nghiên cứu?", options: ["Tuổi tác và giới tính.", "Khả năng văn chương.", "Mục đích, thái độ, đạo đức và thế giới quan.", "Sở thích cá nhân."], answer: 2 },
                { type: 'mcq', text: "Nhiệm vụ dự báo của Sử học được thể hiện qua việc gì?", options: ["Giáo dục lòng yêu nước.", "Khôi phục chính xác từng chi tiết của quá khứ.", "Thông qua việc tổng kết thực tiễn, rút ra các bài học kinh nghiệm để góp phần dự báo về tương lai.", "Ghi chép lại các sự kiện hàng ngày."], answer: 2 }
            ],
            tf: [
                { type: 'tf', text: "Về khái niệm lịch sử và hiện thực lịch sử:", options: [
                    { text: "a) Lịch sử là những gì đã diễn ra trong quá khứ.", answer: true },
                    { text: "b) Lịch sử loài người chỉ bao gồm quá trình tương tác giữa con người với nhau, không bao gồm tương tác với tự nhiên.", answer: false },
                    { text: "c) Hiện thực lịch sử tồn tại hoàn toàn khách quan, không thể thay đổi được.", answer: true },
                    { text: "d) Con người có thể thay đổi được hiện thực lịch sử nếu có đủ tư liệu.", answer: false }
                ]},
                { type: 'tf', text: "Về lịch sử được con người nhận thức:", options: [
                    { text: "a) Luôn phản ánh chính xác 100% những gì đã xảy ra trong quá khứ.", answer: false },
                    { text: "b) Phụ thuộc vào nhu cầu, năng lực và phương pháp của người tìm hiểu lịch sử.", answer: true },
                    { text: "c) Được trình bày, tái hiện theo nhiều cách như kể chuyện, ghi chép, lập đài tưởng niệm.", answer: true },
                    { text: "d) Giữa hiện thực lịch sử và lịch sử được nhận thức không bao giờ có khoảng cách.", answer: false }
                ]},
                { type: 'tf', text: "Về chức năng của Sử học:", options: [
                    { text: "a) Chức năng khoa học của Sử học là khôi phục các sự kiện lịch sử và rút ra bản chất, quy luật vận động.", answer: true },
                    { text: "b) Chức năng xã hội của Sử học là giáo dục tư tưởng, tình cảm, đạo đức.", answer: true },
                    { text: "c) Sử học không có chức năng dự báo tương lai.", answer: false },
                    { text: "d) Chức năng khoa học và chức năng xã hội của Sử học hoàn toàn tách biệt, không liên quan đến nhau.", answer: false }
                ]},
                { type: 'tf', text: "Về nhiệm vụ của Sử học:", options: [
                    { text: "a) Nhiệm vụ nhận thức là cung cấp tri thức khoa học, khám phá hiện thực lịch sử chân thực.", answer: true },
                    { text: "b) Nhiệm vụ giáo dục góp phần truyền bá những giá trị và truyền thống tốt đẹp cho thế hệ sau.", answer: true },
                    { text: "c) Sử học chỉ có nhiệm vụ ghi chép lại các sự kiện mà không cần tổng kết thực tiễn.", answer: false },
                    { text: "d) Thông qua tổng kết thực tiễn, Sử học rút ra bài học kinh nghiệm cho cuộc sống hiện tại.", answer: true }
                ]},
                { type: 'tf', text: "Đánh giá về đối tượng nghiên cứu của Sử học:", options: [
                    { text: "a) Đối tượng nghiên cứu của Sử học là toàn bộ quá khứ của loài người.", answer: true },
                    { text: "b) Sử học chỉ nghiên cứu lịch sử của các quốc gia lớn.", answer: false },
                    { text: "c) Quá khứ của một cá nhân, một nhóm người hay cộng đồng người đều là đối tượng của Sử học.", answer: true },
                    { text: "d) Sử học tập trung nghiên cứu sự sống ngoài Trái Đất.", answer: false }
                ]},
                { type: 'tf', text: "Về khoảng cách trong nhận thức lịch sử:", options: [
                    { text: "a) Khoảng cách nhận thức phát sinh do mức độ phong phú và xác thực của thông tin sử liệu.", answer: true },
                    { text: "b) Thái độ và thế giới quan của nhà sử học ảnh hưởng lớn đến kết quả nghiên cứu.", answer: true },
                    { text: "c) Mọi nhà sử học đều có chung một nhận thức tuyệt đối giống nhau về một sự kiện.", answer: false },
                    { text: "d) Khoảng cách này có thể được thu hẹp nhờ phương pháp nghiên cứu khoa học và sử liệu xác thực.", answer: true }
                ]},
                { type: 'tf', text: "Về các hình thức tái hiện lịch sử:", options: [
                    { text: "a) Lịch sử chỉ có thể được tái hiện qua các văn bản ghi chép của nhà nước.", answer: false },
                    { text: "b) Thực hành các nghi lễ, phong tục cũng là một cách tái hiện lịch sử.", answer: true },
                    { text: "c) Việc xây dựng đài tưởng niệm không thuộc phạm trù nhận thức lịch sử.", answer: false },
                    { text: "d) Nghiên cứu khoa học là một hình thức nhận thức và tái hiện lịch sử cấp cao.", answer: true }
                ]},
                { type: 'tf', text: "Vai trò của người nghiên cứu lịch sử:", options: [
                    { text: "a) Đạo đức của người nghiên cứu đóng vai trò quan trọng trong việc trình bày lịch sử.", answer: true },
                    { text: "b) Người nghiên cứu có quyền tự do bóp méo hiện thực lịch sử theo ý muốn cá nhân.", answer: false },
                    { text: "c) Năng lực của người tìm hiểu lịch sử quyết định chất lượng của nhận thức lịch sử.", answer: true },
                    { text: "d) Việc thiếu hụt tư liệu không ảnh hưởng đến kết luận của nhà nghiên cứu.", answer: false }
                ]},
                { type: 'tf', text: "Về tính khách quan của hiện thực lịch sử:", options: [
                    { text: "a) Hiện thực lịch sử là những sự thật đã diễn ra và không thể thay đổi.", answer: true },
                    { text: "b) Tính khách quan của hiện thực lịch sử phụ thuộc vào thế giới quan của con người.", answer: false },
                    { text: "c) Dù con người có nhận thức được hay không, hiện thực lịch sử vẫn tồn tại độc lập.", answer: true },
                    { text: "d) Hiện thực lịch sử có thể bị xóa bỏ nếu không có ai ghi chép lại.", answer: false }
                ]},
                { type: 'tf', text: "Sự phân biệt giữa hai khái niệm lịch sử:", options: [
                    { text: "a) Lịch sử được hiểu theo hai nghĩa khác nhau: hiện thực lịch sử và nhận thức lịch sử.", answer: true },
                    { text: "b) Hiện thực lịch sử và nhận thức lịch sử là hai khái niệm đồng nhất, không có sự khác biệt.", answer: false },
                    { text: "c) Nhận thức lịch sử là nỗ lực của con người nhằm tiếp cận gần nhất với hiện thực lịch sử.", answer: true },
                    { text: "d) Sự khác biệt giữa hai khái niệm này là cơ sở tồn tại của khoa học Lịch sử.", answer: true }
                ]}
            ]
        }
    },
    2: {
        title: "Bài 2: Tri thức lịch sử và cuộc sống",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Người xưa thường dùng câu nói nào để nhấn mạnh sự cần thiết của việc tìm hiểu quá khứ?", options: ["'Tiên học lễ, hậu học văn'.", "'Ôn cố, tri tân' (Ôn cũ, biết mới).", "'Học thầy không tày học bạn'.", "'Uống nước nhớ nguồn'."], answer: 1 },
                { type: 'mcq', text: "Việc học tập, khám phá lịch sử suốt đời nhằm mục đích gì?", options: ["Để hiểu biết hiện tại, dự đoán và có niềm tin vào tương lai.", "Chỉ để vượt qua các kì thi trong trường học.", "Để trở thành nhà báo chuyên nghiệp.", "Để phục hồi lại chế độ phong kiến."], answer: 0 },
                { type: 'mcq', text: "Sử liệu là gì?", options: ["Là những công cụ lao động cổ đại.", "Chỉ là những cuốn sách lịch sử được in ấn hiện nay.", "Là những di tích lịch sử ngoài trời.", "Toàn bộ những hình thức khác nhau của tư liệu lịch sử, chứa đựng thông tin về quá khứ."], answer: 3 },
                { type: 'mcq', text: "Hai nhiệm vụ cơ bản của công tác chuẩn bị sử liệu là gì?", options: ["Dịch thuật và Xuất bản.", "Khảo cổ và Phục dựng.", "Sưu tầm, thu thập và Xử lí thông tin sử liệu.", "Đọc sách và Làm bài kiểm tra."], answer: 2 },
                { type: 'mcq', text: "Quá trình phân loại, đánh giá, thẩm định, so sánh nguồn sử liệu được gọi là gì?", options: ["Thu thập sử liệu.", "Xử lí thông tin sử liệu.", "Sưu tầm sử liệu.", "Bảo quản sử liệu."], answer: 1 },
                { type: 'mcq', text: "Ngoài học tập trên lớp, học sinh có thể tìm hiểu lịch sử hiệu quả qua hình thức nào?", options: ["Tránh tiếp xúc với sách báo cũ.", "Chỉ cần nghe kể chuyện ở nhà.", "Tham quan bảo tàng, di tích lịch sử - văn hoá.", "Học qua các môn tự nhiên."], answer: 2 },
                { type: 'mcq', text: "Khám phá lịch sử trong kỉ nguyên toàn cầu hoá có vai trò gì quan trọng?", options: ["Giúp hội nhập thành công, tôn trọng sự khác biệt đa dạng về văn hóa.", "Xóa bỏ hoàn toàn văn hóa truyền thống.", "Giúp cô lập đất nước để bảo vệ bản sắc.", "Ngăn cản sự phát triển của công nghệ."], answer: 0 },
                { type: 'mcq', text: "Việc tồn tại những khoảng trống, những bí ẩn trong nghiên cứu lịch sử có tác dụng gì?", options: ["Chứng minh rằng sử học không phải là khoa học.", "Thôi thúc con người tham gia tìm tòi, khám phá để hoàn chỉnh nhận thức.", "Làm cho lịch sử trở nên nhàm chán.", "Ngăn cản sự phát triển của tri thức."], answer: 1 },
                { type: 'mcq', text: "Sản phẩm cuối cùng của khoa học Lịch sử (Sử học) là gì?", options: ["Các đài tưởng niệm.", "Những cổ vật được tìm thấy.", "Những bộ phim dã sử.", "Nhận thức khoa học về hiện thực lịch sử."], answer: 3 },
                { type: 'mcq', text: "Trong cuộc sống hằng ngày, tri thức lịch sử giúp con người điều gì?", options: ["Vận dụng kinh nghiệm từ quá khứ vào hiện tại, định hướng tương lai.", "Dự đoán chính xác các sự kiện tự nhiên.", "Thay đổi được hiện thực lịch sử đã qua.", "Chữa khỏi các căn bệnh hiểm nghèo."], answer: 0 }
            ],
            tf: [
                { type: 'tf', text: "Về sự cần thiết của việc khám phá lịch sử suốt đời:", options: [
                    { text: "a) Hiện tại luôn kế thừa và được xây dựng trên nền tảng của quá khứ.", answer: true },
                    { text: "b) Học tập lịch sử chỉ cần thiết đối với học sinh phổ thông.", answer: false },
                    { text: "c) Khám phá lịch sử giúp chúng ta rút ra những kinh nghiệm và bài học có giá trị.", answer: true },
                    { text: "d) Việc tìm hiểu cội nguồn là một nhu cầu tự thân của con người từ thuở xa xưa.", answer: true }
                ]},
                { type: 'tf', text: "Về công tác xử lí thông tin sử liệu:", options: [
                    { text: "a) Xử lí thông tin sử liệu là quá trình phân loại, đánh giá và thẩm định sử liệu.", answer: true },
                    { text: "b) Công đoạn này nhằm xác định tính xác thực, độ tin cậy và giá trị của sử liệu.", answer: true },
                    { text: "c) Chỉ cần thu thập sử liệu là có thể lập tức đưa ra kết luận lịch sử chính xác.", answer: false },
                    { text: "d) So sánh nguồn sử liệu đã thu thập được là một phần của quá trình xử lí thông tin.", answer: true }
                ]},
                { type: 'tf', text: "Về kết nối lịch sử với cuộc sống:", options: [
                    { text: "a) Việc học tập lịch sử chỉ diễn ra duy nhất trong các giờ học trên lớp.", answer: false },
                    { text: "b) Mỗi ngôi nhà, con phố, đình, chùa đều có thể là những chứng nhân lịch sử.", answer: true },
                    { text: "c) Vận dụng bài học lịch sử giúp giải thích các vấn đề thời sự và tránh sai lầm trong quá khứ.", answer: true },
                    { text: "d) Tri thức lịch sử có thể là nguồn cảm hứng cho các ngành công nghiệp văn hóa, du lịch.", answer: true }
                ]},
                { type: 'tf', text: "Về các nguồn sử liệu:", options: [
                    { text: "a) Sử liệu chỉ bao gồm các văn bản ghi chép của nhà nước phong kiến.", answer: false },
                    { text: "b) Sử liệu là toàn bộ những hình thức khác nhau của tư liệu lịch sử chứa đựng thông tin quá khứ.", answer: true },
                    { text: "c) Các nguồn sử liệu sưu tầm càng đa dạng, đầy đủ thì quá trình phục dựng lịch sử càng khách quan.", answer: true },
                    { text: "d) Tờ báo cũ, tiền đồng, hoa văn trên mái ngói cũng được coi là sử liệu.", answer: true }
                ]},
                { type: 'tf', text: "Về lịch sử và quá trình hội nhập toàn cầu:", options: [
                    { text: "a) Hiểu biết lịch sử giúp chúng ta tôn trọng sự khác biệt và đa dạng văn hóa.", answer: true },
                    { text: "b) Hội nhập toàn cầu đòi hỏi phải xóa bỏ hoàn toàn bản sắc văn hóa dân tộc.", answer: false },
                    { text: "c) Lịch sử giúp chúng ta chủ động tiếp thu có chọn lọc thành tựu nhân loại.", answer: true },
                    { text: "d) Hiểu biết về văn hóa, lịch sử các nước giúp Việt Nam hội nhập thành công.", answer: true }
                ]},
                { type: 'tf', text: "Về bí ẩn trong nghiên cứu lịch sử:", options: [
                    { text: "a) Mọi sự kiện lịch sử trên thế giới đều đã được giải thích chính xác 100%.", answer: false },
                    { text: "b) Việc tồn tại các khoảng trống lịch sử là cơ hội thôi thúc con người khám phá.", answer: true },
                    { text: "c) Cách xây dựng Kim tự tháp Ai Cập là một ví dụ về bí ẩn lịch sử chưa được giải đáp hoàn toàn.", answer: true },
                    { text: "d) Những bí ẩn lịch sử làm giảm đi giá trị khoa học của bộ môn Lịch sử.", answer: false }
                ]},
                { type: 'tf', text: "Về nhiệm vụ của nhà sử học:", options: [
                    { text: "a) Nhà sử học phải dùng các phương pháp khoa học để tìm kiếm và xử lí tư liệu.", answer: true },
                    { text: "b) Có thể dùng trí tưởng tượng để lấp đầy những chỗ thiếu hụt của tư liệu.", answer: false },
                    { text: "c) Cần tái hiện sự kiện một cách khách quan, trung thực và toàn diện.", answer: true },
                    { text: "d) Phải xem xét sự kiện trong các mối liên hệ lịch đại và đồng đại.", answer: true }
                ]},
                { type: 'tf', text: "Về phương thức lưu truyền lịch sử:", options: [
                    { text: "a) Khắc họa trên vách đá là một trong những hình thức lưu giữ kinh nghiệm xa xưa.", answer: true },
                    { text: "b) Việc lập gia phả và thực hành nghi lễ cũng là cách truyền lại truyền thống cộng đồng.", answer: true },
                    { text: "c) Các tác phẩm sử thi không chứa đựng bất kỳ thông tin lịch sử nào.", answer: false },
                    { text: "d) Các ghi chép thư tịch và công trình nghiên cứu là những hình thức bảo tồn lịch sử tiến bộ.", answer: true }
                ]},
                { type: 'tf', text: "Đánh giá tầm quan trọng của tri thức lịch sử:", options: [
                    { text: "a) Chỉ những người làm nghề nghiên cứu mới cần đến tri thức lịch sử.", answer: false },
                    { text: "b) Tri thức lịch sử mang lại cơ hội nghề nghiệp mới trong nhiều lĩnh vực.", answer: true },
                    { text: "c) Tri thức lịch sử giúp cộng đồng định vị được bản sắc của mình trong thế giới hiện đại.", answer: true },
                    { text: "d) Thiếu tri thức lịch sử, con người sẽ không có nền tảng vững chắc để hướng tới tương lai.", answer: true }
                ]},
                { type: 'tf', text: "Về mối quan hệ giữa quá khứ, hiện tại và tương lai:", options: [
                    { text: "a) Ba yếu tố này hoàn toàn biệt lập, không tác động qua lại lẫn nhau.", answer: false },
                    { text: "b) Quá khứ là nền tảng để xây dựng hiện tại.", answer: true },
                    { text: "c) Hiểu biết quá khứ và hiện tại là cơ sở để có niềm tin và dự đoán tương lai.", answer: true },
                    { text: "d) Sự phát triển của xã hội loài người là một dòng chảy liên tục từ quá khứ đến tương lai.", answer: true }
                ]}
            ]
        }
    },
    3: {
        title: "Bài 3: Vai trò của Sử học",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Di sản văn hoá, di sản thiên nhiên được đánh giá là loại tài sản mang tính chất gì?", options: ["Thuộc sở hữu riêng của các nhà sử học.", "Chỉ có giá trị về mặt kinh tế ngắn hạn.", "Có thể dễ dàng thay thế bằng công nghệ mới.", "Là những tài sản vô giá và không thể thay thế của dân tộc và nhân loại."], answer: 3 },
                { type: 'mcq', text: "Vai trò quan trọng nhất của Sử học đối với công tác bảo tồn di sản văn hóa là gì?", options: ["Cung cấp nguồn tài chính để trùng tu di sản.", "Tổ chức các chuyến tham quan du lịch.", "Thay đổi nguyên trạng di sản để phù hợp với thời đại mới.", "Sử dụng phương pháp nghiên cứu để khẳng định giá trị của di sản, làm cơ sở bảo tồn."], answer: 3 },
                { type: 'mcq', text: "Yêu cầu cốt lõi trong công tác bảo tồn di sản văn hóa là gì?", options: ["Làm mới toàn bộ công trình để tăng tính thẩm mỹ.", "Đảm bảo tính nguyên trạng, giữ được 'yếu tố gốc cấu thành di tích'.", "Phá bỏ các phần cũ kĩ để xây dựng lại bằng bê tông.", "Chỉ bảo tồn các di sản phi vật thể."], answer: 1 },
                { type: 'mcq', text: "Công tác bảo tồn di sản văn hóa phi vật thể được thực hiện thông qua biện pháp nào?", options: ["Cấm người dân thực hành các di sản đó.", "Sưu tầm, lưu giữ, truyền dạy và trình diễn.", "Xây dựng các hàng rào bảo vệ vững chắc.", "Đúc thành các tượng đài bằng đồng."], answer: 1 },
                { type: 'mcq', text: "Đối với di sản thiên nhiên, công tác bảo tồn có vai trò gì?", options: ["San lấp để xây dựng khu công nghiệp.", "Chỉ để khai thác khoáng sản.", "Góp phần phát triển đa dạng sinh học, làm tăng giá trị khoa học của di sản.", "Ngăn cấm hoàn toàn sự tiếp cận của con người."], answer: 2 },
                { type: 'mcq', text: "Nguồn tài nguyên quý báu nhất của du lịch văn hóa là gì?", options: ["Các trung tâm thương mại sầm uất.", "Những giá trị về lịch sử và văn hóa của mỗi dân tộc.", "Các phương tiện giao thông tốc độ cao.", "Hệ thống nhà hàng, khách sạn hiện đại."], answer: 1 },
                { type: 'mcq', text: "Sự phát triển của du lịch có tác động như thế nào đối với công tác bảo tồn di tích lịch sử - văn hóa?", options: ["Thúc đẩy việc bảo vệ di sản, tạo ra nguồn doanh thu để tái đầu tư vào bảo tồn.", "Gây ra sự phá hủy hàng loạt các di sản phi vật thể.", "Không có tác động gì đến di tích lịch sử.", "Làm suy giảm hoàn toàn giá trị của di tích."], answer: 0 },
                { type: 'mcq', text: "Tài nguyên du lịch văn hóa bao gồm những gì?", options: ["Chỉ bao gồm các hang động.", "Chỉ bao gồm các bãi biển tự nhiên.", "Di tích lịch sử, khảo cổ, kiến trúc, lễ hội, văn nghệ dân gian.", "Các khu công nghiệp kĩ thuật cao."], answer: 2 },
                { type: 'mcq', text: "Mối quan hệ giữa phát triển du lịch và bảo tồn di sản là mối quan hệ như thế nào?", options: ["Tương tác hai chiều, hỗ trợ lẫn nhau.", "Đối lập hoàn toàn, không thể song hành.", "Hoàn toàn độc lập, không ảnh hưởng nhau.", "Chỉ có du lịch tác động đến di sản, chiều ngược lại không có."], answer: 0 },
                { type: 'mcq', text: "Việc ứng dụng phương pháp nghiên cứu của Sử học (có tính liên ngành) vào di sản nhằm mục đích chính là gì?", options: ["Khẳng định giá trị nhiều mặt (lịch sử, văn hóa, kiến trúc) của di sản đó.", "Tranh giành quyền sở hữu di sản.", "Xóa bỏ các ghi chép cũ.", "Tìm kiếm kho báu ẩn giấu."], answer: 0 }
            ],
            tf: [
                { type: 'tf', text: "Về giá trị của di sản văn hóa, di sản thiên nhiên:", options: [
                    { text: "a) Sự biến mất của bất kì di sản nào cũng làm nghèo đi kho tàng di sản của thế giới.", answer: true },
                    { text: "b) Di sản chỉ mang lại giá trị kiến trúc mà không có giá trị lịch sử.", answer: false },
                    { text: "c) Giá trị của di sản thể hiện ở nhiều khía cạnh: lịch sử, văn hóa, cảnh quan thiên nhiên.", answer: true },
                    { text: "d) Di sản là tài sản vô giá và không thể thay thế.", answer: true }
                ]},
                { type: 'tf', text: "Về công tác bảo tồn di sản vật thể:", options: [
                    { text: "a) Sử học cung cấp cơ sở khoa học vững chắc để bảo tồn di sản.", answer: true },
                    { text: "b) Yêu cầu cốt lõi là phải đảm bảo 'tính xác thực' và 'tính toàn vẹn' của di tích.", answer: true },
                    { text: "c) Cần đập bỏ toàn bộ các di tích bằng gỗ đã cũ để xây lại bằng vật liệu mới bền hơn.", answer: false },
                    { text: "d) Công tác bảo tồn giúp hạn chế tác động tiêu cực của tự nhiên và con người lên di sản.", answer: true }
                ]},
                { type: 'tf', text: "Về bảo tồn di sản phi vật thể:", options: [
                    { text: "a) Di sản phi vật thể không phải đối mặt với bất cứ nguy cơ mai một nào.", answer: false },
                    { text: "b) Các biện pháp bảo tồn bao gồm sưu tầm, lưu giữ, truyền dạy và trình diễn.", answer: true },
                    { text: "c) Thông qua việc truyền dạy, di sản được lưu truyền từ thế hệ này sang thế hệ khác.", answer: true },
                    { text: "d) Hát Xoan (Phú Thọ) là một ví dụ về di sản phi vật thể cần được bảo tồn và truyền dạy.", answer: true }
                ]},
                { type: 'tf', text: "Về vai trò của lịch sử đối với du lịch:", options: [
                    { text: "a) Các khía cạnh văn hóa, lịch sử chiếm tỉ trọng lớn trong giá trị du lịch của nhiều khu vực.", answer: true },
                    { text: "b) Di sản lịch sử độc đáo là nhân tố chính thu hút khách du lịch.", answer: true },
                    { text: "c) Lịch sử và văn hóa không mang lại lợi ích kinh tế cho ngành du lịch.", answer: false },
                    { text: "d) Hoàng thành Thăng Long là một ví dụ về di tích lịch sử thu hút lượng lớn khách tham quan.", answer: true }
                ]},
                { type: 'tf', text: "Về tác động của du lịch đối với di sản:", options: [
                    { text: "a) Nhu cầu tham quan của du khách thôi thúc chính quyền quan tâm hơn đến việc giữ gìn di tích.", answer: true },
                    { text: "b) Một phần doanh thu từ du lịch được tái đầu tư vào việc bảo tồn, tôn tạo di tích.", answer: true },
                    { text: "c) Phát triển du lịch văn hóa luôn làm phá hủy hoàn toàn cảnh quan tự nhiên của di sản.", answer: false },
                    { text: "d) Du lịch thúc đẩy việc phục dựng và trình diễn các di sản văn hóa phi vật thể.", answer: true }
                ]},
                { type: 'tf', text: "Về tính nguyên trạng trong bảo tồn:", options: [
                    { text: "a) Bảo tồn tính nguyên trạng nghĩa là giữ gìn tối đa các yếu tố gốc cấu thành di tích.", answer: true },
                    { text: "b) Được phép tùy tiện thay đổi kiểu dáng kiến trúc di tích để phù hợp với thị hiếu du khách.", answer: false },
                    { text: "c) Kết quả nghiên cứu Sử học giúp xác định chính xác đâu là yếu tố gốc cần giữ lại.", answer: true },
                    { text: "d) Đảm bảo tính nguyên trạng giúp di sản phát huy giá trị một cách bền vững.", answer: true }
                ]},
                { type: 'tf', text: "Về tài nguyên du lịch văn hóa:", options: [
                    { text: "a) Bao gồm di tích lịch sử, kiến trúc, công trình sáng tạo của con người.", answer: true },
                    { text: "b) Chỉ có các giá trị vật chất mới được coi là tài nguyên du lịch.", answer: false },
                    { text: "c) Lễ hội và văn nghệ dân gian cũng là nguồn tài nguyên du lịch quan trọng.", answer: true },
                    { text: "d) Tại châu Âu, bảo tàng và các thành phố lịch sử là điểm đến du lịch chính.", answer: true }
                ]},
                { type: 'tf', text: "Về phát triển bền vững di sản:", options: [
                    { text: "a) Bảo tồn di sản chỉ nhằm mục đích phục vụ nghiên cứu khoa học, không quan tâm lợi ích kinh tế.", answer: false },
                    { text: "b) Phát huy giá trị di sản góp phần phát triển kinh tế - xã hội địa phương.", answer: true },
                    { text: "c) Cần giải quyết hài hòa mối quan hệ giữa bảo tồn di sản và phát triển du lịch.", answer: true },
                    { text: "d) Chăm lo bảo tồn di sản là chăm lo nguồn lực cốt lõi cho sự phát triển của ngành du lịch.", answer: true }
                ]},
                { type: 'tf', text: "Đánh giá vai trò của Sử học có tính liên ngành:", options: [
                    { text: "a) Sử học phối hợp với các ngành khác (khảo cổ, kiến trúc) để đánh giá toàn diện di sản.", answer: true },
                    { text: "b) Sử học hoạt động hoàn toàn độc lập, từ chối mọi phương pháp của khoa học tự nhiên.", answer: false },
                    { text: "c) Tính liên ngành giúp khẳng định chính xác giá trị nổi bật của di sản.", answer: true },
                    { text: "d) Phương pháp nghiên cứu lịch sử đóng vai trò quan trọng nhất trong việc thẩm định di sản.", answer: true }
                ]},
                { type: 'tf', text: "Về di sản thiên nhiên:", options: [
                    { text: "a) Công tác bảo tồn di sản thiên nhiên giúp phát triển đa dạng sinh học.", answer: true },
                    { text: "b) Hang Sơn Đoòng (Quảng Bình) là một trong những di sản thiên nhiên nổi bật.", answer: true },
                    { text: "c) Bảo tồn di sản thiên nhiên không mang lại bất cứ giá trị khoa học nào.", answer: false },
                    { text: "d) Việc khai thác kiệt quệ tài nguyên là cách tốt nhất để phát huy giá trị di sản thiên nhiên.", answer: false }
                ]}
            ]
        }
    },
    4: {
        title: "Bài 4: Khái niệm văn minh. Một số nền văn minh phương Đông thời cổ - trung đại",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Văn minh được định nghĩa là gì?", options: ["Là khái niệm chỉ dùng để chỉ sự giàu có về kinh tế.", "Là sự tiến bộ về vật chất và tinh thần, là trạng thái phát triển cao của nền văn hóa, vượt qua thời kì dã man.", "Là những giá trị văn hóa được giữ nguyên từ thời nguyên thủy.", "Là quá trình tiến hóa từ vượn thành người."], answer: 1 },
                { type: 'mcq', text: "Một trong những tiêu chuẩn cơ bản để nhận diện văn minh là sự xuất hiện của yếu tố nào?", options: ["Nhà nước, đô thị và chữ viết.", "Công cụ bằng đá.", "Lửa.", "Săn bắt, hái lượm."], answer: 0 },
                { type: 'mcq', text: "Điểm khác biệt cơ bản giữa văn hóa và văn minh là gì?", options: ["Văn hóa ra đời sau văn minh.", "Văn minh tạo ra bản sắc của một dân tộc, còn văn hóa thì không.", "Văn hóa xuất hiện đồng thời với loài người, còn văn minh chỉ sáng tạo trong thời kì phát triển cao của xã hội.", "Văn hóa chỉ có yếu tố vật chất, văn minh chỉ có yếu tố tinh thần."], answer: 2 },
                { type: 'mcq', text: "Văn minh Ai Cập cổ đại hình thành và phát triển gắn liền với dòng sông nào?", options: ["Sông Ti-grơ.", "Sông Hằng.", "Sông Hoàng Hà.", "Sông Nin."], answer: 3 },
                { type: 'mcq', text: "Người Ai Cập cổ đại đã sáng tạo ra loại chữ viết nào từ khoảng hơn 3000 năm TCN?", options: ["Chữ Phạn.", "Chữ tượng hình.", "Chữ giáp cốt.", "Chữ Quốc ngữ."], answer: 1 },
                { type: 'mcq', text: "Trong Toán học, người Ai Cập cổ đại đã biết tính giá trị số pi (π) bằng bao nhiêu?", options: ["3,16", "3,14", "3,14159", "3,1416"], answer: 0 },
                { type: 'mcq', text: "Đóng góp quan trọng nhất của Toán học Ấn Độ cổ đại cho kho tàng tri thức nhân loại là gì?", options: ["Sáng tạo ra 10 chữ số mà ngày nay chúng ta đang sử dụng.", "Phát minh ra máy tính cơ học.", "Phát minh ra phép tính vi phân.", "Tính diện tích hình tròn."], answer: 0 },
                { type: 'mcq', text: "Tác phẩm sử học nào là bộ biên niên sử đầu tiên của Trung Hoa?", options: ["Tư trị thông giám.", "Tam quốc chí.", "Sử kí (Tư Mã Thiên).", "Xuân Thu."], answer: 3 },
                { type: 'mcq', text: "Bốn phát minh lớn về kĩ thuật của văn minh Trung Hoa bao gồm:", options: ["Động cơ đốt trong, thuốc súng, kĩ thuật in, làm giấy.", "Kĩ thuật làm giấy, kĩ thuật in, thuốc súng, la bàn.", "Bàn tính, thuốc súng, la bàn, kĩ thuật in.", "Kĩ thuật luyện thép, kĩ thuật làm giấy, máy hơi nước, la bàn."], answer: 1 },
                { type: 'mcq', text: "Hai bộ sử thi nổi tiếng nhất đặt nền móng cho văn học Ấn Độ là gì?", options: ["Thần khúc và Mười ngày.", "Tây du kí và Hồng lâu mộng.", "Ma-ha-bha-ra-ta và Ra-ma-y-a-na.", "I-li-át và Ô-đi-xê."], answer: 2 }
            ],
            tf: [
                { type: 'tf', text: "Về khái niệm Văn hóa và Văn minh:", options: [
                    { text: "a) Văn hóa là tổng thể những giá trị vật chất và tinh thần mà con người sáng tạo nên.", answer: true },
                    { text: "b) Văn minh và Văn hóa là hai khái niệm hoàn toàn đồng nhất, có thể dùng thay thế nhau trong mọi trường hợp.", answer: false },
                    { text: "c) Văn hóa tạo ra đặc tính, bản sắc của một xã hội hoặc nhóm người.", answer: true },
                    { text: "d) Sự xuất hiện của nhà nước và chữ viết là tiêu chuẩn để nhận diện văn minh.", answer: true }
                ]},
                { type: 'tf', text: "Về văn minh Ai Cập cổ đại:", options: [
                    { text: "a) Người Ai Cập sử dụng hệ số thập phân và tính được diện tích tam giác, chữ nhật.", answer: true },
                    { text: "b) Kĩ thuật ướp xác của Ai Cập cổ đại phản ánh những hiểu biết sâu sắc về giải phẫu y học.", answer: true },
                    { text: "c) Người Ai Cập không có hiểu biết gì về Thiên văn học.", answer: false },
                    { text: "d) Chữ viết của người Ai Cập cổ đại đã được giải mã thành công nhờ tấm bia đá Rô-sét-ta.", answer: true }
                ]},
                { type: 'tf', text: "Về kiến trúc Ai Cập cổ đại:", options: [
                    { text: "a) Cung điện, đền thờ và kim tự tháp là các loại hình kiến trúc tiêu biểu nhất.", answer: true },
                    { text: "b) Quần thể kim tự tháp và tượng Nhân sư ở Ghi-da là công trình điêu khắc, kiến trúc nổi tiếng nhất.", answer: true },
                    { text: "c) Các công trình kiến trúc Ai Cập chủ yếu được xây dựng bằng gỗ và lá cọ.", answer: false },
                    { text: "d) Nắp quan tài bằng vàng của pha-ra-ông Tu-tan-kha-mun là một kiệt tác điêu khắc.", answer: true }
                ]},
                { type: 'tf', text: "Về tôn giáo, tư tưởng Ấn Độ:", options: [
                    { text: "a) Ấn Độ là quê hương của hai tôn giáo có ảnh hưởng sâu rộng là Hin-đu giáo và Phật giáo.", answer: true },
                    { text: "b) Phật giáo hình thành từ giữa thiên niên kỉ I TCN và phát triển hưng thịnh ở Ấn Độ cho đến nay.", answer: false },
                    { text: "c) Hin-đu giáo hình thành trên cơ sở của Bà La Môn giáo.", answer: true },
                    { text: "d) Tôn giáo Ấn Độ đã lan tỏa ra bên ngoài và để lại nhiều dấu ấn trong lịch sử nhân loại.", answer: true }
                ]},
                { type: 'tf', text: "Về văn học và nghệ thuật Ấn Độ:", options: [
                    { text: "a) Kinh Vê-đa là một trong những thành tựu văn học rực rỡ của Ấn Độ.", answer: true },
                    { text: "b) Nghệ thuật kiến trúc, điêu khắc Ấn Độ hoàn toàn không chịu ảnh hưởng của tôn giáo.", answer: false },
                    { text: "c) Các công trình tiêu biểu bao gồm chùa, tháp Phật giáo, đền thờ Hin-đu giáo và lăng mộ Hồi giáo.", answer: true },
                    { text: "d) Lăng Ta-giơ Ma-han là một công trình kiến trúc vĩ đại của Ấn Độ.", answer: true }
                ]},
                { type: 'tf', text: "Về khoa học Ấn Độ cổ - trung đại:", options: [
                    { text: "a) Người Ấn Độ đã tính được giá trị của số pi (π) là 3,1416.", answer: true },
                    { text: "b) Người Ấn Độ chưa có bất cứ hiểu biết nào về Vũ trụ và Mặt Trời.", answer: false },
                    { text: "c) Về Vật lý, người Ấn Độ đã nêu ra thuyết nguyên tử và lực hấp dẫn của Trái Đất.", answer: true },
                    { text: "d) Y học Ấn Độ biết dùng phẫu thuật để chắp xương sọ, lấy sỏi thận.", answer: true }
                ]},
                { type: 'tf', text: "Về tư tưởng, tôn giáo Trung Hoa:", options: [
                    { text: "a) Nho giáo, Đạo giáo, Pháp gia là những hệ tư tưởng nền tảng của người Trung Hoa.", answer: true },
                    { text: "b) Phật giáo có nguồn gốc từ Trung Hoa và lan tỏa sang Ấn Độ.", answer: false },
                    { text: "c) Các học thuyết tư tưởng Trung Hoa hình thành từ rất sớm để giải thích thế giới và đề xướng biện pháp cai trị.", answer: true },
                    { text: "d) Tư tưởng Trung Hoa có ảnh hưởng sâu sắc đến Việt Nam, Nhật Bản, Triều Tiên.", answer: true }
                ]},
                { type: 'tf', text: "Về chữ viết và văn học Trung Hoa:", options: [
                    { text: "a) Chữ giáp cốt và kim văn là những loại hình chữ viết cổ nhất xuất hiện từ thời nhà Thương.", answer: true },
                    { text: "b) Chữ viết Trung Hoa đã được nâng tầm lên thành nghệ thuật thư pháp.", answer: true },
                    { text: "c) Thơ ca thời Đường và tiểu thuyết chương hồi thời Minh - Thanh là những thành tựu văn học tiêu biểu.", answer: true },
                    { text: "d) Tác phẩm Tam quốc diễn nghĩa, Tây du kí thuộc thể loại sử thi truyền miệng.", answer: false }
                ]},
                { type: 'tf', text: "Về kiến trúc và khoa học Trung Hoa:", options: [
                    { text: "a) Vạn Lý Trường Thành, Tử Cấm Thành là những công trình kiến trúc nổi tiếng nhất của Trung Hoa.", answer: true },
                    { text: "b) Trong Toán học, người Trung Hoa lần đầu tiên tính được số pi chính xác tới 7 chữ số thập phân.", answer: true },
                    { text: "c) Hoa Đà và Trương Trọng Cảnh là những vị tướng quân nổi tiếng thời phong kiến.", answer: false },
                    { text: "d) Bốn phát minh lớn (giấy, in, thuốc súng, la bàn) của Trung Quốc có ảnh hưởng rộng lớn đến châu Âu.", answer: true }
                ]},
                { type: 'tf', text: "Đánh giá chung về các nền văn minh phương Đông:", options: [
                    { text: "a) Đây là những nền văn minh đầu tiên trên thế giới, hình thành ở các lưu vực sông lớn.", answer: true },
                    { text: "b) Các nền văn minh phương Đông hoàn toàn biệt lập, không có sự giao lưu ảnh hưởng lẫn nhau.", answer: false },
                    { text: "c) Văn minh Trung Hoa được mô tả là nền văn minh tồn tại liên tục lâu đời nhất trên thế giới.", answer: true },
                    { text: "d) Những thành tựu rực rỡ của phương Đông đã đặt nền móng vững chắc cho văn minh nhân loại.", answer: true }
                ]}
            ]
        }
    },
    5: {
        title: "Bài 5: Một số nền văn minh phương Tây thời cổ - trung đại",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Văn minh Hy Lạp - La Mã thời cổ đại hình thành ở khu vực nào?", options: ["Lưu vực các con sông lớn ở châu Á.", "Bán đảo Nam Âu ven bờ Địa Trung Hải.", "Các hòn đảo ở Thái Bình Dương.", "Khu vực Bắc Âu lạnh giá."], answer: 1 },
                { type: 'mcq', text: "Loại chữ viết nào do người La Mã xây dựng (dựa trên chữ Hy Lạp) và trở nên phổ biến nhất thế giới hiện nay?", options: ["Chữ tượng hình.", "Chữ hình nêm.", "Chữ La-tinh.", "Chữ Kirin (Cyrillic)."], answer: 2 },
                { type: 'mcq', text: "Hai bộ sử thi nổi tiếng đặt nền móng cho văn học Hy Lạp - La Mã cổ đại là gì?", options: ["I-li-át và Ô-đi-xê.", "Thần khúc và Cuộc đời mới.", "Ma-ha-bha-ra-ta và Ra-ma-y-a-na.", "Tam quốc diễn nghĩa và Thủy hử."], answer: 0 },
                { type: 'mcq', text: "Công trình kiến trúc nào sau đây là biểu tượng tiêu biểu của văn minh La Mã cổ đại?", options: ["Đền Pác-tê-nông.", "Đấu trường Cô-li-dê (Colosseum).", "Lăng Ta-giơ Ma-han.", "Kim tự tháp."], answer: 1 },
                { type: 'mcq', text: "Ai được coi là 'cha đẻ của nền Y học phương Tây'?", options: ["Hi-pô-crát (Hippocrates).", "O-cơ-lít (Euclid).", "Ác-si-mét (Archimedes).", "Pi-ta-go (Pythagoras)."], answer: 0 },
                { type: 'mcq', text: "Đại hội thể thao Ô-lim-píc thời cổ đại được tổ chức lần đầu tiên vào năm 776 TCN tại đâu?", options: ["Thành Xpác.", "Thành A-ten.", "Thành Rô-ma (La Mã).", "Đền thờ thần Dớt ở Ô-lim-pi-a (Hy Lạp)."], answer: 3 },
                { type: 'mcq', text: "Phong trào Văn hóa Phục hưng (thế kỉ XIV - XVII) bắt nguồn từ đâu?", options: ["I-ta-li-a.", "Tây Ban Nha.", "Nước Pháp.", "Nước Anh."], answer: 0 },
                { type: 'mcq', text: "Tác giả của kiệt tác hội họa 'Nàng Mô-na Li-sa' và 'Bữa tiệc cuối cùng' là ai?", options: ["Ra-pha-en (Raphael).", "Mi-ken-lăng-giơ (Michelangelo).", "Lê-ô-na đờ Vanh-xi (Leonardo da Vinci).", "Uy-li-am Sếch-xpia (William Shakespeare)."], answer: 2 },
                { type: 'mcq', text: "Nhà khoa học nào thời Phục hưng đã đưa ra thuyết 'Nhật tâm' khẳng định Mặt Trời là trung tâm của vũ trụ?", options: ["Đê-các-tơ.", "Ni-cô-lai Cô-péc-ních.", "Ga-li-lê-ô Ga-li-lê.", "Gioóc-đa-nô Bru-nô."], answer: 1 },
                { type: 'mcq', text: "Mục tiêu đấu tranh cốt lõi của phong trào Văn hóa Phục hưng là gì?", options: ["Khôi phục lại chế độ nô lệ thời cổ đại.", "Lan truyền Phật giáo vào châu Âu.", "Chống lại sự xâm lược của các đế quốc phương Đông.", "Đấu tranh công khai chống lại chế độ phong kiến lỗi thời và Giáo hội Cơ Đốc giáo, đề cao giá trị con người."], answer: 3 }
            ],
            tf: [
                { type: 'tf', text: "Về chữ viết và văn học Hy Lạp - La Mã cổ đại:", options: [
                    { text: "a) Bảng chữ cái La-tinh có nguồn gốc từ chữ viết của người Hy Lạp.", answer: true },
                    { text: "b) Người La Mã đã sáng tạo ra hệ thống chữ số I, II, III, IV, X, C, M... vẫn dùng đến ngày nay.", answer: true },
                    { text: "c) Văn học Hy Lạp - La Mã hoàn toàn vắng bóng các tác phẩm kịch và thơ.", answer: false },
                    { text: "d) Nguồn cảm hứng phong phú của văn học Hy Lạp - La Mã cổ đại bắt nguồn từ thần thoại.", answer: true }
                ]},
                { type: 'tf', text: "Về nghệ thuật kiến trúc, điêu khắc Hy Lạp - La Mã cổ đại:", options: [
                    { text: "a) Đền Pác-tê-nông là công trình kiến trúc tiêu biểu của nền văn minh La Mã.", answer: false },
                    { text: "b) Tượng thần Vệ nữ thành Mi-lô và Lực sĩ ném đĩa là những kiệt tác điêu khắc xuất sắc.", answer: true },
                    { text: "c) Nghệ thuật của Hy Lạp - La Mã cổ đại có ảnh hưởng sâu sắc tới nghệ thuật phương Tây sau này.", answer: true },
                    { text: "d) Khải hoàn môn Công-xtăng-ti-nút là một công trình tiêu biểu của La Mã.", answer: true }
                ]},
                { type: 'tf', text: "Về khoa học, kĩ thuật Hy Lạp - La Mã cổ đại:", options: [
                    { text: "a) Người Hy Lạp đã nhận ra Trái Đất hình cầu và biết tính lịch theo chu kì Mặt Trời.", answer: true },
                    { text: "b) Lịch của người La Mã tính được 1 năm có 365 ngày và 1/4 ngày, rất gần với dương lịch ngày nay.", answer: true },
                    { text: "c) Các nhà khoa học Ta-lét, Pi-ta-go, Ác-si-mét là người La Mã.", answer: false },
                    { text: "d) Người Hy Lạp - La Mã đã biết ứng dụng đòn bẩy, máy bơm nước và chế tạo bê tông.", answer: true }
                ]},
                { type: 'tf', text: "Về tư tưởng, tôn giáo thời cổ đại:", options: [
                    { text: "a) Hy Lạp - La Mã là quê hương của triết học phương Tây với cuộc đấu tranh giữa duy vật và duy tâm.", answer: true },
                    { text: "b) Các vị thần của Hy Lạp - La Mã được mô tả có hình dáng, tính cách hoàn toàn khác biệt với con người.", answer: false },
                    { text: "c) Cơ Đốc giáo (Ki-tô giáo) ra đời vào thế kỉ I tại lãnh thổ đế quốc La Mã.", answer: true },
                    { text: "d) Cơ Đốc giáo ngay từ khi ra đời đã được chính quyền La Mã ủng hộ và phong làm quốc giáo.", answer: false }
                ]},
                { type: 'tf', text: "Về thể thao thời cổ đại:", options: [
                    { text: "a) Thể thao có vai trò rất mờ nhạt trong đời sống văn hóa Hy Lạp - La Mã.", answer: false },
                    { text: "b) Đại hội Ô-lim-píc cổ đại có 5 môn thi đấu: chạy, nhảy xa, phóng lao, ném đĩa, đấu vật.", answer: true },
                    { text: "c) Phần thưởng cao quý nhất cho người chiến thắng Ô-lim-píc là vòng nguyệt quế kết từ lá ô-liu.", answer: true },
                    { text: "d) Ở La Mã, các đấu trường thường tổ chức các cuộc đấu đẫm máu giữa võ sĩ và dã thú.", answer: true }
                ]},
                { type: 'tf', text: "Về bối cảnh và văn học thời Phục hưng:", options: [
                    { text: "a) Phong trào nhằm phục hưng những giá trị văn minh Hy Lạp - La Mã cổ đại.", answer: true },
                    { text: "b) Tác phẩm 'Đôn Ki-hô-tê' là tiểu thuyết nổi tiếng của nhà văn Tây Ban Nha Xéc-van-tét.", answer: true },
                    { text: "c) Uy-li-am Sếch-xpia (Anh) là tác giả kiệt xuất trong thể loại kịch (Hăm-lét, Rô-mê-ô và Giu-li-ét).", answer: true },
                    { text: "d) Văn học thời Phục hưng chỉ phát triển duy nhất thể loại thơ ca.", answer: false }
                ]},
                { type: 'tf', text: "Về hội họa, điêu khắc và kiến trúc thời Phục hưng:", options: [
                    { text: "a) Nghệ thuật Phục hưng đạt đỉnh cao vào thế kỉ XV - XVI với sự đóng góp của các danh họa I-ta-li-a.", answer: true },
                    { text: "b) Bức 'Trường học A-ten' là kiệt tác của danh họa Mi-ken-lăng-giơ.", answer: false },
                    { text: "c) Phong cách kiến trúc Phục hưng chú trọng yếu tố hình học, tính đối xứng và tỉ lệ.", answer: true },
                    { text: "d) Vương cung Thánh đường Thánh Phê-rô là một công trình kiến trúc tiêu biểu thời kì này.", answer: true }
                ]},
                { type: 'tf', text: "Về khoa học, kĩ thuật thời Phục hưng:", options: [
                    { text: "a) Thành tựu khoa học có ý nghĩa quan trọng trong việc đẩy lùi sự chi phối của Thần học.", answer: true },
                    { text: "b) Ga-li-lê-ô Ga-li-lê đã chế tạo ra kính thiên văn để quan sát bầu trời.", answer: true },
                    { text: "c) Thời kì này Tây Âu chưa biết sử dụng sức nước vào trong sản xuất.", answer: false },
                    { text: "d) Khoa học kĩ thuật đã tạo tiền đề cho sự phát triển của triết học duy vật.", answer: true }
                ]},
                { type: 'tf', text: "Về tư tưởng và ý nghĩa của phong trào Văn hóa Phục hưng:", options: [
                    { text: "a) Lên án gay gắt Giáo hội Cơ Đốc giáo lũng đoạn và chế độ phong kiến thối nát.", answer: true },
                    { text: "b) Phong trào đề cao quyền lực tuyệt đối của nhà vua và giáo hoàng.", answer: false },
                    { text: "c) Đề cao giá trị con người, quyền tự do cá nhân và tinh thần dân tộc.", answer: true },
                    { text: "d) Là cuộc đấu tranh công khai đầu tiên trên lĩnh vực văn hóa, tư tưởng của giai cấp tư sản.", answer: true }
                ]},
                { type: 'tf', text: "Đánh giá chung về văn minh phương Tây cổ - trung đại:", options: [
                    { text: "a) Nền văn minh Hy Lạp - La Mã là cơ sở hình thành nên châu Âu hiện đại.", answer: true },
                    { text: "b) Phương Tây thời cổ đại hoàn toàn không có sự tiếp thu tri thức nào từ phương Đông.", answer: false },
                    { text: "c) Văn hóa Phục hưng mở đường cho văn minh Tây Âu phát triển mạnh mẽ trong các thế kỉ tiếp theo.", answer: true },
                    { text: "d) Những thành tựu phương Tây đã góp phần làm phong phú kho tàng di sản nhân loại.", answer: true }
                ]}
            ]
        }
    },
    6: {
        title: "Bài 6: Các cuộc cách mạng công nghiệp thời cận đại",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Cách mạng công nghiệp lần thứ nhất bắt đầu diễn ra ở quốc gia nào?", options: ["Đức.", "Pháp.", "Anh.", "Mỹ."], answer: 2 },
                { type: 'mcq', text: "Thực chất của cuộc Cách mạng công nghiệp lần thứ nhất là gì?", options: ["Sự nhảy vọt từ lao động thủ công sang lao động bằng máy móc.", "Sự ra đời của động cơ đốt trong.", "Cuộc đấu tranh giành quyền lợi của công nhân.", "Cuộc cải cách ruộng đất quy mô lớn."], answer: 0 },
                { type: 'mcq', text: "Máy kéo sợi Gien-ni (1764) do ai phát minh?", options: ["Ri-chác Ác-rai (Richard Arkwright).", "Giêm Oát (James Watt).", "Giêm Ha-gri-vơ (James Hargreaves).", "Ét-mơn Các-rai (Edmund Cartwright)."], answer: 2 },
                { type: 'mcq', text: "Phát minh nào được coi là quan trọng nhất, tạo ra nguồn động lực mới, khởi đầu quá trình công nghiệp hóa ở Anh?", options: ["Máy dệt chạy bằng hơi nước.", "Máy hơi nước của Giêm Oát.", "Đầu máy xe lửa.", "Máy kéo sợi chạy bằng sức nước."], answer: 1 },
                { type: 'mcq', text: "Cách mạng công nghiệp lần thứ hai (nửa sau thế kỉ XIX - 1914) gắn liền với sự phát triển và ứng dụng của nguồn năng lượng nào?", options: ["Hơi nước và than đá.", "Năng lượng nguyên tử.", "Sức gió và sức nước.", "Điện và động cơ đốt trong."], answer: 3 },
                { type: 'mcq', text: "Ai là người đã hoàn thiện phát minh ra bóng đèn sợi đốt (1879), giúp thắp sáng nhà ở và nhà xưởng?", options: ["Tô-mát Ê-đi-xơn.", "Mai-cơn Pha-ra-đây.", "Ni-cô-la Tết-la.", "A-lếch-xan-đơ Gra-ham Beo."], answer: 0 },
                { type: 'mcq', text: "Người được mệnh danh là 'ông vua xe hơi' nước Mỹ với dòng xe Mô-đen T sản xuất hàng loạt là ai?", options: ["Anh em nhà Rai (Wright).", "Các Ben (Karl Benz).", "G. Lơ-noa.", "Hen-ri Pho (Henry Ford)."], answer: 3 },
                { type: 'mcq', text: "Phát minh ra máy bay chạy bằng động cơ xăng (1903) gắn liền với tên tuổi của ai?", options: ["Giôn Ba-bo.", "Anh em nhà Rai.", "Gu-li-ê-li-nô Mác-cô-ni.", "Tô-mát Ê-đi-xơn."], answer: 1 },
                { type: 'mcq', text: "Về mặt xã hội, các cuộc cách mạng công nghiệp thời cận đại đã đưa đến sự hình thành của hai giai cấp đối kháng nào?", options: ["Tư sản công nghiệp và vô sản.", "Lãnh chúa và nông nô.", "Chủ nô và nô lệ.", "Quý tộc và nông dân tự do."], answer: 0 },
                { type: 'mcq', text: "Thành tựu nào của cách mạng công nghiệp lần thứ nhất giúp giao thông vận tải phát triển đột phá?", options: ["Khinh khí cầu.", "Đầu máy xe lửa chạy bằng hơi nước.", "Tàu thủy chạy bằng động cơ đốt trong.", "Xe hơi bốn bánh."], answer: 1 }
            ],
            tf: [
                { type: 'tf', text: "Về Cách mạng công nghiệp lần thứ nhất:", options: [
                    { text: "a) Diễn ra vào khoảng nửa sau thế kỉ XVIII, bắt đầu tại Anh.", answer: true },
                    { text: "b) Đột phá kỹ thuật xuất hiện đầu tiên trong ngành giao thông vận tải.", answer: false },
                    { text: "c) Sự xuất hiện của máy kéo sợi Gien-ni đã làm tăng năng suất lao động lên gấp nhiều lần.", answer: true },
                    { text: "d) Lan rộng từ Anh sang các quốc gia khác ở châu Âu và Bắc Mỹ.", answer: true }
                ]},
                { type: 'tf', text: "Về các phát minh động lực và giao thông:", options: [
                    { text: "a) Giêm Oát chế tạo thành công máy hơi nước, giảm sức lao động chân tay.", answer: true },
                    { text: "b) Máy hơi nước ra đời khiến quá trình công nghiệp hóa ở Anh bị chững lại.", answer: false },
                    { text: "c) Rô-bớt Phơn-tơn (Mỹ) ứng dụng động cơ hơi nước chế tạo tàu thủy chở khách đầu tiên.", answer: true },
                    { text: "d) Phương pháp luyện kim 'pút-đinh' giúp sản xuất sắt số lượng lớn.", answer: true }
                ]},
                { type: 'tf', text: "Về Cách mạng công nghiệp lần thứ hai:", options: [
                    { text: "a) Bắt đầu từ nửa sau thế kỉ XIX đến khi CTTG thứ nhất bùng nổ (1914).", answer: true },
                    { text: "b) Gắn liền với sự xuất hiện của nguyên liệu mới như thép chất lượng cao (phương pháp Bê-sê-mơ).", answer: true },
                    { text: "c) Nguồn năng lượng chủ yếu được sử dụng trong giai đoạn này vẫn là sức nước tự nhiên.", answer: false },
                    { text: "d) Các phát minh về điện là cơ sở cho sự ra đời của động cơ điện, điện thoại, vô tuyến điện.", answer: true }
                ]},
                { type: 'tf', text: "Về sự ra đời của ô tô và máy bay:", options: [
                    { text: "a) Động cơ đốt trong ra đời tạo tiền đề cho sự phát triển của ô tô và máy bay.", answer: true },
                    { text: "b) Chiếc xe hơi đầu tiên trên thực tế do Hen-ri Pho tạo ra.", answer: false },
                    { text: "c) Công ty Pho Mô-tô đã áp dụng dây chuyền lắp ráp hàng loạt để sản xuất xe hơi.", answer: true },
                    { text: "d) Anh em nhà Rai đã thử nghiệm thành công máy bay chạy bằng động cơ xăng.", answer: true }
                ]},
                { type: 'tf', text: "Về tác động kinh tế của CMCN thời cận đại:", options: [
                    { text: "a) Làm thay đổi cách thức tổ chức sản xuất, nâng cao năng suất lao động.", answer: true },
                    { text: "b) Chuyển nền kinh tế từ chủ yếu dựa vào công nghiệp sang nông nghiệp tự cấp tự túc.", answer: false },
                    { text: "c) Cuối thế kỉ XIX - đầu thế kỉ XX, Mỹ và Đức vươn lên dẫn đầu thế giới về sản xuất công nghiệp.", answer: true },
                    { text: "d) Thúc đẩy sự phát triển mạnh mẽ của giao thông vận tải và thông tin liên lạc.", answer: true }
                ]},
                { type: 'tf', text: "Về tác động xã hội của CMCN thời cận đại:", options: [
                    { text: "a) Hình thành các trung tâm công nghiệp mới cũng là những thành thị đông dân (Luân Đôn, Pa-ri...).", answer: true },
                    { text: "b) Hình thành hai giai cấp đối kháng gay gắt là tư sản công nghiệp và vô sản làm thuê.", answer: true },
                    { text: "c) Xóa bỏ hoàn toàn khoảng cách giàu nghèo trong xã hội tư bản.", answer: false },
                    { text: "d) Lối sống và văn hóa công nghiệp ngày càng trở nên phổ biến.", answer: true }
                ]},
                { type: 'tf', text: "Về tác động văn hóa của CMCN thời cận đại:", options: [
                    { text: "a) Đời sống văn hóa tinh thần trở nên phong phú với sự xuất hiện của điện thoại, ra-đi-ô, điện ảnh.", answer: true },
                    { text: "b) Các quốc gia hoàn toàn cắt đứt giao lưu văn hóa với nhau để bảo vệ bí mật công nghệ.", answer: false },
                    { text: "c) Sự kết nối văn hóa giữa các quốc gia, châu lục được đẩy mạnh nhờ giao thông phát triển.", answer: true },
                    { text: "d) Việc di chuyển và liên lạc trở nên nhanh chóng, thay đổi nhận thức về không gian, thời gian.", answer: true }
                ]},
                { type: 'tf', text: "Về các tác động tiêu cực của CMCN thời cận đại:", options: [
                    { text: "a) Các nhà máy nhả khói bụi gây ô nhiễm môi trường sinh thái nghiêm trọng.", answer: true },
                    { text: "b) Gia tăng tình trạng bóc lột sức lao động của phụ nữ và trẻ em với giá rẻ mạt.", answer: true },
                    { text: "c) Các cuộc cách mạng công nghiệp đã chấm dứt hoàn toàn chiến tranh xâm lược.", answer: false },
                    { text: "d) Nhu cầu về nguyên liệu và thị trường thúc đẩy sự xâm chiếm và tranh giành thuộc địa.", answer: true }
                ]},
                { type: 'tf', text: "Về quá trình công nghiệp hóa ở một số nước:", options: [
                    { text: "a) Ở Bỉ, quá trình công nghiệp hóa diễn ra với trọng tâm là ngành luyện kim, khai mỏ và dệt.", answer: true },
                    { text: "b) Ở Pháp, cách mạng công nghiệp diễn ra muộn hơn Anh do tác động của những bất ổn chính trị.", answer: true },
                    { text: "c) Nước Anh kiên quyết giữ bí mật công nghệ, không để lan truyền sang bất cứ nước nào khác.", answer: false },
                    { text: "d) Đến giữa thế kỉ XIX, nước Pháp cơ bản trở thành một nước công nghiệp.", answer: true }
                ]},
                { type: 'tf', text: "Đánh giá chung về hai cuộc Cách mạng công nghiệp:", options: [
                    { text: "a) Cả hai cuộc cách mạng đều dựa trên việc cơ giới hóa và ứng dụng năng lượng mới vào sản xuất.", answer: true },
                    { text: "b) Đã tạo ra khối lượng của cải vật chất khổng lồ cho xã hội tư bản.", answer: true },
                    { text: "c) Chỉ có tác động đến châu Âu, không ảnh hưởng đến phần còn lại của thế giới.", answer: false },
                    { text: "d) Mở ra kỉ nguyên văn minh công nghiệp, thay thế cho nền văn minh nông nghiệp truyền thống.", answer: true }
                ]}
            ]
        }
    },
    7: {
        title: "Bài 7: Các cuộc cách mạng công nghiệp thời hiện đại",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Cách mạng công nghiệp lần thứ ba (bắt đầu từ những năm 40 của thế kỉ XX) còn được gọi là gì?", options: ["Cách mạng điện khí hóa.", "Cách mạng kĩ thuật số.", "Cách mạng hơi nước.", "Cách mạng sinh học."], answer: 1 },
                { type: 'mcq', text: "Thành tựu quan trọng đầu tiên khởi nguồn cho cuộc Cách mạng công nghiệp lần thứ ba là gì?", options: ["Sự xuất hiện của máy tính điện tử (như ENIAC).", "Động cơ phản lực.", "Trí tuệ nhân tạo (AI).", "Công nghệ in 3D."], answer: 0 },
                { type: 'mcq', text: "Sự ra đời của mạng lưới nào đã giúp kết nối và chia sẻ thông tin toàn cầu một cách dễ dàng trong Cách mạng công nghiệp lần thứ ba?", options: ["Mạng cáp quang truyền hình.", "Mạng điện báo vô tuyến.", "Internet (Mạng lưới toàn cầu World Wide Web).", "Mạng lưới đường sắt cao tốc."], answer: 2 },
                { type: 'mcq', text: "Sự kiện nào đánh dấu bước tiến vĩ đại trong công cuộc chinh phục vũ trụ của Mỹ (1969)?", options: ["Đưa con người lên quỹ đạo Trái Đất.", "Phóng vệ tinh nhân tạo đầu tiên.", "Nhà du hành Neo Am-xtroong đặt chân lên Mặt Trăng.", "Đưa rô-bốt tự hành lên sao Hỏa."], answer: 2 },
                { type: 'mcq', text: "Cách mạng công nghiệp lần thứ tư (Cách mạng 4.0) bắt đầu từ khoảng thời gian nào?", options: ["Những năm đầu tiên của thế kỉ XXI.", "Sau Chiến tranh thế giới thứ hai.", "Năm 1995 khi Internet ra đời.", "Đầu thập niên 70 của thế kỉ XX."], answer: 0 },
                { type: 'mcq', text: "Đâu là thành tựu cốt lõi, tiêu biểu của Cách mạng công nghiệp lần thứ tư?", options: ["Động cơ nguyên tử.", "Trí tuệ nhân tạo (AI), Internet vạn vật (IoT), Dữ liệu lớn (Big Data).", "Kĩ thuật phân chia tế bào.", "Máy tính cá nhân."], answer: 1 },
                { type: 'mcq', text: "Công nghệ nào cho phép máy móc mô phỏng khả năng tư duy, học tập và ra quyết định của con người?", options: ["In 3D.", "Điện toán đám mây.", "Công nghệ Na-nô.", "Trí tuệ nhân tạo (AI)."], answer: 3 },
                { type: 'mcq', text: "Rô-bốt Xô-phi-a (được cấp quyền công dân năm 2017) là minh chứng sống động cho sự phát triển của lĩnh vực nào?", options: ["Công nghệ vật liệu mới.", "Trí tuệ nhân tạo và công nghệ chế tạo người máy.", "Công nghệ sinh học gen.", "Năng lượng tái tạo."], answer: 1 },
                { type: 'mcq', text: "Tác động kinh tế nổi bật của các cuộc cách mạng công nghiệp thời hiện đại là gì?", options: ["Sự ra đời của các nhà máy thông minh, thương mại điện tử giúp tăng năng suất và mở rộng thị trường toàn cầu.", "Làm suy yếu các nền kinh tế phát triển.", "Đưa con người quay lại phương thức sản xuất thủ công.", "Đẩy lùi quá trình toàn cầu hóa."], answer: 0 },
                { type: 'mcq', text: "Một trong những tác động tiêu cực về mặt xã hội của các cuộc cách mạng công nghiệp thời hiện đại là gì?", options: ["Giảm thiểu sự phụ thuộc vào công nghệ.", "Xóa bỏ hoàn toàn được bệnh tật.", "Giải phóng con người khỏi môi trường độc hại.", "Khiến nhiều người lao động đối diện với nguy cơ mất việc làm và nới rộng khoảng cách giàu - nghèo."], answer: 3 }
            ],
            tf: [
                { type: 'tf', text: "Về Cách mạng công nghiệp lần thứ ba:", options: [
                    { text: "a) Bắt đầu vào khoảng những năm 40 của thế kỉ XX.", answer: true },
                    { text: "b) Đặc trưng bởi sự xuất hiện của động cơ đốt trong và năng lượng điện.", answer: false },
                    { text: "c) Tạo ra các phát minh lớn như: máy tính điện tử, người máy, internet, vật liệu mới.", answer: true },
                    { text: "d) Cuộc 'Cách mạng xanh' trong nông nghiệp là một thành tựu của giai đoạn này.", answer: true }
                ]},
                { type: 'tf', text: "Về công cuộc chinh phục vũ trụ (CMCN lần 3):", options: [
                    { text: "a) Gắn liền với sự cạnh tranh khoa học kĩ thuật giữa hai cường quốc Mỹ và Liên Xô.", answer: true },
                    { text: "b) Liên Xô là nước đầu tiên phóng thành công vệ tinh nhân tạo (Xpút-ních 1) lên quỹ đạo.", answer: true },
                    { text: "c) Mĩ là quốc gia đầu tiên đưa con người lên sống thường xuyên trên Mặt Trăng.", answer: false },
                    { text: "d) Thể hiện những bước tiến nhảy vọt của nhân loại trong việc khám phá không gian.", answer: true }
                ]},
                { type: 'tf', text: "Về Cách mạng công nghiệp lần thứ tư (4.0):", options: [
                    { text: "a) Bắt đầu từ những năm đầu thế kỉ XXI và hiện vẫn đang tiếp diễn.", answer: true },
                    { text: "b) Xóa bỏ ranh giới giữa các lĩnh vực vật lý, kĩ thuật số và sinh học.", answer: true },
                    { text: "c) Công nghệ in 3D có thể giúp xây dựng các tòa nhà với chi phí và rác thải giảm đi đáng kể.", answer: true },
                    { text: "d) Công nghệ na-nô là việc thiết kế các thiết bị với kích thước khổng lồ.", answer: false }
                ]},
                { type: 'tf', text: "Về Trí tuệ nhân tạo (AI) và Internet vạn vật (IoT):", options: [
                    { text: "a) AI giúp máy móc có khả năng xử lí dữ liệu, ra quyết định giống như con người.", answer: true },
                    { text: "b) IoT chỉ giới hạn trong việc kết nối các máy tính để bàn với nhau.", answer: false },
                    { text: "c) Các thiết bị kết nối IoT giúp thu thập lượng dữ liệu khổng lồ (Big Data).", answer: true },
                    { text: "d) Trong giáo dục, AI giúp tối ưu hóa năng lực tự học và cá nhân hóa quá trình học.", answer: true }
                ]},
                { type: 'tf', text: "Về tác động kinh tế của CMCN thời hiện đại:", options: [
                    { text: "a) Thương mại điện tử ra đời giúp người tiêu dùng mua sắm trực tuyến, tiếp cận thị trường toàn cầu.", answer: true },
                    { text: "b) Làm suy giảm quá trình khu vực hóa và toàn cầu hóa kinh tế.", answer: false },
                    { text: "c) Các 'nhà máy thông minh' tự động hóa cao giúp tăng năng suất, tiết kiệm nguyên nhiên liệu.", answer: true },
                    { text: "d) Dữ liệu lớn (Big Data) hỗ trợ việc ra quyết định kinh doanh nhanh và chính xác hơn.", answer: true }
                ]},
                { type: 'tf', text: "Về tác động xã hội của CMCN thời hiện đại:", options: [
                    { text: "a) Giúp giải phóng sức lao động trong các công việc nguy hiểm, độc hại.", answer: true },
                    { text: "b) Dẫn đến sự phân hóa lực lượng lao động, đòi hỏi trình độ chuyên môn cao hơn.", answer: true },
                    { text: "c) Tất cả mọi người trên thế giới đều có cơ hội việc làm bình đẳng tuyệt đối.", answer: false },
                    { text: "d) Phát sinh hình thức làm việc từ xa, giúp tiết kiệm thời gian di chuyển.", answer: true }
                ]},
                { type: 'tf', text: "Về tác động văn hóa của CMCN thời hiện đại:", options: [
                    { text: "a) Giao lưu văn hóa giữa các quốc gia diễn ra dễ dàng, nhanh chóng qua internet.", answer: true },
                    { text: "b) Mạng xã hội trở thành công cụ chia sẻ thông tin và giao tiếp quan trọng.", answer: true },
                    { text: "c) Xóa bỏ hoàn toàn mọi xung đột về giá trị văn hóa trên thế giới.", answer: false },
                    { text: "d) Sự xuất hiện của văn hóa không gian mạng (cyber culture) đặt ra nhiều thách thức mới.", answer: true }
                ]},
                { type: 'tf', text: "Về các mặt trái và thách thức:", options: [
                    { text: "a) Nguy cơ mất an toàn thông tin, rò rỉ bảo mật dữ liệu cá nhân tăng cao.", answer: true },
                    { text: "b) Tình trạng tin giả, thông tin chưa kiểm chứng lây lan nhanh trên mạng xã hội.", answer: true },
                    { text: "c) Việc ứng dụng AI hoàn toàn không có khả năng gây ra rủi ro cho con người.", answer: false },
                    { text: "d) Lạm dụng công nghệ trong học tập có thể làm giảm khả năng tư duy độc lập.", answer: true }
                ]},
                { type: 'tf', text: "Về rô-bốt và tự động hóa:", options: [
                    { text: "a) Rô-bốt có thể thay con người làm nhiều công việc nguy hiểm, độc hại.", answer: true },
                    { text: "b) Rô-bốt Xô-phi-a là rô-bốt đầu tiên được cấp quyền công dân (Ả Rập Xê Út, năm 2017).", answer: true },
                    { text: "c) Tự động hóa khiến mọi ngành nghề đều không còn cần đến lao động con người.", answer: false },
                    { text: "d) Ứng dụng rô-bốt và AI góp phần nâng cao năng suất lao động.", answer: true }
                ]},
                { type: 'tf', text: "Về Cách mạng công nghiệp lần thứ ba:", options: [
                    { text: "a) Bắt đầu từ những năm 40 của thế kỉ XX.", answer: true },
                    { text: "b) Có các thành tựu tiêu biểu như máy tính điện tử, Internet, năng lượng nguyên tử, tự động hóa.", answer: true },
                    { text: "c) Động cơ hơi nước là thành tựu cốt lõi của cuộc cách mạng này.", answer: false },
                    { text: "d) Việc đưa người lên Mặt Trăng (1969) là thành tựu trong lĩnh vực chinh phục vũ trụ.", answer: true }
                ]}
            ]
        }
    },
    8: {
        title: "Bài 8: Cơ sở hình thành văn minh Đông Nam Á thời kì cổ - trung đại",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Đông Nam Á nằm giữa hai đại dương nào?", options: ["Đại Tây Dương và Ấn Độ Dương.", "Ấn Độ Dương và Thái Bình Dương.", "Ấn Độ Dương và Bắc Băng Dương.", "Đại Tây Dương và Thái Bình Dương."], answer: 1 },
                { type: 'mcq', text: "Đông Nam Á gồm hai bộ phận nào?", options: ["Đông Nam Á phía Bắc và Đông Nam Á phía Nam.", "Đông Nam Á đại lục và Đông Nam Á ven biển.", "Đông Nam Á lục địa (bán đảo Trung - Ấn) và Đông Nam Á hải đảo.", "Đông Nam Á cao nguyên và Đông Nam Á đồng bằng."], answer: 2 },
                { type: 'mcq', text: "Khí hậu chủ yếu của khu vực Đông Nam Á là gì?", options: ["Hàn đới lạnh giá quanh năm.", "Nhiệt đới gió mùa nóng ẩm, mưa nhiều.", "Ôn đới hải dương.", "Cận nhiệt đới khô hạn."], answer: 1 },
                { type: 'mcq', text: "Điều kiện tự nhiên của Đông Nam Á thuận lợi cho ngành kinh tế nào phát triển sớm?", options: ["Khai thác dầu mỏ quy mô lớn.", "Chăn nuôi du mục.", "Công nghiệp luyện kim hiện đại.", "Nông nghiệp trồng lúa nước."], answer: 3 },
                { type: 'mcq', text: "Vị trí địa lí \"cầu nối\" giữa Nam Á và Đông Á, giữa hai đại dương tạo thuận lợi gì cho Đông Nam Á?", options: ["Tránh được mọi cuộc chiến tranh xâm lược.", "Giao lưu kinh tế, văn hóa với bên ngoài.", "Hoàn toàn biệt lập với thế giới.", "Chỉ phát triển nông nghiệp tự cung tự cấp."], answer: 1 },
                { type: 'mcq', text: "Cơ sở bên trong quan trọng nhất của văn minh Đông Nam Á là gì?", options: ["Nền văn minh bản địa với nghề trồng lúa nước và kĩ thuật luyện kim.", "Sự du nhập của văn minh phương Tây.", "Sự truyền bá của Hồi giáo.", "Sự áp đặt của văn minh Ấn Độ."], answer: 0 },
                { type: 'mcq', text: "Nền văn hóa nào ở Việt Nam nổi tiếng với kĩ thuật đúc trống đồng?", options: ["Văn hóa Đông Sơn.", "Văn hóa Óc Eo.", "Văn hóa Hòa Bình.", "Văn hóa Sa Huỳnh."], answer: 0 },
                { type: 'mcq', text: "Hai nền văn minh bên ngoài có ảnh hưởng sớm và sâu sắc đến Đông Nam Á là gì?", options: ["Văn minh Lưỡng Hà và văn minh Ai Cập.", "Văn minh Hy Lạp và văn minh La Mã.", "Văn minh Ai Cập và văn minh Hy Lạp.", "Văn minh Ấn Độ và văn minh Trung Hoa."], answer: 3 },
                { type: 'mcq', text: "Cư dân Đông Nam Á tiếp thu văn minh Ấn Độ chủ yếu bằng con đường nào?", options: ["Cưỡng bức di dân hàng loạt.", "Các cuộc chinh phục quân sự quy mô lớn.", "Con đường hòa bình: buôn bán, truyền bá tôn giáo, giao lưu văn hóa.", "Thông qua chiến tranh xâm lược."], answer: 2 },
                { type: 'mcq', text: "Cư dân Đông Nam Á có thái độ như thế nào khi tiếp thu văn minh bên ngoài?", options: ["Chọn lọc, cải biến cho phù hợp và hòa nhập với văn hóa bản địa.", "Tiếp nhận nguyên vẹn, không thay đổi.", "Từ chối mọi ảnh hưởng bên ngoài.", "Thay thế hoàn toàn văn hóa bản địa."], answer: 0 }
            ],
            tf: [
                { type: 'tf', text: "Về vị trí địa lí của Đông Nam Á:", options: [
                    { text: "a) Nằm giữa Ấn Độ Dương và Thái Bình Dương.", answer: true },
                    { text: "b) Là cầu nối giữa Nam Á và Đông Á.", answer: true },
                    { text: "c) Hoàn toàn nằm sâu trong nội địa, không giáp biển.", answer: false },
                    { text: "d) Vị trí thuận lợi cho giao lưu thương mại đường biển.", answer: true }
                ]},
                { type: 'tf', text: "Về địa hình và sông ngòi:", options: [
                    { text: "a) Có nhiều đồng bằng châu thổ màu mỡ do các con sông lớn bồi đắp.", answer: true },
                    { text: "b) Sông Mê Công, sông Hồng, sông I-ra-oa-đi là những sông lớn ở Đông Nam Á lục địa.", answer: true },
                    { text: "c) Đông Nam Á hải đảo không có núi lửa, địa hình hoàn toàn bằng phẳng.", answer: false },
                    { text: "d) Địa hình đa dạng gồm núi, cao nguyên, đồng bằng và nhiều đảo.", answer: true }
                ]},
                { type: 'tf', text: "Về khí hậu:", options: [
                    { text: "a) Khí hậu nhiệt đới gió mùa, nóng ẩm, mưa nhiều.", answer: true },
                    { text: "b) Thích hợp cho cây lúa nước và nhiều loại cây nhiệt đới.", answer: true },
                    { text: "c) Khí hậu khô hạn quanh năm nên không thể trồng lúa.", answer: false },
                    { text: "d) Chế độ gió mùa ảnh hưởng đến hoạt động đi biển và buôn bán đường biển.", answer: true }
                ]},
                { type: 'tf', text: "Về cư dân và xã hội:", options: [
                    { text: "a) Đông Nam Á có nhiều tộc người thuộc nhiều ngữ hệ khác nhau.", answer: true },
                    { text: "b) Cư dân Đông Nam Á chỉ sử dụng một ngôn ngữ chung duy nhất.", answer: false },
                    { text: "c) Nông nghiệp lúa nước gắn liền với tổ chức xã hội theo làng, bản, công xã nông thôn.", answer: true },
                    { text: "d) Cư dân chủ yếu sinh sống bằng nghề nông trồng lúa nước.", answer: true }
                ]},
                { type: 'tf', text: "Về nền văn minh bản địa:", options: [
                    { text: "a) Văn minh Đông Nam Á có cội nguồn từ nền văn minh bản địa.", answer: true },
                    { text: "b) Nghề trồng lúa nước là nền tảng kinh tế của cư dân.", answer: true },
                    { text: "c) Kĩ thuật luyện kim đồng, sắt phát triển, thể hiện rõ ở văn hóa Đông Sơn.", answer: true },
                    { text: "d) Văn minh Đông Nam Á hoàn toàn là sự sao chép văn minh Ấn Độ, không có yếu tố bản địa.", answer: false }
                ]},
                { type: 'tf', text: "Về tín ngưỡng bản địa:", options: [
                    { text: "a) Tục thờ cúng tổ tiên phổ biến ở cư dân Đông Nam Á.", answer: true },
                    { text: "b) Cư dân thờ các thần tự nhiên như thần Mặt Trời, thần sông, thần núi.", answer: true },
                    { text: "c) Cư dân Đông Nam Á không có tín ngưỡng nào trước khi các tôn giáo ngoại lai du nhập.", answer: false },
                    { text: "d) Tín ngưỡng phồn thực, cầu mùa màng có vai trò quan trọng trong đời sống.", answer: true }
                ]},
                { type: 'tf', text: "Về ảnh hưởng của văn minh Ấn Độ:", options: [
                    { text: "a) Phật giáo và Hin-đu giáo được truyền vào Đông Nam Á.", answer: true },
                    { text: "b) Chữ Phạn, chữ Pa-li ảnh hưởng đến chữ viết của nhiều quốc gia Đông Nam Á.", answer: true },
                    { text: "c) Cư dân Đông Nam Á hoàn toàn không tiếp thu kiến trúc, nghệ thuật của Ấn Độ.", answer: false },
                    { text: "d) Ảnh hưởng của Ấn Độ thể hiện rõ ở Chăm-pa, Phù Nam, Cam-pu-chia.", answer: true }
                ]},
                { type: 'tf', text: "Về ảnh hưởng của văn minh Trung Hoa:", options: [
                    { text: "a) Văn minh Trung Hoa có ảnh hưởng sâu sắc đến Việt Nam.", answer: true },
                    { text: "b) Nho giáo và chữ Hán được truyền vào Việt Nam.", answer: true },
                    { text: "c) Văn minh Trung Hoa ảnh hưởng đến tất cả các nước Đông Nam Á với mức độ như nhau.", answer: false },
                    { text: "d) Người Việt tiếp thu có chọn lọc và sáng tạo ra chữ Nôm.", answer: true }
                ]},
                { type: 'tf', text: "Về Hồi giáo và phương Tây:", options: [
                    { text: "a) Hồi giáo có ảnh hưởng mạnh ở khu vực Đông Nam Á hải đảo.", answer: true },
                    { text: "b) Từ thế kỉ XVI, văn hóa phương Tây bắt đầu ảnh hưởng đến Đông Nam Á.", answer: true },
                    { text: "c) Hồi giáo là tôn giáo phổ biến nhất ở Việt Nam và Lào.", answer: false },
                    { text: "d) Dù chịu nhiều ảnh hưởng bên ngoài, văn minh Đông Nam Á vẫn giữ được bản sắc riêng.", answer: true }
                ]},
                { type: 'tf', text: "Về quá trình tiếp biến văn hóa:", options: [
                    { text: "a) Giao lưu văn hóa ở Đông Nam Á diễn ra liên tục, nhiều chiều.", answer: true },
                    { text: "b) Cư dân tiếp thu có chọn lọc và biến đổi cho phù hợp với điều kiện bản địa.", answer: true },
                    { text: "c) Văn hóa bản địa bị xóa bỏ hoàn toàn bởi văn hóa ngoại lai.", answer: false },
                    { text: "d) Quá trình tiếp biến tạo nên sự đa dạng trong thống nhất của văn minh Đông Nam Á.", answer: true }
                ]}
            ]
        }
    },
    9: {
        title: "Bài 9: Hành trình phát triển và thành tựu của văn minh Đông Nam Á thời kì cổ - trung đại",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Quốc gia cổ nào hình thành khoảng thế kỉ I ở vùng hạ lưu sông Mê Công?", options: ["Pa-gan.", "Phù Nam.", "Lan Xang.", "Ma-ja-pa-hít."], answer: 1 },
                { type: 'mcq', text: "Công trình Ăng-co Vát thuộc quốc gia nào ngày nay?", options: ["Cam-pu-chia.", "Thái Lan.", "Mi-an-ma.", "Lào."], answer: 0 },
                { type: 'mcq', text: "Công trình Phật giáo Bô-rô-bu-đua nằm ở quốc gia nào ngày nay?", options: ["In-đô-nê-xi-a.", "Xin-ga-po.", "Ma-lai-xi-a.", "Phi-líp-pin."], answer: 0 },
                { type: 'mcq', text: "Quần thể chùa tháp Pa-gan nổi tiếng nằm ở quốc gia nào ngày nay?", options: ["Thái Lan.", "Việt Nam.", "Cam-pu-chia.", "Mi-an-ma."], answer: 3 },
                { type: 'mcq', text: "Chữ Nôm của người Việt được sáng tạo trên cơ sở nào?", options: ["Chữ Latinh.", "Chữ Phạn.", "Chữ Hán.", "Chữ Ả Rập."], answer: 2 },
                { type: 'mcq', text: "Hai tôn giáo từ Ấn Độ truyền vào Đông Nam Á từ rất sớm là gì?", options: ["Thiên Chúa giáo và Hồi giáo.", "Phật giáo và Hin-đu giáo.", "Hồi giáo và Do Thái giáo.", "Nho giáo và Đạo giáo."], answer: 1 },
                { type: 'mcq', text: "Quốc gia nào ở Đông Nam Á hải đảo có số người theo Hồi giáo đông nhất?", options: ["Cam-pu-chia.", "In-đô-nê-xi-a.", "Lào.", "Việt Nam."], answer: 1 },
                { type: 'mcq', text: "Thạt Luổng là công trình kiến trúc Phật giáo tiêu biểu của quốc gia nào?", options: ["Mi-an-ma.", "Phi-líp-pin.", "Lào.", "In-đô-nê-xi-a."], answer: 2 },
                { type: 'mcq', text: "Sử thi Ra-ma-ya-na có nguồn gốc từ nền văn minh nào?", options: ["Ả Rập.", "Trung Hoa.", "Hy Lạp.", "Ấn Độ."], answer: 3 },
                { type: 'mcq', text: "Thành tựu văn minh Đông Nam Á thời kì cổ - trung đại thể hiện điều gì?", options: ["Sức sáng tạo, bản sắc riêng và đóng góp vào kho tàng văn minh nhân loại.", "Không còn giá trị đối với hiện tại.", "Sự lệ thuộc hoàn toàn vào văn minh Ấn Độ.", "Chỉ là bản sao của văn minh Trung Hoa."], answer: 0 }
            ],
            tf: [
                { type: 'tf', text: "Về hành trình phát triển của văn minh Đông Nam Á:", options: [
                    { text: "a) Từ khoảng đầu Công nguyên, các quốc gia đầu tiên đã hình thành ở Đông Nam Á.", answer: true },
                    { text: "b) Phù Nam và Chăm-pa là các quốc gia cổ tiêu biểu.", answer: true },
                    { text: "c) Đến thế kỉ XIX, Đông Nam Á vẫn chưa có quốc gia nào được hình thành.", answer: false },
                    { text: "d) Sau đó nhiều quốc gia phong kiến hình thành và phát triển như Đại Việt, Ăng-co, Pa-gan.", answer: true }
                ]},
                { type: 'tf', text: "Về chữ viết:", options: [
                    { text: "a) Nhiều dân tộc ở Đông Nam Á đã sáng tạo ra chữ viết riêng.", answer: true },
                    { text: "b) Chữ viết của một số dân tộc chịu ảnh hưởng của chữ Phạn.", answer: true },
                    { text: "c) Chữ Nôm của người Việt được xây dựng trên cơ sở chữ Hán.", answer: true },
                    { text: "d) Cư dân Đông Nam Á thời cổ - trung đại hoàn toàn chưa có chữ viết.", answer: false }
                ]},
                { type: 'tf', text: "Về tôn giáo, tín ngưỡng:", options: [
                    { text: "a) Phật giáo, Hin-đu giáo, Hồi giáo cùng tồn tại ở Đông Nam Á.", answer: true },
                    { text: "b) Tín ngưỡng bản địa vẫn tồn tại song hành với các tôn giáo ngoại lai.", answer: true },
                    { text: "c) Mỗi quốc gia chỉ tiếp nhận một tôn giáo duy nhất, không có sự pha trộn.", answer: false },
                    { text: "d) Tôn giáo ảnh hưởng sâu sắc đến kiến trúc và nghệ thuật.", answer: true }
                ]},
                { type: 'tf', text: "Về kiến trúc, điêu khắc:", options: [
                    { text: "a) Ăng-co Vát (Cam-pu-chia) tiêu biểu cho kiến trúc Hin-đu giáo.", answer: true },
                    { text: "b) Bô-rô-bu-đua (In-đô-nê-xi-a) là công trình Phật giáo.", answer: true },
                    { text: "c) Pa-gan (Mi-an-ma) nổi tiếng với hàng nghìn ngôi chùa, tháp.", answer: true },
                    { text: "d) Tất cả các công trình trên đều là kiến trúc Hồi giáo.", answer: false }
                ]},
                { type: 'tf', text: "Về văn học, nghệ thuật:", options: [
                    { text: "a) Văn học dân gian phát triển phong phú ở nhiều nước Đông Nam Á.", answer: true },
                    { text: "b) Nhiều nước tiếp thu sử thi Ấn Độ và cải biên cho phù hợp với văn hóa của mình.", answer: true },
                    { text: "c) Nghệ thuật Đông Nam Á chỉ mang giá trị tôn giáo, không có yếu tố dân gian.", answer: false },
                    { text: "d) Âm nhạc, múa, nhạc cụ dân tộc phản ánh đời sống tinh thần của cư dân.", answer: true }
                ]},
                { type: 'tf', text: "Về lễ hội và phong tục:", options: [
                    { text: "a) Nhiều lễ hội gắn với chu kì sản xuất nông nghiệp lúa nước.", answer: true },
                    { text: "b) Phong tục, lễ hội ở nhiều nước có điểm tương đồng do cùng nền văn minh nông nghiệp lúa nước.", answer: true },
                    { text: "c) Lễ hội của các nước Đông Nam Á hoàn toàn giống nhau, không có khác biệt.", answer: false },
                    { text: "d) Lễ hội là nét văn hóa thể hiện bản sắc của mỗi dân tộc.", answer: true }
                ]},
                { type: 'tf', text: "Về đặc điểm chung của văn minh Đông Nam Á:", options: [
                    { text: "a) Văn minh Đông Nam Á kết hợp yếu tố bản địa và yếu tố ngoại lai.", answer: true },
                    { text: "b) Cư dân Đông Nam Á tiếp thu văn hóa bên ngoài một cách có chọn lọc.", answer: true },
                    { text: "c) Đông Nam Á chỉ thụ động tiếp nhận văn hóa từ bên ngoài, không có sáng tạo.", answer: false },
                    { text: "d) Điều đó thể hiện sức sống và tính sáng tạo của văn minh Đông Nam Á.", answer: true }
                ]},
                { type: 'tf', text: "Về thành tựu vật chất, kinh tế:", options: [
                    { text: "a) Nghề trồng lúa nước và kĩ thuật thủy lợi phát triển.", answer: true },
                    { text: "b) Các nghề thủ công như gốm, dệt, luyện kim có nhiều thành tựu.", answer: true },
                    { text: "c) Hoạt động buôn bán đường biển sôi động với nhiều thương cảng.", answer: true },
                    { text: "d) Kinh tế Đông Nam Á hoàn toàn khép kín, không buôn bán với nước ngoài.", answer: false }
                ]},
                { type: 'tf', text: "Về di sản văn minh Đông Nam Á:", options: [
                    { text: "a) Nhiều công trình ở Đông Nam Á được UNESCO công nhận là di sản thế giới.", answer: true },
                    { text: "b) Ăng-co Vát và Bô-rô-bu-đua là những di sản tiêu biểu.", answer: true },
                    { text: "c) Di sản văn minh Đông Nam Á không còn giá trị gì đối với ngày nay.", answer: false },
                    { text: "d) Cần bảo tồn và phát huy giá trị các di sản này.", answer: true }
                ]},
                { type: 'tf', text: "Về ý nghĩa của văn minh Đông Nam Á:", options: [
                    { text: "a) Góp phần làm phong phú kho tàng văn minh nhân loại.", answer: true },
                    { text: "b) Có giá trị trường tồn, còn ảnh hưởng đến đời sống ngày nay.", answer: true },
                    { text: "c) Văn minh Đông Nam Á phát triển biệt lập, không có giao lưu với bên ngoài.", answer: false },
                    { text: "d) Đa dạng trong thống nhất là nét đặc trưng của văn minh khu vực.", answer: true }
                ]}
            ]
        }
    },
    10: {
        title: "Bài 10: Một số nền văn minh cổ trên đất nước Việt Nam (Văn Lang - Âu Lạc, Chăm-pa, Phù Nam)",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Nhà nước Văn Lang hình thành vào khoảng thế kỉ nào?", options: ["Thế kỉ VII TCN.", "Thế kỉ X.", "Thế kỉ III TCN.", "Thế kỉ I."], answer: 0 },
                { type: 'mcq', text: "Kinh đô của nhà nước Văn Lang đặt ở đâu?", options: ["Phong Châu.", "Cổ Loa.", "Thăng Long.", "Mê Linh."], answer: 0 },
                { type: 'mcq', text: "Nhà nước Âu Lạc do ai đứng đầu và đóng đô ở đâu?", options: ["Hùng Vương, đóng đô ở Phong Châu.", "Triệu Đà, đóng đô ở Phiên Ngung.", "Lý Nam Đế, đóng đô ở Long Biên.", "An Dương Vương, đóng đô ở Cổ Loa."], answer: 3 },
                { type: 'mcq', text: "Hiện vật tiêu biểu nhất của văn hóa Đông Sơn là gì?", options: ["Đồ gốm men ngọc.", "Trống đồng.", "Tượng đá Li-ga.", "Tháp Chăm."], answer: 1 },
                { type: 'mcq', text: "Vương quốc Chăm-pa ra đời vào khoảng thời gian nào?", options: ["Thế kỉ XV.", "Cuối thế kỉ II.", "Thế kỉ X.", "Thế kỉ VII TCN."], answer: 1 },
                { type: 'mcq', text: "Văn minh Chăm-pa được hình thành trên cơ sở nền văn hóa nào?", options: ["Văn hóa Đông Sơn.", "Văn hóa Hòa Bình.", "Văn hóa Sa Huỳnh.", "Văn hóa Óc Eo."], answer: 2 },
                { type: 'mcq', text: "Công trình kiến trúc tiêu biểu của văn minh Chăm-pa là gì?", options: ["Thành Cổ Loa.", "Ăng-co Vát.", "Thánh địa Mỹ Sơn.", "Văn Miếu."], answer: 2 },
                { type: 'mcq', text: "Văn minh Phù Nam được hình thành trên cơ sở nền văn hóa nào?", options: ["Văn hóa Đông Sơn.", "Văn hóa Óc Eo.", "Văn hóa Sa Huỳnh.", "Văn hóa Hòa Bình."], answer: 1 },
                { type: 'mcq', text: "Vương quốc Phù Nam nằm ở khu vực nào của Việt Nam ngày nay?", options: ["Nam Bộ (vùng đồng bằng sông Cửu Long).", "Tây Nguyên.", "Bắc Bộ.", "Bắc Trung Bộ."], answer: 0 },
                { type: 'mcq', text: "Văn minh Chăm-pa và văn minh Phù Nam cùng chịu ảnh hưởng sâu sắc của nền văn minh nào?", options: ["Văn minh Ả Rập.", "Văn minh Trung Hoa.", "Văn minh Hy Lạp.", "Văn minh Ấn Độ."], answer: 3 }
            ],
            tf: [
                { type: 'tf', text: "Về nhà nước Văn Lang - Âu Lạc:", options: [
                    { text: "a) Văn Lang là nhà nước đầu tiên của người Việt.", answer: true },
                    { text: "b) Đứng đầu nhà nước Văn Lang là Hùng Vương.", answer: true },
                    { text: "c) Nhà nước Âu Lạc ra đời trước nhà nước Văn Lang.", answer: false },
                    { text: "d) Cổ Loa là kinh đô của nhà nước Âu Lạc.", answer: true }
                ]},
                { type: 'tf', text: "Về cơ sở hình thành văn minh Văn Lang - Âu Lạc:", options: [
                    { text: "a) Hình thành trên cơ sở văn hóa Đông Sơn.", answer: true },
                    { text: "b) Địa bàn chính là lưu vực sông Hồng, sông Mã, sông Cả.", answer: true },
                    { text: "c) Phát triển chủ yếu ở vùng đồng bằng sông Cửu Long.", answer: false },
                    { text: "d) Nghề trồng lúa nước là nền tảng kinh tế.", answer: true }
                ]},
                { type: 'tf', text: "Về thành tựu của văn minh Văn Lang - Âu Lạc:", options: [
                    { text: "a) Trống đồng, thạp đồng là sản phẩm tiêu biểu.", answer: true },
                    { text: "b) Kĩ thuật đúc đồng đạt trình độ cao.", answer: true },
                    { text: "c) Cư dân chủ yếu sống bằng nghề săn bắt, hái lượm.", answer: false },
                    { text: "d) Tín ngưỡng thờ cúng tổ tiên và thờ các thần tự nhiên phổ biến.", answer: true }
                ]},
                { type: 'tf', text: "Về vương quốc Chăm-pa:", options: [
                    { text: "a) Ra đời ở vùng miền Trung Việt Nam ngày nay.", answer: true },
                    { text: "b) Hình thành trên cơ sở văn hóa Sa Huỳnh.", answer: true },
                    { text: "c) Chăm-pa hoàn toàn không chịu ảnh hưởng của văn minh Ấn Độ.", answer: false },
                    { text: "d) Cư dân Chăm-pa giỏi buôn bán đường biển.", answer: true }
                ]},
                { type: 'tf', text: "Về thành tựu của văn minh Chăm-pa:", options: [
                    { text: "a) Chữ Chăm cổ được xây dựng trên cơ sở chữ Phạn.", answer: true },
                    { text: "b) Hin-đu giáo và Phật giáo có ảnh hưởng lớn.", answer: true },
                    { text: "c) Kiến trúc tiêu biểu là các đền tháp bằng gạch, như Thánh địa Mỹ Sơn.", answer: true },
                    { text: "d) Nghệ thuật điêu khắc Chăm-pa chỉ có tượng gỗ, không có điêu khắc đá.", answer: false }
                ]},
                { type: 'tf', text: "Về vương quốc Phù Nam:", options: [
                    { text: "a) Ra đời ở vùng Nam Bộ Việt Nam ngày nay.", answer: true },
                    { text: "b) Hình thành trên cơ sở văn hóa Óc Eo.", answer: true },
                    { text: "c) Phù Nam không có quan hệ buôn bán với nước ngoài.", answer: false },
                    { text: "d) Óc Eo là cảng thị sầm uất, giao thương với nhiều quốc gia.", answer: true }
                ]},
                { type: 'tf', text: "Về thành tựu của văn minh Phù Nam:", options: [
                    { text: "a) Cư dân sử dụng chữ Phạn trong một số văn bia.", answer: true },
                    { text: "b) Chịu ảnh hưởng của Phật giáo và Hin-đu giáo.", answer: true },
                    { text: "c) Cư dân Phù Nam không biết làm nghề thủ công.", answer: false },
                    { text: "d) Có kĩ thuật chế tác đồ trang sức, đồ gốm khá phát triển.", answer: true }
                ]},
                { type: 'tf', text: "So sánh văn minh Chăm-pa và Phù Nam:", options: [
                    { text: "a) Cả hai đều chịu ảnh hưởng của văn minh Ấn Độ.", answer: true },
                    { text: "b) Cả hai đều có hoạt động thương mại biển phát triển.", answer: true },
                    { text: "c) Cả hai đều hình thành ở miền Bắc Việt Nam.", answer: false },
                    { text: "d) Mỗi nền văn minh đều có bản sắc riêng.", answer: true }
                ]},
                { type: 'tf', text: "Về vị trí của các nền văn minh cổ trong lịch sử Việt Nam:", options: [
                    { text: "a) Văn Lang - Âu Lạc, Chăm-pa, Phù Nam là những nền văn minh cổ trên đất nước Việt Nam.", answer: true },
                    { text: "b) Các nền văn minh này góp phần hình thành nền văn hóa Việt Nam đa dạng, thống nhất.", answer: true },
                    { text: "c) Các nền văn minh cổ này đã biến mất hoàn toàn, không để lại di sản.", answer: false },
                    { text: "d) Nhiều di sản của các nền văn minh này được bảo tồn đến ngày nay.", answer: true }
                ]},
                { type: 'tf', text: "Về bảo tồn di sản văn minh cổ:", options: [
                    { text: "a) Cần bảo tồn các di tích như Cổ Loa, Mỹ Sơn, Óc Eo.", answer: true },
                    { text: "b) Học sinh có thể góp phần giữ gìn và quảng bá di sản.", answer: true },
                    { text: "c) Chỉ nhà nước mới có trách nhiệm bảo vệ di sản.", answer: false },
                    { text: "d) Giới thiệu di sản góp phần quảng bá hình ảnh đất nước, con người Việt Nam.", answer: true }
                ]}
            ]
        }
    }
};
