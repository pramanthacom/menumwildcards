(function () {
  const cards = {
    "01-vstrecha": {
      number: "I",
      title: "Встреча",
      art: "../art/approved/01-vstrecha-v1.png",
      artAlt: "Две фигуры у воды соединяет золотая нить",
      message: "Кто-то здесь ждёт тебя,<br>ещё не зная об этом.",
      qr: "../qr/01-vstrecha-demo.png",
      lead: "Из тысячи людей под этим небом есть те, с кем тебе суждено пересечься именно сейчас.",
      paragraphs: [
        "Не по плану — по притяжению. Сегодня смотри людям в глаза чуть дольше обычного. Где-то в этой толпе танцует человек, после встречи с которым ты уедешь отсюда другим.",
        "Может, вы обменяетесь всего парой слов. Может — целой историей. Узнавание приходит как тепло в груди: не пропусти его."
      ],
      ritualType: "Ритуал дня",
      ritualHeading: "Взгляд возвращается не случайно",
      ritual: "Подойди к тому, на кого взгляд вернулся дважды. Просто скажи: «Мне кажется, мы должны были встретиться».",
      wish: "Загадай встречу, которая останется с тобой после фестиваля.",
      exchange: "Оставь то, чем готов поделиться, и то, что ищешь. Возможно, следующая важная встреча начнётся с обмена."
    },
    "02-dar": {
      number: "II",
      title: "Дар",
      art: "../art/approved/02-dar-v1.png",
      artAlt: "Светящийся дар парит над раскрытыми ладонями",
      message: "Ты приехал сюда не с пустыми руками —<br>даже если так думаешь.",
      qr: "../qr/02-dar-demo.png",
      lead: "У каждого, кто приехал, есть дар, о котором он не догадывается.",
      paragraphs: [
        "Чьё-то умение слушать спасает чужой вечер. Чьё-то объятие — чужую ночь. Чей-то смех развязывает узел, который человек носил месяцами.",
        "Сегодня твой дар выйдет наружу сам — если ты не будешь его прятать. Отдавай не вещи: внимание, тепло, песню, плечо. Здесь это и есть валюта. И она всегда возвращается — другим голосом, в другом месте круга."
      ],
      ritualType: "Ритуал дня",
      ritualHeading: "Подари то, что нельзя положить в карман",
      ritual: "Подари трём людям то, что нельзя положить в карман.",
      wish: "Пожелай, чтобы твой дар нашёл того, кому он нужнее всего.",
      exchange: "Назови свой дар в MENUM — навык, время, помощь или заботу. Возможно, именно его уже ищет другой человек."
    },
    "03-otkrytye-ladoni": {
      number: "III",
      title: "Открытые ладони",
      art: "../art/approved/03-otkrytye-ladoni-v1.png",
      artAlt: "Раскрытые ладони принимают лунный свет",
      message: "Сегодня тебе будут давать.<br>Не отворачивайся.",
      qr: "../qr/03-otkrytye-ladoni-demo.png",
      lead: "Есть люди, которые умеют отдавать бесконечно — и сжимаются, когда мир протягивает что-то им.",
      paragraphs: [
        "Если ты узнал себя, эта карта пришла не случайно. Здесь, в этом кругу, тебя захотят угостить, обнять, выслушать, позвать. Не отвечай «да я в порядке». Прими.",
        "Тот, кто принимает открыто, делает дающему подарок — позволяет его теплу дойти. Обмен случается только там, где обе ладони раскрыты."
      ],
      ritualType: "Ритуал дня",
      ritualHeading: "Позволь себе принять",
      ritual: "Прими всё, что предложат сегодня, — еду, помощь, объятие — не отдавая сразу ничего взамен. Просто скажи «спасибо» и почувствуй.",
      wish: "Научиться принимать так же легко, как дышать.",
      exchange: "Попробуй не только предложить, но и попросить. Расскажи в MENUM, что хотел бы получить, и позволь обмену случиться."
    },
    "04-tanets": {
      number: "IV",
      title: "Танец",
      art: "../art/approved/04-tanets-v1.png",
      artAlt: "Фигура растворяется в цветных потоках танца",
      message: "Твоё тело помнит то,<br>что ты забыл.",
      qr: "../qr/04-tanets-demo.png",
      lead: "Голова приехала сюда с мыслями. Тело — с памятью.",
      paragraphs: [
        "В нём живёт всё непрожитое: радость, которой не дали места, дикость, которую приручили. Танцпол здесь — не сцена. Никто не смотрит, все внутри себя.",
        "Сегодня отдай телу руль. Танцуй некрасиво, странно, медленно, яростно — как просится. В какой-то момент музыка начнёт танцевать тебя. Это и есть тот обмен, ради которого сюда едут: ты отдаёшь контроль — получаешь себя."
      ],
      ritualType: "Ритуал дня",
      ritualHeading: "Отдай телу руль",
      ritual: "Один сет протанцуй с закрытыми глазами, от первого трека до последнего.",
      wish: "Загадай момент, когда ты забудешь, как выглядишь со стороны.",
      exchange: "Обмен — тоже танец: один делает шаг, другой отвечает. Предложи в MENUM то, чем тебе хочется двигаться вместе."
    },
    "05-tishina": {
      number: "V",
      title: "Тишина",
      art: "../art/approved/05-tishina-v1.png",
      artAlt: "Одинокая фигура слушает тишину у большой воды",
      message: "Самое громкое случится с тобой<br>в тишине.",
      qr: "../qr/05-tishina-demo.png",
      lead: "Фестиваль звучит круглые сутки — барабаны, голоса, смех у костров.",
      paragraphs: [
        "Но у него есть второй слой, тихий, и он открывается не всем. Уйди сегодня к воде одна или один. Без телефона, без цели. Сядь. Сначала будет шумно внутри — это нормально, подожди.",
        "Потом всплывёт то, что ты заглушал месяцами: вопрос, ответ, имя, решение. Вода умеет меняться с человеком: ты ей — усталость, она тебе — ясность."
      ],
      ritualType: "Ритуал дня",
      ritualHeading: "Оставь мир за спиной",
      ritual: "Тридцать минут у воды в одиночестве. Отдай воде то, что тяжело. Молча.",
      wish: "Пожелай услышать то, что давно пытается докричаться до тебя шёпотом.",
      exchange: "В тишине яснее слышно, чего не хватает. Сформулируй в MENUM один честный запрос — без объяснений и оправданий."
    },
    "06-ogon": {
      number: "VI",
      title: "Огонь",
      art: "../art/approved/06-ogon-v1.png",
      artAlt: "Костёр превращает искры в звёзды",
      message: "В тебе есть пламя, которое<br>ты бережёшь слишком осторожно.",
      qr: "../qr/06-ogon-demo.png",
      lead: "Огонь не спрашивает разрешения гореть. А ты — спрашиваешь. Слишком давно.",
      paragraphs: [
        "Эта карта о страсти, которую ты приглушил: к делу, к человеку, к жизни. Здесь, у костров и на танцполах, твоё пламя начнёт отзываться на чужое — так огонь перекидывается с ветки на ветку.",
        "Позволь. Спой громче, чем прилично. Скажи то, что жжёт. Обними того, к кому тянет. Огонь, которым делятся, не гаснет — он растёт."
      ],
      ritualType: "Ритуал дня",
      ritualHeading: "Скажи огню правду",
      ritual: "Вечером у костра скажи вслух — хоть шёпотом, хоть в пламя — чего ты хочешь на самом деле.",
      wish: "Попроси смелости не тушить себя, когда вернёшься домой.",
      exchange: "Дай своему огню форму: предложи в MENUM дело, идею или умение, которыми тебе по-настоящему хочется делиться."
    },
    "07-obyatie": {
      number: "VII",
      title: "Объятие",
      art: "../art/approved/07-obyatie-v1.png",
      artAlt: "Два силуэта встречаются в тёплом объятии",
      message: "Кому-то здесь сегодня нужно<br>ровно твоё тепло.",
      qr: "../qr/07-obyatie-demo.png",
      lead: "Мы недообнимаем друг друга катастрофически. Носим тепло в себе, как нераспечатанные письма.",
      paragraphs: [
        "Здесь — можно. Здесь объятие не нужно объяснять. Сегодня обрати внимание на того, кто держится чуть в стороне, у кого глаза просят, а голос молчит. Подойди. Спроси: «Тебя можно обнять?»",
        "Это самый честный обмен на свете: ты отдаёшь тепло — получаешь доверие. Иногда одно объятие меняет человеку весь фестиваль. Иногда — тебе."
      ],
      ritualType: "Ритуал дня",
      ritualHeading: "Семь объятий до полуночи",
      ritual: "Семь объятий до полуночи. Минимум три — с теми, кого видишь впервые.",
      wish: "Объятие, после которого станет легче дышать.",
      exchange: "Иногда поддержкой тоже можно меняться. Оставь в MENUM предложение, после которого кому-то станет теплее и легче."
    },
    "25-golos": {
      number: "XXV",
      title: "Голос",
      art: "../art/approved/25-golos-v1.png",
      artAlt: "Золотой голос расходится кругами в ночном лесу",
      message: "В тебе звучит то, что просится наружу.<br>Где-то здесь ходит Эхо.",
      qr: "../qr/25-golos-demo.png",
      pair: { title: "Эхо", side: "right" },
      lead: "Эта карта — половинка. Вторая ходит по фестивалю в чьём-то телефоне и называется «Эхо».",
      paragraphs: [
        "В тебе давно зреет что-то, что просится быть сказанным, спетым, выкрикнутым — а ты всё откладываешь, потому что не было того, кто услышит по-настоящему.",
        "Он здесь. Спрашивай людей: «Какая у тебя карта?» — пока не услышишь: «Эхо». Это не обязательно роман и не обязательно дружба навек. Это встреча, у которой есть назначение: при этом человеке у тебя получится прозвучать."
      ],
      ritualType: "Ритуал двоих",
      ritualHeading: "Найди своё Эхо",
      ritual: "Найди своё Эхо. Скажи или спой ему то, что давно носишь. Его дело — просто услышать. До конца.",
      wish: "Пожелай, чтобы тебя услышали по-настоящему, без поправки на вежливость.",
      exchange: "Голос ищет того, кто услышит. Расскажи в MENUM, что хочешь передать миру, и какой отклик надеешься встретить."
    }
  };

  function faceMarkup(card) {
    const pairEdge = card.pair ? `
      <div class="pair-edge pair-edge-${card.pair.side}">
        <span>Парная карта</span><i></i><b>Ищи «${card.pair.title}»</b>
      </div>` : "";
    return `
      <img class="print-art" src="${card.art}" alt="${card.artAlt}">
      <div class="print-overlay"></div>
      <div class="print-frame"></div>
      ${pairEdge}
      <div class="print-brand" aria-label="MENUM и Wild Ecstatic Dance Festival">
        <span>MENUM</span><i></i><span>WILD ECSTATIC · 2026</span>
      </div>
      <header class="print-title">
        <span class="print-number">${card.number}</span>
        <h1>${card.title}</h1>
        <div class="print-rule"><i></i></div>
      </header>
      <blockquote class="print-message">${card.message}</blockquote>
      <section class="qr-dock" aria-label="Полная трактовка по QR-коду">
        <div class="qr-copy">
          <span class="qr-kicker">Полная трактовка по QR</span>
          <strong>Открой свою<br>карту в MENUM</strong>
          <small>menum.space</small>
        </div>
        <svg class="qr-arrow" viewBox="0 0 64 34" aria-hidden="true">
          <path d="M4 17 H54"></path>
          <path d="M46 9 L54 17 L46 25"></path>
        </svg>
        <div class="qr-tile">
          <img src="${card.qr}" alt="QR-код карты ${card.title}">
        </div>
      </section>`;
  }

  function readingMarkup(card) {
    const paragraphs = card.paragraphs.map((text) => `<p>${text}</p>`).join("");
    return `
      <img class="unfolded-art" src="${card.art}" alt="">
      <div class="unfolded-shade"></div>
      <div class="unfolded-frame"></div>
      <div class="unfolded-watermark">${card.number}</div>
      <div class="unfolded-content">
        <header class="unfolded-head">
          <h2>${card.title}</h2>
          <div class="unfolded-rule"><i></i></div>
        </header>
        <div class="interpretation">
          <p class="lead">${card.lead}</p>
          ${paragraphs}
        </div>
        <div class="card-divider"><span>✦</span></div>
        <section class="long-ritual">
          <span class="long-kicker">${card.ritualType}</span>
          <h3>${card.ritualHeading}</h3>
          <p>${card.ritual}</p>
        </section>
        <section class="long-wish">
          <span class="long-kicker">Загадай</span>
          <p>${card.wish}</p>
        </section>
        <section class="long-exchange">
          <div class="exchange-seal"><img src="../brand/menum-logo-source.png" alt="MENUM"></div>
          <div>
            <span class="long-kicker">Продолжить в MENUM</span>
            <p>${card.exchange}</p>
              <a class="long-link" href="https://menum.space/profile">Предложить обмен <b>→</b></a>
          </div>
        </section>
        <footer class="unfolded-footer">
          <span>MENUM</span><i></i><span>Wild Ecstatic · 2026</span>
        </footer>
      </div>`;
  }

  document.querySelectorAll("[data-card-face]").forEach((element) => {
    const card = cards[element.dataset.cardFace];
    if (card) {
      element.classList.toggle("is-pair", Boolean(card.pair));
      element.classList.toggle("has-long-title", card.title.length > 12);
      element.innerHTML = faceMarkup(card);
    }
  });

  document.querySelectorAll("[data-card-reading]").forEach((element) => {
    const card = cards[element.dataset.cardReading];
    if (card) {
      element.classList.toggle("has-long-title", card.title.length > 12);
      element.innerHTML = readingMarkup(card);
    }
  });
})();
