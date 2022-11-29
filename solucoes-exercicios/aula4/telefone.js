class Telefone {
    ddd = '';
    numero = '';
    constructor( ddd, numero ) {
        this.ddd = ddd;
        this.numero = numero;
    }
    formatar() {
        return '(' + this.ddd + ') ' + this.numero;
    }
}