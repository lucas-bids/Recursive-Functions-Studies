// a function that calculates the sum of all numbers from 1 to n, including n
function addUpTo(n) {
    let total = 0;
    for (let i=1; i <= n; i++) {
        total += i;
    }
    return total;
}

console.log(addUpTo(10));

function gaussSum(n) {
    return n*(n+1)/2;
}

console.log(gaussSum(100));