/**
 * * Operadores
 */
let numero = 15;
let numero10 = 10;

/**
 * * Operadores uso =, -, *, % y **
 */
function exerciseOne() {
  numero -= 1;
  document.write(numero + "<br>");
  numero += 1;
  document.write(numero + "<br>");
  numero *= 2;
  document.write(numero + "<br>");
  numero %= 1;
  document.write(numero + "<br>");
  numero ** 2;
  document.write(numero + "<br>");
}
exerciseOne();

function exerciseTwo() {
  numero10--;
  document.write(numero10 + "<br>");
  numero10++;
  document.write(numero10 + "<br>");
}
exerciseTwo();
/*operadores*/

function exerciseThree() {
  let result = numero10 ** 2;
  document.write(result + "<br>");
  let result2 = numero10++;
  document.write(result2 + "<br>");
}
exerciseThree();

/*concatenacion*/
function exerciseFour() {
  let saludo = "!Bienvenida! ";
  let question = "Como estas?";

  let resultado = saludo + question;
  document.write(resultado + "<br>");
}
exerciseFour();
/*concatenacion 1*/
function exerciseFive() {
  let resultado2 = "" + numero + numero10;
  document.write(resultado2 + "<br>");
}
exerciseFive();

function exerciseSix() {
  let nombre = "josimar leon";
  let frase = `soy ${nombre} gamer offline`;
  let frase2 = "mi nombre es 'josimar' y soy un tigre";
  document.write(frase + "<br>");
  document.write(frase2 + "<br>");
}
exerciseSix();
/**
 * * operadores logicos: el = asigna no compara,  ==,===,!=
 */

function exerciseSeven() {
  let numero4 = 12;
  let numero5 = 23;

  document.write((numero4 != numero5) + "<br>");
}

exerciseSeven();

function exerciseEight() {
  let valor = true;
  let valor2 = true;

  let result = valor && valor2;
  let result2 = valor || valor2;
  let result3 = !valor;

  document.write(result+ "<br>");
  document.write(result2+ "<br>");
  document.write(result3+ "<br>");
}
exerciseEight();

/**
 * TODO: Exercise
 */

let num1 = 12;
let num2 = 24;
let num3 = 25;
let num4 = 92;
let num5 = 91;

let op = (num1 < num2 || num2 < num3) && !num1 && num5 != num3;

document.write(op);
