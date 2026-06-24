const taskType = document.querySelector("#taskType");
const taskText = document.querySelector("#taskText");
const feedback = document.querySelector("#feedback");
const timeLeft = document.querySelector("#timeLeft");
const limitRange = document.querySelector("#limitRange");
const limitLabel = document.querySelector("#limitLabel");
const restScreen = document.querySelector("#restScreen");
const musicButton = document.querySelector("#musicButton");
const calmButton = document.querySelector("#calmButton");
const toys = [...document.querySelectorAll(".toy")];

const tasks = [
  {
    type: "注意力",
    text: "找一個會轉的東西",
    match: (toy) => toy.dataset.tags.includes("spin")
  },
  {
    type: "分類",
    text: "找一個圓圓的東西",
    match: (toy) => toy.dataset.tags.includes("round")
  },
  {
    type: "控制力",
    text: "看到星星不要點，找洗衣機",
    match: (toy) => toy.dataset.name === "洗衣機"
  },
  {
    type: "聽指令",
    text: "找電風扇，讓它轉一下",
    match: (toy) => toy.dataset.name === "電風扇"
  },
  {
    type: "分類",
    text: "找不會轉的書本",
    match: (toy) => toy.dataset.name === "書本"
  },
  {
    type: "記憶",
    text: "先點洗衣機，再點時鐘",
    sequence: ["洗衣機", "時鐘"]
  },
  {
    type: "記憶",
    text: "先點車輪，再點球",
    sequence: ["車輪", "球"]
  }
];

let activeTask = tasks[0];
let sequenceIndex = 0;
let audioContext;
let masterGain;
let musicTimer;
let calmMode = false;
let remainingSeconds = 5 * 60;
let countdownTimer;

function pickTask() {
  activeTask = tasks[Math.floor(Math.random() * tasks.length)];
  sequenceIndex = 0;
  taskType.textContent = activeTask.type;
  taskText.textContent = activeTask.text;
  feedback.textContent = "慢慢看，找到再點。";
  clearMarks();
}

function clearMarks() {
  toys.forEach((toy) => {
    toy.classList.remove("correct", "miss");
  });
}

function markToy(toy, className) {
  toy.classList.add(className);
  setTimeout(() => toy.classList.remove(className), 650);
}

function spinToy(toy) {
  if (!toy.classList.contains("spinny")) return;
  toy.classList.add("is-spinning");
  setTimeout(() => toy.classList.remove("is-spinning"), calmMode ? 1400 : 950);
}

function handleToyClick(toy) {
  clearMarks();

  if (activeTask.sequence) {
    const expected = activeTask.sequence[sequenceIndex];
    if (toy.dataset.name === expected) {
      markToy(toy, "correct");
      spinToy(toy);
      playChime(620);
      sequenceIndex += 1;
      if (sequenceIndex >= activeTask.sequence.length) {
        feedback.textContent = "完成順序了。";
        setTimeout(pickTask, 900);
      } else {
        feedback.textContent = `對了，下一個找${activeTask.sequence[sequenceIndex]}。`;
      }
      return;
    }
    markToy(toy, "miss");
    feedback.textContent = `先找${expected}。`;
    playChime(240);
    return;
  }

  if (activeTask.match(toy)) {
    markToy(toy, "correct");
    spinToy(toy);
    feedback.textContent = `找到了：${toy.dataset.name}。`;
    playChime(660);
    setTimeout(pickTask, 900);
  } else {
    markToy(toy, "miss");
    feedback.textContent = "差一點，再看一次任務。";
    playChime(260);
  }
}

function ensureAudio() {
  if (audioContext) return;
  audioContext = new AudioContext();
  masterGain = audioContext.createGain();
  masterGain.gain.value = Number(document.querySelector("#volumeRange").value) / 100;
  masterGain.connect(audioContext.destination);
}

function playTone(frequency, duration = 0.22) {
  if (!audioContext || !masterGain) return;
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  osc.type = calmMode ? "sine" : "triangle";
  osc.frequency.value = frequency;
  gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.14, audioContext.currentTime + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + duration);
  osc.connect(gain);
  gain.connect(masterGain);
  osc.start();
  osc.stop(audioContext.currentTime + duration + 0.02);
}

function playChime(base) {
  ensureAudio();
  playTone(base, 0.16);
  setTimeout(() => playTone(base * 1.5, 0.18), 130);
}

function startMusic() {
  ensureAudio();
  const notes = calmMode ? [392, 440, 523, 440] : [392, 494, 587, 659, 587, 494];
  let index = 0;
  clearInterval(musicTimer);
  musicTimer = setInterval(() => {
    playTone(notes[index % notes.length], calmMode ? 0.3 : 0.2);
    index += 1;
  }, calmMode ? 720 : 520);
  musicButton.textContent = "暫停音樂";
}

function stopMusic() {
  clearInterval(musicTimer);
  musicTimer = null;
  musicButton.textContent = "開始音樂";
}

function startCountdown() {
  clearInterval(countdownTimer);
  remainingSeconds = Number(limitRange.value) * 60;
  updateTime();
  countdownTimer = setInterval(() => {
    remainingSeconds -= 1;
    updateTime();
    if (remainingSeconds <= 0) showRest();
  }, 1000);
}

function updateTime() {
  const minutes = String(Math.floor(Math.max(remainingSeconds, 0) / 60)).padStart(2, "0");
  const seconds = String(Math.max(remainingSeconds, 0) % 60).padStart(2, "0");
  timeLeft.textContent = `${minutes}:${seconds}`;
}

function showRest() {
  stopMusic();
  clearInterval(countdownTimer);
  restScreen.hidden = false;
}

toys.forEach((toy) => {
  toy.addEventListener("click", () => handleToyClick(toy));
});

document.querySelector("#newTaskButton").addEventListener("click", pickTask);
document.querySelector("#restButton").addEventListener("click", showRest);
document.querySelector("#resumeButton").addEventListener("click", () => {
  restScreen.hidden = true;
  startCountdown();
  pickTask();
});

musicButton.addEventListener("click", () => {
  if (musicTimer) {
    stopMusic();
  } else {
    startMusic();
  }
});

calmButton.addEventListener("click", () => {
  calmMode = !calmMode;
  calmButton.classList.toggle("primary", calmMode);
  feedback.textContent = calmMode ? "柔和模式已開啟。" : "柔和模式已關閉。";
});

document.querySelector("#volumeRange").addEventListener("input", (event) => {
  if (masterGain) {
    masterGain.gain.value = Number(event.target.value) / 100;
  }
});

limitRange.addEventListener("input", () => {
  limitLabel.textContent = `${limitRange.value} 分鐘`;
  startCountdown();
});

pickTask();
startCountdown();
