# Cơ sở hạ tầng lý tưởng cho doanh nghiệp một người

Sau khi tìm hiểu về phương pháp luận, chúng ta thường muốn bắt đầu thực hành. Nhưng từ đây, độ khó sẽ tăng đột ngột, đặc biệt đối với những bạn không có nền tảng kỹ thuật sẽ cảm thấy không biết bắt đầu từ đâu.

Đó là vì chúng ta thiếu một số cơ sở hạ tầng — những thứ cần thiết cho các doanh nghiệp sử dụng Internet để xử lý các tình huống nghiệp vụ chung. Đối với một số doanh nghiệp ngoại tuyến, cơ sở hạ tầng có thể khác, nhưng doanh nghiệp một người ngoại tuyến thường khó mở rộng quy mô, vì vậy ở đây chúng ta chỉ thảo luận về cơ sở hạ tầng doanh nghiệp một người lấy mạng lưới và kinh tế số làm cốt lõi.

Để hiện thực hóa ý tưởng và hoạt động kinh doanh, giúp người dùng có thể sử dụng, chúng ta cần xây dựng một số cơ sở hạ tầng. Cơ sở hạ tầng không nhất thiết phải tự xây dựng mà có thể sử dụng trực tiếp các nền tảng sẵn có. Ví dụ, WeChat Official Account là một cơ sở hạ tầng khá hoàn chỉnh cho mô hình kinh doanh đọc có phí hoặc quảng cáo.

## Tại sao cần xây dựng cơ sở hạ tầng riêng
-------------

Vậy khi đã có các nền tảng trưởng thành, tại sao chúng ta vẫn cần xây dựng cơ sở hạ tầng riêng? Trước tiên cần làm rõ một điều: không phải nói rằng cơ sở hạ tầng của nền tảng không thể dùng, mà là trong khi sử dụng cơ sở hạ tầng nền tảng, cần có một bộ cơ sở hạ tầng hoàn toàn do mình kiểm soát và thực hiện kết nối người dùng liền mạch. Biến lựa chọn đơn thành lựa chọn đa.

### Mô hình kinh doanh

Mô hình kinh doanh cốt lõi của nền tảng là tập hợp người dùng để kiếm lợi nhuận. Do đó, chiến lược của nó đối với các loại người dùng khác nhau và ở các giai đoạn khác nhau trong vòng đời nền tảng là khác nhau, và những chiến lược này có thể không phù hợp với giai đoạn cụ thể của chúng ta.

Ví dụ, trên một số nền tảng, nếu một tài khoản có ảnh hưởng đặc biệt lớn, nền tảng có thể làm suy yếu khả năng của tài khoản đó. Còn đối với những tài khoản rất nhỏ, nếu không thấy xu hướng tăng trưởng, nền tảng sẽ không phân bổ lưu lượng, thậm chí hạn chế cả lưu lượng do chính bạn dẫn về.

Mặt khác, trong giai đoạn đầu của nền tảng, nền tảng có thể hỗ trợ một số loại tài khoản nhất định, lúc này bạn sẽ nhận được nhiều lưu lượng hơn, nhưng lưu lượng đó được chuyển từ người dùng khác sang.

Nếu không có cơ sở hạ tầng riêng, bạn chỉ có thể bị nền tảng điều khiển. Nhưng nếu có cơ sở hạ tầng riêng, khi chiến lược nền tảng không phù hợp, bạn có thể hướng dẫn người dùng đến nền tảng của mình để tiêu thụ nội dung và mua sản phẩm.

### Rủi ro bị khóa tài khoản

Nền tảng có ranh giới đỏ và luật bất thành văn riêng, thậm chí đôi khi xảy ra sai sót. Nếu vô tình vi phạm những vấn đề này, có thể dẫn đến bị khóa tài khoản. Đối với người dùng cá nhân, điều này có thể không nghiêm trọng, nhưng đối với người kinh doanh, có thể khiến công việc kinh doanh xây dựng nhiều năm bị xóa sổ hoàn toàn.

![](/images/image-10.png)

### Hình thái sản phẩm và thương hiệu

Việc sử dụng cơ sở hạ tầng nền tảng cũng có thể khiến hình thái sản phẩm trở nên quá giống nhau. Nếu hình thái sản phẩm khá bảo thủ thì có thể không có vấn đề gì, nhưng nếu muốn đổi mới về hình thái sản phẩm, những ràng buộc của cơ sở hạ tầng nền tảng sẽ rất lớn.

Ví dụ, trước đây chúng tôi đặt các khóa học video trên NetEase Cloud Classroom để bán, nhưng khi muốn cung cấp môi trường sandbox thực hành cho học viên, nền tảng không hỗ trợ. Dù chúng tôi tự phát triển sandbox, khi muốn kết nối với người dùng của NetEase Cloud Classroom, thì phát hiện ra nền tảng này không cung cấp giao diện lập trình.

Để ngăn giảng viên dẫn lưu lượng ra khỏi nền tảng, một số nền tảng thậm chí không cho phép xuất hiện tên miền độc lập trong tài liệu khóa học. Quy tắc này sẽ đặc biệt nghiêm ngặt ở giai đoạn giữa và cuối của nền tảng.

### Hệ sinh thái hỗn hợp

Thực hành tốt nhất mà chúng tôi đề xuất là trước tiên sở hữu một cơ sở hạ tầng hoàn toàn có thể kiểm soát, sau đó tận dụng tối đa tài nguyên và lưu lượng của các nền tảng khác nhau, phân phối nội dung đến các nền tảng khác và dẫn người dùng quay lại cơ sở hạ tầng tự sở hữu, tạo thành một hệ sinh thái hỗn hợp.

## Tại sao cần tự xây dựng cơ sở hạ tầng
------------

Trên thị trường có rất nhiều phần mềm hoặc dịch vụ SaaS để xây dựng cơ sở hạ tầng, nhưng khi thử sử dụng, chúng ta sẽ thấy chúng đều có ít nhiều vấn đề.

### Giá cao

Giá cao là một vấn đề điển hình, vì phần lớn các SaaS hướng đến doanh nghiệp.

![](/images/image-13-1024x759.png)

Định giá của các dịch vụ SaaS điển hình

Mức giá có thể rẻ đối với doanh nghiệp, nhưng lại đắt đối với cá nhân. Trong giai đoạn đầu của doanh nghiệp một người, chúng ta chưa kiếm được tiền và không có đầu tư mạo hiểm, nên nguồn lực hạn chế. Đầu tư hàng chục nghìn mỗi năm đối với cá nhân chưa có thu nhập là quá cao.

### Không mở cho cá nhân

Một vấn đề khác là nhiều cơ sở hạ tầng không mở cho cá nhân, chẳng hạn như thanh toán.

![](/images/image-12-1024x534.png)

Yêu cầu tài liệu đăng ký WeChat Pay
