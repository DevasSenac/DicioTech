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

// Função para buscar palavra a partir da letra A//

function search_palavra() {
  let input = document.getElementById("searchbar").value; //- Obtém o valor do elemento de entrada de texto com o ID "searchbar" e armazena-o na variável quando a usuária digita a letra "A"//
  input = input.toLowerCase(); //toLowerCase converte em letras minusculas o que for digitado no campo de busca//
  let suggestions = document.getElementsByClassName("suggestions")[0]; //Obtém o primeiro elemento encontrado com a classe "suggestions" que está armazenada em HTML, neste caso do nosso projeto as palavras com a letra A serão chamadas com  elemento [0]//

  // Limpar as sugestões anteriores e permite que se busque nova palavra e não a mesma
  suggestions.innerHTML = "";

  // Essa função garante que as sugestões de palavras só serão exibidas se o campo de busca for preenchido//
  if (input.trim() !== "") {
    let keywords = [
      "API",
      "Browser",
      "Cost",
      "Doctype",
      "Else",
      "Get",
      "Head",
      "Javascript",
    ];

    let search_palavra = keywords.filter(
      (
        keyword // as palavras chaves "keywords" estão utilizando o método .filter do .js que serve para percorrer os elementos e trazer o que nós pedimos, no caso palavras com a letra "a"//
      ) => keyword.toLowerCase().includes(input) // aqui nós transformamos com o keyword.toLowercase as palavras em minusculas e com o includes faz a função de true or false//
    );

    // Exibir as sugestões dentro da busca de palavras
    search_palavra.forEach((keyword) => {
      // O foreach é um loop do javascript que serve, no nosso caso para buscar a letra A dentro do documento ou array//
      let suggestionItem = document.createElement("li"); // essa let suggestionItem, utiliza o método createElement dentro da "li" //
      suggestionItem.textContent = keyword;
      suggestions.appendChild(suggestionItem); // o appendCHild é uma função muito parecida com o inner.HTML., para não haver repetição e confundir o código é sugerido utilizar o appendChild, que significa que será coloca dentro do elemento-pai do codigo//
    });
  }
}

/*Função para o Quiz*/

function verificarResposta() {
  //é responsável por checar se o usuário selecionou a resposta correta em um formulário HTML//
  const respostaSelecionada = document.querySelector(
    'input[name="a1"]:checked'
  ); //para encontrar o primeiro elemento de input com o atributo "name" igual a "a1" que esteja marcado, MULTIPLA escolha//
  const mensagemDiv = document.getElementById("mensagem"); //é o local onde a mensagem de acerto ou erro será exibida na página.//

  if (
    respostaSelecionada &&
    respostaSelecionada.getAttribute("valid") !== "valid"
  ) {
    //Verifica a resposta e caso positivo, a resposta é considerada correta, e uma mensagem de acerto é exibida na div "mensagem".//
    mensagemDiv.textContent =
      "Você acertou! A turma Devas Full Stack é a melhor."; //Mensagem para acerto//
  } else {
    mensagemDiv.textContent =
      "Você errou! A turma Devas Full Stack é a melhor."; //Caso a resposta selecionada seja incorreta,uma mensagem de erro na mesma div "mensagem".//
  }
}

/*Fim Função para o Quiz*/
