/* =========================================================================
   DATABASE LỊCH SỬ (Cấu trúc đề thi Tốt nghiệp THPT 2026)
   Dữ liệu được trích xuất chính xác từ SGK 10, 11, 12 & Đề tham khảo 2026
========================================================================= */

const appDatabase = {
    khoi10: {},
    khoi11: {},
    khoi12: {},
    mocktest: {}
};

// ================= DỮ LIỆU LỚP 10 =================
appDatabase.khoi10[1] = {
    title: "Chủ đề 1: Lịch sử và Sử học",
    exercises: {
        mcq: [
            { type: 'mcq', text: "Lịch sử được hiểu theo hai nghĩa cơ bản nào?", options: ["Lịch sử thế giới và lịch sử dân tộc.", "Hiện thực lịch sử và lịch sử được con người nhận thức.", "Lịch sử tự nhiên và lịch sử xã hội.", "Quá khứ và hiện tại."], answer: 1 },
            { type: 'mcq', text: "Hiện thực lịch sử là gì?", options: ["Tất cả những gì đã diễn ra trong quá khứ, tồn tại hoàn toàn khách quan.", "Những câu chuyện dân gian được kể lại.", "Những tác phẩm do các nhà sử học biên soạn.", "Những hiểu biết của con người về thế giới."], answer: 0 },
            { type: 'mcq', text: "Sử học là gì?", options: ["Khoa học nghiên cứu về tương lai của loài người.", "Khoa học nghiên cứu về quá trình tiến hóa của sinh giới.", "Khoa học nghiên cứu về quá khứ của loài người.", "Khoa học dự đoán các hiện tượng tự nhiên."], answer: 2 },
            { type: 'mcq', text: "Đối tượng nghiên cứu của Sử học là", options: ["quá trình phát triển của tự nhiên.", "toàn bộ quá khứ của loài người.", "những hiện tượng vũ trụ.", "sự phát triển của công nghệ."], answer: 1 },
            { type: 'mcq', text: "Sử liệu là gì?", options: ["Là những cuốn tiểu thuyết lịch sử.", "Là toàn bộ những hình thức khác nhau của tư liệu lịch sử, chứa đựng thông tin về quá khứ.", "Là những phán đoán của con người về quá khứ.", "Là kết quả trí tưởng tượng của các nhà nghiên cứu."], answer: 1 }
        ],
        tf: [
            { type: 'tf', text: "Đọc đoạn tư liệu: 'Sử để ghi việc, mà việc hay hoặc dở đều dùng làm gương răn cho đời sau' (Đại Việt sử ký toàn thư):", options: [
                { text: "a) Tư liệu trên nhấn mạnh chức năng dự báo tương lai của Sử học.", answer: false },
                { text: "b) Tư liệu khẳng định chức năng xã hội của Sử học là giáo dục, rút ra bài học kinh nghiệm.", answer: true },
                { text: "c) Sử học chỉ ghi lại những việc tốt đẹp trong quá khứ để làm gương.", answer: false },
                { text: "d) Việc tìm hiểu quá khứ giúp con người tránh được những sai lầm trong hiện tại.", answer: true }
            ]}
        ]
    }
};

appDatabase.khoi10[2] = {
    title: "Chủ đề 2: Vai trò của Sử học",
    exercises: {
        mcq: [
            { type: 'mcq', text: "Một trong những vai trò của Sử học đối với việc bảo tồn di sản văn hóa là gì?", options: ["Cung cấp cơ sở khoa học để khẳng định giá trị của di sản.", "Trực tiếp cung cấp nguồn tài chính để tu bổ di sản.", "Quyết định việc di sản có được UNESCO công nhận hay không.", "Thương mại hóa toàn bộ các di sản văn hóa."], answer: 0 },
            { type: 'mcq', text: "Loại hình di sản nào sau đây dễ bị biến dạng, xuống cấp, hư hỏng theo thời gian nhất?", options: ["Di sản văn hóa phi vật thể.", "Di sản văn hóa vật thể (đình, đền, tháp...).", "Di sản thiên nhiên.", "Các phong tục tập quán."], answer: 1 },
            { type: 'mcq', text: "Mối quan hệ giữa Sử học và sự phát triển du lịch là", options: ["mối quan hệ một chiều từ Sử học đến du lịch.", "mối quan hệ tương tác hai chiều.", "hoàn toàn độc lập, không liên quan.", "chỉ hỗ trợ khi có yêu cầu từ chính quyền."], answer: 1 },
            { type: 'mcq', text: "Khía cạnh văn hóa chiếm khoảng bao nhiêu % trong giá trị du lịch ở châu Âu (theo số liệu 2018)?", options: ["Khoảng 20%", "Khoảng 40%", "Khoảng 60%", "Khoảng 80%"], answer: 1 }
        ],
        tf: [
            { type: 'tf', text: "Về vai trò của Sử học với Di sản văn hóa và Du lịch:", options: [
                { text: "a) Sử học đóng vai trò quan trọng nhất trong việc khẳng định giá trị của di sản, làm cơ sở để bảo tồn.", answer: true },
                { text: "b) Du lịch phát triển sẽ góp phần thúc đẩy việc bảo vệ di sản văn hóa, di tích lịch sử của các quốc gia.", answer: true },
                { text: "c) Một phần doanh thu từ du lịch được tái đầu tư vào việc bảo tồn, phục dựng di tích.", answer: true },
                { text: "d) Việc phát huy giá trị di sản văn hóa bắt buộc phải thay đổi yếu tố gốc để thu hút khách du lịch hiện đại.", answer: false }
            ]}
        ]
    }
};

// ================= DỮ LIỆU LỚP 11 =================
appDatabase.khoi11[1] = {
    title: "Chủ đề 1: Cách mạng tư sản và sự phát triển của CNTB",
    exercises: {
        mcq: [
            { type: 'mcq', text: "Mục tiêu cơ bản của các cuộc cách mạng tư sản là gì?", options: ["Xóa bỏ rào cản kìm hãm sự phát triển của nền kinh tế tư bản chủ nghĩa.", "Xóa bỏ giai cấp tư sản.", "Đưa giai cấp công nhân lên nắm quyền.", "Bảo vệ chế độ phong kiến."], answer: 0 },
            { type: 'mcq', text: "Cách mạng tư sản bao gồm hai nhiệm vụ cơ bản nào?", options: ["Dân tộc và dân quyền.", "Dân chủ và dân sinh.", "Dân tộc và dân chủ.", "Độc lập và tự do."], answer: 2 },
            { type: 'mcq', text: "Giai cấp lãnh đạo Cách mạng tư sản Pháp cuối thế kỉ XVIII là", options: ["Giai cấp vô sản.", "Giai cấp tư sản.", "Quý tộc mới.", "Chủ nô."], answer: 1 },
            { type: 'mcq', text: "Động lực quyết định thắng lợi của các cuộc cách mạng tư sản là", options: ["sự giúp đỡ của nước ngoài.", "lực lượng quân đội đánh thuê.", "giai cấp lãnh đạo và quần chúng nhân dân.", "sự suy yếu của vua chúa phong kiến."], answer: 2 },
            { type: 'mcq', text: "Tổ chức độc quyền là gì?", options: ["Là sự liên minh giữa công nhân và nông dân.", "Là sự liên minh giữa các nhà tư bản lớn để tập trung sản xuất hoặc tiêu thụ nhằm thu lợi nhuận cao.", "Là tổ chức từ thiện của giai cấp tư sản.", "Là cơ quan quản lý nhà nước về kinh tế."], answer: 1 }
        ],
        tf: [
            { type: 'tf', text: "Về sự phát triển của chủ nghĩa tư bản:", options: [
                { text: "a) Cuối thế kỉ XIX - đầu thế kỉ XX, chủ nghĩa tư bản chuyển từ giai đoạn tự do cạnh tranh sang giai đoạn độc quyền.", answer: true },
                { text: "b) Tổ chức độc quyền là kết quả của quá trình phân tán sản xuất và vốn.", answer: false },
                { text: "c) Các hình thức tiêu biểu của tổ chức độc quyền là các-ten, xanh-đi-ca, tơ-rớt.", answer: true },
                { text: "d) Chủ nghĩa tư bản hiện đại không còn phải đối mặt với các cuộc khủng hoảng kinh tế, tài chính.", answer: false }
            ]}
        ]
    }
};

appDatabase.khoi11[2] = {
    title: "Chủ đề 2: Chủ nghĩa xã hội từ năm 1917 đến nay",
    exercises: {
        mcq: [
            { type: 'mcq', text: "Đại hội Xô viết toàn Nga lần thứ hai (tháng 10/1917) đã tuyên bố thành lập Chính quyền Xô viết do ai đứng đầu?", options: ["C. Mác.", "V. I. Lê-nin.", "I. Xta-lin.", "Ph. Ăng-ghen."], answer: 1 },
            { type: 'mcq', text: "Liên bang Cộng hoà xã hội chủ nghĩa Xô viết (Liên Xô) chính thức được thành lập vào thời gian nào?", options: ["30-12-1922.", "25-10-1917.", "21-1-1924.", "7-11-1917."], answer: 0 },
            { type: 'mcq', text: "Khi mới thành lập (1922), Liên Xô gồm bao nhiêu nước Cộng hoà Xô viết?", options: ["4 nước.", "11 nước.", "15 nước.", "18 nước."], answer: 0 },
            { type: 'mcq', text: "Nước Cộng hoà Nhân dân Trung Hoa được thành lập vào năm nào?", options: ["1945.", "1949.", "1954.", "1978."], answer: 1 },
            { type: 'mcq', text: "Tháng 12 - 1978, Trung Quốc đã thực hiện công cuộc gì?", options: ["Cách mạng văn hóa.", "Đại nhảy vọt.", "Cải cách mở cửa.", "Thành lập công xã nhân dân."], answer: 2 },
            { type: 'mcq', text: "Quốc gia nào ở khu vực Mỹ La-tinh đã kiên định đi theo con đường xây dựng chủ nghĩa xã hội bất chấp lệnh cấm vận của Mỹ?", options: ["Mê-hi-cô.", "Vê-nê-xu-ê-la.", "Cu-ba.", "Ác-hen-ti-na."], answer: 2 }
        ],
        tf: [
            { type: 'tf', text: "Về sự khủng hoảng và sụp đổ của chủ nghĩa xã hội ở Liên Xô và Đông Âu:", options: [
                { text: "a) Nguyên nhân cơ bản là do áp dụng máy móc mô hình kinh tế tập trung, quan liêu, bao cấp trong nhiều năm.", answer: true },
                { text: "b) Do nắm bắt và áp dụng kịp thời các thành tựu của cách mạng khoa học - công nghệ hiện đại.", answer: false },
                { text: "c) Quá trình cải cách, cải tổ phạm sai lầm nghiêm trọng về đường lối và sự xóa bỏ vai trò lãnh đạo của Đảng Cộng sản.", answer: true },
                { text: "d) Sự sụp đổ của chủ nghĩa xã hội ở Liên Xô và Đông Âu đồng nghĩa với sự sụp đổ hoàn toàn của chủ nghĩa xã hội trên thế giới.", answer: false }
            ]}
        ]
    }
};

appDatabase.khoi11[3] = {
    title: "Chủ đề 3: Các quốc gia Đông Nam Á",
    exercises: {
        mcq: [
            { type: 'mcq', text: "Năm 1511, thực dân Bồ Đào Nha đã tấn công và đánh chiếm vương quốc nào, mở đầu cho quá trình xâm lược Đông Nam Á?", options: ["Xiêm.", "Ma-lắc-ca.", "Phi-líp-pin.", "Đại Việt."], answer: 1 },
            { type: 'mcq', text: "Đến đầu thế kỉ XX, quốc gia duy nhất ở Đông Nam Á không trở thành thuộc địa của thực dân phương Tây là", options: ["Xin-ga-po.", "Miến Điện.", "Xiêm (Thái Lan).", "In-đô-nê-xi-a."], answer: 2 },
            { type: 'mcq', text: "Từ năm 1868, vị vua nào của Xiêm đã tiến hành hàng loạt cải cách quan trọng đưa đất nước phát triển theo con đường tư bản chủ nghĩa?", options: ["Vua Ra-ma I.", "Vua Ra-ma IV.", "Vua Ra-ma V.", "Vua Ra-ma VI."], answer: 2 },
            { type: 'mcq', text: "Điểm chung trong chính sách thống trị thực dân ở Đông Nam Á là gì?", options: ["Truyền bá và bảo vệ văn hóa truyền thống bản địa.", "Bóc lột kinh tế và sử dụng chính sách 'chia để trị'.", "Khuyến khích công nghiệp nặng phát triển toàn diện.", "Thực hiện chế độ phổ thông đầu phiếu cho người bản xứ."], answer: 1 }
        ],
        tf: [
            { type: 'tf', text: "Về quá trình đấu tranh giành độc lập và tái thiết ở Đông Nam Á:", options: [
                { text: "a) Năm 1945, In-đô-nê-xi-a, Việt Nam và Lào là 3 quốc gia tiến hành cách mạng giành chính quyền và tuyên bố độc lập sớm nhất.", answer: true },
                { text: "b) Phong trào chống thực dân xâm lược ở Đông Nam Á nổ ra sớm nhất ở khu vực Đông Nam Á lục địa.", answer: false },
                { text: "c) Trong giai đoạn đầu tái thiết, các nước như Xin-ga-po, Ma-lai-xi-a thực hiện chiến lược công nghiệp hóa thay thế nhập khẩu.", answer: true },
                { text: "d) Sau khi hoàn thành công nghiệp hóa thay thế nhập khẩu, các nước Đông Nam Á chuyển sang chiến lược công nghiệp hóa hướng về xuất khẩu.", answer: true }
            ]}
        ]
    }
};

appDatabase.khoi11[4] = {
    title: "Chủ đề 4: Chiến tranh bảo vệ Tổ quốc trong lịch sử Việt Nam",
    exercises: {
        mcq: [
            { type: 'mcq', text: "Vị trí địa chiến lược của Việt Nam ở Đông Nam Á tạo ra đặc điểm gì nổi bật trong lịch sử dân tộc?", options: ["Không bị các thế lực ngoại bang dòm ngó.", "Luôn phải đối phó với thế lực ngoại xâm và tiến hành nhiều chiến tranh bảo vệ Tổ quốc.", "Đóng cửa hoàn toàn với giao thương quốc tế.", "Chỉ phát triển văn hóa bản địa, không tiếp thu văn hóa ngoại lai."], answer: 1 },
            { type: 'mcq', text: "Trong cuộc kháng chiến chống quân Thanh (1789), Nguyễn Huệ đã sử dụng nghệ thuật quân sự nổi bật nào?", options: ["Đánh lâu dài, phòng ngự vững chắc.", "Tiên phát chế nhân.", "Đánh nhanh, thắng nhanh, tiến công thần tốc.", "Vườn không nhà trống."], answer: 2 },
            { type: 'mcq', text: "Kế sách 'tiên phát chế nhân' (chủ động tập kích để chặn thế mạnh của giặc) được Lý Thường Kiệt sử dụng trong cuộc kháng chiến nào?", options: ["Chống quân Tống (981).", "Chống quân Tống (1075-1077).", "Chống quân Nam Hán (938).", "Chống quân Minh (1406-1407)."], answer: 1 },
            { type: 'mcq', text: "Cuộc kháng chiến nào sau đây KHÔNG THÀNH CÔNG trong lịch sử Việt Nam?", options: ["Kháng chiến chống Tống của Lê Hoàn.", "Kháng chiến chống Nguyên của nhà Trần.", "Kháng chiến chống Minh của nhà Hồ.", "Kháng chiến chống Thanh của vua Quang Trung."], answer: 2 }
        ],
        tf: [
            { type: 'tf', text: "Về nguyên nhân thắng lợi và bài học lịch sử của các cuộc chiến tranh bảo vệ Tổ quốc:", options: [
                { text: "a) Nhân tố quyết định thắng lợi là truyền thống yêu nước nồng nàn và khối đại đoàn kết toàn dân.", answer: true },
                { text: "b) Kế sách đánh giặc đúng đắn, linh hoạt, nghệ thuật quân sự độc đáo là nguyên nhân chủ quan đưa đến thắng lợi.", answer: true },
                { text: "c) Bài học 'Khoan thư sức dân' để làm kế sâu rễ bền gốc chỉ được áp dụng trong thời đại ngày nay.", answer: false },
                { text: "d) Các cuộc kháng chiến chống giặc ngoại xâm của Đại Việt đều là các cuộc chiến tranh chính nghĩa.", answer: true }
            ]}
        ]
    }
};

// ================= DỮ LIỆU LỚP 12 =================
appDatabase.khoi12[1] = {
    title: "Chủ đề 1: Thế giới trong và sau Chiến tranh lạnh",
    exercises: {
        mcq: [
            { type: 'mcq', text: "Tổ chức Liên hợp quốc chính thức được thành lập vào ngày, tháng, năm nào?", options: ["24 - 10 - 1945.", "01 - 01 - 1942.", "26 - 06 - 1945.", "02 - 09 - 1945."], answer: 0 },
            { type: 'mcq', text: "Đâu là một trong những nguyên tắc hoạt động cơ bản của Liên hợp quốc?", options: ["Tôn trọng toàn vẹn lãnh thổ và độc lập chính trị quốc gia.", "Can thiệp trực tiếp vào công việc nội bộ của các quốc gia.", "Sử dụng vũ lực để giải quyết tranh chấp.", "Thiết lập một nhà nước toàn cầu thống nhất."], answer: 0 },
            { type: 'mcq', text: "Hội nghị I-an-ta (tháng 2/1945) được tổ chức tại nước nào?", options: ["Mỹ.", "Anh.", "Liên Xô.", "Pháp."], answer: 2 },
            { type: 'mcq', text: "Trật tự thế giới hai cực I-an-ta tồn tại trong khoảng thời gian nào?", options: ["1945 - 1975.", "1945 - 1989.", "1945 - 1991.", "1939 - 1945."], answer: 2 },
            { type: 'mcq', text: "Đâu là một trong những xu thế phát triển chính của thế giới sau Chiến tranh lạnh?", options: ["Lấy quân sự làm trọng tâm.", "Đối thoại, hợp tác trong quan hệ quốc tế.", "Thế giới phân chia thành hai cực đối lập.", "Chạy đua vũ trang trên không gian."], answer: 1 },
            { type: 'mcq', text: "Quốc gia nào sau đây KHÔNG tham dự Hội nghị I-an-ta (tháng 2/1945)?", options: ["Liên Xô.", "Mỹ.", "Pháp.", "Anh."], answer: 2 }
        ],
        tf: [
            { type: 'tf', text: "Đọc đoạn tư liệu về Liên hợp quốc: 'Theo Hiến chương, Liên hợp quốc được thành lập nhằm bốn mục tiêu: 1. Duy trì hoà bình và an ninh quốc tế;...'", options: [
                { text: "a) Liên hợp quốc là tổ chức quốc tế được thành lập ngay sau Chiến tranh thế giới thứ nhất.", answer: false },
                { text: "b) Mục tiêu cốt lõi và quan trọng nhất của Liên hợp quốc là duy trì hoà bình và an ninh quốc tế.", answer: true },
                { text: "c) Trong số các mục tiêu, giải quyết vấn đề kinh tế được xem là tiền đề duy nhất cho Liên hợp quốc.", answer: false },
                { text: "d) Nguyên tắc cơ bản của Liên hợp quốc là bình đẳng về chủ quyền giữa các quốc gia.", answer: true }
            ]}
        ]
    }
};

appDatabase.khoi12[2] = {
    title: "Chủ đề 2: ASEAN - Những chặng đường lịch sử",
    exercises: {
        mcq: [
            { type: 'mcq', text: "Hiệp hội các quốc gia Đông Nam Á (ASEAN) được thành lập vào thời gian nào?", options: ["8 - 8 - 1967.", "24 - 10 - 1945.", "28 - 7 - 1995.", "31 - 12 - 2015."], answer: 0 },
            { type: 'mcq', text: "Năm quốc gia tham gia sáng lập ASEAN bao gồm:", options: ["Thái Lan, Việt Nam, In-đô-nê-xi-a, Xin-ga-po, Phi-líp-pin.", "In-đô-nê-xi-a, Ma-lai-xi-a, Phi-líp-pin, Xin-ga-po, Thái Lan.", "Thái Lan, Ma-lai-xi-a, Mi-an-ma, Lào, Xin-ga-po.", "Bru-nây, In-đô-nê-xi-a, Ma-lai-xi-a, Xin-ga-po, Thái Lan."], answer: 1 },
            { type: 'mcq', text: "Việt Nam chính thức gia nhập ASEAN và trở thành thành viên thứ 7 vào năm nào?", options: ["1984.", "1995.", "1997.", "1999."], answer: 1 },
            { type: 'mcq', text: "Cộng đồng ASEAN chính thức được thành lập vào ngày 31-12-2015 dựa trên bao nhiêu trụ cột chính?", options: ["2 trụ cột.", "3 trụ cột.", "4 trụ cột.", "5 trụ cột."], answer: 1 },
            { type: 'mcq', text: "Cộng đồng Kinh tế ASEAN viết tắt là gì?", options: ["APSC.", "ASCC.", "AEC.", "ARF."], answer: 2 }
        ],
        tf: [
            { type: 'tf', text: "Về Hiệp hội các quốc gia Đông Nam Á (ASEAN):", options: [
                { text: "a) ASEAN được thành lập trong bối cảnh các nước Đông Nam Á đang cần hợp tác phát triển kinh tế và hạn chế ảnh hưởng của các cường quốc bên ngoài.", answer: true },
                { text: "b) Tuyên bố Băng Cốc (1967) khẳng định mục tiêu của ASEAN là hình thành một liên minh quân sự vững mạnh.", answer: false },
                { text: "c) Năm 1999, với việc kết nạp Cam-pu-chia, ASEAN đã hoàn thành ý tưởng về một ASEAN bao gồm 10 quốc gia trong khu vực.", answer: true },
                { text: "d) Trụ cột Cộng đồng Chính trị - An ninh ASEAN (APSC) hướng tới mục tiêu duy nhất là chống lại biến đổi khí hậu.", answer: false }
            ]}
        ]
    }
};

appDatabase.khoi12[3] = {
    title: "Chủ đề 3: Cuộc chiến tranh GPDT và BV Tổ quốc ở VN (1945-1975)",
    exercises: {
        mcq: [
            { type: 'mcq', text: "Chiến dịch nào đã làm phá sản hoàn toàn chiến lược 'đánh nhanh, thắng nhanh' của thực dân Pháp?", options: ["Chiến dịch Điện Biên Phủ (1954).", "Chiến dịch Biên giới thu - đông (1950).", "Chiến dịch Việt Bắc thu - đông (1947).", "Cuộc chiến đấu ở các đô thị (1946)."], answer: 2 },
            { type: 'mcq', text: "Chủ tịch Hồ Chí Minh ra Lời kêu gọi toàn quốc kháng chiến vào thời gian nào?", options: ["23 - 9 - 1945.", "19 - 12 - 1946.", "02 - 09 - 1945.", "06 - 03 - 1946."], answer: 1 },
            { type: 'mcq', text: "Hội nghị Ban Chấp hành Trung ương lần thứ 15 (1959) đã thổi bùng lên phong trào nào ở miền Nam?", options: ["Phong trào Cần vương.", "Phong trào Đồng khởi.", "Phong trào Xô viết Nghệ Tĩnh.", "Phong trào Diệt dốt."], answer: 1 },
            { type: 'mcq', text: "Chiến lược 'Chiến tranh đặc biệt' (1961 - 1965) của Mỹ được thực hiện chủ yếu bằng lực lượng nào?", options: ["Lực lượng quân đội Mỹ là chủ yếu.", "Quân đội Sài Gòn dưới sự chỉ huy của cố vấn Mỹ.", "Quân đồng minh của Mỹ ở châu Á Thái Bình Dương.", "Lực lượng lính đánh thuê quốc tế."], answer: 1 },
            { type: 'mcq', text: "Chiến thắng 'Điện Biên Phủ trên không' (12/1972) đã buộc Mỹ phải:", options: ["Thừa nhận thất bại của Chiến tranh cục bộ.", "Trở lại bàn đàm phán và kí Hiệp định Pa-ri.", "Đầu hàng vô điều kiện.", "Rút toàn bộ cố vấn quân sự ngay lập tức."], answer: 1 },
            { type: 'mcq', text: "Chiến dịch kết thúc thắng lợi cuộc Tổng tiến công và nổi dậy Xuân 1975 mang tên là gì?", options: ["Chiến dịch Tây Nguyên.", "Chiến dịch Huế - Đà Nẵng.", "Chiến dịch Đường 14 - Phước Long.", "Chiến dịch Hồ Chí Minh."], answer: 3 }
        ],
        tf: [
            { type: 'tf', text: "Về cuộc Tổng tiến công và nổi dậy Xuân 1975:", options: [
                { text: "a) Chiến dịch mở màn cho cuộc Tổng tiến công và nổi dậy Xuân 1975 là chiến dịch Tây Nguyên.", answer: true },
                { text: "b) Thắng lợi của chiến dịch Huế - Đà Nẵng đã buộc chính quyền Sài Gòn phải đầu hàng vô điều kiện.", answer: false },
                { text: "c) 11 giờ 30 phút ngày 30-4-1975, lá cờ cách mạng tung bay trên nóc Dinh Độc Lập báo hiệu sự toàn thắng.", answer: true },
                { text: "d) Nhân tố quyết định thắng lợi của cuộc kháng chiến là nhờ viện trợ quân sự tuyệt đối từ Liên Xô.", answer: false }
            ]}
        ]
    }
};

appDatabase.khoi12[4] = {
    title: "Chủ đề 4: Công cuộc Đổi mới ở Việt Nam từ năm 1986",
    exercises: {
        mcq: [
            { type: 'mcq', text: "Đại hội đại biểu toàn quốc lần thứ mấy của Đảng Cộng sản Việt Nam đã đề ra đường lối đổi mới toàn diện đất nước?", options: ["Đại hội IV (1976).", "Đại hội V (1982).", "Đại hội VI (1986).", "Đại hội VII (1991)."], answer: 2 },
            { type: 'mcq', text: "Trọng tâm của đường lối đổi mới toàn diện ở Việt Nam (được xác định năm 1986) là lĩnh vực nào?", options: ["Đổi mới chính trị.", "Đổi mới kinh tế.", "Đổi mới văn hóa.", "Đổi mới ngoại giao."], answer: 1 },
            { type: 'mcq', text: "Công cuộc Đổi mới chuyển từ cơ chế quản lý kinh tế tập trung quan liêu, bao cấp sang mô hình nào?", options: ["Mô hình kinh tế thị trường tự do.", "Mô hình kinh tế chỉ huy.", "Mô hình kinh tế thị trường định hướng xã hội chủ nghĩa.", "Mô hình kinh tế tư nhân độc quyền."], answer: 2 },
            { type: 'mcq', text: "Ba chương trình kinh tế lớn được xác định trong Đại hội VI (1986) bao gồm:", options: ["Nông nghiệp, công nghiệp nặng, dịch vụ.", "Lương thực - Thực phẩm, Hàng tiêu dùng, Hàng xuất khẩu.", "Dầu khí, công nghệ cao, du lịch.", "Thương mại, tài chính, bất động sản."], answer: 1 }
        ],
        tf: [
            { type: 'tf', text: "Đọc đoạn tư liệu: 'Đổi mới không phải là thay đổi mục tiêu xã hội chủ nghĩa mà là làm cho mục tiêu ấy được thực hiện có hiệu quả bằng những quan niệm đúng đắn...'", options: [
                { text: "a) Mục tiêu của công cuộc Đổi mới là từ bỏ hoàn toàn con đường xã hội chủ nghĩa để tiến lên tư bản chủ nghĩa.", answer: false },
                { text: "b) Đổi mới là thay đổi hình thức, bước đi và biện pháp phù hợp để thực hiện thành công mục tiêu xã hội chủ nghĩa.", answer: true },
                { text: "c) Trong đổi mới, Việt Nam chủ trương kiên quyết giữ lại cơ chế quản lý kinh tế tập trung bao cấp.", answer: false },
                { text: "d) Đổi mới kinh tế phải gắn liền với đổi mới chính trị, văn hóa - xã hội.", answer: true }
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


// ================= DỮ LIỆU ĐỀ THI THỬ SỐ 1 (BÁM SÁT FORMAT MINH HỌA 2026 BGD) =================
appDatabase.mocktest[1] = [
    // PHẦN I: Trắc nghiệm (24 câu)
    { type: 'mcq', text: "Thắng lợi của cuộc Tiến công chiến lược năm 1972 của quân và dân Việt Nam có ý nghĩa nào sau đây?", options: ["Buộc Mỹ phải xuống thang chiến tranh, lập tức rút hết quân về nước.", "Kết thúc cuộc cách mạng dân tộc dân chủ nhân dân ở miền Nam Việt Nam.", "Giáng đòn quyết định làm sụp đổ hoàn toàn chính quyền Sài Gòn.", "Buộc Mỹ phải thừa nhận sự thất bại của chiến lược 'Việt Nam hóa chiến tranh'."], answer: 3 },
    { type: 'mcq', text: "Phan Bội Châu có hoạt động đối ngoại nào sau đây vào đầu thế kỉ XX?", options: ["Đàm phán với Pháp để thực hiện cải cách cho Việt Nam.", "Liên hệ với lực lượng Đồng minh chống phát xít.", "Tham dự Đại hội lần thứ XVIII của Đảng Xã hội Pháp.", "Vận động sự ủng hộ của Nhật Bản để giải phóng dân tộc."], answer: 3 },
    { type: 'mcq', text: "Nhận định nào sau đây là đúng về công cuộc Đổi mới ở Việt Nam từ năm 1986 đến nay?", options: ["Diễn ra đồng bộ và sâu rộng nhưng độc lập trên các lĩnh vực kinh tế - xã hội.", "Là sự thay đổi hình thức, bước đi và biện pháp để thực hiện mục tiêu xã hội chủ nghĩa.", "Có sự điều hành trực tiếp của nhà nước vào những quy trình sản xuất của các doanh nghiệp.", "Hạn chế sự phát triển của kinh tế tư nhân để tập trung phát triển kinh tế nhà nước."], answer: 1 },
    { type: 'mcq', text: "Các nước ASEAN đã kí kết văn kiện nào sau đây vào năm 2003?", options: ["Tuyên ngôn Quốc tế Nhân quyền.", "Tuyên bố Ba-li II.", "Hiến chương Liên hợp quốc.", "Hiến chương ASEAN."], answer: 1 },
    { type: 'mcq', text: "Tổ chức nào sau đây được thành lập để củng cố sức mạnh khối đại đoàn kết toàn dân tộc Việt Nam vào năm 1951?", options: ["Hội Chấn Hoa Hưng Á.", "Việt Nam Quang phục Hội.", "Mặt trận Liên Việt.", "Hội Liên hiệp thuộc địa."], answer: 2 },
    { type: 'mcq', text: "Liên hợp quốc có hoạt động nào sau đây để bảo đảm quyền con người?", options: ["Xây dựng và kí kết các văn bản, điều ước quốc tế về quyền con người.", "Can thiệp trực tiếp vào các nước nhằm thi hành triệt để quyền con người.", "Thành lập khối phòng thủ chung dựa trên cơ sở đồng thuận.", "Xây dựng thể chế chính trị thống nhất cho các quốc gia."], answer: 0 },
    { type: 'mcq', text: "So với Hội nghị thành lập Đảng Cộng sản Việt Nam (1930), Hội nghị Ban Chấp hành Trung ương Đảng Cộng sản Đông Dương lần thứ 8 (1941) có điểm mới nào sau đây?", options: ["Góp phần định hướng, thúc đẩy sự phát triển của phong trào giải phóng dân tộc ở Việt Nam.", "Chủ trương giải quyết vấn đề dân tộc cho phù hợp với điều kiện lịch sử cụ thể của Việt Nam.", "Diễn ra trong bối cảnh cách mạng Việt Nam đã có sự lãnh đạo thống nhất của một chính đảng cộng sản.", "Thể hiện vai trò của Nguyễn Ái Quốc trong việc hoạch định đường lối chiến lược cách mạng Việt Nam."], answer: 1 },
    { type: 'mcq', text: "Một trong những xu thế phát triển chính của thế giới sau cuộc Chiến tranh lạnh là", options: ["hạn chế liên kết về kinh tế giữa tất cả các nước.", "đối thoại và hợp tác trong quan hệ quốc tế.", "chấm dứt ngay mọi xung đột giữa các nước.", "đối đầu giữa Liên Xô và Mỹ."], answer: 1 },
    { type: 'mcq', text: "Thắng lợi của Cách mạng tháng Tám (1945) ở Việt Nam đã", options: ["lật đổ hoàn toàn chế độ thực dân trên thế giới.", "mở ra kỉ nguyên độc lập, tự do của dân tộc.", "dẫn đến sự sụp đổ của hệ thống tư bản chủ nghĩa.", "chấm dứt sự tồn tại của chế độ phong kiến ở châu Á."], answer: 1 },
    { type: 'mcq', text: "Quốc gia nào sau đây tham gia thành lập Liên bang Cộng hòa xã hội chủ nghĩa Xô viết vào năm 1922?", options: ["Lào.", "Anh.", "Nga.", "Bồ Đào Nha."], answer: 2 },
    { type: 'mcq', text: "Quốc gia nào sau đây ở châu Mỹ đã dựng tượng Chủ tịch Hồ Chí Minh?", options: ["Xin-ga-po.", "Mê-hi-cô.", "Cam-pu-chia.", "Phi-líp-pin."], answer: 1 },
    { type: 'mcq', text: "Nhân vật lịch sử nào sau đây đã lãnh đạo quân Tây Sơn giành thắng lợi trong cuộc kháng chiến chống quân Thanh xâm lược vào cuối thế kỉ XVIII?", options: ["Quang Trung.", "Lý Thường Kiệt.", "Trần Quốc Tuấn.", "Lê Hoàn."], answer: 0 },
    { type: 'mcq', text: "Cuộc khởi nghĩa nào sau đây chống lại ách đô hộ của nhà Đông Hán bùng nổ vào năm 40?", options: ["Khởi nghĩa Lý Bí.", "Khởi nghĩa Hai Bà Trưng.", "Khởi nghĩa Bà Triệu.", "Khởi nghĩa Phùng Hưng."], answer: 1 },
    { type: 'mcq', text: "Nguyễn Ái Quốc không có hoạt động nào sau đây trong giai đoạn 1920 - 1930?", options: ["Tham gia sáng lập Đảng Cộng sản Pháp.", "Soạn thảo Tuyên ngôn Độc lập của Việt Nam.", "Tham dự Đại hội V của Quốc tế Cộng sản.", "Soạn thảo Chính cương vắn tắt, Sách lược vắn tắt."], answer: 1 },
    { type: 'mcq', text: "Nguyên thủ của những quốc gia nào sau đây cùng tuyên bố chấm dứt Chiến tranh lạnh vào năm 1989?", options: ["Anh và Hà Lan.", "Ấn Độ và Ai Cập.", "Mỹ và Liên Xô.", "Pháp và Nhật Bản."], answer: 2 },
    { type: 'mcq', text: "Cuộc kháng chiến chống Mỹ, cứu nước (1954 - 1975) của nhân dân Việt Nam đã để lại bài học kinh nghiệm nào sau đây cho công cuộc xây dựng và bảo vệ Tổ quốc Việt Nam hiện nay?", options: ["Duy trì, phát triển mối quan hệ liên minh phòng thủ với các nước Đông Dương.", "Kết hợp hài hòa, thường xuyên giữa đấu tranh chính trị với đấu tranh quân sự.", "Phát huy cao độ sức mạnh dân tộc và sức mạnh thời đại trong kỉ nguyên mới.", "Cần thống nhất về tổ chức của các mặt trận nhân dân thế giới ủng hộ Việt Nam."], answer: 2 },
    { type: 'mcq', text: "Quá trình từ đàm phán đến kí kết Hiệp định Pa-ri (1968 - 1973) đã để lại bài học kinh nghiệm nào sau đây cho hoạt động đối ngoại của Việt Nam hiện nay?", options: ["Thực lực quốc gia là một trong những điều kiện đưa đến thành công của hoạt động đối ngoại.", "Linh hoạt trong hoạt động đối ngoại để giải quyết triệt để lợi ích của các nước.", "Đặt trọng tâm vào việc duy trì, phát triển đồng đều mối quan hệ với các đối tác truyền thống.", "Tranh thủ sự ủng hộ của quốc tế để hoàn thành cuộc cách mạng dân tộc dân chủ nhân dân."], answer: 0 },
    { type: 'mcq', text: "Quốc gia nào sau đây là thành viên của Cộng đồng ASEAN vào năm 2015?", options: ["Hàn Quốc.", "Thái Lan.", "Cu-ba.", "Ma-rốc."], answer: 1 },
    { type: 'mcq', text: "Đường lối đổi mới về kinh tế ở Việt Nam từ năm 2006 đến nay có nội dung nào sau đây?", options: ["Kết thúc quá trình xây dựng cơ sở vật chất, kĩ thuật cho chủ nghĩa xã hội.", "Bắt đầu xây dựng và hoàn thiện nhà nước pháp quyền xã hội chủ nghĩa.", "Tiếp tục đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước.", "Bước đầu xây dựng cơ chế quản lí kinh tế tập trung quan liêu, bao cấp."], answer: 2 },
    { type: 'mcq', text: "Nhận định nào sau đây là đúng về quá trình hội nhập quốc tế của Việt Nam từ năm 2006 đến nay?", options: ["Ngày càng mở rộng quan hệ đối tác chiến lược toàn diện với nhiều nước.", "Thường xuyên nâng tầm hợp tác với hệ thống xã hội chủ nghĩa.", "Đánh dấu sự khởi đầu cho hợp tác đa phương giữa Việt Nam với các nước.", "Là quá trình phá thế bị bao vây và cô lập toàn diện để hội nhập quốc tế."], answer: 0 },
    { type: 'mcq', text: "Quá trình phát triển của Hiệp hội các quốc gia Đông Nam Á từ năm 1967 đến năm 2015 có đặc điểm nào sau đây?", options: ["Quá trình hình thành, phát triển chịu sự chi phối thường xuyên của cuộc Chiến tranh lạnh.", "Trọng tâm của quá trình hợp tác có sự chuyển dịch từng bước từ nội khối sang ngoại khối.", "Xuất phát từ liên minh quân sự phát triển thành tổ chức liên kết kinh tế, chính trị.", "Có sự phát triển từng bước về cơ cấu tổ chức, phạm vi và mức độ hợp tác."], answer: 3 },
    { type: 'mcq', text: "Việt Nam đạt được thành tựu nào sau đây trong hội nhập quốc tế vào năm 2007?", options: ["Trở thành thành viên của Tổ chức Thương mại Thế giới (WTO).", "Gia nhập Hiệp hội các quốc gia Đông Nam Á.", "Gia nhập Hội đồng tương trợ kinh tế.", "Tham gia Công ước Luật biển của Liên hợp quốc."], answer: 0 },
    { type: 'mcq', text: "Một trong những nguyên nhân dẫn đến sự sụp đổ của Trật tự thế giới hai cực I-an-ta là do", options: ["Mỹ không còn là siêu cường kinh tế số một thế giới.", "tác động trực tiếp của cuộc Chiến tranh thế giới thứ nhất.", "sự ra đời của Cộng đồng Chính trị - An ninh ASEAN.", "thắng lợi của phong trào giải phóng dân tộc trên thế giới."], answer: 3 },
    { type: 'mcq', text: "So với chiến lược “Chiến tranh đặc biệt” (1961 - 1965), chiến lược “Chiến tranh cục bộ” (1965 - 1968) của Mỹ thực hiện ở miền Nam Việt Nam có điểm khác biệt nào sau đây?", options: ["Sử dụng vũ khí, trang bị kĩ thuật và phương tiện chiến tranh của Mỹ.", "Đưa số lượng lớn quân đồng minh của Mỹ vào trực tiếp tham chiến trên chiến trường.", "Tiến hành bằng lực lượng quân đội Sài Gòn dưới sự chỉ huy của hệ thống cố vấn Mỹ.", "Diễn ra trong bối cảnh Mỹ đang chống lại phe xã hội chủ nghĩa."], answer: 1 },

    // PHẦN II: Đúng/Sai (4 câu)
    { type: 'tf', text: "Câu 1. Đọc đoạn tư liệu sau: 'Nhìn lại 40 năm thực hiện công cuộc đổi mới... Kinh tế duy trì tốc độ phát triển tương đối nhanh, trở thành nước đang phát triển, có thu nhập trung bình...'", options: [
        { text: "a) Nội dung của đoạn tư liệu cho biết những thành tựu trên nhiều lĩnh vực trong công cuộc Đổi mới ở Việt Nam.", answer: true },
        { text: "b) Từ thực tiễn 40 năm đổi mới đất nước khẳng định nền kinh tế hàng hóa là điểm sáng tạo riêng của Việt Nam.", answer: false },
        { text: "c) Những thành tựu của công cuộc Đổi mới đã đưa Việt Nam trở thành quốc gia phát triển trên thế giới.", answer: false },
        { text: "d) Những thành tựu trong công cuộc Đổi mới hiện nay là nguồn lực và động lực cho sự phát triển của Việt Nam.", answer: true }
    ]},
    { type: 'tf', text: "Câu 2. Cho đoạn tư liệu: 'Hỡi đồng bào toàn quốc! Chúng ta muốn hòa bình, chúng ta phải nhân nhượng. Nhưng chúng ta càng nhân nhượng, thực dân Pháp càng lấn tới...'", options: [
        { text: "a) Lời kêu gọi toàn quốc kháng chiến thể hiện sự chủ động của Việt Nam trong việc đàm phán với Pháp.", answer: false },
        { text: "b) Lời kêu gọi khẳng định Việt Nam tiến hành chiến tranh vệ quốc khi không còn lựa chọn nào khác.", answer: true },
        { text: "c) Thông tin của đoạn tư liệu thể hiện tinh thần tự lực, tự cường của nhân dân Việt Nam.", answer: true },
        { text: "d) Ngay khi thực dân Pháp quay trở lại xâm lược VN (1945), Chủ tịch HCM đã kịp thời phát động toàn quốc kháng chiến.", answer: false }
    ]},
    { type: 'tf', text: "Câu 3. Tác giả của cuốn sách Chủ nghĩa tư bản lịch sử thăng trầm 120 năm đã viết: '... chủ nghĩa tư bản hiện đại đã và đang đối mặt với những vấn đề chính trị - xã hội nan giải. Nền dân chủ tư sản đang bị xói mòn...'", options: [
        { text: "a) Chủ nghĩa tư bản hiện đại đã giải quyết triệt để được các vấn đề xã hội nan giải để tồn tại và phát triển.", answer: false },
        { text: "b) Những thách thức mà chủ nghĩa tư bản phải đối mặt từ sau năm 1945 đến nay không bắt nguồn từ nền dân chủ tư sản.", answer: false },
        { text: "c) Những thông tin của đoạn tư liệu phản ánh một phần thực trạng của xã hội tư bản hiện đại.", answer: true },
        { text: "d) Từ những hạn chế của CNTB hiện đại cho thấy sự đúng đắn của Đảng CSVN trong việc kiên trì mục tiêu ĐLDT và CNXH.", answer: true }
    ]},
    { type: 'tf', text: "Câu 4. Cho đoạn tư liệu: 'Đại đoàn kết toàn dân tộc là nền tảng hội tụ và phát huy cao nhất sức mạnh của Nhân dân... Kiên trì thực hiện đường lối đại đoàn kết toàn dân tộc trên nền tảng của khối liên minh giữa giai cấp công nhân, giai cấp nông dân và đội ngũ trí thức...'", options: [
        { text: "a) Đại đoàn kết toàn dân tộc là truyền thống quý báu được khởi nguồn, vận dụng sáng tạo chủ yếu trong thời kì Đổi mới.", answer: false },
        { text: "b) Sức mạnh của khối đại đoàn kết toàn dân tộc được phát huy cao độ dưới sự lãnh đạo của Đảng Cộng sản Việt Nam.", answer: true },
        { text: "c) Đường lối đại đoàn kết toàn dân tộc Việt Nam được xây dựng trên nền tảng của khối liên minh công – nông và tư sản dân tộc.", answer: false },
        { text: "d) Đại hội đại biểu toàn quốc lần thứ XIV (2026) của Đảng CSVN bước đầu xác định đại đoàn kết toàn dân tộc là nguồn sức mạnh cần phát huy.", answer: false }
    ]}
];

// ================= DỮ LIỆU ĐỀ THI THỬ SỐ 2 (MỚI BỔ SUNG TỪ SGK) =================
appDatabase.mocktest[2] = [
    // PHẦN I: Trắc nghiệm (24 câu)
    { type: 'mcq', text: "Đối tượng nghiên cứu của Sử học là", options: ["quá trình phát triển của tự nhiên.", "toàn bộ quá khứ của loài người.", "những hiện tượng vũ trụ.", "sự phát triển của công nghệ."], answer: 1 },
    { type: 'mcq', text: "Khía cạnh văn hóa chiếm khoảng bao nhiêu % trong giá trị du lịch ở châu Âu (theo số liệu 2018)?", options: ["Khoảng 20%", "Khoảng 40%", "Khoảng 60%", "Khoảng 80%"], answer: 1 },
    { type: 'mcq', text: "Mục tiêu cơ bản của các cuộc cách mạng tư sản là gì?", options: ["Xóa bỏ rào cản kìm hãm sự phát triển của nền kinh tế tư bản chủ nghĩa.", "Xóa bỏ giai cấp tư sản.", "Đưa giai cấp công nhân lên nắm quyền.", "Bảo vệ chế độ phong kiến."], answer: 0 },
    { type: 'mcq', text: "Cuối thế kỉ XIX - đầu thế kỉ XX, chủ nghĩa tư bản chuyển sang giai đoạn nào?", options: ["Tự do cạnh tranh.", "Chủ nghĩa tư bản hiện đại.", "Chủ nghĩa đế quốc (độc quyền).", "Toàn cầu hóa."], answer: 2 },
    { type: 'mcq', text: "Liên bang Cộng hoà xã hội chủ nghĩa Xô viết (Liên Xô) chính thức được thành lập vào thời gian nào?", options: ["30-12-1922.", "25-10-1917.", "21-1-1924.", "7-11-1917."], answer: 0 },
    { type: 'mcq', text: "Quốc gia nào ở khu vực Mỹ La-tinh đã kiên định đi theo con đường xây dựng chủ nghĩa xã hội bất chấp lệnh cấm vận của Mỹ?", options: ["Mê-hi-cô.", "Vê-nê-xu-ê-la.", "Cu-ba.", "Ác-hen-ti-na."], answer: 2 },
    { type: 'mcq', text: "Năm 1511, thực dân Bồ Đào Nha đã tấn công và đánh chiếm vương quốc nào, mở đầu cho quá trình xâm lược Đông Nam Á?", options: ["Xiêm.", "Ma-lắc-ca.", "Phi-líp-pin.", "Đại Việt."], answer: 1 },
    { type: 'mcq', text: "Từ năm 1868, vị vua nào của Xiêm đã tiến hành hàng loạt cải cách quan trọng đưa đất nước phát triển theo con đường tư bản chủ nghĩa?", options: ["Vua Ra-ma I.", "Vua Ra-ma IV.", "Vua Ra-ma V.", "Vua Ra-ma VI."], answer: 2 },
    { type: 'mcq', text: "Kế sách 'tiên phát chế nhân' (chủ động tập kích để chặn thế mạnh của giặc) được Lý Thường Kiệt sử dụng trong cuộc kháng chiến nào?", options: ["Chống quân Tống (981).", "Chống quân Tống (1075-1077).", "Chống quân Nam Hán (938).", "Chống quân Minh (1406-1407)."], answer: 1 },
    { type: 'mcq', text: "Cuộc kháng chiến nào sau đây KHÔNG THÀNH CÔNG trong lịch sử Việt Nam?", options: ["Kháng chiến chống Tống của Lê Hoàn.", "Kháng chiến chống Nguyên của nhà Trần.", "Kháng chiến chống Minh của nhà Hồ.", "Kháng chiến chống Thanh của vua Quang Trung."], answer: 2 },
    { type: 'mcq', text: "Tổ chức Liên hợp quốc chính thức được thành lập vào ngày, tháng, năm nào?", options: ["24 - 10 - 1945.", "01 - 01 - 1942.", "26 - 06 - 1945.", "02 - 09 - 1945."], answer: 0 },
    { type: 'mcq', text: "Đâu là một trong những nguyên tắc hoạt động cơ bản của Liên hợp quốc?", options: ["Tôn trọng toàn vẹn lãnh thổ và độc lập chính trị quốc gia.", "Can thiệp trực tiếp vào công việc nội bộ của các quốc gia.", "Sử dụng vũ lực để giải quyết tranh chấp.", "Thiết lập một nhà nước toàn cầu thống nhất."], answer: 0 },
    { type: 'mcq', text: "Hội nghị I-an-ta (tháng 2/1945) được tổ chức tại nước nào?", options: ["Mỹ.", "Anh.", "Liên Xô.", "Pháp."], answer: 2 },
    { type: 'mcq', text: "Trật tự thế giới hai cực I-an-ta tồn tại trong khoảng thời gian nào?", options: ["1945 - 1975.", "1945 - 1989.", "1945 - 1991.", "1939 - 1945."], answer: 2 },
    { type: 'mcq', text: "Hiệp hội các quốc gia Đông Nam Á (ASEAN) được thành lập vào thời gian nào?", options: ["8 - 8 - 1967.", "24 - 10 - 1945.", "28 - 7 - 1995.", "31 - 12 - 2015."], answer: 0 },
    { type: 'mcq', text: "Việt Nam chính thức gia nhập ASEAN và trở thành thành viên thứ 7 vào năm nào?", options: ["1984.", "1995.", "1997.", "1999."], answer: 1 },
    { type: 'mcq', text: "Chiến dịch nào đã làm phá sản hoàn toàn chiến lược 'đánh nhanh, thắng nhanh' của thực dân Pháp?", options: ["Chiến dịch Điện Biên Phủ (1954).", "Chiến dịch Biên giới thu - đông (1950).", "Chiến dịch Việt Bắc thu - đông (1947).", "Cuộc chiến đấu ở các đô thị (1946)."], answer: 2 },
    { type: 'mcq', text: "Chủ tịch Hồ Chí Minh ra Lời kêu gọi toàn quốc kháng chiến vào thời gian nào?", options: ["23 - 9 - 1945.", "19 - 12 - 1946.", "02 - 09 - 1945.", "06 - 03 - 1946."], answer: 1 },
    { type: 'mcq', text: "Hội nghị Ban Chấp hành Trung ương lần thứ 15 (1959) đã thổi bùng lên phong trào nào ở miền Nam?", options: ["Phong trào Cần vương.", "Phong trào Đồng khởi.", "Phong trào Xô viết Nghệ Tĩnh.", "Phong trào Diệt dốt."], answer: 1 },
    { type: 'mcq', text: "Chiến thắng 'Điện Biên Phủ trên không' (12/1972) đã buộc Mỹ phải:", options: ["Thừa nhận thất bại của Chiến tranh cục bộ.", "Trở lại bàn đàm phán và kí Hiệp định Pa-ri.", "Đầu hàng vô điều kiện.", "Rút toàn bộ cố vấn quân sự ngay lập tức."], answer: 1 },
    { type: 'mcq', text: "Chiến dịch kết thúc thắng lợi cuộc Tổng tiến công và nổi dậy Xuân 1975 mang tên là gì?", options: ["Chiến dịch Tây Nguyên.", "Chiến dịch Huế - Đà Nẵng.", "Chiến dịch Đường 14 - Phước Long.", "Chiến dịch Hồ Chí Minh."], answer: 3 },
    { type: 'mcq', text: "Đại hội đại biểu toàn quốc lần thứ mấy của Đảng Cộng sản Việt Nam đã đề ra đường lối đổi mới toàn diện đất nước?", options: ["Đại hội IV (1976).", "Đại hội V (1982).", "Đại hội VI (1986).", "Đại hội VII (1991)."], answer: 2 },
    { type: 'mcq', text: "Trọng tâm của đường lối đổi mới toàn diện ở Việt Nam (được xác định năm 1986) là lĩnh vực nào?", options: ["Đổi mới chính trị.", "Đổi mới kinh tế.", "Đổi mới văn hóa.", "Đổi mới ngoại giao."], answer: 1 },
    { type: 'mcq', text: "Ba chương trình kinh tế lớn được xác định trong Đại hội VI (1986) bao gồm:", options: ["Nông nghiệp, công nghiệp nặng, dịch vụ.", "Lương thực - Thực phẩm, Hàng tiêu dùng, Hàng xuất khẩu.", "Dầu khí, công nghệ cao, du lịch.", "Thương mại, tài chính, bất động sản."], answer: 1 },

    // PHẦN II: Đúng/Sai (4 câu)
    { type: 'tf', text: "Câu 1. Về sự phát triển của chủ nghĩa tư bản:", options: [
        { text: "a) Cuối thế kỉ XIX - đầu thế kỉ XX, chủ nghĩa tư bản chuyển từ giai đoạn tự do cạnh tranh sang giai đoạn độc quyền.", answer: true },
        { text: "b) Tổ chức độc quyền là kết quả của quá trình phân tán sản xuất và phân tán nguồn vốn đầu tư.", answer: false },
        { text: "c) Các hình thức tiêu biểu của tổ chức độc quyền là các-ten, xanh-đi-ca, tơ-rớt.", answer: true },
        { text: "d) Chủ nghĩa tư bản hiện đại không còn phải đối mặt với các cuộc khủng hoảng kinh tế, tài chính mang tính toàn cầu.", answer: false }
    ]},
    { type: 'tf', text: "Câu 2. Về sự khủng hoảng và sụp đổ của chủ nghĩa xã hội ở Liên Xô và Đông Âu:", options: [
        { text: "a) Nguyên nhân cơ bản là do áp dụng máy móc mô hình kinh tế tập trung, quan liêu, bao cấp trong nhiều năm.", answer: true },
        { text: "b) Khủng hoảng xảy ra là do các nước này đã áp dụng kịp thời các thành tựu của cách mạng khoa học - công nghệ hiện đại.", answer: false },
        { text: "c) Quá trình cải cách, cải tổ phạm sai lầm nghiêm trọng về đường lối và sự xóa bỏ vai trò lãnh đạo của Đảng Cộng sản.", answer: true },
        { text: "d) Sự sụp đổ của chủ nghĩa xã hội ở Liên Xô và Đông Âu đồng nghĩa với sự sụp đổ hoàn toàn của chủ nghĩa xã hội trên thế giới.", answer: false }
    ]},
    { type: 'tf', text: "Câu 3. Đọc đoạn tư liệu về Liên hợp quốc: 'Theo Hiến chương, Liên hợp quốc được thành lập nhằm bốn mục tiêu: 1. Duy trì hoà bình và an ninh quốc tế;...'", options: [
        { text: "a) Liên hợp quốc là tổ chức quốc tế được thành lập ngay sau Chiến tranh thế giới thứ nhất (1918).", answer: false },
        { text: "b) Mục tiêu cốt lõi và quan trọng nhất của Liên hợp quốc là duy trì hoà bình và an ninh quốc tế.", answer: true },
        { text: "c) Trong số các mục tiêu, giải quyết vấn đề kinh tế được xem là tiền đề duy nhất cho Liên hợp quốc.", answer: false },
        { text: "d) Nguyên tắc cơ bản của Liên hợp quốc là bình đẳng về chủ quyền giữa các quốc gia.", answer: true }
    ]},
    { type: 'tf', text: "Câu 4. Về cuộc Tổng tiến công và nổi dậy Xuân 1975:", options: [
        { text: "a) Chiến dịch mở màn cho cuộc Tổng tiến công và nổi dậy Xuân 1975 là chiến dịch Tây Nguyên.", answer: true },
        { text: "b) Thắng lợi của chiến dịch Huế - Đà Nẵng đã buộc chính quyền Sài Gòn phải đầu hàng vô điều kiện.", answer: false },
        { text: "c) 11 giờ 30 phút ngày 30-4-1975, lá cờ cách mạng tung bay trên nóc Dinh Độc Lập báo hiệu sự toàn thắng.", answer: true },
        { text: "d) Nhân tố quyết định thắng lợi của cuộc kháng chiến là nhờ viện trợ quân sự tuyệt đối từ bên ngoài.", answer: false }
    ]}
];

// Khởi tạo các Đề thi thử trống (3 đến 10)
for (let testId = 3; testId <= 10; testId++) {
    appDatabase.mocktest[testId] = []; 
}

/* =========================================================================
   LOGIC HOẠT ĐỘNG
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
            let label = t <= 2 ? `Đề thi thử Tốt nghiệp số ${t}` : `Đề thi thử Tốt nghiệp số ${t} (Đang cập nhật)`;
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
        document.getElementById('current-test-subtitle').innerText = "Cấu trúc 2026: Phần I (24 Câu Trắc nghiệm) - Phần II (4 Câu Đúng/Sai)";
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
                        <span class="flex-grow text-gray-800 mb-2 md:mb-0 md:mr-4">${opt.text}</span>
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
            maxScore += 1; // Mỗi câu MCQ đúng = 1 điểm (trong tổng Max)
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
            // Theo format BGD 2026: 1 câu Đúng/Sai hoàn chỉnh (gồm 4 ý) tương đương 1 điểm
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

            // Quy định: Đúng 1 ý = 0.1đ, 2 ý = 0.25đ, 3 ý = 0.5đ, 4 ý = 1đ
            if(correctSubCount === 4) totalScore += 1;
            else if(correctSubCount === 3) totalScore += 0.5;
            else if(correctSubCount === 2) totalScore += 0.25;
            else if(correctSubCount === 1) totalScore += 0.1;
        }
    });

    // Tính điểm trên thang điểm 10 (Format 2026: maxScore = 28 -> quy đổi về 10)
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