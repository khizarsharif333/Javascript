// Map : Accepts a cllback function and applies that function to each element and returns a new array;

let arr   = [1,2,3,4,5];

arr = arr.map(double);

function double(element){
    return element*element;
}

console.log(arr);