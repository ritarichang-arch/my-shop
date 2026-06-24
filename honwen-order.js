const PRODUCTS = [
  ["21010058", "HW宏文 AS-20C 實用資料簿20頁(無附內紙) 藍", "本", 55, "detail-7759.html"],
  ["21010059", "HW宏文 AS-40C 實用資料簿40頁(無附內紙) 藍", "本", 78, "detail-7764.html"],
  ["21040045", "HW宏文 WB4R 透明四孔夾 背寬1吋", "個", 77, "detail-899.html"],
  ["21040055", "AS-3RC/S 色板三孔夾 1吋(背寬3.5cm) 黑", "個", null, "detail-8889.html"],
  ["21040055-12", "AS-3RC/S 色板三孔夾 1吋(背寬3.5cm) 1箱12入 黑", "箱", null, "detail-8893.html"],
  ["21040056", "AS-3RC/S 色板三孔夾 1吋(背寬3.5cm) 藍", "個", null, "detail-8891.html"],
  ["21040056-12", "AS-3RC/S 色板三孔夾 1吋(背寬3.5cm) 1箱12入 藍", "箱", null, "detail-8895.html"],
  ["21040057", "AS-3RC/S 色板三孔夾 1吋(背寬3.5cm) 紅", "個", null, "detail-8892.html"],
  ["21040057-12", "AS-3RC/S 色板三孔夾 1吋(背寬3.5cm) 1箱12入 紅", "箱", null, "detail-8896.html"],
  ["21040058", "AS-3RC/S 色板三孔夾 1吋(背寬3.5cm) 綠", "個", null, "detail-8890.html"],
  ["21040058-12", "AS-3RC/S 色板三孔夾 1吋(背寬3.5cm) 1箱12入 綠", "箱", null, "detail-8894.html"],
  ["21060012", "HW宏文 TUS-11 PP中間強力夾+名片套", "個", 75, "detail-902.html"],
  ["21060030", "*CK-11 粉彩中強力夾", "個", null, "detail-4621.html"],
  ["21070016", "HW宏文 TUS-12 PP中間彈簧夾+名片套", "個", 75, "detail-904.html"],
  ["21180021-60", "L型文件套(白色) E310 (L夾) /箱 (厚:0.15mm)", "箱", 1600, "detail-3648.html"],
  ["22050007", "HW宏文 A4 11孔資料袋(薄0.04mm)(100張入)", "包", 80, "detail-53.html"],
  ["80050000", "HW宏文 AS-20C 實用資料簿20頁(無附內紙) 紅", "本", 55, "detail-7760.html"],
  ["80050001", "HW宏文 AS-20C 實用資料簿20頁(無附內紙) 黑", "本", 55, "detail-7758.html"],
  ["80050002", "HW宏文 AS-20C 實用資料簿20頁(無附內紙) 綠", "本", 55, "detail-7761.html"],
  ["80050004", "HW宏文 HB-20 11孔資料簿20頁", "本", null, "detail-896.html"],
  ["80050006", "HW宏文 AS-40C 實用資料簿40頁(無附內紙) 紅", "本", 78, "detail-7765.html"],
  ["80050007", "HW宏文 AS-40C 實用資料簿40頁(無附內紙) 黑", "本", 78, "detail-7763.html"],
  ["80050008", "HW宏文 AS-40C 實用資料簿40頁(無附內紙) 綠", "本", 78, "detail-7766.html"],
  ["80050010", "HW宏文 AS-40C 實用資料簿40頁(無附內紙) 黃", "本", 78, "detail-7767.html"],
  ["80050011", "HW宏文 AS-60C 實用資料簿60頁(無附內紙) 紅", "本", 115, "detail-7770.html"],
  ["80050012", "HW宏文 AS-60C 實用資料簿60頁(無附內紙) 黑", "本", 115, "detail-7768.html"],
  ["80050013", "HW宏文 AS-60C 實用資料簿60頁(無附內紙) 綠", "本", 115, "detail-7771.html"],
  ["80050014", "HW宏文 AS-60C 實用資料簿60頁(無附內紙) 藍", "本", 115, "detail-7769.html"],
  ["80050015", "HW宏文 AS-20C 實用資料簿20頁(無附內紙) 黃", "本", 55, "detail-7762.html"],
  ["80050016", "HW宏文 HB-10 11孔資料簿10頁", "本", 34, "detail-897.html"],
  ["80050021", "HW宏文 AS-60C 實用資料簿60頁(無附內紙) 黃", "本", 115, "detail-7772.html"],
  ["80050026", "HW宏文 HB-30 11孔資料簿30頁", "本", null, "detail-898.html"],
  ["80050033", "FOG-20A 20入果凍色資料簿", "本", null, "detail-11521.html"],
  ["80061101", "HW宏文 A4 11孔資料袋(薄0.04)(50張一包)", "包", 39, "detail-54.html"],
  ["80061102", "HW宏文 A4 11孔資料袋 厚0.08mm(100張一包)", "包", 240, "detail-55.html"],
  ["80070002", "HW宏文 E461 (F118) A4附繩公文袋 黃", "個", null, "detail-6797.html"],
  ["80070003", "HW宏文 E461 (F118) A4附繩公文袋 綠", "個", null, "detail-6796.html"],
  ["80070004-12", "E461 透明白直式附繩公文袋A4 (12入/包)", "包", null, "detail-3656.html"],
  ["80070005", "HW宏文 E356 三層文件套(白) 黃", "打", null, "detail-7756.html"],
  ["80070006", "HW宏文 E356 三層文件套(白) 綠", "打", null, "detail-7755.html"],
  ["80070007", "HW宏文 E356 三層文件套(白) 藍", "打", null, "detail-7753.html"],
  ["80070009", "HW宏文 F08N 情人夾", "個", 42, "detail-905.html"],
  ["80070010", "Q310 桿 (文件套需額外購買) 綠", "支", null, "detail-8649.html"],
  ["80070010-12", "HW宏文 Q桿 12入 綠", "包", null, "detail-7461.html"],
  ["80070011", "Q310 桿 (文件套需額外購買) 藍", "支", null, "detail-8648.html"],
  ["80070011-12", "HW宏文 Q桿 12入 藍", "包", null, "detail-7459.html"],
  ["80070020", "HW宏文 E310 L型文件套(L夾) 紅(厚度0.15mm)", "打", 35, "detail-7750.html"],
  ["80070021", "HW宏文 E310 L型文件套(L夾) 藍(厚度0.15mm)", "打", 35, "detail-7749.html"],
  ["80070022", "HW宏文 E310 L型文件套(L夾) 黃(厚度0.15mm)", "打", 35, "detail-7752.html"],
  ["80070023", "HW宏文 E310 L型文件套(L夾) 綠(厚度0.15mm)", "打", 35, "detail-7751.html"],
  ["80070024", "HW宏文 E356 三層文件套(白) 白", "打", null, "detail-7757.html"],
  ["80070025", "HW宏文 E356 三層文件套(白) 紅", "打", null, "detail-7754.html"],
  ["80070026", "Q310 文件套 (桿子需額外購買) 白色", "打", 39, "detail-8595.html"],
  ["80070027", "Q310 文件套 (桿子需額外購買) 紅色", "打", 39, "detail-8597.html"],
  ["80070028", "Q310 文件套 (桿子需額外購買) 藍色", "打", 39, "detail-8596.html"],
  ["80070029", "Q310 文件套 (桿子需額外購買) 黃色", "打", 39, "detail-8599.html"],
  ["80070030", "Q310 文件套 (桿子需額外購買) 綠色", "打", 39, "detail-8598.html"],
  ["80070032", "Q310 桿 (文件套需額外購買) 紅", "支", null, "detail-8651.html"],
  ["80070032-12", "HW宏文 Q桿 12入 紅", "包", null, "detail-7460.html"],
  ["80070034", "Q310 桿 (文件套需額外購買) 黃", "支", null, "detail-8650.html"],
  ["80070034-12", "HW宏文 Q桿 12入 黃", "包", null, "detail-7462.html"],
  ["80070035", "Q310 桿 (文件套需額外購買) 白", "支", null, "detail-8647.html"],
  ["80070035-12", "HW宏文 Q桿 12入 白", "包", null, "detail-7463.html"],
  ["80070041", "HW宏文 E461 (F118) A4附繩公文袋 藍", "個", null, "detail-6794.html"],
  ["81030001-red", "FOG-2R 果凍(霧面) 二孔夾1吋 紅", "個", null, "detail-8853.html", "81030001"],
  ["81030001-yellow", "FOG-2R 果凍(霧面) 二孔夾1吋 黃", "個", null, "detail-8854.html", "81030001"],
  ["81030001-blue", "FOG-2R 果凍(霧面) 二孔夾1吋 藍", "個", null, "detail-8855.html", "81030001"],
  ["81030001-green", "FOG-2R 果凍(霧面) 二孔夾1吋 綠", "個", null, "detail-8856.html", "81030001"],
  ["81030001-purple", "FOG-2R 果凍(霧面) 二孔夾1吋 紫", "個", null, "detail-8857.html", "81030001"],
  ["81040000", "HW宏文 CK-3RC 粉彩系三孔夾", "個", 75, "detail-50.html"],
  ["81040002", "HW宏文 FOG-4R 霧面四孔夾 3/4吋", "個", 96, "detail-900.html"],
  ["81070019", "HW宏文 AS-11 中強力夾 紅", "個", null, "detail-8205.html"],
  ["81070020", "HW宏文 AS-11 中強力夾 黑", "個", null, "detail-8203.html"],
  ["81070052", "HW宏文 AS-11 中強力夾 綠", "個", null, "detail-8206.html"],
  ["81070053", "HW宏文 CK-11 粉彩右上強力夾", "個", 48, "detail-903.html"],
  ["81070054", "HW宏文 AS-11 中強力夾 藍", "個", null, "detail-8204.html"],
  ["81160001", "HW宏文 橫式A4 壓克力板夾", "個", 57, "detail-906.html"],
  ["81160002", "HW宏文 B5(16K)直式壓克力板夾", "個", 41, "detail-907.html"],
  ["81160003", "HW宏文 T5 A4 直式壓克力板夾", "個", 57, "detail-908.html"],
  ["81160006", "T2 25K 壓克力板夾直", "個", null, "detail-4299.html"],
  ["81160007", "HW宏文 A6直式壓克力板夾", "個", 26, "detail-57.html"]
].map(([id, name, unit, price, path, code]) => ({
  id,
  code: code || id,
  name,
  unit,
  price,
  sourceUrl: `https://www.officego.com.tw/${path}`,
  category: classifyProduct(name)
}));

const state = {
  search: "",
  category: "全部",
  sort: "code",
  cart: loadJson("honwenCart", []),
  customer: loadJson("honwenCustomer", {})
};

const productList = document.querySelector("#productList");
const productTemplate = document.querySelector("#productTemplate");
const cartList = document.querySelector("#cartList");
const cartTemplate = document.querySelector("#cartTemplate");
const cartEmpty = document.querySelector("#cartEmpty");
const categoryFilter = document.querySelector("#categoryFilter");
const searchInput = document.querySelector("#searchInput");
const sortFilter = document.querySelector("#sortFilter");
const orderText = document.querySelector("#orderText");
const customerForm = document.querySelector("#customerForm");

init();

function init() {
  hydrateCustomerForm();
  renderCategoryOptions();
  bindEvents();
  render();
}

function bindEvents() {
  searchInput.addEventListener("input", (event) => {
    state.search = event.target.value.trim();
    renderProducts();
  });

  categoryFilter.addEventListener("change", (event) => {
    state.category = event.target.value;
    renderProducts();
  });

  sortFilter.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderProducts();
  });

  document.querySelector("#clearSearch").addEventListener("click", () => {
    state.search = "";
    state.category = "全部";
    state.sort = "code";
    searchInput.value = "";
    categoryFilter.value = "全部";
    sortFilter.value = "code";
    renderProducts();
  });

  document.querySelector("#clearCart").addEventListener("click", () => {
    state.cart = [];
    saveCart();
    render();
  });

  customerForm.addEventListener("input", () => {
    state.customer = Object.fromEntries(new FormData(customerForm).entries());
    localStorage.setItem("honwenCustomer", JSON.stringify(state.customer));
    renderOrderText();
  });

  document.querySelector("#copyOrder").addEventListener("click", copyOrderText);
  document.querySelector("#downloadCsv").addEventListener("click", downloadCsv);
  document.querySelector("#printOrder").addEventListener("click", () => window.print());
}

function render() {
  document.querySelector("#skuCount").textContent = new Set(PRODUCTS.map((item) => item.code)).size;
  renderProducts();
  renderCart();
  renderOrderText();
}

function renderCategoryOptions() {
  const categories = ["全部", ...new Set(PRODUCTS.map((item) => item.category))].sort((a, b) => {
    if (a === "全部") return -1;
    if (b === "全部") return 1;
    return a.localeCompare(b, "zh-Hant");
  });

  categoryFilter.innerHTML = categories.map((category) => `<option value="${category}">${category}</option>`).join("");
}

function renderProducts() {
  const items = filteredProducts();
  productList.replaceChildren();
  document.querySelector("#resultCount").textContent = `${items.length} 筆`;

  items.forEach((product) => {
    const row = productTemplate.content.firstElementChild.cloneNode(true);
    row.querySelector(".code-badge").textContent = product.code;
    row.querySelector("h3").textContent = product.name;
    row.querySelector(".product-tags").textContent = `${product.category} / ${product.unit} / ${product.price ? "參考價 NT$" + product.price : "待報價"}`;
    row.querySelector(".product-ref").innerHTML = `<a href="${product.sourceUrl}" target="_blank" rel="noopener noreferrer">來源</a>`;

    const qtyInput = row.querySelector("input");
    row.querySelectorAll("[data-step]").forEach((button) => {
      button.addEventListener("click", () => {
        qtyInput.value = Math.max(1, Number(qtyInput.value || 1) + Number(button.dataset.step));
      });
    });
    row.querySelector(".add-button").addEventListener("click", () => {
      addToCart(product.id, Number(qtyInput.value || 1));
      qtyInput.value = 1;
    });
    productList.append(row);
  });
}

function renderCart() {
  cartList.replaceChildren();
  const lines = state.cart.map((line) => ({ ...line, product: PRODUCTS.find((item) => item.id === line.id) })).filter((line) => line.product);
  cartEmpty.hidden = lines.length > 0;

  lines.forEach((line) => {
    const item = cartTemplate.content.firstElementChild.cloneNode(true);
    item.querySelector("strong").textContent = `${line.product.code} x ${line.qty}`;
    item.querySelector("span").textContent = `${line.product.name} / ${line.product.unit}`;
    const qtyInput = item.querySelector("input");
    const noteInput = item.querySelector("textarea");
    qtyInput.value = line.qty;
    noteInput.value = line.note || "";

    qtyInput.addEventListener("input", () => {
      updateCartLine(line.product.id, { qty: Math.max(1, Number(qtyInput.value || 1)) });
    });
    noteInput.addEventListener("input", () => {
      updateCartLine(line.product.id, { note: noteInput.value });
    });
    item.querySelector("button").addEventListener("click", () => {
      removeFromCart(line.product.id);
    });
    cartList.append(item);
  });

  const knownTotal = lines.reduce((sum, line) => sum + (line.product.price || 0) * line.qty, 0);
  const hasUnknown = lines.some((line) => line.product.price === null);
  document.querySelector("#lineCount").textContent = String(lines.length);
  document.querySelector("#unitCount").textContent = String(lines.reduce((sum, line) => sum + line.qty, 0));
  document.querySelector("#orderTotal").textContent = lines.length
    ? `${knownTotal ? "NT$" + knownTotal.toLocaleString("zh-TW") : "待確認"}${hasUnknown ? " + 待報價" : ""}`
    : "待確認";
}

function renderOrderText() {
  const lines = state.cart.map((line) => ({ ...line, product: PRODUCTS.find((item) => item.id === line.id) })).filter((line) => line.product);
  const customer = Object.fromEntries(new FormData(customerForm).entries());
  const now = new Date();
  const content = [
    "宏文文具採購單",
    `建立時間：${now.toLocaleString("zh-TW")}`,
    "",
    "客戶資料",
    `公司/單位：${customer.company || ""}`,
    `統一編號：${customer.taxId || ""}`,
    `聯絡人：${customer.contact || ""}`,
    `電話：${customer.phone || ""}`,
    `希望交期：${customer.needDate || ""}`,
    `配送方式：${customer.delivery || ""}`,
    `收件地址：${customer.address || ""}`,
    `訂單備註：${customer.message || ""}`,
    "",
    "商品明細",
    ...(
      lines.length
        ? lines.map((line, index) => {
            const price = line.product.price ? `參考單價 NT$${line.product.price}` : "單價待確認";
            const note = line.note ? `，備註：${line.note}` : "";
            return `${index + 1}. ${line.product.code} / ${line.product.name} / ${line.qty}${line.product.unit} / ${price}${note}`;
          })
        : ["尚未加入商品"]
    ),
    "",
    "提醒：商品編號與參考價來自公開通路頁面，正式價格、庫存與交期請以供應商回覆為準。"
  ].join("\n");

  orderText.value = content;
}

function filteredProducts() {
  const term = state.search.toLowerCase();
  return PRODUCTS.filter((product) => {
    const text = `${product.code} ${product.name} ${product.category}`.toLowerCase();
    return (!term || text.includes(term)) && (state.category === "全部" || product.category === state.category);
  }).sort((a, b) => {
    if (state.sort === "name") return a.name.localeCompare(b.name, "zh-Hant");
    if (state.sort === "category") return a.category.localeCompare(b.category, "zh-Hant") || a.code.localeCompare(b.code);
    return a.code.localeCompare(b.code, "zh-Hant", { numeric: true });
  });
}

function addToCart(id, qty) {
  const existing = state.cart.find((line) => line.id === id);
  if (existing) {
    existing.qty += Math.max(1, qty);
  } else {
    state.cart.push({ id, qty: Math.max(1, qty), note: "" });
  }
  saveCart();
  render();
}

function updateCartLine(id, patch) {
  const line = state.cart.find((item) => item.id === id);
  if (!line) return;
  Object.assign(line, patch);
  saveCart();
  renderCart();
  renderOrderText();
}

function removeFromCart(id) {
  state.cart = state.cart.filter((line) => line.id !== id);
  saveCart();
  render();
}

async function copyOrderText() {
  try {
    await navigator.clipboard.writeText(orderText.value);
    flashButton("#copyOrder", "已複製");
  } catch {
    orderText.select();
    document.execCommand("copy");
    flashButton("#copyOrder", "已複製");
  }
}

function downloadCsv() {
  const rows = [["商品編號", "品名", "數量", "單位", "參考單價", "備註"]];
  state.cart.forEach((line) => {
    const product = PRODUCTS.find((item) => item.id === line.id);
    if (!product) return;
    rows.push([product.code, product.name, line.qty, product.unit, product.price || "", line.note || ""]);
  });
  const csv = rows.map((row) => row.map(csvCell).join(",")).join("\n");
  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `honwen-order-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(link.href);
}

function hydrateCustomerForm() {
  Object.entries(state.customer).forEach(([key, value]) => {
    const field = customerForm.elements[key];
    if (field) field.value = value;
  });
}

function saveCart() {
  localStorage.setItem("honwenCart", JSON.stringify(state.cart));
}

function loadJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function classifyProduct(name) {
  if (name.includes("資料簿")) return "資料簿";
  if (name.includes("11孔資料袋")) return "資料袋";
  if (name.includes("壓克力板夾")) return "板夾";
  if (name.includes("文件套") || name.includes("L型文件")) return "文件套";
  if (name.includes("公文袋")) return "公文袋";
  if (name.includes("Q桿") || name.includes("Q310 桿")) return "Q桿";
  if (name.includes("強力夾")) return "強力夾";
  if (name.includes("彈簧夾")) return "彈簧夾";
  if (name.includes("孔夾") || name.includes("二孔夾") || name.includes("三孔夾") || name.includes("四孔夾")) return "孔夾";
  return "其他";
}

function csvCell(value) {
  return `"${String(value).replaceAll('"', '""')}"`;
}

function flashButton(selector, text) {
  const button = document.querySelector(selector);
  const original = button.textContent;
  button.textContent = text;
  window.setTimeout(() => {
    button.textContent = original;
  }, 1200);
}
