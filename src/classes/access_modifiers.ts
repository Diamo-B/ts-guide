class Person {
    private name: string;
    constructor(name: string) { this.name = name; }
    public getName = ( ) => {
        return this.name
    }
}


const p1:Person = new Person("Bachar")
// console.log(p1.name); =>Property 'name' is private and only accessible within class 'Person'.ts(2341)
console.log(p1.getName());

