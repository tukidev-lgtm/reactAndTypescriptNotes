const myArray:number[] = [1, 2, 3, 4, 5];

const myArray2 = structuredClone(myArray);

myArray.push(6);
myArray.push(7);

console.log(myArray2);
console.log(myArray);

for (const myNumber of myArray){
    console.log(myNumber + ': algo')
    console.log(myNumber + 10);
}    