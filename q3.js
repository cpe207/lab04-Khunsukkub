function primeNumber(a) {
    if (a === 2 || a === 3)
        return "Yes";
    if (a % 2 !== 0 && a % 3 !== 0)
        return "Yes";
    else
        return "No";
} //รหัส นศ.: 660610743 ขุนศึกไท บัวไชโย
var d1 = 10;
var d2 = 29;
var d3 = 2;
console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));
module.exports = primeNumber;
