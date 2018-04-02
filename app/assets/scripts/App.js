const $      = require("jquery"),
      Person = require("./modules/Person");

const john = new Person("John Doe", "blue");
john.greet();

const jane = new Person("Jane Smith", "red");
jane.greet();

module.exports = Person;
