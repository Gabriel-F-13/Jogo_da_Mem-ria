const input = document.querySelector(".loginInput");
const button = document.querySelector(".loginButton");
const form = document.querySelector(".loginForm");

// Verificar se o usuário digitou algo no campo de login > 2
const validationInput = ({ target }) => {
  if (target.value.length > 2) {
    button.removeAttribute("disabled");
    return;
  }

  button.setAttribute("disabled", "");
};

const handleSubmit = event => {
  event.preventDefault();

  localStorage.setItem("name_Player", input.value);
  window.location = "pages/game.html";
};

input.addEventListener("input", validationInput);
form.addEventListener("submit", handleSubmit);
