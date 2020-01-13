export class SignUpDto{
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    pesel:string;
    city:string;
    address: string;
    zipcode: string;
    sex: string;
    phone: string;

    constructor(username: string,password: string, firstName: string, lastName: string,  pesel:string, city: string, address:string, zipcode:string, sex:string, phone: string) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.pesel = pesel;
        this.city = city;
        this.address = address;
        this.zipcode = zipcode;
        this.sex = sex;
        this.phone = phone;
     
    }
}