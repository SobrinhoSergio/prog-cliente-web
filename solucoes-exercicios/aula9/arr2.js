const produtos = [
    { descricao: 'Coca', qtd: 10 },
    { descricao: 'Pepsi', qtd: 5 },
    { descricao: 'Fanta', qtd: 15 },
    { descricao: 'Sprite', qtd: 7 },
];

// map() é para transformar um array
//      função recebida transforma o item

// console.log(
//     produtos.map( function( item ) {
//         return item.descricao;
//     } )
// );

console.log(
    produtos.map( item => item.descricao )
);