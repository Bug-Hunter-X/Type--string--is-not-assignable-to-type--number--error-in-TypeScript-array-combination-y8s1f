function combineArrays<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, "6"];
const numbersArr2 = arr2.filter(isNumber)
const combined = combineArrays(arr1, numbersArr2 as number[]); // Type 'string' is not assignable to type 'number'.
console.log(combined)