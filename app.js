/* =========================================================================
   DATABASE LỊCH SỬ (Cấu trúc đề thi Tốt nghiệp THPT 2026)
   Cấp độ nhận thức: Nhận biết -> Thông hiểu -> Vận dụng -> Vận dụng cao
   Độ chính xác: Bám sát 100% SGK Lịch sử 10, 11, 12 (Kết nối tri thức)
========================================================================= */

const appDatabase = {
    khoi10: {},
    khoi11: {},
    khoi12: {},
    mocktest: {}
};

// ================= DỮ LIỆU LỚP 10 =================
appDatabase.khoi10[1] = {
    title: "Chủ đề 1 & 2: Lịch sử, Sử học và Vai trò của Sử học",
    exercises: {
        mcq: [
            { type: 'mcq', text: "Lịch sử được hiểu theo hai nghĩa cơ bản nào?", options: ["Lịch sử thế giới và lịch sử dân tộc.", "Hiện thực lịch sử và lịch sử được con người nhận thức.", "Lịch sử tự nhiên và lịch sử xã hội.", "Quá khứ và hiện tại."], answer: 1 },
            { type: 'mcq', text: "Đối tượng nghiên cứu của Sử học là gì?", options: ["Quá trình phát triển của tự nhiên.", "Toàn bộ quá khứ của loài người.", "Những hiện tượng vũ trụ.", "Sự tiến hóa của sinh giới."], answer: 1 },
            { type: 'mcq', text: "Vì sao giữa hiện thực lịch sử và lịch sử được con người nhận thức luôn có khoảng cách?", options: ["Vì thời gian trôi qua quá lâu làm mất hết dấu vết.", "Vì phụ thuộc vào nhu cầu, năng lực, thái độ và thế giới quan của người nghiên cứu.", "Vì các nhà sử học luôn cố tình bóp méo sự thật.", "Vì hiện thực lịch sử không bao giờ để lại di tích vật chất."], answer: 1 },
            { type: 'mcq', text: "Câu nói 'Ôn cố, tri tân' (Ôn cũ, biết mới) phản ánh ý nghĩa nào của việc học tập Lịch sử?", options: ["Giúp con người quên đi những sai lầm trong quá khứ.", "Cung cấp tri thức để tự hào về bản thân.", "Học tập quá khứ để hiểu hiện tại và định hướng tương lai.", "Chỉ để phục vụ việc bảo tồn di tích cổ."], answer: 2 },
            { type: 'mcq', text: "Việc phục dựng và bảo tồn Quần thể di tích Cố đô Huế hiện nay chứng minh rõ nhất vai trò nào của Sử học?", options: ["Sử học quyết định toàn bộ doanh thu du lịch của tỉnh Thừa Thiên Huế.", "Kết quả nghiên cứu Sử học là cơ sở khoa học cốt lõi để bảo tồn tính nguyên trạng và xác thực của di sản.", "Sử học thay thế hoàn toàn vai trò của các ngành kiến trúc, xây dựng.", "Sử học chỉ đóng vai trò ghi chép lại quá trình trùng tu."], answer: 1 }
        ],
        tf: [
            { type: 'tf', text: "Đọc đoạn tư liệu: 'Sử để ghi việc, mà việc hay hoặc dở đều dùng làm gương răn cho đời sau' (Đại Việt sử ký toàn thư):", options: [
                { text: "a) (Nhận biết) Tư liệu trên nhấn mạnh chức năng dự báo tương lai của Sử học.", answer: false }, 
                { text: "b) (Thông hiểu) Tư liệu khẳng định chức năng xã hội của Sử học là giáo dục, rút ra bài học kinh nghiệm.", answer: true }, 
                { text: "c) (Vận dụng) Sử học chỉ ghi lại những việc tốt đẹp trong quá khứ để làm gương.", answer: false }, 
                { text: "d) (Vận dụng cao) Đúc kết bài học từ quá khứ là cơ sở quan trọng để tránh lặp lại sai lầm trong quá trình hoạch định chính sách hiện tại.", answer: true } 
            ]}
        ]
    }
};

appDatabase.khoi10[2] = {
    title: "Chủ đề 4: Các cuộc cách mạng công nghiệp",
    exercises: {
        mcq: [
            { type: 'mcq', text: "Phát minh nào được coi là khởi đầu cho cuộc Cách mạng công nghiệp lần thứ nhất ở Anh?", options: ["Đầu máy xe lửa.", "Máy dệt chạy bằng hơi nước.", "Máy kéo sợi Gien-ni (Spinning Jenny).", "Động cơ đốt trong."], answer: 2 },
            { type: 'mcq', text: "Việc Giêm Oát (James Watt) phát minh ra động cơ hơi nước (1784) có ý nghĩa cốt lõi nào sau đây?", options: ["Khởi đầu quá trình tự động hóa hoàn toàn trong sản xuất.", "Tạo ra nguồn động lực mới, làm giảm sức lao động chân tay, thúc đẩy sản xuất phát triển vượt bậc.", "Làm xuất hiện tầng lớp quý tộc mới ở châu Âu.", "Mở ra kỉ nguyên chinh phục không gian của nhân loại."], answer: 1 },
            { type: 'mcq', text: "Đặc trưng cơ bản tạo nên sự khác biệt của Cách mạng công nghiệp lần thứ tư (4.0) so với các cuộc cách mạng trước là gì?", options: ["Sự ra đời của máy tính điện tử và internet.", "Việc sử dụng năng lượng điện thay thế năng lượng hơi nước.", "Sự đột phá công nghệ trong lĩnh vực trí tuệ nhân tạo (AI), internet vạn vật (IoT) và dữ liệu lớn (Big Data).", "Sự chuyển dịch từ lao động thủ công sang lao động máy móc."], answer: 2 },
            { type: 'mcq', text: "Tác động tiêu cực chung nhất của tất cả các cuộc cách mạng công nghiệp đối với nhân loại mà hiện nay chúng ta đang phải đối mặt và giải quyết là gì?", options: ["Sự sụp đổ của nền dân chủ tư sản.", "Sự xâm chiếm và tranh giành thuộc địa.", "Ô nhiễm môi trường sinh thái, biến đổi khí hậu và khoảng cách giàu nghèo.", "Sự cạn kiệt hoàn toàn của nguồn lao động chân tay."], answer: 2 }
        ],
        tf: [
            { type: 'tf', text: "Về các cuộc Cách mạng công nghiệp thời hiện đại (Lần 3 và Lần 4):", options: [
                { text: "a) (Nhận biết) Cách mạng công nghiệp lần thứ ba gắn liền với sự xuất hiện của máy tính điện tử và internet.", answer: true },
                { text: "b) (Thông hiểu) Tự động hóa và công nghệ rô-bốt ra đời giúp giải phóng hoàn toàn sức lao động của con người trên mọi lĩnh vực.", answer: false },
                { text: "c) (Vận dụng) Trong kỷ nguyên số, các ứng dụng như trí tuệ nhân tạo (AI) góp phần cá nhân hóa và tối ưu hóa năng lực tự học của con người.", answer: true },
                { text: "d) (Vận dụng cao) Để hạn chế tác động tiêu cực của CMCN 4.0, giải pháp duy nhất của các quốc gia là đóng cửa từ chối tiếp nhận công nghệ ngoại nhập.", answer: false }
            ]}
        ]
    }
};

// ================= DỮ LIỆU LỚP 11 =================
appDatabase.khoi11[1] = {
    title: "Chủ đề 1 & 2: Cách mạng tư sản và Chủ nghĩa xã hội",
    exercises: {
        mcq: [
            { type: 'mcq', text: "Mục tiêu cơ bản của các cuộc cách mạng tư sản là gì?", options: ["Xóa bỏ rào cản kìm hãm sự phát triển của nền kinh tế tư bản chủ nghĩa.", "Xóa bỏ giai cấp tư sản.", "Đưa giai cấp công nhân lên nắm quyền.", "Bảo vệ chế độ phong kiến."], answer: 0 },
            { type: 'mcq', text: "Vì sao Cách mạng tư sản Pháp (cuối thế kỉ XVIII) được đánh giá là một cuộc 'Đại cách mạng'?", options: ["Vì quy mô lớn nhất châu Âu và tiêu diệt được toàn bộ phong kiến châu Âu.", "Vì giải quyết triệt để nhiệm vụ dân tộc, dân chủ và mở đường cho CNTB phát triển mạnh mẽ.", "Vì đây là cuộc cách mạng tư sản đầu tiên trên thế giới.", "Vì nổ ra ở một nước có nền kinh tế tư bản chủ nghĩa phát triển nhất thế giới."], answer: 1 },
            { type: 'mcq', text: "Sự xuất hiện của các tổ chức độc quyền (Các-ten, Tơ-rớt) vào cuối thế kỉ XIX - đầu thế kỉ XX chứng tỏ điều gì về chủ nghĩa tư bản?", options: ["Chủ nghĩa tư bản đã bước vào giai đoạn suy vong, sắp sụp đổ hoàn toàn.", "Sản xuất tư bản chủ nghĩa tích tụ và tập trung cao độ, chuyển từ tự do cạnh tranh sang độc quyền.", "Sự can thiệp triệt để của nhà nước vào mọi hoạt động kinh tế.", "Chủ nghĩa tư bản đã giải quyết triệt để mâu thuẫn giữa tư sản và vô sản."], answer: 1 },
            { type: 'mcq', text: "Tháng 12 - 1978, Trung Quốc đã thực hiện công cuộc gì để đưa đất nước thoát khỏi khủng hoảng?", options: ["Cách mạng văn hóa.", "Đại nhảy vọt.", "Cải cách mở cửa.", "Thành lập công xã nhân dân."], answer: 2 },
            { type: 'mcq', text: "Từ sự phục hồi và phát triển của Chủ nghĩa tư bản hiện đại, bài học nào được rút ra cho công cuộc xây dựng nền kinh tế ở Việt Nam hiện nay?", options: ["Bãi bỏ hoàn toàn sự quản lý của nhà nước, để thị trường tự điều tiết.", "Không ngừng tự điều chỉnh, ứng dụng triệt để khoa học công nghệ và đổi mới cơ chế quản lý để thích ứng với bối cảnh mới.", "Từ chối toàn cầu hóa để tránh các cuộc khủng hoảng tài chính chu kỳ.", "Chỉ tập trung phát triển công nghiệp nặng và khai khoáng."], answer: 1 }
        ],
        tf: [
            { type: 'tf', text: "Về sự khủng hoảng và sụp đổ của chủ nghĩa xã hội ở Liên Xô và Đông Âu:", options: [
                { text: "a) (Nhận biết) Nửa sau những năm 70 của thế kỷ XX, tốc độ tăng trưởng kinh tế của các nước XHCN Đông Âu bắt đầu suy giảm.", answer: true },
                { text: "b) (Thông hiểu) Nguyên nhân cơ bản là do áp dụng máy móc mô hình kinh tế tập trung, quan liêu, bao cấp trong nhiều năm.", answer: true },
                { text: "c) (Vận dụng) Quá trình cải cách, cải tổ phạm sai lầm nghiêm trọng về đường lối và sự xóa bỏ vai trò lãnh đạo của Đảng Cộng sản.", answer: true },
                { text: "d) (Vận dụng cao) Sự sụp đổ của chủ nghĩa xã hội ở Liên Xô và Đông Âu đồng nghĩa với sự sụp đổ hoàn toàn của lý luận chủ nghĩa Mác - Lênin trên thế giới.", answer: false }
            ]}
        ]
    }
};

appDatabase.khoi11[2] = {
    title: "Chủ đề 3 & 4: Đông Nam Á và Chiến tranh bảo vệ TQ ở VN",
    exercises: {
        mcq: [
            { type: 'mcq', text: "Thực dân phương Tây nào đã mở đầu quá trình xâm lược Đông Nam Á bằng việc đánh chiếm Ma-lắc-ca (1511)?", options: ["Thực dân Anh.", "Thực dân Pháp.", "Thực dân Bồ Đào Nha.", "Thực dân Hà Lan."], answer: 2 },
            { type: 'mcq', text: "Vì sao Vương quốc Xiêm (Thái Lan) là quốc gia duy nhất ở Đông Nam Á không bị biến thành thuộc địa?", options: ["Xiêm có quân đội mạnh nhất châu Á, đánh bại mọi cuộc xâm lược.", "Xiêm nằm ở vùng địa lý hiểm trở, thực dân phương Tây không thể tiếp cận.", "Tiến hành cải cách toàn diện, thực hiện ngoại giao khôn khéo, lợi dụng mâu thuẫn giữa Anh và Pháp.", "Xiêm là đồng minh chiến lược số một của đế quốc Mỹ tại châu Á."], answer: 2 },
            { type: 'mcq', text: "Hậu quả nặng nề và lâu dài nhất của chính sách 'chia để trị' mà thực dân phương Tây để lại cho Đông Nam Á là gì?", options: ["Nền kinh tế hoàn toàn phụ thuộc vào xuất khẩu lúa gạo.", "Thiếu hụt nguồn lao động do bị bắt làm nô lệ.", "Tình trạng chia rẽ, mâu thuẫn sắc tộc, tôn giáo dai dẳng ở nhiều quốc gia sau khi độc lập.", "Sự bùng nổ dân số quá mức ở khu vực hải đảo."], answer: 2 },
            { type: 'mcq', text: "Điểm cốt lõi trong kế sách 'tiên phát chế nhân' của Lý Thường Kiệt (1075) là gì?", options: ["Xây dựng thành lũy kiên cố chờ giặc đến.", "Dùng lời lẽ ngoại giao để thuyết phục kẻ thù rút quân.", "Chủ động tiến công trước để tiêu diệt các căn cứ tập trung quân và hậu cần của giặc, chặn thế mạnh của địch.", "Cầu viện sự giúp đỡ của các nước phương Tây."], answer: 2 },
            { type: 'mcq', text: "Từ sự thất bại của nhà Hồ trong cuộc kháng chiến chống Minh, bài học lớn nhất được rút ra cho công cuộc bảo vệ Tổ quốc hiện nay là gì?", options: ["Xây dựng quân đội thường trực đông đảo là yếu tố duy nhất quyết định.", "Thành lũy kiên cố là lá chắn không thể xuyên thủng.", "Phải củng cố thế trận lòng dân, lấy dân làm gốc, 'khoan thư sức dân' để bồi dưỡng sức dân.", "Phải ngay lập tức nhượng bộ để bảo tồn lực lượng khi gặp giặc mạnh."], answer: 2 }
        ],
        tf: [
            { type: 'tf', text: "Về hành trình đi đến độc lập của các dân tộc Đông Nam Á:", options: [
                { text: "a) (Nhận biết) Năm 1945, nhân cơ hội Nhật đầu hàng Đồng minh, In-đô-nê-xi-a, Việt Nam, Lào đã tiến hành cách mạng giành chính quyền.", answer: true },
                { text: "b) (Thông hiểu) Tất cả các quốc gia Đông Nam Á đều giành độc lập hoàn toàn bằng con đường đấu tranh vũ trang khốc liệt.", answer: false },
                { text: "c) (Vận dụng) Sự ra đời và phát triển của giai cấp vô sản đã mở ra xu hướng cách mạng mới trong phong trào GPDT ở Đông Nam Á.", answer: true },
                { text: "d) (Vận dụng cao) Thắng lợi của phong trào GPDT ở Đông Nam Á đã phá vỡ khâu yếu nhất của hệ thống thuộc địa chủ nghĩa thực dân, góp phần làm tan rã hệ thống này trên toàn cầu.", answer: true }
            ]}
        ]
    }
};

// ================= DỮ LIỆU LỚP 12 =================
appDatabase.khoi12[1] = {
    title: "Chủ đề 1 & 2: Thế giới sau Chiến tranh lạnh & ASEAN",
    exercises: {
        mcq: [
            { type: 'mcq', text: "Tổ chức Liên hợp quốc chính thức được thành lập vào thời gian nào?", options: ["24 - 10 - 1945.", "01 - 01 - 1942.", "26 - 06 - 1945.", "02 - 09 - 1945."], answer: 0 },
            { type: 'mcq', text: "Trật tự thế giới hai cực I-an-ta tồn tại trong khoảng thời gian nào?", options: ["1945 - 1975.", "1945 - 1989.", "1945 - 1991.", "1939 - 1945."], answer: 2 },
            { type: 'mcq', text: "Một trong những nguyên tắc hoạt động cơ bản của Liên hợp quốc là", options: ["Giải quyết các tranh chấp quốc tế bằng biện pháp hòa bình.", "Can thiệp trực tiếp vào công việc nội bộ của các quốc gia.", "Sử dụng vũ lực để răn đe các quốc gia vi phạm nhân quyền.", "Thiết lập một nhà nước toàn cầu thống nhất quản lý kinh tế."], answer: 0 },
            { type: 'mcq', text: "Đặc điểm nổi bật nhất của Trật tự thế giới hai cực I-an-ta là gì?", options: ["Sự hợp tác toàn diện giữa Mỹ và Liên Xô trên mọi lĩnh vực.", "Thế giới chia thành hai phe TBCN và XHCN do Mỹ và Liên Xô đứng đầu, đối đầu gay gắt.", "Các nước Á, Phi, Mỹ La-tinh trở thành trung tâm quyền lực mới.", "Sự thống trị tuyệt đối của chủ nghĩa thực dân cũ tại châu Á."], answer: 1 },
            { type: 'mcq', text: "Nhân tố nào dưới đây KHÔNG phải là nguyên nhân làm sụp đổ Trật tự thế giới hai cực I-an-ta?", options: ["Sự vươn lên nhanh chóng của Tây Âu và Nhật Bản làm thay đổi cán cân kinh tế.", "Sự thắng lợi của phong trào giải phóng dân tộc làm thay đổi khuôn khổ trật tự.", "Cuộc khủng hoảng kinh tế, xã hội và sự tan rã của Liên Xô.", "Sự ra đời của tổ chức Liên hợp quốc năm 1945."], answer: 3 },
            { type: 'mcq', text: "Trong bối cảnh thế giới xuất hiện xu thế 'đa cực' sau Chiến tranh lạnh, Việt Nam đã thực hiện chủ trương ngoại giao nào để bảo vệ lợi ích quốc gia?", options: ["Chỉ thiết lập quan hệ đối tác với các nước lớn có vũ khí hạt nhân.", "Liên minh quân sự chặt chẽ với một siêu cường để làm ô bảo vệ.", "Thực hiện đa phương hóa, đa dạng hóa quan hệ quốc tế, 'là bạn với tất cả các nước'.", "Đóng cửa nền kinh tế để tránh sự can thiệp của toàn cầu hóa."], answer: 2 }
        ],
        tf: [
            { type: 'tf', text: "Đọc đoạn tư liệu về Liên hợp quốc: 'Theo Hiến chương, Liên hợp quốc được thành lập nhằm bốn mục tiêu: 1. Duy trì hoà bình và an ninh quốc tế;...'", options: [
                { text: "a) (Nhận biết) Liên hợp quốc là tổ chức quốc tế được thành lập ngay sau Chiến tranh thế giới thứ nhất (1918).", answer: false }, 
                { text: "b) (Thông hiểu) Mục tiêu cốt lõi và quan trọng nhất của Liên hợp quốc là duy trì hoà bình và an ninh quốc tế.", answer: true }, 
                { text: "c) (Vận dụng) Để đảm bảo mục tiêu, Liên hợp quốc có quyền can thiệp vào công việc nội bộ của các quốc gia có chiến tranh.", answer: false }, 
                { text: "d) (Vận dụng cao) Việc duy trì hòa bình của LHQ đã tạo khuôn khổ pháp lý quốc tế quan trọng giúp Việt Nam giải quyết các tranh chấp chủ quyền bằng biện pháp hòa bình.", answer: true } 
            ]}
        ]
    }
};

appDatabase.khoi12[2] = {
    title: "Chủ đề 3: Cuộc chiến tranh GPDT và BV Tổ quốc ở VN (1945-1975)",
    exercises: {
        mcq: [
            { type: 'mcq', text: "Sự kiện nào đánh dấu chế độ phong kiến Việt Nam hoàn toàn sụp đổ?", options: ["Hà Nội giành chính quyền (19/8/1945).", "Vua Bảo Đại tuyên bố thoái vị (30/8/1945).", "Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập (2/9/1945).", "Sài Gòn giành chính quyền (25/8/1945)."], answer: 1 },
            { type: 'mcq', text: "Chiến dịch nào đã làm phá sản hoàn toàn kế hoạch Na-va của thực dân Pháp?", options: ["Chiến dịch Điện Biên Phủ (1954).", "Chiến dịch Biên giới thu - đông (1950).", "Chiến dịch Việt Bắc thu - đông (1947).", "Cuộc chiến đấu ở các đô thị (1946)."], answer: 0 },
            { type: 'mcq', text: "Điểm khác biệt căn bản của chiến lược 'Chiến tranh cục bộ' (1965-1968) so với 'Chiến tranh đặc biệt' (1961-1965) của Mỹ là gì?", options: ["Sử dụng viện trợ kinh tế và cố vấn quân sự Mỹ.", "Đưa số lượng lớn quân viễn chinh Mỹ và đồng minh trực tiếp tham chiến.", "Dồn dân lập 'ấp chiến lược' trên quy mô toàn miền Nam.", "Chỉ sử dụng không quân bắn phá miền Bắc."], answer: 1 },
            { type: 'mcq', text: "Thắng lợi của cuộc Tổng tiến công và nổi dậy Xuân Mậu Thân (1968) đã buộc Mỹ phải có hành động gì?", options: ["Tuyên bố rút toàn bộ quân đội về nước ngay lập tức.", "Kí kết Hiệp định Giơ-ne-vơ chia cắt Việt Nam.", "Thừa nhận thất bại của 'Chiến tranh cục bộ' và ngồi vào bàn đàm phán Pa-ri.", "Thừa nhận thất bại của 'Việt Nam hóa chiến tranh'."], answer: 2 },
            { type: 'mcq', text: "Bài học lịch sử lớn nhất về chỉ đạo chiến lược được rút ra từ thắng lợi của Chiến dịch Hồ Chí Minh lịch sử (1975) là gì?", options: ["Kết hợp đấu tranh quân sự với ngoại giao để ép địch đầu hàng.", "Chủ động, linh hoạt nắm bắt thời cơ, kiên quyết tập trung lực lượng đánh đòn quyết định.", "Chỉ dựa vào viện trợ của các nước Xã hội chủ nghĩa anh em.", "Đánh tiêu hao sinh lực địch để kéo dài chiến tranh."], answer: 1 }
        ],
        tf: [
            { type: 'tf', text: "Về cuộc kháng chiến chống Mỹ, cứu nước (1954 - 1975):", options: [
                { text: "a) (Nhận biết) Cuộc kháng chiến chống Mỹ cứu nước của nhân dân Việt Nam kéo dài 21 năm.", answer: true },
                { text: "b) (Thông hiểu) Điểm cốt lõi làm nên sự vĩ đại của chiến công này là đường lối tiến hành đồng thời hai nhiệm vụ chiến lược ở hai miền Nam - Bắc.", answer: true },
                { text: "c) (Vận dụng) Chiến thắng 'Điện Biên Phủ trên không' cuối năm 1972 đã buộc Mỹ phải ký Hiệp định Pa-ri, rút quân về nước.", answer: true },
                { text: "d) (Vận dụng cao) Thắng lợi này chứng minh quy luật: sức mạnh của vũ khí công nghệ cao luôn bị đánh bại bởi nghệ thuật chiến tranh du kích truyền thống.", answer: false }
            ]}
        ]
    }
};

appDatabase.khoi12[3] = {
    title: "Chủ đề 4, 5, 6: Đổi mới, Đối ngoại & Hồ Chí Minh",
    exercises: {
        mcq: [
            { type: 'mcq', text: "Đại hội đại biểu toàn quốc lần thứ VI (1986) của Đảng Cộng sản Việt Nam đã đề ra đường lối đổi mới trên lĩnh vực nào là trọng tâm?", options: ["Văn hóa - Giáo dục.", "Kinh tế.", "Chính trị.", "Ngoại giao."], answer: 1 },
            { type: 'mcq', text: "Bản chất của công cuộc Đổi mới ở Việt Nam (từ năm 1986) là gì?", options: ["Thay đổi hoàn toàn mục tiêu của chủ nghĩa xã hội.", "Chuyển sang nền kinh tế tư bản chủ nghĩa hoàn toàn.", "Làm cho mục tiêu xã hội chủ nghĩa được thực hiện hiệu quả bằng biện pháp, bước đi thích hợp.", "Xóa bỏ vai trò lãnh đạo của Đảng Cộng sản Việt Nam."], answer: 2 },
            { type: 'mcq', text: "Nguyễn Ái Quốc đã đọc bản Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa của V.I. Lê-nin vào năm nào?", options: ["1911", "1919", "1920", "1930"], answer: 2 },
            { type: 'mcq', text: "Trong bối cảnh hội nhập quốc tế, Việt Nam đã vận dụng bài học 'kết hợp sức mạnh dân tộc và sức mạnh thời đại' như thế nào?", options: ["Chỉ dựa vào nội lực, từ chối mọi nguồn vốn đầu tư nước ngoài FDI.", "Chấp nhận mất độc lập chủ quyền để đổi lấy viện trợ kinh tế.", "Phát huy nội lực, đồng thời tranh thủ tối đa nguồn lực bên ngoài (vốn, công nghệ) để phát triển.", "Can thiệp vũ trang vào các cuộc xung đột quốc tế để nâng cao vị thế."], answer: 2 },
            { type: 'mcq', text: "Từ thành tựu 40 năm Đổi mới (1986-2026), đâu là thách thức lớn nhất mà nền kinh tế Việt Nam phải vượt qua để tiếp tục hội nhập sâu rộng?", options: ["Sự gia tăng quá nhanh của dân số nông thôn.", "Nhu cầu chuyển đổi sang kinh tế số, kinh tế xanh và nâng cao chất lượng nguồn nhân lực.", "Sự bao vây, cấm vận kinh tế của các thế lực thù địch.", "Sự khan hiếm tuyệt đối của các loại tài nguyên khoáng sản."], answer: 1 }
        ],
        tf: [
            { type: 'tf', text: "Về quá trình Đổi mới và hội nhập quốc tế của Việt Nam:", options: [
                { text: "a) (Nhận biết) Năm 1986, Đại hội VI xác định nền kinh tế Việt Nam vận hành theo cơ chế thị trường định hướng XHCN.", answer: true },
                { text: "b) (Thông hiểu) Phương châm ngoại giao 'Việt Nam muốn là bạn với tất cả các nước' đã giúp phá vỡ thế bao vây cấm vận trong thập niên 90.", answer: true },
                { text: "c) (Vận dụng) Đổi mới là quá trình phủ định hoàn toàn những thành tựu xây dựng kinh tế trước năm 1986.", answer: false },
                { text: "d) (Vận dụng cao) Sự thành công của công cuộc Đổi mới chứng tỏ việc kiên định nền tảng chủ nghĩa Mác-Lênin, tư tưởng Hồ Chí Minh là điều kiện tiên quyết.", answer: true }
            ]}
        ]
    }
};

// Tự động nạp "Bài kiểm tra" bằng cách trộn MCQ và TF
[appDatabase.khoi10, appDatabase.khoi11, appDatabase.khoi12].forEach(khoi => {
    Object.keys(khoi).forEach(topicId => {
        khoi[topicId].exercises.test = [
            ...khoi[topicId].exercises.mcq,
            ...khoi[topicId].exercises.tf
        ];
    });
});

// ================= DỮ LIỆU ĐỀ THI THỬ (Các đề mẫu 1-6 giữ nguyên cấu trúc) =================
appDatabase.mocktest[1] = [
    { type: 'mcq', text: "Thắng lợi của cuộc Tiến công chiến lược năm 1972 của quân và dân Việt Nam có ý nghĩa nào sau đây?", options: ["Buộc Mỹ phải xuống thang chiến tranh, lập tức rút hết quân về nước.", "Kết thúc cuộc cách mạng dân tộc dân chủ nhân dân ở miền Nam Việt Nam.", "Giáng đòn quyết định làm sụp đổ hoàn toàn chính quyền Sài Gòn.", "Buộc Mỹ phải thừa nhận sự thất bại của chiến lược 'Việt Nam hóa chiến tranh'."], answer: 3 },
    { type: 'mcq', text: "Phan Bội Châu có hoạt động đối ngoại nào sau đây vào đầu thế kỉ XX?", options: ["Đàm phán với Pháp để thực hiện cải cách cho Việt Nam.", "Liên hệ với lực lượng Đồng minh chống phát xít.", "Tham dự Đại hội lần thứ XVIII của Đảng Xã hội Pháp.", "Vận động sự ủng hộ của Nhật Bản để giải phóng dân tộc."], answer: 3 },
    { type: 'mcq', text: "Nhận định nào sau đây là đúng về công cuộc Đổi mới ở Việt Nam từ năm 1986 đến nay?", options: ["Diễn ra đồng bộ và sâu rộng nhưng độc lập trên các lĩnh vực kinh tế - xã hội.", "Là sự thay đổi hình thức, bước đi và biện pháp để thực hiện mục tiêu xã hội chủ nghĩa.", "Có sự điều hành trực tiếp của nhà nước vào những quy trình sản xuất của các doanh nghiệp.", "Hạn chế sự phát triển của kinh tế tư nhân để tập trung phát triển kinh tế nhà nước."], answer: 1 },
    { type: 'mcq', text: "Các nước ASEAN đã kí kết văn kiện nào sau đây vào năm 2003?", options: ["Tuyên ngôn Quốc tế Nhân quyền.", "Tuyên bố Ba-li II.", "Hiến chương Liên hợp quốc.", "Hiến chương ASEAN."], answer: 1 },
    { type: 'mcq', text: "Tổ chức nào sau đây được thành lập để củng cố sức mạnh khối đại đoàn kết toàn dân tộc Việt Nam vào năm 1951?", options: ["Hội Chấn Hoa Hưng Á.", "Việt Nam Quang phục Hội.", "Mặt trận Liên Việt.", "Hội Liên hiệp thuộc địa."], answer: 2 },
    { type: 'mcq', text: "Liên hợp quốc có hoạt động nào sau đây để bảo đảm quyền con người?", options: ["Xây dựng và kí kết các văn bản, điều ước quốc tế về quyền con người.", "Can thiệp trực tiếp vào các nước nhằm thi hành triệt để quyền con người.", "Thành lập khối phòng thủ chung dựa trên cơ sở đồng thuận.", "Xây dựng thể chế chính trị thống nhất cho các quốc gia."], answer: 0 },
    { type: 'tf', text: "Đọc đoạn tư liệu sau: 'Nhìn lại 40 năm thực hiện công cuộc đổi mới... Kinh tế duy trì tốc độ phát triển tương đối nhanh, trở thành nước đang phát triển, có thu nhập trung bình...'", options: [
        { text: "a) Nội dung của đoạn tư liệu cho biết những thành tựu trên nhiều lĩnh vực trong công cuộc Đổi mới ở Việt Nam.", answer: true },
        { text: "b) Từ thực tiễn 40 năm đổi mới đất nước khẳng định nền kinh tế hàng hóa là điểm sáng tạo riêng của Việt Nam.", answer: false },
        { text: "c) Những thành tựu của công cuộc Đổi mới đã đưa Việt Nam trở thành quốc gia phát triển trên thế giới.", answer: false },
        { text: "d) Những thành tựu trong công cuộc Đổi mới hiện nay là nguồn lực và động lực cho sự phát triển của Việt Nam.", answer: true }
    ]},
    { type: 'tf', text: "Cho đoạn tư liệu: 'Hỡi đồng bào toàn quốc! Chúng ta muốn hòa bình, chúng ta phải nhân nhượng. Nhưng chúng ta càng nhân nhượng, thực dân Pháp càng lấn tới...'", options: [
        { text: "a) Lời kêu gọi toàn quốc kháng chiến thể hiện sự chủ động của Việt Nam trong việc đàm phán với Pháp.", answer: false },
        { text: "b) Lời kêu gọi khẳng định Việt Nam tiến hành chiến tranh vệ quốc khi không còn lựa chọn nào khác.", answer: true },
        { text: "c) Thông tin của đoạn tư liệu thể hiện tinh thần tự lực, tự cường của nhân dân Việt Nam.", answer: true },
        { text: "d) Ngay khi thực dân Pháp quay trở lại xâm lược VN (1945), Chủ tịch HCM đã kịp thời phát động toàn quốc kháng chiến.", answer: false }
    ]}
];
appDatabase.mocktest[2] = [ ...appDatabase.mocktest[1] ];
appDatabase.mocktest[3] = [ ...appDatabase.mocktest[1] ];
appDatabase.mocktest[4] = [ ...appDatabase.mocktest[1] ];
appDatabase.mocktest[5] = [ ...appDatabase.mocktest[1] ];
appDatabase.mocktest[6] = [ ...appDatabase.mocktest[1] ];


// ================= DỮ LIỆU ĐỀ THI THỬ SỐ 7 & 8 & 9 (THIẾT KẾ MỚI THEO 4 MỨC ĐỘ NHẬN THỨC) =================

appDatabase.mocktest[7] = [
    // --- PHẦN I: TRẮC NGHIỆM ĐA LỰA CHỌN (24 CÂU) ---
    // Mức độ Nhận biết (6 câu)
    { type: 'mcq', text: "Đại hội Xô viết toàn Nga lần thứ hai (tháng 10/1917) đã tuyên bố thành lập Chính quyền Xô viết do ai đứng đầu?", options: ["C. Mác.", "V. I. Lê-nin.", "I. Xta-lin.", "Ph. Ăng-ghen."], answer: 1 },
    { type: 'mcq', text: "Liên bang Cộng hoà xã hội chủ nghĩa Xô viết (Liên Xô) chính thức được thành lập vào thời gian nào?", options: ["30-12-1922.", "25-10-1917.", "21-1-1924.", "7-11-1917."], answer: 0 },
    { type: 'mcq', text: "Năm 1511, thực dân Bồ Đào Nha đã tấn công và đánh chiếm vương quốc nào, mở đầu cho quá trình xâm lược Đông Nam Á?", options: ["Xiêm.", "Ma-lắc-ca.", "Phi-líp-pin.", "Đại Việt."], answer: 1 },
    { type: 'mcq', text: "Cuộc kháng chiến chống quân Nam Hán (938) gắn liền với tên tuổi của vị anh hùng dân tộc nào?", options: ["Ngô Quyền.", "Lê Hoàn.", "Lý Thường Kiệt.", "Trần Hưng Đạo."], answer: 0 },
    { type: 'mcq', text: "Tổ chức Liên hợp quốc chính thức được thành lập vào ngày, tháng, năm nào?", options: ["24 - 10 - 1945.", "01 - 01 - 1942.", "26 - 06 - 1945.", "02 - 09 - 1945."], answer: 0 },
    { type: 'mcq', text: "Đại hội đại biểu toàn quốc lần thứ VI (1986) của Đảng Cộng sản Việt Nam đã đề ra đường lối đổi mới trên lĩnh vực nào là trọng tâm?", options: ["Văn hóa - Giáo dục.", "Kinh tế.", "Chính trị.", "Ngoại giao."], answer: 1 },
    
    // Mức độ Thông hiểu (6 câu)
    { type: 'mcq', text: "Đâu là một trong những nguyên tắc hoạt động cơ bản của Liên hợp quốc?", options: ["Giải quyết các tranh chấp quốc tế bằng biện pháp hòa bình.", "Can thiệp trực tiếp vào công việc nội bộ của các quốc gia khi có xung đột.", "Sử dụng vũ lực để răn đe các quốc gia vi phạm nhân quyền.", "Thiết lập một nhà nước toàn cầu thống nhất quản lý kinh tế."], answer: 0 },
    { type: 'mcq', text: "Đặc điểm nổi bật nhất của Trật tự thế giới hai cực I-an-ta là gì?", options: ["Sự hợp tác toàn diện giữa Mỹ và Liên Xô trên mọi lĩnh vực.", "Thế giới chia thành hai phe TBCN và XHCN do Mỹ và Liên Xô đứng đầu, đối đầu gay gắt.", "Các nước Á, Phi, Mỹ La-tinh trở thành trung tâm quyền lực mới.", "Sự thống trị tuyệt đối của chủ nghĩa thực dân cũ tại châu Á."], answer: 1 },
    { type: 'mcq', text: "Vì sao Vương quốc Xiêm (Thái Lan) là quốc gia duy nhất ở Đông Nam Á không bị biến thành thuộc địa?", options: ["Xiêm có quân đội mạnh nhất châu Á, đánh bại mọi cuộc xâm lược.", "Xiêm nằm ở vùng địa lý hiểm trở, thực dân phương Tây không thể tiếp cận.", "Tiến hành cải cách toàn diện, thực hiện ngoại giao khôn khéo, lợi dụng mâu thuẫn giữa Anh và Pháp.", "Xiêm là đồng minh chiến lược số một của đế quốc Mỹ tại châu Á."], answer: 2 },
    { type: 'mcq', text: "Bản chất cốt lõi của công cuộc Đổi mới ở Việt Nam (từ năm 1986) là gì?", options: ["Thay đổi hoàn toàn mục tiêu xã hội chủ nghĩa sang tư bản chủ nghĩa.", "Từ bỏ sự lãnh đạo của Đảng Cộng sản Việt Nam.", "Làm cho mục tiêu xã hội chủ nghĩa được thực hiện hiệu quả bằng những hình thức, bước đi và biện pháp thích hợp.", "Chỉ tập trung thay đổi nhân sự bộ máy nhà nước."], answer: 2 },
    { type: 'mcq', text: "Sự phân hóa giàu nghèo sâu sắc, phong trào 'Chiếm lấy phố Uôn' (2011) ở Mỹ là minh chứng cho điều gì về chủ nghĩa tư bản hiện đại?", options: ["CNTB đã bước vào thời kỳ diệt vong không thể cứu vãn.", "Sự điều tiết kinh tế vĩ mô của nhà nước tư sản đã thành công rực rỡ.", "CNTB hiện đại không có khả năng giải quyết triệt để các mâu thuẫn chính trị - xã hội.", "CNTB đã giải quyết được tình trạng bất bình đẳng giai cấp."], answer: 2 },
    { type: 'mcq', text: "Nguyên nhân chủ quan quan trọng nhất quyết định thắng lợi của các cuộc kháng chiến bảo vệ Tổ quốc trong lịch sử Việt Nam là gì?", options: ["Lực lượng quân đội Đại Việt đông gấp nhiều lần quân giặc.", "Kẻ thù gặp khó khăn về địa hình, khí hậu.", "Lòng yêu nước nồng nàn và khối đại đoàn kết toàn dân tộc.", "Sự viện trợ vũ khí hiện đại từ các quốc gia láng giềng."], answer: 2 },

    // Mức độ Vận dụng (6 câu)
    { type: 'mcq', text: "Từ chiến lược công nghiệp hoá thay thế nhập khẩu chuyển sang công nghiệp hoá hướng về xuất khẩu của các nước Đông Nam Á, bài học nào được rút ra cho chiến lược phát triển kinh tế?", options: ["Phải đóng cửa thị trường nội địa để bảo vệ sản xuất trong nước.", "Chỉ có dựa hoàn toàn vào vốn viện trợ ODA mới có thể công nghiệp hóa.", "Phải kết hợp khai thác thị trường nội địa gắn với mở cửa hội nhập, lấy xuất khẩu làm động lực chính.", "Xóa bỏ hoàn toàn nông nghiệp để tập trung cho công nghiệp nặng."], answer: 2 },
    { type: 'mcq', text: "Điểm khác biệt căn bản về lực lượng giữa Cách mạng tháng Tám (1945) ở Việt Nam so với các cuộc cách mạng tư sản thế kỉ XVII - XVIII là gì?", options: ["Cách mạng tháng Tám chỉ dựa vào lực lượng vũ trang.", "Cách mạng tháng Tám sử dụng bạo lực cách mạng kết hợp chính trị và vũ trang, do giai cấp công nhân lãnh đạo.", "Các cuộc cách mạng tư sản không có sự tham gia của nông dân.", "Cách mạng tháng Tám hoàn toàn diễn ra bằng phương pháp đàm phán ngoại giao."], answer: 1 },
    { type: 'mcq', text: "Trong bối cảnh hội nhập quốc tế, Việt Nam đã vận dụng bài học 'kết hợp sức mạnh dân tộc và sức mạnh thời đại' như thế nào?", options: ["Chỉ dựa vào nội lực, từ chối mọi nguồn vốn đầu tư nước ngoài FDI.", "Chấp nhận mất độc lập chủ quyền để đổi lấy viện trợ kinh tế.", "Phát huy nội lực, đồng thời tranh thủ tối đa nguồn lực bên ngoài (vốn, công nghệ) để phát triển.", "Can thiệp vũ trang vào các cuộc xung đột quốc tế để nâng cao vị thế."], answer: 2 },
    { type: 'mcq', text: "Bài học 'khoan thư sức dân' của Hưng Đạo Đại Vương Trần Quốc Tuấn được Đảng Cộng sản Việt Nam vận dụng như thế nào trong công cuộc Đổi mới (từ 1986)?", options: ["Chỉ tập trung phát triển quân sự, bỏ qua kinh tế.", "Lấy dân làm gốc, cải thiện đời sống vật chất và tinh thần của nhân dân làm mục tiêu phát triển.", "Tăng cường thu thuế để xây dựng ngân sách nhà nước.", "Kêu gọi viện trợ từ nước ngoài thay vì sử dụng nguồn lực trong dân."], answer: 1 },
    { type: 'mcq', text: "Để giải quyết tranh chấp chủ quyền trên Biển Đông hiện nay, Việt Nam đã vận dụng nguyên tắc nào của Liên hợp quốc?", options: ["Từ bỏ đe dọa bằng vũ lực, giải quyết tranh chấp bằng biện pháp hòa bình theo luật pháp quốc tế.", "Can thiệp trực tiếp vào nội bộ của quốc gia có tranh chấp.", "Sử dụng sức mạnh quân sự để răn đe.", "Tuyệt đối không đàm phán song phương hay đa phương."], answer: 0 },
    { type: 'mcq', text: "Sự xuất hiện của các tổ chức độc quyền (Các-ten, Tơ-rớt) vào cuối thế kỉ XIX - đầu thế kỉ XX chứng tỏ điều gì về chủ nghĩa tư bản?", options: ["Chủ nghĩa tư bản đã bước vào giai đoạn suy vong, sắp sụp đổ hoàn toàn.", "Sản xuất tư bản chủ nghĩa tích tụ và tập trung cao độ, chuyển từ tự do cạnh tranh sang độc quyền.", "Sự can thiệp triệt để của nhà nước vào mọi hoạt động kinh tế.", "Chủ nghĩa tư bản đã giải quyết triệt để mâu thuẫn giữa tư sản và vô sản."], answer: 1 },

    // Mức độ Vận dụng cao (6 câu)
    { type: 'mcq', text: "Đánh giá về tác động của sự sụp đổ Trật tự hai cực I-an-ta đối với khu vực Đông Nam Á, nhận định nào sau đây sâu sắc nhất?", options: ["Mở ra cơ hội hòa giải, đối thoại, đưa đến sự giải quyết vấn đề Campuchia và sự mở rộng của ASEAN thành 10 nước.", "Biến Đông Nam Á thành khu vực hoàn toàn phụ thuộc vào sự chi phối của Mỹ.", "Làm bùng nổ các cuộc chiến tranh sắc tộc khốc liệt chưa từng có ở khu vực.", "Đông Nam Á cắt đứt mọi quan hệ với Liên bang Nga và các nước Đông Âu."], answer: 0 },
    { type: 'mcq', text: "Việc Liên hợp quốc công nhận Tuyên ngôn Nhân quyền (1948) và vai trò của tổ chức này đối với các quốc gia đang phát triển hiện nay cho thấy quy luật gì trong quan hệ quốc tế?", options: ["Quyền lực cứng (quân sự) luôn áp đảo quyền lực mềm.", "Sự toàn cầu hóa làm mất đi chủ quyền quốc gia.", "Sự chuyển dịch từ đối đầu tư tưởng sang hợp tác giải quyết các vấn đề an ninh con người và phát triển bền vững.", "Các nước lớn luôn tìm cách xóa bỏ văn hóa của nước nhỏ."], answer: 2 },
    { type: 'mcq', text: "Sự khác biệt mang tính chất nguyên lý giữa công cuộc Đổi mới ở Việt Nam và Cải tổ ở Liên Xô dẫn đến hai kết cục hoàn toàn trái ngược là gì?", options: ["Việt Nam tiến hành cải tổ chính trị trước, kinh tế sau.", "Việt Nam từ bỏ mục tiêu XHCN để thu hút vốn FDI.", "Việt Nam đổi mới kinh tế làm trọng tâm, giữ vững ổn định chính trị và vai trò lãnh đạo tuyệt đối của Đảng Cộng sản.", "Liên Xô chỉ đổi mới kinh tế mà không chịu thay đổi hệ thống chính trị."], answer: 2 },
    { type: 'mcq', text: "Từ nghệ thuật 'toàn dân đánh giặc' trong Cách mạng tháng Tám và 30 năm chiến tranh giải phóng, triết lý xây dựng nền quốc phòng của Việt Nam hiện nay được định hướng như thế nào?", options: ["Chỉ dựa vào sự viện trợ công nghệ vũ khí từ nước ngoài.", "Xây dựng lực lượng quân đội nhà nghề đánh thuê.", "Xây dựng nền quốc phòng toàn dân, an ninh nhân dân, kết hợp sức mạnh dân tộc với sức mạnh thời đại bảo vệ Tổ quốc từ sớm, từ xa.", "Giao toàn bộ việc bảo vệ đất nước cho lực lượng Hải quân."], answer: 2 },
    { type: 'mcq', text: "Từ thành tựu 40 năm Đổi mới (1986-2026), đâu là thách thức lớn nhất mà nền kinh tế Việt Nam phải vượt qua để tránh bẫy thu nhập trung bình?", options: ["Sự gia tăng quá nhanh của dân số nông thôn.", "Khoảng cách giàu nghèo và nhu cầu chuyển đổi sang kinh tế số, kinh tế xanh, đổi mới sáng tạo.", "Sự bao vây, cấm vận kinh tế của các thế lực thù địch.", "Sự khan hiếm tuyệt đối của các loại tài nguyên khoáng sản."], answer: 1 },
    { type: 'mcq', text: "Bài học lịch sử lớn nhất về chỉ đạo chiến lược được rút ra từ thắng lợi của Chiến dịch Hồ Chí Minh lịch sử (1975) là gì?", options: ["Kết hợp đấu tranh quân sự với ngoại giao để ép địch đầu hàng.", "Chủ động, linh hoạt nắm bắt thời cơ, kiên quyết tập trung lực lượng đánh đòn quyết định.", "Chỉ dựa vào viện trợ của các nước Xã hội chủ nghĩa anh em.", "Đánh tiêu hao sinh lực địch để kéo dài chiến tranh."], answer: 1 },

    // --- PHẦN II: TRẮC NGHIỆM ĐÚNG/SAI (4 CÂU - Bao hàm 4 mức độ nhận thức trong từng ý) ---
    { type: 'tf', text: "Câu 1. Về sự vươn lên của các cường quốc và trật tự đa cực hiện nay:", options: [
        { text: "a) (Nhận biết) G20 là diễn đàn kinh tế gồm 20 nền kinh tế lớn nhất thế giới, được thành lập năm 1999.", answer: true },
        { text: "b) (Thông hiểu) Sự hình thành trật tự thế giới đa cực là một tiến trình lịch sử khách quan dựa trên sự phân bố lại sức mạnh kinh tế toàn cầu.", answer: true },
        { text: "c) (Vận dụng) Trong trật tự đa cực, Liên hợp quốc không còn đóng vai trò gì trong việc điều hòa các mâu thuẫn quốc tế.", answer: false },
        { text: "d) (Vận dụng cao) Xu thế đa cực tạo ra cơ hội lớn cho các nước đang phát triển như Việt Nam có thể tận dụng mâu thuẫn giữa các nước lớn để tối đa hóa lợi ích, nhưng tiềm ẩn rủi ro bị kẹt trong cạnh tranh.", answer: true }
    ]},
    { type: 'tf', text: "Câu 2. Về sự khủng hoảng và sụp đổ của chủ nghĩa xã hội ở Liên Xô và Đông Âu:", options: [
        { text: "a) (Nhận biết) Nửa sau những năm 70 của thế kỷ XX, tốc độ tăng trưởng kinh tế của các nước XHCN Đông Âu bắt đầu suy giảm.", answer: true },
        { text: "b) (Thông hiểu) Nguyên nhân cơ bản là do áp dụng máy móc mô hình kinh tế tập trung, quan liêu, bao cấp trong nhiều năm.", answer: true },
        { text: "c) (Vận dụng) Quá trình cải cách, cải tổ phạm sai lầm nghiêm trọng về đường lối và sự xóa bỏ vai trò lãnh đạo của Đảng Cộng sản.", answer: true },
        { text: "d) (Vận dụng cao) Sự sụp đổ của chủ nghĩa xã hội ở Liên Xô và Đông Âu đồng nghĩa với sự sụp đổ hoàn toàn của lý luận chủ nghĩa Mác - Lênin trên thế giới.", answer: false }
    ]},
    { type: 'tf', text: "Câu 3. Về Cách mạng tháng Tám năm 1945 và sự ra đời của nước Việt Nam Dân chủ Cộng hòa:", options: [
        { text: "a) (Nhận biết) Ngày 2-9-1945, tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập.", answer: true },
        { text: "b) (Thông hiểu) Thắng lợi của Cách mạng tháng Tám đã đánh dấu sự chấm dứt hoàn toàn của chế độ quân chủ tồn tại hàng ngàn năm ở Việt Nam.", answer: true },
        { text: "c) (Vận dụng) Cách mạng tháng Tám thành công nhanh chóng và ít đổ máu chủ yếu là do quân phiệt Nhật đã đầu hàng quân Đồng minh trước đó.", answer: false },
        { text: "d) (Vận dụng cao) Nghệ thuật chớp thời cơ trong Cách mạng tháng Tám là bài học vô giá về sự nhạy bén chính trị để Đảng vận dụng vào quá trình hội nhập quốc tế hiện nay.", answer: true }
    ]},
    { type: 'tf', text: "Câu 4. Cho đoạn tư liệu: 'Đại đoàn kết toàn dân tộc là nền tảng hội tụ và phát huy cao nhất sức mạnh của Nhân dân... Kiên trì thực hiện đường lối đại đoàn kết toàn dân tộc trên nền tảng của khối liên minh giữa giai cấp công nhân, giai cấp nông dân và đội ngũ trí thức...'", options: [
        { text: "a) (Nhận biết) Đại hội đại biểu toàn quốc lần thứ XIV (2026) của Đảng CSVN bước đầu xác định đại đoàn kết toàn dân là nguồn sức mạnh cần phát huy.", answer: false },
        { text: "b) (Thông hiểu) Sức mạnh của khối đại đoàn kết toàn dân tộc được phát huy cao độ dưới sự lãnh đạo của Đảng Cộng sản Việt Nam.", answer: true },
        { text: "c) (Vận dụng) Đường lối đại đoàn kết toàn dân tộc Việt Nam được xây dựng trên nền tảng của khối liên minh công – nông và tư sản dân tộc.", answer: false },
        { text: "d) (Vận dụng cao) Bài học đại đoàn kết từ các cuộc đấu tranh giải phóng dân tộc vẫn là chìa khóa then chốt để Việt Nam vươn tới phát triển phồn vinh, hùng cường.", answer: true }
    ]}
];

appDatabase.mocktest[8] = [
    // --- PHẦN I: TRẮC NGHIỆM ĐA LỰA CHỌN (24 CÂU) ---
    // Nhận biết
    { type: 'mcq', text: "Theo Hội nghị I-an-ta (1945), khu vực nào thuộc phạm vi ảnh hưởng của Liên Xô?", options: ["Tây Âu.", "Đông Âu.", "Tây Đức.", "Đông Nam Á."], answer: 1 },
    { type: 'mcq', text: "Sự sụp đổ của chủ nghĩa xã hội ở Đông Âu và Liên Xô diễn ra vào thời gian nào?", options: ["Sau Chiến tranh thế giới thứ hai.", "Thập kỉ 70 của thế kỉ XX.", "Cuối những năm 80 - đầu 90 của thế kỉ XX.", "Đầu thế kỉ XXI."], answer: 2 },
    { type: 'mcq', text: "Mặt trận Liên hiệp quốc dân Việt Nam (Mặt trận Liên Việt) được thành lập vào năm nào?", options: ["1930.", "1941.", "1945.", "1951."], answer: 3 },
    { type: 'mcq', text: "Nước Việt Nam Dân chủ Cộng hòa chính thức ra đời vào ngày nào?", options: ["19-8-1945.", "2-9-1945.", "6-3-1946.", "19-12-1946."], answer: 1 },
    { type: 'mcq', text: "Hai tôn giáo có ảnh hưởng sâu rộng hàng đầu của Ấn Độ thời cổ đại là gì?", options: ["Cơ Đốc giáo và Hồi giáo.", "Hin-đu giáo và Phật giáo.", "Nho giáo và Đạo giáo.", "Tin Lành và Công giáo."], answer: 1 },
    { type: 'mcq', text: "Cuộc cách mạng Tân Hợi (1911) ở Trung Quốc đã lật đổ triều đại nào?", options: ["Nhà Minh.", "Nhà Hán.", "Nhà Thanh.", "Nhà Tống."], answer: 2 },
    // Thông hiểu
    { type: 'mcq', text: "Sự ra đời của tổ chức Liên hợp quốc (1945) mang ý nghĩa chủ yếu nào sau đây?", options: ["Tạo ra một liên minh quân sự chống lại Liên Xô.", "Tạo ra một cơ chế quốc tế để duy trì hòa bình và an ninh thế giới.", "Thành lập một chính phủ quản lý toàn cầu.", "Phân chia lợi ích kinh tế giữa các nước thắng trận."], answer: 1 },
    { type: 'mcq', text: "Nguyên nhân sâu xa dẫn đến các cuộc cách mạng tư sản (thế kỉ XVI - XVIII) bùng nổ là gì?", options: ["Sự xung đột tôn giáo giữa các giáo phái.", "Mâu thuẫn giữa lực lượng sản xuất mới (TBCN) với quan hệ sản xuất phong kiến lạc hậu.", "Sự can thiệp của các cường quốc bên ngoài.", "Khủng hoảng do thiên tai và dịch bệnh kéo dài."], answer: 1 },
    { type: 'mcq', text: "Điểm nổi bật trong chính sách đối ngoại của Việt Nam từ Đổi mới (1986) đến nay là gì?", options: ["Chỉ hợp tác với các nước xã hội chủ nghĩa.", "Đa phương hóa, đa dạng hóa quan hệ quốc tế.", "Thực hiện chính sách bế quan tỏa cảng để bảo vệ an ninh.", "Chỉ gia nhập các liên minh quân sự ở châu Á."], answer: 1 },
    { type: 'mcq', text: "Sự kiện nào đánh dấu bước phát triển nhảy vọt của cách mạng miền Nam, chuyển từ thế giữ gìn lực lượng sang thế tiến công?", options: ["Chiến thắng Ấp Bắc (1963).", "Phong trào Đồng khởi (1959-1960).", "Cuộc Tổng tiến công và nổi dậy Xuân Mậu Thân (1968).", "Trận 'Điện Biên Phủ trên không' (1972)."], answer: 1 },
    { type: 'mcq', text: "Đặc điểm chung của các nước Đông Nam Á hải đảo khi bị thực dân phương Tây xâm lược là gì?", options: ["Là những nước có nền kinh tế tư bản chủ nghĩa phát triển cao.", "Là khu vực giàu tài nguyên và nằm trên tuyến đường biển huyết mạch.", "Có quân đội hiện đại nhất châu Á.", "Là các quốc gia theo chế độ dân chủ cộng hòa."], answer: 1 },
    { type: 'mcq', text: "Ba chương trình kinh tế lớn được đề ra tại Đại hội VI (1986) phản ánh sự thay đổi tư duy gì của Đảng ta?", options: ["Ưu tiên phát triển công nghiệp nặng.", "Tập trung xây dựng hợp tác xã quy mô lớn.", "Chuyển từ ưu tiên công nghiệp nặng sang tập trung giải quyết nhu cầu thiết yếu của đời sống nhân dân (lương thực, hàng tiêu dùng, xuất khẩu).", "Từ bỏ hoàn toàn sản xuất nông nghiệp."], answer: 2 },
    // Vận dụng
    { type: 'mcq', text: "Điểm giống nhau về hoàn cảnh lịch sử của cuộc kháng chiến chống Pháp (1945-1954) và chống Mỹ (1954-1975) là gì?", options: ["Đều nhận được sự đồng thuận tuyệt đối của Liên hợp quốc.", "Đều diễn ra trong bối cảnh thế giới chia thành hai phe, Chiến tranh lạnh căng thẳng.", "Đều có sự tham gia trực tiếp của quân đội các nước Tây Âu.", "Đều bị mất toàn bộ chính quyền ngay từ những ngày đầu."], answer: 1 },
    { type: 'mcq', text: "Từ sự phát triển của CNTB từ tự do cạnh tranh sang độc quyền, quy luật nào của kinh tế thị trường được thể hiện rõ nhất?", options: ["Quy luật cung cầu.", "Quy luật giá trị.", "Quy luật tích tụ và tập trung tư bản (vốn và sản xuất).", "Quy luật lưu thông tiền tệ."], answer: 2 },
    { type: 'mcq', text: "Bài học kinh nghiệm nào từ Hiệp định Pa-ri (1973) vẫn còn nguyên giá trị đối với hoạt động ngoại giao của Việt Nam hiện nay?", options: ["Phụ thuộc hoàn toàn vào sự dàn xếp của các nước lớn.", "Chỉ đàm phán khi đã tiêu diệt hoàn toàn lực lượng đối phương.", "Kết hợp chặt chẽ giữa sức mạnh thực lực trên thực địa với đấu tranh trên bàn đàm phán ngoại giao.", "Từ chối mọi sự nhượng bộ dù là nhỏ nhất."], answer: 2 },
    { type: 'mcq', text: "Sự kết nối giữa Lịch sử và đời sống thực tiễn hiện nay được thể hiện rõ nhất qua hoạt động nào?", options: ["Chỉ tập trung học thuộc lòng các mốc thời gian.", "Bảo tàng hóa tất cả mọi di tích, cấm con người tiếp cận.", "Vận dụng bài học quá khứ để định hướng tương lai và phát triển các ngành công nghiệp văn hóa, du lịch.", "Viết lại lịch sử theo ý muốn chủ quan của cá nhân."], answer: 2 },
    { type: 'mcq', text: "Điểm chung về nguyên nhân thắng lợi của các cuộc kháng chiến bảo vệ Tổ quốc trong lịch sử Việt Nam (chống Tống, Nguyên, Minh, Thanh, Pháp, Mỹ) là gì?", options: ["Vũ khí luôn hiện đại hơn kẻ thù.", "Sức mạnh vô địch của khối đại đoàn kết toàn dân tộc dưới sự lãnh đạo của tổ chức/nhân vật kiệt xuất.", "Sự viện trợ quân sự trực tiếp từ bên ngoài.", "Kẻ thù tự động rút lui do dịch bệnh."], answer: 1 },
    { type: 'mcq', text: "Việc Việt Nam tích cực hội nhập kinh tế quốc tế (gia nhập WTO, tham gia các FTA) phản ánh việc vận dụng bài học nào từ lịch sử?", options: ["Bài học về 'Vườn không nhà trống'.", "Bài học về 'Tiên phát chế nhân'.", "Bài học về 'Kết hợp sức mạnh dân tộc và sức mạnh thời đại'.", "Bài học về 'Chiến tranh du kích'."], answer: 2 },
    // Vận dụng cao
    { type: 'mcq', text: "Tại sao nói sự sụp đổ của Trật tự hai cực Ianta đã tạo ra 'cơ hội vàng' nhưng cũng đi kèm 'thách thức khôn lường' đối với Việt Nam?", options: ["Cơ hội để Việt Nam chiếm lĩnh toàn bộ thị trường châu Âu, nhưng thách thức vì thiếu vốn.", "Cơ hội phá vỡ thế bao vây cấm vận để hội nhập, nhưng đối mặt với thách thức cạnh tranh kinh tế gay gắt và bảo vệ bản sắc, an ninh quốc gia.", "Cơ hội để Việt Nam trở thành siêu cường quân sự, nhưng thách thức vì Mỹ cấm vận.", "Cơ hội thiết lập liên minh quân sự mới, nhưng thách thức vì LHQ phản đối."], answer: 1 },
    { type: 'mcq', text: "Từ sự thất bại của nhà Hồ trong cuộc kháng chiến chống Minh (1406-1407), bài học lớn nhất được rút ra cho công cuộc bảo vệ Tổ quốc hiện nay là gì?", options: ["Thành lũy kiên cố và vũ khí hiện đại là yếu tố duy nhất quyết định chiến thắng.", "Cải cách kinh tế phải thực hiện triệt để bằng bạo lực.", "Phải xây dựng thế trận lòng dân vững chắc, 'khoan thư sức dân' làm kế sâu rễ bền gốc.", "Tuyệt đối không được thay đổi các chính sách kinh tế truyền thống."], answer: 2 },
    { type: 'mcq', text: "Đánh giá về vai trò của Liên hợp quốc hiện nay trong bối cảnh thế giới đa cực, nhận định nào sau đây là toàn diện nhất?", options: ["Liên hợp quốc đã hoàn toàn mất đi vị trí và không còn khả năng giải quyết bất cứ vấn đề gì.", "LHQ là cơ quan quyền lực tuyệt đối, có thể ép buộc mọi quốc gia tuân thủ mọi quyết định.", "Tuy còn những hạn chế do sự chi phối của nước lớn, nhưng LHQ vẫn là diễn đàn toàn cầu quan trọng nhất để điều hòa các quan hệ và giải quyết xung đột bằng biện pháp hòa bình.", "LHQ chỉ hoạt động hiệu quả trong lĩnh vực y tế, văn hóa, không có vai trò chính trị."], answer: 2 },
    { type: 'mcq', text: "Sự sáng tạo lớn nhất của Đảng ta trong việc chỉ đạo thực hiện cuộc kháng chiến chống Mỹ (1954-1975) là gì?", options: ["Tiến hành chiến tranh thông thường bằng các binh đoàn chủ lực lớn ngay từ đầu.", "Tiến hành đồng thời hai chiến lược cách mạng ở hai miền (XHCN ở miền Bắc, DTDCND ở miền Nam) với mục tiêu chung là giải phóng miền Nam, thống nhất đất nước.", "Dựa hoàn toàn vào sức mạnh của các nước Xã hội chủ nghĩa anh em để đánh bại Mỹ.", "Sử dụng đấu tranh nghị trường để buộc Mỹ rút quân."], answer: 1 },
    { type: 'mcq', text: "Tác động tiêu cực của các cuộc Cách mạng công nghiệp đối với nhân loại đặt ra yêu cầu cấp bách nào cho chiến lược phát triển của Việt Nam hiện nay?", options: ["Từ chối tiếp nhận công nghệ mới để bảo vệ môi trường.", "Phát triển kinh tế bằng mọi giá, kể cả hy sinh tài nguyên thiên nhiên.", "Phát triển bền vững, gắn tăng trưởng kinh tế số, kinh tế xanh với bảo vệ môi trường và giải quyết các vấn đề xã hội.", "Quay trở lại nền sản xuất nông nghiệp tự cung tự cấp."], answer: 2 },
    { type: 'mcq', text: "Từ thực tiễn giải quyết vấn đề Biển Đông, nguyên tắc nào của ASEAN thể hiện rõ nhất hiệu quả trong việc duy trì hòa bình khu vực?", options: ["Nguyên tắc thành lập liên minh quân sự chung để răn đe.", "Nguyên tắc đồng thuận và giải quyết các tranh chấp bằng biện pháp hòa bình theo luật pháp quốc tế.", "Nguyên tắc trục xuất các nước có tranh chấp ra khỏi tổ chức.", "Nguyên tắc sử dụng sức mạnh kinh tế để áp đặt giải pháp."], answer: 1 },
    
    // --- PHẦN II: TRẮC NGHIỆM ĐÚNG/SAI (4 CÂU) ---
    { type: 'tf', text: "Câu 1. Về chiến dịch Điện Biên Phủ (1954) và cuộc kháng chiến chống Pháp:", options: [
        { text: "a) (Nhận biết) Chiến dịch Điện Biên Phủ kết thúc thắng lợi vào ngày 7-5-1954.", answer: true },
        { text: "b) (Thông hiểu) Thắng lợi của chiến dịch đã giáng đòn quyết định làm phá sản hoàn toàn kế hoạch Na-va của Pháp có Mỹ hậu thuẫn.", answer: true },
        { text: "c) (Vận dụng) Chiến thắng Điện Biên Phủ chỉ có ý nghĩa đối với Việt Nam, hoàn toàn không có tác động đến phong trào giải phóng dân tộc trên thế giới.", answer: false },
        { text: "d) (Vận dụng cao) Việc thay đổi phương châm từ 'đánh nhanh thắng nhanh' sang 'đánh chắc tiến chắc' là minh chứng cho tư duy quân sự linh hoạt, sáng tạo và bám sát thực tiễn chiến trường của quân đội ta.", answer: true }
    ]},
    { type: 'tf', text: "Câu 2. Về sự phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN):", options: [
        { text: "a) (Nhận biết) ASEAN được thành lập vào năm 1967 tại Thái Lan với 5 quốc gia sáng lập ban đầu.", answer: true },
        { text: "b) (Thông hiểu) Mục tiêu cốt lõi của ASEAN là phát triển kinh tế, văn hóa, xã hội và duy trì hòa bình, ổn định khu vực.", answer: true },
        { text: "c) (Vận dụng) Việc Việt Nam gia nhập ASEAN năm 1995 đã buộc tổ chức này phải thay đổi toàn bộ mục tiêu và nguyên tắc hoạt động.", answer: false },
        { text: "d) (Vận dụng cao) 'Phương cách ASEAN' (đồng thuận và không can thiệp) luôn giúp tổ chức này giải quyết triệt để và nhanh chóng mọi tranh chấp trên Biển Đông bằng các chế tài quân sự cứng rắn.", answer: false }
    ]},
    { type: 'tf', text: "Câu 3. Đọc đoạn tư liệu về vai trò của Sử học: '...Lịch sử chống ngoại xâm vừa thử thách, vừa tôi luyện dân tộc ta. Những cuộc chiến tranh yêu nước đã tạo nên cho dân tộc ta một bản lĩnh kiên cường...'", options: [
        { text: "a) (Nhận biết) Sử học là khoa học nghiên cứu về quá trình tiến hóa của các loài sinh vật.", answer: false },
        { text: "b) (Thông hiểu) Một trong những nhiệm vụ của Sử học là cung cấp tri thức khoa học, đúc kết bài học kinh nghiệm từ quá khứ cho cuộc sống hiện tại.", answer: true },
        { text: "c) (Vận dụng) Tư liệu trên nhấn mạnh rằng chiến tranh là yếu tố duy nhất để hình thành nên văn hóa và lịch sử Việt Nam.", answer: false },
        { text: "d) (Vận dụng cao) Nhận thức sâu sắc về bản lĩnh kiên cường từ quá khứ là nền tảng tinh thần cốt lõi để thế hệ trẻ Việt Nam hiện nay kiên định bảo vệ chủ quyền quốc gia.", answer: true }
    ]},
    { type: 'tf', text: "Câu 4. Cho đoạn tư liệu: 'Đại đoàn kết toàn dân tộc là nền tảng hội tụ và phát huy cao nhất sức mạnh của Nhân dân... Kiên trì thực hiện đường lối đại đoàn kết toàn dân tộc trên nền tảng của khối liên minh giữa giai cấp công nhân, giai cấp nông dân và đội ngũ trí thức...'", options: [
        { text: "a) (Nhận biết) Đại hội đại biểu toàn quốc lần thứ XIV (2026) của Đảng CSVN bước đầu xác định đại đoàn kết toàn dân là nguồn sức mạnh cần phát huy.", answer: false },
        { text: "b) (Thông hiểu) Sức mạnh của khối đại đoàn kết toàn dân tộc được phát huy cao độ dưới sự lãnh đạo của Đảng Cộng sản Việt Nam.", answer: true },
        { text: "c) (Vận dụng) Đường lối đại đoàn kết toàn dân tộc Việt Nam được xây dựng trên nền tảng của khối liên minh công – nông và tư sản dân tộc.", answer: false },
        { text: "d) (Vận dụng cao) Bài học đại đoàn kết từ các cuộc đấu tranh giải phóng dân tộc vẫn là chìa khóa then chốt để Việt Nam vươn tới phát triển phồn vinh, hùng cường.", answer: true }
    ]}
];

// Khởi tạo các Đề thi thử trống (9 và 10)
appDatabase.mocktest[9] = []; 
appDatabase.mocktest[10] = []; 

/* =========================================================================
   LOGIC HOẠT ĐỘNG GIAO DIỆN
========================================================================= */

let currentSection = 'khoi12'; 
let currentTopicId = null;
let currentExerciseType = null; 
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
                <div id="menu-${currentSection}-${topicId}" class="flex flex-col bg-white border-t border-gray-100 hidden-element">
                    <button onclick="startTest('${currentSection}', ${topicId}, 'mcq')" class="text-left px-6 py-3 text-sm border-b border-gray-50 hover:bg-blue-50">Luyện Trắc nghiệm (Nhiều lựa chọn)</button>
                    <button onclick="startTest('${currentSection}', ${topicId}, 'tf')" class="text-left px-6 py-3 text-sm border-b border-gray-50 hover:bg-blue-50">Luyện Đúng/Sai</button>
                    <button onclick="startTest('${currentSection}', ${topicId}, 'test')" class="text-left px-6 py-3 text-sm border-b border-gray-50 hover:bg-blue-50 font-semibold text-red-600">Bài kiểm tra Đơn vị</button>
                </div>
            `;
            container.appendChild(div);
        });
    } else {
        const div = document.createElement('div');
        div.className = 'flex flex-col bg-white';
        for (let t = 1; t <= 10; t++) {
            let label = t <= 8 ? `Đề thi thử Tốt nghiệp số ${t}` : `Đề thi thử Tốt nghiệp số ${t} (Đang cập nhật)`;
            div.innerHTML += `<button onclick="startTest('mocktest', null, ${t})" class="text-left px-6 py-4 text-sm hover:bg-blue-50 border-b border-gray-100 font-semibold text-gray-700">${label}</button>`;
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
        document.getElementById('current-test-subtitle').innerText = "Cấu trúc 2026: Phân cấp 4 Mức độ (Nhận biết - Thông hiểu - Vận dụng - Vận dụng cao)";
        resetTimer(50); 
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
        container.innerHTML = `<div class="bg-gray-50 rounded-xl py-12 text-center border-2 border-dashed border-gray-300"><p class="text-gray-500 font-bold text-lg">Đang cập nhật câu hỏi cho phần này...</p></div>`;
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
                        <span class="flex-grow text-gray-800 mb-2 md:mb-0 md:mr-4"><strong>${['a', 'b', 'c', 'd'][oIdx]})</strong> ${opt.text.replace(/^[a-d]\)\s*/, '')}</span>
                        <div class="flex space-x-4 flex-shrink-0 mt-2 md:mt-0">
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
                    tfEl.classList.add('wrong-ans-box'); 
                }
            });

            if(correctSubCount === 4) totalScore += 1;
            else if(correctSubCount === 3) totalScore += 0.5;
            else if(correctSubCount === 2) totalScore += 0.25;
            else if(correctSubCount === 1) totalScore += 0.1;
        }
    });

    let finalScore = (totalScore / maxScore) * 10;
    
    document.getElementById('score-display').innerText = `${finalScore.toFixed(1)}/10`;
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
function continueAfterResult() { window.scrollTo({ top: 0, behavior: 'smooth' }); }