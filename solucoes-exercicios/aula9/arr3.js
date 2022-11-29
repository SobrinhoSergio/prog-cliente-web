const produtos = [
    { descricao: 'Coca', qtd: 10 },
    { descricao: 'Pepsi', qtd: 5 },
    { descricao: 'Fanta', qtd: 15 },
    { descricao: 'Sprite', qtd: 7 },
];

// Array com descrição de produtos com qtd menor ou igual a 10

console.log(
    produtos
        .filter( item => item.qtd <= 10 )
        .map( item => item.descricao )
);