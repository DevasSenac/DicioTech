document.getElementById("apisButton").addEventListener("click", () => {
  const apiUrl = "http://localhost:8080/termos";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const tableBody = document.querySelector("#apiTable tbody");
      tableBody.innerHTML = "";

      data.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${item.termo}</td>
          <td>${item.traducao}</td>
          <td>${item.significado}</td>
          <td>${item.categoria}</td>
        `;
        tableBody.appendChild(row);
      });
    })
    .catch((error) => console.error("Erro ao obter dados da API:", error));
});

