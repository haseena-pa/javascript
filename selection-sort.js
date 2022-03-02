// assume the first one is smallest
function selectionSort() {
  let inputArr = [7, 8, 3, 1, 2];
  for (let i = 0; i < inputArr.length - 1; i++) {
    let smallest = i;
    for (let j = i + 1; j < inputArr.length; j++) {
      if (inputArr[smallest] > inputArr[j]) {
        smallest = j;
      }
    }
    // swap
    [inputArr[i], inputArr[smallest]] = [inputArr[smallest], inputArr[i]];
  }
  return inputArr;
}

console.log(selectionSort());