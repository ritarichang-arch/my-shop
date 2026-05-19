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
    checkout: "Ask to checkout",
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
    checkout: "詢問結帳",
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
    checkout: "問い合わせ",
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
    checkout: "문의하기",
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
    checkout: "查詢結帳",
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
  document.querySelector("#closeCart").setAttribute("aria-label", t("closeCart"));
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
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
});

document.querySelector("#closeCart").addEventListener("click", () => {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
});

document.querySelector("#closeDialog").addEventListener("click", () => productDialog.close());

document.querySelector("#checkoutButton").addEventListener("click", () => {
  if (state.cart.length === 0) {
    showToast(t("addFirst"));
    return;
  }

  const list = state.cart.map((item) => productName(item)).join("、");
  showToast(`${t("inquiryReady")}：${list}`);
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
syncUpstreamProducts();
