document.addEventListener( 'DOMContentLoaded', function() {
    preencherProdutos();
    document.getElementById( 'remover' ).addEventListener( 'click', remover );
} );

const PRODUTOS = 'produtos';

function preencherProdutos() {
    const produtosString = localStorage.getItem( PRODUTOS );
    const produtos = JSON.parse( produtosString );

    const tbody = document.querySelector( 'tbody' );

    // tbody.innerHTML = ''; // Idem às linhas do while abaixo
    while ( tbody.firstChild ) {
        tbody.firstChild.remove();
    }

    let totalQuantidade = 0, totalPreco = 0;
    for ( let p of produtos ) {
        criarLinha( p, tbody );
        totalQuantidade += p.quantidade;
        totalPreco += p.preco;
    }

    desenharTotalizacao( totalQuantidade, totalPreco );
}

function criarLinha( produto, tbody ) {
    const tr = document.createElement( 'tr' );
    tr.addEventListener( 'click', mudarCor );

    const tdId = document.createElement( 'td' );
    tdId.innerText = produto.id;

    const tdDescricao = document.createElement( 'td' );
    tdDescricao.innerText = produto.descricao;

    const tdQuantidade = document.createElement( 'td' );
    tdQuantidade.innerText = produto.quantidade;

    const tdPreco = document.createElement( 'td' );
    tdPreco.innerText = produto.preco;

    tr.append( tdId, tdDescricao, tdQuantidade, tdPreco );
    tbody.append( tr );
}

function mudarCor( ev ) {
    const tr = ev.target.parentElement;
    tr.classList.toggle( 'selecionado' );
}

function desenharTotalizacao( totalQuantidade, totalPreco ) {
    const tds = Array.from( document.querySelectorAll( 'tfoot td' ) );
    // console.log( tds );
    tds[ 2 ].innerText = totalQuantidade;
    tds[ 3 ].innerText = totalPreco;
}

function remover() {
    const selecionados = document.querySelectorAll( 'tbody tr.selecionado' );
    if ( selecionados.length < 1 ) {
        alert( 'Por favor, selecione uma linha.' );
        return;
    }

    const produtosString = localStorage.getItem( PRODUTOS );
    const produtos = JSON.parse( produtosString );

    // console.log( selecionados );
    for ( const tr of selecionados ) {
        const indice = tr.sectionRowIndex; // Índice da linha no tbody
        produtos.splice( indice, 1 ); // Remove o array de produtos
        tr.remove();
    }

    localStorage.setItem( PRODUTOS, JSON.stringify( produtos ) );
}