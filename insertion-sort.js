// Sorted array and non sorted array
function insertionSort(input) {
    for (let i = 1; i < input.length; i++) {
        const current = input[i];
        let j = i - 1;
        while (j >= 0 && current < input[j]) {
            input[j + 1] = input[j];
            j--;
        }
        input[j + 1] = current;
    }
    return input;
}

let inputArr = [7, 9, 8, 3, 1, 2];

console.log(insertionSort(inputArr));