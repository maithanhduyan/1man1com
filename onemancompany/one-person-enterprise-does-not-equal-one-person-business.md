Doanh nghiệp một người ≠ Kinh doanh một người
=========

Cấu trúc của cuốn sách này chủ yếu gồm ba mô-đun lớn: Định nghĩa doanh nghiệp một người, Lập kế hoạch doanh nghiệp một người, và Xây dựng kinh doanh một người. Những độc giả tinh ý có thể đã nhận ra rằng, so với hai phần đầu, tiêu đề của phần thứ ba có sự khác biệt — đây không phải là sự trùng hợp ngẫu nhiên.

![](images/image-72-1024x240.png)

Thực ra trong phiên bản phương pháp luận đầu tiên, mô-đun thứ ba ban đầu là Xây dựng doanh nghiệp một người. Nhưng trong hai năm gần đây qua thực hành và lặp lại, chúng tôi phát hiện rằng nếu đồng nhất doanh nghiệp một người với kinh doanh, dễ rơi vào lối tư duy sai lầm.

Doanh nghiệp một người không đồng nghĩa với kinh doanh một người
-----------

Nếu chúng ta đồng nhất doanh nghiệp một người với một mô hình kinh doanh duy nhất, thì một khi mô hình đó thất bại, chúng ta sẽ phải bỏ đi toàn bộ doanh nghiệp và bắt đầu lại từ đầu. Cách làm này đặc biệt phổ biến trong các công ty khởi nghiệp, và trước đây chúng ta cũng đã vô tình áp dụng theo mô hình này mà không suy nghĩ kỹ.

Tuy nhiên, khi suy nghĩ sâu hơn, ta sẽ nhận ra rằng trong các công ty khởi nghiệp, dự án và công ty gắn chặt với nhau phần lớn là do cấu trúc cổ phần và phương thức thanh lý tài sản. Đối với doanh nghiệp một người, toàn bộ tài sản thường chỉ do một người nắm giữ, nên không tồn tại lo ngại đó.

Đứng trên vai những dự án thất bại
---------

Mặt khác, đối với doanh nghiệp một người, thất bại trong kinh doanh là điều bình thường, thường xảy ra vài tháng một lần. Nếu chúng ta bỏ đi tất cả từ dự án thất bại và bắt đầu lại, chúng ta thường sẽ dậm chân tại chỗ. Ngược lại, nếu chúng ta biết tận dụng tốt các thành quả trung gian từ dự án thất bại, thì lần sau có thể đứng trên vai chúng mà tiến bước. Cứ như vậy, dù nhiều lần thất bại vẫn tiếp tục chiến đấu, cuối cùng sẽ thành công.

![](images/image-73-1024x456.png)

Doanh nghiệp một người có thể có nhiều mô hình kinh doanh một người

Sự khác biệt nhỏ trong nhận thức này có thể bị khuếch đại trong quá trình thực thi, dẫn đến kết quả hoàn toàn khác nhau. Ví dụ, trước đây tôi thường đăng ký một tên miền riêng biệt cho mỗi dự án, sử dụng một hệ thống người dùng độc lập. Như vậy các thương hiệu hoàn toàn tách biệt nhau, không ảnh hưởng lẫn nhau. Nhưng điều đó cũng dẫn đến việc một khi dự án đóng cửa, người dùng sẽ hoàn toàn bị mất.

Cách làm của tôi hiện nay là đặt tất cả các dự án dưới thương hiệu Fangtang, sử dụng tên miền phụ của Fangtang, sử dụng hệ thống người dùng thống nhất của Fangtang. Như vậy, người dùng được chia sẻ giữa nhiều mô hình kinh doanh, cũng tiện lợi hơn cho người dùng, không cần phải đăng ký liên tục.

Về mặt triển khai kỹ thuật, chúng tôi tách biệt frontend và backend, phân tách hoàn toàn website, client và backend API, đồng thời cải tạo backend API thành một nền tảng mở nội bộ. Như vậy khi ra mắt dự án mới, chỉ cần bổ sung các API còn thiếu vào nền tảng mở, rồi sử dụng trang frontend độc lập để gọi API là xong.

![](images/image-1-414x1024.jpg)

Giải pháp backend API thống nhất

Kinh doanh một người không nhằm mục đích sinh lời
---------

Mở rộng thêm tư duy này, nếu chúng ta thấy việc sinh lời từ kinh doanh một người quá khó khăn (điều này thường xảy ra ở giai đoạn đầu của doanh nghiệp một người, do thiếu tài nguyên và kinh nghiệm), thì chúng ta có thể lên kế hoạch một số mô hình kinh doanh một người chuyên dùng để thu thập tài nguyên, giúp giảm bớt khó khăn cho việc kiếm tiền sau này.

![](images/image-71-1024x456.png)

Xây dựng kinh doanh một người

Trong quá khứ, tôi không hiểu được cách làm của những người phát triển ứng dụng theo xu hướng hot. Ví dụ, cái gì đang thịnh hành thì họ phát triển cái đó. Chúng ta sẽ nhận thấy rằng một khi những xu hướng đó không còn phổ biến nữa, các ứng dụng đó cũng nhanh chóng biến mất.

Tuy nhiên, nếu chúng ta xem xét vấn đề từ góc độ hệ thống hóa, sẽ thấy cách làm này thực ra khá thú vị. Mặc dù các mô hình kinh doanh theo xu hướng có vẻ không trực tiếp đóng góp doanh thu, nhưng nó có thể thu hút người dùng. Những người dùng này sau khi tải ứng dụng, đăng ký tài khoản công khai, hoặc tham gia nhóm WeChat, sẽ được đưa vào pool người dùng của chúng ta. Khi chúng ta xây dựng mô hình kinh doanh tiếp theo có độ trùng lặp cao với nhóm người dùng mục tiêu này, chi phí thu hút khách hàng sẽ giảm đáng kể.

Do đó, từ góc độ tư duy hệ thống hóa, việc đi theo xu hướng không phải là vô nghĩa. Ngược lại, nó cung cấp một phương pháp hiệu quả để chúng ta xây dựng và mở rộng cơ sở người dùng.

Báo cáo tháng của doanh nghiệp một người
------

Để suy nghĩ tốt hơn về cách tối ưu hóa phối hợp giữa kinh doanh một người và doanh nghiệp một người, chúng tôi đã thiết kế "Báo cáo tháng doanh nghiệp một người". Báo cáo tháng được chia thành hai phần, áp dụng tương ứng cho đầu tháng và cuối tháng.

![](images/image-81-1024x586.png)

Báo cáo tháng doanh nghiệp một người - Phiên bản đầu tháng

### Mục tiêu doanh thu

Vào đầu tháng, chúng ta sẽ đặt mục tiêu doanh thu, đồng thời so sánh với thu nhập định kỳ hàng tháng (MRR) của tài sản hiện tại, lợi nhuận khả thi tối thiểu mong muốn đạt được (MVPr), và MRR cần thiết để đạt được tự do trong công việc. Qua sự so sánh, chúng ta có thể thấy rất rõ vị trí hiện tại của mình và khoảng cách với mục tiêu. Hãy tưởng tượng đạt được cột mốc tiếp theo, trạng thái làm việc và cuộc sống thoải mái hơn mà chúng ta có thể đạt được, điều đó sẽ thúc đẩy chúng ta tiến về phía trước.

Tiếp theo là phần biến động tài sản, tức là các tài sản chúng ta dự kiến bổ sung mới, tối ưu hóa và xử lý, cùng với mô tả ngắn gọn về các tài sản đó.

Ngoài ra, còn có ba mô-đun trạng thái, mô tả trạng thái hiện tại của doanh nghiệp, tôi coi đây là "sức khỏe" của doanh nghiệp.

### Pool người dùng

Trong đó, pool người dùng là nhóm người dùng mà chúng ta có thể tiếp cận. Phương thức tiếp cận có thể là đẩy thông báo WeChat, email hoặc tin nhắn SMS và các phương pháp trực tiếp khác.

Chúng ta phân chia người dùng thành "người dùng gốc" và "người dùng nền tảng bên thứ ba". Người dùng gốc là những người đăng ký trên nền tảng mà chúng ta hoàn toàn kiểm soát, ví dụ như người dùng có ứng dụng của chúng ta; còn người dùng nền tảng bên thứ ba là những người theo dõi tài khoản của chúng ta trên các nền tảng như Weibo hoặc Bilibili. Sự khác biệt cốt lõi nằm ở chỗ, khi chúng ta đẩy thông báo, liệu có bị giới hạn hay phải trả thêm phí hay không.

Ngoài ra, chúng ta cần xem xét số lượng người dùng tham gia lan truyền thứ cấp và trả phí, đây đều là các chỉ số quan trọng của tầng người dùng.

### Pool nội dung và cơ sở hạ tầng

Pool nội dung đề cập đến nội dung có thể mang lại doanh thu hoặc lưu lượng truy cập. Trong đó nội dung mang lại doanh thu về thực chất đã trở thành tài sản, đặt ở đây là để suy nghĩ về nó từ góc nhìn thống nhất của đặc tính nội dung.

Tầng cơ sở hạ tầng liên quan đến cơ sở hạ tầng cần thiết khi xây dựng logic sản phẩm dùng chung.

Nhiều sản phẩm đang xây dựng pool người dùng và pool nội dung dựa trên tài khoản công khai WeChat làm cơ sở hạ tầng. Nhưng nền tảng tài khoản công khai WeChat đã qua giai đoạn phát triển, hiện nay bắt đầu kiểm soát lưu lượng và tập trung vào kiếm tiền, có không ít hạn chế đối với việc lan truyền. Ví dụ họ yêu cầu các quảng cáo thương mại không liên quan đến chủ đề tài khoản công khai phải đi qua kế hoạch quảng cáo của họ.

So sánh lại, cơ sở hạ tầng được kiểm soát hoàn toàn tự chủ mới là giải pháp tốt nhất.

APP là phương án có tính tự chủ và tỷ lệ tiếp cận tốt nhất. Nhưng phát triển APP đối với doanh nghiệp một người là chi phí rất cao. Bảo trì cũng cần đầu tư liên tục, chỉ riêng việc cập nhật trên các cửa hàng ứng dụng đã mất khá nhiều thời gian. Mặt khác, phát hành APP cần được nền tảng xét duyệt, ảnh hưởng lớn đến tính kịp thời của việc cập nhật.

Mini Program (tiểu chương trình) là một phương án trung gian, nhưng từ năm 2024, cũng phải tiến hành đăng ký APP. Ngoài ra, thanh toán trên iOS cũng thường bị cấm.

So sánh tất cả, chúng tôi cho rằng đối với các dự án doanh nghiệp một người trong giai đoạn đầu, sử dụng website độc lập có tỷ lệ chi phí-hiệu quả cao nhất. Tuy nhiên cần tích hợp hệ thống người dùng với WeChat, và sử dụng tin nhắn mẫu, tin nhắn dịch vụ khách hàng, tin nhắn đăng ký của WeChat để tiếp cận.

Nếu phát triển website độc lập từ đầu, chi phí không hề thấp. Nhưng nếu xây dựng thông qua WordPress, chỉ cần trả phí máy chủ, một instance cloud hosting tối thiểu là đủ, chi phí dưới 50 nhân dân tệ một tháng. Chúng tôi đang phát triển một plugin WordPress để hỗ trợ phương pháp luận doanh nghiệp một người, có thể tích hợp người dùng WordPress và WeChat, bài viết hỗ trợ đẩy thông báo đến người dùng đăng ký, hỗ trợ thanh toán WeChat và giao diện XorPay, và có thể thực hiện crowdfunding sản phẩm. Khi hoàn thiện sẽ công bố trên trang web này, hãy chú ý đón xem.

Khi có website độc lập của riêng mình, nội dung và người dùng đều có thể được xây dựng xung quanh nó. Nội dung được đăng lên trang chính của mình trước, sau đó đồng bộ lên các nền tảng bên thứ ba. Trong nội dung được đồng bộ, chúng ta có thể cung cấp nội dung bổ sung trên nền tảng của mình, hướng dẫn người dùng quay lại trang chính để xem, từ đó đảm bảo các tài sản cốt lõi và cơ sở hạ tầng đều do mình kiểm soát.

### Tổng kết cuối tháng

![](images/opb-month-end-1024x583.png)

Báo cáo tháng doanh nghiệp một người - Phiên bản cuối tháng

Vào cuối tháng, chúng ta sẽ có một biểu đồ tương ứng để xem lại công việc trong tháng, bao gồm tình trạng và tiến độ xử lý tài sản, cũng như liệu có đạt được mục tiêu đã đặt ra hay không. Trong đó, phần thay đổi chính là cơ cấu tài sản và phần mục tiêu doanh thu.

Mục đích chính của "Báo cáo tháng doanh nghiệp một người" là buộc chúng ta phải suy nghĩ về doanh nghiệp từ góc độ toàn diện, và thực hiện định kỳ. Đảm bảo chúng ta không bỏ sót những phần quan trọng.
