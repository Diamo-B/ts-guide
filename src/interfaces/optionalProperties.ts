interface Person {
    firstName: string;
    lastName: string;
    age?: number; // Optional property
    email?:string
}

const updatePerson = (p:Person, updates:{lastName:string, age:number}) => {
    p.lastName = updates.lastName
    p.age = updates.age
    return p;
}