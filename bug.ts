function combineArrays<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, "6"];
const combined = combineArrays(arr1, arr2); // Type 'string' is not assignable to type 'number'.