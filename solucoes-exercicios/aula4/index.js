const t1 = new Telefone( '22', '22334455' );
const t2 = new Telefone( '11', '847843647' );
const t3 = new Telefone( '21', '988776655' );

const telefones = [ t1, t2, t3 ];

for ( let i in telefones ) {
    const tel = telefones[ i ];
    desenharLinha( i, tel );
}

document.getElementById( 'adicionar' ).onclick = function( ev ) {
    ev.preventDefault();
    const ddd = document.getElementById( 'ddd' ).value;
    const numero = document.getElementById( 'numero' ).value;
    const tel = new Telefone( ddd, numero );
    telefones.push( tel );
    desenharLinha( telefones.length + 1, tel );
};

function desenharLinha( i, tel ) {
    const indice = Number( i ) + 1;
    const linha = '<tr> ' +
        '<td>' + indice + '</td>' +
        '<td>' + tel.formatar() + '</td>' +
        '</tr>';
    document.querySelector( 'tbody' ).innerHTML += linha;
}