console.log(`======== Defining Class-01 : Vehicle ==========`);
class Vehicle {
    constructor(company, colour, price, fuel,id){
        this.company = company;
        this.colour = colour;
        this.price = price;
        this.fuel = fuel;
        this.id = id;
    }
    detail(){
        console.log(`Vehicle Details => Company: ${this.company}, Colour: ${this.colour}, Price: ${this.price}, Fuel: ${this.fuel}, Id: ${this.id}`);
    }
}
const jenny = new Vehicle("Mahindra", "black", `10lack`,"petrol",123);
jenny.detail();

const bill = new Vehicle("TATA", "White", `20lack`,"Disel",234);
bill.detail();

const elon = new Vehicle("Hero", "Blue", `30lack`,"CNG",345);
elon.detail();

const tata = new Vehicle("Hyundai", "Red", `40lack`,"Electric",456);
bill.detail();

const bata = new Vehicle("Boeing", "Black", `50lack`,"Petrol",456);
bill.detail();

console.log(`========== Traversing Array ==========`);
console.log(`===== Traversing array object ======`);
const array = [jenny, bill, elon,tata,bata];
for (const element of array) {
   element.detail(); 
}

console.log(`======== Step-2 ==========`);
class College {
    constructor(name,standards,city,Students){
        this.name = name;
        this.standards = standards;
        this.city = city;
        this.Students = Students;
    }
    detail(){
        console.log(`College Details => Name: ${this.name}, Standards: ${this.standards}, City: ${this.city}, Students: ${this.Students}`);
    }
}
const vms = new College("VMS College", 10, "Sangola",123);
vms.detail();

const sms = new College ("SMS College", 11, "Sangola",234);
sms.detail();

const kbp = new College("KBP College",12, "Pandharpur",345);
kbp.detail();

const sus = new College("SUS University",13,"Solapur",456);
sus.detail();