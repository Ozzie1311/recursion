// Fibonnacci Secuence without recursion

const fibs = n => {
  let newArray = [];
  newArray[0] = 0;
  newArray[1] = 1;
  for (let i = 2; i < n; i++) {
    newArray.push(newArray[i - 1] + newArray[i - 2]);
  }
  return newArray;
}
// console.log(fibs(8));
// console.log(fibs(9));

// Fibonacci secuence with recursion
const fibsRec = n => {
  console.log('this was printed recursively')
  //casos base
  if (n <= 0) return [];
  if (n === 1) return [1];
  if (n === 2) return [0, 1];
  
  //llamada recursiva
  const fibs = fibsRec(n - 1);

  //llenar el array
  fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);

  //retornar el array
  return fibs;
}

console.log(fibsRec(8))