function primeNumber(a :number) {
  if (a === 2 || a === 3) return "Yes";
  if (a%2 !== 0 && a%3 !== 0) return "Yes";
  else return "No";
}

const d1 = 10;
const d2 = 29;
const d3 = 2;

console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));

module.exports = primeNumber;
