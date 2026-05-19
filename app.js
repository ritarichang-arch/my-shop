const UPSTREAM_ENTRY_URL = "https://swipeshop-delta.vercel.app/pabili.html";
const UPSTREAM_SHOP_URL = "https://swipeshop-delta.vercel.app/";
const LIVE_ROOM_URL = "https://www.tiktok.com/@pabilicloset.tw";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61566271738744";

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
    brandSub: "Post-live second-hand shop",
    navStock: "Stock",
    navLive: "Live",
    navPartner: "Source",
    cart: "Cart",
    heroTitle: "Good clothes from the live that deserve a second look.",
    heroBody:
      "A downstream shop for post-live second-hand clothing: list quickly, show size and condition clearly, let customers choose, add to cart, then move to checkout.",
    startShopping: "Start shopping",
    liveLink: "Open live room",
    newDrop: "New drop",
    averagePrice: "Avg. price",
    unsoldLive: "Post-live stock",
    sourceShop: "Source shop",
    sourceName: "Pabili Closet",
    partnerBody: "Link to the live room, original product page, LINE group, TikTok, Facebook, or Instagram so customers can see the source and latest sessions.",
    visitSource: "Visit source shop",
    facebook: "Facebook",
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
    syncing: "Syncing source products...",
    synced: "Synced Pabili Closet",
    updated: "updated",
    fallback: "Using built-in products for now; this page will try syncing again next time.",
    noMatchTitle: "No matching clothes",
    noMatchBody: "Try a different size, category, or budget.",
    liveUnsold: "Post-live",
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
    viewSource: "View source item",
    closeCart: "Close cart",
    closeDetail: "Close product details",
    openCart: "Open cart",
    viewProduct: "View"
  },
  zh: {
    code: "中",
    htmlLang: "zh-Hant",
    brandSub: "直播後二手衣賣場",
    navStock: "現貨",
    navLive: "直播場",
    navPartner: "上游連結",
    cart: "購物車",
    heroTitle: "直播沒被帶走的好衣服，在這裡重新被看見。",
    heroBody: "適合做下游賣場的二手衣介面：直播後快速上架、清楚標示尺寸狀態，客人可以直接挑選、加入購物車，再導到你的結帳流程。",
    startShopping: "開始挑衣",
    liveLink: "查看上游直播場",
    newDrop: "本週新上架",
    averagePrice: "平均單價",
    unsoldLive: "直播未售出",
    sourceShop: "上游商店",
    sourceName: "家人直播衣櫥",
    partnerBody: "可放直播連結、原商品頁、LINE 社群、TikTok、Facebook 或 Instagram，讓客人知道貨源與最新場次。",
    visitSource: "前往上游商店",
    facebook: "Facebook",
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
    catalogTitle: "直播後現貨",
    items: "件商品",
    item: "件商品",
    syncing: "正在連線同步上游商品...",
    synced: "已同步 Pabili Closet",
    updated: "更新時間",
    fallback: "目前使用內建商品資料；重新開啟頁面時會再嘗試同步上游。",
    noMatchTitle: "沒有符合條件的衣服",
    noMatchBody: "可以放寬尺寸、分類或預算。",
    liveUnsold: "直播未售出",
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
    viewSource: "到上游看原商品",
    closeCart: "關閉購物車",
    closeDetail: "關閉商品細節",
    openCart: "開啟購物車",
    viewProduct: "查看"
  },
  fil: {
    code: "FIL",
    htmlLang: "fil",
    brandSub: "Pre-loved shop pagkatapos ng live",
    navStock: "Stocks",
    navLive: "Live",
    navPartner: "Source",
    cart: "Cart",
    heroTitle: "Mga damit na hindi na-mine sa live, ready na ulit makita.",
    heroBody: "Shop para sa post-live pre-loved clothes: mabilis i-list, malinaw ang size at condition, tapos madaling idagdag sa cart.",
    startShopping: "Mamili na",
    liveLink: "Buksan ang live",
    newDrop: "New drop",
    averagePrice: "Average price",
    unsoldLive: "Post-live stock",
    sourceShop: "Source shop",
    sourceName: "Pabili Closet",
    partnerBody: "Puwedeng ilagay ang live link, original item page, LINE, TikTok, Facebook, o Instagram para makita ng customers ang source.",
    visitSource: "Punta sa source",
    facebook: "Facebook",
    filters: "Filter",
    reset: "Reset",
    searchProducts: "Search item",
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
    catalogTitle: "Post-live stocks",
    items: "items",
    item: "item",
    syncing: "Syncing source items...",
    synced: "Synced Pabili Closet",
    updated: "updated",
    fallback: "Built-in items muna; susubukan ulit mag-sync sa next open.",
    noMatchTitle: "Walang match",
    noMatchBody: "Try ibang size, category, o budget.",
    liveUnsold: "Post-live",
    add: "Add",
    emptyCartTitle: "Empty pa ang cart",
    emptyCartBody: "Add mo muna ang gusto mong damit, then ask checkout together.",
    notSelected: "Wala pang item",
    subtotal: "Subtotal",
    checkout: "Ask checkout",
    remove: "Remove",
    added: "added to cart",
    addFirst: "Add item muna",
    inquiryReady: "Ready na ang inquiry list",
    detailCategory: "Category",
    detailSize: "Size",
    detailCondition: "Condition",
    detailPrice: "Price",
    addCart: "Add to cart",
    viewSource: "View source item",
    closeCart: "Close cart",
    closeDetail: "Close details",
    openCart: "Open cart",
    viewProduct: "View"
  },
  id: {
    code: "ID",
    htmlLang: "id",
    brandSub: "Toko baju bekas setelah live",
    navStock: "Stok",
    navLive: "Live",
    navPartner: "Sumber",
    cart: "Keranjang",
    heroTitle: "Baju bagus dari live, siap dilihat lagi.",
    heroBody: "Toko lanjutan untuk baju pre-loved setelah live: cepat upload, jelas ukuran dan kondisi, pelanggan bisa pilih lalu masukkan keranjang.",
    startShopping: "Mulai belanja",
    liveLink: "Buka live",
    newDrop: "Barang baru",
    averagePrice: "Harga rata-rata",
    unsoldLive: "Stok setelah live",
    sourceShop: "Toko sumber",
    sourceName: "Pabili Closet",
    partnerBody: "Bisa pasang link live, halaman barang asli, LINE, TikTok, Facebook, atau Instagram agar pelanggan tahu sumbernya.",
    visitSource: "Buka toko sumber",
    facebook: "Facebook",
    filters: "Filter",
    reset: "Reset",
    searchProducts: "Cari barang",
    searchPlaceholder: "Dress, atasan, denim...",
    category: "Kategori",
    all: "Semua",
    tops: "Atasan",
    jackets: "Jaket",
    dresses: "Dress",
    bottoms: "Bawahan",
    size: "Ukuran",
    maxBudget: "Budget maks",
    ready: "SIAP DIKIRIM",
    catalogTitle: "Stok setelah live",
    items: "barang",
    item: "barang",
    syncing: "Sinkron barang sumber...",
    synced: "Tersinkron Pabili Closet",
    updated: "diperbarui",
    fallback: "Memakai data bawaan dulu; akan coba sinkron lagi saat dibuka.",
    noMatchTitle: "Tidak ada yang cocok",
    noMatchBody: "Coba ubah ukuran, kategori, atau budget.",
    liveUnsold: "Post-live",
    add: "Tambah",
    emptyCartTitle: "Keranjang kosong",
    emptyCartBody: "Tambahkan baju yang disukai, lalu tanyakan checkout bersama.",
    notSelected: "Belum ada barang",
    subtotal: "Subtotal",
    checkout: "Tanya checkout",
    remove: "Hapus",
    added: "masuk keranjang",
    addFirst: "Tambahkan barang dulu",
    inquiryReady: "Daftar pertanyaan siap",
    detailCategory: "Kategori",
    detailSize: "Ukuran",
    detailCondition: "Kondisi",
    detailPrice: "Harga",
    addCart: "Masukkan keranjang",
    viewSource: "Lihat barang sumber",
    closeCart: "Tutup keranjang",
    closeDetail: "Tutup detail",
    openCart: "Buka keranjang",
    viewProduct: "Lihat"
  },
  vi: {
    code: "VI",
    htmlLang: "vi",
    brandSub: "Shop đồ second-hand sau livestream",
    navStock: "Hàng có sẵn",
    navLive: "Livestream",
    navPartner: "Nguồn hàng",
    cart: "Giỏ hàng",
    heroTitle: "Những món chưa bán trong live, nay được xem lại dễ hơn.",
    heroBody: "Giao diện shop cho đồ second-hand sau livestream: đăng nhanh, rõ size và tình trạng, khách chọn rồi thêm vào giỏ.",
    startShopping: "Mua ngay",
    liveLink: "Mở livestream",
    newDrop: "Hàng mới",
    averagePrice: "Giá trung bình",
    unsoldLive: "Hàng sau live",
    sourceShop: "Shop nguồn",
    sourceName: "Pabili Closet",
    partnerBody: "Có thể đặt link livestream, trang sản phẩm gốc, LINE, TikTok, Facebook hoặc Instagram để khách biết nguồn hàng.",
    visitSource: "Đến shop nguồn",
    facebook: "Facebook",
    filters: "Bộ lọc",
    reset: "Đặt lại",
    searchProducts: "Tìm sản phẩm",
    searchPlaceholder: "Váy, áo, denim...",
    category: "Danh mục",
    all: "Tất cả",
    tops: "Áo",
    jackets: "Áo khoác",
    dresses: "Váy",
    bottoms: "Quần/váy",
    size: "Size",
    maxBudget: "Ngân sách tối đa",
    ready: "SẴN SÀNG GỬI",
    catalogTitle: "Hàng sau livestream",
    items: "món",
    item: "món",
    syncing: "Đang đồng bộ sản phẩm...",
    synced: "Đã đồng bộ Pabili Closet",
    updated: "cập nhật",
    fallback: "Đang dùng dữ liệu có sẵn; lần mở sau sẽ thử đồng bộ lại.",
    noMatchTitle: "Không có sản phẩm phù hợp",
    noMatchBody: "Hãy thử đổi size, danh mục hoặc ngân sách.",
    liveUnsold: "Sau live",
    add: "Thêm",
    emptyCartTitle: "Giỏ hàng trống",
    emptyCartBody: "Thêm món bạn thích rồi hỏi thanh toán cùng lúc.",
    notSelected: "Chưa có món",
    subtotal: "Tạm tính",
    checkout: "Hỏi thanh toán",
    remove: "Xóa",
    added: "đã thêm vào giỏ",
    addFirst: "Vui lòng thêm sản phẩm trước",
    inquiryReady: "Danh sách hỏi hàng đã sẵn sàng",
    detailCategory: "Danh mục",
    detailSize: "Size",
    detailCondition: "Tình trạng",
    detailPrice: "Giá",
    addCart: "Thêm vào giỏ",
    viewSource: "Xem sản phẩm nguồn",
    closeCart: "Đóng giỏ hàng",
    closeDetail: "Đóng chi tiết",
    openCart: "Mở giỏ hàng",
    viewProduct: "Xem"
  },
  hi: {
    code: "HI",
    htmlLang: "hi",
    brandSub: "लाइव के बाद सेकंड-हैंड कपड़ों की दुकान",
    navStock: "स्टॉक",
    navLive: "लाइव",
    navPartner: "स्रोत",
    cart: "कार्ट",
    heroTitle: "लाइव में न बिके अच्छे कपड़े, अब फिर से देखने के लिए तैयार।",
    heroBody: "लाइव के बाद सेकंड-हैंड कपड़ों के लिए दुकान: जल्दी लिस्ट करें, साइज और कंडीशन साफ दिखाएं, ग्राहक चुनकर कार्ट में जोड़ सकते हैं।",
    startShopping: "खरीदारी शुरू करें",
    liveLink: "लाइव खोलें",
    newDrop: "नया स्टॉक",
    averagePrice: "औसत कीमत",
    unsoldLive: "लाइव के बाद स्टॉक",
    sourceShop: "स्रोत दुकान",
    sourceName: "Pabili Closet",
    partnerBody: "लाइव लिंक, मूल उत्पाद पेज, LINE, TikTok, Facebook या Instagram जोड़ें ताकि ग्राहक स्रोत देख सकें।",
    visitSource: "स्रोत दुकान खोलें",
    facebook: "Facebook",
    filters: "फ़िल्टर",
    reset: "रीसेट",
    searchProducts: "सामान खोजें",
    searchPlaceholder: "ड्रेस, टॉप, डेनिम...",
    category: "श्रेणी",
    all: "सभी",
    tops: "टॉप",
    jackets: "जैकेट",
    dresses: "ड्रेस",
    bottoms: "बॉटम",
    size: "साइज",
    maxBudget: "अधिकतम बजट",
    ready: "भेजने के लिए तैयार",
    catalogTitle: "लाइव के बाद स्टॉक",
    items: "आइटम",
    item: "आइटम",
    syncing: "स्रोत सामान सिंक हो रहा है...",
    synced: "Pabili Closet सिंक हुआ",
    updated: "अपडेट",
    fallback: "अभी बिल्ट-इन सामान दिख रहा है; अगली बार फिर सिंक होगा।",
    noMatchTitle: "कोई मैच नहीं मिला",
    noMatchBody: "साइज, श्रेणी या बजट बदलकर देखें।",
    liveUnsold: "पोस्ट-लाइव",
    add: "जोड़ें",
    emptyCartTitle: "कार्ट खाली है",
    emptyCartBody: "पसंद के कपड़े जोड़ें, फिर चेकआउट पूछें।",
    notSelected: "अभी कोई आइटम नहीं",
    subtotal: "सबटोटल",
    checkout: "चेकआउट पूछें",
    remove: "हटाएं",
    added: "कार्ट में जोड़ा गया",
    addFirst: "पहले कोई आइटम जोड़ें",
    inquiryReady: "पूछताछ सूची तैयार है",
    detailCategory: "श्रेणी",
    detailSize: "साइज",
    detailCondition: "कंडीशन",
    detailPrice: "कीमत",
    addCart: "कार्ट में जोड़ें",
    viewSource: "स्रोत आइटम देखें",
    closeCart: "कार्ट बंद करें",
    closeDetail: "विवरण बंद करें",
    openCart: "कार्ट खोलें",
    viewProduct: "देखें"
  }
};

const categoryLabelKeys = {
  全部: "all",
  上衣: "tops",
  外套: "jackets",
  洋裝: "dresses",
  褲裙: "bottoms"
};

function t(key) {
  return I18N[state.lang][key] || I18N.en[key] || key;
}

function itemWord(count) {
  if (state.lang === "en" || state.lang === "fil") return count === 1 ? t("item") : t("items");
  return t("items");
}

function tCategory(category) {
  return t(categoryLabelKeys[category] || category);
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
    if (upstreamProducts.length === 0) throw new Error("上游頁面沒有找到商品資料");

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
  setText(".nav-links a[href='#live']", t("navLive"));
  setText(".nav-links a[href='#partner']", t("navPartner"));
  setText("#cartToggle span", t("cart"));
  document.querySelector("#cartToggle").setAttribute("aria-label", t("openCart"));

  setText("#storeTitle", t("heroTitle"));
  const heroBody = document.querySelector(".store-copy p:not(.eyebrow)");
  if (heroBody) heroBody.textContent = t("heroBody");
  setText(".primary-link[href='#products']", t("startShopping"));
  setText("#liveLink", t("liveLink"));
  document.querySelector("#liveLink").href = LIVE_ROOM_URL;
  setText(".drop-panel div:nth-child(1) .panel-label", t("newDrop"));
  setText(".drop-panel div:nth-child(2) .panel-label", t("averagePrice"));
  setText(".drop-panel div:nth-child(3) .panel-label", t("unsoldLive"));
  setText(".partner-strip span", t("sourceShop"));
  setText(".partner-strip strong", t("sourceName"));
  setText(".partner-strip p", t("partnerBody"));
  setText("#sourceShopLink", t("visitSource"));
  setText("#facebookLink", t("facebook"));
  document.querySelector("#sourceShopLink").href = UPSTREAM_ENTRY_URL;
  document.querySelector("#facebookLink").href = FACEBOOK_URL;

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
    const matchesSearch = `${product.name}${product.category}${tCategory(product.category)}${product.source}`
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
          <button class="product-image" data-detail="${product.id}" type="button" aria-label="${t("viewProduct")} ${product.name}">
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
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
            <h3>${product.name}</h3>
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
          <img src="${item.image}" alt="${item.name}" />
          <div>
            <h4>${item.name}</h4>
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
  showToast(`${product.name} ${t("added")}`);
}

function openProduct(id) {
  const product = products.find((item) => item.id === id);
  dialogContent.innerHTML = `
    <div class="dialog-grid">
      <img src="${product.detailImage || product.image}" alt="${product.name}" />
      <div class="dialog-info">
        <p class="eyebrow">${product.source}</p>
        <h3>${product.name}</h3>
        <p>${product.note}</p>
        <div class="detail-list">
          <div><span>${t("detailCategory")}</span><strong>${tCategory(product.category)}</strong></div>
          <div><span>${t("detailSize")}</span><strong>${product.size}</strong></div>
          <div><span>${t("detailCondition")}</span><strong>${product.condition}</strong></div>
          <div><span>${t("detailPrice")}</span><strong>${money(product.price)}</strong></div>
        </div>
        <button class="primary-link" data-add="${product.id}" type="button">${t("addCart")}</button>
        <a class="ghost-link" href="${product.upstreamUrl || UPSTREAM_SHOP_URL}">${t("viewSource")}</a>
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

  const list = state.cart.map((item) => item.name).join("、");
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
