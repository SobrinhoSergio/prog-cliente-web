function normal() {
    console.log( 'Normal: ', this );
}

const seta = () => {
    console.log( 'Seta: ', this );
};

normal();
seta();