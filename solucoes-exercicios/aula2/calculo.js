document.getElementById( 'calcular' ).onclick = function( event ) {
    event.preventDefault();
    var num1 = Number( document.getElementById( 'num1' ).value );
    var num2 = Number( document.getElementById( 'num2' ).value );
    var operador = document.getElementById( 'operador' ).value;
    var resultado = calcular( num1, num2, operador );
    document.getElementById( 'resultado' ).innerText = resultado;
};

function calcular( num1, num2, operador ) {
    switch ( operador ) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num1 / num2;
        case '**': return Math.pow( num1, num2 );
        default : return 0;
    }
}
