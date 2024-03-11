interface GenericIdentityFn<T> {
    (arg: T): T;
}

const testFn:GenericIdentityFn<string> = (arg:string) => {
    return arg;
}

//===============================================================

interface GenArr<T> {
    arr: T[]
}


const myArr: GenArr<string> = {
    arr: ["test"]
}