document.addEventListener( 'DOMContentLoaded', function() {
    console.log( 'DOM carregado' );

    document.getElementById( 'salvar' ).addEventListener( 'click', salvar );
} );

window.addEventListener( 'load', function() {
    console.log( 'Conteúdo completo carregado' );
} );

const PRODUTOS = 'produtos';
const ULTIMO_ID = 'ultimoId';

function salvar( ev ) {
    ev.preventDefault();

    const produto = {
        id: gerarId(),
        descricao: document.getElementById( 'descricao' ).value,
        quantidade: parseInt( document.getElementById( 'quantidade' ).value ),
        preco: parseFloat( document.getElementById( 'preco' ).value ),
    };

    if ( ! localStorage.getItem( PRODUTOS ) ) {
        const produtos = [];
        produtos.push( produto );
        localStorage.setItem( PRODUTOS, JSON.stringify( produtos ) );
    } else {
        const produtosString = localStorage.getItem( PRODUTOS );
        const produtos = JSON.parse( produtosString );
        produtos.push( produto );
        localStorage.setItem( PRODUTOS, JSON.stringify( produtos ) );
    }

    alert( 'Salvo.' );
    window.location.href = "index.html"; // Redireciona
}

function gerarId() {
    let ultimo = localStorage.getItem( ULTIMO_ID );
    if ( ! ultimo ) {
        ultimo = 1;
    } else {
        ultimo = Number( ultimo ) + 1;
    }
    localStorage.setItem( ULTIMO_ID, ultimo );
    return ultimo;
}