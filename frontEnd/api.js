// Função para renderizar a página
document.addEventListener("DOMContentLoaded", () => {
  // Recupera os dados do localStorage
  const data = JSON.parse(localStorage.getItem("termosFiltrados"));

  // Carrega os termos filtrados na página
  const letraApi = document.getElementById("termos-filtrados");
  letraApi.innerHTML = "";

  data.forEach((item) => {
    const row = document.createElement("div");
    row.classList.add("div-termo-detalhado");
    row.innerHTML = `
      <p class="quizN">${item.termo}</p>
      <h2 class="TituloA">Significado: ${item.traducao}</h2>
      <h4 class="apiA">Tradução: ${item.significado}</h4>
    `;
    letraApi.appendChild(row);
  });
});
