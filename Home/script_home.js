var logo_inicial = document.getElementById("logo_inicial");

logo_inicial.addEventListener("mouseover", trocarFundo);
logo_inicial.addEventListener("mouseout", voltarFundo);

function trocarFundo(){
    logo_inicial.style.backgroundColor = 'yellow';
    logo_inicial.style
}

function voltarFundo(){
    logo_inicial.style.backgroundColor = 'rgb(90, 89, 89)';
}
/*-----------------------------------------------------------------*/

//Saudação no início da página

var data = new Date(); //Recebe a data do sistema
var hora = data.getHours(); //Da data acima, pega a hora
var saudacao = document.getElementById("saudacao"); //Identifica o elemento que terá seu texto mudado de acordo com a hora

//Verificando qual saudação deve ser dada de acordo com a hora do dia
if(hora < 0 && hora > 12) {
    saudacao.innerHTML = `<b>Bom dia!</b>`
}else if(hora >= 12 && hora < 18) {
    saudacao.innerHTML = `<b>Boa tarde!</b>`
}else{
    saudacao.innerHTML = `<b>Boa noite!</b>`
}