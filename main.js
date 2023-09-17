const circlesContainer = document.querySelector(".container");
const body = document.querySelector("body");
const allCircleBoxes = document.querySelectorAll(".circle-box");
const allBars = document.querySelectorAll(".bar");

circlesContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".circle-box");
  if (!clicked) return;

  const color = clicked.dataset.color;

  allCircleBoxes.forEach((box) => box.classList.remove("active"));
  clicked.classList.add("active");

  allBars.forEach(
    (bar) => (bar.style.backgroundColor = `var(--body-${color})`)
  );

  clicked.closest(
    ".circle-box"
  ).style.background = `linear-gradient(to right bottom, var(--grad-${color}))`;

  body.style.backgroundColor = `var(--body-${color})`;
});
