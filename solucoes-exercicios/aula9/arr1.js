const produtos = [
    { descricao: 'Coca', qtd: 10 }, // 0
    { descricao: 'Pepsi', qtd: 5 }, // 1
    { descricao: 'Fanta', qtd: 15 }, // 2
    { descricao: 'Sprite', qtd: 7 }, // 3
];

// filter - recebe uma função que retorna true ou false
//          define se o item entrará ou não no array resultante

// console.log(
//     produtos.filter( function( item ) {
//         return item.qtd <= 10;
//     } )
// );

// console.log(
//     produtos.filter( item => item.qtd <= 10 )
// );

console.log( produtos.filter(
    ( item, indice ) => indice >= 2
));