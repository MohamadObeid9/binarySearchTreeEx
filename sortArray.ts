export const sortArray = (arr: Array<number>) => {
  arr = deleteDuplicate(arr);
  if (arr.length === 0 || arr.length === 1) return arr;
  else {
    let firstHalf = arr.slice(0, Math.floor(arr.length / 2));
    let secondHalf = arr.slice(Math.floor(arr.length / 2));

    firstHalf = sortArray(firstHalf);
    secondHalf = sortArray(secondHalf);
    let k = 0;
    let i = 0;
    let j = 0;

    while (i < firstHalf.length && j < secondHalf.length) {
      if (firstHalf[i] <= secondHalf[j]) {
        arr[k] = firstHalf[i];
        i++;
      } else {
        arr[k] = secondHalf[j];
        j++;
      }
      k++;
    }

    while (i < firstHalf.length) {
      arr[k] = firstHalf[i];
      i++;
      k++;
    }

    while (j < secondHalf.length) {
      arr[k] = secondHalf[j];
      j++;
      k++;
    }
    return arr;
  }
};
const deleteDuplicate = (arr: number[]) => {
  const newArr: number[] = [];
  arr.forEach((num) => {
    if (!newArr.includes(num)) {
      newArr.push(num);
    }
  });
  return newArr;
};
// console.log(deleteDuplicate([0, 3, 2, 3, 6, 6, 9, 3])); //[ 0, 3, 2, 6,  9 ]
// console.log(sortArray([0, 3, 2, 3, 6, 6, 9, 3])); //[ 0, 2, 3, 6, 9 ]
