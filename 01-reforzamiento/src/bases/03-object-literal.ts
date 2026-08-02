interface Person{
    firstNmame: string;
    lastName: string;
    age: number;
    address: Address;
}
interface Address{
    postalCode: number;
    city: string;
}

const ironman: Person = {
    firstNmame: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        postalCode: 123456,
        city: 'New York',
    },
};




const spiderman: Person = {
    firstNmame: 'Peter',
    lastName: 'Parker',
    age: 25,
    address: {
        postalCode: 654321,
        city: 'Los Angeles',
    },
};

console.log(ironman , spiderman);

//const spiderman = structuredClone(ironman);

//spiderman.firstNmame = 'peter';
//spiderman.lastName = 'parker';
//spiderman.age = 30;
//spiderman.address.postalCode = 654321;


//console.log(ironman, spiderman);