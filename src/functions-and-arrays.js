
//! Iteration #1: Find the maximum
// queria fazer por iteration mas como só tem dois argumentos, fiz por if else. 
let result1 = maxOfTwoNumbers(14, 50)
let result2 = maxOfTwoNumbers(78, 12) 
console.log(result1, result2)

function maxOfTwoNumbers(a , b) {
  if (a > b) {
    return a 
  } else if (b > a ) {
    return b
  }
}



//! Iteration #2: Find longest word

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
let result3 = findLongestWord(words) ;
console.log(result3) ;

function findLongestWord(lista) {
  let wordsCount = []
  lista.forEach(word => {
    return wordsCount.push(word.length)
  }); // pegar o length de cada palavra dentro da array e enviar pra nova array
  let Index = wordsCount.indexOf(Math.max.apply(null, wordsCount))
  // contar qual é o maior numero da array. 
  // pegar o index do maior numero
  return words[Index]
  // retornar a palavra que tem o numero do index na array original. 
}


//! Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
let result4 = sumNumbers(numbers)
console.log(result4)

function sumNumbers(arr) {
    //inicializar a variável total
  let total = arr.reduce((currentTotal, number) => {
    // variável total é o currentTotal + number
    // currentTotal guarda a soma dos numeros em cada iteração
    //usar método reduce para somar cada item da arr ao currentTotal
    return number + currentTotal
    // retornar um elemento da array e somar ao currentTotal
  });
  return total
}



//! Iteration #3.1 Bonus:
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
// should return: 57

// string should have their length added to the total
// boolea values too  true = 1 false = 1

function sum(arr) {
  
}



//! Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
let result5 = averageNumbers(numbersAvg)
console.log(result5)

function averageNumbers(arr) {
  return sumNumbers(arr) / arr.length       // reaproveitando a função de somar os elementos da array e dividindo pela quantidade de elementos achando a média. 
}

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
let result6 = averageWordLength(wordsArr)
console.log(result6)

function averageWordLength(lista) { 
  let wordsCount = []
  lista.forEach(word => {
    return wordsCount.push(word.length)
  }); // função que da push no tamanho de cada elemento da lista para uma nova lista
  
  return sumNumbers(wordsCount) / wordsCount.length
  // soma de todas as letras / quantidade de palavras
}



// Bonus - Iteration #4.1
function avg() {}

//! Iteration #5: Unique arrays
//remove the duplicates and return a new array
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

let result7 = wordsUnique.filter(uniquifyArray)       //

console.log(result7)   
// o método filter() adiciona a nova array pelas itens que passam pelo teste da segunda função(uniquifyArray)            
// o que a função faz: filtra a array wordsUnique e passa cada elemento dela por outra função (uniquifyArray) 
// se o return for true, adicione o elemento na array.      

//exemplos
console.log(wordsUnique.indexOf('bring'))             // a função .indexOf("bring") retorna o numero do index do elemento que é passado por ela > 4 
console.log(wordsUnique[4])                           // check: acessando o index 4 da lista retorna bring

console.log(wordsUnique.indexOf('playground'))
console.log(wordsUnique[6])

console.log(wordsUnique.indexOf('poison'))
console.log(wordsUnique[1])

function uniquifyArray(value, index, self) {           // o que a função faz: aceita 3 argumentos. value é a 'string', index é index, self é a array que está sendo filtrada (wordsUnique)
  return self.indexOf(value) === index;                // ou pode ser lida assim: return wordsUnique.indexOf('bring') === index 
  // 
}



//! Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
  // função recebe dois argumentos - a array com as palavras, a string com a palavra procurada

let result8 = doesWordExist(wordsFind, "eating")   
console.log(result8)

//let result9 = doesWordExist(wordsFind, "karen")  
//console.log(result9)    

function doesWordExist(wordsFind, wordSearch) {  
  //método .some() retorna true ou false 
    
  let exist = wordsFind.some((word => {         // word = cada elemento da lista
    return word === wordSearch                  // compara se cada elemento da lista é igual a palavra procurada
  }));                                          // retorna true ou false

  // opicional
  if (exist === true ) { 
    console.log(exist, `a palavra "${wordSearch}" já existe na array.`)
  } else if (exist === false) {
    console.log(exist, `a palavra "${wordSearch}" não existe na array.`)
  }

  return exist 
}

// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
let result10 = howManyTimes(wordsCount, 'matter')
console.log(result10)

function howManyTimes(words, wordSearch) {        // dois argumentos. a array com as palavras, a palavra procurada
  let newArr = words.filter(word => {             // método filter() recebe uma função que checa se a palavra procurada é igual a cada elemento da array
    return word === wordSearch });                // se a palavra for igual ela é adicionada a uma nova array
  
  return newArr.length                            // retorna o tamanho da array para saber quantas vezes a palavra foi repetida
}


// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct() {}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
