//Mudando cor de fundo do título inicial

var logo_inicial = document.getElementById("logo_inicial"); //Identificando o elemento que será alterado

logo_inicial.addEventListener("mouseover", trocarFundo); //Adiciona um listener para quando o mouse estiver sobre o título
logo_inicial.addEventListener("mouseout", voltarFundo); //Adiciona um listener para quando o mouse sair

function trocarFundo(){ //Função que troca o fundo para quando o mouse estiver no elemento
    logo_inicial.style.backgroundColor = 'yellow';
}

function voltarFundo(){ //Função que volta a cor original quando o mouse sair
    logo_inicial.style.backgroundColor = 'rgb(90, 89, 89)';
}
/*-----------------------------------------------------------------*/

//Saudação no início da página

var data = new Date(); //Recebe a data do sistema
var hora = data.getHours(); //Da data acima, pega a hora
var saudacao = document.getElementById("saudacao"); //Identifica o elemento que terá seu texto mudado de acordo com a hora

//Verificando qual saudação deve ser dada de acordo com a hora do dia
if(hora > 0 && hora < 12) {
    saudacao.innerHTML = `<b>Bom dia!</b>`;
}else if(hora >= 12 && hora < 18) {
    saudacao.innerHTML = `<b>Boa tarde!</b>`;
}else{
    saudacao.innerHTML = `<b>Boa noite!</b>`;
}

/*-----------------------------------------------------------------*/

//Exercício 1

var num_ex1 = document.getElementById("input_num_ex1"); //Identiicando a caixa de entrada para verificação de erros
var btn_adicionar_ex1 = document.getElementById("btn_adicionar_ex1"); //Identificando o botão usado para adicionar um número
var valores_ex1 = []; //Vetor que guardara os valores
var select_ex1 = document.getElementById("select_ex1"); //Identificando a caixa de seleção
var btn_finalizar_ex1 = document.getElementById("btn_finalizar_ex1"); //Identificando o botão de finalização
var resultado_ex1 = document.getElementById("resultado_ex1"); //Identificando a div onde será colocado o resultado

btn_adicionar_ex1.addEventListener("click", adicionar_ex1); //Adicionando um listener para escutar o click no botão adicionar
btn_finalizar_ex1.addEventListener("click", finalizar_ex1); //Adicionando um listener para escutar o click no botão finalizar

//Função que adiciona valores ao vetor
function adicionar_ex1(){
    if(num_ex1.value == ''){
        alert("Digite um número para adicionar.");
    }else if(num_ex1.value < 1 || num_ex1.value > 100){
        alert("Digite números somente no intervalo pedido");
        num_ex1.value = '';
    }else{
        var item_ex1 = document.createElement("option"); //Criando um elemento para ser adicionado como opção no select
        
        resultado_ex1.innerHTML = ""; //Limpando o resultado
        
        item_ex1.text = `Valor ${num_ex1.value} adicionado`; //Inserindo um texto para ser exibido no elemento
        select_ex1.appendChild(item_ex1); //Adiciona o elemento na caixa de seleção

        valores_ex1.push(Number(num_ex1.value));

        num_ex1.value = ""; //Limpando a caixa de inserção
        num_ex1.focus(); //Voltando o foco para a caixa de inserção
        
    }
}

//Função que finaliza a inserção de valores
function finalizar_ex1(){
    if(valores_ex1.length == 0){
        alert("Digite alguns valores antes de finalizar.");
    }else{
        resultado_ex1.innerHTML = ""; //Limpando o resultado

        resultado_ex1.innerHTML += `<br>Ao todo foram digitados ${valores_ex1.length} número(s)<br>`;
        resultado_ex1.innerHTML += `O maior valor digitado foi ${Math.max.apply(null, valores_ex1)}<br>`;
        resultado_ex1.innerHTML += `O menor valor digitado foi ${Math.min.apply(null, valores_ex1)}<br>`;
        resultado_ex1.innerHTML += `A soma dos valores digitados resulta em ${somar_ex1()}<br>`;
        resultado_ex1.innerHTML += `A média dos valores digitados resulta em ${media_ex1()}<br>`;
    }
}

//Função para somar valores de um array
function somar_ex1(){
    var soma_ex1 = 0;
    
    for(valor_ex1 in valores_ex1){
        soma_ex1 += Number(valores_ex1[valor_ex1]);
    }

    return soma_ex1;
}

//Função para calcular a média dos valores digitados
function media_ex1(){
    
    return (somar_ex1() / valores_ex1.length);
}

/*-----------------------------------------------------------------*/

//Exercício 2

var input_num_ex2 = document.getElementById("input_num_ex2"); //Identificando o campo com o valor a ser digitado
var resultado_ex2 = document.getElementById("resultado_ex2"); //Identificando a div onde será colocado o resultado
var btn_adicionar_ex2 = document.getElementById("btn_adicionar_ex2"); //Identificando o botão que adiciona números
var btn_calcular_ex2 = document.getElementById("btn_calcular_ex2"); //Identificando o botão de calcular
var valores_ex2 = []; //Array para onde vão os valores adicionados
var res_ex2 = 1;

btn_adicionar_ex2.addEventListener("click", adicionar_ex2); //Adicionando um listener para escutar o clique do botão
btn_calcular_ex2.addEventListener("click", mostrar_ex2); //Adicionando um listener para escutar o clique do botão

//Função que adiciona números no array de valores
function adicionar_ex2(){
    if(input_num_ex2.value < 1 || input_num_ex2.value > 10){ //Verificando se o número digitado pertence ao intervalo solicitado
        alert("Digite somente números no intervalo solicitado.");
    }else{
        valores_ex2.push(Number(input_num_ex2.value)); //Adicionando o valor digitado no array
        resultado_ex2.innerHTML = `<br>Número <b>${input_num_ex2.value}</b> adicionado!`;
        input_num_ex2.value =''; //Limpando o valor após digitar
        input_num_ex2.focus(); //Voltando o foco para a caixa de digitação
    }
}

//Função que mostra os resultados
function mostrar_ex2(){

    resultado_ex2.innerHTML = ''; //Reiniciando a variável que mostra o resultado

    for(var i in valores_ex2){ //Percorre todos os elementos do array
        res_ex2 = 1; //Inicia a variável de resultado para o cálculo do fatorial
        //valores_ex2[i] = fatorial_ex2(valores_ex2[i]); //Atualiza a posição
        resultado_ex2.innerHTML += `<br>Fatorial de ${valores_ex2[i]} = ${fatorial_ex2(valores_ex2[i])}`;
    }

    //resultado_ex2.innerHTML = `Calculado o fatorial: ${valores_ex2}`;
    valores_ex2 = []; //Reiniciando o array de números
}

//Função recursiva que realiza o cálculo do fatorial
function fatorial_ex2(n){
    if(n == 1){ //Se o número for 1, sabe-se que 1! = 1
        return(res_ex2);
    }else{ //Senao, é necessário calcular o fatorial
        res_ex2 *= n; //Que pode ser calculado com o resultado atual * o número passado por parametro
        return fatorial_ex2(n - 1); //Chama-se a mesma função para o cálculo do n-1
    }
}

/*-----------------------------------------------------------------*/

//Exercício 3

//Identificando os elementos do exercício
var input_num_ex3 = document.getElementById("input_num_ex3");
var btn_adicionar_ex3 = document.getElementById("btn_adicionar_ex3");
var btn_finalizar_ex3 = document.getElementById("btn_finalizar_ex3");
var resultado_ex3 = document.getElementById("resultado_ex3");
var valores_ex3 = []; //Vetor usado para armazenar os valores

btn_finalizar_ex3.disabled = true; //Desabilitando o botão de finalização para evitar erros
btn_adicionar_ex3.addEventListener("click", adicionar_ex3); //Adicionando listener para o botão de adicionar
btn_finalizar_ex3.addEventListener("click", finalizar_ex3); //Adicionando listener para o botão de finalizar

//Função que adiciona valores ao array
function adicionar_ex3(){
    if(input_num_ex3.value == "" || input_num_ex3.value < 0){
        alert("Por favor, digite um valor válido.");
    }else if(valores_ex3.length < 5){
        valores_ex3.push(Number(input_num_ex3.value)); //Adiciona os números no array já os convertendo para number
        
        if(valores_ex3.length == 5){ //Caso já tenham sido digitados 5 valores
            btn_finalizar_ex3.disabled = false; //Habilita o botão para finalizar
        }

        resultado_ex3.innerHTML = `<br>Número ${input_num_ex3.value} adicionado`;

        input_num_ex3.value = "";
        input_num_ex3.focus();
        
    }else{
        alert("Já foram digitados 5 números, agora clique em \"Finalizar\"");
    }
}

//Função que mostra a raiz quadrada na tela
function finalizar_ex3() {
    //Utilizando da função map, que irá realizar a função passada por parâmetro em todos os elementos do array
    var raiz_valores_ex3 = valores_ex3.map(function(n){
        var num_aux_ex3 = (n ** (1/2));
        return (num_aux_ex3.toFixed(2)); //Retorna o resultado com duas casas decimais
    })

    /*Utilizando arrow functions
    
    var raiz_valores_ex3 = valores_ex3.map(n => (n ** (1/2)))

    */

    resultado_ex3.innerHTML = `<br>Resultado: ${raiz_valores_ex3}`; //Colocando o resultado em tela
}

/*-----------------------------------------------------------------*/

//Exercício 4


//Identificando os elementos do exercício
var input_nome_ex4 = document.getElementById("input_nome_ex4");
var input_num_ex4 = document.getElementById("input_num_ex4");
var resultado_ex4 = document.getElementById("resultado_ex4");
var btn_verificar_ex4 = document.getElementById("btn_verificar_ex4").addEventListener("click", verificar_ex4); //Adicionando um listener para o click do botão;
var btn_limpar_ex4 = document.getElementById("btn_limpar_ex4").addEventListener("click", limpar_ex4);

function verificar_ex4(){
    resultado_ex4.innerHTML = "";
    
    if(input_num_ex4.value == "" || input_nome_ex4.value == ""){
        alert("Por favor preencha todos os campos.");
    }else if(input_num_ex4.value < 0){
        alert("Por favor digite uma idade válida");
    }else{
        //Separando o primeiro nome digitado
        if(input_nome_ex4.value.indexOf(" ") == -1){
            resultado_ex4.innerHTML = `<br>Olá, ${input_nome_ex4.value}!`;
        }else{
            resultado_ex4.innerHTML = `<br>Olá, ${input_nome_ex4.value.substring(0, input_nome_ex4.value.indexOf(" "))}!`;
        }

        //Verificando a idade
        if(input_num_ex4.value < 18){
            resultado_ex4.innerHTML += " Você é menor de idade.";
        }else{
            resultado_ex4.innerHTML += " Você é maior de idade";
        }
    }
    
}

//Função que limpa os campos do formulario
function limpar_ex4(){
    resultado_ex4.innerHTML = "";
    input_num_ex4.value = "";
    input_nome_ex4.value = "";
}

/*-----------------------------------------------------------------*/

//Exercício 5

//Identificando os elementos por meio do query selector
var msg_ex5 = document.querySelector("h3#msg_ex5");
var foto_ex5 = document.querySelector("img#foto_ex5");
var hora_ex5 = document.querySelector("select#hora_ex5");

msg_ex5.innerHTML = saudacao.innerHTML; //Setando o valor inicial da saudação, que já foi verificada anteriormente
hora_ex5.addEventListener("change", verificar_ex5); //Adiciona um listener para o usuário mudar a opção selecionada

//Setando a foto a ser carregada inicialmente de acordo com o horário
if(hora > 0 && hora < 12) {
    foto_ex5.src = "../Images/fotomanha.png";
    hora_ex5.value = "manha";
}else if(hora >= 12 && hora < 18) {
    foto_ex5.src = "../Images/fototarde.png";
    hora_ex5.value = "tarde";
}else{
    foto_ex5.src = "../Images/fotonoite.png";
    hora_ex5.value = "noite";
}

//Verifica qual opção foi selecionada
function verificar_ex5(){
    if(hora_ex5.value == "manha") { //Se for manhã, seta os valores de acordo
        msg_ex5.innerHTML = "Bom Dia!";
        foto_ex5.src = "../Images/fotomanha.png";
    }else if(hora_ex5.value == "tarde") { //Se for tarde, seta os valores de acordo
        msg_ex5.innerHTML = "Boa Tarde!";
        foto_ex5.src = "../Images/fototarde.png";
    }else{ //Se for noite, seta os valores de acordo
        msg_ex5.innerHTML = "Boa Noite!";
        foto_ex5.src = "../Images/fotonoite.png";
    }
}

/*-----------------------------------------------------------------*/

//Exercício 6

//Identificando os elementos do exercício
var check_1_ex6 = document.getElementById("check_1_ex6");
var check_2_ex6 = document.getElementById("check_2_ex6");
var check_3_ex6 = document.getElementById("check_3_ex6");
var check_4_ex6 = document.getElementById("check_4_ex6");
var btn_finalizar_ex6 = document.getElementById("btn_finalizar_ex6").addEventListener("click", verificar_ex6);
var resultado_ex6 = document.getElementById("resultado_ex6");
var valores_ex6 = [];

check_1_ex6.addEventListener("change", function(){adicionar(check_1_ex6.checked, check_1_ex6.value)});
check_2_ex6.addEventListener("change", function(){adicionar(check_2_ex6.checked, check_2_ex6.value)});
check_3_ex6.addEventListener("change", function(){adicionar(check_3_ex6.checked, check_3_ex6.value)});
check_4_ex6.addEventListener("change", function(){adicionar(check_4_ex6.checked, check_4_ex6.value)});

function verificar_ex6(){   
   //Calculando o valor total
    resultado_ex6.innerHTML = `<br>Valor total: R$${ valores_ex6.reduce(somar_ex6).toFixed(2)}`;

    //Verificando quantos valores são maiores que 170
    resultado_ex6.innerHTML += `<br>Quantidade de produtos com preço maior que R$170,00: ${valores_ex6.filter(valor_maior170_ex6).length}`;

    //Verificando se existe algum valor maior que 300
    resultado_ex6.innerHTML += `<br>Existe algum valor que ultrapassa R$300,00?: ${valores_ex6.some(maior_300_ex6) ? "Sim": "Não"}` //Usando o operador ternário(?)

    //Verificando se todos os valores são maiores que 200
    resultado_ex6.innerHTML += `<br>Todos os valores são maiores que R$200,00?: ${valores_ex6.every(todos_maior200_ex6) ? "Sim": "Não"}`; //Usando o operador ternário(?)
}

//Função que adiciona valores ao array a ser analisado
function adicionar(estado, valor){
    valor = Number(valor); //Converte o valor para número inicialmente
    
    //Se a checkbox estiver ativada, o valor será inserido
    if(estado){
        valores_ex6.push(valor);
    }else{ //Senão o valor deve ser retirado
        valores_ex6.splice(valores_ex6.indexOf(valor), 1); //Usada a função splice para não haver risco de deixar "buracos" no array
    }
}

//Função usada por reduce() para calcular o valor total
function somar_ex6(total, valor){
    return total + valor;
}

//Função usada por filter() para verificar de existe valor maior que 170
function valor_maior170_ex6(valor){
    return valor > 170;
}

//Função usada por some() para verificar se existe pelo menos um valor maior que 300
function maior_300_ex6(valor){
    return valor > 300;
}

//Função usada por every() para verificar se todos os valores são maiores que 200
function todos_maior200_ex6(valor){
    return valor > 200;
}