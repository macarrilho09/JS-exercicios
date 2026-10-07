function exercicio01() {
const numero = Math.floor(Math.random() * 100) + 1;
const antecessor = numero - 1;
const sucessor = numero + 1;

document.getElementById("numero01").textContent = numero;
document.getElementById("antecessor01").textContent = antecessor;
document.getElementById("sucessor01").textContent = sucessor; 
}
document.getElementById("btn01").addEventListener("click", exercicio01);


function exercicio02() {
const numero = Math.floor(Math.random() * 100) + 1;
const valor15 = numero * 1.15;

document.getElementById("numero02").textContent = numero;
document.getElementById("valor02").textContent = valor15;
}
document.getElementById("btn02").addEventListener("click", exercicio02);


function exercicio03() {
const numero = Math.floor(Math.random() * 100) + 1;
const desconto = numero * 0.25;
const valorcomdesconto = numero - desconto;

document.getElementById("numero03").textContent = numero;
document.getElementById("desconto03").textContent = desconto;
document.getElementById("valorFinal03").textContent = valorcomdesconto;
}
document.getElementById("btn03").addEventListener("click", exercicio03);


function exercicio04() {
const numero1 = Math.floor(Math.random() * 100) + 1;
const numero2 = Math.floor(Math.random() * 100) + 1;
const numero3 = Math.floor(Math.random() * 100) + 1;
const triplo = (numero1 + numero2 + numero3) * 3;

document.getElementById("numero01Ex04").textContent = numero1;
document.getElementById("numero02Ex04").textContent = numero2;
document.getElementById("numero03Ex04").textContent = numero3;
document.getElementById("resultado04").textContent = triplo;
}
document.getElementById("btn04").addEventListener("click", exercicio04);



function exercicio05() {
  const numero1 = sortear(0, 100);
  const numero2 = sortear(1, 100); 
  const soma = numero1 + numero2;
  const produto = numero1 * numero2;
  const quociente = numero1 / numero2;

  document.getElementById("numero01Ex05").textContent = numero1;
  document.getElementById("numero02Ex05").textContent = numero2;
  document.getElementById("soma05").textContent = soma;
  document.getElementById("produto05").textContent = produto;
  document.getElementById("quociente05").textContent = quociente.toFixed(2);
}
document.getElementById("btn05").addEventListener("click", exercicio05);



function exercicio06() {
const nota1 = Math.floor(Math.random() * 10) + 1;
const nota2 = Math.floor(Math.random() * 10) + 1;
const nota3 = Math.floor(Math.random() * 10) + 1;
const media = (nota1 + nota2 + nota3) / 3;

document.getElementById("nota01").textContent = nota1;
document.getElementById("nota02").textContent = nota2;
document.getElementById("nota03").textContent = nota3;
document.getElementById("media06").textContent = media.toFixed(2);
}
document.getElementById("btn06").addEventListener("click", exercicio06);

function exercicio07() {
const numero = Math.floor(Math.random() * 1000) + 1;
const numero2 = Math.floor(Math.random() * 50) + 1;
const porcentagemdesconto = numero2 / 100;
const desconto = numero * porcentagemdesconto;
const valorcomdesconto = numero - desconto;

document.getElementById("produto07").textContent = numero;
document.getElementById("porcentagem07").textContent = numero2;
document.getElementById("valorDesconto07").textContent = desconto.toFixed(2);
document.getElementById("valorFinal07").textContent = valorcomdesconto.toFixed(2);
}
document.getElementById("btn07").addEventListener("click", exercicio07);