import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'vi-VN',
  title: 'Doanh Nghiệp Một Người',
  description: 'Phương pháp luận xây dựng doanh nghiệp một người - từ định nghĩa đến vận hành',

  themeConfig: {
    nav: [
      { text: 'Trang Chủ', link: '/' },
      { text: 'Bắt Đầu', link: '/opb-methodology-new-version-and-author' },
    ],

    sidebar: [
      {
        text: 'Giới Thiệu',
        items: [
          { text: 'README', link: '/README' },
        ],
      },
      {
        text: 'Định Nghĩa Doanh Nghiệp Một Người',
        collapsed: false,
        items: [
          { text: 'Tổng quan phương pháp luận phiên bản mới', link: '/opb-methodology-new-version-and-author' },
          { text: 'Định nghĩa doanh nghiệp một người', link: '/define-opb' },
        ],
      },
      {
        text: 'Lập Kế Hoạch Doanh Nghiệp Một Người',
        collapsed: false,
        items: [
          { text: 'Tại sao có thể lấy nhỏ đánh lớn', link: '/why-thinking-big-is-possible' },
          { text: 'Tại sao quy mô hóa là khả thi', link: '/why-scalability-is-possible' },
          { text: 'Tài sản và thu nhập thụ động', link: '/assets-and-passive-income' },
          { text: 'Hiệu ứng tuyết lăn và lan truyền theo chuỗi', link: '/snowballing-and-chain-propagation' },
          { text: 'Doanh nghiệp một người chọn đường đua như thế nào', link: '/race-track-selection-for-opb' },
          { text: 'Chiến lược không cạnh tranh', link: '/non-competition-strategy' },
          { text: 'Lợi thế cấu trúc', link: '/structured-advantage' },
          { text: 'Canvas và Báo Cáo Doanh Nghiệp Một Người', link: '/opb-canvas-and-opb-report' },
        ],
      },
      {
        text: 'Xây Dựng Kinh Doanh Một Người',
        collapsed: false,
        items: [
          { text: 'Doanh nghiệp một người ≠ Kinh doanh một người', link: '/one-person-enterprise-does-not-equal-one-person-business' },
          { text: 'Lợi thế sản phẩm phụ', link: '/discovery-of-by-product-advantages' },
          { text: 'Bắt đầu từ dự án phụ', link: '/start-from-side-project' },
          { text: 'Quản lý và tận dụng sự không chắc chắn', link: '/managing-and-utilizing-uncertaint' },
          { text: 'Xây dựng sản phẩm phần mềm từ đầu', link: '/building-software-products-or-services-from-scratch' },
        ],
      },
      {
        text: 'Cơ Sở Hạ Tầng & Thiết Lập',
        collapsed: false,
        items: [
          { text: 'Cơ sở hạ tầng lý tưởng', link: '/what-is-the-ideal-one-person-business-infrastructure' },
          { text: 'Pool người dùng và khả năng tiếp cận', link: '/infrastructure-user-pool-reach-capability' },
          { text: 'Pool nội dung và khả năng tự động hóa', link: '/content-pool-and-automation-capability' },
          { text: 'Pool sản phẩm và khả năng thanh toán', link: '/product-pool-and-payment-capability' },
          { text: 'Khả năng crowdsourcing', link: '/crowdsourcing-capability' },
          { text: 'Thiết lập cơ sở hạ tầng', link: '/setup-a-one-person-business-infrastructure' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/easychen/one-person-businesses-methodology-v2.0' },
    ],

    search: {
      provider: 'local',
    },

    footer: {
      message: 'Phát hành theo giấy phép CC-BY-NC-SA',
      copyright: 'Copyright © Easy',
    },

    docFooter: {
      prev: 'Trang trước',
      next: 'Trang tiếp',
    },

    outline: {
      label: 'Mục lục trang',
    },

    returnToTopLabel: 'Về đầu trang',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Giao diện',
    lightModeSwitchTitle: 'Sáng',
    darkModeSwitchTitle: 'Tối',
  },
})
