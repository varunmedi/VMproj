var customer ={
    id : 020,
    name : 'varun',
    age: 34,
    address : {
        street: 'xyzarea' ,
        city: 'vizag',
        pin:530013,
    },
    mobile:{
        Phone: 9849410568,
        Home: 9440137251,
    },
    getCustomerInfo:function(){
        console.log('Mr'+this.name+' Your age is '+this.age+' Your location'+this.city)
    },
} 
console.log(customer);