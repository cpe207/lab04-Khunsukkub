function arrayStringify(a: number[]): string {
  return a.join('');
} //รหัส นศ.: 660610743 ขุนศึกไท บัวไชโย

const c1 = [1, 2, 3];
const c2 = [10, 9, 8, 7, 6, 5];
const c3 :number[] = [];

console.log(arrayStringify(c1));
console.log(arrayStringify(c2));
console.log(arrayStringify(c3));

module.exports = arrayStringify;
