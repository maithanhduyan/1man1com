# Hồ Nội Dung và Khả Năng Tự Động Hóa


Hồ Nội Dung
Ngoài hồ người dùng, chúng ta thực sự còn cần một hồ nội dung. Có hai lý do.

Website chính thức: Thương hiệu và cổng vào
Hồ nội dung trước tiên có thể được dùng để lưu trữ website chính thức, đây là thương hiệu và cổng vào của chúng ta.

Thông thường khi làm sản phẩm phần mềm, hầu hết mọi người sẽ tạo một website chính thức cho sản phẩm, nhưng khi làm sản phẩm truyền thông, rất có thể chỉ có các tài khoản trên các nền tảng khác nhau mà không có website chính thức của riêng mình.

Nhưng thực ra, ý nghĩa của website chính thức là rất lớn. Nói rộng ra, nó đại diện cho thương hiệu, IP và cổng vào. Nói nhỏ lại, nó có thể giải quyết vấn đề thực tế "Nếu tài khoản bị nền tảng khóa thì làm sao?".

Nếu chúng ta có tài khoản trên tất cả các nền tảng nhưng không có website chính thức độc lập, thì nếu tài khoản của chúng ta trên nền tảng bị khóa, người dùng dù muốn tìm chúng ta, biết tên thương hiệu của chúng ta, nhưng họ không có cách nào liên lạc với chúng ta, vì chúng ta không còn kênh nào khác.

Việc khóa tài khoản, dù là sự kiện xác suất thấp, nhưng rất nguy hiểm. Và với ngày càng nhiều nền tảng áp dụng trí tuệ nhân tạo chưa trưởng thành, ngay cả một tài khoản tuân thủ quy tắc ở mọi nơi cũng có thể kỳ lạ kích hoạt các quy tắc kiểm soát rủi ro dẫn đến bị khóa.

Vì vậy chúng ta cần có một thứ hoàn toàn trong tầm kiểm soát của mình. Đảm bảo rằng kể cả khi nền tảng khóa tài khoản của chúng ta, miễn là người dùng muốn, họ vẫn có thể tìm thấy chúng ta. Một thương hiệu dễ nhớ, tên miền ngắn gọn là giải pháp rất tốt.

Trung Tâm Nội Dung
Hồ nội dung ngoài là một cổng vào, còn là trung tâm nội dung của chúng ta, tất cả nội dung của chúng ta đều nên được đặt trên nền tảng này. Không phải nói người dùng chỉ có thể đến đây để xem, mà là nói những nội dung chúng ta đăng trên các nền tảng khác, đều nên có một bản sao trên nền tảng này. Như vậy chúng ta mới có thể ứng phó với vấn đề "Nội dung bị xóa thì làm sao".

Nội dung bị xóa trên các nền tảng, hoặc không qua kiểm duyệt, hoặc sau khi qua kiểm duyệt đột nhiên lại không qua, tình trạng này đã rất phổ biến. Chúng ta cần tạo một bản sao lưu trên website chính thức của mình. Như vậy, dù nội dung chúng ta đăng trên nền tảng bị xóa, người dùng đến website chính thức vẫn có thể nhìn thấy.

Một số bạn có thể nghĩ rằng nội dung bị xóa không phải vấn đề gì lớn, nhưng nếu là một loạt nội dung, trong đó có vài tập bị xóa, thậm chí là một bộ hướng dẫn series, những phần quan trọng nhất bị nền tảng xóa một cách kỳ lạ, mà mình lại không có bản sao lưu, thì người dùng cũng không có chỗ nào khác để xem, điều đó thật khó chịu phải không?

Chi Phí Nội Dung
Sao lưu toàn bộ nội dung có thể gặp vấn đề về chi phí.

Nếu chỉ là nội dung hình ảnh và văn bản, thì chi phí tổng thể khá thấp, chúng ta chỉ cần sử dụng lưu trữ nền tảng đám mây, truy cập qua CDN là được. Nhưng nếu nội dung của chúng ta có nhiều video, tự Hosting có thể dẫn đến chi phí tăng cao.

Chúng tôi giải quyết vấn đề chi phí video thông qua hai phương án.

Phương án đa nguồn video
Nói đơn giản, trên website chính thức, ưu tiên hiển thị video từ các nền tảng khác theo cách nhúng, chỉ khi video hỏng hoặc người dùng chủ động yêu cầu mới tải nguồn video mà chúng tôi tự host.

Về mặt triển khai cụ thể, chúng tôi đã tạo một plugin WordPress. Nó có thể đồng thời đặt nhiều nguồn video vào một khung phát video. Mặc định hiển thị video Bilibili, nhấn Tab để chuyển sang Youtube hoặc nguồn của chúng tôi. Như vậy phần lớn lưu lượng video sẽ đi về Bilibili.

Phương án lưu trữ và CDN nước ngoài
Một cách khác để tiết kiệm tiền là có thể xem xét sử dụng dịch vụ nước ngoài cho một số nghiệp vụ không quan trọng.

CDN trong nước vì lý do chi phí đều khá đắt, khoảng một GB dù sao cũng mất vài hào. Nhưng giá tài nguyên mạng nước ngoài là khác nhau, chúng ta hoàn toàn có thể dùng để làm nghiệp vụ không quan trọng hoặc phương án dự phòng.


Bảng giá R2
Ví dụ, R2 của Cloudflare, lưu lượng của nó không tính phí, nó chỉ tính phí dung lượng lưu trữ và số lần truy cập của chúng ta. Hạn mức miễn phí mặc định cũng rất cao, trong trường hợp không có nhiều người dùng hoàn toàn có thể sử dụng miễn phí.

Nhưng vấn đề của nó là khi truy cập trong nước, tốc độ không nhanh bằng các dịch vụ tương tự trong nước. Dù sao cũng không có máy chủ trong nước, ngay cả khi chúng ta đặt nó ưu tiên khu vực Đông Á, tốc độ truy cập vẫn sẽ chậm hơn một chút. Hiện tại hình ảnh trên website ft07 của chúng tôi Fangtang được đặt trong R2, mọi người có thể kiểm tra tốc độ. Phản hồi của người dùng trước đó còn ổn.

Với hai phương án trên, về cơ bản chúng ta có thể thực hiện sao lưu toàn bộ nội dung với chi phí bằng không.

Nhưng chúng ta phải rất rõ ràng một điều, đó là ngay cả về lâu dài, lượng người dùng, lưu lượng và tầm ảnh hưởng của website chính thức của chúng ta cũng rất khó vượt qua các nền tảng lớn của bên thứ ba. Vì vậy chúng ta vẫn cần phân phối nội dung đến các nền tảng bên thứ ba để tiếp cận những người dùng đó.

Không phải tất cả người dùng nền tảng đều sẵn sàng rời nền tảng đến website chính thức của chúng ta, vì vậy chúng ta cần phân phối nội dung lên các nền tảng này, để những người dùng không muốn đến có thể xem nội dung của chúng ta trực tiếp trên các nền tảng bên thứ ba. Chỉ sau khi chúng ta thiết lập mối quan hệ tin tưởng lâu dài với họ, họ mới sẵn sàng đến website chính thức của chúng ta.

Khả Năng Phân Phối Nội Dung
Thực tế, phân phối nội dung là một công việc rất khổ sở, nó rất đơn giản, nhưng rất thường xuyên.

Vì mỗi khi chúng ta đăng một lần nội dung, chúng ta đều cần làm như vậy một lần, điều này thực ra chiếm phần lớn khối lượng công việc của vị trí vận hành mạng xã hội mới.

Hình dưới đây là sơ đồ phân phối nội dung khá điển hình, cũng là sơ đồ mà Fangtang hiện đang sử dụng.


Phương án phân phối nội dung của Fangtang
Nội dung dài
Trước tiên chúng tôi đã dùng WordPress để xây dựng website chính thức (ft07.com) để lưu các nội dung hình ảnh và văn bản dài (bài viết). Hiện tại chủ yếu là nội dung liên quan đến phương pháp doanh nghiệp một người, sau này sẽ dần dần di chuyển các nội dung khác sang. Những nội dung hình ảnh và văn bản dài này, chúng tôi có thể trực tiếp đẩy đến tài khoản công khai thông qua giao diện để đăng.

Nội dung ngắn
Phần nội dung ngắn (giống như Weibo), chúng tôi tự dựng một Memos, đây là dự án mã nguồn mở khá giống Weibo, có thể tự dựng. Trước tiên đăng nội dung trên đó, rồi thông qua công cụ đồng bộ đến Weibo và Twitter. Điều này tránh được vấn đề nội dung ngắn bị xóa trên nền tảng. Đồng thời, chúng tôi sẽ hiển thị nội dung ngắn lên website chính thức thông qua widget, vì website chính thức mới là hồ nội dung, tất cả nội dung đều nên tập hợp ở đây.

Nội dung video
Phần video, vì trước đây chúng tôi làm khóa học online, nên chúng tôi có một sản phẩm khóa học online. Vì vậy chúng tôi đặt video lên nền tảng sản phẩm khóa học online để host cục bộ. Đồng thời chúng tôi sẽ phân phối video lên Bilibili và YouTube, rồi từ hai nền tảng đó hướng lưu lượng về website chính thức của chúng tôi. Việc host video này không bắt buộc, dùng WordPress trực tiếp cũng có thể thực hiện được.

Có thể thấy, trong khuôn khổ này, dù là nội dung ngắn, nội dung hình ảnh và văn bản dài hay nội dung video đều được xử lý tốt.

Nhưng để đưa quy trình này vào sử dụng hoàn toàn, lại không dễ dàng. Nếu nội dung của chúng ta cập nhật hàng ngày, đặc biệt là nội dung ngắn, có thể hàng chục lần một ngày, thì việc phân phối bản thân sẽ rất phiền phức. Không phải nói nó có khó khăn gì, mà là nói khối lượng công việc của nó ở đâu, đó là công việc thể lực.

Nhưng may mắn là, chúng ta hiện nay có thể thực hiện việc này theo cách tự động hóa, có thể nâng cao hiệu quả hàng chục lần.

Tất nhiên, điều này không có nghĩa là tự động hóa có thể hoàn toàn thay thế vị trí vận hành mạng xã hội mới, vị trí này còn có nhiều chức năng khác, ví dụ như tương tác với người dùng, dịch vụ khách hàng, duy trì quan hệ. Những điều này hiện tại tự động hóa tạm thời vẫn chưa làm được. Tuy nhiên AI có thể sẽ làm được trong tương lai, dù sao hiện tại robot bình luận đã biết cãi lại người dùng rồi (nhầm).

Tóm lại, chúng ta hiện nay thực sự có thể làm việc phân phối nội dung này thông qua khả năng tự động hóa. Vì vậy, khả năng phân phối nội dung này về bản chất chính là khả năng tự động hóa.

Khả Năng Tự Động Hóa
Về khả năng tự động hóa, chúng tôi tự dùng FlowDeer để làm.

FlowDeer
Bạn có thể coi nó là một công cụ quản lý script tự động hóa, đồng thời cũng đi kèm nhiều script có sẵn. Có thể đọc bài viết này để tìm hiểu thêm.


Giao diện FlowDeer
Các script chúng tôi tự dùng nhiều nhất, chủ yếu là đăng Weibo, đăng Twitter, rồi theo dõi và thu thập nội dung RSS, sau đó theo dõi dịch nội dung trang web, cũng như giữ tài khoản hoạt động.


Một số script FlowDeer/FXD thường dùng
Cái gọi là giữ tài khoản hoạt động, ví dụ như, khi chúng ta muốn đăng nội dung Weibo, tài khoản cần phải đăng nhập, đúng không? Còn giữ hoạt động có nghĩa là, sau khi chúng ta đăng nhập một lần, nó sẽ định kỳ giúp bạn làm mới, đảm bảo tài khoản này luôn ở trạng thái đăng nhập. Như vậy khi muốn đăng, không cần đăng nhập nữa, có thể đăng trực tiếp.

Chúng tôi cũng đã làm biên tập viên bài viết này, nó là sự tích hợp của tự động hóa và chức năng AI.

Như việc tôi thường chia sẻ một số dự án mã nguồn mở trên GitHub, trước đây tôi tự phải viết văn bản. Với biên tập viên bài viết này, về cơ bản tôi chỉ cần ném cho nó một đường link, nó tự đến chụp màn hình rồi trích xuất nội dung chính, viết một bản tóm tắt, viết xong cho tôi xem xét, xem xét xong đăng trực tiếp là xong. Toàn bộ quy trình này rất trơn tru, thường chưa đến một phút.

Vì vậy khả năng tự động hóa thực sự đã trở thành một khả năng cần thiết của hồ nội dung rồi. Đặc biệt đối với doanh nghiệp một người, năng lượng của chúng ta rất hạn chế. Vì vậy những nơi có thể tự động hóa nhất định phải tự động hóa.

Script Trình Duyệt Có Thể Lập Trình
Tất nhiên nếu không muốn dùng FlowDeer, thực ra cũng có thể tự viết script Puppeteer. Đây là một trình duyệt không đầu, hoặc hiểu nó là trình duyệt có thể lập trình thì chính xác hơn. Chúng ta có thể lập trình kiểm soát mọi thứ trong trình duyệt. Có thể mở một trang web nào đó, nhấn một nút nào đó, rồi kiểm tra văn bản tương ứng, có thể tải file lên, đăng video, và tất cả đều tự động.

Vấn Đề Mã Xác Minh
Tất nhiên cũng có một số hạn chế, ví dụ như mã xác minh và xác minh robot kiểu kéo tương tự.

Chúng tôi khuyên mọi người dùng nó để thay thế công việc hàng ngày của mình, tức là thực hiện tự động hóa hoàn toàn trong phạm vi tần suất mô phỏng hoạt động của người thật. Trong trường hợp này, thực ra ít khi gặp mã xác minh. Tất nhiên nếu bạn muốn mở rộng quy mô, vấn đề này rất lớn. Nhưng đó không phải mục tiêu của chúng tôi. Mục tiêu của chúng tôi là thay thế công việc hàng ngày.

Sử Dụng Trò Chuyện AI Để Điều Khiển Quy Trình Làm Việc
Mặt khác, tự động hóa + trò chuyện AI có thể làm cho khả năng tự động hóa trở nên linh hoạt. Đây có một ví dụ, là cửa sổ trò chuyện AI được tích hợp trong FlowDeer.


Quy trình làm việc trò chuyện FlowDeer Chat
Trong môi trường trò chuyện này, bạn có thể dùng tất cả các script trong FlowDeer như một công cụ. Ví dụ giống như trong hình, tôi có thể gọi công cụ tạo hình ảnh để nó tạo một hình ảnh, rồi đồng thời gọi công cụ đăng Weibo, để nó đăng Weibo kiểu đó. Và tất cả những điều này, chúng ta chỉ cần hoàn thành thông qua cách trò chuyện trong cửa sổ trò chuyện, điều này rất tiện lợi và hiệu quả.

Tất nhiên hiện nay vì vấn đề trí tuệ AI, vẫn chỉ là một thứ hỗ trợ. Nhưng tôi nghĩ đây là tạm thời, vì trí tuệ AI đang nâng cao mỗi tháng, tôi nghĩ sắp sớm có thể đạt tiêu chuẩn của người bình thường.
