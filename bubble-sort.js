
function bubbleSort(inputArr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < inputArr.length; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                // swap
                [inputArr[i], inputArr[i + 1]] = [inputArr[i + 1], inputArr[i]];
                swapped = true;
            }
        }
    } while (swapped);
    return inputArr;
}


const unsortedArr = [23, 3, 2, 4, 9, 1, 0, 7, 2];
console.log(bubbleSort(unsortedArr));