// função utilizada para animação digitando na plataforma//

function ativaDigitando(elemento, frase, velocidade) {
  //A função ativaDigitando() simula o efeito de digitação de um texto, exibindo-o letra por letra no elemento HTML especificado. Nessa fun~ção existem 3 parametros.//
  const arrayTexto = frase.split(""); //transforma a frase em um array de caracteres//
  let textoDigitado = "";

  const digitarProximaLetra = () => {
    //função recursiva que retira a primeira letra do array, adiciona-a ao texto digitado e exibe o texto atualizado no elemento HTML.//
    if (arrayTexto.length === 0) {
      elemento.innerHTML = frase;
      return;
    }

    textoDigitado += arrayTexto.shift();
    elemento.innerHTML = textoDigitado;

    setTimeout(digitarProximaLetra, velocidade); //a função é chamada novamente após um intervalo de tempo (velocidade)//
  };

  digitarProximaLetra();
}

const titulo = document.querySelector(".digitandohello_world"); //Quando não há mais letras no array, ou seja, todas as letras foram digitadas, a frase completa é exibida no elemento.//
ativaDigitando(titulo, `<"HELLO WORLD">`, 50);

setTimeout(() => {
  const olaMundo = document.querySelector(".digitandoola_mundo");
  ativaDigitando(olaMundo, `<"OLÁ, MUNDO!">`, 55);
}, 1500);

// Seu código JavaScript
const botoesLetra = document.querySelectorAll(".letra-click");

botoesLetra.forEach((botao) => {
  botao.addEventListener("click", () => {
    const letraInicial = botao.value;
    const apiUrl = `http://localhost:8080/termos/inicial/${letraInicial}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Armazena os dados retornados da API em localStorage
        localStorage.setItem("termosFiltrados", JSON.stringify(data));

        // Redireciona para a página "api.html"
        window.location.href = "api.html";
      })
      .catch((error) => console.error("Erro ao obter dados da API:", error));
  });
});
// função que renderiza a pagina
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
