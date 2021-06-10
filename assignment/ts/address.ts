export class Address  {
    city : string
    constructor(city){
        this.city = city
    }
    getAdressInfo(){
        console.log(`Your current locations is ${this.city}`)
    }
}

// let add1= new Address('vizag')
// console.log(add1.city)