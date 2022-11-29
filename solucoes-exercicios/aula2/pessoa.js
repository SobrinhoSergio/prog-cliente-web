// Crie um objeto de pessoa e coloque nele os dados do formulário.
// Utilize as mesmas propriedades vistas anteriormente.
// Utilize a função console.table() para imprimir o objeto.

document.getElementById( 'enviar' ).onclick = function( event ) {
    event.preventDefault();
    // console.log( event.target );

    var nome = document.getElementById( 'nome' ).value;
    var ddd = document.getElementById( 'ddd' ).value;
    var numero = document.getElementById( 'numero' ).value;

    var pessoa = {
        nome: nome,
        telefone: {
            ddd: ddd,
            numero: numero
        }
    };
    console.table( pessoa );
};
