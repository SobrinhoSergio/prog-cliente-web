import { Cliente } from './cliente.js';

document.addEventListener( 'DOMContentLoaded', aoCarregar );

function aoCarregar() {
    document.getElementById( 'salvar' ).addEventListener( 'click', salvar );
}

function salvar( ev ) {
    ev.preventDefault();

    const cliente = new Cliente(
        document.getElementById( 'nome' ).value,
        document.getElementById( 'email' ).value,
        document.getElementById( 'telefone' ).value,
    );

    const clientesString = localStorage.getItem( 'clientes' );
    const clientes = ! clientesString ? [] : JSON.parse( clientesString );
    clientes.push( cliente );
    localStorage.setItem( 'clientes', JSON.stringify( clientes ) );
}