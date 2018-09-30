
let botao = document.querySelector(".botao")
let secreta = document.querySelector(".secreta")
let secreta1 = document.querySelector(".secreta1")
let nome;
let idade;
let salario;
let emprestimo;

function pedirEmprestimo(){
    nome = prompt("Qual é o seu nome? ");
    idade = prompt("Olá " + nome + " qual é a sua idade? ");
    salario = prompt(nome + " quanto você ganha ?");

while (isNaN(salario)) {
    alert("Valor de salario incorreto!");
    salario = prompt(nome + " quanto você ganha ?");
}   

emprestimo = prompt("Qual o valor do emprestimo que você deseja ?");
 while (isNaN(emprestimo)) {
    alert("Valor de emprestimo incorreto!");
    emprestimo = prompt("Qual o valor do emprestimo que você deseja ?");
}
 
if ((idade >= 21 && idade <= 55) && (emprestimo <= 5 * salario)) {
    botao.style.backgroundColor="green";
    botao.innerHTML="APROVADO!";
    secreta.style.display="flex";
    secreta1.style.display="none"

 }

 else {
    botao.style.backgroundColor ="red";
    botao.innerHTML ="REPROVADO!";
    secreta1.style.display="flex";
    secreta.style.display="none"
    }
 }

botao.onclick = pedirEmprestimo;