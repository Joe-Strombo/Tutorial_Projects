
let car = {
    make: 'bmw',
    model: 'ugly',
    year: 2010,
    getPrice: function() {
       //return some calc
        return 5000;
    },
    printDescription: function() {
        console.log(this.make + ' ' + this.model);
    }
}

car.printDescription();
console.log(car.year);

console.log(car['year']);
console.log(car[1]);

/* 
var anotherCar = {};
anotherCar.whatever = 'joe';
console.log(anotherCar.whatever);

*/

/* 
var a = {
    myProperty: { b: 'hi'}
};
console.log(a.myProperty.b);

var c = {
    myProperty: [
        { d: 'this'},
        { e: 'can'},
        { f: 'get'},
        { g: 'crazy'},
    ]
}; 
*/

let carlot = [
    { year: 2017, make: 'Toyota', model: '4Runner' },
    { year: 2015, make: 'BMW', model: 'Poopy' },
    { year: 1982, make: 'Buick', model: 'Skylark' },
];

