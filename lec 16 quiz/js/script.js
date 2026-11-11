const start = document.querySelector(".start-btn");
const startScreen = document.querySelector(".start-quiz");
const quizScreen = document.querySelector(".quiz");
const wrapper = document.querySelector(".q-wrapper");
const submit = document.querySelector(".quiz .submit");

const questions = [
  {
    id: 1,
    q: "Which keyword declares a constant in JS?",
    options: ["let", "const", "var"],
    answer: "const",
  },
  {
    id: 2,
    q: "Which method converts JSON string to object?",
    options: ["JSON.parse()", "JSON.stringify()", "Object.assign()"],
    answer: "JSON.parse()",
  },
  {
    id: 3,
    q: "Which operator checks both value & type?",
    options: ["==", "===", "!="],
    answer: "===",
  },
  {
    id: 4,
    q: "Which loop is best for arrays?",
    options: ["for...in", "for...of", "while"],
    answer: "for...of",
  },
  {
    id: 5,
    q: "Which keyword stops loop iteration?",
    options: ["stop", "break", "exit"],
    answer: "break",
  },
  {
    id: 6,
    q: "Which method adds item at end of array?",
    options: ["push()", "pop()", "shift()"],
    answer: "push()",
  },
  {
    id: 7,
    q: "Which value is falsy in JS?",
    options: ["'0'", "0", "'false'"],
    answer: "0",
  },
  {
    id: 8,
    q: "Which scope does var have?",
    options: ["block", "function", "module"],
    answer: "function",
  },
  {
    id: 9,
    q: "Which method selects first match in DOM?",
    options: ["querySelector()", "getElementById()", "querySelectorAll()"],
    answer: "querySelector()",
  },
  {
    id: 10,
    q: "Which keyword defines async function?",
    options: ["await", "async", "promise"],
    answer: "async",
  },
];

function renderQuiz() {
  wrapper.innerHTML = "";
  questions
    .sort(() => Math.random() - 0.5)
    .slice(0, 5)
    .forEach((question, i) => {
      let card = `
        <div class="card bg-white shadow rounded-lg p-6 relative my-2" data-answer =${question.answer} >
          <h2 class="text-lg font-semibold mb-4"> ${i + 1}. ${question.q} </h2>
          <div>
            ${question.options
              .map(
                (o) => `
                <label class="flex items-center justify-start"><input type="radio" name="q${i}" value=${o} class="text-blue-600 mx-2" /><span>${o}</span></label>`,
              )
              .join(" ")}
                <h3 class = "clear absolute bottom-4 right-4 text-sm cursor-pointer text-gray-500 hover:text-red-600 duration-200"> Clear Choices </h3>`;
      wrapper.insertAdjacentHTML("beforeend", card);
    });
}

start.onclick = () => {
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  renderQuiz();
  startTimer();
};

submit.onclick = () => {
  //   card.classList.add("border-green-500");
  // } else card.classList.replace("border-green-500", "border-red-500");

  // card.querySelectorAll("label").forEach((label) => {
  //   let input = label.querySelector("input");

  //   if (input.value === correct) label.querySelector("span").classList.add("text-green-500");
  //   else label.querySelector("span").classList.replace("text-green-500", "text-red-500");
  // });
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "question",
    width: "27em",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, submit it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Submitted!",
        icon: "success",
        width: "23em",
      });
      showResult();
    }
  });
};

wrapper.onclick = (e) => {
  if (e.target.classList.contains("clear")) {
    let name = e.target.parentElement.querySelector("input").name;
    document.querySelectorAll(`input[name ="${name}"]`).forEach((r) => (r.checked = false));
  }
};

const timer = document.querySelector("#timer span");
let countDown;

function startTimer() {
  clearInterval(countDown);
  let t = 120;

  countDown = setInterval(() => {
    let min = Math.floor(t / 60);
    let sec = t % 60;
    sec = sec < 10 ? "0" + sec : sec;
    timer.textContent = `${min}:${sec}`;
    if (t-- <= 0) {
      showResult();
      clearInterval(countDown);
    }
  }, 1000);
}

function showResult(score) {
  score = 0;
  let cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    let selected = card.querySelector("input:checked");
    let correct = card.dataset.answer;

    if (selected && selected.value === correct) score++;
  });
  const result = document.querySelector(".score");
  result.textContent = `You scored: ${score}/5`;
  if (score < 3) result.classList.replace("text-green-500", "text-red-500");
  startScreen.classList.remove("hidden");
  quizScreen.classList.add("hidden");
  wrapper.innerHTML = "";
}
