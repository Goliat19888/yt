const LINKS = document.querySelectorAll(".main ul li");
const POPUP = document.querySelectorAll(".popup");
const BUTTON = document.querySelector(".button");

counter = 1;

LINKS.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".popup" + counter).classList.remove("hidden");
    if (counter >= 10) {
      counter = 1;
    } else {
      counter++;
    }
  });
});

POPUP.forEach((popu) => {
  popu.addEventListener("click", () => {
    popu.classList.add("hidden");
    document.querySelectorAll(".lista").forEach((list) => {
      list.classList.add("hidden");
    });
    document.querySelector(".lista" + counter).classList.remove("hidden");
  });
});

function reset() {
  counter = 1;
  // listNum = 1;
  document.querySelectorAll(".lista").forEach((link) => {
    link.classList.add("hidden");
  });
  document.querySelector(".lista" + counter).classList.remove("hidden");
}
