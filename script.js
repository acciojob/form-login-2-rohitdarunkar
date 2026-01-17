//your JS code here. If required.
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const inputs = document.querySelectorAll("input");

  let message = "";
  inputs.forEach((input) => {
    message += `${input.name}: ${input.value} `;
  });

  alert(message.trim());
});
