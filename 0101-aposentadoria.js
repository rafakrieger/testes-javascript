const nome = 'Jessica';
const idade = 58;
const sexo = 'F';
const contribuicao = 25;

if ((sexo === 'M' && contribuicao >= 35) || (sexo === 'F' && contribuicao >= 30)) {
    if ((sexo === 'M' && idade + contribuicao >= 95) || (sexo === 'F' && idade + contribuicao >= 85)) {
      console.log(`${nome}, você já pode se aposentar!`);
    } else {
        console.log(`${nome}, você ainda não pode se aposentar.`);
    }
  } else {
    console.log(`${nome}, você ainda não pode se aposentar.`);
  }