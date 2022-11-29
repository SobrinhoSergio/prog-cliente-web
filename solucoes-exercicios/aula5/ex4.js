/*
4) Modifique o Exercício 1 para que os dados do formulário sejam
validados através de um objeto de Fornecedor. Se todos os dados
estiverem corretos, exiba uma mensagem (fictícia) "Salvo com sucesso".
Do contrário, exiba a mensagem de exceção para o usuário.
*/

document.getElementById( 'salvar' ).addEventListener( 'click', salvar );

function salvar( ev ) {
    ev.preventDefault();
    const nome = document.getElementById( 'nome' ).value;
    const email = document.getElementById( 'email' ).value;
    const fornecedor = new Fornecedor( nome, email );
    try {
        fornecedor.validar();
        document.getElementById( 'mensagem' ).innerText =
            'Salvo com sucesso';
    } catch ( err ) {
        document.getElementById( 'mensagem' ).innerText = err.message;
    }
}