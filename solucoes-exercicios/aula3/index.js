var telefones = [];

document.getElementById( 'adicionar' ).onclick = function( event ) {
    event.preventDefault();

    const telefone = new Telefone(
        document.getElementById( 'ddd' ).value,
        document.getElementById( 'numero' ).value,
    );
    telefones.push( telefone );

    // adicionarNaTabela( telefone );

    telefones.sort( function( a, b ) {
        if ( a.ddd > b.ddd ) {
            return 1;
        }
        if ( a.ddd < b.ddd ) {
            return -1;
        }
        // Sabemos que os DDDs são iguais, logo compara o número
        if ( a.numero > b.numero ) {
            return 1;
        }
        if ( a.numero < b.numero ) {
            return -1;
        }
        return 0; // Números iguais
    } );

    desenharTelefones( telefones );
};

function adicionarNaTabela( telefone ) {
    const linha = '<tr> <td>' + telefone.ddd + '</td>' +
        ' <td>' + telefone.numero + '</td> ' +
        ' <td> <a href="callto:' +
            telefone.ddd + telefone.numero +
            '" >Ligar</a> </td> ' +
        '</tr>';
    document.querySelector( 'tbody' ).innerHTML += linha;
}

function desenharTelefones( telefones ) {
    document.querySelector( 'tbody' ).innerHTML = '';
    for ( const i in telefones ) {
        const tel = telefones[ i ];
        adicionarNaTabela( tel );
    }
}
