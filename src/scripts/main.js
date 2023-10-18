document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("form-sorteador")
    .addEventListener("submit", function (ev) {
      ev.preventDefault();
      let numeroMaximo = document.getElementById("numero-maximo").value;
      numeroMaximo = parseInt(numeroMaximo);

      let numeroAleatorio = Math.random() * numeroMaximo;
      numeroAleatorio = Math.round(numeroAleatorio);
      document.querySelector(".resultado").style.display = "block";
      if (numeroAleatorio == 0) {
        numeroAleatorio = 1;
      } else {
        document.getElementById("resultado-valor").innerText = numeroAleatorio;
      }
    });
});
