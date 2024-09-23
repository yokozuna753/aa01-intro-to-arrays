/*
Define a function called avgVal that accepts an array of numbers as a parameter.
The function should return the average of all values in the array. If the array
is empty, it should return null.
*/

function avgVal(arr){
    if(arr.length === 0)return null;
    let sum = 0;
    let i = 0;

    while(i < arr.length){
        sum += arr[i];
        i++;
    }
    return sum / arr.length;
}


console.log(avgVal([5, 10]));         // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([]));              // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = avgVal;