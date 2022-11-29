const contatos = [
    { nome: 'Ana', sobrenome: 'Souza', tel: { ddd: '22', numero: '999887766' } },
    { nome: 'Beto', sobrenome: 'Costa', tel: { ddd: '21', numero: '999776655' } },
    { nome: 'Bia', sobrenome: 'Andrade', tel: { ddd: '21', numero: '988554433' } },
    { nome: 'Carla', sobrenome: 'Silva', tel: { ddd: '24', numero: '998606060' } },
    { nome: 'Carlos', sobrenome: 'Rocha', tel: { ddd: '22', numero: '988223344' } },
];

// (c)
// Transforme a lista original em outra lista de contatos, conforme o exemplo:
//  [ { nomeCompleto: 'Souza, Ana', telefone: '(22) 999887766' }, ... ]

console.log(
    contatos.map( c => ({
        nomeCompleto: `${c.sobrenome}, ${c.nome}`,
        telefone: `(${c.tel.ddd}) ${c.tel.numero}`
    }))
    // (d) Começando com "S"
    .filter( c => c.nomeCompleto.startsWith( 'S' ) )
        // c => c.nomeCompleto[ 0 ] == 'S'
        // c => c.nomeCompleto.indexOf( 'S' ) == 0
);



// (a)
// console.log(
//     contatos.filter( c => c.tel.ddd == '22' )
// );

// (b)
// Transformar em items como esse:
// [ 'Ana Souza – (22) 999887766', ... ]
// console.log(
//     contatos.map( c => `${c.nome} ${c.sobrenome} - (${c.tel.ddd}) ${c.tel.numero}` )
// );
