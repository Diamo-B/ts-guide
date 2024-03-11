function logged(target: any) {
    // Original constructor of the class
    const originalConstructor = target;
  
    // New constructor function
    const newConstructor: any = function (...args: any[]) {
      // Call the original constructor
      const instance = new originalConstructor(...args);
  
      // Your additional logic here, for example logging
      console.log(`Instance of ${originalConstructor.name} created`);
  
      // Return the instance
      return instance;
    };
  
  
    return newConstructor;
  }
  
@logged
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }    
}

const c1= new Greeter("sadf")
const c3= new Greeter("sadf")
const c2= new Greeter("sadf")