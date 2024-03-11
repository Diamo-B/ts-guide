interface Vehicle{
    make: string,
    model: string,
    year?:number
}

const createVehicle = (vehicle:Vehicle):Vehicle=>{
    return vehicle
}