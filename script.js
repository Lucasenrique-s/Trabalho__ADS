var selecionado = null;

function formarnegoço(){
if(validar()){

var formador = lerformador();
 if(selecionado == null)
     inserirnovo(formador);
 else
     gravador(formador);
     resetar();

}
}

function inserirnovo(banco){
    var tabela = document.getElementById("listinha").getElementsByTagName('tbody')[0];
    var novo = tabela.insertRow(tabela.lenght);
    c1 = novo.insertCell(0);
    c1.innerHTML = banco.nome;
    c2 = novo.insertCell(1);
    c2.innerHTML = banco.serie;
    c3 = novo.insertCell(2);
    c3.innerHTML = banco.pergunta;
    c4 = novo.insertCell(3);
    c4.innerHTML = '<a onClick="Editar(this)"> Edit </a> <a onClick="Deletar(this)"> Delete </a>';
    
    }

function lerformador(){
   var formador = {};
   formador["nome"] = document.getElementById("nome").value;
   formador["serie"] = document.getElementById("serie").value; 
   formador["pergunta"] = document.getElementById("pergunta").value;
   return formador;  
}

function gravador(formador) {
    selecionado.cells[0].innerHTML = formador.nome;
    selecionado.cells[1].innerHTML = formador.serie;
    selecionado.cells[2].innerHTML = formador.pergunta;


}

function Editar(tudin){
    selecionado = tudin.parentElement.parentElement;
    document.getElementById("nome").value = selecionado.cells[0].innerHTML;
    document.getElementById("serie").value = selecionado.cells[1].innerHTML;
    document.getElementById("pergunta").value = selecionado.cells[2].innerHTML;  

}

function resetar() {
    document.getElementById("nome").value = "";
    document.getElementById("serie").value = "";
    document.getElementById("pergunta").value = "";
    selecionado = null;
}

function Deletar(tudin){
    fila = tudin.parentElement.parentElement;
    document.getElementById("listinha").deleteRow(fila.rowIndex);
    resetar();
}

function validar() {
    validon = true;
    validos = true;
    validop = true;

    if(document.getElementById("nome").value == "") {
        validon = false;
        document.getElementById("nomeErro").classList.remove("limpaerronome");
        
        
    }
    else{
        validon = true;
        if (!document.getElementById("nomeErro").classList.contains("limpaerronome"))
            document.getElementById("nomeErro").classList.add("limpaerronome");
            
            
    }
    if(document.getElementById("serie").value == ""){
        validos = false;
        document.getElementById("serieErro").classList.remove("limpaerroserie");

    }
    else{
        validos = true;
        if(!document.getElementById("serieErro").classList.contains("limpaerroserie"))
        document.getElementById("serieErro").classList.add("limpaerroserie");
    }
    if(document.getElementById("pergunta").value == ""){
        validop = false;
        document.getElementById("perguntaErro").classList.remove("limpaerropergunta");

    }
    else{
        validop = true;
        if(!document.getElementById("perguntaErro").classList.contains("limpaerropergunta"))
        document.getElementById("perguntaErro").classList.add("limpaerropergunta");
    }

    return validon, validos, validop;
    
   

}
