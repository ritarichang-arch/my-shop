const UPSTREAM_SHOP_URL = "https://swipeshop-delta.vercel.app/";

let products = [
  {
    id: 1,
    upstreamId: 1,
    code: "VQGF",
    name: "Vintage Floral Maxi Dress",
    category: "洋裝",
    size: "M",
    condition: "Like new",
    price: 149,
    source: "Pabili Closet",
    image: "https://swipeshop-delta.vercel.app/photos/dress-001/lifestyle-1.png",
    images: [
      "https://swipeshop-delta.vercel.app/photos/dress-001/lifestyle-1.png",
      "https://swipeshop-delta.vercel.app/photos/dress-001/lifestyle-2.png",
      "https://swipeshop-delta.vercel.app/photos/dress-001/lifestyle-3.png"
    ],
    detailImage: "https://swipeshop-delta.vercel.app/photos/dress-001/flat-front.png",
    note: "Forest green floral / Chiffon"
  },
  {
    id: 2,
    upstreamId: 2,
    code: "6CN6",
    name: "Emerald Doodle Midi Dress",
    category: "洋裝",
    size: "XS",
    condition: "Like new",
    price: 129,
    source: "Pabili Closet",
    image: "https://swipeshop-delta.vercel.app/photos/dress-002/lifestyle-1.png",
    images: [
      "https://swipeshop-delta.vercel.app/photos/dress-002/lifestyle-1.png",
      "https://swipeshop-delta.vercel.app/photos/dress-002/lifestyle-2.png",
      "https://swipeshop-delta.vercel.app/photos/dress-002/lifestyle-3.png"
    ],
    detailImage: "https://swipeshop-delta.vercel.app/photos/dress-002/detail.png",
    note: "Emerald green with white doodle print / Cotton blend"
  },
  {
    id: 3,
    upstreamId: 3,
    code: "L8ZC",
    name: "Classic Denim Midi Skirt",
    category: "褲裙",
    size: "S",
    condition: "Like new",
    price: 119,
    source: "Pabili Closet",
    image: "https://swipeshop-delta.vercel.app/photos/dress-003/lifestyle-1.png",
    images: [
      "https://swipeshop-delta.vercel.app/photos/dress-003/lifestyle-1.png",
      "https://swipeshop-delta.vercel.app/photos/dress-003/lifestyle-2.png",
      "https://swipeshop-delta.vercel.app/photos/dress-003/lifestyle-3.png",
      "https://swipeshop-delta.vercel.app/photos/dress-003/lifestyle-4.png"
    ],
    detailImage: "https://swipeshop-delta.vercel.app/photos/dress-003/detail.png",
    note: "Classic mid-blue denim / 100% Cotton denim"
  },
  {
    id: 4,
    upstreamId: 4,
    code: "RAPX",
    name: "Bright Orange Wide-Leg Flare Pants",
    category: "褲裙",
    size: "Free",
    condition: "Like new",
    price: 99,
    source: "Pabili Closet",
    image: "https://swipeshop-delta.vercel.app/photos/dress-004/lifestyle-1.png",
    images: [
      "https://swipeshop-delta.vercel.app/photos/dress-004/lifestyle-1.png",
      "https://swipeshop-delta.vercel.app/photos/dress-004/lifestyle-2.png",
      "https://swipeshop-delta.vercel.app/photos/dress-004/lifestyle-3.png"
    ],
    detailImage: "https://swipeshop-delta.vercel.app/photos/dress-004/detail.png",
    note: "Vibrant orange / Cotton twill"
  },
  {
    id: 5,
    upstreamId: 5,
    code: "2CJM",
    name: "Y2K Heart Knit Vest",
    category: "上衣",
    size: "Free",
    condition: "Like new",
    price: 89,
    source: "Pabili Closet",
    image: "https://swipeshop-delta.vercel.app/photos/dress-005/lifestyle-1.png",
    images: [
      "https://swipeshop-delta.vercel.app/photos/dress-005/lifestyle-1.png",
      "https://swipeshop-delta.vercel.app/photos/dress-005/lifestyle-4.png",
      "https://swipeshop-delta.vercel.app/photos/dress-005/lifestyle-2.png",
      "https://swipeshop-delta.vercel.app/photos/dress-005/lifestyle-3.png"
    ],
    detailImage: "https://swipeshop-delta.vercel.app/photos/dress-005/detail.png",
    note: "Mint green with heart pattern / Knit cotton blend"
  },
  {
    id: 6,
    upstreamId: 6,
    code: "8SN3",
    name: "Preppy Argyle Knit Vest",
    category: "上衣",
    size: "Free",
    condition: "Like new",
    price: 89,
    source: "Pabili Closet",
    image: "https://swipeshop-delta.vercel.app/photos/dress-006/lifestyle-1.png",
    images: [
      "https://swipeshop-delta.vercel.app/photos/dress-006/lifestyle-1.png",
      "https://swipeshop-delta.vercel.app/photos/dress-006/lifestyle-2.png",
      "https://swipeshop-delta.vercel.app/photos/dress-006/lifestyle-3.png"
    ],
    detailImage: "https://swipeshop-delta.vercel.app/photos/dress-006/detail.jpg",
    note: "Powder blue and ivory argyle / Knit cotton blend"
  },
  {
    id: 7,
    upstreamId: 7,
    code: "ZXQ3",
    name: "Cappuccino Short-Sleeve Hoodie",
    category: "上衣",
    size: "Free",
    condition: "Like new",
    price: 99,
    source: "Pabili Closet",
    image: "https://swipeshop-delta.vercel.app/photos/dress-007/lifestyle-1.png",
    images: [
      "https://swipeshop-delta.vercel.app/photos/dress-007/lifestyle-1.png",
      "https://swipeshop-delta.vercel.app/photos/dress-007/lifestyle-2.png",
      "https://swipeshop-delta.vercel.app/photos/dress-007/lifestyle-3.png"
    ],
    detailImage: "https://swipeshop-delta.vercel.app/photos/dress-007/detail.jpg",
    note: "Cream off-white with black graphic / Cotton sweatshirt knit"
  },
  {
    id: 8,
    upstreamId: 8,
    code: "83Z4",
    name: "Grey Logo Cropped Cami Top",
    category: "上衣",
    size: "Free",
    condition: "Like new",
    price: 79,
    source: "Pabili Closet",
    image: "https://swipeshop-delta.vercel.app/photos/dress-008/lifestyle-1.png",
    images: [
      "https://swipeshop-delta.vercel.app/photos/dress-008/lifestyle-1.png",
      "https://swipeshop-delta.vercel.app/photos/dress-008/lifestyle-2.png",
      "https://swipeshop-delta.vercel.app/photos/dress-008/lifestyle-3.png"
    ],
    detailImage: "https://swipeshop-delta.vercel.app/photos/dress-008/detail.jpg",
    note: "Heather grey with gold logo / Ribbed cotton knit blend"
  }
];

const state = {
  search: "",
  category: "全部",
  sizes: new Set(),
  budget: 900,
  cart: [],
  lang: "en"
};

const I18N = {
  en: {
    code: "EN",
    htmlLang: "en",
    brandSub: "Curated second-hand market",
    navStock: "Stock",
    navMarket: "Market",
    cart: "Cart",
    heroTitle: "Good clothes deserve to meet their next person.",
    heroBody:
      "A curated second-hand clothing market with clear sizes, prices, and condition notes. Customers can browse, add favorites to cart, and prepare an inquiry list.",
    startShopping: "Start shopping",
    newDrop: "In stock",
    averagePrice: "Avg. price",
    marketPosition: "Market",
    marketValue: "Pre-loved",
    filters: "Filters",
    reset: "Reset",
    searchProducts: "Search products",
    searchPlaceholder: "Dress, top, denim...",
    category: "Category",
    all: "All",
    tops: "Tops",
    jackets: "Jackets",
    dresses: "Dresses",
    bottoms: "Bottoms",
    size: "Size",
    maxBudget: "Max budget",
    ready: "READY TO SHIP",
    catalogTitle: "Post-live stock",
    items: "items",
    item: "item",
    syncing: "Syncing product inventory...",
    synced: "Inventory synced",
    updated: "updated",
    fallback: "Using built-in products for now; this page will try syncing again next time.",
    noMatchTitle: "No matching clothes",
    noMatchBody: "Try a different size, category, or budget.",
    liveUnsold: "Pre-loved",
    add: "Add",
    emptyCartTitle: "Your cart is empty",
    emptyCartBody: "Add clothes you like, then send the checkout inquiry together.",
    notSelected: "No items yet",
    subtotal: "Subtotal",
    checkout: "Checkout",
    checkoutTitle: "Recipient information",
    recipientName: "Recipient name",
    recipientPhone: "Mobile number",
    recipientAddress: "Delivery address",
    city: "City",
    district: "District",
    road: "Road / Street",
    number: "No.",
    room: "Room",
    shippingStoreBrand: "Pickup store",
    chooseStoreBrand: "Choose store",
    storeCity: "City",
    storeDistrict: "District",
    storeRoad: "Road / Street",
    storeOption: "Store options",
    enterRoadFirst: "Enter road / street first",
    recipientNote: "Note",
    recipientNamePlaceholder: "Enter recipient name",
    recipientPhonePlaceholder: "Enter mobile number",
    recipientAddressPlaceholder: "Enter delivery address",
    recipientNotePlaceholder: "Example: delivery time, size confirmation, etc.",
    backToCart: "Back to cart",
    backToInfo: "Back to previous page",
    confirmInfo: "Confirm info",
    closeCheckout: "Close checkout",
    remove: "Remove",
    added: "added to cart",
    addFirst: "Please add an item first",
    inquiryReady: "Inquiry list ready",
    detailCategory: "Category",
    detailSize: "Size",
    detailCondition: "Condition",
    detailPrice: "Price",
    addCart: "Add to cart",
    closeCart: "Close cart",
    closeDetail: "Close product details",
    openCart: "Open cart",
    viewProduct: "View"
  },
  zh: {
    code: "中",
    htmlLang: "zh-Hant",
    brandSub: "精選二手衣市場",
    navStock: "現貨",
    navMarket: "市場資訊",
    cart: "購物車",
    heroTitle: "好的衣服值得被下一個妳遇見。",
    heroBody: "精選二手衣市場：清楚標示尺寸、價格與衣況，客人可以直接挑選、加入購物車，再整理成詢問清單。",
    startShopping: "開始挑衣",
    newDrop: "現貨商品",
    averagePrice: "平均單價",
    marketPosition: "市場定位",
    marketValue: "Pre-loved",
    filters: "篩選",
    reset: "重設",
    searchProducts: "搜尋商品",
    searchPlaceholder: "洋裝、上衣、牛仔...",
    category: "分類",
    all: "全部",
    tops: "上衣",
    jackets: "外套",
    dresses: "洋裝",
    bottoms: "褲裙",
    size: "尺寸",
    maxBudget: "最高預算",
    ready: "READY TO SHIP",
    catalogTitle: "精選現貨",
    items: "件商品",
    item: "件商品",
    syncing: "正在同步商品庫存...",
    synced: "商品庫存已同步",
    updated: "更新時間",
    fallback: "目前使用內建商品資料；重新開啟頁面時會再嘗試同步。",
    noMatchTitle: "沒有符合條件的衣服",
    noMatchBody: "可以放寬尺寸、分類或預算。",
    liveUnsold: "二手精選",
    add: "加入",
    emptyCartTitle: "購物車是空的",
    emptyCartBody: "先把喜歡的二手衣加進來，再一起詢問結帳。",
    notSelected: "尚未選購",
    subtotal: "小計",
    checkout: "結帳",
    checkoutTitle: "收件者資料",
    recipientName: "收件者姓名",
    recipientPhone: "手機號碼",
    recipientAddress: "收件地址",
    city: "縣市",
    district: "區",
    road: "路（街）",
    number: "號",
    room: "室",
    shippingStoreBrand: "寄送超商",
    chooseStoreBrand: "請選擇超商",
    storeCity: "縣市",
    storeDistrict: "區",
    storeRoad: "路（街）",
    storeOption: "門市選項",
    enterRoadFirst: "請先輸入路（街）",
    recipientNote: "備註",
    recipientNamePlaceholder: "請輸入姓名",
    recipientPhonePlaceholder: "請輸入手機號碼",
    recipientAddressPlaceholder: "請輸入收件地址",
    recipientNotePlaceholder: "例如：方便收件時間、尺寸確認等",
    backToCart: "返回購物車",
    backToInfo: "返回上一頁",
    confirmInfo: "確認資料",
    closeCheckout: "關閉結帳",
    remove: "移除",
    added: "已加入購物車",
    addFirst: "請先加入想購買的商品",
    inquiryReady: "已整理詢問清單",
    detailCategory: "分類",
    detailSize: "尺寸",
    detailCondition: "狀態",
    detailPrice: "售價",
    addCart: "加入購物車",
    closeCart: "關閉購物車",
    closeDetail: "關閉商品細節",
    openCart: "開啟購物車",
    viewProduct: "查看"
  },
  ja: {
    code: "日",
    htmlLang: "ja",
    brandSub: "セレクト古着マーケット",
    navStock: "在庫",
    navMarket: "マーケット",
    cart: "カート",
    heroTitle: "良い服は、次の持ち主と出会う価値がある。",
    heroBody: "サイズ、価格、状態が見やすい古着マーケット。気になる商品を選んでカートに入れ、問い合わせリストを作れます。",
    startShopping: "商品を見る",
    newDrop: "在庫商品",
    averagePrice: "平均価格",
    marketPosition: "マーケット",
    marketValue: "Pre-loved",
    filters: "絞り込み",
    reset: "リセット",
    searchProducts: "商品検索",
    searchPlaceholder: "ワンピース、トップス、デニム...",
    category: "カテゴリー",
    all: "すべて",
    tops: "トップス",
    jackets: "アウター",
    dresses: "ワンピース",
    bottoms: "ボトムス",
    size: "サイズ",
    maxBudget: "予算上限",
    ready: "READY TO SHIP",
    catalogTitle: "セレクト在庫",
    items: "点",
    item: "点",
    syncing: "商品在庫を同期中...",
    synced: "商品在庫を同期しました",
    updated: "更新",
    fallback: "現在は内蔵商品データを表示しています。次回表示時に再同期します。",
    noMatchTitle: "該当する商品がありません",
    noMatchBody: "サイズ、カテゴリー、予算を変更してみてください。",
    liveUnsold: "古着セレクト",
    add: "追加",
    emptyCartTitle: "カートは空です",
    emptyCartBody: "気になる服を追加して、まとめて問い合わせできます。",
    notSelected: "商品はまだありません",
    subtotal: "小計",
    checkout: "購入手続き",
    checkoutTitle: "お届け先情報",
    recipientName: "受取人名",
    recipientPhone: "電話番号",
    recipientAddress: "お届け先住所",
    city: "市区町村",
    district: "区",
    road: "道路 / 通り",
    number: "番地",
    room: "部屋番号",
    shippingStoreBrand: "受取コンビニ",
    chooseStoreBrand: "コンビニを選択",
    storeCity: "市区町村",
    storeDistrict: "区",
    storeRoad: "道路 / 通り",
    storeOption: "店舗候補",
    enterRoadFirst: "道路名を入力してください",
    recipientNote: "メモ",
    recipientNamePlaceholder: "お名前を入力",
    recipientPhonePlaceholder: "電話番号を入力",
    recipientAddressPlaceholder: "住所を入力",
    recipientNotePlaceholder: "例：受け取り時間、サイズ確認など",
    backToCart: "カートに戻る",
    backToInfo: "前のページに戻る",
    confirmInfo: "情報を確認",
    closeCheckout: "購入手続きを閉じる",
    remove: "削除",
    added: "をカートに追加しました",
    addFirst: "先に商品を追加してください",
    inquiryReady: "問い合わせリストができました",
    detailCategory: "カテゴリー",
    detailSize: "サイズ",
    detailCondition: "状態",
    detailPrice: "価格",
    addCart: "カートに追加",
    closeCart: "カートを閉じる",
    closeDetail: "商品詳細を閉じる",
    openCart: "カートを開く",
    viewProduct: "見る"
  },
  ko: {
    code: "KO",
    htmlLang: "ko",
    brandSub: "셀렉트 세컨핸드 마켓",
    navStock: "재고",
    navMarket: "마켓",
    cart: "장바구니",
    heroTitle: "좋은 옷은 다음 사람을 만날 가치가 있어요.",
    heroBody: "사이즈, 가격, 상태를 보기 쉽게 정리한 세컨핸드 의류 마켓입니다. 원하는 상품을 담고 문의 목록을 만들 수 있어요.",
    startShopping: "쇼핑 시작",
    newDrop: "재고 상품",
    averagePrice: "평균 가격",
    marketPosition: "마켓",
    marketValue: "Pre-loved",
    filters: "필터",
    reset: "초기화",
    searchProducts: "상품 검색",
    searchPlaceholder: "원피스, 상의, 데님...",
    category: "카테고리",
    all: "전체",
    tops: "상의",
    jackets: "아우터",
    dresses: "원피스",
    bottoms: "하의",
    size: "사이즈",
    maxBudget: "최대 예산",
    ready: "READY TO SHIP",
    catalogTitle: "셀렉트 재고",
    items: "개",
    item: "개",
    syncing: "상품 재고 동기화 중...",
    synced: "상품 재고 동기화 완료",
    updated: "업데이트",
    fallback: "현재 내장 상품 데이터를 사용 중입니다. 다음에 다시 동기화합니다.",
    noMatchTitle: "조건에 맞는 상품이 없습니다",
    noMatchBody: "사이즈, 카테고리 또는 예산을 바꿔보세요.",
    liveUnsold: "세컨핸드",
    add: "담기",
    emptyCartTitle: "장바구니가 비어 있습니다",
    emptyCartBody: "마음에 드는 옷을 담고 한 번에 문의하세요.",
    notSelected: "아직 상품이 없습니다",
    subtotal: "소계",
    checkout: "결제",
    checkoutTitle: "수령자 정보",
    recipientName: "수령자 이름",
    recipientPhone: "휴대폰 번호",
    recipientAddress: "배송 주소",
    city: "도시",
    district: "구",
    road: "도로명 / 거리",
    number: "번지",
    room: "호실",
    shippingStoreBrand: "수령 편의점",
    chooseStoreBrand: "편의점 선택",
    storeCity: "도시",
    storeDistrict: "구",
    storeRoad: "도로명 / 거리",
    storeOption: "매장 옵션",
    enterRoadFirst: "도로명을 먼저 입력하세요",
    recipientNote: "메모",
    recipientNamePlaceholder: "이름을 입력하세요",
    recipientPhonePlaceholder: "휴대폰 번호를 입력하세요",
    recipientAddressPlaceholder: "배송 주소를 입력하세요",
    recipientNotePlaceholder: "예: 수령 가능 시간, 사이즈 확인 등",
    backToCart: "장바구니로",
    backToInfo: "이전 페이지로",
    confirmInfo: "정보 확인",
    closeCheckout: "결제 닫기",
    remove: "삭제",
    added: "장바구니에 담았습니다",
    addFirst: "먼저 상품을 담아주세요",
    inquiryReady: "문의 목록이 준비되었습니다",
    detailCategory: "카테고리",
    detailSize: "사이즈",
    detailCondition: "상태",
    detailPrice: "가격",
    addCart: "장바구니 담기",
    closeCart: "장바구니 닫기",
    closeDetail: "상품 상세 닫기",
    openCart: "장바구니 열기",
    viewProduct: "보기"
  },
  hk: {
    code: "港",
    htmlLang: "zh-HK",
    brandSub: "精選二手衫市場",
    navStock: "現貨",
    navMarket: "市場資訊",
    cart: "購物車",
    heroTitle: "好嘅衫值得被下一個妳遇見。",
    heroBody: "精選二手衫市場：清楚列明尺碼、價錢同衣況，客人可以直接揀衫、加入購物車，再整理成查詢清單。",
    startShopping: "開始揀衫",
    newDrop: "現貨商品",
    averagePrice: "平均價",
    marketPosition: "市場定位",
    marketValue: "Pre-loved",
    filters: "篩選",
    reset: "重設",
    searchProducts: "搜尋商品",
    searchPlaceholder: "連身裙、上衣、牛仔...",
    category: "分類",
    all: "全部",
    tops: "上衣",
    jackets: "外套",
    dresses: "連身裙",
    bottoms: "褲裙",
    size: "尺碼",
    maxBudget: "最高預算",
    ready: "READY TO SHIP",
    catalogTitle: "精選現貨",
    items: "件商品",
    item: "件商品",
    syncing: "正在同步商品庫存...",
    synced: "商品庫存已同步",
    updated: "更新時間",
    fallback: "目前使用內置商品資料；重新開啟頁面時會再嘗試同步。",
    noMatchTitle: "冇符合條件嘅衫",
    noMatchBody: "可以放寬尺碼、分類或者預算。",
    liveUnsold: "二手精選",
    add: "加入",
    emptyCartTitle: "購物車係空嘅",
    emptyCartBody: "先將鍾意嘅二手衫加入，再一齊查詢結帳。",
    notSelected: "未揀商品",
    subtotal: "小計",
    checkout: "結帳",
    checkoutTitle: "收件人資料",
    recipientName: "收件人姓名",
    recipientPhone: "手提電話",
    recipientAddress: "收件地址",
    city: "城市",
    district: "區",
    road: "路（街）",
    number: "號",
    room: "室",
    shippingStoreBrand: "寄送超商",
    chooseStoreBrand: "請選擇超商",
    storeCity: "城市",
    storeDistrict: "區",
    storeRoad: "路（街）",
    storeOption: "門市選項",
    enterRoadFirst: "請先輸入路（街）",
    recipientNote: "備註",
    recipientNamePlaceholder: "請輸入姓名",
    recipientPhonePlaceholder: "請輸入手提電話",
    recipientAddressPlaceholder: "請輸入收件地址",
    recipientNotePlaceholder: "例如：方便收件時間、尺碼確認等",
    backToCart: "返回購物車",
    backToInfo: "返回上一頁",
    confirmInfo: "確認資料",
    closeCheckout: "關閉結帳",
    remove: "移除",
    added: "已加入購物車",
    addFirst: "請先加入想買嘅商品",
    inquiryReady: "已整理查詢清單",
    detailCategory: "分類",
    detailSize: "尺碼",
    detailCondition: "衣況",
    detailPrice: "售價",
    addCart: "加入購物車",
    closeCart: "關閉購物車",
    closeDetail: "關閉商品詳情",
    openCart: "開啟購物車",
    viewProduct: "查看"
  }
};

const categoryLabelKeys = {
  全部: "all",
  上衣: "tops",
  外套: "jackets",
  洋裝: "dresses",
  褲裙: "bottoms"
};

const productNameTranslations = {
  zh: {
    1: "復古森林花卉長洋裝",
    2: "祖母綠塗鴉印花洋裝",
    3: "經典牛仔中長裙",
    4: "亮橘色寬管喇叭褲",
    5: "Y2K 愛心針織背心",
    6: "學院風菱格針織背心",
    7: "卡布奇諾短袖帽T",
    8: "灰色 Logo 短版細肩上衣"
  },
  hk: {
    1: "復古森林花花長裙",
    2: "祖母綠塗鴉印花裙",
    3: "經典牛仔中長裙",
    4: "鮮橙色闊腳喇叭褲",
    5: "Y2K 愛心針織背心",
    6: "學院風菱格針織背心",
    7: "卡布奇諾短袖帽T",
    8: "灰色 Logo 短版吊帶上衣"
  }
};

function t(key) {
  return I18N[state.lang][key] || I18N.en[key] || key;
}

function itemWord(count) {
  if (state.lang === "en") return count === 1 ? t("item") : t("items");
  return t("items");
}

function tCategory(category) {
  return t(categoryLabelKeys[category] || category);
}

function productName(product) {
  return productNameTranslations[state.lang]?.[product.upstreamId || product.id] || product.name;
}

const formatter = new Intl.NumberFormat("zh-TW", {
  style: "currency",
  currency: "TWD",
  maximumFractionDigits: 0
});

const categoryMap = {
  DRS: "洋裝",
  BOT: "褲裙",
  TOP: "上衣"
};

function absoluteUpstreamUrl(path) {
  return new URL(path.replace("./", ""), UPSTREAM_SHOP_URL).href;
}

function extractField(source, field) {
  const match = source.match(new RegExp(`${field}:'([^']*)'|${field}:(\\d+)`));
  return match ? match[1] || match[2] : "";
}

function normalizeSize(size) {
  return size === "FS" ? "Free" : size;
}

function parseImageOverrides(html, id, fallbackImage) {
  const blockMatch = html.match(new RegExp(`\\n\\s*${id}:\\{([\\s\\S]*?)\\n\\s*\\},`));
  if (!blockMatch) {
    return { images: [absoluteUpstreamUrl(fallbackImage)], detailImage: absoluteUpstreamUrl(fallbackImage) };
  }

  const block = blockMatch[1];
  const imgsMatch = block.match(/imgs:\[([\s\S]*?)\]/);
  const images = imgsMatch
    ? [...imgsMatch[1].matchAll(/'([^']+)'/g)].map((match) => absoluteUpstreamUrl(match[1]))
    : [absoluteUpstreamUrl(fallbackImage)];
  const detailMatch = block.match(/detailImg:'([^']+)'/);

  return {
    images,
    detailImage: detailMatch ? absoluteUpstreamUrl(detailMatch[1]) : images[0]
  };
}

function parseUpstreamProducts(html) {
  const dataMatch = html.match(/const DATA=\[([\s\S]*?)\];/);
  if (!dataMatch) return [];

  return [...dataMatch[1].matchAll(/\{([^{}]+)\},/g)].map((match, index) => {
    const raw = match[1];
    const upstreamId = Number(extractField(raw, "id"));
    const img = extractField(raw, "img");
    const imageData = parseImageOverrides(html, upstreamId, img);
    const material = extractField(raw, "mat");
    const color = extractField(raw, "color");

    return {
      id: upstreamId || index + 1,
      upstreamId,
      code: extractField(raw, "code"),
      name: extractField(raw, "name"),
      category: categoryMap[extractField(raw, "cat")] || "其他",
      size: normalizeSize(extractField(raw, "size")),
      condition: extractField(raw, "cond"),
      price: Number(extractField(raw, "price")),
      source: "Pabili Closet",
      image: imageData.images[0],
      images: imageData.images,
      detailImage: imageData.detailImage,
      note: [color, material].filter(Boolean).join(" / "),
      upstreamUrl: UPSTREAM_SHOP_URL
    };
  });
}

async function syncUpstreamProducts() {
  if (syncStatus) syncStatus.textContent = t("syncing");

  try {
    const response = await fetch(UPSTREAM_SHOP_URL, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const html = await response.text();
    const upstreamProducts = parseUpstreamProducts(html);
    if (upstreamProducts.length === 0) throw new Error("No product data found");

    products = upstreamProducts;
    renderProducts();
    if (syncStatus) {
      const time = new Date().toLocaleString("zh-TW", {
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      });
      syncStatus.textContent = `${t("synced")}：${products.length} ${itemWord(products.length)}，${t("updated")} ${time}`;
    }
  } catch (error) {
    if (syncStatus) {
      syncStatus.textContent = t("fallback");
    }
  }
}

const productGrid = document.querySelector("#productGrid");
const resultCount = document.querySelector("#resultCount");
const syncStatus = document.querySelector("#syncStatus");
const dropCount = document.querySelector("#dropCount");
const averagePrice = document.querySelector("#averagePrice");
const searchInput = document.querySelector("#searchInput");
const budgetRange = document.querySelector("#budgetRange");
const budgetLabel = document.querySelector("#budgetLabel");
const cartDrawer = document.querySelector("#cartDrawer");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("#cartCount");
const cartTitle = document.querySelector("#cartTitle");
const cartTotal = document.querySelector("#cartTotal");
const productDialog = document.querySelector("#productDialog");
const dialogContent = document.querySelector("#dialogContent");
const toast = document.querySelector("#toast");
const languageToggle = document.querySelector("#languageToggle");
const languageMenu = document.querySelector("#languageMenu");
const languageCode = document.querySelector("#languageCode");
const cartView = document.querySelector("#cartView");
const checkoutView = document.querySelector("#checkoutView");
const shippingView = document.querySelector("#shippingView");
const orderCompleteView = document.querySelector("#orderCompleteView");
const checkoutTitle = document.querySelector("#checkoutTitle");
const checkoutEyebrow = document.querySelector("#checkoutEyebrow");
const recipientName = document.querySelector("#recipientName");
const recipientPhone = document.querySelector("#recipientPhone");
const recipientCity = document.querySelector("#recipientCity");
const recipientDistrict = document.querySelector("#recipientDistrict");
const nextdayCity = document.querySelector("#nextdayCity");
const nextdayDistrict = document.querySelector("#nextdayDistrict");
const recipientRoadHome = document.querySelector("#recipientRoadHome");
const recipientNumber = document.querySelector("#recipientNumber");
const recipientRoom = document.querySelector("#recipientRoom");
const recipientNote = document.querySelector("#recipientNote");
const storePicker = document.querySelector("#storePicker");
const storeOption = document.querySelector("#storeOption");
const nextdayPicker = document.querySelector("#nextdayPicker");
const storeMap = document.querySelector("#storeMap");
const mapBrand = document.querySelector("#mapBrand");
const onlineDelegateOptions = document.querySelector("#onlineDelegateOptions");
const cashPickupOptions = document.querySelector("#cashPickupOptions");
const shippingSubtotal = document.querySelector("#shippingSubtotal");
const shippingFee = document.querySelector("#shippingFee");
const shippingTotal = document.querySelector("#shippingTotal");
const completePayment = document.querySelector("#completePayment");
const completeTotal = document.querySelector("#completeTotal");
const completeMessage = document.querySelector("#completeMessage");

const LINE_PAY_ENTRY_URL = "https://pay.line.me/portal/tw/main";
const VISA_INFO_URL = "https://www.nccc.com.tw/wps/wcm/connect/zh/home/BusinessOperations/BusinessIntroduction/AcquiringBusiness";

const demoStoreSuffixes = {
  seven: ["生活門市", "新晴門市", "樂購門市"],
  family: ["便利店", "新生活店", "好鄰居店"]
};

const districtData = {
  基隆市: ["200 仁愛區", "201 信義區", "202 中正區", "203 中山區", "204 安樂區", "205 暖暖區", "206 七堵區"],
  台北市: ["100 中正區", "103 大同區", "104 中山區", "105 松山區", "106 大安區", "108 萬華區", "110 信義區", "111 士林區", "112 北投區", "114 內湖區", "115 南港區", "116 文山區"],
  新北市: ["207 萬里區", "208 金山區", "220 板橋區", "221 汐止區", "222 深坑區", "223 石碇區", "224 瑞芳區", "226 平溪區", "227 雙溪區", "228 貢寮區", "231 新店區", "232 坪林區", "233 烏來區", "234 永和區", "235 中和區", "236 土城區", "237 三峽區", "238 樹林區", "239 鶯歌區", "241 三重區", "242 新莊區", "243 泰山區", "244 林口區", "247 蘆洲區", "248 五股區", "249 八里區", "251 淡水區", "252 三芝區", "253 石門區"],
  桃園市: ["320 中壢區", "324 平鎮區", "325 龍潭區", "326 楊梅區", "327 新屋區", "328 觀音區", "330 桃園區", "333 龜山區", "334 八德區", "335 大溪區", "336 復興區", "337 大園區", "338 蘆竹區"],
  新竹市: ["300 東區", "300 北區", "300 香山區"],
  新竹縣: ["302 竹北市", "303 湖口鄉", "304 新豐鄉", "305 新埔鎮", "306 關西鎮", "307 芎林鄉", "308 寶山鄉", "310 竹東鎮", "311 五峰鄉", "312 橫山鄉", "313 尖石鄉", "314 北埔鄉", "315 峨眉鄉"],
  苗栗縣: ["350 竹南鎮", "351 頭份市", "352 三灣鄉", "353 南庄鄉", "354 獅潭鄉", "356 後龍鎮", "357 通霄鎮", "358 苑裡鎮", "360 苗栗市", "361 造橋鄉", "362 頭屋鄉", "363 公館鄉", "364 大湖鄉", "365 泰安鄉", "366 銅鑼鄉", "367 三義鄉", "368 西湖鄉", "369 卓蘭鎮"],
  台中市: ["400 中區", "401 東區", "402 南區", "403 西區", "404 北區", "406 北屯區", "407 西屯區", "408 南屯區", "411 太平區", "412 大里區", "413 霧峰區", "414 烏日區", "420 豐原區", "421 后里區", "422 石岡區", "423 東勢區", "424 和平區", "426 新社區", "427 潭子區", "428 大雅區", "429 神岡區", "432 大肚區", "433 沙鹿區", "434 龍井區", "435 梧棲區", "436 清水區", "437 大甲區", "438 外埔區", "439 大安區"],
  彰化縣: ["500 彰化市", "502 芬園鄉", "503 花壇鄉", "504 秀水鄉", "505 鹿港鎮", "506 福興鄉", "507 線西鄉", "508 和美鎮", "509 伸港鄉", "510 員林市", "511 社頭鄉", "512 永靖鄉", "513 埔心鄉", "514 溪湖鎮", "515 大村鄉", "516 埔鹽鄉", "520 田中鎮", "521 北斗鎮", "522 田尾鄉", "523 埤頭鄉", "524 溪州鄉", "525 竹塘鄉", "526 二林鎮", "527 大城鄉", "528 芳苑鄉", "530 二水鄉"],
  南投縣: ["540 南投市", "541 中寮鄉", "542 草屯鎮", "544 國姓鄉", "545 埔里鎮", "546 仁愛鄉", "551 名間鄉", "552 集集鎮", "553 水里鄉", "555 魚池鄉", "556 信義鄉", "557 竹山鎮", "558 鹿谷鄉"],
  雲林縣: ["630 斗南鎮", "631 大埤鄉", "632 虎尾鎮", "633 土庫鎮", "634 褒忠鄉", "635 東勢鄉", "636 台西鄉", "637 崙背鄉", "638 麥寮鄉", "640 斗六市", "643 林內鄉", "646 古坑鄉", "647 莿桐鄉", "648 西螺鎮", "649 二崙鄉", "651 北港鎮", "652 水林鄉", "653 口湖鄉", "654 四湖鄉", "655 元長鄉"],
  嘉義市: ["600 東區", "600 西區"],
  嘉義縣: ["602 番路鄉", "603 梅山鄉", "604 竹崎鄉", "605 阿里山鄉", "606 中埔鄉", "607 大埔鄉", "608 水上鄉", "611 鹿草鄉", "612 太保市", "613 朴子市", "614 東石鄉", "615 六腳鄉", "616 新港鄉", "621 民雄鄉", "622 大林鎮", "623 溪口鄉", "624 義竹鄉", "625 布袋鎮"],
  台南市: ["700 中西區", "701 東區", "702 南區", "704 北區", "708 安平區", "709 安南區", "710 永康區", "711 歸仁區", "712 新化區", "713 左鎮區", "714 玉井區", "715 楠西區", "716 南化區", "717 仁德區", "718 關廟區", "719 龍崎區", "720 官田區", "721 麻豆區", "722 佳里區", "723 西港區", "724 七股區", "725 將軍區", "726 學甲區", "727 北門區", "730 新營區", "731 後壁區", "732 白河區", "733 東山區", "734 六甲區", "735 下營區", "736 柳營區", "737 鹽水區", "741 善化區", "742 大內區", "743 山上區", "744 新市區", "745 安定區"],
  高雄市: ["800 新興區", "801 前金區", "802 苓雅區", "803 鹽埕區", "804 鼓山區", "805 旗津區", "806 前鎮區", "807 三民區", "811 楠梓區", "812 小港區", "813 左營區", "814 仁武區", "815 大社區", "820 岡山區", "821 路竹區", "822 阿蓮區", "823 田寮區", "824 燕巢區", "825 橋頭區", "826 梓官區", "827 彌陀區", "828 永安區", "829 湖內區", "830 鳳山區", "831 大寮區", "832 林園區", "833 鳥松區", "840 大樹區", "842 旗山區", "843 美濃區", "844 六龜區", "845 內門區", "846 杉林區", "847 甲仙區", "848 桃源區", "849 那瑪夏區", "851 茂林區", "852 茄萣區"],
  屏東縣: ["900 屏東市", "901 三地門鄉", "902 霧台鄉", "903 瑪家鄉", "904 九如鄉", "905 里港鄉", "906 高樹鄉", "907 鹽埔鄉", "908 長治鄉", "909 麟洛鄉", "911 竹田鄉", "912 內埔鄉", "913 萬丹鄉", "920 潮州鎮", "921 泰武鄉", "922 來義鄉", "923 萬巒鄉", "924 崁頂鄉", "925 新埤鄉", "926 南州鄉", "927 林邊鄉", "928 東港鎮", "929 琉球鄉", "931 佳冬鄉", "932 新園鄉", "940 枋寮鄉", "941 枋山鄉", "942 春日鄉", "943 獅子鄉", "944 車城鄉", "945 牡丹鄉", "946 恆春鎮", "947 滿州鄉"],
  宜蘭縣: ["260 宜蘭市", "261 頭城鎮", "262 礁溪鄉", "263 壯圍鄉", "264 員山鄉", "265 羅東鎮", "266 三星鄉", "267 大同鄉", "268 五結鄉", "269 冬山鄉", "270 蘇澳鎮", "272 南澳鄉", "290 釣魚台"],
  花蓮縣: ["970 花蓮市", "971 新城鄉", "972 秀林鄉", "973 吉安鄉", "974 壽豐鄉", "975 鳳林鎮", "976 光復鄉", "977 豐濱鄉", "978 瑞穗鄉", "979 萬榮鄉", "981 玉里鎮", "982 卓溪鄉", "983 富里鄉"],
  台東縣: ["950 台東市", "951 綠島鄉", "952 蘭嶼鄉", "953 延平鄉", "954 卑南鄉", "955 鹿野鄉", "956 關山鎮", "957 海端鄉", "958 池上鄉", "959 東河鄉", "961 成功鎮", "962 長濱鄉", "963 太麻里鄉", "964 金峰鄉", "965 大武鄉", "966 達仁鄉"],
  澎湖縣: ["880 馬公市", "881 西嶼鄉", "882 望安鄉", "883 七美鄉", "884 白沙鄉", "885 湖西鄉"],
  金門縣: ["890 金沙鎮", "891 金湖鎮", "892 金寧鄉", "893 金城鎮", "894 烈嶼鄉", "896 烏坵鄉"],
  連江縣: ["209 南竿鄉", "210 北竿鄉", "211 莒光鄉", "212 東引鄉"]
};

function money(value) {
  return `NT$${formatter.format(value).replace(/[^\d,.-]/g, "")}`;
}

function setText(selector, value) {
  const node = document.querySelector(selector);
  if (node) node.textContent = value;
}

function applyLanguage() {
  const current = I18N[state.lang];
  document.documentElement.lang = current.htmlLang;
  languageCode.textContent = current.code;
  languageToggle.setAttribute("aria-label", `Language: ${current.code}`);
  languageMenu.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.lang);
  });

  setText(".brand small", t("brandSub"));
  setText(".nav-links a[href='#products']", t("navStock"));
  setText(".nav-links a[href='#market']", t("navMarket"));
  setText("#cartToggle span", t("cart"));
  document.querySelector("#cartToggle").setAttribute("aria-label", t("openCart"));

  setText("#storeTitle", t("heroTitle"));
  const heroBody = document.querySelector(".store-copy p:not(.eyebrow)");
  if (heroBody) heroBody.textContent = t("heroBody");
  setText(".primary-link[href='#products']", t("startShopping"));
  setText(".drop-panel div:nth-child(1) .panel-label", t("newDrop"));
  setText(".drop-panel div:nth-child(2) .panel-label", t("averagePrice"));
  setText(".drop-panel div:nth-child(3) .panel-label", t("marketPosition"));
  setText(".drop-panel div:nth-child(3) strong", t("marketValue"));

  setText(".filter-heading span", t("filters"));
  setText("#resetFilters", t("reset"));
  setText(".search-field span", t("searchProducts"));
  searchInput.placeholder = t("searchPlaceholder");
  setText("fieldset:nth-of-type(1) legend", t("category"));
  setText("fieldset:nth-of-type(2) legend", t("size"));
  document.querySelectorAll("input[name='category']").forEach((input) => {
    const label = input.closest("label");
    if (label && label.lastChild) label.lastChild.textContent = tCategory(input.value);
  });
  const budgetText = document.querySelector(".range-field span");
  if (budgetText) {
    budgetText.firstChild.textContent = `${t("maxBudget")} `;
  }
  setText(".catalog-head .eyebrow", t("ready"));
  setText(".catalog-head h2", t("catalogTitle"));
  setText(".cart-head span", t("cart"));
  setText(".cart-footer span", t("subtotal"));
  setText("#checkoutButton", t("checkout"));
  setText("#checkoutEyebrow", t("checkout"));
  setText("#checkoutTitle", t("checkoutTitle"));
  setText("#recipientNameLabel", t("recipientName"));
  setText("#recipientPhoneLabel", t("recipientPhone"));
  setText("#cityLabel", t("city"));
  setText("#districtLabel", t("district"));
  setText("#roadLabel", t("road"));
  setText("#numberLabel", t("number"));
  setText("#roomLabel", t("room"));
  setText("#storeCityLabel", t("storeCity"));
  setText("#storeDistrictLabel", t("storeDistrict"));
  setText("#storeOptionLabel", t("storeOption"));
  setText("#recipientNoteLabel", t("recipientNote"));
  setText("#backToCart", t("backToCart"));
  setText("#backToInfo", t("backToInfo"));
  setText("#confirmCheckout", t("confirmInfo"));
  recipientName.placeholder = t("recipientNamePlaceholder");
  recipientPhone.placeholder = t("recipientPhonePlaceholder");
  recipientRoadHome.placeholder = t("recipientAddressPlaceholder");
  recipientNote.placeholder = t("recipientNotePlaceholder");
  document.querySelector("#closeCart").setAttribute("aria-label", t("closeCart"));
  document.querySelector("#closeCheckout").setAttribute("aria-label", t("closeCheckout"));
  document.querySelector("#closeDialog").setAttribute("aria-label", t("closeDetail"));

  renderProducts();
  renderCart();
}

function filteredProducts() {
  return products.filter((product) => {
    const matchesSearch = `${product.name}${productName(product)}${product.category}${tCategory(product.category)}${product.source}`
      .toLowerCase()
      .includes(state.search.toLowerCase());
    const matchesCategory = state.category === "全部" || product.category === state.category;
    const matchesSize = state.sizes.size === 0 || state.sizes.has(product.size);
    const matchesBudget = product.price <= state.budget;
    return matchesSearch && matchesCategory && matchesSize && matchesBudget;
  });
}

function renderProducts() {
  const visibleProducts = filteredProducts();
  resultCount.textContent = `${visibleProducts.length} ${itemWord(visibleProducts.length)}`;
  if (dropCount) dropCount.textContent = `${products.length} ${itemWord(products.length)}`;
  if (averagePrice && products.length) {
    const average = Math.round(products.reduce((sum, product) => sum + product.price, 0) / products.length);
    averagePrice.textContent = money(average);
  }

  if (visibleProducts.length === 0) {
    productGrid.innerHTML = `
      <div class="empty-state">
        <h3>${t("noMatchTitle")}</h3>
        <p>${t("noMatchBody")}</p>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = visibleProducts
    .map(
      (product) => `
        <article class="product-card">
          <button class="product-image" data-detail="${product.id}" type="button" aria-label="${t("viewProduct")} ${productName(product)}">
            <img src="${product.image}" alt="${productName(product)}" loading="lazy" />
            <span class="badge-row">
              <span class="badge live">${t("liveUnsold")}</span>
              <span class="badge">${product.condition}</span>
            </span>
          </button>
          <div class="product-body">
            <div class="product-meta">
              <span>${tCategory(product.category)} / ${product.size}</span>
              <span>${product.source}</span>
            </div>
            <h3>${productName(product)}</h3>
            <div class="price-row">
              <strong>${money(product.price)}</strong>
              <button data-add="${product.id}" type="button">${t("add")}</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderCart() {
  const total = state.cart.reduce((sum, item) => sum + item.price, 0);
  cartCount.textContent = state.cart.length;
  cartTitle.textContent = state.cart.length ? `${state.cart.length} ${itemWord(state.cart.length)}` : t("notSelected");
  cartTotal.textContent = money(total);

  if (state.cart.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-state">
        <h3>${t("emptyCartTitle")}</h3>
        <p>${t("emptyCartBody")}</p>
      </div>
    `;
    return;
  }

  cartItems.innerHTML = state.cart
    .map(
      (item) => `
        <div class="cart-item">
          <img src="${item.image}" alt="${productName(item)}" />
          <div>
            <h4>${productName(item)}</h4>
            <p>${tCategory(item.category)} / ${item.size} / ${item.condition}</p>
            <strong>${money(item.price)}</strong>
          </div>
          <button class="remove-item" data-remove="${item.cartId}" type="button">${t("remove")}</button>
        </div>
      `
    )
    .join("");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 1800);
}

function showCartView() {
  cartView.hidden = false;
  checkoutView.hidden = true;
  shippingView.hidden = true;
  orderCompleteView.hidden = true;
}

function showCheckoutView() {
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
  cartView.hidden = true;
  checkoutView.removeAttribute("hidden");
  shippingView.hidden = true;
  orderCompleteView.hidden = true;
  checkoutTitle.textContent = t("checkoutTitle");
  checkoutEyebrow.textContent = t("checkout");
}

function goBackToRecipientInfo() {
  showCheckoutView();
  return false;
}

window.goBackToRecipientInfo = goBackToRecipientInfo;

function subtotalValue() {
  return state.cart.reduce((sum, item) => sum + item.price, 0);
}

function currentShippingFee() {
  const method = document.querySelector("input[name='shippingMethod']:checked")?.value || "seven";
  if (method === "seven") return state.cart.length >= 2 ? 60 : 38;
  return 60;
}

function updateShippingSummary() {
  const subtotal = subtotalValue();
  const fee = currentShippingFee();
  shippingSubtotal.textContent = money(subtotal);
  shippingFee.textContent = money(fee);
  shippingTotal.textContent = money(subtotal + fee);
}

function showShippingView() {
  cartView.hidden = true;
  checkoutView.hidden = true;
  shippingView.hidden = false;
  orderCompleteView.hidden = true;
  updateShippingSummary();
}

function showOrderCompleteView() {
  const payment = document.querySelector("input[name='paymentMethod']:checked")?.value || "cash";
  const paymentLabel = {
    cash: "現金取貨付款",
    linepay: "LINE Pay",
    visa: "Visa 線上支付"
  }[payment];

  completePayment.textContent = paymentLabel;
  completeTotal.textContent = money(subtotalValue() + currentShippingFee());
  completeMessage.textContent =
    payment === "cash"
      ? "已收到你的訂單資料，請依選擇的超商取貨付款。"
      : "此付款方式目前是介面預覽，正式收款需要串接金流與商店審核。";

  cartView.hidden = true;
  checkoutView.hidden = true;
  shippingView.hidden = true;
  orderCompleteView.hidden = false;
}

function renderDistrictOptions(citySelect = recipientCity, districtSelect = recipientDistrict) {
  const districts = districtData[citySelect.value] || [];
  districtSelect.innerHTML = districts
    .map((item) => `<option value="${item}">${item}</option>`)
    .join("");
}

function renderCityOptions() {
  const options = Object.keys(districtData)
    .map((city) => `<option value="${city}">${city}</option>`)
    .join("");
  recipientCity.innerHTML = options;
  nextdayCity.innerHTML = options;
  recipientCity.value = "台中市";
  nextdayCity.value = "台中市";
  renderDistrictOptions(recipientCity, recipientDistrict);
  renderDistrictOptions(nextdayCity, nextdayDistrict);
}

function renderStoreOptions() {
  const method = document.querySelector("input[name='deliveryMethod']:checked")?.value || "seven";
  const isStore = method === "seven" || method === "family";
  storePicker.hidden = !isStore;
  nextdayPicker.hidden = isStore;
  if (!isStore) return;
  const city = recipientCity.value;
  const district = recipientDistrict.value;
  const prefix = method === "seven" ? "7-11" : "全家";
  mapBrand.textContent = prefix;
  const mapQuery = encodeURIComponent(`${city} ${district} ${prefix}`);
  storeMap.href = `https://www.google.com/maps/search/${mapQuery}`;
  const suffixes = demoStoreSuffixes[method];
  storeOption.innerHTML = suffixes
    .map((suffix, index) => {
      const storeName = `${prefix} ${district.replace(/^[0-9]{3}\\s*/, "")}${suffix}`;
      const address = `${city}${district}${index + 1}號`;
      return `<option value="${storeName}">${storeName}｜${address}</option>`;
    })
    .join("");
}

function renderNextdayPaymentOptions() {
  const payment = document.querySelector("input[name='nextdayPayment']:checked")?.value || "cash";
  cashPickupOptions.hidden = payment !== "cash";
  onlineDelegateOptions.hidden = payment !== "online";
}

function addToCart(id) {
  const product = products.find((item) => item.id === id);
  state.cart.push({ ...product, cartId: crypto.randomUUID() });
  renderCart();
  showToast(`${productName(product)} ${t("added")}`);
}

function openProduct(id) {
  const product = products.find((item) => item.id === id);
  dialogContent.innerHTML = `
    <div class="dialog-grid">
      <img src="${product.detailImage || product.image}" alt="${productName(product)}" />
      <div class="dialog-info">
        <p class="eyebrow">${product.source}</p>
        <h3>${productName(product)}</h3>
        <p>${product.note}</p>
        <div class="detail-list">
          <div><span>${t("detailCategory")}</span><strong>${tCategory(product.category)}</strong></div>
          <div><span>${t("detailSize")}</span><strong>${product.size}</strong></div>
          <div><span>${t("detailCondition")}</span><strong>${product.condition}</strong></div>
          <div><span>${t("detailPrice")}</span><strong>${money(product.price)}</strong></div>
        </div>
        <button class="primary-link" data-add="${product.id}" type="button">${t("addCart")}</button>
      </div>
    </div>
  `;
  productDialog.showModal();
}

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value.trim();
  renderProducts();
});

document.querySelectorAll("input[name='category']").forEach((input) => {
  input.addEventListener("change", (event) => {
    state.category = event.target.value;
    renderProducts();
  });
});

document.querySelectorAll("input[name='size']").forEach((input) => {
  input.addEventListener("change", (event) => {
    if (event.target.checked) {
      state.sizes.add(event.target.value);
    } else {
      state.sizes.delete(event.target.value);
    }
    renderProducts();
  });
});

budgetRange.addEventListener("input", (event) => {
  state.budget = Number(event.target.value);
  budgetLabel.textContent = money(state.budget);
  renderProducts();
});

document.querySelector("#resetFilters").addEventListener("click", () => {
  state.search = "";
  state.category = "全部";
  state.sizes.clear();
  state.budget = 900;
  searchInput.value = "";
  budgetRange.value = "900";
  budgetLabel.textContent = money(900);
  document.querySelector("input[name='category'][value='全部']").checked = true;
  document.querySelectorAll("input[name='size']").forEach((input) => {
    input.checked = false;
  });
  renderProducts();
});

productGrid.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  const detailButton = event.target.closest("[data-detail]");
  if (addButton) addToCart(Number(addButton.dataset.add));
  if (detailButton) openProduct(Number(detailButton.dataset.detail));
});

dialogContent.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  if (addButton) {
    addToCart(Number(addButton.dataset.add));
    productDialog.close();
  }
});

cartItems.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove]");
  if (!removeButton) return;
  state.cart = state.cart.filter((item) => item.cartId !== removeButton.dataset.remove);
  renderCart();
});

document.querySelector("#cartToggle").addEventListener("click", () => {
  showCartView();
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
});

document.querySelector("#closeCart").addEventListener("click", () => {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  showCartView();
});

document.querySelector("#closeDialog").addEventListener("click", () => productDialog.close());

document.querySelector("#checkoutButton").addEventListener("click", () => {
  if (state.cart.length === 0) {
    showToast(t("addFirst"));
    return;
  }

  showCheckoutView();
});

document.querySelector("#backToCart").addEventListener("click", () => {
  showCartView();
});

document.querySelector("#closeCheckout").addEventListener("click", () => {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  showCartView();
});

document.querySelector("#confirmCheckout").addEventListener("click", () => {
  showShippingView();
});

document.querySelector("#closeShipping").addEventListener("click", () => {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  showCartView();
});

document.querySelector("#completeOrder").addEventListener("click", () => {
  const payment = document.querySelector("input[name='paymentMethod']:checked")?.value || "cash";
  if (payment === "linepay") {
    window.location.href = LINE_PAY_ENTRY_URL;
    return;
  }
  if (payment === "visa") {
    showToast("Visa 正式付款需先串接金流服務，目前先保留介面。");
    window.location.href = VISA_INFO_URL;
    return;
  }
  showOrderCompleteView();
});

document.querySelector("#closeComplete").addEventListener("click", () => {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  showCartView();
});

document.querySelectorAll("input[name='shippingMethod']").forEach((input) => {
  input.addEventListener("change", updateShippingSummary);
});

recipientCity.addEventListener("change", () => {
  renderDistrictOptions(recipientCity, recipientDistrict);
  renderStoreOptions();
});

nextdayCity.addEventListener("change", () => {
  renderDistrictOptions(nextdayCity, nextdayDistrict);
});

recipientDistrict.addEventListener("change", renderStoreOptions);
document.querySelectorAll("input[name='deliveryMethod']").forEach((input) => {
  input.addEventListener("change", renderStoreOptions);
});
document.querySelectorAll("input[name='nextdayPayment']").forEach((input) => {
  input.addEventListener("change", renderNextdayPaymentOptions);
});

languageToggle.addEventListener("click", () => {
  const isOpen = languageMenu.classList.toggle("open");
  languageToggle.setAttribute("aria-expanded", String(isOpen));
});

languageMenu.addEventListener("click", (event) => {
  const option = event.target.closest("[data-lang]");
  if (!option) return;
  state.lang = option.dataset.lang;
  languageMenu.classList.remove("open");
  languageToggle.setAttribute("aria-expanded", "false");
  applyLanguage();
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".language-picker")) {
    languageMenu.classList.remove("open");
    languageToggle.setAttribute("aria-expanded", "false");
  }
});

applyLanguage();
renderCityOptions();
renderStoreOptions();
renderNextdayPaymentOptions();
syncUpstreamProducts();
