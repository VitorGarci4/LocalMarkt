let produtos;

window.onload = function(){
    var storedUser = localStorage.getItem("user");
    var user = JSON.parse(storedUser);
    
    document.getElementById("user").textContent = user.name;
    document.getElementById("perfil").textContent = user.entryDate;
    document.getElementById("idPerfil").textContent = user.id;

    
}

document.addEventListener("DOMContentLoaded", function(){
    fetch("../Dados/store.json")
    .then((response) => response.json())
    .then((data) => {
        produtos = data;
        const produtosContainer = document.getElementById("produtos-container");

        produtos.forEach((produto, index) => {
            const card = document.createElement("div");
            card.className = "card";
            card.style.width = "18rem";
            card.style.marginRight = "10px";

            const imagem = document.createElement("img");
            imagem.src = produto.imagem;
            imagem.className = "card-img-top";

            const cardbody = document.createElement("div");
            cardbody.className = "card-body";

            const cardTitle = document.createElement("h5");
            cardTitle.className = "card-title";
            cardTitle.texContent = produto.descricao;

            const cardText = document.createElement("p");
            cardText.className = "card-text";
            cardText.texContent = "preço: R$ " + produto.preco.toFixed(2);

            const btnAdicionarAoCarrinho = document.createElement("a");
            btnAdicionarAoCarrinho.href = "#"
            btnAdicionarAoCarrinho.className = "btt btn-primary btn-adicionar-ao-carrinho";
            btnAdicionarAoCarrinho.textContent = "Adicionar ao carrinho";   
            btnAdicionarAoCarrinho.setAttribute = ("da ta-indice", index);

            cardbody.appendChild(cardTitle);
            cardbody.appendChild(cardText);
            cardbody.appendChild(btnAdicionarAoCarrinho);

            card.appendChild(imagem)
            card.appendChild(cardbody)

            produtosContainer.appendChild(card)
        })
    })
    .catch((error) => console.error("Error ao carregar o arquivo Json", error))

    $("#produtos-container").on("click", ".btn-adicionar-ao-carrinho", function(){
        const indexDoproduto = $ (this).data("indice");
        const produtoSelecionado = produtos[indexDoProduto]
        let  carrinho = JSON.parse(localStorage.getItem("carrinho"));
        alert("PRODUTO ADICIONADO AO CARRINHO")
   })
})
