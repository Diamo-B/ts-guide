interface BusinessPartner{
    name:string
    credit: number
}

interface Contact{
    email:string
    phone: string
}

type customer = BusinessPartner & Contact

const cust : customer = {name: "Bachar", credit: 23, email: "test@gmail.com", phone:"42797"}

const testFn1 = (cu: customer) => {
    console.log(cu.credit);
}

testFn1(cust);