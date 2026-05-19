const puzzles = [
  {
    name: "入門 01",
    puzzle: "530070000600195000098000060800060003400803001700020006060000280000419005000080079",
    solution: "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
  },
  {
    name: "標準 01",
    puzzle: "000260701680070090190004500820100040004602900050003028009300074040050036703018000",
    solution: "435269781682571493197834562826195347374682915951743628519326874248957136763418259",
  },
  {
    name: "進階 01",
    puzzle: "300000000005009000200504000020000700160000058704310600000890100000067080000005437",
    solution: "341786925875239461296514873523648719169972358784351692657893142432167589918425437",
  },
];

const playerNames = {
  1: "玩家 A",
  2: "玩家 B",
};

const state = {
  puzzleIndex: 0,
  activePlayer: 1,
  selectedNumber: "1",
  boards: {
    1: Array(81).fill(""),
    2: Array(81).fill(""),
  },
};

const boardEls = {
  1: document.querySelector("#board1"),
  2: document.querySelector("#board2"),
};

const scoreEls = {
  1: document.querySelector("#score1"),
  2: document.querySelector("#score2"),
};

const puzzleName = document.querySelector("#puzzleName");
const activePlayer = document.querySelector("#activePlayer");
const selectedNumber = document.querySelector("#selectedNumber");
const message = document.querySelector("#message");
const numberButtons = document.querySelectorAll("[data-number]");

function currentPuzzle() {
  return puzzles[state.puzzleIndex];
}

function resetBoards() {
  state.boards = {
    1: Array(81).fill(""),
    2: Array(81).fill(""),
  };
}

function visibleValueFor(player, index) {
  const puzzle = currentPuzzle();
  const clue = puzzle.puzzle[index];

  if (clue !== "0") {
    return { value: clue, className: "clue" };
  }

  const ownValue = state.boards[player][index];
  if (ownValue) {
    return {
      value: ownValue,
      className: ownValue === puzzle.solution[index] ? "own-correct" : "own-wrong",
    };
  }

  const opponent = player === 1 ? 2 : 1;
  if (state.boards[opponent][index]) {
    return { value: "*", className: "masked" };
  }

  return { value: "", className: "empty" };
}

function createBoards() {
  [1, 2].forEach((player) => {
    boardEls[player].innerHTML = "";
    for (let index = 0; index < 81; index += 1) {
      const cell = document.createElement("button");
      cell.className = "cell";
      cell.type = "button";
      cell.dataset.index = index;
      cell.dataset.player = player;
      cell.setAttribute("aria-label", `${playerNames[player]} 第 ${index + 1} 格`);
      cell.addEventListener("click", () => placeNumber(player, index));
      boardEls[player].append(cell);
    }
  });
}

function placeNumber(player, index) {
  state.activePlayer = player;

  if (currentPuzzle().puzzle[index] !== "0") {
    message.textContent = "題目給的數字不能修改。";
    render();
    return;
  }

  state.boards[player][index] = state.selectedNumber;
  const placed = state.selectedNumber;

  if (!placed) {
    message.textContent = `${playerNames[player]} 已清除這格。`;
  } else if (placed === currentPuzzle().solution[index]) {
    message.textContent = `${playerNames[player]} 填對了，對手那邊會看到 *。`;
  } else {
    message.textContent = `${playerNames[player]} 這格目前不是 ${placed}，可以再修正。`;
  }

  render();
  checkWinner(player);
}

function render() {
  const puzzle = currentPuzzle();
  puzzleName.textContent = puzzle.name;
  activePlayer.textContent = playerNames[state.activePlayer];
  selectedNumber.textContent = state.selectedNumber || "清除";

  numberButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.number === state.selectedNumber);
  });

  [1, 2].forEach((player) => {
    const cells = boardEls[player].querySelectorAll(".cell");
    cells.forEach((cell, index) => {
      const visible = visibleValueFor(player, index);
      cell.textContent = visible.value;
      cell.className = `cell ${visible.className}`;
    });

    const clues = [...puzzle.puzzle].filter((value) => value !== "0").length;
    const correct = state.boards[player].filter((value, index) => value && value === puzzle.solution[index]).length;
    scoreEls[player].textContent = `${clues + correct} / 81`;
  });
}

function checkWinner(player) {
  const puzzle = currentPuzzle();
  const solved = state.boards[player].every((value, index) => {
    return puzzle.puzzle[index] !== "0" || value === puzzle.solution[index];
  });

  if (solved) {
    message.textContent = `${playerNames[player]} 完成數獨，獲勝！`;
    window.alert(`${playerNames[player]} 完成數獨，獲勝！`);
  }
}

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.selectedNumber = button.dataset.number;
    message.textContent = "選好數字後，點玩家 A 或玩家 B 的空格。";
    render();
  });
});

document.querySelector("#nextPuzzle").addEventListener("click", () => {
  state.puzzleIndex = (state.puzzleIndex + 1) % puzzles.length;
  resetBoards();
  message.textContent = "已換到下一題。";
  render();
});

document.querySelector("#restartPuzzle").addEventListener("click", () => {
  resetBoards();
  message.textContent = "已重新開始這一題。";
  render();
});

createBoards();
render();
