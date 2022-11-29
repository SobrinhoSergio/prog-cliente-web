class Exemplo {
    x = 10;
    um() {
        console.log( 'Um:', this.x );
    }

    dois = function() {
        console.log( 'Dois:', this.x );
    }

    tres = () => {
        console.log( 'Três:', this.x );
    }
}

const e = new Exemplo();
// const f1 = e.um.bind( e );
// f1();
// const f2 = e.dois.bind( e );
// f2();
const f3 = e.tres;
f3();