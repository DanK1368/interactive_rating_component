const form = document.querySelector(".card__form");
const card = document.querySelector(".card");
const ratings = document.querySelectorAll(".card__rating");
const message = document.querySelector(".message");
const messageText = document.querySelector(".message__rating");

// animation
function animate() {
  const text = document.querySelector(".card__text");
  const heading = document.querySelector(".card__heading");
  const btn = document.querySelector(".card__btn");
  const timeLine = gsap.timeline({
    defaults: { duration: 0.4, ease: "linear" },
  });
  timeLine.fromTo(heading, { y: "-50%", opacity: 0 }, { y: "0%", opacity: 1 });
  timeLine.fromTo(text, { y: "-30%", opacity: 0 }, { y: "0%", opacity: 1 });
  ratings.forEach((rating) => {
    timeLine.fromTo(
      rating,
      { x: "-150%", rotate: "0deg", opacity: 0 },
      { x: "0%", rotate: "360deg", opacity: 1 }
    );
  });
  timeLine.fromTo(btn, { scale: 0 }, { scale: 1 });
}

animate();

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    messageText.textContent = `You have selected ${rating.value} out of 5`;
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  card.classList.add("d-none");
  message.classList.remove("d-none");
});
