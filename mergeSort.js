const mergeSort = array => {
  if (array.length <= 1) return array;

  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid)); //del inicio hasta la mitad
  const right = mergeSort(array.slice(mid)) //de la mitad hasta el final.

  return merge(left, right);
}

const merge = (left, right) => {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const arrayDesordenado = [105, 79, 100, 110];
const arrayOrdenado = mergeSort(arrayDesordenado);
console.log(arrayOrdenado);