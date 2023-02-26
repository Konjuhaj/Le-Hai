const firstElement = document.querySelector(".bg-move");
const secondElement = document.querySelector(".bg-move.second");
const thirdElement = document.querySelector(".bg-move.third");

window.addEventListener("scroll", () => {
  const windowTop = document.documentElement.scrollTop;
  const elementPos = firstElement.getBoundingClientRect().top;
  const leftPos = (windowTop - elementPos) / 5 - 500;
  const rightPos = (elementPos - windowTop) / 5 + 100;

  console.log(leftPos);
  firstElement.style.left = leftPos + "px";
  secondElement.style.left = rightPos + "px";
  thirdElement.style.left = leftPos + "px";
});
