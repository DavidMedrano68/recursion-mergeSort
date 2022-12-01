function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(leftArr, rightArr) {
  let sortedArr = [];
  while (leftArr.length && rightArr.length) {
    leftArr[0] <= rightArr[0]
      ? sortedArr.push(leftArr.shift())
      : sortedArr.push(rightArr.shift());
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}
console.log(mergeSort([0, 1, -2, 7, 5, -3, 3]));
console.log(Math.floor(2 / 2));
