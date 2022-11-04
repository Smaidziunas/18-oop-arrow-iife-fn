// #Employee

// Sukurti klase Employee. employee turi firstName, lastName, hourlyPay. Sukuriant nauja Employee sukurti jam papildoma savybe hoursWorked ir prilyginti ja 0.

class Employee {
  constructor(firstName, lastName, hourlyPay) {
    this.name = firstName;
    this.surname = lastName;
    this.hPay = hourlyPay;
    this.hoursWorked = 0;
  }

  work(hours) {
    console.log(`${this.name} worked for ${hours} hours`);
    return (this.hoursWorked = this.hoursWorked + hours);
  }

  calcPay() {
    //atvaizduoti dabartini atlyginima
    const pay = this.hoursWorked * this.hPay;
    console.log(`${this.name} salary is ${pay}`);
    return pay;
  }
}

// Employee prideti metoda work() kuris prideda tiek valandu prie hoursWorked, kiek paduodam i argumenta.

const empl1 = new Employee("Vardas", "Pavardzius", 10);
// console.log("empl1 ===", empl1);

empl1.work(10);
empl1.work(30);
// console.log("empl1 ===", empl1);

const empl2 = new Employee("Ann", "Rose", 15);

empl2.work(10);
empl2.work(100);
// console.log("empl2 ===", empl2);

// sukurti metoda calcPay() kuris paskaiciuoja kiek darbuotojui priklauso pinigu uz isdirbtas valandas.

console.log(empl2.calcPay());
// sukurti metoda payForWork() kuris grazina kiek pinigu sumoketi ir nunulina valandas (hoursWorked)
