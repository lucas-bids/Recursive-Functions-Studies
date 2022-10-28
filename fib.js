// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num) {
  // add whatever parameters you deem necessary - good luck!
  if (num < 3) return 1;
  let sequence = [1, 1, 2];
  let aux = 3;
  function helper(helperNum) {
    if (aux === helperNum) {
      console.log( sequence[sequence.length - 1]);
      return;
    }
    if (aux < helperNum) {
      let lastSum = sequence[aux - 2] + sequence[aux - 1];
      sequence.push(lastSum);
      aux++;
      helper(helperNum);
    }
  }
  helper(num);
}

console.log(fib(35));
