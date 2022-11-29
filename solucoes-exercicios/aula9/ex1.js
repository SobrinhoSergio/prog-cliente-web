/*
1. Crie uma função concatenar que retorne um array resultante da concatenação
de dois arrays recebidos como argumento. Use o operador de espalhamento na solução.
*/

function concatenar( arr1, arr2 ) {
    return [ ...arr1, ...arr2 ];
}

console.log(
    concatenar( [ 1, 2 ], [ 3, 4, 5 ] )
);