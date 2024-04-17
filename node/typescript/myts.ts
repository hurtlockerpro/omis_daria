
let x:number = 10

function sum(x:number, y: number):number {
    return x + y
}



interface ICars {
    wheels?: number,
    color: string | number
}

let car:ICars = {
    wheels: 10,    
    color: 'red'
}

enum Statuses {
    active = 'ACTIVE',
    not_active = 'NOT ACTIVE',
    deleted = 'DELETED'
}

let myStatus = Statuses.not_active
console.log(myStatus);

// tuple
let a:string[] = ['abc']
let a1:[string, boolean, number] = ['a', true, 10]

// type
type MyCarType = string
let carType: MyCarType = 'Audi'

// generic
function sum1<N1, N2>(x:N1, y:N2): [N1, N2] {
    console.log('result: ' + ((x as number) + (y as number)));
    
    return [x, y]
}

console.log(
 sum1<string, number>('10', 15)
);