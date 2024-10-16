// Method 1: Using class syntax (ES6)
class Person {
  // Constructor to initialize the Person object
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  // Member function (regular function)
  getDetails() {
    return `${this.name} is ${this.age} years old and Studies in ${this.city}.`;
  }

  // Arrow function as a member function (automatically binds 'this')
  getSummary = () => {
    return `Summary: ${this.name} (${this.age} years old) from ${this.city}.`;
  };

  // Static method (not tied to any particular instance)
  static welcomeMessage() {
    return "Welcome to the Person class!";
  }
}

// Method 2: Using a function constructor (Pre-ES6)
function PersonOld(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;

  // Member function using function keyword
  this.getDetailsOld = function() {
    return `${this.name} is ${this.age} years old and studies in ${this.city}.`;
  };
}

// Adding method using prototype
PersonOld.prototype.getSummaryOld = function() {
  return `Summary: ${this.name} (${this.age} years old) from ${this.city}.`;
};

// Non-member arrow function
const sayHello = (person) => `Hello, ${person.name}!`;

// Usage of class syntax
const person1 = new Person("sannidhi", 20, "VESIT");
console.log(person1.getDetails()); // Using regular member function
console.log(person1.getSummary()); // Using arrow function as a member function
console.log(Person.welcomeMessage()); // Static method
console.log(sayHello(person1)); // Non-member arrow function

// Usage of function constructor
const person2 = new PersonOld("Anushka", 20, "VESIT");
console.log(person2.getDetailsOld()); // Using member function in old syntax
console.log(person2.getSummaryOld()); // Using prototype-based function
console.log(sayHello(person2)); // Non-member arrow function
