const countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 215);
countDownDate.setHours(countDownDate.getHours() + 2);
countDownDate.setMinutes(countDownDate.getMinutes() + 1);
countDownDate.setSeconds(countDownDate.getSeconds() + 35);

const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
  }
}, 1000);

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

function openModal(element) {
  const img = element.querySelector("img");
  modalImg.src = img.src;
  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("active"), 10);
  document.addEventListener("keydown", handleKeyPress);
}

function closeModal() {
  modal.classList.remove("active");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
  document.removeEventListener("keydown", handleKeyPress);
}

function handleKeyPress(e) {
  if (e.key === "Escape") closeModal();
}

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

const twiceBlock1 = document.querySelector(".twice-block1");
const twiceBlock1Img = document.querySelector(".bridge-img");

twiceBlock1.addEventListener("mouseenter", () => {
  twiceBlock1Img.classList.add("bridge-img-rotete");
});
twiceBlock1.addEventListener("mouseout", () => {
  twiceBlock1Img.classList.remove("bridge-img-rotete");
});

const twiceBlock2 = document.querySelector(".twice-block2");
const twiceBlock2Img = document.querySelector(".bridge-img2");

twiceBlock2.addEventListener("mouseenter", () => {
  twiceBlock2Img.classList.add("bridge-img-rotete");
});
twiceBlock2.addEventListener("mouseout", () => {
  twiceBlock2Img.classList.remove("bridge-img-rotete");
});
