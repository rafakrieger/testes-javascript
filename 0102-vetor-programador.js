
const programador = {
    nome: 'Rafael',
    idade: 36,
    tecnologias: [
        {nome: 'Java', especialidade: 'Desktop'},
        {nome: 'HTML', especialidade: 'Web/Mobile'},
        {nome: 'CSS', especialidade: 'Web/Mobile'},
        {nome: 'Javascript', especialidade: 'Web/Mobile'}
    ]
};

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`);

