function Telefone( ddd, numero ) {
    this.ddd = ddd;
    this.numero = numero;
    this.formatar = function() {
        return '(' + this.ddd + ') ' + this.numero;
    };
}