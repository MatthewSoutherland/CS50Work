const quizData = [
    {
      question: "Which of the following sets tool height?",
      a: "G42",
      b: "G43",
      c: "G10",
      d: "G11",
    },
    {
      question: "Which of the following represents workpiece offsets?",
      a: "G03",
      b: "G57",
      c: "G98",
      d: "G112",
    },
    {
      question:
        "Which of the following represents clockwise circular interpolation?",
      a: "G01",
      b: "G02", //correct
      c: "G03",
      d: "G04",
    },
    {
      question: "Which of the following will stop the machine?",
      a: "M00",
      b: "M11",
      c: "M22",
      d: "M178",
    },
    {
      question: "What does this symbol represent // ?",
      a: "Flatness",
      b: "Parallelism",
      c: "Symmetry",
      d: "Straightness",
    },
    {
      question: "What does this symbol represent O ?",
      a: "Circular runout",
      b: "Thickness",
      c: "Concentricity",
      d: "Circularity (Roundness)",
    },
    {
      question: "What does this symbol represent < ?",
      a: "Total runout",
      b: "Angularity",
      c: "Circular runout",
      d: "Flatness",
    },
    {
      question: "How many full turns on a Micrometer = .100?",
      a: "1",
      b: "4",
      c: "10",
      d: "25",
    },
    {
      question:
        "Which would most accurately describe your true position, if Datam A is off by .001 and Datam B is off by .0001?",
      a: "0",
      b: ".001",
      c: ".002",
      d: ".003",
    },
  ];

  const questionEl = document.getElementById("question");
  const qaEl = document.getElementById("qa");
  const qbEl = document.getElementById("qb");
  const qcEl = document.getElementById("qc");
  const qdEl = document.getElementById("qd");
  const submitBtn = document.getElementById("submit");
  const ulEl = document.getElementById("ul");
  const one = document.getElementById("a");
  const two = document.getElementById("b");
  const three = document.getElementById("c");
  const four = document.getElementById("d");

  let currentQuiz = 0;
  let answer = undefined;
  let score = 0;

  loadQuiz();

  function loadQuiz() {
    console.log(
      `score: ${score} currentQuiz: ${currentQuiz} b.checked: ${b.checked}`
    );
    one.checked = false;
    two.checked = false;
    three.checked = false;
    four.checked = false;
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    qaEl.innerText = currentQuizData.a;
    qbEl.innerText = currentQuizData.b;
    qcEl.innerText = currentQuizData.c;
    qdEl.innerText = currentQuizData.d;
  }

  submitBtn.addEventListener("click", () => {
    currentQuiz++;
    if (
      (currentQuiz == 1 && b.checked) ||
      (currentQuiz == 2 && b.checked) ||
      (currentQuiz == 3 && b.checked) ||
      (currentQuiz == 4 && a.checked) ||
      (currentQuiz == 5 && b.checked) ||
      (currentQuiz == 6 && d.checked) ||
      (currentQuiz == 7 && b.checked) ||
      (currentQuiz == 8 && b.checked) ||
      (currentQuiz == 9 && c.checked)
    ) {
      score++;
    }
    if (currentQuiz < quizData.length) {
      if (
        a.checked == false &&
        b.checked == false &&
        c.checked == false &&
        d.checked == false
      ) {
        alert("Please make a selection");
      } else {
        loadQuiz();
      }
    } else {
      qaEl.innerText = "";
      qbEl.innerText = "";
      qcEl.innerText = "";
      qdEl.innerText = "";
      ulEl.style.display = "none";
      submitBtn.style.display = "none";
      questionEl.innerText = `Test Complete
      Your score: ${score}/9`;
    }
  });
