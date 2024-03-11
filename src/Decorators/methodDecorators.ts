function format(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        // Call the original method
        const result = originalMethod.apply(this, args);

        // Format the result to uppercase
        const formattedResult = result.toUpperCase();

        // Return the formatted result
        return formattedResult;
    };

    return descriptor;
}

class Greeter2 {
    greeting: string;
    constructor(message: string){
        this.greeting = message;
    }

    @format
    greet() {
        return "Hello, " + this.greeting;
    }
}

const b1 = new Greeter2("asffsd");
const b2 = new Greeter2("asffsd");
const b3 = new Greeter2("asffsd");

console.log(b1.greet());
console.log(b2.greet());
console.log(b3.greet());
