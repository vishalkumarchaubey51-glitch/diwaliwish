const button = document.querySelector(".light-button");
const toast = document.querySelector(".toast");

function createSparkles() {
  const bounds = button.getBoundingClientRect();
  const originX = bounds.left + bounds.width / 2;
  const originY = bounds.top + bounds.height / 2;

  for (let index = 0; index < 18; index += 1) {
    const spark = document.createElement("span");
    const angle = (Math.PI * 2 * index) / 18;
    const distance = 55 + Math.random() * 75;
    spark.className = "spark";
    spark.style.left = `${originX}px`;
    spark.style.top = `${originY}px`;
    spark.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    spark.style.setProperty("--y", `${Math.sin(angle) * distance}px`);
    document.body.appendChild(spark);
    window.setTimeout(() => spark.remove(), 900);
  }
}

button.addEventListener("click", () => {
  createSparkles();
  button.setAttribute("aria-pressed", "true");
  toast.classList.add("show");
  window.setTimeout(() => {
    toast.classList.remove("show");
    button.setAttribute("aria-pressed", "false");
  }, 2600);
});
