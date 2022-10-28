function collectOddValues(arr) {

    let result = [];

    function helperCollectOddValues(helperValue) {
        if (helperValue.length === 0) {
            return;
        }
        if (helperValue[0] % 2 != 0) {
            result.push(helperValue[0]);
        }
        helperCollectOddValues(helperValue.slice(1));
    }

    helperCollectOddValues(arr)
    return result;
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9]));