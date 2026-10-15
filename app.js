/*
 * Acolsa Mattress Quiz — starter prototype
 * Product rules and example products are placeholders. Replace them with
 * verified catalog specifications before publishing for customers.
 */
const questions = [
  {
    category: "CONTEXTO",
    title: "¿Para quién estás buscando un colchón?",
    help: "Esto nos ayuda a adaptar la orientación a tu situación.",
    answers: [
      { value: "home_caregiver", symbol: "⌂", label: "Un familiar que recibe cuidados en casa", desc: "Busco una opción para apoyar sus cuidados diarios." },
      { value: "institution", symbol: "＋", label: "Una persona en mi institución", desc: "Hospital, clínica, residencia u otro centro." },
      { value: "self", symbol: "♡", label: "Para mí o para otra persona en casa", desc: "Busco una opción para uso personal o doméstico." }
    ]
  },
  {
    category: "TIPO DE CAMA",
    title: "¿En qué tipo de cama se utilizará?",
    help: "La compatibilidad y las medidas deben confirmarse antes de elegir.",
    answers: [
      { value: "adjustable", symbol: "↕", label: "Cama hospitalaria articulada", desc: "El respaldo o las piernas pueden elevarse." },
      { value: "manual", symbol: "↗", label: "Cama hospitalaria manual", desc: "Se ajusta mediante mecanismos manuales." },
      { value: "fixed", symbol: "□", label: "Cama fija o base convencional", desc: "No cambia de posición." },
      { value: "unknown", symbol: "?", label: "No estoy seguro", desc: "Necesito comprobarlo." }
    ]
  },
  {
    category: "PRIORIDAD",
    title: "¿Qué es lo más importante para ti?",
    help: "Elige la necesidad principal; más adelante podrás consultar otras características.",
    answers: [
      { value: "comfort", symbol: "☼", label: "Comodidad y soporte para el descanso" },
      { value: "pressure", symbol: "＋", label: "Una necesidad relacionada con la presión corporal", desc: "Puede requerir valoración de un profesional de la salud." },
      { value: "hygiene", symbol: "◇", label: "Limpieza sencilla y cubierta impermeable" },
      { value: "durability", symbol: "▤", label: "Resistencia para uso frecuente o institucional" },
      { value: "unsure", symbol: "?", label: "No sé qué característica priorizar" }
    ]
  },
  {
    category: "MOVILIDAD",
    title: "¿Cómo se mueve la persona que utilizará el colchón?",
    help: "Esta respuesta ayuda a identificar cuándo conviene recibir orientación adicional.",
    answers: [
      { value: "independent", symbol: "→", label: "Puede cambiar de posición por sí misma" },
      { value: "assisted", symbol: "↔", label: "Necesita ayuda para cambiar de posición" },
      { value: "limited", symbol: "＋", label: "Permanece en cama durante periodos prolongados", desc: "Si hay necesidades clínicas, consulta a un profesional." },
      { value: "unknown", symbol: "?", label: "No estoy seguro" }
    ]
  },
  {
    category: "LIMPIEZA",
    title: "¿Qué requisitos de limpieza necesita?",
    help: "Las características concretas de la cubierta deben verificarse en la ficha técnica.",
    answers: [
      { value: "waterproof", symbol: "◇", label: "Cubierta impermeable y fácil de limpiar" },
      { value: "special", symbol: "≋", label: "Requisitos específicos de lavado o desinfección" },
      { value: "standard", symbol: "✓", label: "Uso general, sin requisitos especiales" },
      { value: "unknown", symbol: "?", label: "Necesito orientación" }
    ]
  },
  {
    category: "SIGUIENTE PASO",
    title: "¿Qué te gustaría hacer después?",
    help: "El resultado puede orientarte hacia un producto o hacia una conversación con nuestro equipo.",
    answers: [
      { value: "model", symbol: "▣", label: "Revisar el modelo que podría encajar" },
      { value: "quote", symbol: "$", label: "Solicitar precios o una cotización" },
      { value: "advice", symbol: "↗", label: "Hablar con alguien antes de decidir" }
    ]
  }
];

const state = { index: 0, answers: {} };
const intro = document.querySelector("#intro");
const quiz = document.querySelector("#quiz");
const results = document.querySelector("#results");
const startBtn = document.querySelector("#startBtn");
const backBtn = document.querySelector("#backBtn");
const restartBtn = document.querySelector("#restartBtn");
const stepLabel = document.querySelector("#stepLabel");
const progressFill = document.querySelector("#progressFill");
const questionCategory = document.querySelector("#questionCategory");
const questionTitle = document.querySelector("#questionTitle");
const questionHelp = document.querySelector("#questionHelp");
const options = document.querySelector("#options");

startBtn.addEventListener("click", () => {
  intro.classList.add("hidden");
  results.classList.add("hidden");
  quiz.classList.remove("hidden");
  renderQuestion();
});
backBtn.addEventListener("click", () => {
  if (state.index > 0) {
    state.index--;
    renderQuestion();
  }
});
restartBtn.addEventListener("click", () => {
  state.index = 0;
  state.answers = {};
  results.classList.add("hidden");
  intro.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function renderQuestion() {
  const q = questions[state.index];
  stepLabel.textContent = `PREGUNTA ${state.index + 1} DE ${questions.length}`;
  progressFill.style.width = `${((state.index + 1) / questions.length) * 100}%`;
  questionCategory.textContent = q.category;
  questionTitle.textContent = q.title;
  questionHelp.textContent = q.help || "";
  backBtn.disabled = state.index === 0;
  options.replaceChildren();

  q.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option";
    button.innerHTML = `
      <span class="option-symbol" aria-hidden="true">${escapeHtml(answer.symbol)}</span>
      <span class="option-text">${escapeHtml(answer.label)}${answer.desc ? `<span class="option-desc">${escapeHtml(answer.desc)}</span>` : ""}</span>
      <span class="option-arrow" aria-hidden="true">→</span>`;
    button.addEventListener("click", () => {
      state.answers[q.category] = answer.value;
      if (state.index < questions.length - 1) {
        state.index++;
        renderQuestion();
      } else {
        showResult();
      }
    });
    options.appendChild(button);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showResult() {
  quiz.classList.add("hidden");
  results.classList.remove("hidden");

  const a = state.answers;
  const clinicalFollowup = a["PRIORIDAD"] === "pressure" ||
    a["MOVILIDAD"] === "limited" || a["MOVILIDAD"] === "assisted";
  const institutional = a["CONTEXTO"] === "institution";
  const hygiene = a["LIMPIEZA"] === "waterproof" || a["LIMPIEZA"] === "special";
  const adjustable = a["TIPO DE CAMA"] === "adjustable" || a["TIPO DE CAMA"] === "manual";

  const resultTitle = document.querySelector("#resultTitle");
  const resultCopy = document.querySelector("#resultCopy");
  const productTag = document.querySelector("#productTag");
  const productName = document.querySelector("#productName");
  const productDescription = document.querySelector("#productDescription");
  const reasons = document.querySelector("#reasons");
  const placeholderNote = document.querySelector("#placeholderNote");
  const contactLink = document.querySelector("#contactLink");

  if (clinicalFollowup) {
    resultTitle.textContent = "El siguiente paso más útil es recibir orientación especializada.";
    resultCopy.textContent = "Tus respuestas indican que podría haber necesidades que no conviene resolver únicamente con un cuestionario comercial. Un profesional de la salud puede valorar qué tipo de superficie resulta apropiada.";
    productTag.textContent = "ASESORÍA RECOMENDADA";
    productName.textContent = "Revisar las necesidades antes de elegir";
    productDescription.textContent = "No asignamos automáticamente un colchón terapéutico a partir de estas respuestas.";
    setReasons(reasons, [
      "La movilidad y las necesidades relacionadas con la presión pueden requerir una valoración individual.",
      "Conviene confirmar las especificaciones clínicas y técnicas antes de elegir un producto."
    ]);
  } else {
    resultTitle.textContent = "Estas características pueden ayudarte a acotar la búsqueda.";
    resultCopy.textContent = "Usa esta orientación como punto de partida y confirma las medidas y especificaciones con el equipo de Acolsa antes de tomar una decisión.";
    productTag.textContent = "PERFIL DE BÚSQUEDA";
    productName.textContent = institutional
      ? "Colchón para revisar según requisitos institucionales"
      : "Colchón para revisar según uso y compatibilidad";
    productDescription.textContent = "Esta versión inicial identifica características que conviene comparar; todavía no está conectada al catálogo real.";
    const list = [];
    if (adjustable) list.push("Comprobar que el modelo sea compatible con la articulación de la cama.");
    if (hygiene) list.push("Verificar las características de la cubierta y los métodos de limpieza permitidos.");
    if (institutional) list.push("Confirmar medidas, frecuencia de uso, mantenimiento y requisitos de la institución.");
    if (!list.length) list.push("Comparar soporte, dimensiones, cubierta y uso previsto según las fichas técnicas.");
    setReasons(reasons, list);
  }

  placeholderNote.textContent = "Prototipo: aún no selecciona productos reales. Antes de publicarlo, sustituye este resultado por modelos y especificaciones confirmados.";
  const destination = a["SIGUIENTE PASO"] === "quote" || a["SIGUIENTE PASO"] === "advice"
    ? "https://acolsa.mx/" : "https://acolsa.mx/";
  contactLink.href = destination;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setReasons(list, items) {
  list.replaceChildren();
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[char]));
}
