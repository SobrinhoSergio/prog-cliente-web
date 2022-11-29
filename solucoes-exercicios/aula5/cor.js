var corOriginal = document.getElementById( 'nome' )
            .style.backgroundColor;

function aoGanharFoco( ev ) {
    ev.target.style.backgroundColor = '#ffffa8';
}
function aoPerderFoco( ev ) {
    ev.target.style.backgroundColor = corOriginal;
}

document.getElementById( 'nome' )
    .addEventListener( 'focus', aoGanharFoco );
document.getElementById( 'email' )
    .addEventListener( 'focus', aoGanharFoco );

document.getElementById( 'nome' )
    .addEventListener( 'blur', aoPerderFoco );
document.getElementById( 'email' )
    .addEventListener( 'blur', aoPerderFoco );