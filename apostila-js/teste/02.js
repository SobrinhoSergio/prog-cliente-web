class Pessoa {
    _nome = '';
    
    constructor( nome ) { 
        this._nome = nome; 
    }
    
    get nome() { 
        return this._nome; 
    }
    
    set nome( valor ) { 
        this._nome = valor; 
    }
}
    
const p = new Pessoa( 'Ana' );  
console.log( p.nome ); // Ana
p.nome = 'Sérgio';
console.log( p.nome ); // Sérgio
    