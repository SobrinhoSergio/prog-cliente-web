import repetir, { paraMaiusculo, paraMinusculo } from "./transformacao.js";

document.addEventListener( 'DOMContentLoaded', function() {

    document.getElementById( 'mai' ).addEventListener( 'click',
        function() {
            const output = document.querySelector( 'output' );
            output.innerText = paraMaiusculo(
                document.getElementById( 'nome' ).value
            );
        } );

    document.getElementById( 'min' ).addEventListener( 'click',
        function() {
            const output = document.querySelector( 'output' );
            output.innerText = paraMinusculo(
                document.getElementById( 'nome' ).value
            );
        } );

    document.getElementById( 'rep' ).addEventListener( 'click',
        function() {
            const output = document.querySelector( 'output' );
            output.innerText = repetir(
                document.getElementById( 'nome' ).value
            );
        } );

} );