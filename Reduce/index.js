// Reduce : reduce the elements of an array to single value;

let arr = [1,2,3,4,5,6789];

console.log(arr.reduce(sum));

function sum(x,element){
    return x+element;
}