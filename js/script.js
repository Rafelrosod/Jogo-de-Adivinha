let numero = (Math.random() * 100).toFixed(0) ;
let tentativa = 0;

function resposta(){
    let value = parseFloat(document.getElementById("valor").value);
    tentativa++;
    if(numero == value){    
        document.getElementById("resultado").innerText = "O valor está correto, tentativa: " + tentativa;
    }else if(numero > value){
        document.getElementById("resultado").innerText = "Incorreto o valor é maior, número de tentativa: " + tentativa;
    }else if(numero < value){
        document.getElementById("resultado").innerText = "Incorreto o valor é menor, número de tentativa: " + tentativa;
    }
}