class Cliente {
    constructor( nome, email ) { this.nome = nome; this.email = email; }
    validar() { /* ... */ }
}
    
class ClientePJ extends Cliente {
    
constructor( nome, email, cnpj ) { 
    super( nome, email ); 
    this.cnpj = cnpj; 

}

validar() {
    
super.validar();
    
    if ( ! this.cnpj || this.cnpj.length != 14 ) {
        throw new Error( 'CNPJ deve ter 14 dígitos numéricos.' );
    }
    const cnpj = new CNPJ( this.cnpj );
    
    if ( ! cnpj.validar() ) {
        throw new Error( 'CNPJ inválido.' );
    }
}
}
    