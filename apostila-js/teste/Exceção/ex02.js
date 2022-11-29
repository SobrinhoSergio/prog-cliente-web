function dividir( x, y ) {
    
    if ( 0 === y ) {
        throw new Error( 'Dividir por zero não é permitido.' );
    }
    
    return x / y;
}
    
try {

    console.log( dividir( 10, 2 ) ); // Imprime "5"
    console.log( dividir( 10, 0 ) ); // Lança exceção
    console.log( dividir( 10, 5 ) ); // Essa linha nunca é executada!

} catch ( e ) {
    console.log( 'Ocorreu uma exceção:', e.message );
}
    