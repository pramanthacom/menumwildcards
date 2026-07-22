(function () {
  const REVEAL_DELAY = 1050;
  const AUTO_STOP_DELAY = 5000;
  const body = document.body;
  const drawStage = document.querySelector(".draw-stage");
  const deckElement = document.getElementById("deck");
  const startButton = document.getElementById("start-button");
  const stopButton = document.getElementById("stop-button");
  const resetButton = document.getElementById("reset-button");
  const resultActions = document.getElementById("result-actions");
  const instruction = document.getElementById("draw-instruction");
  const chosenCard = document.getElementById("chosen-card");
  const chosenFace = document.getElementById("chosen-face");

  let state = "idle";
  let revealTimer = null;
  let autoStopTimer = null;
  let deckPointerHandled = false;

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
    instruction.textContent = "Когда почувствуешь момент, нажимай Стоп";
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
    instruction.textContent = "Ваша карта выбрана";
    revealTimer = window.setTimeout(showResult, REVEAL_DELAY);
  }

  function handleDeckAction(event) {
    if (event.type === "click" && deckPointerHandled) {
      deckPointerHandled = false;
      return;
    }
    if (event.type === "pointerdown") deckPointerHandled = true;
    if (state !== "idle" && state !== "shuffling") return;
    event.preventDefault();
    event.stopPropagation();
    if (state === "idle") beginShuffle();
    else stopShuffle();
  }

  function stopShuffleFromStage(event) {
    if (state !== "shuffling") return;
    event.preventDefault();
    stopShuffle();
  }

  function showResult() {
    setState("result");
    resultActions.hidden = false;
    instruction.textContent = "Сфотографируйте и сохраните свою карту — она ещё пригодится вам на фестивале";
  }

  function clearTimers() {
    window.clearTimeout(revealTimer);
    window.clearTimeout(autoStopTimer);
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
    instruction.textContent = "Спроси у Вселенной, что ждёт тебя здесь";
    startButton.focus({ preventScroll: true });
  }

  startButton.addEventListener("click", beginShuffle);
  stopButton.addEventListener("click", stopShuffle);
  deckElement.addEventListener("click", handleDeckAction);
  deckElement.addEventListener("pointerdown", handleDeckAction);
  drawStage.addEventListener("pointerdown", stopShuffleFromStage);
  resetButton.addEventListener("click", resetExperience);

  document.addEventListener("keydown", (event) => {
    if (event.code === "Space" && !event.repeat) {
      event.preventDefault();
      if (state === "idle") beginShuffle();
      else if (state === "shuffling") stopShuffle();
    }
    if (event.code === "Escape" && state !== "idle") resetExperience();
  });

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js", { updateViaCache: "none" }).catch((error) => {
        console.warn("Не удалось подготовить офлайн-режим", error);
      });
    });
  }
})();
