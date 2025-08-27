document.addEventListener("DOMContentLoaded", () => {
  // Referencias a las secciones
  const heroSection = document.getElementById("hero");
  const quizSection = document.getElementById("quiz");
  const resultSection = document.getElementById("result");
  const finalCtaSection = document.getElementById("final-cta");

  // Referencias a los botones
  const startChallengeBtn = document.getElementById("start-challenge-btn");
  const startArBtn = document.getElementById("start-ar-btn");

  // Contenido del Quiz
  const quizData = [
    {
      question:
        "De estas tres brochas, ¿cuál es la indispensable para un difuminado perfecto?",
      options: [
        {
          text: "Brocha Plana",
          img: "Imagenes/brocha-plana-1-.webp",
        },
        {
          text: "Brocha para Difuminar",
          img: "Imagenes/169249-800-800.webp",
        },
        {
          text: "Brocha Angular",
          img: "Imagenes/FOTO-PRODUCTO-BROCHA-F3.webp",
        },
      ],
      correct: 1,
    },
    {
      question:
        "¿Qué producto es CLAVE para que las sombras pigmenten más y duren horas?",
      options: [
        {
          text: "Corrector",
          img: "Imagenes/product-packshot.webp",
        },
        {
          text: "Base de Maquillaje",
          img: "Imagenes/w=800,h=800,fit=pad.webp",
        },
        {
          text: "Primer de ojos",
          img: "Imagenes/FS190F-1-1.webp",
        },
      ],
      correct: 2,
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  // --- Lógica del Flujo de la Página ---

  startChallengeBtn.addEventListener("click", () => {
    heroSection.classList.add("hidden");
    quizSection.classList.remove("hidden");
    displayQuestion();
  });

  startArBtn.addEventListener("click", () => {
    alert(
      "Activando cámara... (Simulación)\n\n¡Te ves genial con ese Smokey Eye! Ahora aprende a hacerlo tú misma."
    );
    resultSection.classList.add("hidden");
    finalCtaSection.classList.remove("hidden");
  });

  // --- Lógica del Quiz ---

  function displayQuestion() {
    const quizContent = document.getElementById("quiz-content");
    quizContent.innerHTML = ""; // Limpiar contenido anterior

    const questionData = quizData[currentQuestionIndex];

    const questionContainer = document.createElement("div");
    questionContainer.className = "quiz-question-container";

    const questionTitle = document.createElement("h2");
    questionTitle.textContent = questionData.question;
    questionContainer.appendChild(questionTitle);

    const optionsContainer = document.createElement("div");
    optionsContainer.className = "quiz-options";

    questionData.options.forEach((option, index) => {
      const optionElement = document.createElement("div");
      optionElement.className = "quiz-option";
      optionElement.innerHTML = `
                <img src="${option.img}" alt="${option.text}">
                <span>${option.text}</span>
            `;
      optionElement.addEventListener("click", () => selectAnswer(index));
      optionsContainer.appendChild(optionElement);
    });

    questionContainer.appendChild(optionsContainer);
    quizContent.appendChild(questionContainer);
  }

  function selectAnswer(selectedIndex) {
    if (selectedIndex === quizData[currentQuestionIndex].correct) {
      score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      displayQuestion();
    } else {
      showResults();
    }
  }

  function showResults() {
    quizSection.classList.add("hidden");
    resultSection.classList.remove("hidden");

    const resultTitle = document.getElementById("result-title");
    const resultText = document.getElementById("result-text");

    if (score === 2) {
      resultTitle.textContent = "¡Maestra del Pincel!";
      resultText.textContent =
        "¡Impresionante! Tienes un conocimiento sólido. Es hora de perfeccionar esa técnica y convertirla en arte.";
    } else if (score === 1) {
      resultTitle.textContent = "Artista en Potencia";
      resultText.textContent =
        "¡Vas por un excelente camino! Tienes la pasión, ahora solo necesitas pulir la técnica para lograr resultados impecables.";
    } else {
      resultTitle.textContent = "Aprendiz Apasionada";
      resultText.textContent =
        "¡Tienes toda la curiosidad para empezar! Estás en el lugar perfecto para construir una base sólida y profesional.";
    }
  }
});
