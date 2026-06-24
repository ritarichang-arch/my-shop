const tests = [
  {
    type: "palette",
    title: "四色找不同",
    instruction: "看四個色塊，選出跟其他三個最不一樣的顏色位置。",
    answer: "第 3 個",
    choices: ["第 1 個", "第 2 個", "第 3 個", "第 4 個"],
    riskKey: "color",
    palette: {
      mode: "odd",
      colors: ["#4f9c70", "#579f74", "#c86f58", "#559d72"],
      labels: ["1", "2", "3", "4"]
    }
  },
  {
    type: "palette",
    title: "相近色配對",
    instruction: "上方是目標色。下面三個選項中，哪一個最接近目標色？",
    answer: "B",
    choices: ["A", "B", "C", "看起來都差不多"],
    riskKey: "color",
    palette: {
      mode: "match",
      target: "#7b6fc7",
      colors: ["#5c8fc0", "#766bc5", "#b07552"],
      labels: ["A", "B", "C"]
    }
  },
  {
    type: "palette",
    title: "亮度與顏色分辨",
    instruction: "這三個色塊明暗接近，但色相不同。哪一個偏黃色？",
    answer: "第 2 個",
    choices: ["第 1 個", "第 2 個", "第 3 個", "看不出來"],
    riskKey: "color",
    palette: {
      mode: "odd",
      colors: ["#83a7a2", "#c9ad52", "#7ea1ad"],
      labels: ["1", "2", "3"]
    }
  },
  {
    type: "amsler",
    title: "中央視野巡邏",
    instruction: "遮住一眼，盯著中央紅色十字。方格線是否有扭曲、缺角、黑影或中心看不清楚？兩眼請分別觀察。",
    answer: "線條都直，沒有缺角或黑影",
    choices: ["線條都直，沒有缺角或黑影", "有扭曲、缺角或黑影", "不確定"],
    riskKey: "macula"
  },
  {
    type: "amsler",
    title: "邊線小巡查",
    instruction: "盯著中央紅色十字，不要追著線看。你是否覺得某些方格線忽粗忽細、波浪狀或局部消失？",
    answer: "沒有，線條看起來穩定",
    choices: ["沒有，線條看起來穩定", "有波浪或局部消失", "不確定"],
    riskKey: "macula"
  },
  {
    type: "contrast",
    title: "霧光辨識",
    instruction: "這關模擬低對比與眩光情境。選出卡片中最淡的英文字母組合。",
    answer: "C9A",
    choices: ["C9A", "G8H", "看不清楚"],
    riskKey: "cataract"
  },
  {
    type: "contrast",
    title: "夜間眩光挑戰",
    instruction: "在偏亮的眩光背景中，選出最淡那一列的數字。",
    answer: "528",
    choices: ["528", "582", "看不清楚"],
    riskKey: "cataract",
    code: "528"
  }
];

const state = {
  index: 0,
  score: 0,
  answers: []
};

const intro = document.querySelector("#intro");
const game = document.querySelector("#game");
const results = document.querySelector("#results");
const startButton = document.querySelector("#startButton");
const restartButton = document.querySelector("#restartButton");
const stepLabel = document.querySelector("#stepLabel");
const testTitle = document.querySelector("#testTitle");
const scoreLabel = document.querySelector("#scoreLabel");
const progressBar = document.querySelector("#progressBar");
const visualZone = document.querySelector("#visualZone");
const instructionText = document.querySelector("#instructionText");
const choices = document.querySelector("#choices");
const nextButton = document.querySelector("#nextButton");
const resultTitle = document.querySelector("#resultTitle");
const resultGrid = document.querySelector("#resultGrid");

startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  state.index += 1;
  if (state.index >= tests.length) {
    showResults();
    return;
  }
  renderTest();
});

function startGame() {
  state.index = 0;
  state.score = 0;
  state.answers = [];
  intro.hidden = true;
  results.hidden = true;
  game.hidden = false;
  renderTest();
}

function renderTest() {
  const test = tests[state.index];
  stepLabel.textContent = `任務 ${state.index + 1} / ${tests.length}`;
  testTitle.textContent = test.title;
  scoreLabel.textContent = state.score;
  progressBar.style.width = `${(state.index / tests.length) * 100}%`;
  instructionText.textContent = test.instruction;
  choices.innerHTML = "";
  visualZone.innerHTML = "";
  nextButton.hidden = true;

  if (test.type === "palette") renderPaletteTest(test.palette);
  if (test.type === "amsler") renderAmslerGrid();
  if (test.type === "contrast") renderContrastCard(test.code);

  test.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.type = "button";
    button.textContent = choice;
    button.addEventListener("click", () => chooseAnswer(button, choice));
    choices.append(button);
  });
}

function chooseAnswer(button, choice) {
  const test = tests[state.index];
  const correct = choice === test.answer;
  state.answers.push({ key: test.riskKey, correct, choice });
  if (correct) state.score += 1;
  scoreLabel.textContent = state.score;
  progressBar.style.width = `${((state.index + 1) / tests.length) * 100}%`;

  [...choices.children].forEach((item) => {
    item.disabled = true;
    if (item.textContent === test.answer) item.classList.add("correct");
  });
  if (!correct) button.classList.add("wrong");
  nextButton.hidden = false;
  nextButton.textContent = state.index === tests.length - 1 ? "看結果" : "下一題";
}

function renderPaletteTest(palette) {
  const board = document.createElement("div");
  board.className = `palette-board ${palette.mode}`;

  if (palette.target) {
    const target = document.createElement("div");
    target.className = "target-swatch";
    target.innerHTML = `<span>目標色</span><strong style="background:${palette.target}"></strong>`;
    board.append(target);
  }

  const swatches = document.createElement("div");
  swatches.className = "swatch-grid";
  palette.colors.forEach((color, index) => {
    const item = document.createElement("div");
    item.className = "swatch-card";
    item.innerHTML = `<strong style="background:${color}"></strong><span>${palette.labels[index]}</span>`;
    swatches.append(item);
  });

  board.append(swatches);
  visualZone.append(board);
}

function renderAmslerGrid() {
  const grid = document.createElement("div");
  grid.className = "amsler";
  visualZone.append(grid);
}

function renderContrastCard(code = "C9A") {
  const card = document.createElement("div");
  card.className = "blur-card";
  card.innerHTML = `
    <div class="contrast-row"><span>高對比</span><strong>R4K</strong></div>
    <div class="contrast-row"><span>中對比</span><strong style="color: rgba(24, 33, 47, 0.56)">M2T</strong></div>
    <div class="contrast-row"><span>低對比</span><strong class="contrast-code">${code}</strong></div>
  `;
  visualZone.append(card);
}

function showResults() {
  game.hidden = true;
  results.hidden = false;
  const misses = state.answers.filter((answer) => !answer.correct);
  const hasRisk = misses.length > 0;
  resultTitle.textContent = hasRisk ? "有幾項需要多留意" : "三項觀察都很順利";
  resultGrid.innerHTML = "";

  const summaries = [
    {
      key: "color",
      title: "色覺",
      ok: "色覺辨識任務答對。",
      risk: "色覺任務沒有答對。若平常也常分不清紅綠、紫藍或顏色深淺，建議做正式色覺檢查。"
    },
    {
      key: "macula",
      title: "黃斑部觀察",
      ok: "Amsler 方格回報沒有扭曲或缺損。",
      risk: "你回報方格有扭曲、缺角、黑影或不確定。這是需要眼科評估的訊號，尤其建議單眼分別確認。"
    },
    {
      key: "cataract",
      title: "白內障相關線索",
      ok: "低對比辨識任務答對。",
      risk: "低對比或眩光情境辨識不順。若日常有視線霧霧、夜間眩光、畏光或眼鏡度數常變，建議檢查水晶體狀況。"
    }
  ];

  summaries.forEach((summary) => {
    const missed = misses.some((answer) => answer.key === summary.key);
    const card = document.createElement("article");
    card.className = "result-card";
    card.innerHTML = `<strong>${summary.title}</strong><p>${missed ? summary.risk : summary.ok}</p>`;
    resultGrid.append(card);
  });
}
