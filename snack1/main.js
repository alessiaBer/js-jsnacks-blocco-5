/* Crea un array di 10 oggetti che rappresentano una zucchina, 
indicando per ognuna varietà, peso e lunghezza. 
Calcola quanto pesano tutte le zucchine. */


// creo un array di 10 oggetti
const courgette = [
    {
        variety: 'Nero di Milano',
        weight: 100,
        length: 14
    },
    {
        variety: 'Romanesco',
        weight: 70,
        length: 10
    },
    {
        variety: 'Ortolano di Faenza',
        weight: 120,
        length: 7
    },
    {
        variety: 'Lunga fiorentina',
        weight: 150,
        length: 20
    },
    {
        variety: 'Siciliano',
        weight: 225,
        length: 50
    },
    {
        variety: 'Striata di Napoli',
        weight: 110,
        length: 16
    },
    {
        variety: 'Bianca triestina',
        weight: 90,
        length: 10
    },
    {
        variety: 'Tondo di Piacenza',
        weight: 180,
        length: 8
    },
    {
        variety: 'Tondo di Nizza',
        weight: 180,
        length: 7
    },
    {
        variety: 'Trombetta di Albenga',
        weight: 500,
        length: 60
    }
]

//setto la somma su 0
let sum = 0;

//con il forEach estrapolo il peso di ciascun oggetto dell'array
courgette.forEach((element) => {
    //creo una variabile e le assegno il valore 'weight' di ogni elemento
    const weight = element.weight;

    // assegno alla somma il valore di tutti i pesi sommati
    sum += weight;
})

//stampo in console il peso totale
console.log(`The total weight is ${sum} gr`);
