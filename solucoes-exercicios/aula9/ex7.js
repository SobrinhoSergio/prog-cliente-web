/*
7. Modifique a função clonar para que receba um segundo objeto como argumento.
Se esse segundo objeto for fornecido, o clone retornado deve ter suas propriedades
sobrescritas com as do objeto.
Exemplo: clonar( { nome: "Ana", idade: 7 }, { idade:8 } )
deve retornar { nome: "Ana", idade: 8 }.
*/
function clonar( obj, obj2 ) {
    return { ...obj, ...obj2 };
}

console.log(
    clonar( { produto: 'Pipoca', quantidade: 20 }, { preco: 5.00, quantidade: 25 } )
);