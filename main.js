const btn = document.querySelector(".btn");

var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

btn.addEventListener("click", (e) => {
  if (!emailRegex.test(email.value)) {
    email.classList.add("error");
    document
      .querySelector(".error-email.error-desktop")
      .classList.remove("hidden");
    document
      .querySelector(".error-email.error-mobile")
      .classList.remove("hidden");
  } else {
    email.classList.remove("error");
    document
      .querySelector(".error-email.error-desktop")
      .classList.add("hidden");
    document.querySelector(".error-email.error-mobile").classList.add("hidden");
    email.value = "";
  }
});
