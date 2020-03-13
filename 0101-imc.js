const nome = 'Rafael';
const peso = 75;
const altura = 1.74;
const sexo = 'M';

const imc = peso / (altura * altura);

if (imc >= 30) {
    console.log(`${nome}, seu IMC é de ${imc}. Você está acima do peso`);
} else {
    console.log(`${nome}, seu IMC é de ${imc}. Você não está acima do peso`);
}