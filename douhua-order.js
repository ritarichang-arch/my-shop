const SOUP_LABELS = {
  sweet: "甜湯",
  soy: "豆漿",
  soyMilk: "豆鮮奶"
};

const MAX_TOPPINGS = 3;

const FILTER_META = {
  all: {
    tab: "全部",
    title: "全部商品",
    desc: "依類別分區顯示所有品項。"
  },
  featured: {
    tab: "人氣",
    title: "人氣推薦",
    desc: "精選店內主打與常點品項。"
  },
  pudding: {
    tab: "豆花仙草",
    title: "豆花仙草",
    desc: "豆花、嫩仙草與抹茶特色款。"
  },
  soy: {
    tab: "豆漿",
    title: "豆漿飲品",
    desc: "罐裝豆漿、豆鮮奶與風味飲。"
  },
  sweet: {
    tab: "甜湯",
    title: "甜湯",
    desc: "無豆花的甜湯與配料組合。"
  },
  seasonal: {
    tab: "冬季",
    title: "冬季限定",
    desc: "燒仙草與薑母茶系列。"
  }
};

const CATEGORY_ORDER = ["featured", "pudding", "soy", "sweet", "seasonal"];

const MENU_PHOTOS = {
  "choose-three": "https://tb-static.uber.com/prod/image-proc/processed_images/bd3d3cdedf1867778050fe4dc4ba7345/c67fc65e9b4e16a553eb7574fba090f1.jpeg",
  "signature-fenkuai": "https://tb-static.uber.com/prod/image-proc/processed_images/4663bd1bc189b09da945bd266a64ea03/c67fc65e9b4e16a553eb7574fba090f1.jpeg",
  pure: "https://tb-static.uber.com/prod/image-proc/processed_images/f4dd3bcb0edb313502d642f813237102/c67fc65e9b4e16a553eb7574fba090f1.jpeg",
  redbean: "https://tb-static.uber.com/prod/image-proc/processed_images/f4dd3bcb0edb313502d642f813237102/c67fc65e9b4e16a553eb7574fba090f1.jpeg",
  mungbean: "https://tb-static.uber.com/prod/image-proc/processed_images/f4dd3bcb0edb313502d642f813237102/c67fc65e9b4e16a553eb7574fba090f1.jpeg",
  peanut: "https://tb-static.uber.com/prod/image-proc/processed_images/cbc140deb9357b3fff1875970963bec9/c67fc65e9b4e16a553eb7574fba090f1.jpeg",
  barley: "https://tb-static.uber.com/prod/image-proc/processed_images/abc16fa913d75bb3cd7fa481cb2575b1/c67fc65e9b4e16a553eb7574fba090f1.jpeg",
  "brown-sugar-pearl": "https://tb-static.uber.com/prod/image-proc/processed_images/f4dd3bcb0edb313502d642f813237102/c67fc65e9b4e16a553eb7574fba090f1.jpeg",
  "taro-ball": "https://tb-static.uber.com/prod/image-proc/processed_images/abc16fa913d75bb3cd7fa481cb2575b1/c67fc65e9b4e16a553eb7574fba090f1.jpeg",
  pudding: "https://tb-static.uber.com/prod/image-proc/processed_images/f4dd3bcb0edb313502d642f813237102/c67fc65e9b4e16a553eb7574fba090f1.jpeg",
  "matcha-pudding": "https://tb-static.uber.com/prod/image-proc/processed_images/f4dd3bcb0edb313502d642f813237102/c67fc65e9b4e16a553eb7574fba090f1.jpeg",
  tangyuan: "https://tb-static.uber.com/prod/image-proc/processed_images/d5d990ede0849baa9d45d87aa050b816/c67fc65e9b4e16a553eb7574fba090f1.jpeg",
  fenkuai: "https://tb-static.uber.com/prod/image-proc/processed_images/57fca2c114058de5147d44ff0bd65fc3/c67fc65e9b4e16a553eb7574fba090f1.jpeg",
  "matcha-q": "https://tb-static.uber.com/prod/image-proc/processed_images/84e32767ed90165e60fcbc7b05bf4f0e/c67fc65e9b4e16a553eb7574fba090f1.jpeg",
  "black-q": "https://tb-static.uber.com/prod/image-proc/processed_images/84e32767ed90165e60fcbc7b05bf4f0e/c67fc65e9b4e16a553eb7574fba090f1.jpeg",
  "sesame-soy": "https://tb-static.uber.com/prod/image-proc/processed_images/cbc140deb9357b3fff1875970963bec9/c67fc65e9b4e16a553eb7574fba090f1.jpeg",
  "sesame-redbean": "https://tb-static.uber.com/prod/image-proc/processed_images/cbc140deb9357b3fff1875970963bec9/c67fc65e9b4e16a553eb7574fba090f1.jpeg",
  "matcha-redbean": "https://tb-static.uber.com/prod/image-proc/processed_images/bada5916e78a1338ced9b06a2febf929/c67fc65e9b4e16a553eb7574fba090f1.jpeg",
  "miancha-redbean": "https://tb-static.uber.com/prod/image-proc/processed_images/059d0381c65796d3460014a4c53847e5/c67fc65e9b4e16a553eb7574fba090f1.jpeg",
  "matcha-special": "https://tb-static.uber.com/prod/image-proc/processed_images/0ffd7f2c2a47b5e86adacf3ba3747557/c67fc65e9b4e16a553eb7574fba090f1.jpeg",
  "soy-original": "https://tb-static.uber.com/prod/image-proc/processed_images/8bfaf51bdaea134b7ab36e388fc75ede/c67fc65e9b4e16a553eb7574fba090f1.jpeg",
  "soy-milk": "https://tb-static.uber.com/prod/image-proc/processed_images/8bfaf51bdaea134b7ab36e388fc75ede/c67fc65e9b4e16a553eb7574fba090f1.jpeg",
  "matcha-soy": "https://tb-static.uber.com/prod/image-proc/processed_images/648899ce1e1f518d5714e6e8d3074827/c67fc65e9b4e16a553eb7574fba090f1.jpeg",
  "miancha-soy": "https://tb-static.uber.com/prod/image-proc/processed_images/9e2f36e84ec41fa4c6a70d80b3a0ab46/c67fc65e9b4e16a553eb7574fba090f1.jpeg",
  "brown-sugar-soy": "https://tb-static.uber.com/prod/image-proc/processed_images/9e2f36e84ec41fa4c6a70d80b3a0ab46/c67fc65e9b4e16a553eb7574fba090f1.jpeg",
  "brown-sugar-fresh": "https://tb-static.uber.com/prod/image-proc/processed_images/9e2f36e84ec41fa4c6a70d80b3a0ab46/c67fc65e9b4e16a553eb7574fba090f1.jpeg",
  "sesame-drink": "https://tb-static.uber.com/prod/image-proc/processed_images/8bfaf51bdaea134b7ab36e388fc75ede/c67fc65e9b4e16a553eb7574fba090f1.jpeg",
  wintermelon: "https://tb-static.uber.com/prod/image-proc/processed_images/4e56fbdc5bdcddf6f41c2b69f150c24e/c67fc65e9b4e16a553eb7574fba090f1.jpeg",
  "redbean-fenkuai-soup": "https://tb-static.uber.com/prod/image-proc/processed_images/d7d7c573494488938e95e05f7a639366/c67fc65e9b4e16a553eb7574fba090f1.jpeg",
  "redbean-tangyuan-soup": "https://tb-static.uber.com/prod/image-proc/processed_images/5e0aca304bf6e0114d5cebafce2dc66b/70aa2a4db7f990373ca9c376323e3dea.jpeg",
  "three-fenkuai-soup": "https://tb-static.uber.com/prod/image-proc/processed_images/84e32767ed90165e60fcbc7b05bf4f0e/c67fc65e9b4e16a553eb7574fba090f1.jpeg",
  "choose-three-soup": "https://tb-static.uber.com/prod/image-proc/processed_images/bd3d3cdedf1867778050fe4dc4ba7345/c67fc65e9b4e16a553eb7574fba090f1.jpeg"
};

const menuItems = [
  {
    id: "choose-three",
    name: "開心選三種料",
    category: "pudding",
    type: "pudding",
    prices: { sweet: 60, soy: 65, soyMilk: 70 },
    desc: "可自選三種配料，甜湯、豆漿、豆鮮奶三種湯底。",
    tag: "人氣",
    featured: true,
    accent: "#2f7a6a"
  },
  {
    id: "signature-fenkuai",
    name: "招牌綜合粉粿",
    category: "pudding",
    type: "pudding",
    prices: { sweet: 55, soy: 60, soyMilk: 65 },
    desc: "招牌粉粿組合，豆花或嫩仙草都能搭。",
    tag: "招牌",
    featured: true,
    accent: "#c9872f"
  },
  {
    id: "pure",
    name: "手作純豆花",
    category: "pudding",
    type: "pudding",
    prices: { sweet: 40, soy: 45, soyMilk: 50 },
    desc: "單純品嘗手作豆花，也可切換嫩仙草。",
    tag: "純粹",
    accent: "#6f8641"
  },
  {
    id: "redbean",
    name: "純粹紅豆豆花",
    category: "pudding",
    type: "pudding",
    prices: { sweet: 50, soy: 55, soyMilk: 60 },
    desc: "綿密紅豆與手作豆花，暖甜順口。",
    tag: "經典",
    accent: "#8d3e4b"
  },
  {
    id: "mungbean",
    name: "純粹綠豆豆花",
    category: "pudding",
    type: "pudding",
    prices: { sweet: 50, soy: 55, soyMilk: 60 },
    desc: "綠豆清爽，適合想吃輕一點的甜品。",
    tag: "清爽",
    accent: "#4e8b68"
  },
  {
    id: "peanut",
    name: "純粹花生豆花",
    category: "pudding",
    type: "pudding",
    prices: { sweet: 50, soy: 55, soyMilk: 60 },
    desc: "軟花生搭配豆香，古早味路線。",
    tag: "經典",
    accent: "#b35f32"
  },
  {
    id: "barley",
    name: "純粹薏仁豆花",
    category: "pudding",
    type: "pudding",
    prices: { sweet: 50, soy: 55, soyMilk: 60 },
    desc: "薏仁粒粒分明，清甜有飽足感。",
    tag: "養生",
    accent: "#7b8561"
  },
  {
    id: "brown-sugar-pearl",
    name: "黑糖珍珠豆花",
    category: "pudding",
    type: "pudding",
    prices: { sweet: 50, soy: 55, soyMilk: 60 },
    desc: "黑糖香氣與珍珠口感，是下午茶人氣選擇。",
    tag: "Q彈",
    accent: "#7a493b"
  },
  {
    id: "taro-ball",
    name: "雙色芋圓豆花",
    category: "pudding",
    type: "pudding",
    prices: { sweet: 50, soy: 55, soyMilk: 60 },
    desc: "芋圓與地瓜圓雙色搭配，口感更豐富。",
    tag: "Q彈",
    accent: "#7d3b5f"
  },
  {
    id: "pudding",
    name: "咕溜布丁豆花",
    category: "pudding",
    type: "pudding",
    prices: { sweet: 50, soy: 55, soyMilk: 60 },
    desc: "布丁滑嫩，搭上手作豆花很柔順。",
    tag: "滑嫩",
    accent: "#d29a30"
  },
  {
    id: "matcha-pudding",
    name: "抹茶布丁豆花",
    category: "pudding",
    type: "pudding",
    prices: { sweet: 50, soy: 55, soyMilk: 60 },
    desc: "抹茶布丁帶茶香，適合想嚐鮮的抹茶派。",
    tag: "抹茶",
    featured: true,
    accent: "#3c7c4b"
  },
  {
    id: "tangyuan",
    name: "紅白湯圓豆花",
    category: "pudding",
    type: "pudding",
    prices: { sweet: 50, soy: 55, soyMilk: 60 },
    desc: "古早味紅白湯圓，冰熱都適合。",
    tag: "古早味",
    accent: "#b55a5b"
  },
  {
    id: "fenkuai",
    name: "自製粉粿豆花",
    category: "pudding",
    type: "pudding",
    prices: { sweet: 50, soy: 55, soyMilk: 60 },
    desc: "純手工粉粿，Q 軟清涼。",
    tag: "手作",
    featured: true,
    accent: "#b99136"
  },
  {
    id: "matcha-q",
    name: "自製抹茶Q粿豆花",
    category: "pudding",
    type: "pudding",
    prices: { sweet: 50, soy: 55, soyMilk: 60 },
    desc: "抹茶 Q 粿與豆花，茶香更立體。",
    tag: "抹茶",
    accent: "#446f3e"
  },
  {
    id: "black-q",
    name: "自製黑糖Q粿豆花",
    category: "pudding",
    type: "pudding",
    prices: { sweet: 50, soy: 55, soyMilk: 60 },
    desc: "黑糖 Q 粿帶焦香，越嚼越香。",
    tag: "手作",
    accent: "#7b4a36"
  },
  {
    id: "sesame-soy",
    name: "養生芝麻豆漿豆花",
    category: "pudding",
    type: "pudding",
    prices: { soy: 65, soyMilk: 70 },
    defaultSoup: "soy",
    desc: "黑芝麻粉現調豆漿，滿滿芝麻香。",
    tag: "養生",
    accent: "#333f44"
  },
  {
    id: "sesame-redbean",
    name: "養生芝麻紅豆豆花",
    category: "pudding",
    type: "pudding",
    prices: { soy: 65, soyMilk: 70 },
    defaultSoup: "soy",
    desc: "芝麻豆漿、紅豆與豆花的飽足組合。",
    tag: "養生",
    accent: "#4a3a45"
  },
  {
    id: "matcha-redbean",
    name: "靜岡抹茶紅豆豆花",
    category: "pudding",
    type: "pudding",
    prices: { soy: 70, soyMilk: 75 },
    defaultSoup: "soy",
    desc: "靜岡抹茶風味搭配萬丹紅豆。",
    tag: "抹茶",
    featured: true,
    accent: "#2f6c45"
  },
  {
    id: "miancha-redbean",
    name: "麵茶紅豆粉粿豆花",
    category: "pudding",
    type: "pudding",
    prices: { soy: 70, soyMilk: 75 },
    defaultSoup: "soy",
    desc: "麵茶香、紅豆與粉粿，飽足感很高。",
    tag: "麵茶",
    accent: "#9a6f36"
  },
  {
    id: "matcha-special",
    name: "悠沐 IG 版抹茶控豆花",
    category: "pudding",
    type: "fixed",
    price: 75,
    desc: "抹茶豆漿、抹茶布丁、抹茶 Q 粿與雙色芋圓。",
    tag: "隱藏版",
    featured: true,
    accent: "#2f7a4f"
  },
  {
    id: "soy-original",
    name: "純粹豆漿",
    category: "soy",
    type: "fixed",
    price: 40,
    desc: "手作豆漿，單純喝豆香。",
    tag: "豆漿",
    accent: "#6f8641"
  },
  {
    id: "soy-milk",
    name: "醇香豆鮮奶",
    category: "soy",
    type: "fixed",
    price: 45,
    desc: "豆漿加入鮮奶，口感更圓潤。",
    tag: "豆鮮奶",
    accent: "#335d7c"
  },
  {
    id: "matcha-soy",
    name: "靜岡抹茶豆漿",
    category: "soy",
    type: "fixed",
    price: 50,
    desc: "抹茶香與豆漿融合，茶感明顯。",
    tag: "抹茶",
    accent: "#35704b"
  },
  {
    id: "miancha-soy",
    name: "懷舊麵茶豆漿",
    category: "soy",
    type: "fixed",
    price: 50,
    desc: "鹿港老味麵茶香，適合喜歡穀物香的人。",
    tag: "麵茶",
    accent: "#9a6f36"
  },
  {
    id: "brown-sugar-soy",
    name: "黑糖珍珠豆漿",
    category: "soy",
    type: "fixed",
    price: 50,
    desc: "黑糖珍珠加豆漿，甜香又有咀嚼感。",
    tag: "珍珠",
    accent: "#7a493b"
  },
  {
    id: "brown-sugar-fresh",
    name: "黑糖珍珠豆鮮奶",
    category: "soy",
    type: "fixed",
    price: 65,
    desc: "黑糖珍珠與豆鮮奶，濃郁順口。",
    tag: "珍珠",
    accent: "#8d3e4b"
  },
  {
    id: "sesame-drink",
    name: "養生芝麻豆漿",
    category: "soy",
    type: "fixed",
    price: 50,
    desc: "黑芝麻香氣厚實，豆香收尾。",
    tag: "芝麻",
    accent: "#333f44"
  },
  {
    id: "wintermelon",
    name: "熬煮冬瓜冰露",
    category: "soy",
    type: "fixed",
    price: 30,
    desc: "清甜冬瓜茶，適合配甜品一起帶。",
    tag: "冰露",
    accent: "#c9872f"
  },
  {
    id: "redbean-soup",
    name: "黑糖紅豆甜湯",
    category: "sweet",
    type: "fixed",
    price: 50,
    desc: "黑糖甜湯與紅豆，簡單溫潤。",
    tag: "甜湯",
    accent: "#8d3e4b"
  },
  {
    id: "redbean-fenkuai-soup",
    name: "紅豆粉粿甜湯",
    category: "sweet",
    type: "fixed",
    price: 55,
    desc: "紅豆加手作粉粿，口感更豐富。",
    tag: "甜湯",
    accent: "#b99136"
  },
  {
    id: "redbean-tangyuan-soup",
    name: "紅豆湯圓甜湯",
    category: "sweet",
    type: "fixed",
    price: 55,
    desc: "紅豆與紅白湯圓的古早甜湯。",
    tag: "甜湯",
    accent: "#b55a5b"
  },
  {
    id: "peanut-pearl-soup",
    name: "花生珍珠甜湯",
    category: "sweet",
    type: "fixed",
    price: 55,
    desc: "軟花生搭配珍珠，香氣與口感都有。",
    tag: "甜湯",
    accent: "#b35f32"
  },
  {
    id: "mungbean-barley-soup",
    name: "綠豆薏仁甜湯",
    category: "sweet",
    type: "fixed",
    price: 55,
    desc: "綠豆與薏仁，清爽不厚重。",
    tag: "甜湯",
    accent: "#4e8b68"
  },
  {
    id: "three-fenkuai-soup",
    name: "三色粉粿甜湯",
    category: "sweet",
    type: "fixed",
    price: 55,
    desc: "三色粉粿是主角，Q 軟清甜。",
    tag: "粉粿",
    accent: "#c9872f"
  },
  {
    id: "choose-three-soup",
    name: "悠選三種甜湯",
    category: "sweet",
    type: "fixed",
    price: 60,
    desc: "甜湯可選三種配料，適合自由搭。",
    tag: "自選",
    accent: "#2f7a6a"
  },
  {
    id: "grass-jelly-drink",
    name: "純喝燒仙草",
    category: "seasonal",
    type: "fixed",
    price: 40,
    desc: "冬季限定，單純喝暖暖燒仙草。",
    tag: "冬季",
    accent: "#335d7c"
  },
  {
    id: "youmu-grass-jelly",
    name: "悠沐燒仙草",
    category: "seasonal",
    type: "fixed",
    price: 55,
    desc: "冬季限定，燒仙草搭配店內配料。",
    tag: "冬季",
    accent: "#335d7c"
  },
  {
    id: "ginger-tea",
    name: "熬煮薑母茶",
    category: "seasonal",
    type: "fixed",
    price: 50,
    desc: "冬季限定，薑香溫暖。",
    tag: "冬季",
    accent: "#b35f32"
  },
  {
    id: "ginger-grass",
    name: "仙草薑母茶",
    category: "seasonal",
    type: "fixed",
    price: 50,
    desc: "仙草加薑母茶，暖胃又順口。",
    tag: "冬季",
    accent: "#7a493b"
  }
];

const toppings = [
  { id: "redbean", name: "紅豆", price: 10 },
  { id: "mungbean", name: "綠豆", price: 10 },
  { id: "peanut", name: "軟花生", price: 10 },
  { id: "barley", name: "薏仁", price: 10 },
  { id: "pearl", name: "珍珠", price: 10 },
  { id: "taro", name: "雙色芋圓", price: 15 },
  { id: "tangyuan", name: "紅白湯圓", price: 15 },
  { id: "fenkuai", name: "自製粉粿", price: 15 },
  { id: "black-q", name: "黑糖Q粿", price: 15 },
  { id: "matcha-q", name: "抹茶Q粿", price: 15 },
  { id: "pudding", name: "原味布丁", price: 15 },
  { id: "matcha-pudding", name: "抹茶布丁", price: 15 }
];

const CART_KEY = "youmu-cart";

const state = {
  filter: "all",
  selectedId: menuItems[0].id,
  customQty: 1,
  cart: loadCart(),
  lastReceipt: ""
};

const elements = {
  baseFieldset: document.getElementById("baseFieldset"),
  backToMenu: document.getElementById("backToMenu"),
  cartCount: document.getElementById("cartCount"),
  cartLines: document.getElementById("cartLines"),
  cartTotal: document.getElementById("cartTotal"),
  copyReceipt: document.getElementById("copyReceipt"),
  customQty: document.getElementById("customQty"),
  customizerPanel: document.getElementById("customizerPanel"),
  customizerPrice: document.getElementById("customizerPrice"),
  customizeForm: document.getElementById("customizeForm"),
  customerName: document.getElementById("customerName"),
  customerPhone: document.getElementById("customerPhone"),
  filterTabs: document.querySelector(".filter-tabs"),
  filterSummary: document.getElementById("filterSummary"),
  formStatus: document.getElementById("formStatus"),
  menuGrid: document.getElementById("menuGrid"),
  menuColumn: document.querySelector(".menu-column"),
  orderNote: document.getElementById("orderNote"),
  pickupDate: document.getElementById("pickupDate"),
  pickupForm: document.getElementById("pickup"),
  pickupTime: document.getElementById("pickupTime"),
  printReceipt: document.getElementById("printReceipt"),
  receipt: document.getElementById("receipt"),
  receiptText: document.getElementById("receiptText"),
  selectedDishDesc: document.getElementById("selectedDishDesc"),
  selectedDishDot: document.getElementById("selectedDishDot"),
  selectedDishName: document.getElementById("selectedDishName"),
  soupFieldset: document.getElementById("soupFieldset"),
  toppingFieldset: document.getElementById("toppingFieldset"),
  toppingGrid: document.getElementById("toppingGrid"),
  toast: document.getElementById("toast")
};

function money(amount) {
  return `NT$${amount.toLocaleString("zh-TW")}`;
}

function selectedItem() {
  return menuItems.find((item) => item.id === state.selectedId) || menuItems[0];
}

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(state.cart));
}

function lineId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }

  return `line-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function lowestPrice(item) {
  if (!item.prices) {
    return item.price;
  }

  return Math.min(...Object.values(item.prices));
}

function priceLabel(item) {
  if (!item.prices) {
    return money(item.price);
  }

  return `${money(lowestPrice(item))} 起`;
}

function itemsForFilter(filter) {
  if (filter === "all") {
    return menuItems;
  }

  if (filter === "featured") {
    return menuItems.filter((item) => item.featured);
  }

  return menuItems.filter((item) => item.category === filter);
}

function countForFilter(filter) {
  return itemsForFilter(filter).length;
}

function renderFilterTabs() {
  elements.filterTabs.querySelectorAll("[data-filter]").forEach((button) => {
    const filter = button.dataset.filter;
    const meta = FILTER_META[filter];

    if (!meta) {
      return;
    }

    button.classList.toggle("is-active", filter === state.filter);
    button.setAttribute("aria-pressed", String(filter === state.filter));
    button.innerHTML = `<span>${meta.tab}</span><small>${countForFilter(filter)}</small>`;

    if (button.tagName.toLowerCase() === "a") {
      button.href = filter === "all" ? "#menuGrid" : `#menuGroup-${filter}`;
    }
  });
}

function availableSoupValues(item) {
  if (!item.prices) {
    return Object.keys(SOUP_LABELS);
  }

  return Object.keys(item.prices);
}

function setSoupAvailability(item) {
  const values = availableSoupValues(item);
  const soupInputs = [...document.querySelectorAll('input[name="soup"]')];

  soupInputs.forEach((input) => {
    const available = values.includes(input.value);
    input.disabled = !available;
    input.closest("label").hidden = !available;
  });

  const checked = soupInputs.find((input) => input.checked && !input.disabled);
  if (!checked) {
    const preferred = item.defaultSoup || values[0] || "sweet";
    const next = soupInputs.find((input) => input.value === preferred && !input.disabled) || soupInputs.find((input) => !input.disabled);
    if (next) {
      next.checked = true;
    }
  }
}

function renderToppings() {
  elements.toppingGrid.innerHTML = toppings
    .map(
      (topping) => `
        <label>
          <span>
            <input type="checkbox" name="topping" value="${topping.id}" />
            ${topping.name}
          </span>
          <span>+${money(topping.price)}</span>
        </label>
      `
    )
    .join("");
}

function menuCardMarkup(item) {
  const photo = MENU_PHOTOS[item.id];
  const media = photo
    ? `<img class="dish-photo" src="${photo}" alt="${item.name}" loading="lazy" />`
    : `<span class="dish-art" aria-hidden="true"></span>`;

  return `
    <article class="menu-card ${item.id === state.selectedId ? "is-selected" : ""}" style="--accent: ${item.accent}">
      ${media}
      <div class="menu-card-content">
        <small>${item.tag}</small>
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
      </div>
      <div class="menu-card-footer">
        <strong>${priceLabel(item)}</strong>
        <button type="button" data-select-item="${item.id}">選擇</button>
      </div>
    </article>
  `;
}

function menuGroups() {
  return CATEGORY_ORDER.map((category) => ({
    key: category,
    ...FILTER_META[category],
    items: itemsForFilter(category)
  })).filter((group) => group.items.length);
}

function renderMenu() {
  const groups = menuGroups();
  const visibleItems = itemsForFilter(state.filter);
  const visibleCount = visibleItems.length;
  const meta = FILTER_META[state.filter] || FILTER_META.all;

  if (elements.filterSummary) {
    const visibleNames = visibleItems.map((item) => item.name);
    const itemNames = state.filter === "all" ? "" : `：${visibleNames.join("、")}`;
    elements.filterSummary.textContent = `${meta.title}：${meta.desc} 共 ${visibleCount} 項${itemNames}。`;
  }

  renderFilterTabs();

  elements.menuGrid.innerHTML = groups
    .map(
      (group) => `
        <section class="menu-group" id="menuGroup-${group.key}" aria-labelledby="menuGroupTitle-${group.key}">
          <div class="menu-group-head">
            <div>
              <h3 id="menuGroupTitle-${group.key}">${group.title}</h3>
              <p>${group.desc}</p>
            </div>
            <span>${group.items.length} 項</span>
          </div>
          <div class="menu-group-grid">
            ${group.items.map(menuCardMarkup).join("")}
          </div>
        </section>
      `
    )
    .join("");
}

function scrollToMenuGroup(filter) {
  const target =
    filter === "all"
      ? elements.menuGrid
      : document.getElementById(`menuGroup-${filter}`);

  if (!target) {
    return;
  }

  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function setFilter(filter) {
  if (!FILTER_META[filter]) {
    return;
  }

  state.filter = filter;
  renderFilterTabs();

  const meta = FILTER_META[state.filter] || FILTER_META.all;
  const visibleItems = itemsForFilter(state.filter);
  const itemNames = state.filter === "all" ? "" : `：${visibleItems.map((item) => item.name).join("、")}`;

  if (elements.filterSummary) {
    elements.filterSummary.textContent = `${meta.title}：${meta.desc} 共 ${visibleItems.length} 項${itemNames}。`;
  }

  scrollToMenuGroup(filter);
}

function currentSelections() {
  const formData = new FormData(elements.customizeForm);
  const item = selectedItem();
  const extraIds = formData.getAll("topping");
  const extras = toppings.filter((topping) => extraIds.includes(topping.id));
  const soup = formData.get("soup") || item.defaultSoup || availableSoupValues(item)[0];

  return {
    base: formData.get("base") || "豆花",
    soup,
    sweetness: formData.get("sweetness") || "正常",
    extras,
    quantity: state.customQty
  };
}

function currentUnitPrice() {
  const item = selectedItem();
  const selections = currentSelections();
  const basePrice = item.prices ? item.prices[selections.soup] || lowestPrice(item) : item.price;
  return basePrice + selections.extras.reduce((sum, topping) => sum + topping.price, 0);
}

function selectedToppingInputs() {
  return [...document.querySelectorAll('input[name="topping"]:checked')];
}

function enforceToppingLimit(changedInput) {
  const selected = selectedToppingInputs();

  if (selected.length <= MAX_TOPPINGS) {
    return true;
  }

  if (changedInput) {
    changedInput.checked = false;
  }

  showToast(`加購配料最多只能選 ${MAX_TOPPINGS} 種`);
  return false;
}

function updateToppingAvailability() {
  const selectedCount = selectedToppingInputs().length;
  const limitReached = selectedCount >= MAX_TOPPINGS;

  document.querySelectorAll('input[name="topping"]').forEach((input) => {
    input.disabled = limitReached && !input.checked;
    input.closest("label").classList.toggle("is-disabled", input.disabled);
  });
}

function defaultSoupForItem(item) {
  const values = availableSoupValues(item);

  if (item.defaultSoup && values.includes(item.defaultSoup)) {
    return item.defaultSoup;
  }

  if (item.category === "soy" && values.includes("soy")) {
    return "soy";
  }

  if (item.category === "sweet" && values.includes("sweet")) {
    return "sweet";
  }

  return values[0] || "sweet";
}

function resetCustomizerForItem(item) {
  state.customQty = 1;

  document.querySelectorAll('input[name="topping"]').forEach((input) => {
    input.checked = false;
    input.disabled = false;
    input.closest("label").classList.remove("is-disabled");
  });

  const baseInput = document.querySelector('input[name="base"][value="豆花"]');
  if (baseInput) {
    baseInput.checked = true;
  }

  const soupValue = defaultSoupForItem(item);
  const soupInput = document.querySelector(`input[name="soup"][value="${soupValue}"]`);
  if (soupInput) {
    soupInput.checked = true;
  }

  const sweetnessInput = document.querySelector('input[name="sweetness"][value="正常"]');
  if (sweetnessInput) {
    sweetnessInput.checked = true;
  }
}

function scrollToCustomizer() {
  const panel = elements.customizerPanel || document.getElementById("customizerPanel");

  if (!panel) {
    return;
  }

  panel.classList.add("is-focused");
  panel.focus({ preventScroll: true });

  window.clearTimeout(scrollToCustomizer.timer);
  scrollToCustomizer.timer = window.setTimeout(() => {
    panel.classList.remove("is-focused");
  }, 1800);
}

function updateSelectedCards() {
  document.querySelectorAll(".menu-card").forEach((card) => {
    const button = card.querySelector("[data-select-item]");
    card.classList.toggle("is-selected", button?.dataset.selectItem === state.selectedId);
  });
}

function selectMenuItem(itemId) {
  const item = menuItems.find((entry) => entry.id === itemId);

  if (!item) {
    return;
  }

  state.selectedId = item.id;
  resetCustomizerForItem(item);
  renderCustomizer();
  updateSelectedCards();
  elements.menuColumn.classList.add("is-customizing");
  showToast(`已選擇 ${item.name}，請設定口味`);

  scrollToCustomizer();
}

function showMenuList() {
  elements.menuColumn.classList.remove("is-customizing");
  elements.menuGrid.focus?.();
}

function renderCustomizer() {
  const item = selectedItem();
  setSoupAvailability(item);

  const unitPrice = currentUnitPrice();

  elements.selectedDishName.textContent = item.name;
  elements.selectedDishDesc.textContent = item.desc;
  elements.selectedDishDot.style.background = item.accent;
  elements.customQty.textContent = state.customQty;
  elements.customizerPrice.textContent = money(unitPrice * state.customQty);
  elements.baseFieldset.hidden = false;
  elements.soupFieldset.hidden = false;
  elements.toppingFieldset.hidden = false;
  updateToppingAvailability();
}

function addSelectedToCart() {
  const item = selectedItem();
  const selections = currentSelections();
  const unitPrice = currentUnitPrice();

  state.cart.push({
    id: lineId(),
    itemId: item.id,
    name: item.name,
    base: selections.base,
    soup: selections.soup ? SOUP_LABELS[selections.soup] : "",
    sweetness: selections.sweetness,
    extras: selections.extras.map((extra) => extra.name),
    unitPrice,
    quantity: selections.quantity
  });

  saveCart();
  renderCart();
  showToast(`${item.name} 已加入訂單`);
}

function cartTotal() {
  return state.cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
}

function cartCount() {
  return state.cart.reduce((sum, item) => sum + item.quantity, 0);
}

function detailText(item) {
  const baseDetails = [item.base, item.soup, item.sweetness].filter(Boolean);
  const extras = item.extras.length ? `加購 ${item.extras.join("、")}` : "無加購配料";
  return `${baseDetails.join(" / ")} / ${extras}`;
}

function renderCart() {
  elements.cartCount.textContent = cartCount();
  elements.cartTotal.textContent = money(cartTotal());

  if (!state.cart.length) {
    elements.cartLines.innerHTML = '<div class="empty-cart">尚未加入餐點</div>';
    saveCart();
    return;
  }

  elements.cartLines.innerHTML = state.cart
    .map(
      (item) => `
        <div class="cart-line">
          <div>
            <strong>${item.name}</strong>
            <small>${detailText(item)}</small>
            <small>${money(item.unitPrice)} / 份</small>
          </div>
          <div class="line-actions" aria-label="${item.name} 數量">
            <button type="button" data-cart-step="-1" data-line-id="${item.id}" aria-label="減少 ${item.name}">-</button>
            <output>${item.quantity}</output>
            <button type="button" data-cart-step="1" data-line-id="${item.id}" aria-label="增加 ${item.name}">+</button>
            <button type="button" data-remove-line="${item.id}" aria-label="移除 ${item.name}">×</button>
          </div>
        </div>
      `
    )
    .join("");

  saveCart();
}

function setToday() {
  const today = nextOpenDate(new Date());
  elements.pickupDate.min = toDateInput(today);
  elements.pickupDate.value = toDateInput(today);
  renderTimeSlots();
}

function toDateInput(date) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function nextOpenDate(date) {
  const next = new Date(date);

  while (next.getDay() === 0) {
    next.setDate(next.getDate() + 1);
  }

  return next;
}

function renderTimeSlots() {
  const selected = new Date(`${elements.pickupDate.value}T00:00:00`);

  if (selected.getDay() === 0) {
    const next = nextOpenDate(selected);
    elements.pickupDate.value = toDateInput(next);
  }

  const selectedDate = elements.pickupDate.value;
  const now = new Date();
  const today = toDateInput(now);
  const minMinutes = selectedDate === today ? now.getHours() * 60 + now.getMinutes() + 15 : 0;
  const start = 10 * 60 + 30;
  const end = 18 * 60 + 15;
  const options = [];

  for (let minutes = start; minutes <= end; minutes += 15) {
    if (minutes < minMinutes) {
      continue;
    }

    const hour = Math.floor(minutes / 60);
    const minute = minutes % 60;
    const label = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
    options.push(`<option value="${label}">${label}</option>`);
  }

  if (!options.length) {
    const tomorrow = nextOpenDate(new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1));
    elements.pickupDate.value = toDateInput(tomorrow);
    elements.pickupTime.innerHTML = '<option value="10:30">10:30</option>';
    return;
  }

  elements.pickupTime.innerHTML = options.join("");
}

function updateLineQuantity(id, delta) {
  const line = state.cart.find((item) => item.id === id);

  if (!line) {
    return;
  }

  line.quantity += delta;

  if (line.quantity <= 0) {
    state.cart = state.cart.filter((item) => item.id !== id);
  }

  renderCart();
}

function removeLine(id) {
  state.cart = state.cart.filter((item) => item.id !== id);
  renderCart();
}

function validateOrder() {
  const fields = [elements.customerName, elements.customerPhone, elements.pickupDate, elements.pickupTime];
  fields.forEach((field) => field.removeAttribute("aria-invalid"));
  elements.formStatus.textContent = "";

  if (!state.cart.length) {
    elements.formStatus.textContent = "請先選擇餐點。";
    showToast("請先選擇餐點");
    return false;
  }

  if (elements.customerName.value.trim().length < 2) {
    elements.customerName.setAttribute("aria-invalid", "true");
    elements.customerName.focus();
    elements.formStatus.textContent = "請填寫姓名。";
    return false;
  }

  if (!/^[0-9+\-\s]{8,}$/.test(elements.customerPhone.value.trim())) {
    elements.customerPhone.setAttribute("aria-invalid", "true");
    elements.customerPhone.focus();
    elements.formStatus.textContent = "請填寫手機號碼。";
    return false;
  }

  if (!elements.pickupDate.value || !elements.pickupTime.value) {
    elements.pickupDate.setAttribute("aria-invalid", "true");
    elements.formStatus.textContent = "請選擇取餐時間。";
    return false;
  }

  return true;
}

function createReceipt() {
  const now = new Date();
  const orderId = `YM-${toDateInput(now).replaceAll("-", "")}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
  const payment = new FormData(elements.pickupForm).get("payment") || "現場付款";
  const lines = state.cart
    .map((item, index) => {
      const subtotal = item.unitPrice * item.quantity;
      return `${index + 1}. ${item.name} x ${item.quantity}
   ${detailText(item)}
   ${money(item.unitPrice)} / 份，小計 ${money(subtotal)}`;
    })
    .join("\n\n");

  return `悠沐手作豆花 陳平店 取餐訂單
訂單編號：${orderId}
送出時間：${now.toLocaleString("zh-TW", { hour12: false })}

顧客：${elements.customerName.value.trim()}
手機：${elements.customerPhone.value.trim()}
取餐：${elements.pickupDate.value} ${elements.pickupTime.value}
付款：${payment}

餐點：
${lines}

合計：${money(cartTotal())}
備註：${elements.orderNote.value.trim() || "無"}`;
}

function submitOrder(event) {
  event.preventDefault();

  if (!validateOrder()) {
    return;
  }

  state.lastReceipt = createReceipt();
  elements.receiptText.textContent = state.lastReceipt;
  elements.receipt.hidden = false;
  elements.formStatus.textContent = "訂單已建立。";
  showToast("訂單小票已建立");
  elements.receipt.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function copyReceipt() {
  if (!state.lastReceipt) {
    return;
  }

  try {
    await navigator.clipboard.writeText(state.lastReceipt);
    showToast("訂單已複製");
  } catch {
    showToast("瀏覽器未開放剪貼簿權限");
  }
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    elements.toast.classList.remove("is-visible");
  }, 2200);
}

function bindEvents() {
  elements.filterTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");

    if (!button) {
      return;
    }

    event.preventDefault();
    setFilter(button.dataset.filter);
  });

  elements.menuGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-select-item]");

    if (!button) {
      return;
    }

    selectMenuItem(button.dataset.selectItem);
  });

  elements.customizeForm.addEventListener("change", (event) => {
    if (event.target.matches('input[name="topping"]')) {
      enforceToppingLimit(event.target);
    }

    renderCustomizer();
  });

  elements.customizeForm.addEventListener("click", (event) => {
    const button = event.target.closest("[data-quantity-step]");

    if (!button) {
      return;
    }

    state.customQty = Math.max(1, Math.min(20, state.customQty + Number(button.dataset.quantityStep)));
    renderCustomizer();
  });

  elements.backToMenu.addEventListener("click", showMenuList);

  elements.customizeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addSelectedToCart();
  });

  elements.cartLines.addEventListener("click", (event) => {
    const stepper = event.target.closest("[data-cart-step]");
    const removeButton = event.target.closest("[data-remove-line]");

    if (stepper) {
      updateLineQuantity(stepper.dataset.lineId, Number(stepper.dataset.cartStep));
    }

    if (removeButton) {
      removeLine(removeButton.dataset.removeLine);
    }
  });

  elements.pickupDate.addEventListener("change", renderTimeSlots);
  elements.pickupForm.addEventListener("submit", submitOrder);
  elements.copyReceipt.addEventListener("click", copyReceipt);
  elements.printReceipt.addEventListener("click", () => window.print());
}

function init() {
  renderToppings();
  renderMenu();
  renderCustomizer();
  renderCart();
  setToday();
  bindEvents();
}

init();
