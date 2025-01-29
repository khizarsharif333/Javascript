// Closures : The function defined inside other functions. They have access to local variables and scope of the outer function.
// Allow for private variables and state maintenence. Used frequently in frameworks such as React, Vue, Angular.

function counter(){

    let count = 0;

    function increase(){
        count++;
        console.log("Count increased to "+count);
    }

    function getCount(){
        console.log("The count is "+count);
    }

    return {increase,getCount}
}

const obj = new counter();
obj.increase();
obj.increase();
obj.increase();
obj.increase();
obj.getCount();