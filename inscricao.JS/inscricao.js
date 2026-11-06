const nome1 = "Maria";
let idade1 = 19;
const curso1 = "Desenvolvimento de Sistemas";
let mensalidade1 = 450;
let vagas1 = 5;
let desconto1 = true;

console.log("===== INSCRIÇÃO EM CURSOS =====");
console.log("=====PESSOA1=====")

console.log("Nome: " + nome1);
console.log("Idade: " + idade1);
console.log("Curso: " + curso1);

if (idade1 < 16) {
    console.log("Inscricao nao permitida.");
}
else if (idade1 >= 16 && idade1 <= 17) {
    console.log("Necessario autorizacao do responsavel.");
}
else {
    console.log("Inscricao permitida.");
}


if (vagas1 > 0) {
    console.log("Existem vagas disponiveis.");
}
else {
    console.log("Nao existem vagas disponiveis.");
}

console.log("Mensalidade original: R$ " + mensalidade1);

if (desconto1 === true) {
    mensalidade1 = mensalidade1 - (mensalidade1 * 15 / 100);
    console.log("Desconto de 15% aplicado.");
}
else {
    console.log("Sem desconto.");
}

console.log("Mensalidade final: R$ " + mensalidade1);

if (mensalidade1 < 300) {
    console.log("Curso economico.");
}
else if (mensalidade1 >= 300 && mensalidade1 <= 600) {
    console.log("Curso intermediario.");
}
else {
    console.log("Curso premium.");
}

const nome2 = "Joao";
let idade2 = 17;
const curso2 = "Informatica";
let mensalidade2 = 300;
let vagas2 = 3;
let desconto2 = false;

console.log("===== PESSOA 2 =====");

console.log("Nome: " + nome2);
console.log("Idade: " + idade2);
console.log("Curso: " + curso2);


if (idade2 < 16) {
    console.log("Inscricao nao permitida.");
}
else if (idade2 >= 16 && idade2 <= 17) {
    console.log("Necessario autorizacao do responsavel.");
}
else {
    console.log("Inscricao permitida.");
}

if (vagas2 > 0) {
    console.log("Existem vagas disponiveis.");
}
else {
    console.log("Nao existem vagas disponiveis.");
}

console.log("Mensalidade original: R$ " + mensalidade2);

if (desconto2 === true) {
    mensalidade2 = mensalidade2 - (mensalidade2 * 15 / 100);
    console.log("Desconto de 15% aplicado.");
}
else {
    console.log("Sem desconto.");
}

console.log("Mensalidade final: R$ " + mensalidade2);


if (mensalidade2 < 300) {
    console.log("Curso economico.");
}
else if (mensalidade2 >= 300 && mensalidade2 <= 600) {
    console.log("Curso intermediario.");
}
else {
    console.log("Curso premium.");
}

const nome3 = "Ana";
let idade3 = 15;
const curso3 = "Administracao";
let mensalidade3 = 700;
let vagas3 = 0;
let desconto3 = true;


console.log("Nome: " + nome3);
console.log("Idade: " + idade3);
console.log("Curso: " + curso3);


if (idade3 < 16) {
    console.log("Inscricao nao permitida.");
}
else if (idade3 >= 16 && idade3 <= 17) {
    console.log("Necessario autorizacao do responsavel.");
}
else {
    console.log("Inscricao permitida.");
}


if (vagas3 > 0) {
    console.log("Existem vagas disponiveis.");
}
else {
    console.log("Nao existem vagas disponiveis.");
}

console.log("Mensalidade original: R$ " + mensalidade3);

if (desconto3 === true) {
    mensalidade3 = mensalidade3 - (mensalidade3 * 15 / 100);
    console.log("Desconto de 15% aplicado.");
}
else {
    console.log("Sem desconto.");
}

console.log("Mensalidade final: R$ " + mensalidade3);


if (mensalidade3 < 300) {
    console.log("Classificação:curso economico.");
}
else if (mensalidade3 >= 300 && mensalidade3 <= 600) {
    console.log("Classificação:curso intermediario.");
}
else {
    console.log("Classificação:curso premium.");
}