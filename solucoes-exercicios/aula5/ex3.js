/*
3) Crie uma classe de exceção para representar problemas encontrados
na validação de dados. Faça uma classe Fornecedor que contenha nome,
email e um método para validar seus próprios dados que utilize a
exceção criada.
*/

class ValidacaoError extends Error {
    constructor( mensagem ) {
        super( mensagem );
        this.name = 'ValidacaoError';
    }
}

class Fornecedor {

    nome = '';
    email = '';
    constructor( nome, email ) {
        this.nome = nome;
        this.email = email;
    }
    validar() {
        const tamNome = this.nome.length;
        if ( tamNome < 2 || tamNome > 100 ) {
            throw new ValidacaoError(
                'O nome deve ter de 2 a 100 caracteres.' );
        }
        const tamEmail = this.email.length; // a@b.c
        if ( tamEmail < 5 ) {
            throw new ValidacaoError(
                'O e-mail deve ter pelo menos 5 caracteres.' );
        }
        const naoEncontrouArroba = this.email.indexOf( '@' ) < 0;
        if ( naoEncontrouArroba ) {
            throw new ValidacaoError(
                'O e-mail deve ter arroba (@).' );
        }
    }
}