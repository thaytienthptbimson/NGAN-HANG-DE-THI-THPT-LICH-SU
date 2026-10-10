/* =========================================================================
   DỮ LIỆU LỊCH SỬ KHỐI 10 - TOÀN BỘ 10 BÀI
   Bản quyền thuộc về số ĐT: 0943.930.787
========================================================================= */

const dataKhoi10 = {
    1: {
        title: "Bài 1: Hiện thực lịch sử và lịch sử được con người nhận thức",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Khái niệm 'hiện thực lịch sử' được hiểu là gì?[cite: 15]", options: ["Những câu chuyện kể dân gian.", "Tất cả những gì đã diễn ra trong quá khứ.", "Những ghi chép của các nhà sử học.", "Sự tưởng tượng của con người về quá khứ."], answer: 1 },
                { type: 'mcq', text: "Đặc điểm nổi bật của hiện thực lịch sử là gì?[cite: 15]", options: ["Tồn tại hoàn toàn khách quan, không phụ thuộc vào ý muốn chủ quan của con người.", "Có thể thay đổi theo thời gian.", "Phụ thuộc vào nhận thức của nhà sử học.", "Chỉ bao gồm các sự kiện chính trị lớn."], answer: 0 },
                { type: 'mcq', text: "Lịch sử được con người nhận thức là gì?[cite: 15]", options: ["Sự lặp lại của quá khứ.", "Những hiểu biết của con người về hiện thực lịch sử, được trình bày, tái hiện theo những cách khác nhau.", "Bản sao chính xác 100% của quá khứ.", "Những dự đoán về tương lai."], answer: 1 },
                { type: 'mcq', text: "Sử học là ngành khoa học nghiên cứu về vấn đề gì?[cite: 16]", options: ["Sự vận động của vũ trụ.", "Quá khứ của loài người.", "Các hiện tượng tự nhiên.", "Tương lai của nhân loại."], answer: 1 },
                { type: 'mcq', text: "Đối tượng nghiên cứu của Sử học là gì?[cite: 17]", options: ["Chỉ nghiên cứu về các bậc vĩ nhân.", "Toàn bộ quá khứ của loài người.", "Quá trình hình thành Trái Đất.", "Chỉ nghiên cứu lịch sử quốc gia."], answer: 1 },
                { type: 'mcq', text: "Một trong những chức năng khoa học cơ bản của Sử học là gì?[cite: 17]", options: ["Giáo dục tư tưởng, tình cảm.", "Khôi phục các sự kiện lịch sử diễn ra trong quá khứ.", "Dự báo thời tiết.", "Xây dựng các công trình kiến trúc."], answer: 1 },
                { type: 'mcq', text: "Nhiệm vụ nhận thức của Sử học nhằm mục đích gì?[cite: 17]", options: ["Góp phần giáo dục đạo đức.", "Dự báo tương lai.", "Cung cấp tri thức khoa học, giúp con người tìm hiểu, khám phá hiện thực lịch sử một cách khách quan, khoa học.", "Sáng tác văn học nghệ thuật."], answer: 2 },
                { type: 'mcq', text: "Vì sao giữa hiện thực lịch sử và lịch sử được con người nhận thức luôn có khoảng cách?[cite: 15]", options: ["Vì con người không quan tâm đến quá khứ.", "Vì con người không thể nhận thức và tái hiện hoàn toàn đầy đủ hiện thực lịch sử đúng như nó đã xảy ra.", "Vì sử học không phải là khoa học.", "Vì quá khứ thường xuyên bị thay đổi."], answer: 1 },
                { type: 'mcq', text: "Lịch sử được con người nhận thức phụ thuộc vào yếu tố quan trọng nhất nào của người nghiên cứu?[cite: 15]", options: ["Tuổi tác và giới tính.", "Mục đích, thái độ, đạo đức và thế giới quan.", "Sở thích cá nhân.", "Khả năng văn chương."], answer: 1 },
                { type: 'mcq', text: "Nhiệm vụ dự báo của Sử học được thể hiện qua việc gì?[cite: 17]", options: ["Thông qua việc tổng kết thực tiễn, rút ra các bài học kinh nghiệm để góp phần dự báo về tương lai.", "Khôi phục chính xác từng chi tiết của quá khứ.", "Giáo dục lòng yêu nước.", "Ghi chép lại các sự kiện hàng ngày."], answer: 0 }
            ],
            tf: [
                { type: 'tf', text: "Về khái niệm lịch sử và hiện thực lịch sử:[cite: 15]", options: [
                    { text: "a) Lịch sử là những gì đã diễn ra trong quá khứ.", answer: true },
                    { text: "b) Lịch sử loài người chỉ bao gồm quá trình tương tác giữa con người với nhau, không bao gồm tương tác với tự nhiên.", answer: false },
                    { text: "c) Hiện thực lịch sử tồn tại hoàn toàn khách quan, không thể thay đổi được.", answer: true },
                    { text: "d) Con người có thể thay đổi được hiện thực lịch sử nếu có đủ tư liệu.", answer: false }
                ]},
                { type: 'tf', text: "Về lịch sử được con người nhận thức:[cite: 15]", options: [
                    { text: "a) Luôn phản ánh chính xác 100% những gì đã xảy ra trong quá khứ.", answer: false },
                    { text: "b) Phụ thuộc vào nhu cầu, năng lực và phương pháp của người tìm hiểu lịch sử.", answer: true },
                    { text: "c) Được trình bày, tái hiện theo nhiều cách như kể chuyện, ghi chép, lập đài tưởng niệm.", answer: true },
                    { text: "d) Giữa hiện thực lịch sử và lịch sử được nhận thức không bao giờ có khoảng cách.", answer: false }
                ]},
                { type: 'tf', text: "Về chức năng của Sử học:[cite: 17]", options: [
                    { text: "a) Chức năng khoa học của Sử học là khôi phục các sự kiện lịch sử và rút ra bản chất, quy luật vận động.", answer: true },
                    { text: "b) Chức năng xã hội của Sử học là giáo dục tư tưởng, tình cảm, đạo đức.", answer: true },
                    { text: "c) Sử học không có chức năng dự báo tương lai.", answer: false },
                    { text: "d) Chức năng khoa học và chức năng xã hội của Sử học hoàn toàn tách biệt, không liên quan đến nhau.", answer: false }
                ]},
                { type: 'tf', text: "Về nhiệm vụ của Sử học:[cite: 17]", options: [
                    { text: "a) Nhiệm vụ nhận thức là cung cấp tri thức khoa học, khám phá hiện thực lịch sử chân thực.", answer: true },
                    { text: "b) Nhiệm vụ giáo dục góp phần truyền bá những giá trị và truyền thống tốt đẹp cho thế hệ sau.", answer: true },
                    { text: "c) Sử học chỉ có nhiệm vụ ghi chép lại các sự kiện mà không cần tổng kết thực tiễn.", answer: false },
                    { text: "d) Thông qua tổng kết thực tiễn, Sử học rút ra bài học kinh nghiệm cho cuộc sống hiện tại.", answer: true }
                ]},
                { type: 'tf', text: "Đánh giá về đối tượng nghiên cứu của Sử học:[cite: 17]", options: [
                    { text: "a) Đối tượng nghiên cứu của Sử học là toàn bộ quá khứ của loài người.", answer: true },
                    { text: "b) Sử học chỉ nghiên cứu lịch sử của các quốc gia lớn.", answer: false },
                    { text: "c) Quá khứ của một cá nhân, một nhóm người hay cộng đồng người đều là đối tượng của Sử học.", answer: true },
                    { text: "d) Sử học tập trung nghiên cứu sự sống ngoài Trái Đất.", answer: false }
                ]},
                { type: 'tf', text: "Về khoảng cách trong nhận thức lịch sử:[cite: 15]", options: [
                    { text: "a) Khoảng cách nhận thức phát sinh do mức độ phong phú và xác thực của thông tin sử liệu.", answer: true },
                    { text: "b) Thái độ và thế giới quan của nhà sử học ảnh hưởng lớn đến kết quả nghiên cứu.", answer: true },
                    { text: "c) Mọi nhà sử học đều có chung một nhận thức tuyệt đối giống nhau về một sự kiện.", answer: false },
                    { text: "d) Khoảng cách này có thể được thu hẹp nhờ phương pháp nghiên cứu khoa học và sử liệu xác thực.", answer: true }
                ]},
                { type: 'tf', text: "Về các hình thức tái hiện lịch sử:[cite: 15]", options: [
                    { text: "a) Lịch sử chỉ có thể được tái hiện qua các văn bản ghi chép của nhà nước.", answer: false },
                    { text: "b) Thực hành các nghi lễ, phong tục cũng là một cách tái hiện lịch sử.", answer: true },
                    { text: "c) Việc xây dựng đài tưởng niệm không thuộc phạm trù nhận thức lịch sử.", answer: false },
                    { text: "d) Nghiên cứu khoa học là một hình thức nhận thức và tái hiện lịch sử cấp cao.", answer: true }
                ]},
                { type: 'tf', text: "Vai trò của người nghiên cứu lịch sử:[cite: 15]", options: [
                    { text: "a) Đạo đức của người nghiên cứu đóng vai trò quan trọng trong việc trình bày lịch sử.", answer: true },
                    { text: "b) Người nghiên cứu có quyền tự do bóp méo hiện thực lịch sử theo ý muốn cá nhân.", answer: false },
                    { text: "c) Năng lực của người tìm hiểu lịch sử quyết định chất lượng của nhận thức lịch sử.", answer: true },
                    { text: "d) Việc thiếu hụt tư liệu không ảnh hưởng đến kết luận của nhà nghiên cứu.", answer: false }
                ]},
                { type: 'tf', text: "Về tính khách quan của hiện thực lịch sử:[cite: 15]", options: [
                    { text: "a) Hiện thực lịch sử là những sự thật đã diễn ra và không thể thay đổi.", answer: true },
                    { text: "b) Tính khách quan của hiện thực lịch sử phụ thuộc vào thế giới quan của con người.", answer: false },
                    { text: "c) Dù con người có nhận thức được hay không, hiện thực lịch sử vẫn tồn tại độc lập.", answer: true },
                    { text: "d) Hiện thực lịch sử có thể bị xóa bỏ nếu không có ai ghi chép lại.", answer: false }
                ]},
                { type: 'tf', text: "Sự phân biệt giữa hai khái niệm lịch sử:[cite: 15]", options: [
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
                { type: 'mcq', text: "Người xưa thường dùng câu nói nào để nhấn mạnh sự cần thiết của việc tìm hiểu quá khứ?[cite: 19]", options: ["'Học thầy không tày học bạn'.", "'Ôn cố, tri tân' (Ôn cũ, biết mới).", "'Tiên học lễ, hậu học văn'.", "'Uống nước nhớ nguồn'."], answer: 1 },
                { type: 'mcq', text: "Việc học tập, khám phá lịch sử suốt đời nhằm mục đích gì?[cite: 19, 20]", options: ["Chỉ để vượt qua các kì thi trong trường học.", "Để hiểu biết hiện tại, dự đoán và có niềm tin vào tương lai.", "Để phục hồi lại chế độ phong kiến.", "Để trở thành nhà báo chuyên nghiệp."], answer: 1 },
                { type: 'mcq', text: "Sử liệu là gì?[cite: 22]", options: ["Toàn bộ những hình thức khác nhau của tư liệu lịch sử, chứa đựng thông tin về quá khứ.", "Chỉ là những cuốn sách lịch sử được in ấn hiện nay.", "Là những công cụ lao động cổ đại.", "Là những di tích lịch sử ngoài trời."], answer: 0 },
                { type: 'mcq', text: "Hai nhiệm vụ cơ bản của công tác chuẩn bị sử liệu là gì?[cite: 22, 23]", options: ["Sưu tầm, thu thập và Xử lí thông tin sử liệu.", "Dịch thuật và Xuất bản.", "Đọc sách và Làm bài kiểm tra.", "Khảo cổ và Phục dựng."], answer: 0 },
                { type: 'mcq', text: "Quá trình phân loại, đánh giá, thẩm định, so sánh nguồn sử liệu được gọi là gì?[cite: 23]", options: ["Sưu tầm sử liệu.", "Thu thập sử liệu.", "Xử lí thông tin sử liệu.", "Bảo quản sử liệu."], answer: 2 },
                { type: 'mcq', text: "Ngoài học tập trên lớp, học sinh có thể tìm hiểu lịch sử hiệu quả qua hình thức nào?[cite: 21]", options: ["Tham quan bảo tàng, di tích lịch sử - văn hoá.", "Chỉ cần nghe kể chuyện ở nhà.", "Học qua các môn tự nhiên.", "Tránh tiếp xúc với sách báo cũ."], answer: 0 },
                { type: 'mcq', text: "Khám phá lịch sử trong kỉ nguyên toàn cầu hoá có vai trò gì quan trọng?[cite: 20]", options: ["Giúp cô lập đất nước để bảo vệ bản sắc.", "Giúp hội nhập thành công, tôn trọng sự khác biệt đa dạng về văn hóa.", "Xóa bỏ hoàn toàn văn hóa truyền thống.", "Ngăn cản sự phát triển của công nghệ."], answer: 1 },
                { type: 'mcq', text: "Việc tồn tại những khoảng trống, những bí ẩn trong nghiên cứu lịch sử có tác dụng gì?[cite: 20]", options: ["Làm cho lịch sử trở nên nhàm chán.", "Thôi thúc con người tham gia tìm tòi, khám phá để hoàn chỉnh nhận thức.", "Chứng minh rằng sử học không phải là khoa học.", "Ngăn cản sự phát triển của tri thức."], answer: 1 },
                { type: 'mcq', text: "Sản phẩm cuối cùng của khoa học Lịch sử (Sử học) là gì?[cite: 23]", options: ["Những cổ vật được tìm thấy.", "Nhận thức khoa học về hiện thực lịch sử.", "Những bộ phim dã sử.", "Các đài tưởng niệm."], answer: 1 },
                { type: 'mcq', text: "Trong cuộc sống hằng ngày, tri thức lịch sử giúp con người điều gì?[cite: 20]", options: ["Dự đoán chính xác các sự kiện tự nhiên.", "Vận dụng kinh nghiệm từ quá khứ vào hiện tại, định hướng tương lai.", "Chữa khỏi các căn bệnh hiểm nghèo.", "Thay đổi được hiện thực lịch sử đã qua."], answer: 1 }
            ],
            tf: [
                { type: 'tf', text: "Về sự cần thiết của việc khám phá lịch sử suốt đời:[cite: 19, 20]", options: [
                    { text: "a) Hiện tại luôn kế thừa và được xây dựng trên nền tảng của quá khứ.", answer: true },
                    { text: "b) Học tập lịch sử chỉ cần thiết đối với học sinh phổ thông.", answer: false },
                    { text: "c) Khám phá lịch sử giúp chúng ta rút ra những kinh nghiệm và bài học có giá trị.", answer: true },
                    { text: "d) Việc tìm hiểu cội nguồn là một nhu cầu tự thân của con người từ thuở xa xưa.", answer: true }
                ]},
                { type: 'tf', text: "Về công tác xử lí thông tin sử liệu:[cite: 23]", options: [
                    { text: "a) Xử lí thông tin sử liệu là quá trình phân loại, đánh giá và thẩm định sử liệu.", answer: true },
                    { text: "b) Công đoạn này nhằm xác định tính xác thực, độ tin cậy và giá trị của sử liệu.", answer: true },
                    { text: "c) Chỉ cần thu thập sử liệu là có thể lập tức đưa ra kết luận lịch sử chính xác.", answer: false },
                    { text: "d) So sánh nguồn sử liệu đã thu thập được là một phần của quá trình xử lí thông tin.", answer: true }
                ]},
                { type: 'tf', text: "Về kết nối lịch sử với cuộc sống:[cite: 21, 22]", options: [
                    { text: "a) Việc học tập lịch sử chỉ diễn ra duy nhất trong các giờ học trên lớp.", answer: false },
                    { text: "b) Mỗi ngôi nhà, con phố, đình, chùa đều có thể là những chứng nhân lịch sử.", answer: true },
                    { text: "c) Vận dụng bài học lịch sử giúp giải thích các vấn đề thời sự và tránh sai lầm trong quá khứ.", answer: true },
                    { text: "d) Tri thức lịch sử có thể là nguồn cảm hứng cho các ngành công nghiệp văn hóa, du lịch.", answer: true }
                ]},
                { type: 'tf', text: "Về các nguồn sử liệu:[cite: 22, 23]", options: [
                    { text: "a) Sử liệu chỉ bao gồm các văn bản ghi chép của nhà nước phong kiến.", answer: false },
                    { text: "b) Sử liệu là toàn bộ những hình thức khác nhau của tư liệu lịch sử chứa đựng thông tin quá khứ.", answer: true },
                    { text: "c) Các nguồn sử liệu sưu tầm càng đa dạng, đầy đủ thì quá trình phục dựng lịch sử càng khách quan.", answer: true },
                    { text: "d) Tờ báo cũ, tiền đồng, hoa văn trên mái ngói cũng được coi là sử liệu.", answer: true }
                ]},
                { type: 'tf', text: "Về lịch sử và quá trình hội nhập toàn cầu:[cite: 20]", options: [
                    { text: "a) Hiểu biết lịch sử giúp chúng ta tôn trọng sự khác biệt và đa dạng văn hóa.", answer: true },
                    { text: "b) Hội nhập toàn cầu đòi hỏi phải xóa bỏ hoàn toàn bản sắc văn hóa dân tộc.", answer: false },
                    { text: "c) Lịch sử giúp chúng ta chủ động tiếp thu có chọn lọc thành tựu nhân loại.", answer: true },
                    { text: "d) Hiểu biết về văn hóa, lịch sử các nước giúp Việt Nam hội nhập thành công.", answer: true }
                ]},
                { type: 'tf', text: "Về bí ẩn trong nghiên cứu lịch sử:[cite: 20]", options: [
                    { text: "a) Mọi sự kiện lịch sử trên thế giới đều đã được giải thích chính xác 100%.", answer: false },
                    { text: "b) Việc tồn tại các khoảng trống lịch sử là cơ hội thôi thúc con người khám phá.", answer: true },
                    { text: "c) Cách xây dựng Kim tự tháp Ai Cập là một ví dụ về bí ẩn lịch sử chưa được giải đáp hoàn toàn.", answer: true },
                    { text: "d) Những bí ẩn lịch sử làm giảm đi giá trị khoa học của bộ môn Lịch sử.", answer: false }
                ]},
                { type: 'tf', text: "Về nhiệm vụ của nhà sử học:[cite: 23]", options: [
                    { text: "a) Nhà sử học phải dùng các phương pháp khoa học để tìm kiếm và xử lí tư liệu.", answer: true },
                    { text: "b) Có thể dùng trí tưởng tượng để lấp đầy những chỗ thiếu hụt của tư liệu.", answer: false },
                    { text: "c) Cần tái hiện sự kiện một cách khách quan, trung thực và toàn diện.", answer: true },
                    { text: "d) Phải xem xét sự kiện trong các mối liên hệ lịch đại và đồng đại.", answer: true }
                ]},
                { type: 'tf', text: "Về phương thức lưu truyền lịch sử:[cite: 20]", options: [
                    { text: "a) Khắc họa trên vách đá là một trong những hình thức lưu giữ kinh nghiệm xa xưa.", answer: true },
                    { text: "b) Việc lập gia phả và thực hành nghi lễ cũng là cách truyền lại truyền thống cộng đồng.", answer: true },
                    { text: "c) Các tác phẩm sử thi không chứa đựng bất kỳ thông tin lịch sử nào.", answer: false },
                    { text: "d) Các ghi chép thư tịch và công trình nghiên cứu là những hình thức bảo tồn lịch sử tiến bộ.", answer: true }
                ]},
                { type: 'tf', text: "Đánh giá tầm quan trọng của tri thức lịch sử:[cite: 21, 22]", options: [
                    { text: "a) Chỉ những người làm nghề nghiên cứu mới cần đến tri thức lịch sử.", answer: false },
                    { text: "b) Tri thức lịch sử mang lại cơ hội nghề nghiệp mới trong nhiều lĩnh vực.", answer: true },
                    { text: "c) Tri thức lịch sử giúp cộng đồng định vị được bản sắc của mình trong thế giới hiện đại.", answer: true },
                    { text: "d) Thiếu tri thức lịch sử, con người sẽ không có nền tảng vững chắc để hướng tới tương lai.", answer: true }
                ]},
                { type: 'tf', text: "Về mối quan hệ giữa quá khứ, hiện tại và tương lai:[cite: 19]", options: [
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
                { type: 'mcq', text: "Di sản văn hoá, di sản thiên nhiên được đánh giá là loại tài sản mang tính chất gì?[cite: 24]", options: ["Có thể dễ dàng thay thế bằng công nghệ mới.", "Là những tài sản vô giá và không thể thay thế của dân tộc và nhân loại.", "Chỉ có giá trị về mặt kinh tế ngắn hạn.", "Thuộc sở hữu riêng của các nhà sử học."], answer: 1 },
                { type: 'mcq', text: "Vai trò quan trọng nhất của Sử học đối với công tác bảo tồn di sản văn hóa là gì?[cite: 24, 25]", options: ["Cung cấp nguồn tài chính để trùng tu di sản.", "Sử dụng phương pháp nghiên cứu để khẳng định giá trị của di sản, làm cơ sở bảo tồn.", "Thay đổi nguyên trạng di sản để phù hợp với thời đại mới.", "Tổ chức các chuyến tham quan du lịch."], answer: 1 },
                { type: 'mcq', text: "Yêu cầu cốt lõi trong công tác bảo tồn di sản văn hóa là gì?[cite: 25]", options: ["Làm mới toàn bộ công trình để tăng tính thẩm mỹ.", "Đảm bảo tính nguyên trạng, giữ được 'yếu tố gốc cấu thành di tích'.", "Phá bỏ các phần cũ kĩ để xây dựng lại bằng bê tông.", "Chỉ bảo tồn các di sản phi vật thể."], answer: 1 },
                { type: 'mcq', text: "Công tác bảo tồn di sản văn hóa phi vật thể được thực hiện thông qua biện pháp nào?[cite: 26]", options: ["Xây dựng các hàng rào bảo vệ vững chắc.", "Sưu tầm, lưu giữ, truyền dạy và trình diễn.", "Cấm người dân thực hành các di sản đó.", "Đúc thành các tượng đài bằng đồng."], answer: 1 },
                { type: 'mcq', text: "Đối với di sản thiên nhiên, công tác bảo tồn có vai trò gì?[cite: 26]", options: ["Chỉ để khai thác khoáng sản.", "Góp phần phát triển đa dạng sinh học, làm tăng giá trị khoa học của di sản.", "Ngăn cấm hoàn toàn sự tiếp cận của con người.", "San lấp để xây dựng khu công nghiệp."], answer: 1 },
                { type: 'mcq', text: "Nguồn tài nguyên quý báu nhất của du lịch văn hóa là gì?[cite: 27]", options: ["Các trung tâm thương mại sầm uất.", "Những giá trị về lịch sử và văn hóa của mỗi dân tộc.", "Hệ thống nhà hàng, khách sạn hiện đại.", "Các phương tiện giao thông tốc độ cao."], answer: 1 },
                { type: 'mcq', text: "Sự phát triển của du lịch có tác động như thế nào đối với công tác bảo tồn di tích lịch sử - văn hóa?[cite: 28]", options: ["Làm suy giảm hoàn toàn giá trị của di tích.", "Thúc đẩy việc bảo vệ di sản, tạo ra nguồn doanh thu để tái đầu tư vào bảo tồn.", "Gây ra sự phá hủy hàng loạt các di sản phi vật thể.", "Không có tác động gì đến di tích lịch sử."], answer: 1 },
                { type: 'mcq', text: "Tài nguyên du lịch văn hóa bao gồm những gì?[cite: 27]", options: ["Chỉ bao gồm các bãi biển tự nhiên.", "Chỉ bao gồm các hang động.", "Di tích lịch sử, khảo cổ, kiến trúc, lễ hội, văn nghệ dân gian.", "Các khu công nghiệp kĩ thuật cao."], answer: 2 },
                { type: 'mcq', text: "Mối quan hệ giữa phát triển du lịch và bảo tồn di sản là mối quan hệ như thế nào?[cite: 28]", options: ["Đối lập hoàn toàn, không thể song hành.", "Tương tác hai chiều, hỗ trợ lẫn nhau.", "Chỉ có du lịch tác động đến di sản, chiều ngược lại không có.", "Hoàn toàn độc lập, không ảnh hưởng nhau."], answer: 1 },
                { type: 'mcq', text: "Việc ứng dụng phương pháp nghiên cứu của Sử học (có tính liên ngành) vào di sản nhằm mục đích chính là gì?[cite: 24]", options: ["Khẳng định giá trị nhiều mặt (lịch sử, văn hóa, kiến trúc) của di sản đó.", "Xóa bỏ các ghi chép cũ.", "Tìm kiếm kho báu ẩn giấu.", "Tranh giành quyền sở hữu di sản."], answer: 0 }
            ],
            tf: [
                { type: 'tf', text: "Về giá trị của di sản văn hóa, di sản thiên nhiên:[cite: 24]", options: [
                    { text: "a) Sự biến mất của bất kì di sản nào cũng làm nghèo đi kho tàng di sản của thế giới.", answer: true },
                    { text: "b) Di sản chỉ mang lại giá trị kiến trúc mà không có giá trị lịch sử.", answer: false },
                    { text: "c) Giá trị của di sản thể hiện ở nhiều khía cạnh: lịch sử, văn hóa, cảnh quan thiên nhiên.", answer: true },
                    { text: "d) Di sản là tài sản vô giá và không thể thay thế.", answer: true }
                ]},
                { type: 'tf', text: "Về công tác bảo tồn di sản vật thể:[cite: 25, 26]", options: [
                    { text: "a) Sử học cung cấp cơ sở khoa học vững chắc để bảo tồn di sản.", answer: true },
                    { text: "b) Yêu cầu cốt lõi là phải đảm bảo 'tính xác thực' và 'tính toàn vẹn' của di tích.", answer: true },
                    { text: "c) Cần đập bỏ toàn bộ các di tích bằng gỗ đã cũ để xây lại bằng vật liệu mới bền hơn.", answer: false },
                    { text: "d) Công tác bảo tồn giúp hạn chế tác động tiêu cực của tự nhiên và con người lên di sản.", answer: true }
                ]},
                { type: 'tf', text: "Về bảo tồn di sản phi vật thể:[cite: 26]", options: [
                    { text: "a) Di sản phi vật thể không phải đối mặt với bất cứ nguy cơ mai một nào.", answer: false },
                    { text: "b) Các biện pháp bảo tồn bao gồm sưu tầm, lưu giữ, truyền dạy và trình diễn.", answer: true },
                    { text: "c) Thông qua việc truyền dạy, di sản được lưu truyền từ thế hệ này sang thế hệ khác.", answer: true },
                    { text: "d) Hát Xoan (Phú Thọ) là một ví dụ về di sản phi vật thể cần được bảo tồn và truyền dạy.", answer: true }
                ]},
                { type: 'tf', text: "Về vai trò của lịch sử đối với du lịch:[cite: 27]", options: [
                    { text: "a) Các khía cạnh văn hóa, lịch sử chiếm tỉ trọng lớn trong giá trị du lịch của nhiều khu vực.", answer: true },
                    { text: "b) Di sản lịch sử độc đáo là nhân tố chính thu hút khách du lịch.", answer: true },
                    { text: "c) Lịch sử và văn hóa không mang lại lợi ích kinh tế cho ngành du lịch.", answer: false },
                    { text: "d) Hoàng thành Thăng Long là một ví dụ về di tích lịch sử thu hút lượng lớn khách tham quan.", answer: true }
                ]},
                { type: 'tf', text: "Về tác động của du lịch đối với di sản:[cite: 28]", options: [
                    { text: "a) Nhu cầu tham quan của du khách thôi thúc chính quyền quan tâm hơn đến việc giữ gìn di tích.", answer: true },
                    { text: "b) Một phần doanh thu từ du lịch được tái đầu tư vào việc bảo tồn, tôn tạo di tích.", answer: true },
                    { text: "c) Phát triển du lịch văn hóa luôn làm phá hủy hoàn toàn cảnh quan tự nhiên của di sản.", answer: false },
                    { text: "d) Du lịch thúc đẩy việc phục dựng và trình diễn các di sản văn hóa phi vật thể.", answer: true }
                ]},
                { type: 'tf', text: "Về tính nguyên trạng trong bảo tồn:[cite: 25]", options: [
                    { text: "a) Bảo tồn tính nguyên trạng nghĩa là giữ gìn tối đa các yếu tố gốc cấu thành di tích.", answer: true },
                    { text: "b) Được phép tùy tiện thay đổi kiểu dáng kiến trúc di tích để phù hợp với thị hiếu du khách.", answer: false },
                    { text: "c) Kết quả nghiên cứu Sử học giúp xác định chính xác đâu là yếu tố gốc cần giữ lại.", answer: true },
                    { text: "d) Đảm bảo tính nguyên trạng giúp di sản phát huy giá trị một cách bền vững.", answer: true }
                ]},
                { type: 'tf', text: "Về tài nguyên du lịch văn hóa:[cite: 27]", options: [
                    { text: "a) Bao gồm di tích lịch sử, kiến trúc, công trình sáng tạo của con người.", answer: true },
                    { text: "b) Chỉ có các giá trị vật chất mới được coi là tài nguyên du lịch.", answer: false },
                    { text: "c) Lễ hội và văn nghệ dân gian cũng là nguồn tài nguyên du lịch quan trọng.", answer: true },
                    { text: "d) Tại châu Âu, bảo tàng và các thành phố lịch sử là điểm đến du lịch chính.", answer: true }
                ]},
                { type: 'tf', text: "Về phát triển bền vững di sản:[cite: 25, 26]", options: [
                    { text: "a) Bảo tồn di sản chỉ nhằm mục đích phục vụ nghiên cứu khoa học, không quan tâm lợi ích kinh tế.", answer: false },
                    { text: "b) Phát huy giá trị di sản góp phần phát triển kinh tế - xã hội địa phương.", answer: true },
                    { text: "c) Cần giải quyết hài hòa mối quan hệ giữa bảo tồn di sản và phát triển du lịch.", answer: true },
                    { text: "d) Chăm lo bảo tồn di sản là chăm lo nguồn lực cốt lõi cho sự phát triển của ngành du lịch.", answer: true }
                ]},
                { type: 'tf', text: "Đánh giá vai trò của Sử học có tính liên ngành:[cite: 24]", options: [
                    { text: "a) Sử học phối hợp với các ngành khác (khảo cổ, kiến trúc) để đánh giá toàn diện di sản.", answer: true },
                    { text: "b) Sử học hoạt động hoàn toàn độc lập, từ chối mọi phương pháp của khoa học tự nhiên.", answer: false },
                    { text: "c) Tính liên ngành giúp khẳng định chính xác giá trị nổi bật của di sản.", answer: true },
                    { text: "d) Phương pháp nghiên cứu lịch sử đóng vai trò quan trọng nhất trong việc thẩm định di sản.", answer: true }
                ]},
                { type: 'tf', text: "Về di sản thiên nhiên:[cite: 26]", options: [
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
                { type: 'mcq', text: "Văn minh được định nghĩa là gì?[cite: 29]", options: ["Là quá trình tiến hóa từ vượn thành người.", "Là sự tiến bộ về vật chất và tinh thần, là trạng thái phát triển cao của nền văn hóa, vượt qua thời kì dã man.", "Là những giá trị văn hóa được giữ nguyên từ thời nguyên thủy.", "Là khái niệm chỉ dùng để chỉ sự giàu có về kinh tế."], answer: 1 },
                { type: 'mcq', text: "Một trong những tiêu chuẩn cơ bản để nhận diện văn minh là sự xuất hiện của yếu tố nào?[cite: 29]", options: ["Công cụ bằng đá.", "Lửa.", "Nhà nước, đô thị và chữ viết.", "Săn bắt, hái lượm."], answer: 2 },
                { type: 'mcq', text: "Điểm khác biệt cơ bản giữa văn hóa và văn minh là gì?[cite: 30]", options: ["Văn hóa ra đời sau văn minh.", "Văn hóa xuất hiện đồng thời với loài người, còn văn minh chỉ sáng tạo trong thời kì phát triển cao của xã hội.", "Văn hóa chỉ có yếu tố vật chất, văn minh chỉ có yếu tố tinh thần.", "Văn minh tạo ra bản sắc của một dân tộc, còn văn hóa thì không."], answer: 1 },
                { type: 'mcq', text: "Văn minh Ai Cập cổ đại hình thành và phát triển gắn liền với dòng sông nào?[cite: 30]", options: ["Sông Hoàng Hà.", "Sông Hằng.", "Sông Nin.", "Sông Ti-grơ."], answer: 2 },
                { type: 'mcq', text: "Người Ai Cập cổ đại đã sáng tạo ra loại chữ viết nào từ khoảng hơn 3000 năm TCN?[cite: 31]", options: ["Chữ Quốc ngữ.", "Chữ tượng hình.", "Chữ Phạn.", "Chữ giáp cốt."], answer: 1 },
                { type: 'mcq', text: "Trong Toán học, người Ai Cập cổ đại đã biết tính giá trị số pi (π) bằng bao nhiêu?[cite: 31]", options: ["3,14", "3,1416", "3,16", "3,14159"], answer: 2 },
                { type: 'mcq', text: "Đóng góp quan trọng nhất của Toán học Ấn Độ cổ đại cho kho tàng tri thức nhân loại là gì?[cite: 34]", options: ["Tính diện tích hình tròn.", "Phát minh ra phép tính vi phân.", "Sáng tạo ra 10 chữ số mà ngày nay chúng ta đang sử dụng.", "Phát minh ra máy tính cơ học."], answer: 2 },
                { type: 'mcq', text: "Tác phẩm sử học nào là bộ biên niên sử đầu tiên của Trung Hoa?[cite: 37]", options: ["Sử kí (Tư Mã Thiên).", "Xuân Thu.", "Tam quốc chí.", "Tư trị thông giám."], answer: 1 },
                { type: 'mcq', text: "Bốn phát minh lớn về kĩ thuật của văn minh Trung Hoa bao gồm:[cite: 37]", options: ["Bàn tính, thuốc súng, la bàn, kĩ thuật in.", "Kĩ thuật làm giấy, kĩ thuật in, thuốc súng, la bàn.", "Kĩ thuật luyện thép, kĩ thuật làm giấy, máy hơi nước, la bàn.", "Động cơ đốt trong, thuốc súng, kĩ thuật in, làm giấy."], answer: 1 },
                { type: 'mcq', text: "Hai bộ sử thi nổi tiếng nhất đặt nền móng cho văn học Ấn Độ là gì?[cite: 33]", options: ["I-li-át và Ô-đi-xê.", "Ma-ha-bha-ra-ta và Ra-ma-y-a-na.", "Thần khúc và Mười ngày.", "Tây du kí và Hồng lâu mộng."], answer: 1 }
            ],
            tf: [
                { type: 'tf', text: "Về khái niệm Văn hóa và Văn minh:[cite: 29, 30]", options: [
                    { text: "a) Văn hóa là tổng thể những giá trị vật chất và tinh thần mà con người sáng tạo nên.", answer: true },
                    { text: "b) Văn minh và Văn hóa là hai khái niệm hoàn toàn đồng nhất, có thể dùng thay thế nhau trong mọi trường hợp.", answer: false },
                    { text: "c) Văn hóa tạo ra đặc tính, bản sắc của một xã hội hoặc nhóm người.", answer: true },
                    { text: "d) Sự xuất hiện của nhà nước và chữ viết là tiêu chuẩn để nhận diện văn minh.", answer: true }
                ]},
                { type: 'tf', text: "Về văn minh Ai Cập cổ đại:[cite: 31]", options: [
                    { text: "a) Người Ai Cập sử dụng hệ số thập phân và tính được diện tích tam giác, chữ nhật.", answer: true },
                    { text: "b) Kĩ thuật ướp xác của Ai Cập cổ đại phản ánh những hiểu biết sâu sắc về giải phẫu y học.", answer: true },
                    { text: "c) Người Ai Cập không có hiểu biết gì về Thiên văn học.", answer: false },
                    { text: "d) Chữ viết của người Ai Cập cổ đại đã được giải mã thành công nhờ tấm bia đá Rô-sét-ta.", answer: true }
                ]},
                { type: 'tf', text: "Về kiến trúc Ai Cập cổ đại:[cite: 31, 32]", options: [
                    { text: "a) Cung điện, đền thờ và kim tự tháp là các loại hình kiến trúc tiêu biểu nhất.", answer: true },
                    { text: "b) Quần thể kim tự tháp và tượng Nhân sư ở Ghi-da là công trình điêu khắc, kiến trúc nổi tiếng nhất.", answer: true },
                    { text: "c) Các công trình kiến trúc Ai Cập chủ yếu được xây dựng bằng gỗ và lá cọ.", answer: false },
                    { text: "d) Nắp quan tài bằng vàng của pha-ra-ông Tu-tan-kha-mun là một kiệt tác điêu khắc.", answer: true }
                ]},
                { type: 'tf', text: "Về tôn giáo, tư tưởng Ấn Độ:[cite: 32, 33]", options: [
                    { text: "a) Ấn Độ là quê hương của hai tôn giáo có ảnh hưởng sâu rộng là Hin-đu giáo và Phật giáo.", answer: true },
                    { text: "b) Phật giáo hình thành từ giữa thiên niên kỉ I TCN và phát triển hưng thịnh ở Ấn Độ cho đến nay.", answer: false },
                    { text: "c) Hin-đu giáo hình thành trên cơ sở của Bà La Môn giáo.", answer: true },
                    { text: "d) Tôn giáo Ấn Độ đã lan tỏa ra bên ngoài và để lại nhiều dấu ấn trong lịch sử nhân loại.", answer: true }
                ]},
                { type: 'tf', text: "Về văn học và nghệ thuật Ấn Độ:[cite: 33, 34]", options: [
                    { text: "a) Kinh Vê-đa là một trong những thành tựu văn học rực rỡ của Ấn Độ.", answer: true },
                    { text: "b) Nghệ thuật kiến trúc, điêu khắc Ấn Độ hoàn toàn không chịu ảnh hưởng của tôn giáo.", answer: false },
                    { text: "c) Các công trình tiêu biểu bao gồm chùa, tháp Phật giáo, đền thờ Hin-đu giáo và lăng mộ Hồi giáo.", answer: true },
                    { text: "d) Lăng Ta-giơ Ma-han là một công trình kiến trúc vĩ đại của Ấn Độ.", answer: true }
                ]},
                { type: 'tf', text: "Về khoa học Ấn Độ cổ - trung đại:[cite: 34]", options: [
                    { text: "a) Người Ấn Độ đã tính được giá trị của số pi (π) là 3,1416.", answer: true },
                    { text: "b) Người Ấn Độ chưa có bất cứ hiểu biết nào về Vũ trụ và Mặt Trời.", answer: false },
                    { text: "c) Về Vật lý, người Ấn Độ đã nêu ra thuyết nguyên tử và lực hấp dẫn của Trái Đất.", answer: true },
                    { text: "d) Y học Ấn Độ biết dùng phẫu thuật để chắp xương sọ, lấy sỏi thận.", answer: true }
                ]},
                { type: 'tf', text: "Về tư tưởng, tôn giáo Trung Hoa:[cite: 35]", options: [
                    { text: "a) Nho giáo, Đạo giáo, Pháp gia là những hệ tư tưởng nền tảng của người Trung Hoa.", answer: true },
                    { text: "b) Phật giáo có nguồn gốc từ Trung Hoa và lan tỏa sang Ấn Độ.", answer: false },
                    { text: "c) Các học thuyết tư tưởng Trung Hoa hình thành từ rất sớm để giải thích thế giới và đề xướng biện pháp cai trị.", answer: true },
                    { text: "d) Tư tưởng Trung Hoa có ảnh hưởng sâu sắc đến Việt Nam, Nhật Bản, Triều Tiên.", answer: true }
                ]},
                { type: 'tf', text: "Về chữ viết và văn học Trung Hoa:[cite: 35, 36]", options: [
                    { text: "a) Chữ giáp cốt và kim văn là những loại hình chữ viết cổ nhất xuất hiện từ thời nhà Thương.", answer: true },
                    { text: "b) Chữ viết Trung Hoa đã được nâng tầm lên thành nghệ thuật thư pháp.", answer: true },
                    { text: "c) Thơ ca thời Đường và tiểu thuyết chương hồi thời Minh - Thanh là những thành tựu văn học tiêu biểu.", answer: true },
                    { text: "d) Tác phẩm Tam quốc diễn nghĩa, Tây du kí thuộc thể loại sử thi truyền miệng.", answer: false }
                ]},
                { type: 'tf', text: "Về kiến trúc và khoa học Trung Hoa:[cite: 36, 37]", options: [
                    { text: "a) Vạn Lý Trường Thành, Tử Cấm Thành là những công trình kiến trúc nổi tiếng nhất của Trung Hoa.", answer: true },
                    { text: "b) Trong Toán học, người Trung Hoa lần đầu tiên tính được số pi chính xác tới 7 chữ số thập phân.", answer: true },
                    { text: "c) Hoa Đà và Trương Trọng Cảnh là những vị tướng quân nổi tiếng thời phong kiến.", answer: false },
                    { text: "d) Bốn phát minh lớn (giấy, in, thuốc súng, la bàn) của Trung Quốc có ảnh hưởng rộng lớn đến châu Âu.", answer: true }
                ]},
                { type: 'tf', text: "Đánh giá chung về các nền văn minh phương Đông:[cite: 30, 37, 38]", options: [
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
                { type: 'mcq', text: "Văn minh Hy Lạp - La Mã thời cổ đại hình thành ở khu vực nào?[cite: 39]", options: ["Lưu vực các con sông lớn ở châu Á.", "Bán đảo Nam Âu ven bờ Địa Trung Hải.", "Khu vực Bắc Âu lạnh giá.", "Các hòn đảo ở Thái Bình Dương."], answer: 1 },
                { type: 'mcq', text: "Loại chữ viết nào do người La Mã xây dựng (dựa trên chữ Hy Lạp) và trở nên phổ biến nhất thế giới hiện nay?[cite: 39]", options: ["Chữ tượng hình.", "Chữ hình nêm.", "Chữ La-tinh.", "Chữ Kirin (Cyrillic)."], answer: 2 },
                { type: 'mcq', text: "Hai bộ sử thi nổi tiếng đặt nền móng cho văn học Hy Lạp - La Mã cổ đại là gì?[cite: 40]", options: ["I-li-át và Ô-đi-xê.", "Thần khúc và Cuộc đời mới.", "Tam quốc diễn nghĩa và Thủy hử.", "Ma-ha-bha-ra-ta và Ra-ma-y-a-na."], answer: 0 },
                { type: 'mcq', text: "Công trình kiến trúc nào sau đây là biểu tượng tiêu biểu của văn minh La Mã cổ đại?[cite: 40]", options: ["Đền Pác-tê-nông.", "Đấu trường Cô-li-dê (Colosseum).", "Lăng Ta-giơ Ma-han.", "Kim tự tháp."], answer: 1 },
                { type: 'mcq', text: "Ai được coi là 'cha đẻ của nền Y học phương Tây'?[cite: 41]", options: ["Hi-pô-crát (Hippocrates).", "Pi-ta-go (Pythagoras).", "Ác-si-mét (Archimedes).", "O-cơ-lít (Euclid)."], answer: 0 },
                { type: 'mcq', text: "Đại hội thể thao Ô-lim-píc thời cổ đại được tổ chức lần đầu tiên vào năm 776 TCN tại đâu?[cite: 43]", options: ["Thành Rô-ma (La Mã).", "Thành A-ten.", "Đền thờ thần Dớt ở Ô-lim-pi-a (Hy Lạp).", "Thành Xpác."], answer: 2 },
                { type: 'mcq', text: "Phong trào Văn hóa Phục hưng (thế kỉ XIV - XVII) bắt nguồn từ đâu?[cite: 43]", options: ["Nước Pháp.", "Nước Anh.", "I-ta-li-a.", "Tây Ban Nha."], answer: 2 },
                { type: 'mcq', text: "Tác giả của kiệt tác hội họa 'Nàng Mô-na Li-sa' và 'Bữa tiệc cuối cùng' là ai?[cite: 44]", options: ["Mi-ken-lăng-giơ (Michelangelo).", "Ra-pha-en (Raphael).", "Lê-ô-na đờ Vanh-xi (Leonardo da Vinci).", "Uy-li-am Sếch-xpia (William Shakespeare)."], answer: 2 },
                { type: 'mcq', text: "Nhà khoa học nào thời Phục hưng đã đưa ra thuyết 'Nhật tâm' khẳng định Mặt Trời là trung tâm của vũ trụ?[cite: 44]", options: ["Ga-li-lê-ô Ga-li-lê.", "Gioóc-đa-nô Bru-nô.", "Ni-cô-lai Cô-péc-ních.", "Đê-các-tơ."], answer: 2 },
                { type: 'mcq', text: "Mục tiêu đấu tranh cốt lõi của phong trào Văn hóa Phục hưng là gì?[cite: 45]", options: ["Chống lại sự xâm lược của các đế quốc phương Đông.", "Đấu tranh công khai chống lại chế độ phong kiến lỗi thời và Giáo hội Cơ Đốc giáo, đề cao giá trị con người.", "Khôi phục lại chế độ nô lệ thời cổ đại.", "Lan truyền Phật giáo vào châu Âu."], answer: 1 }
            ],
            tf: [
                { type: 'tf', text: "Về chữ viết và văn học Hy Lạp - La Mã cổ đại:[cite: 39, 40]", options: [
                    { text: "a) Bảng chữ cái La-tinh có nguồn gốc từ chữ viết của người Hy Lạp.", answer: true },
                    { text: "b) Người La Mã đã sáng tạo ra hệ thống chữ số I, II, III, IV, X, C, M... vẫn dùng đến ngày nay.", answer: true },
                    { text: "c) Văn học Hy Lạp - La Mã hoàn toàn vắng bóng các tác phẩm kịch và thơ.", answer: false },
                    { text: "d) Nguồn cảm hứng phong phú của văn học Hy Lạp - La Mã cổ đại bắt nguồn từ thần thoại.", answer: true }
                ]},
                { type: 'tf', text: "Về nghệ thuật kiến trúc, điêu khắc Hy Lạp - La Mã cổ đại:[cite: 40, 41]", options: [
                    { text: "a) Đền Pác-tê-nông là công trình kiến trúc tiêu biểu của nền văn minh La Mã.", answer: false },
                    { text: "b) Tượng thần Vệ nữ thành Mi-lô và Lực sĩ ném đĩa là những kiệt tác điêu khắc xuất sắc.", answer: true },
                    { text: "c) Nghệ thuật của Hy Lạp - La Mã cổ đại có ảnh hưởng sâu sắc tới nghệ thuật phương Tây sau này.", answer: true },
                    { text: "d) Khải hoàn môn Công-xtăng-ti-nút là một công trình tiêu biểu của La Mã.", answer: true }
                ]},
                { type: 'tf', text: "Về khoa học, kĩ thuật Hy Lạp - La Mã cổ đại:[cite: 41]", options: [
                    { text: "a) Người Hy Lạp đã nhận ra Trái Đất hình cầu và biết tính lịch theo chu kì Mặt Trời.", answer: true },
                    { text: "b) Lịch của người La Mã tính được 1 năm có 365 ngày và 1/4 ngày, rất gần với dương lịch ngày nay.", answer: true },
                    { text: "c) Các nhà khoa học Ta-lét, Pi-ta-go, Ác-si-mét là người La Mã.", answer: false },
                    { text: "d) Người Hy Lạp - La Mã đã biết ứng dụng đòn bẩy, máy bơm nước và chế tạo bê tông.", answer: true }
                ]},
                { type: 'tf', text: "Về tư tưởng, tôn giáo thời cổ đại:[cite: 42]", options: [
                    { text: "a) Hy Lạp - La Mã là quê hương của triết học phương Tây với cuộc đấu tranh giữa duy vật và duy tâm.", answer: true },
                    { text: "b) Các vị thần của Hy Lạp - La Mã được mô tả có hình dáng, tính cách hoàn toàn khác biệt với con người.", answer: false },
                    { text: "c) Cơ Đốc giáo (Ki-tô giáo) ra đời vào thế kỉ I tại lãnh thổ đế quốc La Mã.", answer: true },
                    { text: "d) Cơ Đốc giáo ngay từ khi ra đời đã được chính quyền La Mã ủng hộ và phong làm quốc giáo.", answer: false }
                ]},
                { type: 'tf', text: "Về thể thao thời cổ đại:[cite: 42, 43]", options: [
                    { text: "a) Thể thao có vai trò rất mờ nhạt trong đời sống văn hóa Hy Lạp - La Mã.", answer: false },
                    { text: "b) Đại hội Ô-lim-píc cổ đại có 5 môn thi đấu: chạy, nhảy xa, phóng lao, ném đĩa, đấu vật.", answer: true },
                    { text: "c) Phần thưởng cao quý nhất cho người chiến thắng Ô-lim-píc là vòng nguyệt quế kết từ lá ô-liu.", answer: true },
                    { text: "d) Ở La Mã, các đấu trường thường tổ chức các cuộc đấu đẫm máu giữa võ sĩ và dã thú.", answer: true }
                ]},
                { type: 'tf', text: "Về bối cảnh và văn học thời Phục hưng:[cite: 43]", options: [
                    { text: "a) Phong trào nhằm phục hưng những giá trị văn minh Hy Lạp - La Mã cổ đại.", answer: true },
                    { text: "b) Tác phẩm 'Đôn Ki-hô-tê' là tiểu thuyết nổi tiếng của nhà văn Tây Ban Nha Xéc-van-tét.", answer: true },
                    { text: "c) Uy-li-am Sếch-xpia (Anh) là tác giả kiệt xuất trong thể loại kịch (Hăm-lét, Rô-mê-ô và Giu-li-ét).", answer: true },
                    { text: "d) Văn học thời Phục hưng chỉ phát triển duy nhất thể loại thơ ca.", answer: false }
                ]},
                { type: 'tf', text: "Về hội họa, điêu khắc và kiến trúc thời Phục hưng:[cite: 43, 44]", options: [
                    { text: "a) Nghệ thuật Phục hưng đạt đỉnh cao vào thế kỉ XV - XVI với sự đóng góp của các danh họa I-ta-li-a.", answer: true },
                    { text: "b) Bức 'Trường học A-ten' là kiệt tác của danh họa Mi-ken-lăng-giơ.", answer: false },
                    { text: "c) Phong cách kiến trúc Phục hưng chú trọng yếu tố hình học, tính đối xứng và tỉ lệ.", answer: true },
                    { text: "d) Vương cung Thánh đường Thánh Phê-rô là một công trình kiến trúc tiêu biểu thời kì này.", answer: true }
                ]},
                { type: 'tf', text: "Về khoa học, kĩ thuật thời Phục hưng:[cite: 44, 45]", options: [
                    { text: "a) Thành tựu khoa học có ý nghĩa quan trọng trong việc đẩy lùi sự chi phối của Thần học.", answer: true },
                    { text: "b) Ga-li-lê-ô Ga-li-lê đã chế tạo ra kính thiên văn để quan sát bầu trời.", answer: true },
                    { text: "c) Thời kì này Tây Âu chưa biết sử dụng sức nước vào trong sản xuất.", answer: false },
                    { text: "d) Khoa học kĩ thuật đã tạo tiền đề cho sự phát triển của triết học duy vật.", answer: true }
                ]},
                { type: 'tf', text: "Về tư tưởng và ý nghĩa của phong trào Văn hóa Phục hưng:[cite: 45]", options: [
                    { text: "a) Lên án gay gắt Giáo hội Cơ Đốc giáo lũng đoạn và chế độ phong kiến thối nát.", answer: true },
                    { text: "b) Phong trào đề cao quyền lực tuyệt đối của nhà vua và giáo hoàng.", answer: false },
                    { text: "c) Đề cao giá trị con người, quyền tự do cá nhân và tinh thần dân tộc.", answer: true },
                    { text: "d) Là cuộc đấu tranh công khai đầu tiên trên lĩnh vực văn hóa, tư tưởng của giai cấp tư sản.", answer: true }
                ]},
                { type: 'tf', text: "Đánh giá chung về văn minh phương Tây cổ - trung đại:[cite: 31, 37, 45]", options: [
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
                { type: 'mcq', text: "Cách mạng công nghiệp lần thứ nhất bắt đầu diễn ra ở quốc gia nào?[cite: 47]", options: ["Mỹ.", "Pháp.", "Anh.", "Đức."], answer: 2 },
                { type: 'mcq', text: "Thực chất của cuộc Cách mạng công nghiệp lần thứ nhất là gì?[cite: 47]", options: ["Cuộc đấu tranh giành quyền lợi của công nhân.", "Sự nhảy vọt từ lao động thủ công sang lao động bằng máy móc.", "Cuộc cải cách ruộng đất quy mô lớn.", "Sự ra đời của động cơ đốt trong."], answer: 1 },
                { type: 'mcq', text: "Máy kéo sợi Gien-ni (1764) do ai phát minh?[cite: 47]", options: ["Giêm Oát (James Watt).", "Ét-mơn Các-rai (Edmund Cartwright).", "Giêm Ha-gri-vơ (James Hargreaves).", "Ri-chác Ác-rai (Richard Arkwright)."], answer: 2 },
                { type: 'mcq', text: "Phát minh nào được coi là quan trọng nhất, tạo ra nguồn động lực mới, khởi đầu quá trình công nghiệp hóa ở Anh?[cite: 48]", options: ["Máy kéo sợi chạy bằng sức nước.", "Máy dệt chạy bằng hơi nước.", "Máy hơi nước của Giêm Oát.", "Đầu máy xe lửa."], answer: 2 },
                { type: 'mcq', text: "Cách mạng công nghiệp lần thứ hai (nửa sau thế kỉ XIX - 1914) gắn liền với sự phát triển và ứng dụng của nguồn năng lượng nào?[cite: 49]", options: ["Sức gió và sức nước.", "Hơi nước và than đá.", "Điện và động cơ đốt trong.", "Năng lượng nguyên tử."], answer: 2 },
                { type: 'mcq', text: "Ai là người đã hoàn thiện phát minh ra bóng đèn sợi đốt (1879), giúp thắp sáng nhà ở và nhà xưởng?[cite: 49]", options: ["Mai-cơn Pha-ra-đây.", "Tô-mát Ê-đi-xơn.", "Ni-cô-la Tết-la.", "A-lếch-xan-đơ Gra-ham Beo."], answer: 1 },
                { type: 'mcq', text: "Người được mệnh danh là 'ông vua xe hơi' nước Mỹ với dòng xe Mô-đen T sản xuất hàng loạt là ai?[cite: 50]", options: ["Các Ben (Karl Benz).", "Hen-ri Pho (Henry Ford).", "Anh em nhà Rai (Wright).", "G. Lơ-noa."], answer: 1 },
                { type: 'mcq', text: "Phát minh ra máy bay chạy bằng động cơ xăng (1903) gắn liền với tên tuổi của ai?[cite: 50]", options: ["Tô-mát Ê-đi-xơn.", "Giôn Ba-bo.", "Anh em nhà Rai.", "Gu-li-ê-li-nô Mác-cô-ni."], answer: 2 },
                { type: 'mcq', text: "Về mặt xã hội, các cuộc cách mạng công nghiệp thời cận đại đã đưa đến sự hình thành của hai giai cấp đối kháng nào?[cite: 51]", options: ["Chủ nô và nô lệ.", "Lãnh chúa và nông nô.", "Tư sản công nghiệp và vô sản.", "Quý tộc và nông dân tự do."], answer: 2 },
                { type: 'mcq', text: "Thành tựu nào của cách mạng công nghiệp lần thứ nhất giúp giao thông vận tải phát triển đột phá?[cite: 48]", options: ["Xe hơi bốn bánh.", "Tàu thủy chạy bằng động cơ đốt trong.", "Đầu máy xe lửa chạy bằng hơi nước.", "Khinh khí cầu."], answer: 2 }
            ],
            tf: [
                { type: 'tf', text: "Về Cách mạng công nghiệp lần thứ nhất:[cite: 47]", options: [
                    { text: "a) Diễn ra vào khoảng nửa sau thế kỉ XVIII, bắt đầu tại Anh.", answer: true },
                    { text: "b) Đột phá kỹ thuật xuất hiện đầu tiên trong ngành giao thông vận tải.", answer: false },
                    { text: "c) Sự xuất hiện của máy kéo sợi Gien-ni đã làm tăng năng suất lao động lên gấp nhiều lần.", answer: true },
                    { text: "d) Lan rộng từ Anh sang các quốc gia khác ở châu Âu và Bắc Mỹ.", answer: true }
                ]},
                { type: 'tf', text: "Về các phát minh động lực và giao thông:[cite: 48]", options: [
                    { text: "a) Giêm Oát chế tạo thành công máy hơi nước, giảm sức lao động chân tay.", answer: true },
                    { text: "b) Máy hơi nước ra đời khiến quá trình công nghiệp hóa ở Anh bị chững lại.", answer: false },
                    { text: "c) Rô-bớt Phơn-tơn (Mỹ) ứng dụng động cơ hơi nước chế tạo tàu thủy chở khách đầu tiên.", answer: true },
                    { text: "d) Phương pháp luyện kim 'pút-đinh' giúp sản xuất sắt số lượng lớn.", answer: true }
                ]},
                { type: 'tf', text: "Về Cách mạng công nghiệp lần thứ hai:[cite: 49]", options: [
                    { text: "a) Bắt đầu từ nửa sau thế kỉ XIX đến khi CTTG thứ nhất bùng nổ (1914).", answer: true },
                    { text: "b) Gắn liền với sự xuất hiện của nguyên liệu mới như thép chất lượng cao (phương pháp Bê-sê-mơ).", answer: true },
                    { text: "c) Nguồn năng lượng chủ yếu được sử dụng trong giai đoạn này vẫn là sức nước tự nhiên.", answer: false },
                    { text: "d) Các phát minh về điện là cơ sở cho sự ra đời của động cơ điện, điện thoại, vô tuyến điện.", answer: true }
                ]},
                { type: 'tf', text: "Về sự ra đời của ô tô và máy bay:[cite: 50]", options: [
                    { text: "a) Động cơ đốt trong ra đời tạo tiền đề cho sự phát triển của ô tô và máy bay.", answer: true },
                    { text: "b) Chiếc xe hơi đầu tiên trên thực tế do Hen-ri Pho tạo ra.", answer: false },
                    { text: "c) Công ty Pho Mô-tô đã áp dụng dây chuyền lắp ráp hàng loạt để sản xuất xe hơi.", answer: true },
                    { text: "d) Anh em nhà Rai đã thử nghiệm thành công máy bay chạy bằng động cơ xăng.", answer: true }
                ]},
                { type: 'tf', text: "Về tác động kinh tế của CMCN thời cận đại:[cite: 51]", options: [
                    { text: "a) Làm thay đổi cách thức tổ chức sản xuất, nâng cao năng suất lao động.", answer: true },
                    { text: "b) Chuyển nền kinh tế từ chủ yếu dựa vào công nghiệp sang nông nghiệp tự cấp tự túc.", answer: false },
                    { text: "c) Cuối thế kỉ XIX - đầu thế kỉ XX, Mỹ và Đức vươn lên dẫn đầu thế giới về sản xuất công nghiệp.", answer: true },
                    { text: "d) Thúc đẩy sự phát triển mạnh mẽ của giao thông vận tải và thông tin liên lạc.", answer: true }
                ]},
                { type: 'tf', text: "Về tác động xã hội của CMCN thời cận đại:[cite: 51, 52]", options: [
                    { text: "a) Hình thành các trung tâm công nghiệp mới cũng là những thành thị đông dân (Luân Đôn, Pa-ri...).", answer: true },
                    { text: "b) Hình thành hai giai cấp đối kháng gay gắt là tư sản công nghiệp và vô sản làm thuê.", answer: true },
                    { text: "c) Xóa bỏ hoàn toàn khoảng cách giàu nghèo trong xã hội tư bản.", answer: false },
                    { text: "d) Lối sống và văn hóa công nghiệp ngày càng trở nên phổ biến.", answer: true }
                ]},
                { type: 'tf', text: "Về tác động văn hóa của CMCN thời cận đại:[cite: 52]", options: [
                    { text: "a) Đời sống văn hóa tinh thần trở nên phong phú với sự xuất hiện của điện thoại, ra-đi-ô, điện ảnh.", answer: true },
                    { text: "b) Các quốc gia hoàn toàn cắt đứt giao lưu văn hóa với nhau để bảo vệ bí mật công nghệ.", answer: false },
                    { text: "c) Sự kết nối văn hóa giữa các quốc gia, châu lục được đẩy mạnh nhờ giao thông phát triển.", answer: true },
                    { text: "d) Việc di chuyển và liên lạc trở nên nhanh chóng, thay đổi nhận thức về không gian, thời gian.", answer: true }
                ]},
                { type: 'tf', text: "Về các tác động tiêu cực của CMCN thời cận đại:[cite: 52]", options: [
                    { text: "a) Các nhà máy nhả khói bụi gây ô nhiễm môi trường sinh thái nghiêm trọng.", answer: true },
                    { text: "b) Gia tăng tình trạng bóc lột sức lao động của phụ nữ và trẻ em với giá rẻ mạt.", answer: true },
                    { text: "c) Các cuộc cách mạng công nghiệp đã chấm dứt hoàn toàn chiến tranh xâm lược.", answer: false },
                    { text: "d) Nhu cầu về nguyên liệu và thị trường thúc đẩy sự xâm chiếm và tranh giành thuộc địa.", answer: true }
                ]},
                { type: 'tf', text: "Về quá trình công nghiệp hóa ở một số nước:[cite: 48]", options: [
                    { text: "a) Ở Bỉ, quá trình công nghiệp hóa diễn ra với trọng tâm là ngành luyện kim, khai mỏ và dệt.", answer: true },
                    { text: "b) Ở Pháp, cách mạng công nghiệp diễn ra muộn hơn Anh do tác động của những bất ổn chính trị.", answer: true },
                    { text: "c) Nước Anh kiên quyết giữ bí mật công nghệ, không để lan truyền sang bất cứ nước nào khác.", answer: false },
                    { text: "d) Đến giữa thế kỉ XIX, nước Pháp cơ bản trở thành một nước công nghiệp.", answer: true }
                ]},
                { type: 'tf', text: "Đánh giá chung về hai cuộc Cách mạng công nghiệp:[cite: 47, 49, 51]", options: [
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
                { type: 'mcq', text: "Cách mạng công nghiệp lần thứ ba (bắt đầu từ những năm 40 của thế kỉ XX) còn được gọi là gì?[cite: 53]", options: ["Cách mạng hơi nước.", "Cách mạng điện khí hóa.", "Cách mạng kĩ thuật số.", "Cách mạng sinh học."], answer: 2 },
                { type: 'mcq', text: "Thành tựu quan trọng đầu tiên khởi nguồn cho cuộc Cách mạng công nghiệp lần thứ ba là gì?[cite: 54]", options: ["Động cơ phản lực.", "Sự xuất hiện của máy tính điện tử (như ENIAC).", "Công nghệ in 3D.", "Trí tuệ nhân tạo (AI)."], answer: 1 },
                { type: 'mcq', text: "Sự ra đời của mạng lưới nào đã giúp kết nối và chia sẻ thông tin toàn cầu một cách dễ dàng trong Cách mạng công nghiệp lần thứ ba?[cite: 54]", options: ["Mạng cáp quang truyền hình.", "Mạng lưới đường sắt cao tốc.", "Internet (Mạng lưới toàn cầu World Wide Web).", "Mạng điện báo vô tuyến."], answer: 2 },
                { type: 'mcq', text: "Sự kiện nào đánh dấu bước tiến vĩ đại trong công cuộc chinh phục vũ trụ của Mỹ (1969)?[cite: 55]", options: ["Phóng vệ tinh nhân tạo đầu tiên.", "Đưa con người lên quỹ đạo Trái Đất.", "Nhà du hành Neo Am-xtroong đặt chân lên Mặt Trăng.", "Đưa rô-bốt tự hành lên sao Hỏa."], answer: 2 },
                { type: 'mcq', text: "Cách mạng công nghiệp lần thứ tư (Cách mạng 4.0) bắt đầu từ khoảng thời gian nào?[cite: 55]", options: ["Đầu thập niên 70 của thế kỉ XX.", "Năm 1995 khi Internet ra đời.", "Những năm đầu tiên của thế kỉ XXI.", "Sau Chiến tranh thế giới thứ hai."], answer: 2 },
                { type: 'mcq', text: "Đâu là thành tựu cốt lõi, tiêu biểu của Cách mạng công nghiệp lần thứ tư?[cite: 55]", options: ["Máy tính cá nhân.", "Động cơ nguyên tử.", "Trí tuệ nhân tạo (AI), Internet vạn vật (IoT), Dữ liệu lớn (Big Data).", "Kĩ thuật phân chia tế bào."], answer: 2 },
                { type: 'mcq', text: "Công nghệ nào cho phép máy móc mô phỏng khả năng tư duy, học tập và ra quyết định của con người?[cite: 55]", options: ["Điện toán đám mây.", "Trí tuệ nhân tạo (AI).", "Công nghệ Na-nô.", "In 3D."], answer: 1 },
                { type: 'mcq', text: "Rô-bốt Xô-phi-a (được cấp quyền công dân năm 2017) là minh chứng sống động cho sự phát triển của lĩnh vực nào?[cite: 53]", options: ["Công nghệ vật liệu mới.", "Năng lượng tái tạo.", "Trí tuệ nhân tạo và công nghệ chế tạo người máy.", "Công nghệ sinh học gen."], answer: 2 },
                { type: 'mcq', text: "Tác động kinh tế nổi bật của các cuộc cách mạng công nghiệp thời hiện đại là gì?[cite: 57]", options: ["Làm suy yếu các nền kinh tế phát triển.", "Đẩy lùi quá trình toàn cầu hóa.", "Sự ra đời của các nhà máy thông minh, thương mại điện tử giúp tăng năng suất và mở rộng thị trường toàn cầu.", "Đưa con người quay lại phương thức sản xuất thủ công."], answer: 2 },
                { type: 'mcq', text: "Một trong những tác động tiêu cực về mặt xã hội của các cuộc cách mạng công nghiệp thời hiện đại là gì?[cite: 57]", options: ["Xóa bỏ hoàn toàn được bệnh tật.", "Giải phóng con người khỏi môi trường độc hại.", "Khiến nhiều người lao động đối diện với nguy cơ mất việc làm và nới rộng khoảng cách giàu - nghèo.", "Giảm thiểu sự phụ thuộc vào công nghệ."], answer: 2 }
            ],
            tf: [
                { type: 'tf', text: "Về Cách mạng công nghiệp lần thứ ba:[cite: 53, 54]", options: [
                    { text: "a) Bắt đầu vào khoảng những năm 40 của thế kỉ XX.", answer: true },
                    { text: "b) Đặc trưng bởi sự xuất hiện của động cơ đốt trong và năng lượng điện.", answer: false },
                    { text: "c) Tạo ra các phát minh lớn như: máy tính điện tử, người máy, internet, vật liệu mới.", answer: true },
                    { text: "d) Cuộc 'Cách mạng xanh' trong nông nghiệp là một thành tựu của giai đoạn này.", answer: true }
                ]},
                { type: 'tf', text: "Về công cuộc chinh phục vũ trụ (CMCN lần 3):[cite: 55]", options: [
                    { text: "a) Gắn liền với sự cạnh tranh khoa học kĩ thuật giữa hai cường quốc Mỹ và Liên Xô.", answer: true },
                    { text: "b) Liên Xô là nước đầu tiên phóng thành công vệ tinh nhân tạo (Xpút-ních 1) lên quỹ đạo.", answer: true },
                    { text: "c) Mĩ là quốc gia đầu tiên đưa con người lên sống thường xuyên trên Mặt Trăng.", answer: false },
                    { text: "d) Thể hiện những bước tiến nhảy vọt của nhân loại trong việc khám phá không gian.", answer: true }
                ]},
                { type: 'tf', text: "Về Cách mạng công nghiệp lần thứ tư (4.0):[cite: 55, 56]", options: [
                    { text: "a) Bắt đầu từ những năm đầu thế kỉ XXI và hiện vẫn đang tiếp diễn.", answer: true },
                    { text: "b) Xóa bỏ ranh giới giữa các lĩnh vực vật lý, kĩ thuật số và sinh học.", answer: true },
                    { text: "c) Công nghệ in 3D có thể giúp xây dựng các tòa nhà với chi phí và rác thải giảm đi đáng kể.", answer: true },
                    { text: "d) Công nghệ na-nô là việc thiết kế các thiết bị với kích thước khổng lồ.", answer: false }
                ]},
                { type: 'tf', text: "Về Trí tuệ nhân tạo (AI) và Internet vạn vật (IoT):[cite: 55, 56]", options: [
                    { text: "a) AI giúp máy móc có khả năng xử lí dữ liệu, ra quyết định giống như con người.", answer: true },
                    { text: "b) IoT chỉ giới hạn trong việc kết nối các máy tính để bàn với nhau.", answer: false },
                    { text: "c) Các thiết bị kết nối IoT giúp thu thập lượng dữ liệu khổng lồ (Big Data).", answer: true },
                    { text: "d) Trong giáo dục, AI giúp tối ưu hóa năng lực tự học và cá nhân hóa quá trình học.", answer: true }
                ]},
                { type: 'tf', text: "Về tác động kinh tế của CMCN thời hiện đại:[cite: 56, 57]", options: [
                    { text: "a) Thương mại điện tử ra đời giúp người tiêu dùng mua sắm trực tuyến, tiếp cận thị trường toàn cầu.", answer: true },
                    { text: "b) Làm suy giảm quá trình khu vực hóa và toàn cầu hóa kinh tế.", answer: false },
                    { text: "c) Các 'nhà máy thông minh' tự động hóa cao giúp tăng năng suất, tiết kiệm nguyên nhiên liệu.", answer: true },
                    { text: "d) Dữ liệu lớn (Big Data) hỗ trợ việc ra quyết định kinh doanh nhanh và chính xác hơn.", answer: true }
                ]},
                { type: 'tf', text: "Về tác động xã hội của CMCN thời hiện đại:[cite: 57]", options: [
                    { text: "a) Giúp giải phóng sức lao động trong các công việc nguy hiểm, độc hại.", answer: true },
                    { text: "b) Dẫn đến sự phân hóa lực lượng lao động, đòi hỏi trình độ chuyên môn cao hơn.", answer: true },
                    { text: "c) Tất cả mọi người trên thế giới đều có cơ hội việc làm bình đẳng tuyệt đối.", answer: false },
                    { text: "d) Phát sinh hình thức làm việc từ xa, giúp tiết kiệm thời gian di chuyển.", answer: true }
                ]},
                { type: 'tf', text: "Về tác động văn hóa của CMCN thời hiện đại:[cite: 57]", options: [
                    { text: "a) Giao lưu văn hóa giữa các quốc gia diễn ra dễ dàng, nhanh chóng qua internet.", answer: true },
                    { text: "b) Mạng xã hội trở thành công cụ chia sẻ thông tin và giao tiếp quan trọng.", answer: true },
                    { text: "c) Xóa bỏ hoàn toàn mọi xung đột về giá trị văn hóa trên thế giới.", answer: false },
                    { text: "d) Sự xuất hiện của văn hóa không gian mạng (cyber culture) đặt ra nhiều thách thức mới.", answer: true }
                ]},
                { type: 'tf', text: "Về các mặt trái và thách thức:[cite: 57]", options: [
                    { text: "a) Nguy cơ mất an toàn thông tin, rò rỉ bảo mật dữ liệu cá nhân tăng cao.", answer: true },
                    { text: "b) Tình trạng tin giả, thông tin chưa kiểm chứng lây lan nhanh trên mạng xã hội.", answer: true },
                    { text: "c) Việc ứng dụng AI hoàn toàn không có khả năng gây ra rủi ro cho con người.", answer: false },
                    { text: "d) Lạm dụng công nghệ trong học tập có thể làm giảm khả năng tư duy độc lập.", answer: true }
                ]},
                { type: 'tf', text: "Về rô-bốt và tự động hóa:[cite: 45, 54]", options: [
                    { text: "a) Rô-bốt Xô-phi-a là
