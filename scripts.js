const socials = document.querySelector(".socials");
const btnShare = document.querySelector(".share__trigger");

btnShare.addEventListener("click", () => {
  socials.classList.toggle("active");
});
