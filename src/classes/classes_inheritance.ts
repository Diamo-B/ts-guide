class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    constructor(name:string){
        super(name);
    }

    move(distanceInMeters?: number): void {
        console.log("Overridden the move method");
        
    }
}


const dog1:Dog = new Dog("orca")
dog1.move()