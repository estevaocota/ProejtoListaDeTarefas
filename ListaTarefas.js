let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");
let contador = 0;

function addTarefa() {
    //PEGAR O VALOR DIGITADO NO INPUT
    let valorInput = input.value;

    //SE NÃO FOR VAZIO, NULO E INDEFINIDO
    if((valorInput !=="") && (valorInput !==null) && (valorInput !==undefined)) {
        
        ++contador;
        
        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <ion-icon id="icone_${contador}" class="ellipse-outline" name="ellipse-outline"></ion-icon>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><ion-icon name="trash-outline"></ion-icon>Deletar</button>
        </div>
    </div>`
    
    //ADICIONAR NOVO ITEM NO MAIN
    main.innerHTML += novoItem;

    //ZERAR O CAMPO INPUT
    input.value ="";
    input.focus();

    }

}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    
    if(classe=="item") {
        item.classList.add("clicado");

        var icone = document.getElementById("icone_"+id);
        icone.classList.remove("ellipse-outline");
        icone.classList.add("checkmark-circle-outline");
        
        //QUANDO MARCAR TAREFA, JOGAR PARA O FIM DA LISTA
        item.parentNode.appendChild(item);

    }else {
        item.classList.remove("clicado");

        var icone = document.getElementById("icone_"+id);
        icone.classList.remove("checkmark-circle-outline");
        icone.classList.add("ellipse-outline");
    }
}

input.addEventListener("keypress", function(event) {
    //SE TECLOU ENTER
    if (event.key === "Enter") {
        event.preventDefault();
        btnAdd.click();
    }
})