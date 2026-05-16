# Hồ sản phẩm và khả năng thanh toán

Hồ sản phẩm
---

Chúng ta đã có hồ người dùng và hồ nội dung, tiếp theo hãy chuyển tầm nhìn trở lại phía kinh doanh.

Thực ra, đối với từng nghiệp vụ đơn lẻ, giữa nhiều nghiệp vụ có rất nhiều điểm chung, chẳng hạn vì tất cả đều nhằm tạo ra lợi nhuận, nên cần nhiều chức năng và khả năng thương mại chung.

Mặt khác, với hồ người dùng và hồ nội dung, bản thân nghiệp vụ trở thành một mô-đun có thể cắm vào. Nó không cần quan tâm đến các chức năng liên quan đến nội dung và người dùng, một khi kết nối với hồ người dùng và hồ nội dung, có thể bắt đầu vận hành mà không cần trở thành một nghiệp vụ độc lập hoàn chỉnh.

Do đó, chúng ta tích hợp các nghiệp vụ này thành một loạt các thành phần nghiệp vụ, đồng thời dùng "hồ sản phẩm" để chứa đựng chúng.

![](/images/image-26-1024x858.png)

Từ đa nghiệp vụ đến hồ sản phẩm + thành phần nghiệp vụ

Khả năng thanh toán
----

Điều mà hồ sản phẩm cần nhất là khả năng thanh toán—điều này rất dễ hiểu. Vì đối với doanh nghiệp, mục đích cốt lõi chắc chắn là kiếm tiền, và không có chức năng thanh toán thì không thể tạo ra doanh thu.

### Nhà cung cấp dịch vụ thanh toán

#### Nhà cung cấp thông dụng

Trong nước, các dịch vụ thông dụng là WeChat Pay và Alipay, nhưng cả hai đều không mở cho cá nhân, cần phải đăng ký doanh nghiệp hoặc hộ kinh doanh cá thể.

Chi phí đăng ký doanh nghiệp tập trung ở kế toán và mặt bằng. Còn địa chỉ đăng ký hộ kinh doanh cá thể ở một số tỉnh cũng có yêu cầu, điều này chắc chắn đẩy chi phí lên cao, vì địa điểm văn phòng thực ra là chi phí cố định, và nhiều thành phố không cho phép đăng ký tại nhà dân. Yêu cầu cụ thể có thể hỏi cục công thương địa phương, chính sách mỗi nơi có sự khác nhau, nhưng nhìn chung điều này thực sự làm tăng chi phí.

#### Nhà cung cấp mở cho cá nhân

May mắn thay, chúng ta vẫn có một số nhà cung cấp dịch vụ thanh toán mở cho cá nhân.

Như XorPay, đây thực ra là một nền tảng thanh toán vi mô, trên nền tảng này bạn có thể kết nối WeChat và Alipay. Có thể tự đăng ký kích hoạt, địa chỉ cửa hàng có thể dùng địa chỉ nhà ở, ảnh cửa hàng có thể dùng ảnh cổng chính. Ngoài ra tôi nhớ nó có phí kích hoạt một trăm, có thể xác nhận với bộ phận chăm sóc khách hàng.

![](/images/image-27.png)

Giải thích về phí kích hoạt trong FAQ của XorPay

Một số phương án thanh toán của Alipay cũng mở cho cá nhân, như "Thanh toán trực tiếp", nhưng trường hợp sử dụng có phần không phù hợp, vì từ tên gọi đã có thể thấy, nó vốn dùng cho thanh toán trực tiếp mặt đối mặt.

So sánh lại, tôi cho rằng sử dụng nền tảng thanh toán vi mô như XorPay là một phương án tốt hơn, hỗ trợ nhiều kênh hơn, và tiền người dùng thanh toán cũng vào thẳng tài khoản của chúng ta, điều này khá an toàn.

Tích hợp thanh toán
----

Chúng ta đã có khả năng thanh toán, nhưng vẫn cần kết nối với các thành phần nghiệp vụ của mình mới có thể sử dụng được.

Nếu chúng ta chỉ có một nghiệp vụ thì không sao; nhưng nếu có nhiều nghiệp vụ, chúng ta sẽ đối mặt với hai vấn đề.

Thứ nhất, mỗi nghiệp vụ cần tích hợp riêng lẻ, điều này thực ra rất phiền phức. Vì những gì nhà cung cấp dịch vụ cung cấp thường là kết nối ở tầng hệ thống, chứ không phải tầng ứng dụng, toàn bộ quá trình khá rắc rối.

Mặt khác, một số hệ thống về mặt thiết kế không hỗ trợ đa nghiệp vụ. Nếu chúng ta sử dụng thanh toán chính thức của WeChat, danh mục thanh toán của nó có giới hạn, tối đa hỗ trợ 5 cái. Vậy nếu nghiệp vụ của chúng ta vượt quá năm thì sao? Điều này đòi hỏi chúng ta tự tìm giải pháp.

### Phương án tự xây dựng quầy thu ngân

Giải pháp của chúng ta là xây dựng một quầy thu ngân của riêng mình, điều này có thể giải quyết tốt hai vấn đề nêu trên.

Nói đơn giản, nó coi mỗi nghiệp vụ như một ứng dụng, sau đó gán cho ứng dụng đó một tham số. Người dùng mang theo tham số này chuyển đến trang thu ngân để thanh toán. Sau khi thanh toán xong, quầy thu ngân dùng ID đơn hàng này để chuyển hướng, người dùng lại mang ID đơn hàng đã thanh toán đến nghiệp vụ để xác minh, toàn bộ quá trình thanh toán hoàn tất.

![](/images/Screen-Shot-2024-07-07-at-12.59.57-PM-1024x669.png)

Sơ đồ quy trình quầy thu ngân

Ý nghĩa của quầy thu ngân là nhiều nghiệp vụ của chúng ta có thể dùng chung hệ thống thanh toán và đơn hàng.

Nếu phát triển đủ nhiều nghiệp vụ, bạn sẽ hiểu việc phát triển riêng hệ thống thanh toán và đơn hàng cho nhiều nghiệp vụ phiền phức đến mức nào. Dù code có thể tái sử dụng, nhưng nếu nó phân tán vào từng nghiệp vụ, việc bảo trì sẽ rất phiền. Vì vậy, biến nó thành một thành phần dùng chung, đóng gói thành một năng lực cơ bản chuẩn là rất cần thiết.

### Cổng WooCommerce

Nếu chúng ta sử dụng WordPress, có một phương án đơn giản hơn, đó là thêm cổng thanh toán cho WooCommerce.

Hầu hết các plugin WordPress liên quan đến thanh toán đều sử dụng WooCommerce. Ban đầu đây là một plugin bên thứ ba, sau đó được công ty mẹ của WordPress mua lại, dù vẫn vận hành dưới thương hiệu độc lập, nhưng thực ra đây là sản phẩm chính thức.

Nó cung cấp các chức năng thanh toán và hàng hóa hoàn chỉnh, nhưng thiếu một số nhà cung cấp thanh toán thông dụng trong nước.

![](/images/image-29-1024x644.png)

Giao diện cài đặt cổng thanh toán WooCommerce

Chúng ta chỉ cần thêm một số cổng, chẳng hạn cổng thanh toán chính thức của WeChat hoặc cổng thanh toán của XorPay, sau đó tất cả ứng dụng hỗ trợ WooCommerce có thể trực tiếp sử dụng khả năng thanh toán của chúng ta.

Khả năng gọi vốn cộng đồng (Crowdfunding)
----

### Ý nghĩa của gọi vốn cộng đồng

Trong phương pháp luận doanh nghiệp một người của chúng ta, tôi liên tục nhấn mạnh tầm quan trọng của gọi vốn cộng đồng. Vì những điều quan trọng cần nói ít nhất ba lần.

Năng lực của doanh nghiệp một người rất hạn chế, nên chi phí thử nghiệm sai lầm rất cao, không chỉ là tiền bạc, đó còn là chi phí cơ hội, vì số việc chúng ta có thể làm trong một năm rất giới hạn. Vì vậy, sử dụng gọi vốn cộng đồng để xác nhận là khả năng rất quan trọng.

Trong các phương pháp luận khởi nghiệp tương đối chủ đạo, có hai thứ cần xác nhận cốt lõi: một là đề xuất giá trị, tức là hàng hóa của chúng ta có giá trị với người dùng mục tiêu không; thứ hai là kênh phân phối, tức là sản phẩm của chúng ta có giá trị với nhóm người này, nhưng nó có thể tăng trưởng không? Nó có thể đạt quy mô chúng ta mong muốn không?

![](/images/image-30-1024x590.png)

Hai giả thuyết quan trọng nhất

### Xác nhận đa điểm

Xác nhận bằng gọi vốn cộng đồng là một phương pháp xác nhận đa điểm đơn giản và mạnh mẽ, tức là xác nhận đề xuất giá trị và kênh phân phối cùng một lúc. Chính xác mà nói, nó có thể không xác nhận được tăng trưởng giai đoạn sau, nhưng có thể xác nhận kênh giai đoạn đầu.

Giá trị đạt mục tiêu của gọi vốn cộng đồng, ở mức độ nhất định, có nghĩa là giới hạn dưới của quy mô giai đoạn đầu; khi người dùng ít, chúng ta có thể đặt nó ở điểm không lỗ; khi người dùng đủ nhiều, chúng ta thậm chí có thể đặt nó ở quy mô chúng ta kỳ vọng, nhiều dự án trên Kickstarter có nguồn thu nhập chính từ gọi vốn cộng đồng.

Việc gọi vốn cộng đồng xác nhận đề xuất giá trị chính xác hơn, là sự xác nhận thực tế bằng tiền thật. Nếu chúng ta làm trang đích hoặc phỏng vấn để xác nhận đề xuất giá trị, nhiều người dùng sẽ nói với chúng ta rằng thứ này tốt lắm, về thử xem, rồi không có gì thêm nữa. Nhưng thông qua phương thức gọi vốn cộng đồng để xác nhận, người thực sự cảm thấy tốt sẽ bỏ tiền ra, người chỉ bề ngoài cảm thấy tốt sẽ không bỏ tiền đó, kết quả xác nhận rất thực tế.

### Đặt bán trước

Thứ hai, gọi vốn cộng đồng đặt việc bán hàng lên trước. Xác nhận thành công thì việc bán hàng đã hoàn tất, xác nhận không thành công thì chúng ta sẽ không đi xây dựng những sản phẩm không bán được. Điều này rất quan trọng, đối với doanh nghiệp một người, chi phí xây dựng có thể chiếm hơn 80% chi phí nghiệp vụ, và nếu trước khi xây dựng chúng ta đã biết nó không bán được thì có thể không làm việc đó, từ đó tiết kiệm rất nhiều chi phí.

Tất nhiên có bạn có thể nói, thứ của tôi chưa làm ra, sức hút với người dùng rõ ràng là không đủ, gọi vốn cộng đồng của chúng ta không thể trình diễn tốt sản phẩm này, nên người dùng mới không mua, điều này là có thể xảy ra.

Nhưng giải pháp không phải là đi phát triển sản phẩm, mà là làm video dùng để gọi vốn cộng đồng hoặc demo cho mọi người thử nghiệm khi gọi vốn cộng đồng đủ chi tiết, để những người ủng hộ có thể trải nghiệm hiệu quả sau khi chúng ta hoàn thành.

Cũng có bạn cho rằng gọi vốn cộng đồng quá phụ thuộc vào năng lực bán hàng, nhưng quá trình phát triển không nâng cao năng lực bán hàng của bạn, tức là sản phẩm không bán được khi gọi vốn cộng đồng, sau khi phát triển xong bán lại, khả năng vẫn không bán được vẫn rất cao.

### Các yếu tố cấu thành của gọi vốn cộng đồng

Thực ra, các yếu tố cấu thành hệ thống gọi vốn cộng đồng rất đơn giản.

-   Thu phí
-   Thống kê điều kiện đạt mục tiêu
-   Hoàn tiền hàng loạt hoặc giao hàng

#### Thực hiện gọi vốn cộng đồng bằng nhóm chat

Chúng ta thậm chí có thể dùng một nhóm chat để hoàn thành gọi vốn cộng đồng rất tốt, mà không cần mua bất kỳ phần mềm nào.

Ví dụ, chúng ta làm một nhóm chat tính phí để tham gia, điều này giải quyết việc thu phí; sau đó thống kê điều kiện đạt mục tiêu chúng ta làm qua tính năng "xếp hàng" trong nhóm, người đã trả phí đăng ký một lần, có thể biết phần mềm của chúng ta đã bán được bao nhiêu bộ, khóa học bán được bao nhiêu suất, có đạt mục tiêu không, tất cả mọi người trong nhóm đều thấy rõ. Hoàn tiền hàng loạt cũng rất đơn giản, chúng ta chỉ cần gửi một phong bì đỏ nhóm định mức, mỗi người nhận theo mức cố định, tiền đó được hoàn trả.

Về giao hàng, nếu làm đơn giản hơn, chúng ta có thể đưa phần mềm hoặc video lên lưu trữ đám mây, cung cấp liên kết cho mọi người qua thông báo nhóm, cũng có thể đưa thẳng vào file nhóm, điều này tùy thuộc vào chức năng tương ứng của nhóm.

![](/images/image-31.png)

Thực hiện gọi vốn cộng đồng qua nhóm chat

Vậy bạn thấy đó, gọi vốn cộng đồng là một cách tư duy, thực ra không phải là một hệ thống cố định, không phải nói chúng ta phải có hệ thống mới làm được gọi vốn cộng đồng, dù chỉ có một nhóm chat chúng ta cũng có thể xử lý tốt.

Và như bước hoàn tiền hàng loạt, nếu không thể hoàn tiền hàng loạt, tệ nhất là hoàn tiền thủ công, chỉ vất vả hơn một chút thôi. Chủ yếu là trường hợp chúng ta hoàn tiền thường là khi không đạt mục tiêu, nên số người dùng này ngược lại không quá nhiều, vì người dùng nhiều là đạt mục tiêu rồi.

#### Gọi vốn cộng đồng bằng WooCommerce

Tất nhiên, nếu chúng ta thường xuyên làm gọi vốn cộng đồng, sử dụng nhóm chat sẽ khá phiền phức. Nếu sử dụng WordPress, chúng ta cũng có thể dùng plugin WordPress để làm. Thực ra WooCommerce đã hoàn thiện một quy trình bán hàng chuẩn, mua hàng và giao hàng.

Nơi cần chỉnh sửa chỉ có hai chỗ. Thứ nhất là, chúng ta có thể cần thêm một shortcode để xuất thống kê về doanh số bán hàng của sản phẩm và liệu có đạt mục tiêu không, ví dụ như hình dưới đây.

![](/images/image-32.png)

Hiệu ứng render shortcode gọi vốn cộng đồng sản phẩm

Thứ hai, chúng ta cần một nút hoàn tiền hàng loạt. Nhưng điều này thực ra là tùy chọn, không có nút này cũng có thể hoàn tiền, chỉ là phiền hơn một chút.

![](/images/image-33.png)

Thêm nút hoàn tiền hàng loạt cho WooCommerce

Vì vậy, đừng nghĩ gọi vốn cộng đồng là phiền phức, cũng đừng nghĩ gọi vốn cộng đồng nhất thiết phải có hệ thống, đây là một cách tư duy, hy vọng mọi người áp dụng nó. Điều này đối với doanh nghiệp một người và nhóm nhỏ thiếu nguồn lực, thực sự rất rất quan trọng.

![](/images/image-34-1024x463.png)

Bản chất khả năng gọi vốn cộng đồng là khả năng thanh toán

Suy cho cùng, bản chất khả năng gọi vốn cộng đồng là một loại khả năng thanh toán, thực ra đây là sự đổi mới mô hình kinh doanh. Nếu việc thành phần hóa và tự động hóa khả năng thanh toán của chúng ta đủ tốt, chúng ta sẽ thấy những thứ như gọi vốn cộng đồng, học xong miễn phí, những mô hình kinh doanh trông có vẻ khá sáng tạo này đều rất dễ thực hiện.
