function identity<T>(arg: T): T {
    console.log(typeof arg);
    return arg;
}

console.log(identity("test"))
console.log(identity(123))
console.log(identity(true))