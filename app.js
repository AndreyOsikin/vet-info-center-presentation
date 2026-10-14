"use strict";
const icons = {
  shield: '<path d="M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6z"/><path d="m8 12 3 3 5-6"/>',
  data: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 4 16 4 16 0V5M4 10c0 4 16 4 16 0M4 15c0 4 16 4 16 0"/>',
  chart: '<path d="M4 20V12h4v8M10 20V7h4v13M16 20V3h4v17"/>',
  people:
    '<circle cx="12" cy="6" r="3"/><circle cx="4" cy="9" r="2"/><circle cx="20" cy="9" r="2"/><path d="M7 21v-6a5 5 0 0 1 10 0v6M1 20v-5a3 3 0 0 1 5-2M23 20v-5a3 3 0 0 0-5-2"/>',
  document: '<path d="M5 2h10l5 5v15H5zM15 2v6h5M8 12h8M8 16h8"/>',
  monitor:
    '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M12 17v5M6 22h12M6 12v-3M11 12V7M16 12V5"/>',
  building: '<path d="m2 7 10-5 10 5H2M4 10v9M9 10v9M15 10v9M20 10v9M2 21h20"/>',
  farm: '<path d="m2 11 10-9 10 9M4 10v12h16V10M9 22v-9h6v9M8 7h8"/>',
  vet: '<circle cx="12" cy="6" r="4"/><path d="M3 22v-5c0-5 18-5 18 0v5M7 12v5c0 4 6 4 6 0v-5M17 18v4M15 20h4"/>',
  gear: '<path d="m10 2-1 4-4-1-3 4 3 3-2 4 4 3 3-2 2 5 5-1v-4l4-2-1-5-4-1-1-5z"/><circle cx="12" cy="12" r="3"/>',
  bell: '<path d="M5 16h14l-2-4V8a5 5 0 0 0-10 0v4zM9 20h6M12 1v2"/>',
  search: '<circle cx="10" cy="10" r="7"/><path d="m15 15 7 7"/>',
  check: '<path d="m4 12 5 5L21 5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 6v7l5 3"/>',
  link: '<circle cx="5" cy="12" r="3"/><circle cx="18" cy="5" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8 11 7-5M8 13l7 5"/>',
  brain:
    '<path d="M12 3C6-1 4 5 4 7c-5 3-2 8 1 9 0 6 7 7 7 2V3m0 0c6-4 8 2 8 4 5 3 2 8-1 9 0 6-7 7-7 2M5 8l4 3M4 15l4-2M19 8l-4 3M20 15l-4-2"/>',
  light: '<path d="M8 18v-2a7 7 0 1 1 8 0v2M8 19h8M10 22h4M12 0v2M0 9h3M21 9h3"/>',
  upload: '<path d="M6 18H4a4 4 0 0 1-1-8 6 6 0 0 1 12-3 5 5 0 0 1 6 9h-3M12 22V11m-4 4 4-4 4 4"/>',
  table: '<rect x="2" y="3" width="20" height="18" rx="2"/><path d="M2 9h20M2 15h20M9 3v18M15 3v18"/>',
  refresh: '<path d="M21 9a9 9 0 0 0-16-3L2 9m0-6v6h6M3 15a9 9 0 0 0 16 3l3-3m0 6v-6h-6"/>',
  send: '<path d="m2 3 20 9-20 9 4-9zM6 12h16"/>',
  cow: '<path d="M5 8h11l4-3 2 3-2 4h-3v7M6 19V8L3 5M7 13h10M9 13v6M14 13v6"/>',
  pin: '<path d="M12 22s8-9 8-14a8 8 0 0 0-16 0c0 5 8 14 8 14z"/><circle cx="12" cy="8" r="3"/>',
  alert: '<path d="m12 2 11 20H1zM12 8v6M12 18v1"/>',
  milk: '<path d="M8 2h8v5l3 4v11H5V11l3-4zM8 5h8M5 12h14"/>',
  truck:
    '<path d="M2 5h12v12H2zM14 10h5l3 4v3h-8"/><circle cx="6" cy="19" r="3"/><circle cx="18" cy="19" r="3"/>',
  play: '<path d="m7 3 14 9-14 9z"/>',
  files: '<path d="M5 2h11l5 5v12H5zM2 5v17h15M16 2v5h5M8 11h10M8 15h10"/>',
  chat: '<path d="M2 3h20v14H9l-6 5v-5H2zM6 8h12M6 12h8"/>',
};
const icon = (name, small = false) =>
  `<div class="orb${small ? " small" : ""}" aria-hidden="true"><svg viewBox="0 0 24 24">${icons[name] || icons.document}</svg></div>`;
icons.expert = icons.vet;
icons.approve = icons.check;
icons.report = icons.document;
const image = (name, alt = "", classes = "", eager = false) =>
  `<img class="${classes}" src="assets/${name}.webp?v=5" alt="${alt}" loading="${eager ? "eager" : "lazy"}" decoding="async">`;
const reveal = (html, i = 0) => `<div class="reveal" style="--i:${i}">${html}</div>`;
const callout = (name, text, extra = "") =>
  `<div class="callout glass reveal" style="--i:7">${icon(name)}<div class="message">${text}</div>${extra}</div>`;
const listRow = (name, text, check = false) =>
  `<div class="list-row reveal">${icon(name)}<div>${text}</div>${check ? '<span class="check">✓</span>' : ""}</div>`;
const card = (html, cls = "", i = 0) =>
  `<div class="card glass reveal ${cls}" style="--i:${i}">${html}</div>`;
const flow = (items) =>
  `<div class="flow">${items.map(([name, title, desc = ""], i) => card(`<span class="step-no">${i + 1}</span>${icon(name)}<h3>${title}</h3>${desc ? `<p>${desc}</p>` : ""}`, "", i + 2)).join("")}</div>`;
const miniFlow = (items) =>
  `<div class="mini-flow">${items.map(([name, title, desc = ""], i) => `<div class="mini-step reveal" style="--i:${i + 2}">${icon(name)}<b>${title}</b>${desc ? `<p>${desc}</p>` : ""}</div>`).join("")}</div>`;
const checks = (items) =>
  `<div class="checklist">${items.map((x) => `<div><span class="check">✓</span>${x}</div>`).join("")}</div>`;
function hub(nodes, center = "Управление<br>на основе<br>данных") {
  const positions = ["top", "left", "right", "bottom-left", "bottom-right"];
  return `<div class="hub"><div class="hub-center">${icon("chart")}<div>${center}</div></div>${nodes.map(([name, title, desc = ""], i) => `<div class="hub-node glass reveal ${positions[i]}" style="--i:${i + 2}">${icon(name, true)}<div><h3>${title}</h3>${desc ? `<p>${desc}</p>` : ""}</div></div>`).join("")}</div>`;
}
const screens = [
  {
    title: "Информационный центр",
    ey: "",
    cls: "hero nature",
    content: () =>
      `${image("logos", "Агроинтеллект и герб Управления ветеринарии из оригинальной презентации", "hero-logos reveal", true)}<div class="hero-copy glass reveal"><h1>Информационный центр<br>Управления ветеринарии<br>Ленинградской области</h1><div class="rule"></div><p>Цифровой контур для мониторинга,<br>отчётности и управленческих решений</p></div><div class="hero-visual">${image("map", "Карта Ленинградской области из презентации", "hero-map", true)}<svg class="map-wires" viewBox="0 0 660 490" aria-hidden="true"><path d="M340 70 Q240 220 185 310 T430 390M150 230 Q400 150 545 330M430 40 Q500 290 260 435"/><circle cx="340" cy="70" r="5"/><circle cx="185" cy="310" r="5"/><circle cx="430" cy="390" r="5"/><circle cx="545" cy="330" r="5"/></svg><div class="hero-metric glass reveal" style="--i:3"><small>Поголовье КРС</small><div class="metric-line"><b>24 892</b><span>▲ +12%</span></div><svg class="line-chart" viewBox="0 0 300 90" aria-hidden="true"><path d="M5 75 48 73 90 57 135 54 177 37 222 32 268 11"/>${[
        [5, 75],
        [48, 73],
        [90, 57],
        [135, 54],
        [177, 37],
        [222, 32],
        [268, 11],
      ]
        .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3"/>`)
        .join(
          "",
        )}</svg></div><div class="hero-donut glass reveal" style="--i:5"><h3>Ветеринарные мероприятия</h3><div class="donut-row"><div class="donut"><b>92%</b></div><div class="legend"><div>Профилактика</div><div>Диагностика</div><div>Вакцинация</div></div></div></div><div class="hero-epiz glass reveal" style="--i:7"><h3>Эпизоотическая ситуация</h3><div class="epi-map"><i style="left:30%;top:25%"></i><i></i><i></i><i></i></div></div></div><div class="hero-hint reveal" style="--i:8">ОТ ОТЧЁТНОСТИ — К УПРАВЛЕНИЮ НА ОСНОВЕ ДАННЫХ</div>`,
  },
  {
    title: "Ветеринарная служба — безопасность региона",
    ey: "02",
    cls: "nature",
    custom: true,
    content: () =>
      `<div class="safety-layout"><div class="safety-copy reveal"><p class="eyebrow">02</p><h2>Ветеринарная<br>служба —<br><span>один из контуров<br>безопасности<br>региона</span></h2><p class="lead">Здоровые животные,<br>безопасная продукция<br>и устойчивое развитие<br>агропромышленного комплекса<br>Ленинградской области.</p></div><div class="grid two safety-grid">${[
        ["shield", "Эпизоотическое<br>благополучие", "Предупреждение и ликвидация болезней животных"],
        ["milk", "Безопасность<br>продукции", "Ветеринарная безопасность продукции животного происхождения"],
        ["people", "Защита<br>населения", "Предупреждение болезней, общих для человека и животных"],
        [
          "chart",
          "Экономическая<br>стабильность АПК",
          "Сохранение поголовья и производственного потенциала региона",
        ],
      ]
        .map(([n, t, p], i) =>
          card(
            `<span class="number">0${i + 1}</span>${icon(n)}<h3>${t}</h3><p>${p}</p>${image(`safety-${i}`, ["Животноводство", "Молочная продукция", "Домашние животные", "Сельское хозяйство"][i], "photo")}<span class="arrow">→</span>`,
            "safety-card",
            i + 1,
          ),
        )
        .join("")}</div></div>`,
  },
  {
    title: "Цифровизация АПК — управление на основе данных",
    ey: "03 · Государственный курс",
    cls: "nature",
    custom: true,
    content: () =>
      `<div class="body"><div class="hub-layout"><div class="hub-copy reveal"><p class="eyebrow">ГОСУДАРСТВЕННЫЙ КУРС</p><h2>Цифровизация<br>АПК —<br><span>уже не про бумагу<br>в электронном<br>виде</span></h2><p class="lead">Переход к управлению<br>на основе данных — приоритет<br>государства и реальный инструмент<br>развития ветеринарной службы региона.</p></div>${hub(
        [
          ["gear", "Автоматизация", "Единые процессы и меньше ручной работы"],
          ["link", "Интеграция систем", "Единый цифровой контур"],
          ["data", "Большие данные", "Комплексный анализ по региону"],
          ["chart", "Машинное обучение", "Анализ тенденций и раннее выявление отклонений"],
          ["brain", "Искусственный интеллект", "Выявление рисков и прогнозирование"],
        ],
      )}</div><div class="source-strip glass reveal">${icon("building", true)}<div><b>Национальная цель —<br>цифровая трансформация</b><small>Указ Президента РФ № 309 от 07.05.2024 · по материалам презентации</small></div>${icon("building", true)}<div><b>Цифровая трансформация АПК<br>до 2030 года</b><small>Государственный курс · по материалам презентации</small></div></div></div>`,
  },
  {
    title: "Почему оперативность данных имеет значение",
    ey: "4. Почему оперативность данных имеет значение",
    heading: "Кто раньше видит изменение —<br><span>тот раньше может на него отреагировать</span>",
    content: () =>
      `<div class="body">${flow([
        ["bell", "Событие"],
        ["data", "Данные"],
        ["search", "Выявление<br>отклонения"],
        ["expert", "Проверка<br>специалистом"],
        ["approve", "Управленческое<br>решение"],
        ["gear", "Действие"],
      ])}</div>${callout("chart", "Чем короче этот путь — <strong>тем выше управляемость.</strong>")}`,
  },
  {
    title: "С чего началась наша история",
    ey: "С чего началась наша история",
    heading: "1 августа 2025 года<br><span>началась совместная работа</span>",
    content: () =>
      `<div class="body"><div class="row"><div class="history-info">${card(`<p>На основании соглашения:</p><h3>${icon("document", true)}№ АГ-22/2025 от 01.08.2025</h3>`)}${card(`<p>Первый этап</p><h3>${icon("monitor", true)}Онлайн-ферма Агроинтеллект</h3>`, "", 2)}</div><div class="history-doc reveal"><div class="calendar glass"><b>АВГУСТ 2025</b><div class="calendar-grid">${Array.from({ length: 12 }, (_, i) => `<i>${i === 0 ? "1" : ""}</i>`).join("")}</div></div><div class="paper"><i></i><i></i><i></i><i></i><div class="signature" aria-hidden="true"><svg viewBox="0 0 180 60"><path d="M6 45c35-65 24 20 45-18s8 42 27 4 15 19 39 0 9 12 47-10"/></svg></div><span class="check">✓</span></div></div></div>${flow(
        [
          ["people", "Подключить<br>хозяйства"],
          ["data", "Автоматически<br>получать данные"],
          ["document", "Передавать их<br>Управлению"],
        ],
      )}</div>`,
  },
  {
    title: "Первый подход не масштабировался",
    ey: "6. Первый подход не масштабировался",
    heading: "За первые 3 месяца —<br><span>1 подключённое хозяйство</span>",
    content: () =>
      `<div class="body"><div class="split">${card(
        `<div class="soft-list">${[
          ["people", "Встречи"],
          ["monitor", "Демонстрации"],
          ["building", "Семинары"],
          ["document", "Письма Управления"],
          ["upload", "Бесплатный доступ"],
        ]
          .map((x) => listRow(...x))
          .join("")}</div>`,
      )}<div class="giant-one glass reveal" style="--i:2"><b>1</b><h3>хозяйство</h3></div></div></div>${callout("light", "Полноценную региональную систему невозможно построить,<p>если её полнота зависит от добровольного подключения каждого хозяйства.</p>")}`,
  },
  {
    title: "Управленческое решение: меняем саму модель",
    ey: "7. Управленческое решение: меняем саму модель",
    heading: "",
    content: () =>
      `<div class="body"><div class="split"><div class="switch-copy glass reveal">Не цифровизировать<br>отдельные хозяйства<div class="down">↓</div><span class="blue">Цифровизировать<br>саму ветеринарную<br>службу</span></div>${hub(
        [
          ["building", "Управление ветеринарии"],
          ["building", "СББЖ"],
          ["vet", "Ветеринарные врачи"],
          ["cow", "Хозяйства"],
          ["report", "Региональные данные"],
        ],
        "Единый<br>цифровой<br>контур",
      )}</div></div>`,
  },
  {
    title: "Проектирование через реальные процессы",
    ey: "",
    heading: "Мы не стали придумывать<br>ветеринарную службу за ветеринаров",
    content: () =>
      `<div class="body"><div class="process-input"><div class="process-column">${[
        ["people", "Встречи<br>с руководством Управления"],
        ["building", "Работа<br>с начальниками СББЖ"],
        ["approve", "Интервью<br>с ветеринарными врачами"],
      ]
        .map((x) => listRow(...x))
        .join(
          "",
        )}</div><div class="process-core glass reveal" style="--i:3">${icon("document")}Проектирование<br>через реальные<br>процессы</div><div class="process-column">${[
        ["vet", "Работа<br>с эпизоотологами"],
        ["people", "Опрос<br>сотрудников"],
        ["link", "Анализ<br>реальных процессов"],
      ]
        .map((x) => listRow(...x))
        .join("")}</div></div></div>`,
  },
  {
    title: "Главный вывод: время специалистов",
    ey: "И получили, пожалуй, главный вывод",
    heading: "Ветеринарная служба работает<br>на высоком профессиональном уровне",
    content: () =>
      `<div class="body"><h3 class="blue reveal" style="font-size:29px">Но значительная часть времени специалистов уходит на работу с данными</h3>${flow(
        [
          ["document", "Бумажные<br>акты"],
          ["files", "Ручной<br>перенос"],
          ["table", "Сведение<br>таблиц"],
          ["files", "Дублирование<br>данных"],
          ["data", "Разные<br>информационные источники"],
        ],
      )}<p class="manual-note reveal">Это забирает время квалифицированных специалистов, которое может быть направлено<br>на выполнение их основных профессиональных задач.</p></div><div class="time-emphasis reveal"><div class="time-value"><small>до</small><strong>30–50<span>%</span></strong><b>рабочего времени</b></div><p>По результатам проведённого анализа в проектном отчёте было зафиксировано: до 30–50% рабочего времени может уходить на перенос данных, сведение отчётности и дублирование информации.<br><small>По материалам презентации.</small></p></div>`,
  },
  {
    title: "Миссия проекта",
    ey: "Миссия проекта",
    heading: "Не создать ещё одну систему<br>ради самой системы",
    cls: "mission",
    content: () =>
      `<div class="body"><h3 class="blue reveal" style="font-size:42px">А:</h3><div class="grid four">${[
        ["clock", '<span class="blue">Освободить</span><br>время<br>специалиста'],
        ["document", '<span class="blue">Убрать</span><br>повторный<br>ручной ввод'],
        ["report", '<span class="blue">Упростить</span><br>отчётность'],
        ["monitor", '<span class="blue">Дать Управлению</span><br>оперативную<br>картину региона'],
      ]
        .map(([name, title], i) => card(`${icon(name)}<h3>${title}</h3>`, "", i + 1))
        .join(
          "",
        )}</div></div>${callout("people", "<strong>Не заменить человека.</strong><br>Убрать у человека то, что может делать система.")}`,
  },
  {
    title: "Ферма → СББЖ → Управление",
    ey: "11. От одного хозяйства — к региональному контуру",
    heading: "Ферма <span>→</span> СББЖ <span>→ Управление</span>",
    cls: "nature",
    content: () =>
      `<div class="body"><div class="flow role-flow">${[
        ["ЛК Фермы", "Первичные сведения"],
        ["ЛК СББЖ", "Проверка и профессиональный контроль"],
        ["ЛК Управления", "Региональная консолидация и аналитика"],
      ]
        .map(([title, desc], i) =>
          card(
            `<div class="role-head"><b>0${i + 1}</b><div><h3>${title}</h3><p>${desc}</p></div></div>${image(`role-${i}`, ["Ферма: первичные данные", "СББЖ: профессиональная проверка", "Управление: региональная аналитика"][i], "photo")}`,
            "role-card",
            i + 1,
          ),
        )
        .join(
          "",
        )}</div></div>${callout("refresh", "Данные вводятся один раз<br><strong>и используются многократно</strong>")}`,
  },
  {
    title: "Сегодня это уже рабочая среда",
    ey: "12. Что мы создали вместе",
    heading: "Сегодня это уже <span>рабочая среда</span>",
    cls: "nature",
    content: () =>
      `<div class="body"><div class="feature-title reveal"><span class="tag solid">РАБОТАЕТ</span></div><div class="feature-layout glass reveal"><div class="soft-list">${[
        ["monitor", "ЛК Управления"],
        ["approve", "ЛК СББЖ"],
        ["farm", "ЛК Фермы"],
      ]
        .map((x) => listRow(...x, true))
        .join("")}</div><div class="soft-list">${[
        ["cow", "Монитор поголовья"],
        ["chart", "Отчёт по воспроизводству КРС"],
        ["document", "Акты ВСО"],
        ["chart", "Дисциплина отчётности"],
      ]
        .map((x) => listRow(...x, true))
        .join("")}</div><div class="soft-list">${[
        ["refresh", "Выбытие и причины выбытия"],
        ["clock", "Контроль актуальности"],
        ["people", "Пользовательская активность"],
      ]
        .map((x) => listRow(...x, true))
        .join(
          "",
        )}</div></div></div>${callout("bell", "Это уже не пилот «Онлайн-фермы».<br><strong>Это другой продукт, построенный совместно с вами<br>под задачи ветеринарной службы региона.</strong>")}`,
  },
  {
    title: "Воспроизводство КРС: контроль без повторного ввода",
    ey: "13. Как меняется конкретный процесс",
    heading: "Воспроизводство <span>КРС</span>",
    cls: "nature",
    content: () =>
      `${image("cows", "Коровы из оригинала", "cows-detail")}<p class="lead reveal" style="max-width:1030px">Конкретный пример того, как цифровой контур сокращает ручную работу<br>и сохраняет профессиональный контроль СББЖ.</p><div class="body"><div class="process-compare">${card(
        `<div class="compare-header"><b>БЫЛО</b><p>Фрагментированный процесс<br>и многократный перенос данных</p></div>${miniFlow(
          [
            ["farm", "Хозяйство"],
            ["send", "Телефон /<br>e-mail / Excel"],
            ["shield", "СББЖ"],
            ["document", "Ручная<br>сводка"],
            ["building", "Управление"],
            ["document", "Повторная<br>сводка"],
          ],
        )}`,
      )}${card(
        `<div class="compare-header after"><b>СТАЛО</b><p>Единый цифровой процесс<br>с профессиональным контролем</p></div><div class="after">${miniFlow(
          [
            ["monitor", "ЛК Фермы", "Ввод данных о воспроизводстве"],
            ["vet", "СББЖ проверяет", "Профессиональный контроль данных"],
            ["check", "Согласовать / Отклонить", "Принятие решения специалистом"],
            ["chart", "Управление", "Получает согласованные данные"],
          ],
        )}</div>`,
        "",
        2,
      )}</div></div>${callout("refresh", "СББЖ сохраняет контроль<br><strong>Система убирает повторный перенос</strong><p>Данные вводятся один раз, проверяются специалистом и становятся частью региональной аналитики.</p>")}`,
  },
  {
    title: "Одни данные работают несколько раз",
    ey: "14. Данные перестают быть только отчётностью",
    heading: "Одни данные начинают<br><span>работать несколько раз</span>",
    cls: "nature",
    content: () =>
      `<div class="body"><div class="dashboard-grid">${[
        ["cow", "Поголовье"],
        ["chart", "Динамика"],
        ["document", "Дисциплина"],
        ["chart", "Выбытие"],
        ["document", "Причины выбытия"],
        ["document", "Акты ВСО"],
      ]
        .map(([name, title], i) =>
          card(
            `<div class="dashboard-title">${icon(name)}<h3>${title}</h3><span class="live-dot" aria-hidden="true"></span></div>${image(`dashboard-${i}`, `Дашборд «${title}» из исходной презентации`)}`,
            "dashboard-card",
            i + 1,
          ),
        )
        .join(
          "",
        )}</div></div>${callout("data", "Сколько? <strong>→ Где? → Почему? → Куда обратить внимание?</strong>")}`,
  },
  {
    title: "Что получает регион",
    ey: "15. Что получает регион",
    heading: "Ценность <span>—</span> не в количестве<br><span>функций</span>",
    content: () =>
      `<div class="body"><div class="grid two">${[
        ["cow", "СББЖ", "Меньше рутины — больше времени на ветеринарную работу"],
        ["monitor", "УПРАВЛЕНИЕ", "Оперативная единая картина вместо множества файлов"],
        ["vet", "РУКОВОДИТЕЛЬ", "Возможность быстрее видеть отклонения и направлять внимание"],
        ["pin", "РЕГИОН", "Повышение управляемости и устойчивости ветеринарного контура"],
      ]
        .map(([name, title, desc], i) =>
          card(`${icon(name)}<div><h3>${title}</h3><p>${desc}</p></div>`, "value-card", i + 1),
        )
        .join(
          "",
        )}</div></div>${callout("clock", "Ценность системы — в <strong>освобождении времени,<br>прозрачности данных и качестве управленческих решений.</strong>")}`,
  },
  {
    title: "У оперативности есть экономическая цена",
    ey: "16. Слайд специально для Комитета финансов",
    heading: "У оперативности есть <span>экономическая цена</span>",
    cls: "nature economy",
    content: () =>
      `<div class="body"><div class="split">${card(
        `<div class="economy-head">${icon("alert", true)}<div><h3>ПОТЕНЦИАЛЬНЫЙ УЩЕРБ</h3><p>при неблагоприятной ситуации</p></div></div><div class="soft-list">${[
          ["cow", "Выбытие животных"],
          ["milk", "Недополученная продукция"],
          ["vet", "Лечение / исследования / дезинфекция"],
          ["truck", "Ограничения и простой"],
          ["chart", "Вторичные производственные потери"],
        ]
          .map((x) => listRow(...x))
          .join(
            "",
          )}</div><svg class="loss-chart" viewBox="0 0 170 200" aria-hidden="true"><path d="M0 10 40 40 60 28 100 90 125 100 165 185"/></svg>`,
        "loss",
      )}${card(
        `<div class="economy-head">${icon("gear", true)}<h3>РОЛЬ ЦИФРОВОГО КОНТУРА</h3></div><div class="soft-list">${[
          ["search", "<b>Раньше увидеть</b> отклонение"],
          ["approve", "<b>Раньше</b> проверить"],
          ["people", "<b>Быстрее направить</b><br>внимание и ресурсы"],
          ["chart", "<b>Сократить</b> потенциальный<br>масштаб последствий"],
        ]
          .map((x) => listRow(...x))
          .join("")}</div>`,
        "",
        2,
      )}</div></div>${callout("refresh", "<p>Информационный центр не диагностирует заболевание вместо ветеринарного специалиста.</p><strong>Его экономическая ценность — сокращать управленческую задержку<br>и повышать адресность реагирования.</strong>")}`,
  },
  {
    title: "Иллюстративный финансовый сценарий",
    ey: "17. Финансовый калькулятор — резервный экран",
    heading: "Иллюстративный <span>сценарий</span>",
    content: () =>
      `<h3 class="blue reveal" style="font-size:36px">Предприятие: 1 000 голов КРС</h3><div class="body"><div class="scenario-layout"><div class="soft-list"><table class="scenario-table glass reveal"><thead><tr><th>Предотвращённое выбытие</th><th>При условной стоимости 200 тыс. ₽/голову</th></tr></thead><tbody><tr><td>10 голов</td><td>2,0 млн ₽</td></tr><tr><td>25 голов</td><td>5,0 млн ₽</td></tr><tr><td>50 голов</td><td>10,0 млн ₽</td></tr></tbody></table><div class="scenario-note glass reveal">${icon("document")}<div><b>И это только <span class="blue">условная стоимость животных.</span></b><p style="font-size:22px;margin-top:10px">Не включены:</p><ul><li>недополученное молоко;</li><li>лечение;</li><li>лабораторные исследования;</li><li>дезинфекция;</li><li>простой;</li><li>карантинные ограничения;</li><li>вторичные производственные последствия.</li></ul></div></div></div><div class="scenario-art reveal"><div class="financial-symbol">₽ ↗</div><div class="financial-bars">${[90, 145, 205, 245].map((h, i) => `<i style="height:${h}px;--i:${i}"></i>`).join("")}</div>${icon("cow")}</div></div></div><div class="chat-support glass reveal">Иллюстративный расчёт, не оценка фактического предотвращённого ущерба проекта. Перед официальным использованием стоимость головы и сценарные параметры необходимо согласовать.</div>`,
  },
  {
    title: "Что автоматизируем следующим — 2-ВЕТ",
    ey: "18. Что автоматизируем следующим — 2-ВЕТ",
    heading: "Пусть машина переносит данные.<br><span>Специалист должен их проверять.</span>",
    cls: "workflow18",
    content: () =>
      `<span class="tag solid reveal" style="position:absolute;top:47px;right:67px">⚙ В РАБОТЕ</span><div class="body">${image("report", "Интерфейс отчёта 2-ВЕТ из оригинала", "report-photo")}<div class="card glass current reveal"><div class="compare-header"><b>СЕЙЧАС</b><p>Много ручной работы и повторного ввода</p></div>${miniFlow(
        [
          ["files", "Файлы", "от хозяйств / СББЖ"],
          ["document", "Ручная сводка", "проверка и обработка"],
          ["table", "Повторный ввод", "в формат отчёта"],
          ["document", "2-ВЕТ", "формирование отчёта"],
        ],
      )}</div><div class="card glass target after reveal" style="--i:3"><div class="compare-header after"><b>ЦЕЛЕВОЙ ПРОЦЕСС</b><p>Автоматизация переноса и структурирования данных</p></div>${miniFlow(
        [
          ["files", "Файлы", "от хозяйств / СББЖ"],
          ["upload", "Загрузка", "в систему"],
          ["document", "Автоматическое чтение", "распознавание и проверка данных"],
          ["data", "Структурирование", "приведение к структуре 2-ВЕТ"],
          ["vet", "Проверка", "специалистом СББЖ / Управления"],
          ["document", "2-ВЕТ", "формирование отчёта"],
        ],
      )}</div></div>${callout("approve", "Меньше ручной работы.<br><strong>Выше точность и скорость подготовки отчётности.</strong><p>Те же данные используются для управления, аналитики и официальной отчётности.</p>")}`,
  },
  {
    title: "Интеграции: единый цифровой контур",
    ey: "19. Интеграции",
    heading: "Если государство уже знает<br>эти данные — <span>зачем человеку<br>вводить их повторно?</span>",
    content: () =>
      `<div class="body"><div class="grid four integrations-grid">${[
        [
          "ХОРРИОТ",
          "Интеграция с системой ХОРРИОТ",
          "Обмен данными по идентификации, перемещениям и событиям.",
          "В работе",
          "",
        ],
        [
          "ГОЗНАК<br>INFOPET",
          "Интеграция с Гознак / INFOPET",
          "Обмен данными по маркировке и учёту животных.",
          "На обсуждении",
          "amber",
        ],
        [
          "СЕЛЭКС<br>ПЛИНОР",
          "Интеграция с СЕЛЭКС / ПЛИНОР",
          "Обмен данными по племенному учёту и продуктивности.",
          "Ожидаем другую сторону",
          "orange",
        ],
        [
          "ДРУГИЕ<br>ГИС",
          "Подключение других государственных систем",
          "Расширение интеграций по мере развития нормативных требований и задач региона.",
          "Перспектива",
          "purple",
        ],
      ]
        .map(([brand, title, desc, status, cls], i) =>
          card(
            `${image(`integration-${i}`, "Оригинальный визуал интеграции", "integration-photo")}<div class="integration-mark">${image(`brand-${i}`, brand.replaceAll("<br>", " "), "integration-logo")}</div><h3>${title}</h3><p>${desc}</p><span class="tag ${cls}">${status}</span>`,
            "",
            i + 1,
          ),
        )
        .join(
          "",
        )}</div></div>${callout("refresh", "Единый цифровой контур<br><strong>сокращает дублирование, повышает точность данных<br>и экономит время специалистов.</strong>", checks(["Автоматический обмен данными", "Единые источники информации", "Актуальные данные в системе"]))}`,
  },
  {
    title: "Сначала данные. Потом — интеллект.",
    ey: "20. Роль искусственного интеллекта",
    custom: true,
    content: () =>
      `<p class="eyebrow reveal">20. Роль искусственного интеллекта</p><div class="ai-header reveal"><h2>Сначала данные.<br>Потом — <span>интеллект.</span></h2><div class="ai-tip glass">${icon("light")}<div>Искусственный интеллект даёт <strong class="blue">реальную ценность только на основе качественных, полных и связанных данных.</strong></div></div></div><div class="body"><div class="ai-steps">${[
        ["monitor", "Оцифровать<br>процесс", "Перевести ключевые ветеринарные процессы в систему"],
        ["data", "Структурировать<br>данные", "Единые справочники, правила и стандарты ввода"],
        ["link", "Связать<br>источники", "Объединить данные СББЖ, Управления и внешних систем"],
        ["gear", "Автоматизировать<br>рутину", "Загрузка данных, проверки, сводки и отчётность"],
        ["chart", "Накопить<br>историю", "Достоверные данные за длительный период времени"],
      ]
        .map(([n, t, d], i) =>
          card(`<div class="step-no">${i + 1}</div>${icon(n)}<h3>${t}</h3><p>${d}</p>`, "", i + 1),
        )
        .join(
          "",
        )}${card(`${image("ai-brain", "AI — оригинальная иллюстрация")}<h3>AI</h3><p>Анализировать,<br>прогнозировать<br>и помогать принимать<br>управленческие решения</p>`, "ai-final", 7)}</div></div>${callout("chart", "Надёжные данные сегодня —<br><strong>больше возможностей завтра</strong>", checks(["Постепенное развитие функционала", "Практическая ценность на каждом этапе", "Готовая база для внедрения AI"]))}`,
  },
  {
    title: "AI-технология: систему можно будет спрашивать",
    ey: "21. Показываем работающую AI-технологию",
    heading: "Систему можно будет не только смотреть<br><span>её можно будет спрашивать</span>",
    content: () =>
      `<div class="reveal" style="margin-top:-5px"><span class="tag">◉ ПЕРСПЕКТИВА ДЛЯ ИНФОРМАЦИОННОГО ЦЕНТРА</span></div><div class="body"><div class="chat-layout"><div class="soft-list">${[
        ["vet", "Ветврач:", "«Что требует моего внимания?»"],
        ["chart", "Управление:", "«Почему выросло выбытие?»"],
      ]
        .map(([n, t, d], i) => card(`${icon(n)}<div><h3>${t}</h3><p>${d}</p></div>`, "question-card", i + 1))
        .join(
          "",
        )}</div><div class="chat-panel glass reveal" style="--i:3"><div class="chat-top">${image("ai-bot", "AI-ассистент из презентации")}<div><b>Чем могу помочь?</b><p>Задайте вопрос о ситуации<br>на фермах, репродукции или показателях.</p></div></div><div class="chat-bubble">Какие районы требуют внимания?</div><div class="chat-answer">По текущим данным, выделены<br>следующие ключевые сигналы: <span class="typing" aria-hidden="true"><i></i><i></i><i></i></span></div><div class="grid three answer-grid">${[
        ["Приоритетные сигналы", ["Рост выбытия", "Подозрения на болезнь", "Снижение продуктивности"]],
        ["Отклонения по районам", ["Район А · +24%", "Район Б · +18%", "Район В · +11%"]],
        ["Факторы роста выбытия", ["Заболевания", "Нарушение условий содержания", "Возрастная структура"]],
      ]
        .map(
          ([t, ls]) =>
            `<div class="card"><b>${t}</b><ul>${ls.map((l) => `<li>${l}</li>`).join("")}</ul></div>`,
        )
        .join(
          "",
        )}</div><div class="chat-input"><span>Задайте любой вопрос…</span><span>➤</span></div></div><div class="soft-list">${[
        ["shield", "СББЖ:", "«Где есть отклонения?»"],
        ["vet", "Начальник Управления:", "«Какие районы требуют внимания?»"],
      ]
        .map(([n, t, d], i) => card(`${icon(n)}<div><h3>${t}</h3><p>${d}</p></div>`, "question-card", i + 5))
        .join(
          "",
        )}</div></div></div><div class="chat-support glass reveal">Это не функция, которая сегодня уже работает в вашем кабинете.<br><strong class="blue">Это технология, которая уже работает в другом нашем продукте</strong> и которую мы рассматриваем<br>как следующий этап здесь. Демонстрационный пример из презентации.</div>`,
  },
  {
    title: "Что строим в 2027 году",
    ey: "Что строим в 2027 году",
    heading: "От цифровой отчётности<br><span>к поддержке управленческих решений</span>",
    content: () =>
      `<div class="body"><div class="flow roadmap-cards">${[
        ["gear", "АВТОМАТИЗАЦИЯ", "Отчётность,<br>документы, сроки"],
        ["link", "ИНТЕГРАЦИИ", "Государственные<br>и отраслевые<br>системы"],
        ["chart", "АНАЛИТИКА", "План-факт,<br>отклонения, риски"],
        ["brain", "ИНТЕЛЛЕКТУАЛЬНЫЕ<br>ИНСТРУМЕНТЫ", "База знаний,<br>AI-ассистент"],
      ]
        .map(([n, t, d], i) => card(`${icon(n)}<h3>${t}</h3><p>${d}</p>`, "", i + 1))
        .join(
          "",
        )}</div></div>${callout("light", "Следующий этап — не просто собирать данные,<br><strong>а помогать быстрее понимать ситуацию и принимать решения.</strong>")}`,
  },
  {
    title: "Мы создаём его вместе",
    ey: "Самое важное — этот продукт создаёте вы",
    heading: "Это не продукт, который мы принесли вам готовым<br><span>мы создаём его вместе</span>",
    cls: "nature",
    content: () =>
      `<div class="body"><div class="flow" style="gap:26px">${[
        ["building", "Управление", "Задача"],
        ["cow", "СББЖ", "Реальный процесс<br>и обратная связь"],
        ["gear", "Агроинтеллект", "Анализ → разработка → релиз"],
        ["people", "Пользователи", "Проверка"],
      ]
        .map(([n, t, d], i) =>
          card(
            `<div class="role-head">${icon(n, true)}<div><h3>${t}</h3><p>${d}</p></div></div>${image(`together-${i}`, "Совместная работа над системой", "photo")}`,
            "together-card",
            i + 1,
          ),
        )
        .join(
          "",
        )}</div><div class="feedback-loop reveal"><span class="glass">Постоянное развитие на основе обратной связи</span></div><div class="examples glass reveal"><h3>Реальные<br><span class="blue">примеры</span></h3><div class="example">${icon("document")}Станции → замечания →<br>доработка Акта ВСО</div><div class="example">${icon("approve")}Управление → запрос →<br>«Причины выбытия»</div></div></div>`,
  },
  {
    title: "Теперь покажем, как это работает",
    ey: "24. Практическая демонстрация",
    heading: "Теперь покажем, <span>как это работает</span>",
    cls: "nature",
    content: () =>
      `<div class="demo-tags reveal"><span class="tag">ОДИН ПРОЦЕСС</span><span class="tag solid">ТРИ УРОВНЯ</span></div><div class="body"><div class="flow demo-columns" id="demo-chain">${[
        [
          "farm",
          "ФЕРМА",
          [
            [1, "document", "ЛК Фермы"],
            [2, "chart", "Отчёт по воспроизводству"],
            [3, "send", "Отправка"],
          ],
        ],
        [
          "approve",
          "СББЖ",
          [
            [4, "vet", "ЛК СББЖ"],
            [5, "search", "Проверка"],
            [6, "check", "Согласование / отклонение"],
          ],
        ],
        [
          "monitor",
          "УПРАВЛЕНИЕ",
          [
            [7, "vet", "ЛК Управления"],
            [8, "chart", "Монитор"],
            [9, "refresh", "Причины выбытия"],
            [10, "document", "Акт ВСО"],
          ],
        ],
      ]
        .map(([n, t, rows], i) =>
          card(
            `<div class="demo-heading">${icon(n)}<h3>${t}</h3></div><div class="soft-list">${rows.map(([num, ic, txt]) => `<div class="list-row" data-step="${num}"><b>${num}</b><span aria-hidden="true">${{ document: "▤", chart: "▥", send: "➤", vet: "●", search: "⌕", check: "✓", refresh: "⇄" }[ic]}</span><div>${txt}</div></div>`).join("")}</div>`,
            "",
            i + 1,
          ),
        )
        .join(
          "",
        )}</div></div><button id="play-demo" class="callout glass demo-action reveal" aria-label="Запустить анимацию процесса">${icon("play")}<div class="message">Далее — переход в живую систему<br><strong>и демонстрация процесса в реальном времени.</strong><small>Нажмите, чтобы пройти цепочку здесь · демонстрационная анимация</small></div></button>`,
  },
];
/* Scene composition and navigation remain buildless and dependency-free. */
const experience = document.getElementById("experience");
const cinematic = new Set([1, 3, 7, 8, 11, 19, 21, 24]);
const editorial = new Set([5, 6, 9, 10, 15, 16, 17]);
const process = new Set([4, 13, 18, 20, 22, 23]);
const formatEyebrow = (number, text) =>
  `${String(number).padStart(2, "0")} · ${text.replace(/^\d+[.·]?\s*/, "")}`;

experience.innerHTML = screens
  .map((screen, index) => {
    const number = index + 1;
    const mode = cinematic.has(number)
      ? "cinematic"
      : editorial.has(number)
        ? "editorial"
        : process.has(number)
          ? "process"
          : "dashboard";
    const header =
      screen.custom || index === 0
        ? ""
        : `${screen.ey ? `<p class="eyebrow reveal">${screen.ey}</p>` : ""}${screen.heading ? `<h2 class="reveal" style="--i:1">${screen.heading}</h2>` : ""}`;
    return `<section id="s${number}" class="scene scene--${mode} ${screen.cls || ""}" aria-label="${number}. ${screen.title}"><div class="stage">${header}${screen.content()}</div></section>`;
  })
  .join("");

const scenes = [...experience.querySelectorAll(".scene")];
const overview = document.getElementById("overview");
const overviewGrid = document.getElementById("overview-grid");
const toolbar = document.querySelector(".toolbar");
const reduced = matchMedia("(prefers-reduced-motion: reduce)");
const SVG_NS = "http://www.w3.org/2000/svg";
const PREMIUM_EASE = "cubic-bezier(.16,1,.3,1)";

overviewGrid.innerHTML = screens
  .map(
    (screen, index) =>
      `<button class="overview-item" data-screen="${index}" aria-label="Экран ${index + 1}: ${screen.title}"><img loading="lazy" decoding="async" src="assets/thumbs/${String(index + 1).padStart(2, "0")}.webp?v=4" alt="" width="320" height="180"><div><b>${String(index + 1).padStart(2, "0")}</b><span>${screen.title}</span></div></button>`,
  )
  .join("");

function composeScenes() {
  scenes.forEach((scene, index) => {
    if (index === 0) return;
    let eyebrow = scene.querySelector(".eyebrow");
    if (!eyebrow) {
      eyebrow = document.createElement("p");
      eyebrow.className = "eyebrow reveal";
      scene.querySelector(".stage").prepend(eyebrow);
    }
    eyebrow.textContent = formatEyebrow(index + 1, eyebrow.textContent.trim() || screens[index].title);
  });

  const donut = scenes[0].querySelector(".donut");
  donut.insertAdjacentHTML(
    "afterbegin",
    '<svg class="donut-ring" viewBox="0 0 120 120" aria-hidden="true"><circle class="ring-track" cx="60" cy="60" r="49"/><circle class="ring-value" cx="60" cy="60" r="49" pathLength="100" stroke-dasharray="92 100"/></svg>',
  );

  const switchCopy = scenes[6].querySelector(".switch-copy");
  switchCopy.innerHTML = `<div class="switch-before">Не цифровизировать<br>отдельные хозяйства</div><div class="fragment-farms" aria-hidden="true">${icon("farm")}${icon("farm")}${icon("farm")}</div><div class="down">↓</div><div class="switch-after blue">Цифровизировать<br>саму ветеринарную<br>службу</div>`;

  const featureLists = scenes[11].querySelectorAll(".feature-layout > .soft-list");
  ["ИНТЕРФЕЙСЫ", "АНАЛИТИКА", "КОНТРОЛЬ"].forEach((text, index) => {
    const heading = document.createElement("h3");
    heading.className = "feature-group-title";
    heading.textContent = text;
    featureLists[index].prepend(heading);
  });

  const integrationGrid = scenes[18].querySelector(".integrations-grid");
  integrationGrid.className = "integrations-network";
  [...integrationGrid.children].forEach((port, index) => {
    port.classList.add("integration-port", `port-${index}`);
  });
  integrationGrid.insertAdjacentHTML(
    "beforeend",
    `<div class="integration-core glass">${icon("data")}<h3>Информационный<br>центр</h3><p>Единый цифровой контур</p></div>`,
  );

  const chat = scenes[20].querySelector(".chat-answer");
  const dots = chat.querySelector(".typing");
  dots.remove();
  const answer = chat.innerHTML;
  chat.innerHTML = `<div class="reply-intro">${answer}</div><div class="reply-loading" aria-label="Формирование демонстрационного ответа">${dots.outerHTML}</div>`;
  scenes[20].querySelectorAll(".answer-grid > .card").forEach((card) => card.classList.add("answer-section"));

  scenes[23]
    .querySelectorAll(".demo-columns > .card")
    .forEach((column) => column.classList.add("demo-column"));
  document.getElementById("play-demo").querySelector("small").textContent =
    "Нажмите Play — 10 шагов одного процесса";
}
composeScenes();

/* Every scene owns its animations and deadlines. Leaving it cancels both. */
class MotionScope {
  constructor(scene) {
    this.scene = scene;
    this.animations = new Set();
    this.timers = new Set();
    this.overlays = new Set();
    this.cleanups = [];
    this.closed = false;
    this.paused = false;
  }
  after(delay, callback) {
    if (this.closed || reduced.matches) return;
    const timer = { remaining: delay, callback, id: null, due: 0 };
    this.timers.add(timer);
    if (!this.paused) this.schedule(timer);
  }
  schedule(timer) {
    timer.due = performance.now() + timer.remaining;
    timer.id = setTimeout(() => {
      this.timers.delete(timer);
      if (!this.closed) timer.callback();
    }, timer.remaining);
  }
  animate(element, frames, options) {
    if (!element || this.closed || reduced.matches) return null;
    const animation = element.animate(frames, { easing: PREMIUM_EASE, ...options });
    this.animations.add(animation);
    if (this.paused) animation.pause();
    if (!options.fill) {
      animation.addEventListener("finish", () => this.animations.delete(animation), { once: true });
    }
    return animation;
  }
  pulse(element) {
    if (!element || this.closed) return;
    if (element.classList.contains("map-node")) {
      this.animate(element, [{ strokeOpacity: 0.25 }, { strokeOpacity: 1 }, { strokeOpacity: 0.25 }], {
        duration: 280,
      });
      return;
    }
    this.animate(
      element,
      [
        { outline: "2px solid rgba(87,201,255,0)", outlineOffset: "3px" },
        { outline: "2px solid rgba(87,201,255,.7)", outlineOffset: "3px", offset: 0.5 },
        { outline: "2px solid rgba(87,201,255,0)", outlineOffset: "3px" },
      ],
      { duration: 280 },
    );
  }
  receive(element) {
    if (!element) return;
    element.classList.remove("motion-pending");
    element.classList.add("arrived");
    this.pulse(element);
  }
  pause() {
    if (this.paused || this.closed) return;
    this.paused = true;
    this.timers.forEach((timer) => {
      clearTimeout(timer.id);
      timer.remaining = Math.max(0, timer.due - performance.now());
    });
    this.animations.forEach((animation) => {
      if (animation.playState === "running") animation.pause();
    });
  }
  resume() {
    if (!this.paused || this.closed) return;
    this.paused = false;
    this.timers.forEach((timer) => this.schedule(timer));
    this.animations.forEach((animation) => {
      if (animation.playState === "paused") animation.play();
    });
  }
  dispose() {
    this.closed = true;
    this.timers.forEach((timer) => clearTimeout(timer.id));
    this.timers.clear();
    this.animations.forEach((animation) => animation.cancel());
    this.animations.clear();
    this.overlays.forEach((overlay) => overlay.remove());
    this.cleanups.forEach((cleanup) => cleanup());
    this.scene.classList.remove("sequence-complete", "model-unified", "demo-complete");
    this.scene
      .querySelectorAll(".motion-pending,.arrived,.sequence-pending,.old-complete,.done,.current-step")
      .forEach((element) =>
        element.classList.remove(
          "motion-pending",
          "arrived",
          "sequence-pending",
          "old-complete",
          "done",
          "current-step",
        ),
      );
    this.scene
      .querySelectorAll("[data-flow-state]")
      .forEach((element) => element.removeAttribute("data-flow-state"));
  }
}

function svgElement(name, attributes = {}) {
  const element = document.createElementNS(SVG_NS, name);
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  return element;
}

function localBox(element, container) {
  // Offset coordinates exclude entrance transforms; connections never jump as cards settle.
  let x = 0,
    y = 0,
    cursor = element;
  while (cursor && cursor !== container) {
    x += cursor.offsetLeft;
    y += cursor.offsetTop;
    cursor = cursor.offsetParent;
  }
  return { x, y, width: element.offsetWidth, height: element.offsetHeight };
}

function portPoint(element, container, side = "center") {
  if (element.classList.contains("hub-center") || element.classList.contains("integration-core")) {
    const x = container.clientWidth / 2,
      y = container.clientHeight / 2;
    return {
      x: x + (side === "left" ? -element.offsetWidth / 2 : side === "right" ? element.offsetWidth / 2 : 0),
      y,
    };
  }
  const box = localBox(element, container);
  return {
    x: box.x + (side === "left" ? 0 : side === "right" ? box.width : box.width / 2),
    y: box.y + box.height / 2,
  };
}

function makeGraph(scope, container, connections, curved = false) {
  container.classList.add("motion-graph");
  const svg = svgElement("svg", {
    class: "motion-overlay",
    viewBox: `0 0 ${container.clientWidth} ${container.clientHeight}`,
    "aria-hidden": "true",
  });
  container.append(svg);
  scope.overlays.add(svg);
  return connections.map(({ source, destination, from = "center", to = "center" }) => {
    const a = portPoint(source, container, from),
      b = portPoint(destination, container, to);
    const mid = (a.x + b.x) / 2;
    const d = curved
      ? `M${a.x} ${a.y} C${mid} ${a.y} ${mid} ${b.y} ${b.x} ${b.y}`
      : `M${a.x} ${a.y} L${b.x} ${b.y}`;
    const path = svgElement("path", { d, class: "data-line" });
    const packet = svgElement("circle", { r: 4, class: "data-packet" });
    svg.append(path, packet);
    return { path, packet, destination };
  });
}

function transmit(scope, connection, delay, duration, loop = false) {
  if (reduced.matches) return;
  // Sample the SVG path once; the browser runs the animation without a frame loop.
  const length = connection.path.getTotalLength();
  const frames = Array.from({ length: 101 }, (_, index) => {
    const progress = index / 100;
    const point = connection.path.getPointAtLength(length * progress);
    return {
      transform: `translate(${point.x}px, ${point.y}px)`,
      offset: progress,
      opacity: index < 5 ? index / 5 : index > 95 ? (100 - index) / 5 : 1,
    };
  });
  scope.animate(connection.packet, frames, {
    delay,
    duration,
    iterations: loop ? Infinity : 1,
    easing: "linear",
    fill: "both",
  });
  const arrival = () => {
    scope.pulse(connection.destination);
    if (loop) scope.after(duration, arrival);
  };
  scope.after(delay + duration, arrival);
}

function finalAfter(scope, delay, element = scope.scene.querySelector(".callout")) {
  if (!element || reduced.matches) return;
  element.classList.add("sequence-pending");
  scope.after(delay, () => {
    element.classList.remove("sequence-pending");
    scope.scene.classList.add("sequence-complete");
  });
}

function chain(scope, container, elements, { start = 350, gap = 350, duration = 330, final = true } = {}) {
  const sources = elements.map((element) => element.querySelector(".orb") || element);
  const graph = makeGraph(
    scope,
    container,
    sources.slice(0, -1).map((source, index) => ({ source, destination: sources[index + 1] })),
  );
  if (reduced.matches) return { graph, end: 0 };
  elements.forEach((element) => element.classList.add("motion-pending"));
  elements.forEach((element, index) => {
    scope.after(start + index * gap, () => scope.receive(element));
    if (graph[index]) transmit(scope, graph[index], start + index * gap + 70, duration);
  });
  const end = start + (elements.length - 1) * gap + duration;
  if (final) finalAfter(scope, end + 150);
  return { graph, end };
}

function runHero(scope) {
  const scene = scope.scene;
  scope.animate(
    scene.querySelector(".ring-value"),
    [{ strokeDasharray: "0 100" }, { strokeDasharray: "92 100" }],
    { duration: 1800, delay: 180, fill: "both" },
  );
  const svg = scene.querySelector(".map-wires");
  svg.innerHTML = "";
  const paths = [
    "M340 70 Q240 220 185 310",
    "M185 310 Q320 345 430 390",
    "M150 230 Q400 150 545 330",
    "M430 40 Q500 290 260 435",
    "M530 130 Q460 210 380 310",
    "M260 435 Q330 370 545 330",
  ];
  paths.forEach((d, index) => {
    const path = svgElement("path", { d, class: "map-line" });
    const packet = svgElement("circle", { class: "data-packet", r: 3.5 });
    svg.append(path, packet);
    const endpoint = path.getPointAtLength(path.getTotalLength());
    const node = svgElement("circle", { cx: endpoint.x, cy: endpoint.y, r: 4, class: "map-node" });
    svg.append(node);
    transmit(scope, { path, packet, destination: node }, index * 510, 3200 + index * 190, true);
  });
}

function runHub(scope, transform = false) {
  const hub = scope.scene.querySelector(".hub");
  const center = hub.querySelector(".hub-center");
  const nodes = [...hub.querySelectorAll(".hub-node")];
  const graph = makeGraph(
    scope,
    hub,
    nodes.map((source) => ({ source, destination: center })),
    true,
  );
  scope.animate(
    center,
    [
      { opacity: 0, filter: "blur(4px)" },
      { opacity: 1, filter: "blur(0)" },
    ],
    { duration: 750, delay: transform ? 700 : 0, fill: "both" },
  );
  if (transform) {
    nodes.forEach((node) => node.classList.add("motion-pending"));
    scope.after(850, () => scope.scene.classList.add("model-unified"));
    scope.after(850, () => nodes.forEach((node) => scope.receive(node)));
  }
  graph.forEach((connection, index) =>
    transmit(
      scope,
      connection,
      (transform ? 1100 : 800) + index * 230,
      transform ? 520 : 3850 + index * 140,
      !transform,
    ),
  );
}

function runResearch(scope) {
  const container = scope.scene.querySelector(".process-input");
  const center = container.querySelector(".process-core");
  const inputs = [...container.querySelectorAll(".process-column .list-row")];
  const graph = makeGraph(
    scope,
    container,
    inputs.map((source, index) => ({
      source,
      destination: center,
      from: index < 3 ? "right" : "left",
      to: index < 3 ? "left" : "right",
    })),
    true,
  );
  inputs.forEach((input, index) => {
    input.style.setProperty("--i", String(2 + index));
    transmit(scope, graph[index], 400 + index * 250, 420);
  });
  scope.after(2470, () => center.classList.add("arrived"));
}

function runArchitecture(scope) {
  const container = scope.scene.querySelector(".role-flow");
  const cards = [...container.querySelectorAll(":scope > .card")];
  const graph = makeGraph(
    scope,
    container,
    cards
      .slice(0, -1)
      .map((source, index) => ({ source, destination: cards[index + 1], from: "right", to: "left" })),
    true,
  );
  if (reduced.matches) return;
  cards.forEach((card) => card.classList.add("motion-pending"));
  scope.after(200, () => scope.receive(cards[0]));
  graph.forEach((connection, index) => {
    transmit(scope, connection, 850 + index * 850, 560);
    scope.after(1410 + index * 850, () => scope.receive(cards[index + 1]));
    transmit(scope, connection, 4400 + index * 2100, 4200, true);
  });
  finalAfter(scope, 2900);
}

function runComparison(scope, report = false) {
  const containers = [...scope.scene.querySelectorAll(".mini-flow")];
  const old = containers[0].closest(".card");
  const previous = chain(scope, containers[0], [...containers[0].children], {
    start: 250,
    gap: 220,
    duration: 200,
    final: false,
  });
  const nextStart = previous.end + 220;
  scope.after(previous.end + 80, () => old.classList.add("old-complete"));
  chain(scope, containers[1], [...containers[1].children], {
    start: nextStart,
    gap: report ? 270 : 340,
    duration: 260,
  });
  if (report) containers[1].children[4].classList.add("specialist-step");
}

function runIntegrations(scope) {
  const network = scope.scene.querySelector(".integrations-network");
  const core = network.querySelector(".integration-core");
  const ports = [...network.querySelectorAll(".integration-port")];
  const graph = makeGraph(
    scope,
    network,
    ports.map((source, index) => ({
      source,
      destination: core,
      from: index < 2 ? "right" : "left",
      to: index < 2 ? "left" : "right",
    })),
    true,
  );
  graph.forEach((connection, index) =>
    transmit(scope, connection, 700 + index * 620, 3600 + index * 230, true),
  );
}

function runChat(scope) {
  const scene = scope.scene;
  const question = scene.querySelector(".chat-bubble");
  const intro = scene.querySelector(".reply-intro");
  const loading = scene.querySelector(".reply-loading");
  const replies = [...scene.querySelectorAll(".answer-section")];
  const field = scene.querySelector(".chat-input span:first-child");
  if (reduced.matches) {
    loading.hidden = true;
    return;
  }
  question.classList.add("sequence-pending");
  intro.classList.add("sequence-pending");
  replies.forEach((reply) => reply.classList.add("sequence-pending"));
  loading.hidden = true;
  scope.after(400, () => {
    field.textContent = "Какие районы требуют внимания?";
    scope.animate(field, [{ clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0 0 0)" }], {
      duration: 700,
      easing: "steps(7, end)",
      fill: "both",
    });
  });
  scope.after(1200, () => {
    question.classList.remove("sequence-pending");
    field.textContent = "Задайте любой вопрос…";
  });
  scope.after(1400, () => {
    loading.hidden = false;
  });
  scope.after(2000, () => {
    loading.hidden = true;
    intro.classList.remove("sequence-pending");
  });
  replies.forEach((reply, index) =>
    scope.after(2400 + index * 250, () => reply.classList.remove("sequence-pending")),
  );
  scope.cleanups.push(() => {
    field.textContent = "Задайте любой вопрос…";
    loading.hidden = true;
  });
}

function runFeedback(scope) {
  const flow = scope.scene.querySelector(".flow");
  const loop = scope.scene.querySelector(".feedback-loop");
  const nodes = [...flow.querySelectorAll(":scope > .card")];
  const stageBody = flow.parentElement;
  const graph = makeGraph(
    scope,
    stageBody,
    nodes
      .slice(0, -1)
      .map((source, index) => ({ source, destination: nodes[index + 1], from: "right", to: "left" })),
    true,
  );
  const svg = graph[0].path.parentElement;
  const start = portPoint(nodes[3], stageBody, "center");
  const end = portPoint(nodes[0], stageBody, "center");
  const loopBox = localBox(loop, stageBody);
  const bottom = loopBox.y + loopBox.height - 3;
  const d = `M${start.x} ${start.y + nodes[3].offsetHeight / 2} Q${start.x} ${bottom} ${start.x - 70} ${bottom} L${end.x + 70} ${bottom} Q${end.x} ${bottom} ${end.x} ${end.y + nodes[0].offsetHeight / 2}`;
  const path = svgElement("path", { d, class: "data-line feedback-line" });
  const packet = svgElement("circle", { r: 4, class: "data-packet" });
  svg.append(path, packet);
  graph.forEach((connection, index) => transmit(scope, connection, 650 + index * 520, 420));
  transmit(scope, { path, packet, destination: nodes[0] }, 2240, 1200);
  transmit(scope, { path, packet, destination: nodes[0] }, 6000, 4300, true);
}

let scope = null;
function startScene(index) {
  const scene = scenes[index];
  scope = new MotionScope(scene);
  scene.dataset.motion = reduced.matches ? "reduced" : "running";
  switch (index + 1) {
    case 1:
      runHero(scope);
      break;
    case 3:
      runHub(scope);
      break;
    case 4:
      chain(scope, scene.querySelector(".flow"), [...scene.querySelectorAll(".flow > .card")]);
      break;
    case 7:
      runHub(scope, true);
      break;
    case 8:
      runResearch(scope);
      break;
    case 11:
      runArchitecture(scope);
      break;
    case 12:
      scene.querySelectorAll(".feature-layout .check").forEach((check, number) =>
        scope.animate(check, [{ opacity: 0 }, { opacity: 1 }], {
          delay: 320 + number * 70,
          duration: 380,
          fill: "both",
        }),
      );
      break;
    case 13:
      runComparison(scope);
      break;
    case 18:
      runComparison(scope, true);
      break;
    case 19:
      runIntegrations(scope);
      break;
    case 20:
      chain(scope, scene.querySelector(".ai-steps"), [...scene.querySelectorAll(".ai-steps > .card")], {
        gap: 360,
      });
      break;
    case 21:
      runChat(scope);
      break;
    case 22:
      chain(
        scope,
        scene.querySelector(".roadmap-cards"),
        [...scene.querySelectorAll(".roadmap-cards > .card")],
        { gap: 450 },
      );
      break;
    case 23:
      runFeedback(scope);
      break;
  }
  if (!reduced.matches)
    scope.after(3500, () => {
      scene.dataset.motion = "settled";
    });
}

let current = -1;
let target = null;
let scrollFrame = null;
let transitionFrame = null;
let pointerFrame = null;
let navigationIdle = null;
let noticeTimer = null;
let wheelSum = 0;
let wheelLast = 0;
let wheelLockedUntil = 0;
let demoRunning = false;

function wakeNavigation() {
  toolbar.classList.remove("idle");
  clearTimeout(navigationIdle);
  navigationIdle = setTimeout(() => {
    if (
      !toolbar.matches(":hover") &&
      !(
        document.body.classList.contains("keyboard-navigation") && toolbar.contains(document.activeElement)
      ) &&
      !overview.open &&
      !focusDialog.open
    )
      toolbar.classList.add("idle");
  }, 2500);
}

function resizeStage() {
  document.documentElement.style.setProperty(
    "--stage-scale",
    Math.min(document.documentElement.clientWidth / 1600, (innerHeight - 52) / 900),
  );
}

function setActive(index) {
  if (current === index && scope) return;
  if (pointerFrame !== null) {
    cancelAnimationFrame(pointerFrame);
    pointerFrame = null;
  }
  if (scope) {
    scope.dispose();
    delete scope.scene.dataset.motion;
  }
  demoRunning = false;
  const play = document.getElementById("play-demo");
  play.setAttribute("aria-label", "Запустить анимацию процесса");
  play.querySelector("small").textContent = "Нажмите Play — 10 шагов одного процесса";
  current = index;
  scenes.forEach((scene, number) => scene.classList.toggle("active", number === index));
  document.getElementById("counter").textContent = `${String(index + 1).padStart(2, "0")} / 24`;
  document.getElementById("progress").style.width = `${((index + 1) / 24) * 100}%`;
  document.getElementById("prev").disabled = index === 0;
  document.getElementById("next").disabled = index === 23;
  overviewGrid
    .querySelectorAll("button")
    .forEach((button, number) => button.setAttribute("aria-current", String(number === index)));
  history.replaceState(null, "", `#s${index + 1}`);
  [scenes[index], scenes[index + 1]].filter(Boolean).forEach((scene) =>
    scene.querySelectorAll("img").forEach((image) => {
      image.loading = "eager";
      image.decode?.().catch(() => {});
    }),
  );
  startScene(index);
  wakeNavigation();
}

function stopTransition() {
  if (transitionFrame !== null) cancelAnimationFrame(transitionFrame);
  transitionFrame = null;
  experience.classList.remove("is-transitioning");
}

function go(index, instant = false) {
  index = Math.max(0, Math.min(scenes.length - 1, index));
  stopTransition();
  target = index;
  setActive(index);
  const destination = scenes[index].offsetTop;
  wheelLockedUntil = performance.now() + 680;
  if (instant || reduced.matches || Math.abs(experience.scrollTop - destination) < 1) {
    experience.scrollTop = destination;
    target = null;
    return;
  }
  const from = experience.scrollTop;
  const start = performance.now();
  const duration = 540;
  experience.classList.add("is-transitioning");
  const advance = (now) => {
    const time = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - time, 3);
    experience.scrollTop = from + (destination - from) * eased;
    if (time < 1) transitionFrame = requestAnimationFrame(advance);
    else {
      transitionFrame = null;
      experience.scrollTop = destination;
      experience.classList.remove("is-transitioning");
      target = null;
    }
  };
  transitionFrame = requestAnimationFrame(advance);
}

experience.addEventListener(
  "scroll",
  () => {
    if (transitionFrame !== null || scrollFrame !== null) return;
    scrollFrame = requestAnimationFrame(() => {
      scrollFrame = null;
      if (transitionFrame !== null) return;
      const index = Math.max(0, Math.min(23, Math.round(experience.scrollTop / innerHeight)));
      if (Math.abs(experience.scrollTop - scenes[index].offsetTop) < innerHeight * 0.22) setActive(index);
    });
  },
  { passive: true },
);

function notice(text) {
  const node = document.getElementById("notice");
  node.textContent = text;
  node.classList.add("show");
  clearTimeout(noticeTimer);
  noticeTimer = setTimeout(() => node.classList.remove("show"), 3500);
}

document.getElementById("prev").onclick = () => go((target ?? current) - 1);
document.getElementById("next").onclick = () => go((target ?? current) + 1);
document.getElementById("overview-button").onclick = () => {
  overview.showModal();
  scope?.pause();
  wakeNavigation();
};
document.getElementById("close-overview").onclick = () => overview.close();
overview.addEventListener("close", () => {
  scope?.resume();
  wakeNavigation();
});
overviewGrid.onclick = (event) => {
  const button = event.target.closest("[data-screen]");
  if (button) {
    overview.close();
    go(Number(button.dataset.screen));
  }
};

/* Real dashboard screenshots are magnified, never replaced by invented interfaces. */
const focusDialog = document.createElement("dialog");
focusDialog.id = "dashboard-focus";
focusDialog.setAttribute("aria-labelledby", "focus-title");
focusDialog.innerHTML =
  '<div class="focus-header"><div><small>РЕАЛЬНЫЙ ИНТЕРФЕЙС ИЗ ПРЕЗЕНТАЦИИ</small><h2 id="focus-title"></h2></div><button type="button" aria-label="Закрыть дашборд">✕</button></div><div class="focus-view"><img alt=""></div><p class="focus-caption">Esc — вернуться к шести аналитическим блокам</p>';
document.body.append(focusDialog);
focusDialog.querySelector("button").onclick = () => focusDialog.close();
focusDialog.addEventListener("close", () => {
  scope?.resume();
  document.body.classList.remove("modal-open");
  wakeNavigation();
});

function openDashboard(card) {
  focusDialog.querySelector("#focus-title").textContent = card.querySelector("h3").textContent;
  const image = focusDialog.querySelector("img");
  image.src = card.querySelector("img").src;
  image.alt = card.querySelector("img").alt;
  scope?.pause();
  document.body.classList.add("modal-open");
  focusDialog.showModal();
  wakeNavigation();
}
scenes[13].querySelectorAll(".dashboard-card").forEach((card) => {
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Увеличить дашборд «${card.querySelector("h3").textContent}»`);
  card.setAttribute("aria-haspopup", "dialog");
  card.onclick = () => openDashboard(card);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      event.stopPropagation();
      openDashboard(card);
    }
  });
});
[overview, focusDialog].forEach((dialog) =>
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    )
      dialog.close();
  }),
);

document.getElementById("fullscreen").onclick = async () => {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.documentElement.requestFullscreen();
  } catch {
    notice("Браузер не разрешил полноэкранный режим. Используйте F11.");
  }
};
document.addEventListener("fullscreenchange", () => {
  document
    .getElementById("fullscreen")
    .setAttribute(
      "aria-label",
      document.fullscreenElement ? "Выйти из полноэкранного режима" : "Полноэкранный режим",
    );
  resizeStage();
});

document.addEventListener("keydown", (event) => {
  document.body.classList.add("keyboard-navigation");
  wakeNavigation();
  if (
    overview.open ||
    focusDialog.open ||
    event.ctrlKey ||
    event.metaKey ||
    event.altKey ||
    /INPUT|TEXTAREA|SELECT/.test(event.target.tagName)
  )
    return;
  if (event.key === " " && event.repeat) {
    event.preventDefault();
    return;
  }
  if (["ArrowDown", "ArrowRight", "PageDown", " "].includes(event.key)) {
    event.preventDefault();
    go((target ?? current) + 1);
  } else if (["ArrowUp", "ArrowLeft", "PageUp"].includes(event.key)) {
    event.preventDefault();
    go((target ?? current) - 1);
  } else if (event.key === "Home") {
    event.preventDefault();
    go(0);
  } else if (event.key === "End") {
    event.preventDefault();
    go(23);
  } else if (event.key.toLowerCase() === "o") document.getElementById("overview-button").click();
  else if (event.key.toLowerCase() === "f") document.getElementById("fullscreen").click();
});

experience.addEventListener(
  "wheel",
  (event) => {
    if (event.ctrlKey || overview.open || focusDialog.open) return;
    event.preventDefault();
    wakeNavigation();
    const now = performance.now();
    if (now < wheelLockedUntil) return;
    if (now - wheelLast > 180) wheelSum = 0;
    wheelLast = now;
    wheelSum += event.deltaY;
    if (Math.abs(wheelSum) > 45) {
      go(current + Math.sign(wheelSum));
      wheelSum = 0;
    }
  },
  { passive: false },
);

let touchStart = null;
experience.addEventListener(
  "touchstart",
  (event) => {
    touchStart = { x: event.touches[0].clientX, y: event.touches[0].clientY };
    wakeNavigation();
  },
  { passive: true },
);
experience.addEventListener(
  "touchend",
  (event) => {
    if (!touchStart) return;
    const dx = event.changedTouches[0].clientX - touchStart.x;
    const dy = event.changedTouches[0].clientY - touchStart.y;
    if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy)) go(current + (dx < 0 ? 1 : -1));
    touchStart = null;
  },
  { passive: true },
);

document.addEventListener(
  "pointermove",
  (event) => {
    document.body.classList.remove("keyboard-navigation");
    wakeNavigation();
    if (reduced.matches || event.pointerType !== "mouse" || current !== 0 || pointerFrame !== null) return;
    pointerFrame = requestAnimationFrame(() => {
      pointerFrame = null;
      scenes[0].style.setProperty("--px", (event.clientX / innerWidth - 0.5) * 2);
      scenes[0].style.setProperty("--py", (event.clientY / innerHeight - 0.5) * 2);
    });
  },
  { passive: true },
);
toolbar.addEventListener("pointerenter", wakeNavigation);
toolbar.addEventListener("pointerleave", wakeNavigation);
toolbar.addEventListener("focusin", wakeNavigation);
toolbar.addEventListener("focusout", wakeNavigation);

function stopDemo() {
  if (current !== 23) return;
  scope.dispose();
  scope = new MotionScope(scenes[23]);
  demoRunning = false;
  const button = document.getElementById("play-demo");
  button.setAttribute("aria-label", "Запустить анимацию процесса");
  button.querySelector("small").textContent = "Нажмите Play — 10 шагов одного процесса";
}

document.getElementById("play-demo").onclick = () => {
  if (demoRunning) {
    stopDemo();
    return;
  }
  stopDemo();
  demoRunning = true;
  const scene = scenes[23];
  const container = document.getElementById("demo-chain");
  const columns = [...container.querySelectorAll(":scope > .card")];
  const rows = [...container.querySelectorAll("[data-step]")];
  const button = document.getElementById("play-demo");
  const graph = makeGraph(
    scope,
    container,
    columns
      .slice(0, -1)
      .map((source, index) => ({ source, destination: columns[index + 1], from: "right", to: "left" })),
    true,
  );
  button.setAttribute("aria-label", "Остановить анимацию процесса");
  button.querySelector("small").textContent = "Проходит демонстрационная цепочка · нажмите для остановки";
  if (reduced.matches) {
    rows.forEach((row) => row.classList.add("done"));
    scene.classList.add("demo-complete");
    demoRunning = false;
    button.setAttribute("aria-label", "Повторить анимацию процесса");
    button.querySelector("small").textContent = "Цепочка завершена · можно перейти к живой системе";
    return;
  }
  rows.forEach((row, index) =>
    scope.after(index * 700, () => {
      rows.forEach((element, number) => {
        element.classList.toggle("current-step", number === index);
        element.classList.toggle("done", number < index);
      });
      if (index === 2) transmit(scope, graph[0], 0, 560);
      if (index === 5) transmit(scope, graph[1], 0, 560);
    }),
  );
  scope.after(rows.length * 700, () => {
    rows.forEach((row) => {
      row.classList.remove("current-step");
      row.classList.add("done");
    });
    columns.forEach((column) => scope.receive(column));
    scene.classList.add("demo-complete");
    demoRunning = false;
    button.setAttribute("aria-label", "Повторить анимацию процесса");
    button.querySelector("small").textContent = "Цепочка завершена · далее — живая система";
  });
};

document.querySelector(".identity").onclick = (event) => {
  event.preventDefault();
  go(0);
};
window.addEventListener("resize", () => {
  resizeStage();
  stopTransition();
  if (current >= 0) {
    experience.scrollTop = scenes[current].offsetTop;
    target = null;
  }
});
window.addEventListener("hashchange", () => {
  const match = location.hash.match(/^#s(\d+)$/);
  if (match) go(Number(match[1]) - 1, true);
});
reduced.addEventListener("change", () => {
  if (scope) scope.dispose();
  scope = null;
  const index = current;
  current = -1;
  setActive(index);
});
document.addEventListener("visibilitychange", () => {
  if (document.hidden) scope?.pause();
  else scope?.resume();
});
window.addEventListener("pagehide", () => {
  scope?.dispose();
  stopTransition();
  clearTimeout(navigationIdle);
  clearTimeout(noticeTimer);
  if (scrollFrame !== null) cancelAnimationFrame(scrollFrame);
  if (pointerFrame !== null) cancelAnimationFrame(pointerFrame);
});

resizeStage();
history.scrollRestoration = "manual";
const initial = location.hash.match(/^#s(\d+)$/);
go(initial ? Number(initial[1]) - 1 : 0, true);
