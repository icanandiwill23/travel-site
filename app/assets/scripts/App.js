const $      = require("jquery");
import Person from "./modules/Person";

class Adult extends Person{
  payTaxes(){
    console.log(this.name + " now owes $12 in Taxes");
  };
};

const john = new Person("John Doe", "blue");
john.greet();

const jane = new Adult("Jane Smith", "red");
jane.greet();
jane.payTaxes();
