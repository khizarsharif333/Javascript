// Foreach : A ,ethod used to iterate over an array of elements and apply a specified operation on the element;

// The foreach method has three parameters element,index,array;

let arr = ['apple','banana','cucumber','dantalian'];

arr.forEach(uppercase);
arr.forEach(display)

arr.forEach(capitalise);
arr.forEach(display)

function uppercase(element,index,arr){
    arr[index] = element.toUpperCase();
}

function capitalise(element,index,arr){
    arr[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}

function display(element,index,arr){
    console.log(arr[index]);
}