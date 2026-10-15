/*
 * Cuestionario de orientación de colchones hospitalarios de acolsa.mx.
 * La puntuación es comercial e informativa; no es un instrumento clínico.
 */
const ASSETS = {
  logoBlack: "https://acolsa.mx/wp-content/uploads/2025/08/logo-acolsa-mx-negro-transparente-4x-scaled.png",
  logoWhite: "https://acolsa.mx/wp-content/uploads/2025/07/logo-blanco-de-acolsa-mx-4x-scaled.png"
};

const products = [
  {
    id: "d20", name: "D20 múltiples posiciones", short: "D20", image: "https://acolsa.mx/wp-content/uploads/2022/01/icono-d20.png",
    description: "Colchón de una sola base de espuma con cortes inferiores para adaptarse a camas de posiciones. Es la opción más económica del catálogo.",
    area: "ambulatory", type: "static", maxWeight: 120, warranty: "6 meses", lifespan: "2 años", priceLabel: "Menos de $5,000 MXN", priceMin: 0, priceMax: 5000,
    ulcerLevels: [1], features: ["Espuma de una sola base", "Cortes inferiores para camas articuladas"],
    priceNote: "Precio orientativo según el rango proporcionado; confirmar cotización."
  },
  {
    id: "kubuflex27", name: "Kubuflex 27", short: "Kubuflex 27", image: "https://acolsa.mx/wp-content/uploads/2020/06/icono-kubuflex-27.png",
    description: "Un paso arriba del D20, con espuma ligeramente más densa y cortes cúbicos en la superficie para ayudar a distribuir el peso y la presión.",
    area: "ambulatory", type: "static", maxWeight: 120, warranty: "6 meses", lifespan: "2 años", priceLabel: "Menos de $5,000 MXN", priceMin: 0, priceMax: 5000,
    ulcerLevels: [1], features: ["Espuma de mayor densidad que D20", "Cortes cúbicos superiores"],
    priceNote: "Precio orientativo según el rango proporcionado; confirmar cotización."
  },
  {
    id: "kubuflexZone", name: "Kubuflex Zone", short: "Kubuflex Zone", image: "https://acolsa.mx/wp-content/uploads/2019/05/icono-kubuflex-zone.png",
    description: "Espuma de mayor densidad y cortes específicos diseñados para crear cinco zonas de confort 3D.",
    area: "ambulatory", type: "static", maxWeight: 130, warranty: "1 año", lifespan: "3 años", priceLabel: "$5,000–$7,000 MXN", priceMin: 5000, priceMax: 7000,
    ulcerLevels: [1], features: ["Cinco zonas de confort 3D", "Cortes especializados"],
    priceNote: "Precio orientativo según el rango proporcionado; confirmar cotización."
  },
  {
    id: "isoFresh", name: "Iso Fresh", short: "Iso Fresh", image: "https://acolsa.mx/wp-content/uploads/2020/05/icono-iso-fresh.png",
    description: "Sistema de varias capas con espuma Viscool para favorecer la ventilación y la disipación del calor, más una capa superior con cortes cúbicos para ayudar a distribuir el peso.",
    area: "recovery", type: "static", maxWeight: 220, warranty: "1 año", lifespan: "3 años", priceLabel: "$5,000–$7,000 MXN", priceMin: 5000, priceMax: 7000,
    ulcerLevels: [2], features: ["Capas de espuma", "Viscool para ventilación y disipación del calor"],
    priceNote: "Precio orientativo según el rango proporcionado; confirmar cotización."
  },
  {
    id: "isoCloud", name: "Iso Cloud", short: "Iso Cloud", image: "https://acolsa.mx/wp-content/uploads/2020/05/Colchon-hospitalarios-antiescaras-Isocloud-001p.jpg",
    imageAlt: "Colchón hospitalario Iso Cloud de acolsa.mx", imageFit: "contain",
    description: "Tres capas: una superior con extracto de neroli, una capa Viscool con tecnología termorreguladora y una base densa y resistente con cortes para adaptarse a camas de posiciones.",
    area: "recovery", type: "static", maxWeight: 230, warranty: "2 años", lifespan: "5 años", priceLabel: "$7,000–$10,000 MXN", priceMin: 7000, priceMax: 10000,
    ulcerLevels: [3], features: ["Tres capas de espuma", "Capa Viscool termorreguladora", "Base con cortes para camas articuladas"],
    priceNote: "Precio orientativo según el rango proporcionado; confirmar cotización."
  },
  {
    id: "cooperFlex", name: "Cooper Flex", short: "Cooper Flex", image: "https://acolsa.mx/wp-content/uploads/2023/01/icono-cooper-flex.png",
    description: "Tres capas: Viscopper con micropartículas de materiales biosaludables, Neropur con esencia de neroli y una base Resilen de soporte. También cuenta con cortes cúbicos.",
    area: "recovery", type: "static", maxWeight: 230, warranty: "2 años", lifespan: "5 años", priceLabel: "$10,000–$15,000 MXN", priceMin: 10000, priceMax: 15000,
    ulcerLevels: [3], features: ["Tres capas especializadas", "Base Resilen", "Cortes cúbicos"],
    priceNote: "Precio orientativo según el rango proporcionado; confirmar cotización."
  },
  {
    id: "isoGel", name: "Iso Gel", short: "Iso Gel", image: "https://acolsa.mx/wp-content/uploads/2024/02/icono-iso-gel.png",
    description: "Tres capas con un panel superior de gel TPE en forma de panal, diseñado para mejorar la distribución del peso y el calor. Su construcción es más pesada.",
    area: "intensive", type: "static", maxWeight: 120, warranty: "3 años", lifespan: "6 años", priceLabel: "$10,000–$15,000 MXN", priceMin: 10000, priceMax: 15000,
    ulcerLevels: [3], features: ["Panel superior de gel TPE en panal", "Mayor peso del producto"],
    priceNote: "Precio orientativo según el rango proporcionado; confirmar cotización."
  },
  {
    id: "hybridCare", name: "Hybrid Care", short: "Hybrid Care", image: "https://acolsa.mx/wp-content/uploads/2023/01/icono-hybrid-care.png",
    description: "Colchón híbrido que combina una cámara de aire interna con dos capas superiores de espuma para comodidad y distribución del peso.",
    area: "intensive", type: "hybrid", maxWeight: 120, warranty: "6 meses", lifespan: "1 año", priceLabel: "$10,000–$15,000 MXN", priceMin: 10000, priceMax: 15000,
    ulcerLevels: [3], features: ["Espuma y cámara de aire", "Sistema con cierre para acceder a las celdas de aire"], zipper: true,
    priceNote: "Precio orientativo según el rango proporcionado; confirmar cotización."
  },
  {
    id: "isoAir", name: "Iso Air", short: "Iso Air", image: "https://acolsa.mx/wp-content/uploads/2024/04/dsc01926-scaled.jpg",
    description: "Colchón dinámico compuesto por cámaras de aire. Es una opción de precio elevado dentro del catálogo y requiere una superficie estable compatible.",
    area: "intensive", type: "air", maxWeight: 120, warranty: "6 meses", lifespan: "1 año", priceLabel: "Desde $20,000 MXN", priceMin: 20000, priceMax: Infinity,
    ulcerLevels: [3], features: ["Cámaras de aire", "Diseñado para superficies estables", "Cierre para acceder a las celdas de aire"], zipper: true,
    priceNote: "Precio de entrada orientativo; confirmar cotización."
  },
  {
    id: "opticellJarven", name: "Opticell Jarven", short: "Opticell Jarven", image: "https://acolsa.mx/wp-content/uploads/2024/04/opticell-jarven-4-rojo-cuadrado.png",
    description: "Sistema dinámico de un fabricante externo distribuido por acolsa.mx, descrito en el catálogo como una solución de alta tecnología para la distribución del peso y la presión.",
    area: "intensive", type: "air", maxWeight: 230, warranty: "5 años", lifespan: "5 años", priceLabel: "Desde $50,000 MXN", priceMin: 50000, priceMax: Infinity,
    ulcerLevels: [4], features: ["Sistema dinámico de aire", "Requiere una superficie estable compatible", "Cierre para acceder a las celdas de aire"], zipper: true,
    priceNote: "Precio de entrada orientativo; confirmar cotización."
  }
];

const areas = {
  ambulatory: { name: "Ambulatorio", short: "Ambulatorio", description: "Estancias cortas y pacientes con movilidad propia", products: ["d20", "kubuflex27", "kubuflexZone"] },
  recovery: { name: "Unidad de recuperación", short: "Recuperación", description: "Estancias medias y pacientes que necesitan ayuda para moverse", products: ["isoFresh", "isoCloud", "cooperFlex"] },
  intensive: { name: "Terapia / cuidados intensivos", short: "Terapia / UCI", description: "Estancias prolongadas y movilidad muy reducida", products: ["isoGel", "hybridCare", "isoAir", "opticellJarven"] }
};

const questions = [
  {
    key: "dailyUse", category: "TIEMPO DE USO", title: "¿Cuánto tiempo al día pasará el paciente sobre el colchón?",
    help: "Piensa en el uso habitual, no solo en el tiempo que permanecerá hospitalizado.",
    answers: [
      { value: "fewHours", symbol: "◷", label: "Solo algunas horas al día", desc: "El paciente pasa buena parte del día fuera de la cama.", area: "ambulatory" },
      { value: "mostDay", symbol: "◴", label: "Las noches y la mayor parte del día", desc: "Se levanta para algunas actividades.", area: "recovery" },
      { value: "allDay", symbol: "◉", label: "Prácticamente todo el día y la noche", desc: "Permanece en cama casi todo el tiempo.", area: "intensive" }
    ]
  },
  {
    key: "duration", category: "DURACIÓN PREVISTA", title: "¿Durante cuánto tiempo se espera utilizar el colchón?",
    help: "Esto ayuda a contextualizar la vida útil promedio y la garantía de cada modelo.",
    answers: [
      { value: "weeks", symbol: "1", label: "Unas semanas", desc: "Uso previsto de corta duración.", area: "ambulatory" },
      { value: "months", symbol: "2", label: "Varios meses", desc: "Uso previsto de duración media.", area: "recovery" },
      { value: "years", symbol: "3", label: "Entre uno y tres años", desc: "Uso prolongado.", area: "intensive" },
      { value: "indefinite", symbol: "∞", label: "Más de tres años o por tiempo indefinido", desc: "Se busca una solución para uso a largo plazo.", area: "intensive" }
    ]
  },
  {
    key: "bed", category: "TIPO DE CAMA", title: "¿Sobre qué tipo de cama se utilizará el colchón?",
    help: "La compatibilidad exacta debe confirmarse antes de comprar. Los sistemas dinámicos de aire requieren una superficie estable compatible.",
    answers: [
      { value: "hospitalAdjustable", symbol: "↕", label: "Cama hospitalaria de posiciones", desc: "Con articulación eléctrica o manual." },
      { value: "homeAdjustable", symbol: "↗", label: "Cama residencial de posiciones", desc: "Una base que eleva respaldo o piernas." },
      { value: "stable", symbol: "□", label: "Base plana y estable", desc: "No articula ni cambia de posición." },
      { value: "unknown", symbol: "?", label: "Todavía no lo sé", desc: "Necesito confirmar la base disponible." }
    ]
  },
  {
    key: "caregiver", category: "APOYO PARA MOVILIZAR", title: "¿El paciente cuenta con un cuidador que le ayude a cambiar de posición?",
    help: "Los colchones no reemplazan la movilización ni la atención regular del paciente.",
    answers: [
      { value: "frequent", symbol: "✓", label: "Sí, recibe ayuda frecuente", desc: "Hay apoyo para los cambios de posición." },
      { value: "limited", symbol: "↔", label: "Sí, pero la ayuda es limitada", desc: "No siempre hay alguien disponible." },
      { value: "none", symbol: "!", label: "No cuenta con ayuda regular", desc: "Conviene planear apoyo de cuidado; el colchón no sustituye esa atención." },
      { value: "unknown", symbol: "?", label: "No estoy seguro" }
    ]
  },
  {
    key: "mobility", category: "MOVILIDAD", title: "¿Qué tanta movilidad tiene el paciente por sí mismo?",
    help: "Esta respuesta, junto con la duración y el tiempo diario de uso, suma puntos al perfil de área hospitalaria.",
    answers: [
      { value: "independent", symbol: "→", label: "Mucha: puede cambiar de posición sin ayuda", area: "ambulatory" },
      { value: "limited", symbol: "↔", label: "Limitada: necesita ayuda para algunos movimientos", area: "recovery" },
      { value: "minimal", symbol: "＋", label: "Muy poca o nula: depende de sus cuidadores", area: "intensive" }
    ]
  },
  {
    key: "weight", category: "PESO DEL PACIENTE", title: "¿Cuánto pesa el paciente?",
    help: "Usaremos este dato como filtro de compatibilidad según la capacidad máxima indicada para cada modelo.",
    answers: [
      { value: "under120", symbol: "≤", label: "Hasta 120 kg" },
      { value: "121to130", symbol: "↗", label: "De 121 a 130 kg" },
      { value: "131to220", symbol: "↗", label: "De 131 a 220 kg" },
      { value: "221to230", symbol: "↗", label: "De 221 a 230 kg" },
      { value: "230exact", symbol: "230", label: "230 kg exactos" },
      { value: "over230", symbol: ">", label: "Más de 230 kg" },
      { value: "unknown", symbol: "?", label: "No conozco el peso exacto" }
    ]
  },
  {
    key: "ulcers", category: "ÚLCERAS POR PRESIÓN", title: "¿El paciente tiene úlceras por presión diagnosticadas?",
    help: "Selecciona el nivel únicamente si fue identificado por un profesional sanitario. Si no lo sabes, elige la última opción.",
    answers: [
      { value: "none", symbol: "✓", label: "No presenta lesiones conocidas" },
      { value: "level1", symbol: "1", label: "Nivel 1 diagnosticado", desc: "Enrojecimiento persistente; la clasificación debe confirmarla un profesional." },
      { value: "level2", symbol: "2", label: "Nivel 2 diagnosticado", desc: "Lesión superficial diagnosticada por un profesional." },
      { value: "level3", symbol: "3", label: "Nivel 3 diagnosticado", desc: "Lesión profunda; requiere valoración y manejo sanitario." },
      { value: "level4", symbol: "4", label: "Nivel 4 diagnosticado", desc: "Lesión muy profunda; requiere atención clínica especializada." },
      { value: "unknown", symbol: "?", label: "No sé si tiene una lesión o cuál es su nivel", desc: "No intentes clasificar la lesión por tu cuenta." }
    ]
  },
  {
    key: "budget", category: "PRESUPUESTO", title: "¿Cuál es tu presupuesto máximo aproximado por colchón?",
    help: "Se muestran rangos orientativos a partir de la información proporcionada. Los precios finales y la cotización deben confirmarse con acolsa.mx.",
    answers: [
      { value: "under5000", symbol: "$", label: "Menos de $5,000 MXN" },
      { value: "5000to7000", symbol: "$", label: "De $5,000 a $7,000 MXN" },
      { value: "7000to10000", symbol: "$", label: "De $7,000 a $10,000 MXN" },
      { value: "10000to15000", symbol: "$", label: "De $10,000 a $15,000 MXN" },
      { value: "15000to20000", symbol: "$", label: "De $15,000 a $20,000 MXN" },
      { value: "20000to50000", symbol: "$", label: "De $20,000 a menos de $50,000 MXN" },
      { value: "50000plus", symbol: "$", label: "$50,000 MXN o más" },
      { value: "flexible", symbol: "↗", label: "Puedo considerar otras opciones si las necesidades lo justifican" }
    ]
  }
];

const state = { index: 0, answers: {} };
const $ = (selector) => document.querySelector(selector);
const intro = $("#intro"), quiz = $("#quiz"), results = $("#results");
const startBtn = $("#startBtn"), backBtn = $("#backBtn"), restartBtn = $("#restartBtn");
const stepLabel = $("#stepLabel"), progressFill = $("#progressFill"), progressTrack = $(".progress-track");
const questionCategory = $("#questionCategory"), questionTitle = $("#questionTitle"), questionHelp = $("#questionHelp"), options = $("#options");

startBtn.addEventListener("click", () => {
  intro.classList.add("hidden"); results.classList.add("hidden"); quiz.classList.remove("hidden");
  state.index = 0;
  renderQuestion();
});
backBtn.addEventListener("click", () => {
  if (state.index > 0) { state.index--; renderQuestion(); }
});
restartBtn.addEventListener("click", () => {
  state.index = 0; state.answers = {};
  results.classList.add("hidden"); quiz.classList.add("hidden"); intro.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function renderQuestion() {
  const q = questions[state.index];
  stepLabel.textContent = `PREGUNTA ${state.index + 1} DE ${questions.length}`;
  const percent = (state.index / questions.length) * 100;
  progressFill.style.width = `${percent}%`;
  progressTrack.setAttribute("aria-valuenow", String(Math.round(percent)));
  questionCategory.textContent = q.category;
  questionTitle.textContent = q.title;
  questionHelp.textContent = q.help || "";
  backBtn.disabled = state.index === 0;
  options.replaceChildren();

  q.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `option${state.answers[q.key] === answer.value ? " selected" : ""}`;
    button.setAttribute("aria-pressed", String(state.answers[q.key] === answer.value));
    const symbol = document.createElement("span"); symbol.className = "option-symbol"; symbol.setAttribute("aria-hidden", "true"); symbol.textContent = answer.symbol;
    const text = document.createElement("span"); text.className = "option-text"; text.append(document.createTextNode(answer.label));
    if (answer.desc) { const desc = document.createElement("span"); desc.className = "option-desc"; desc.textContent = answer.desc; text.append(desc); }
    const arrow = document.createElement("span"); arrow.className = "option-arrow"; arrow.setAttribute("aria-hidden", "true"); arrow.textContent = "→";
    button.append(symbol, text, arrow);
    button.addEventListener("click", () => {
      state.answers[q.key] = answer.value;
      if (state.index < questions.length - 1) { state.index++; renderQuestion(); }
      else { progressFill.style.width = "100%"; progressTrack.setAttribute("aria-valuenow", "100"); showResults(); }
    });
    options.append(button);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function weightLimit(answer) {
  return ({ under120: 120, "121to130": 130, "131to220": 220, "221to230": 230, over230: 231, unknown: null })[answer] ?? null;
}
function budgetLimit(answer) {
  return ({ under5000: 4999, "5000to7000": 7000, "7000to10000": 10000, "10000to15000": 15000, "15000to20000": 20000, "20000to50000": 49999, "50000plus": Infinity, flexible: Infinity })[answer] ?? Infinity;
}
function areaScores(answers) {
  const scores = { ambulatory: 0, recovery: 0, intensive: 0 };
  ["dailyUse", "duration", "mobility"].forEach((key) => {
    const question = questions.find((q) => q.key === key);
    const answer = question.answers.find((item) => item.value === answers[key]);
    if (answer && answer.area) scores[answer.area] += 1;
  });
  return scores;
}
function areaForScore(scores) {
  return Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
}
function ulcerLevel(answer) {
  return ({ level1: 1, level2: 2, level3: 3, level4: 4 })[answer] || null;
}
function scoreProduct(product, answers, scores) {
  let score = scores[product.area] * 3;
  const areaOrder = areaForScore(scores);
  if (product.area === areaOrder[0]) score += 2;
  if (product.area === areaOrder[1]) score += 1;

  if (answers.bed === "hospitalAdjustable" || answers.bed === "homeAdjustable") {
    if (product.type === "static") score += 2;
    if (product.type === "air" || product.type === "hybrid") score -= 1;
  } else if (answers.bed === "stable") {
    if (product.type === "air") score += 3;
    else if (product.type === "hybrid") score += 2;
    else score += 1;
  } else if (answers.bed === "unknown") {
    score += 0;
  }

  if (answers.caregiver === "none") {
    if (product.type === "air" || product.type === "hybrid") score += 1;
  } else if (answers.caregiver === "frequent" && product.type === "static") {
    score += 1;
  }
  if (answers.dailyUse === "allDay" && (product.type === "air" || product.type === "hybrid")) score += 1;
  if (answers.duration === "indefinite" && product.lifespan === "6 años") score += 1;
  if (answers.duration === "indefinite" && product.lifespan === "5 años") score += 0.5;

  const level = ulcerLevel(answers.ulcers);
  if (level && product.ulcerLevels.includes(level)) score += 8;
  return score;
}
function formatCapacity(kg) { return `${kg} kg`; }
function getBudgetDisplay(answers) {
  const limit = budgetLimit(answers.budget);
  return { limit, flexible: answers.budget === "flexible" };
}

function showResults() {
  quiz.classList.add("hidden"); results.classList.remove("hidden");
  const answers = state.answers;
  const scores = areaScores(answers);
  const areaOrder = areaForScore(scores);
  const winningArea = areas[areaOrder[0]];
  const cap = weightLimit(answers.weight);
  const budget = getBudgetDisplay(answers);
  const level = ulcerLevel(answers.ulcers);
  const ulcerKnown = Boolean(level);

  const resultTitle = $("#resultTitle"), resultCopy = $("#resultCopy"), clinicalAlert = $("#clinicalAlert");
  const areaScoresEl = $("#areaScores"), productResults = $("#productResults");
  const recommendationHeading = $("#recommendationHeading"), resultsCount = $("#resultsCount");
  const tiedAreas = areaOrder.filter((key) => scores[key] === scores[areaOrder[0]]);
  resultTitle.textContent = tiedAreas.length > 1
    ? `Tu perfil combina necesidades de varias áreas`
    : `Tu perfil apunta a ${winningArea.name.toLowerCase()}`;
  resultCopy.textContent = tiedAreas.length > 1
    ? `El puntaje quedó empatado entre ${tiedAreas.map((key) => areas[key].name).join(" y ")}. Los modelos se ordenan por coincidencia con las respuestas y después se aplican los filtros de peso, presupuesto y la asociación de catálogo seleccionada.`
    : `El puntaje orientativo favorece el área de ${winningArea.name.toLowerCase()}. A continuación aparecen modelos ordenados por coincidencia, después de aplicar los filtros de peso, presupuesto y la asociación de catálogo seleccionada.`;

  clinicalAlert.classList.add("hidden");
  clinicalAlert.textContent = "";
  const alerts = [];
  if (level === 3 || level === 4) alerts.push("La lesión indicada requiere valoración y seguimiento por profesionales sanitarios. No selecciones una superficie terapéutica basándote únicamente en este cuestionario.");
  else if (level === 1 || level === 2) alerts.push("La clasificación de una lesión y la selección de una superficie de apoyo deben confirmarse con un profesional sanitario.");
  if (answers.ulcers === "unknown") alerts.push("Si sospechas que hay una úlcera por presión o no conoces su nivel, solicita valoración sanitaria; no intentes clasificarla con esta herramienta.");
  if (answers.caregiver === "none") alerts.push("El resultado no sustituye la organización de cuidados y cambios de posición. Un colchón de aire no moviliza ni vigila por completo al paciente.");
  if (answers.bed === "unknown") alerts.push("Antes de comprar, confirma el tipo de base y los requisitos de instalación del modelo.");
  if (cap === null) alerts.push("No se indicó el peso exacto. Confirma el peso del paciente antes de elegir; los modelos deben utilizarse dentro de su capacidad máxima.");
  if (alerts.length) { clinicalAlert.classList.remove("hidden"); clinicalAlert.innerHTML = alerts.map((item) => `<p>${escapeHtml(item)}</p>`).join(""); }

  areaScoresEl.replaceChildren();
  const maxAreaScore = Math.max(...Object.values(scores), 1);
  areaOrder.forEach((key) => {
    const row = document.createElement("div"); row.className = "area-score-row";
    const name = document.createElement("span"); name.className = "area-score-name"; name.textContent = areas[key].name;
    const bar = document.createElement("span"); bar.className = "area-score-bar";
    const fill = document.createElement("span"); fill.className = "area-score-fill"; fill.style.width = `${scores[key] / maxAreaScore * 100}%`; bar.append(fill);
    const value = document.createElement("strong"); value.className = "area-score-value"; value.textContent = `${scores[key]} ${scores[key] === 1 ? "punto" : "puntos"}`;
    row.append(name, bar, value); areaScoresEl.append(row);
  });

  let candidates = products.filter((product) => cap === null || product.maxWeight >= cap);
  let weightUnknown = cap === null;
  if (level) candidates = candidates.filter((product) => product.ulcerLevels.includes(level));

  const budgetCandidates = candidates.filter((product) => product.priceMin <= budget.limit);
  let overBudgetMode = false;
  if (budgetCandidates.length) candidates = budgetCandidates;
  else if (candidates.length) {
    overBudgetMode = true;
    candidates = [...candidates].sort((a, b) => a.priceMin - b.priceMin).slice(0, 3);
  }

  candidates = candidates.map((product) => ({ ...product, score: scoreProduct(product, answers, scores) }))
    .sort((a, b) => b.score - a.score || a.priceMin - b.priceMin);

  productResults.replaceChildren();
  if (!candidates.length) {
    recommendationHeading.textContent = "No encontramos una coincidencia confirmada";
    resultsCount.textContent = "0 modelos";
    const noMatch = document.createElement("div"); noMatch.className = "empty-state";
    const h = document.createElement("h4"); h.textContent = "Necesitamos revisar algunos datos antes de sugerir un modelo.";
    const p = document.createElement("p");
    if (level) p.textContent = `Según la asociación de catálogo proporcionada, no hay un modelo asociado al nivel seleccionado que cumpla con el filtro de peso indicado. Contacta a acolsa.mx y al equipo sanitario para revisar el caso; no reduzcas el requisito de capacidad máxima.`;
    else p.textContent = `No hay un modelo del catálogo con capacidad suficiente para el peso indicado o falta confirmar el peso. Contacta a acolsa.mx para revisar opciones compatibles y confirma los requisitos con el equipo sanitario.`;
    noMatch.append(h, p); productResults.append(noMatch);
  } else {
    recommendationHeading.textContent = level ? `Modelos asociados en catálogo para el nivel ${level}` : "Modelos que coinciden con tus respuestas";
    resultsCount.textContent = `${candidates.length} ${candidates.length === 1 ? "modelo" : "modelos"}`;
    candidates.forEach((product, index) => productResults.append(createProductCard(product, index, { overBudgetMode, weightUnknown, level })));
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function createProductCard(product, index, meta) {
  const card = document.createElement("article"); card.className = `product-card${index === 0 ? " top-match" : ""}`;
  const imageWrap = document.createElement("div"); imageWrap.className = "product-image-wrap";
  const image = document.createElement("img"); image.src = product.image; image.alt = product.imageAlt || `Imagen de ${product.name}`; image.loading = index === 0 ? "eager" : "lazy"; image.decoding = "async";
  if (product.imageFit) image.classList.add(`fit-${product.imageFit}`);
  image.addEventListener("error", () => { imageWrap.classList.add("image-unavailable"); image.alt = "Imagen de producto no disponible"; image.removeAttribute("src"); const note = document.createElement("span"); note.className = "image-fallback"; note.textContent = product.name; imageWrap.append(note); }, { once: true });
  imageWrap.append(image);
  const body = document.createElement("div"); body.className = "product-card-body";
  const rank = document.createElement("div"); rank.className = "product-rank"; rank.textContent = index === 0 ? "MAYOR COINCIDENCIA" : `ALTERNATIVA ${index}`;
  const h = document.createElement("h4"); h.textContent = product.name;
  const description = document.createElement("p"); description.className = "product-description"; description.textContent = product.description;
  const stats = document.createElement("div"); stats.className = "product-stats";
  [["Peso máximo", formatCapacity(product.maxWeight)], ["Garantía", product.warranty], ["Vida útil promedio", product.lifespan], ["Presupuesto", product.priceLabel]].forEach(([label, value]) => {
    const stat = document.createElement("div"); stat.className = "product-stat";
    const term = document.createElement("span"); term.textContent = label;
    const detail = document.createElement("strong"); detail.textContent = value;
    stat.append(term, detail); stats.append(stat);
  });
  const tags = document.createElement("div"); tags.className = "product-tags";
  const typeLabel = product.type === "static" ? "Estático con cortes" : product.type === "hybrid" ? "Dinámico híbrido" : "Dinámico de aire";
  [typeLabel, areas[product.area].name, ...(product.zipper ? ["Cierre para celdas de aire"] : [])].forEach((label) => {
    const tag = document.createElement("span"); tag.className = "product-tag-pill"; tag.textContent = label; tags.append(tag);
  });
  const featureList = document.createElement("ul"); featureList.className = "feature-list";
  product.features.forEach((feature) => { const li = document.createElement("li"); li.textContent = feature; featureList.append(li); });
  const reason = document.createElement("p"); reason.className = "match-reason";
  const scoreReason = `Coincidencia con el perfil de ${areas[product.area].name.toLowerCase()}.`;
  reason.textContent = meta.level ? `Asociación de catálogo para úlceras por presión nivel ${meta.level}. Esta asociación no confirma idoneidad clínica.` : scoreReason;
  const actions = document.createElement("div"); actions.className = "product-card-actions";
  const consult = document.createElement("a"); consult.href = "https://acolsa.mx/"; consult.target = "_blank"; consult.rel = "noopener"; consult.className = "text-link"; consult.textContent = "Consultar este modelo en acolsa.mx ↗";
  actions.append(consult);
  if (meta.overBudgetMode) { const note = document.createElement("p"); note.className = "over-budget-note"; note.textContent = "Alternativa fuera del presupuesto seleccionado: confirma el precio con acolsa.mx."; actions.prepend(note); }
  if (meta.weightUnknown) { const note = document.createElement("p"); note.className = "over-budget-note"; note.textContent = "Compatibilidad de peso pendiente: confirma el peso y la capacidad máxima antes de comprar."; actions.prepend(note); }
  body.append(rank, h, description, stats, tags, featureList, reason, actions);
  card.append(imageWrap, body);
  return card;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
}
