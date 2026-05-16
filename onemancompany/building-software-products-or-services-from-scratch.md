# Xây dựng sản phẩm: Xây dựng sản phẩm hoặc dịch vụ phần mềm từ đầu

Bài viết này cố gắng giới thiệu đầy đủ toàn bộ quá trình từ lên kế hoạch đến ra mắt của một sản phẩm phần mềm, hy vọng mang lại cho bạn nguồn cảm hứng. Nội dung được trích chọn và viết lại từ [《Dự án phụ tinh gọn》](https://github.com/easychen/lean-side-bussiness).

Quy trình sản phẩm
----

![](/images/image-106-1024x511.png)

Quy trình sản phẩm phù hợp hơn với doanh nghiệp một người

Trong bài viết này, chúng ta sử dụng quy trình sản phẩm đã được tối ưu hóa, phù hợp hơn với doanh nghiệp một người. Trong đó bước「Khung mô hình kinh doanh」, đề nghị thay thế bằng「[Khung doanh nghiệp một người](https://ft07.com/opb-canvas-and-opb-report/)」có tính định hướng cao hơn.

Quy trình này trông rất giống quy trình sản phẩm của nhiều công ty Silicon Valley, nhưng đã được điều chỉnh và tối ưu hóa cho doanh nghiệp một người. Sau hơn ba năm sử dụng, chúng tôi đã cảm thấy rất quen thuộc.

1.  Đầu tiên xác định đề xuất giá trị, sau đó thiết kế khung mô hình kinh doanh xung quanh giá trị đó.
2.  Sau khi hoàn thành khung, chúng ta lấy phần「Phân khúc khách hàng」trong khung ra, tạo thành「Chân dung người dùng」. Đây là công cụ cụ thể hóa khách hàng phân khúc, làm cho họ trở nên sống động.
3.  Có chân dung rồi, từ đó tái hiện các tình huống sử dụng sản phẩm của người dùng: họ dùng máy tính hay điện thoại, ở nhà hay trên xe v.v.
4.  Tưởng tượng để truyền tải giá trị đến người dùng trong các tình huống trên, chúng ta cần những tính năng gì, từ đó sẽ có được danh sách tính năng.
5.  Danh sách tính năng sẽ rất dài, và mức độ ưu tiên của các tính năng khác nhau cũng khác nhau. Vì vậy chúng ta sẽ phân giai đoạn các tính năng, trong đó giai đoạn quan trọng nhất và đầu tiên nhất chính là giai đoạn dùng để phát triển「Sản phẩm khả thi tối thiểu」.
6.  Sau khi「Sản phẩm khả thi tối thiểu」được phát triển xong, tiến hành xác minh「Phù hợp sản phẩm-thị trường」, nếu không đạt mục tiêu xác minh đã đặt ra, cần điều chỉnh tính năng, thậm chí thiết kế lại đề xuất giá trị.
7.  Sau khi đạt được「Phù hợp sản phẩm-thị trường」, chúng ta có thể lặp lại phát triển các tính năng khác của sản phẩm theo từng giai đoạn.
8.  Trong quá trình lặp lại, chúng ta sẽ liên tục tối ưu hóa tăng trưởng cho các tính năng mới ra mắt, đảm bảo mỗi phần tính năng đạt được mục tiêu định sẵn.

Trên đây là quy trình tinh gọn mà chúng ta đã tối ưu hóa cho doanh nghiệp một người. Tuy nghe có vẻ nhiều, nhưng thực tế vận hành khá đơn giản. Hơn nữa, thực ra chúng ta đã lược bỏ khá nhiều công đoạn trong quy trình của các công ty lớn, chẳng hạn như phỏng vấn người dùng, nhóm tập trung v.v.

Giới thiệu dự án
----

Hãy giới thiệu về dự án thực tế của chúng ta -- Phúc lợi từ vựng.

Nó xuất phát từ một nhu cầu thực tế trong quá trình học tập của tôi. Ban đầu tôi dùng phần mềm Anki để học từ vựng, phần mềm rất tốt, nhưng mỗi lần học đều có cảm giác bị ép buộc, xong rồi mới cảm thấy nhẹ nhõm. Để nhắc nhở bản thân không trốn tránh, tôi còn đặt báo thức hàng ngày.

Một ngày, tôi lại lên [Pixiv](https://www.pixiv.net/) (một cộng đồng sáng tạo nội dung 2D) xem ảnh và quên mất thời gian. Bỗng nhiên tôi nghĩ, liệu có thể kết hợp việc học từ vựng và xem ảnh lại với nhau không?

Bạn thấy đó, học từ vựng tuy có ích nhưng làm tôi khổ sở, cảm giác như ngày dài lê thê; xem ảnh thì vui vẻ, mải mê không muốn dừng, nhưng có vẻ không「có ích」lắm. Nếu kết hợp cả hai lại, vừa xem ảnh vừa học từ vựng, liệu có thể làm cho việc học từ không còn khó chịu, có thể liên tục học mãi không?

Đó là điểm xuất phát của Phúc lợi từ vựng.

Tiếp theo, chúng ta hãy xem, làm thế nào từ ý tưởng còn hơi mơ hồ này đề xuất một đề xuất giá trị rõ ràng, sau đó lên kế hoạch mô hình kinh doanh, thiết kế tính năng và giao diện, xác minh và phát triển lặp lại xung quanh nó, cuối cùng biến nó thành một sản phẩm thương mại.

![](/images/image-107.png)

APP Phúc lợi từ vựng

Cần lưu ý rằng, quá trình phát triển rất khó giải thích rõ ràng trong phạm vi hạn chế, và cũng lạc đề chủ đề của bài viết này, vì vậy chúng ta chỉ đề cập sơ qua một số điểm cần chú ý, và sẽ không dạy về phát triển.

Bước một: Lên kế hoạch mô hình kinh doanh
----------

Đầu tiên chúng ta lên kế hoạch mô hình kinh doanh của sản phẩm thông qua khung mô hình kinh doanh.

### Đề xuất giá trị

![](/images/image-108-1024x373.png)

Đề xuất giá trị của Phúc lợi từ vựng

Đề xuất giá trị cốt lõi của Phúc lợi từ vựng là cung cấp một phương thức học tập nhẹ nhàng và thú vị cho những người cảm thấy việc học tiếng Anh đầy thách thức. Mục tiêu là giảm bớt áp lực cho người học bằng cách tăng thêm sự thú vị trong quá trình học tập, biến hoạt động học tập vốn ngắn ngủi và khó khăn trở nên bền vững hơn và dần thành thói quen.

Vì vậy, trong phần「Đề xuất giá trị」, chúng ta đặc biệt nhấn mạnh hai điểm chính:「Học tập không đau」và「Học tập liên tục」. Hai điểm này cấu thành giá trị cốt lõi của sản phẩm.

Với những đề xuất giá trị này, chúng ta có thể giúp khách hàng vượt qua những rào cản từng ngăn cản họ học tập, từ đó thúc đẩy sự phát triển và nâng cao cá nhân của họ.

### Phân khúc khách hàng

![](/images/image-109-1024x463.png)

Phân khúc khách hàng của Phúc lợi từ vựng

Tinh chỉnh đề xuất giá trị đòi hỏi chúng ta xem xét kỹ lưỡng việc phân khúc khách hàng. Xét rằng Phúc lợi từ vựng là một phần mềm học tập, nhóm khách hàng mục tiêu tự nhiên gắn liền với nhu cầu học tiếng Anh. Chúng ta có thể chia khách hàng mục tiêu thành ba loại:

1.  Sinh viên đại học cần ôn thi tiếng Anh CET-4 và CET-6.
2.  Những người có nhu cầu du học hoặc di cư, cần chuẩn bị thi IELTS, TOEFL.
3.  Những người đi làm muốn nâng cao trình độ tiếng Anh chuyên ngành để có thành tích tốt hơn trong công việc.

Ba loại khách hàng này có mục đích học tập khác nhau, nhưng thông qua việc cung cấp tính năng「Chuyển đổi kho từ vựng」hoặc「Kho từ vựng tùy chỉnh」, phần mềm của chúng ta có thể linh hoạt đáp ứng nhu cầu của họ.

### Tinh chỉnh đề xuất giá trị

![](/images/image-110-1024x527.png)

Đề xuất giá trị của Phúc lợi từ vựng sau khi tinh chỉnh

Chỉ cung cấp kho từ vựng cho người dùng học tập sẽ không làm cho phần mềm của chúng ta khác biệt. Vì vậy, chúng ta bổ sung vào đề xuất giá trị phần mà họ khó có thể cưỡng lại------「Kẹo ngọt」.

Tuy nhiên, đối với các nhóm người dùng khác nhau,「Kẹo ngọt」có nghĩa khác nhau.

Nếu chỉ đặt một số hình ảnh nhân vật anime dễ thương 2D, chỉ những người thích anime mới cảm thấy đó là「Kẹo ngọt」của họ, thu hút họ đến xem mỗi ngày. Đối với một số người không có cảm tình với 2D, những hình ảnh này hoàn toàn không có sức hút, vì vậy chúng ta cần tăng thêm chủng loại「Kẹo ngọt」. Ví dụ như có bạn gái thích xem trai đẹp, có fan hâm mộ thích xem thần tượng, có chủ mèo chó thích xem ảnh thú cưng, có người mê ăn thích xem thịt và đồ ngọt. Phần này, chúng ta có thể đáp ứng bằng cách cung cấp nhiều thư viện ảnh.


Dựa trên đó, chúng ta xây dựng các đề xuất giá trị cụ thể hơn cho từng phân khúc khách hàng:

1.  「Xem ảnh gái đẹp 40 phút mỗi ngày, nhớ trọn từ vựng CET-4 và CET-6 trong một tháng」
2.  「Vừa ngắm trai đẹp vừa chinh phục từ vựng IELTS và TOEFL」
3.  「Vừa ngắm mèo online vừa thăng chức tăng lương」

Nghe có vẻ hấp dẫn hơn nhiều rồi phải không?

### Kênh phân phối

![](/images/image-111-1024x577.png)

Kênh phân phối của Phúc lợi từ vựng

Về mặt「Kênh phân phối」, chúng ta lên kế hoạch thu hút người dùng hạt nhân thông qua Weibo. Dựa trên phản hồi kiểm thử từ người dùng hạt nhân, một khi tỷ lệ chuyển đổi của sản phẩm đạt chuẩn kỳ vọng, chúng ta sẽ mở rộng hợp tác và triển khai quảng cáo trên Weibo, từ đó đo lường chi phí quảng cáo so với hiệu quả lưu lượng truy cập.

### Quan hệ khách hàng

![](/images/image-112-1024x560.png)

Quan hệ khách hàng của Phúc lợi từ vựng

Để duy trì quan hệ khách hàng tốt, chúng ta sẽ sử dụng công cụ「Txc.qq」(兔小巢) của Tencent để cung cấp hỗ trợ sau bán hàng. Như vậy, người dùng có thể dễ dàng gửi phản hồi, còn chúng ta có thể phản hồi kịp thời qua WeChat, QQ và nhiều kênh khác.

### Hoạt động chính

![](/images/image-113-1024x537.png)

Hoạt động chính của Phúc lợi từ vựng

Về hoạt động chính, phiên bản đầu tiên của Sản phẩm khả thi tối thiểu (MVP) nên bao gồm chức năng học từ vựng cơ bản, 100 từ cùng hình ảnh tương ứng, và mô-đun học tập tương tác đơn giản. Ngoài ra, chúng ta cần theo dõi dữ liệu học tập của người dùng để xác minh đề xuất giá trị.

Sau khi MVP được xác minh thành công, chúng ta sẽ phát triển ứng dụng phiên bản web, ra mắt như là sản phẩm giai đoạn một. Các tính năng chính của giai đoạn này bao gồm giao diện học từ vựng và chức năng chọn kho từ. Để tạo doanh thu, chúng ta cũng sẽ tích hợp hệ thống thanh toán và đơn hàng, đồng thời phát triển công cụ phân tích để tối ưu hóa quá trình chuyển đổi.

### Nguồn lực chính



Nguồn lực chính của Phúc lợi từ vựng

Về nguồn lực chính, ngoài nhân lực, vốn và thời gian, chúng ta cần đặc biệt chú ý đến tài nguyên hình ảnh dùng để học từ vựng. Đặc biệt ở khâu tính phí, chúng ta phải đảm bảo việc sử dụng hình ảnh hợp pháp.

Trong sản phẩm khả thi tối thiểu, vì không liên quan đến việc tính phí, chúng ta có thể sử dụng rất nhiều hình ảnh. Nhưng một khi bắt đầu tính phí, nếu vẫn tải bừa bãi các hình ảnh không rõ bản quyền từ mạng, đưa vào phần mềm của mình và bán có thu phí, rất có thể sẽ dẫn đến vi phạm bản quyền.

Vì vậy, chúng ta cần suy nghĩ về giải pháp cho tài nguyên hình ảnh. Sau khi phân tích sơ bộ, có một vài hướng như sau:

1.  Được tác giả cấp phép
2.  Thay bằng hình ảnh không bản quyền
3.  Người dùng tự cung cấp hình ảnh

#### Được tác giả cấp phép

Trực tiếp tìm tác giả mua lại hình ảnh, sau đó bán cho người dùng dưới dạng kho từ có tính phí — đây là cách trực tiếp nhất. Tuy nhiên vấn đề nằm ở giá cả: chỉ một kho từ cỡ vừa đã có hơn 10.000 từ, nghĩa là chúng ta phải mua hơn 10.000 bức ảnh. Tính theo giá 50 tệ mỗi ảnh, cần đầu tư tới 500.000 tệ.

Đầu tư lớn như vậy khi chưa kiếm được đồng nào, rủi ro vẫn rất cao. Cách này phù hợp hơn khi chúng ta đã có doanh thu và đang trong giai đoạn mở rộng quy mô.

#### Thay bằng hình ảnh không bản quyền

Tất nhiên, chúng ta cũng có thể tìm kiếm hình ảnh không bản quyền để xây dựng thư viện ảnh. Như vậy dù đóng gói vào phần mềm để bán thương mại cũng không có vấn đề gì. Trên internet đã có các kho ảnh HD không bản quyền khá lớn, chẳng hạn như [Unsplash](https://unsplash.com/) v.v. Tuy nhiên các kho ảnh này chủ yếu là phong cảnh và động vật, rất ít ảnh người.

#### Người dùng tự cung cấp hình ảnh

Về bản chất, chúng ta bán「công cụ học từ qua hình ảnh」, chứ không phải bán hình ảnh. Rủi ro bản quyền hiện tại là do việc đóng gói gây ra. Vì vậy chúng ta có thể thử tách dịch vụ tính phí và hình ảnh miễn phí ra.

Ví dụ, chúng ta có thể cung cấp cho người dùng công cụ tạo thư viện ảnh tùy chỉnh, để họ nhập ảnh yêu thích của mình vào. Như vậy vừa đạt được mục đích, vừa không có rủi ro về bản quyền.

Tương tự cần xem xét, còn có âm thanh dùng khi học từ vựng. Cách đơn giản và thô sơ nhất là sử dụng giao diện TTS (Chuyển văn bản thành giọng nói) của nền tảng đám mây để tạo trực tiếp.

### Chi phí và doanh thu

![](/images/image-115-1024x413.png)

Chi phí và doanh thu của Phúc lợi từ vựng

Cuối cùng, bằng cách điền vào các phần liên quan của khung mô hình kinh doanh, chúng ta có thể bắt đầu ước tính chi phí và doanh thu để tính khoảng lợi nhuận kỳ vọng.

Do dự án chúng ta phát triển tương đối nhỏ, tài nguyên sử dụng cũng không quá nhiều, nên khung mô hình kinh doanh chưa được làm chi tiết. Tuy nhiên thông thường, phiên bản thứ nhất của mô hình kinh doanh, khung bản thân cũng sẽ không quá chi tiết. Nó được làm chi tiết dần theo tiến độ của dự án.

Cuối cùng hãy xem khung mô hình kinh doanh hoàn chỉnh:

![](/images/image-116-1024x659.png)

Khung mô hình kinh doanh hoàn chỉnh của Phúc lợi từ vựng

## Bước hai: Xây dựng chân dung người dùng cho từng phân khúc khách hàng

### Chân dung người dùng là gì

Trong khung mô hình kinh doanh, chúng ta đã phân khúc khách hàng, chia họ thành các nhóm khác nhau, mỗi nhóm đại diện cho một nhu cầu độc lập.


Chân dung người dùng (persona) là việc, với những nhóm đã được phân chia, xây dựng cho mỗi nhóm một nhân vật, tạo ra một hình ảnh ảo, làm cho họ trở nên có hồn có xác, có tên tuổi, giới tính, có danh tính riêng, sở thích riêng, và các tình huống sử dụng sản phẩm.

Như vậy khi chúng ta nói về chân dung người dùng này, sẽ giống như đang nói về bạn bè, đồng nghiệp -- những người quen thuộc của chúng ta.

Biến những nhu cầu trừu tượng thành những con người sống động, như vậy khi thiết kế sản phẩm, chúng ta sẽ dễ dàng hơn trong việc tái hiện các tình huống, tưởng tượng nhu cầu và hành động của người đó qua hình ảnh -- đó chính là ý nghĩa của chân dung người dùng.

### Chân dung người dùng của Phúc lợi từ vựng

Tiếp theo, chúng ta sẽ dựa trên phân khúc khách hàng của Phúc lợi từ vựng để xây dựng chân dung người dùng cho từng loại khách hàng.

#### Thí sinh ôn thi CET-4 và CET-6

Đầu tiên là nhóm phân khúc sinh viên đại học đang ôn thi CET-4 và CET-6. Chúng ta gọi anh ấy là Vương Tiểu Khang, được đặt là một nam sinh năm ba. Anh ấy hiện có một nhiệm vụ cấp bách, đó là phải vượt qua kỳ thi CET-4. Bạn này là một otaku anime, ảnh anh ấy thích xem là những cô gái dễ thương phong cách 2D.

#### Đội quân dự bị du học và định cư nước ngoài

Tiếp theo, chúng ta sẽ tạo chân dung người dùng cho nhóm người có nhu cầu du học và định cư nước ngoài, cần thi IELTS và TOEFL. Chúng ta gọi cô ấy là Chương Tiểu Lưu, cô ấy là một nữ sinh vừa tốt nghiệp đại học được một năm, hiện có ý định đi du học nước ngoài và đang chuẩn bị thi IELTS. Bạn này là người hâm mộ thần tượng (fan), thích xem ảnh trai đẹp Hàn Quốc.

#### Nhân viên văn phòng mới cần nâng cao chuyên môn

Chân dung người dùng cho nhóm phân khúc thứ ba, chúng ta gọi cô ấy là Lư Tiểu Bạch, là một nữ sinh tốt nghiệp được khoảng hai năm. Làm công việc liên quan đến kỹ thuật tại một công ty sinh học, cô ấy cần nhanh chóng làm quen với lượng lớn từ vựng tiếng Anh chuyên ngành sinh học, để hiểu rõ hơn về công việc kinh doanh của công ty. Nhà cô ấy có mèo, thích xem ảnh thú cưng dễ thương và đồ ăn.

Sau khi xác định thông tin cơ bản của ba chân dung người dùng này, chúng ta sẽ thêm ảnh đại diện cho họ, ghi lên các từ khóa nhu cầu của họ, và sắp xếp tất cả trên một tờ giấy A4.

Như vậy chúng ta có thể in ra, dán lên tường, khi thiết kế sản phẩm có thể nhìn vào bất cứ lúc nào, giống như nhìn vào những người quen xung quanh chúng ta vậy.

### Cách tạo ảnh đại diện cho chân dung người dùng

Nhiều cuốn sách nhấn mạnh rằng ảnh đại diện cho chân dung người dùng phải thực tế nhất có thể, tốt nhất là dùng ảnh người thật. Nhưng cần chú ý rằng tìm ảnh người thật tùy tiện trên mạng dễ dẫn đến vấn đề về quyền chân dung. Ở đây mình muốn giới thiệu một trang web tạo ảnh đại diện người thật bằng AI, có tên là thispersondoesnotexist.com.

![](/images/image-117-1024x861.png)

thispersondoesnotexist.com

Tuy nhiên trang web này tạo ra chủ yếu là người phương Tây, đối với các sản phẩm trong nước thì lại có vẻ không phù hợp. Mình thích dùng trang web tạo nhân vật anime phong cách Nhật Bản hơn, chẳng hạn như trang [charat.me](https://charat.me/).

![](/images/image-118-1024x948.png)

charat.me

### Chân dung người dùng hoàn chỉnh

Có ảnh đại diện rồi, kết hợp thêm phần mô tả nhân vật và từ khóa nhu cầu, chúng ta sẽ có một chân dung người dùng đơn giản và tiện dụng. Dưới đây là ba chân dung người dùng mà chúng ta đã hoàn thiện:

![](/images/image-119-1024x769.png)

Chân dung người dùng: Vương Tiểu Khang

![](/images/image-120-1024x768.png)

Chân dung người dùng: Chương Tiểu Lưu

![](/images/image-121-1024x767.png)

Chân dung người dùng: Lư Tiểu Bạch

## Bước ba: Chân dung → Tình huống → Tính năng và phân giai đoạn

### Phân tích tình huống sử dụng

Với những chân dung người dùng sống động, chúng ta có thể từ chân dung tưởng tượng ra các tình huống, rồi từ tình huống sắp xếp danh sách tính năng và phân giai đoạn. Dưới đây chúng ta sẽ xem cụ thể cách phân tích tình huống sử dụng.

#### Phân tích tình huống sử dụng của Vương Tiểu Khang

Đầu tiên là các tình huống sử dụng của Vương Tiểu Khang, bao gồm trong ký túc xá sinh viên, tại thư viện và trong lớp học.

Ở ký túc xá, mỗi tối từ tám đến chín giờ anh ấy dùng máy tính bàn. Vì ký túc xá khá ồn, anh ấy sẽ đeo tai nghe khi học. Lúc này anh ấy đang sử dụng bàn phím rời.

Trước khi ngủ vào buổi tối, anh ấy còn cuộn trong chăn chơi điện thoại một lúc, thời gian khoảng từ mười một rưỡi đến mười hai giờ đêm, tức là nửa tiếng trước khi ngủ, tình huống sử dụng lúc này là học từ vựng bằng điện thoại.

Thư viện cũng là một tình huống điển hình, vì trong môi trường này cần giữ yên tĩnh. Vì vậy bạn phải đeo tai nghe hoặc bật chế độ im lặng trên thiết bị. Vương Tiểu Khang thường đến thư viện tự học từ ba đến năm giờ chiều, lúc này anh ấy sử dụng máy tính xách tay và iPad.

Cần lưu ý rằng khi dùng iPad không có bàn phím, vì vậy việc nhập liệu sẽ không thuận tiện như khi dùng bàn phím rời, tốc độ nhập liệu tổng thể sẽ giảm đi rất nhiều.

Thư viện và ký túc xá sinh viên là hai tình huống khá khác nhau. Trong ký túc xá rất có thể có bạn cùng phòng đang chơi game hoặc trò chuyện, dễ bị phân tâm, thậm chí việc học từ vựng cũng dễ bị quên, vì vậy chúng ta cần có tính năng nhắc nhở.

Tương đối mà nói, thư viện là môi trường yên tĩnh và tập trung, không có ai làm phiền bạn, mọi người đều bận rộn học tập của mình.

#### Phân tích tình huống sử dụng của Chương Tiểu Lưu

Tiếp theo chúng ta sẽ phân tích tình huống của Chương Tiểu Lưu.

Hiện tại cô ấy đã nghỉ việc ở nhà, hoàn toàn trong trạng thái ôn thi. Mỗi buổi sáng sẽ học khóa học trực tuyến tại nhà hoặc đến trung tâm luyện thi để học, buổi chiều sẽ học từ vựng tại nhà. Buổi tối thì có thể xem phim Hàn Quốc.

Tình huống chính là buổi chiều học từ vựng. Vì ở trong nhà, cô ấy sử dụng máy tính bàn, chuột và bàn phím đều là thiết bị ngoại vi. Mỗi buổi sáng thức dậy cũng có thể cần ôn lại một chút.

Vì vậy hai tình huống sử dụng chính của cô ấy là học bằng máy tính, và ôn tập bằng điện thoại vào buổi sáng khi thức dậy.

Thực ra, tình huống này rất giống với tình huống Vương Tiểu Khang ôn tập bằng điện thoại vào buổi tối, có thể đều ghi lại, khi thực hiện hợp nhất tính năng ở cuối, nội dung trùng lặp sẽ được hợp nhất lại.
