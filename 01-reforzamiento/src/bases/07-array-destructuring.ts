
const characterNames = ['Goku', 'Vegeta', 'Trunks'];

const [p1 , ,p3] = characterNames;

console.log({p1, p3});


const returnsArrayFn = () => {
    return ['ABC', 123];

}

const [letters, numbers] = returnsArrayFn();

console.log({letters, numbers});

const useState = (value: string) => {
    return [
        value, 
        (newValue: string) => {
            console.log(newValue)
        },
    ] as const
}

console.log(useState('Goku'));