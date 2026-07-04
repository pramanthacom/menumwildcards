(function () {
  const RESET_SECONDS = 30;
  const REVEAL_DELAY = 1050;
  const AUTO_STOP_DELAY = 5000;
  const body = document.body;
  const startButton = document.getElementById("start-button");
  const stopButton = document.getElementById("stop-button");
  const resetButton = document.getElementById("reset-button");
  const resultActions = document.getElementById("result-actions");
  const instruction = document.getElementById("draw-instruction");
  const countdown = document.getElementById("countdown");
  const chosenCard = document.getElementById("chosen-card");
  const chosenFace = document.getElementById("chosen-face");

  let state = "idle";
  let resetTimer = null;
  let revealTimer = null;
  let autoStopTimer = null;
  let remaining = RESET_SECONDS;

  function secureRandomIndex(length) {
    if (!Number.isInteger(length) || length < 1) throw new Error("Колода пуста");
    const limit = Math.floor(0x100000000 / length) * length;
    const sample = new Uint32Array(1);
    do window.crypto.getRandomValues(sample); while (sample[0] >= limit);
    return sample[0] % length;
  }

  function setState(next) {
    state = next;
    body.dataset.state = next;
  }

  function beginShuffle() {
    if (state !== "idle") return;
    clearTimers();
    setState("shuffling");
    startButton.hidden = true;
    stopButton.hidden = false;
    resultActions.hidden = true;
    chosenCard.setAttribute("aria-hidden", "true");
    instruction.textContent = "Когда почувствуете момент — нажмите яркую кнопку «Стоп».";
    autoStopTimer = window.setTimeout(stopShuffle, AUTO_STOP_DELAY);
    stopButton.focus({ preventScroll: true });
  }

  function stopShuffle() {
    if (state !== "shuffling") return;
    window.clearTimeout(autoStopTimer);
    autoStopTimer = null;
    const deck = window.MENUMDeck;
    const key = deck.keys[secureRandomIndex(deck.keys.length)];
    chosenFace.dataset.cardFace = key;
    deck.renderFace(chosenFace, key);
    setState("revealing");
    stopButton.hidden = true;
    chosenCard.setAttribute("aria-hidden", "false");
    instruction.textContent = "Ваша карта выбрана.";
    revealTimer = window.setTimeout(showResult, REVEAL_DELAY);
  }

  function showResult() {
    setState("result");
    resultActions.hidden = false;
    instruction.innerHTML = '<strong class="instruction-highlight">Сфотографируйте и сохраните свою карту</strong> — она ещё пригодится вам на фестивале.';
    remaining = RESET_SECONDS;
    countdown.textContent = String(remaining);
    resetTimer = window.setInterval(() => {
      remaining -= 1;
      countdown.textContent = String(Math.max(remaining, 0));
      if (remaining <= 0) resetExperience();
    }, 1000);
  }

  function clearTimers() {
    window.clearInterval(resetTimer);
    window.clearTimeout(revealTimer);
    window.clearTimeout(autoStopTimer);
    resetTimer = null;
    revealTimer = null;
    autoStopTimer = null;
  }

  function resetExperience() {
    clearTimers();
    setState("idle");
    startButton.hidden = false;
    stopButton.hidden = true;
    resultActions.hidden = true;
    chosenCard.setAttribute("aria-hidden", "true");
    chosenFace.removeAttribute("data-card-face");
    chosenFace.innerHTML = "";
    instruction.textContent = "Спроси у Вселенной, что ждёт тебя здесь.";
    remaining = RESET_SECONDS;
    countdown.textContent = String(remaining);
    startButton.focus({ preventScroll: true });
  }

  startButton.addEventListener("click", beginShuffle);
  stopButton.addEventListener("click", stopShuffle);
  resetButton.addEventListener("click", resetExperience);

  document.addEventListener("keydown", (event) => {
    if (event.code === "Space" && !event.repeat) {
      event.preventDefault();
      if (state === "idle") beginShuffle();
      else if (state === "shuffling") stopShuffle();
    }
    if (event.code === "Escape" && state !== "idle") resetExperience();
  });
})();
