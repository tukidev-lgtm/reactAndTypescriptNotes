function greet(name: string): string{
    return `Hello ${name}`;
}

const greet2 = (name: string): string => `Hola ${name}`;

const message = greet('Angel');
const message2 = greet2('Diego');
console.log(message);
console.log(message2); 

interface User{
    uid: string;
    username: string;
}

function getUser() {
    return{
        uid: 'ABC-123',
        username: 'Angel',
    };
}

const getUser2 = (): User => ({
        uid: 'ABC-123',
        username: 'Angel',
    });


const user = getUser();
console.log(user);

const user2 = getUser2();
console.log(user2);