/* Scrivi una funzione che accetti tre argomenti:
un array e due numeri ("a" più piccolo di "b" e "b" grande al massimo quanto il numero di elementi dell'array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra "a" e "b" */


//creo un array di numeri
const numbers = [ 1, 2, 4, 8, 16, 32, 64, 128, 256, 512];

/**
 * funzione per ritornare un array di valori numerici compresi tra a e b
 * @param {array} array numbers array
 * @param {number} a smaller number
 * @param {number} b greater number
 */
function array_of_values(array, a, b) {

    
    const a_b_array = array.filter((number) => {
        /* b <= array.length;
        a < b; */
        return number < b && number > a;
    })

    //con filter() verifico la condizione di esistenza dei valori comprsi tra a e b
    console.log(a_b_array)
    //ritorno i valori compresi tra a e b
}

array_of_values(numbers, 2, 512);

