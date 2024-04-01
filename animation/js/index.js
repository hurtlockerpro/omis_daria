
var x = 10 // old
var x = 30

let y = 20 // new 

const z = 10

let name = 'vladimir {x}' + ' is '
let lastname = `my name is 
 vladimir `

let a = '10' + 10 

console.log(typeof x == 'number'); 

//      true
// AND: true && true && true ... -> true
//  true && true && false -> false 

// OR: false || false || false .. true -> true
// false || flase || false -> false 

// === // check type
// !== // check type 

if (x !== '30'){
    console.log("yes its numbers");
}  else {
    console.log('else ');
}


//         0    1       2           3       4   5
let arr = [10, true, 'vladimir', undefined, {}, []] // simple 
arr[0] = 'vladimir'
console.log(arr[2]);

// key:value
var arr2 = {
    car1: 'audi',
    car2: 'bmw',
    cars: [
        'citroen', // 0
        {
            wheels: 4,
            color: 'green'
        } // 1
    ],
    fn: function (){ // function name () {}
        return 'test function'
    },
    fn1: function(){
        return this
    },
    fn2: () => {
        x
    }
} // assocciative
console.log(arr2.fn1());
console.log(arr2.fn2());

console.log(typeof arr, typeof arr2);

// increment: index++  
// ++index
// decrement: index--
// --index
/*for (let index = arr.length; index >= 0; index--) {
    console.log(arr[index]);
}*/

arr.forEach(function(item, i, arragain){
    console.log(item, i, '1', '2');
    console.log(arr);
})


function getName(name = 'vladimir'){ // void
    console.log('my name is ' + name);
}

getName('vladimir')
getName('sergei')
getName()

function listCars(x, y, ...cars){

    for (let index = 0; index < cars.length; index++) {
        const element = cars[index];
        console.log(element);
    }	
}

listCars('x', 'audi', 'bmw', 'citroen', 'dodge')

function getName2(){ // string

    console.log(this);

    return 'vladimir'
}

let myName = getName2()
console.log('my name is ' + myName);

/*
function addnumbers(x, y)
{
     return 'hello!'
}*/

let addnumbers = (x, y) => {
    console.log(this);
    let t = 10
    let n = 20    
    return 'hello! ' + ( t + n)
}; 
console.log(addnumbers(1, 1));

// 

class Numbers {
    x = 10

    constructor(newValue = 20)
    {
        this.x = newValue
    }

    add(y){
        return this.x + y
    }
}

let n = new Numbers(55)
console.log( n.add(25) ); 
