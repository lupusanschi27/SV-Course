/* Exercitiul nr. 1 w/ arrow function */
const oddOrEven = (number) => {
  if (number & (2 === 0)) {
    return `Numarul "${number}" este impar. Rezultat: ${number - 2}`;
  }
  return `Numarul "${number}" este impar. Rezultat: ${number * 2}`;
};
console.log('Exercitiul 1')
console.log(oddOrEven(23));
console.log(oddOrEven(16));




/* Exercitiul nr. 2 w/ expression and arrow function */

/*Time complexity O(sqrt(n)) */
const isPrime = function(number) {
    for (let i = 2; i ** 2 <= number; i++)
        if (number % i === 0)
          return false; 
    return number > 1;
}
/* Time complexity O(n) respectiv O(arr) */
function savePrimes(arr){
    const results = []
    for (let i = 0; i < arr.length; i++) {
        if(isPrime(arr[i])){
            results.push(arr[i]);
        }
    }
    return results;
}
console.log('Exercitiul 2')
console.log(savePrimes([1,2,3,4,5,6,7,8,9]));



/* Exercitiul nr. 3 w/ function expression  */
const saveString = function (arr) {
  const results = [];
  arr.forEach((item) => {
    if (typeof item === "string") {
      results.push(item);
    }
  });

  return results;

};
console.log('Exercitiul 3')
console.log(saveString([1,'1', 'salut', 2, 6, true, 'true']))
console.log(saveString([1,2,3,4]))


/* Exercitiul nr. 4 w/ func. statement */
function addDigits(string) {
  //Destruct. pentru elementele stringului into an array
  const stringArray = [...string];
  let results = 0;

  for (let i = 0; i < stringArray.length; i++) {
    /* Type conversion*/
    stringArray[i] = stringArray[i] - "";

    if (stringArray[i] % 2 === 1) {
      results += stringArray[i];
    }
  }
  return results;
}
console.log('Exercitiul 4')
console.log(addDigits('1523'))


/* Exercitiul nr. 5 w/ w/ switch statement */
const initialState = {
    value: 0
}

function someMinifiedReducer(state = initialState, action){

    switch(action){
        case 'INCREMENT':
            return {
                value: ++state.value           
        }
        case 'DECREMENT':
            return {
                value: --state.value
            }        
        default:
            return state;
    }
}
console.log('Exercitiul 5')
console.log(someMinifiedReducer());
console.log(someMinifiedReducer(initialState,'INCREMENT'))
console.log(someMinifiedReducer(initialState,'INCREMENT'))
console.log(someMinifiedReducer(initialState,'DECREMENT'))