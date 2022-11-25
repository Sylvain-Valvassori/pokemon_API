// ========== CLOSE TO ZERO ==========
/*
    const tabOne   = [ -9, -8, -7, 2 , 4, 5, 9];
    const tabTwo   = [ -9, -8, -7, -4, 5, 9, 7, 6];
    const tabThree = [ -9, -8, -7, -4, 4, 9, 7, 6];

    const closeToZero = (tab) => {

        let negativeValue = tab.filter( e => e < 0).reduce( (max, e) => Math.max(max, e));
        let positiveValue = tab.filter( e => e > 0).reduce( (min, e) => Math.min(min, e));

        const condition1 = ( Math.abs(negativeValue) > positiveValue) || ( Math.abs(negativeValue) == positiveValue);

        let valueClosetoZero = condition1 ? positiveValue : negativeValue;

        console.log('negativeValue is ' + negativeValue);
        console.log('positiveValue is ' + positiveValue);
        console.log('valueClosetoZero is ' + valueClosetoZero);
    }


    closeToZero(tabOne);
*/
// ===================================

// ========== FIZZ BIZZ ==========
/*
    const ruche = { 3: 'Fizz', 4: 'Bizz'}

    const isDivide = (number) => {
        let result = '';

        for( const key in ruche ){
            (number % key == 0)? result += ruche[key] : null ;
        }

        console.log( result );
    }


    isDivide(12);
*/
// ===================================
