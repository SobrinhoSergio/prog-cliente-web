/*
6. Crie uma função clonar que retorne o clone de um objeto fornecido como argumento.
*/

function clonar( obj ) {
    return { ...obj };
}

console.log(
    clonar( { produto: 'Pipoca', quantidade: 20 } )
);