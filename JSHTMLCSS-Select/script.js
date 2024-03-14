document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".dropdown");
  const chevron = document.querySelector(".chevron");

  chevron.addEventListener("click", () => {
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  });

  const options = document.querySelectorAll(".option");
  options.forEach((option) => {
    option.addEventListener("click", () => {
      const inputField = document.querySelector(".input-field");
      inputField.value = option.textContent;
      dropdown.style.display = "none";
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".input-with-dropdown")) {
      dropdown.style.display = "none";
    }
  });
});
