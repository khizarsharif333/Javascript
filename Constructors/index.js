// Constructors : A special method used for defining properties and methods.

function Car(name,brand,seater){
    this.name = name;
    this.brand = brand;
    this.seater = seater;
}

const car1 = new Car("Punch","Tata",5);

console.log(car1.name+" "+car1.brand+" "+car1.seater);