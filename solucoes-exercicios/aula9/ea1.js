function entreMinMax( arr, min, max ) {
    // return arr.filter( item => item >= min && item <= max );
    return arr.filter( function ( item ) {
        return item >= min && item <= max;
    });
}

console.log(
    entreMinMax( [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], 7, 9 )
);