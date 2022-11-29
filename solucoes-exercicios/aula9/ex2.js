/*
2. Modifique a função concatenar para que receba um número
indefinido de arrays – sem usar arguments – e retorne a concatenação de todos eles.
*/

function concatenar( ...matriz ) {
    let novo = [];
    for ( const arr of matriz ) {
        novo.push( ...arr );
    }
    return novo;
}

console.log(
    concatenar( [ 1, 2 ], [ 3, 4, 5 ], [ 7, 8, 9, 10 ] )
);