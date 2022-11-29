document.addEventListener( 'DOMContentLoaded', aoCarregar );

function aoCarregar() {

    const clientesString = localStorage.getItem( 'clientes' );
    const clientes = ! clientesString ? [] : JSON.parse( clientesString );

    const tbody = document.querySelector( 'tbody' );
    for ( const c of clientes ) {
        tbody.append( criarLinha( c ) )
    }
}

function criarLinha( cliente ) {
    const tr = document.createElement( 'tr' );

    const tdNome = document.createElement( 'td' );
    tdNome.innerText = cliente.nome;

    const tdEmail = document.createElement( 'td' );
    tdEmail.innerText = cliente.email;

    const tdTelefone = document.createElement( 'td' );
    tdTelefone.innerText = cliente.telefone;

    tr.append( tdNome, tdEmail, tdTelefone );
    return tr;
}