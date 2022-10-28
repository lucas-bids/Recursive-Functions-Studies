// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function helper(helperArr) {
  if (helperArr.length == 0) {
    return 1
  }
  return helperArr[0]*helper(helperArr.slice(1));
}

console.log(helper([1,2,3]));