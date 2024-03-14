$(document).ready(function(){
    
    //recupera o carrinho do local storage
    const carrinho = JSON.parse(localStorage.getItem("carriho")) || [];

    //elemento da lista
    const listaElement = $("#lista");

    //elemnto de total 
    const totalElement = $("#total");

    function exibirCarrinho(){
        listaElement.empty();

        //Variavel para acumular o preco
        let totalprec = 0;

        //Interacao sobre os elementos do carrinho
        $.each(carrinho, function(index, item){
            const ListItem = $("<li>").text(
                `${item.descricao} - preço: R$ ${item.preco.tofixed(2)}`
            );

            
            const removeButton = $("<button>")
            .text("❌")
            .css("margin- left", "10px")
            .click(function(){
                removerItemDoCarrinho(index);
            })
            
            
            ListItem.append(removeButton)
            listaElement.append(ListItem);
            totalpreco += item.preco;
        });

        totalElement.text(`total: R$ ${totalpreco.tofixed(2)}`)
    }
    function removerItemDoCarrinho(index){
        carrinho.splice(index, 1);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        exibirCarrinho();
    }
    exibirCarrinho();
});

function gerarDocumentoWord(){
    document.getElementById("pedido").style.display ="none"
    const listaElement = document.getElementById("lista");
    const totalElement = document.getElementById("total");

    // clona a lita para evitar modificações diretas na original
    const listaClone = listaElement.cloneNode(true);

    // remover o botão de remove no word
    $(listaClone).find("button").remove();

    const listaHtml = listaClone.innerHTML;
    const totalHtml = totalElement.innerHTML;

    const conteudoHtml = `
    <html>
        <head>
        <meta charset="UTF-8" />
        </head>
        <body>
            <h1>PEDIDO CONFIRMADO<h1>
            <h3>Agradecemos sua preferencia<h3>
            <br/>
            ${listaHtml}
            <br/><br/>
            ${totalElement}

        </body>
    </html>
    `;

    const blob = new Blob([conteudoHtml],{type: "application/msword"});
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "carrinho.doc";
    link.click();
    document.getElementById("pedido").style.display ="block";
}

function sucessoClone(){
    document.getElementById("pedido").style.display = "none"
}
