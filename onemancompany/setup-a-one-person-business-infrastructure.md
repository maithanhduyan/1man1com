# Xây dựng cơ sở hạ tầng cho doanh nghiệp một người

Qua các thảo luận trước, chúng ta cho rằng cơ sở hạ tầng của doanh nghiệp một người cần có ba bộ chứa cốt lõi và bốn năng lực then chốt: pool người dùng, pool nội dung, pool sản phẩm; năng lực tiếp cận, năng lực thanh toán, năng lực tự động hóa và năng lực cộng đồng.

![](../../src/images/image-39-1024x457.png)

Ba pool, bốn năng lực của cơ sở hạ tầng

Sau khi xác định rõ mục tiêu, chúng ta có thể bắt đầu bước vào giai đoạn xây dựng.

Phương thức xây dựng
----

Lựa chọn đầu tiên cần thực hiện là: tự phát triển hoặc thuê người phát triển (outsource); hay xây dựng dựa trên dự án mã nguồn mở, chẳng hạn dựa trên WordPress.

![](../../src/images/image-40-1024x641.png)

Lựa chọn phương thức xây dựng

Các nhóm khác nhau có những lựa chọn khác nhau, tình cờ chúng tôi đã thử cả hai, ở đây chia sẻ kinh nghiệm của bản thân.

### Tự phát triển

Ban đầu chúng tôi chọn tự phát triển vì khi đó cho rằng WordPress quá cồng kềnh. Tuy nhiên, nhìn lại, phần lớn là do nghĩ năng lực phát triển của mình đủ mạnh, lầm tưởng chi phí thời gian và kỹ năng thấp — điều này cuối cùng được chứng minh là một nhận định sai lầm.

Từ năm 2019 đến 2022, chúng tôi chủ yếu áp dụng phương thức tự phát triển. Trong giai đoạn đó, chúng tôi chủ yếu phát triển nền tảng khóa học trực tuyến, bao gồm website khóa học và một số môi trường sandbox, môi trường chạy trực tuyến — tất cả đều là nền tảng được phát triển độc lập.

Ưu điểm của tự phát triển là hoàn toàn kiểm soát được, có thể tùy chỉnh đến từng pixel, hiện thực hóa 100% các tính năng và chi tiết trong đầu.

Nhưng nhược điểm là khối lượng công việc rất lớn, đặc biệt khi phát triển nhiều hệ thống nghiệp vụ thì chi phí bảo trì cực kỳ cao. Chúng tôi đã trích xuất phần dùng chung từ nhiều dự án, hình thành framework full-stack riêng, thống nhất frontend và backend, nhưng chi phí bảo trì framework vẫn rất cao. Ví dụ, sau khi nâng cấp framework nội bộ, các dự án mới tất nhiên có thể sử dụng trực tiếp, nhưng có thể cần quay lại nâng cấp các dự án cũ — điều này rất khổ sở.

### Kết hợp dựa trên WordPress

Đến năm 2023 và 2024, chúng tôi nhận ra rằng lượng lớn thời gian phát triển đã bị tiêu tốn vào những việc hoàn toàn có thể tránh được, và khi khối lượng nghiệp vụ tăng lên, cuối cùng chúng tôi có thể phải phát triển một hệ thống quản lý nội dung (CMS) — điều này thực chất lại tương đương với việc tự làm một WordPress. Vì vậy, chúng tôi đã quay lại sử dụng WordPress.

Dựa trên WordPress, ưu điểm đầu tiên là các tính năng phổ thông đã được hiện thực sẵn, một số tính năng đặc thù hơn có thể tích hợp qua plugin. Ví dụ, khi xây dựng portal Fangtang07, nếu tự phát triển thì ít nhất cần nửa năm để hoàn thiện các chi tiết. Nhưng bằng cách sử dụng WordPress và mua một theme 600 tệ, chúng tôi đã xây dựng xong rất nhanh và đạt được trải nghiệm đọc khá tốt.

REST API của WordPress cũng rất hoàn thiện, có thể mở rộng tính năng ở tầng API thông qua plugin, thậm chí có thể phát triển frontend độc lập và mở rộng bằng cách gọi REST API.

Nếu nhất định phải tìm nhược điểm, thì mức độ hoàn thiện tính năng và vấn đề hiệu năng tiềm ẩn là hai vấn đề lớn của WordPress. Vấn đề mức độ hoàn thiện tính năng là ở chỗ, khi có thể "lười biếng" (thông qua cài đặt và mua plugin), kết quả cuối cùng đạt được có thể lệch 10% so với mong muốn. Tất nhiên đây chắc chắn không phải lỗi của WordPress! 😂

Một vấn đề tiềm ẩn khác là khi vận hành website người dùng hoặc nội dung quy mô lớn bằng WordPress, hiệu năng có thể thành vấn đề. Mặc dù hầu hết các vấn đề hiệu năng là do plugin gây ra, nhưng đây vẫn là một thách thức. Tuy nhiên, số lượng người dùng sản phẩm của chúng tôi còn cách rất xa quy mô đó, và chúng tôi vẫn đang nỗ lực để gặp phải vấn đề này.

![](../../src/images/image-41-1024x467.png)

So sánh ưu nhược điểm các phương thức xây dựng

### Thực hành tốt nhất

Thực hành tốt nhất theo quan điểm của chúng tôi là: trước tiên dựa trên WordPress để làm sản phẩm khả thi tối thiểu (MVP) và gây quỹ cộng đồng cho nghiệp vụ, đồng thời có thể đặt trang web chính thức và tài liệu sản phẩm trên nền tảng này. Khi nghiệp vụ tăng trưởng và lượng người dùng tăng lên, chúng ta mới tự phát triển.

![](../../src/images/image-42-1024x575.png)

Thực hành tốt nhất

Ngay cả khi tự phát triển, chúng ta vẫn có thể kết hợp với WordPress ở ba tầng, lần lượt thoát khỏi sự ràng buộc của giao diện, backend và cơ sở dữ liệu.

Đầu tiên, chúng ta có thể sử dụng WordPress làm backend thông qua REST API, tiết kiệm rất nhiều khối lượng công việc.

Sau đó, nếu hệ thống backend của WordPress vẫn chưa đủ hiệu quả, chúng ta có thể chia sẻ cơ sở dữ liệu, tự phát triển một hệ thống mới, đọc dữ liệu trực tiếp từ cơ sở dữ liệu của WordPress. Như vậy hiệu năng của hệ thống mới do code của chúng ta đảm bảo, dữ liệu dùng chung, có thể chạy song song.

Nếu vẫn chưa đủ, chúng ta có thể tiến thêm một bước, xây dựng một hệ thống hoàn toàn độc lập, nhưng thông qua đăng nhập thống nhất để liên kết người dùng. Chúng ta có thể liên kết tài khoản WordPress với WeChat. Hệ thống mới tuy cơ sở dữ liệu khác, nhưng thông qua đăng nhập WeChat đi qua Open ID thống nhất, chúng ta cũng có thể xác định thông tin liên quan đến người dùng. Nếu cần thêm thông tin người dùng, chúng ta có thể đọc dữ liệu tương ứng thông qua REST API.

Thông qua sự kết hợp đa tầng này, chúng ta có thể thực hiện lượng phát triển tối thiểu, vừa có tự do về giao diện và hiệu năng, vừa giảm thiểu chi phí bảo trì.

Phương án tham khảo: Fangtang OPB
----------

Fangtang OPB là bộ plugin WordPress do chúng tôi phát triển. Kết hợp sử dụng với BudCoder và FlowDeer, có thể đạt được độ phủ cao cho "ba pool, bốn năng lực".

### Giao diện sản phẩm
