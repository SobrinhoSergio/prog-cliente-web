const contatos = [
    { nome: 'Ana', sobrenome: 'Souza', tel: { ddd: '22', numero: '999887766' } },
    { nome: 'Beto', sobrenome: 'Costa', tel: { ddd: '21', numero: '999776655' } },
    { nome: 'Bia', sobrenome: 'Andrade', tel: { ddd: '21', numero: '988554433' } },
    { nome: 'Carla', sobrenome: 'Silva', tel: { ddd: '24', numero: '998606060' } },
    { nome: 'Carlos', sobrenome: 'Rocha', tel: { ddd: '22', numero: '988223344' } },
];

const contatosModificados = contatos.map( c => ({
    nomeCompleto: `${c.sobrenome}, ${c.nome}`,
    telefone: `(${c.tel.ddd}) ${c.tel.numero}`
}));

document.addEventListener( 'DOMContentLoaded', () => {

    desenharContatos( contatosModificados );

    document.getElementById( 'contato' ).addEventListener( 'keyup', ( event ) => {
        const valor = event.target.value;

        document.querySelector( 'h1' ).innerText = valor;

        const contatosFiltrados = contatosModificados.filter(
            c => c.nomeCompleto.toUpperCase().includes( valor.toUpperCase() )
                || c.telefone.includes( valor )
        );

        desenharContatos( contatosFiltrados );
    } );


} );

function desenharContatos( contatos ) {
    const tbody = document.querySelector( 'tbody' );
    tbody.innerHTML = '';
    for ( const c of contatos ) {
        const linha = criarLinha( c );
        tbody.innerHTML += linha;
    }
}

const criarLinha = c => `<tr> <td>${c.nomeCompleto}</td> <td>${c.telefone}</td> </tr>`;