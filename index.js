// Private field must be declared in an enclosing class

// EXAMPLE 1 - Only access private fields from inside the class

class Person {
  // 👇️ Private field
  #num = 200;

  // 👇️ Another private field
  #another_private;

  constructor(first, last) {
    this.first = first;
    this.last = last;
    this.#another_private = 'another private field';
  }

  getAnother() {
    return this.#another_private;
  }

  getNum() {
    // 👇️ Accessing private field
    return this.#num;
  }

  getName() {
    // 👇️ Calling private method
    return this.#fullName();
  }

  // 👇️ Private Method
  #fullName() {
    return `${this.first} ${this.last}`;
  }
}

const p = new Person('Bobby', 'Hadz');

console.log(p.getName()); // 👉️ "Bobby Hadz"

console.log(p.getNum()); // 👉️ 200

console.log(p.getAnother()); // 👉️ another private field

// ------------------------------------------------------------------

// // EXAMPLE 2 - Initializing a private field without a value

// class Person {
//   // 👇️ Private field
//   #num;

//   increment() {
//     this.#num =
//       typeof this.#num === 'number' ? this.#num + 100 : 100;
//     return this.#num;
//   }
// }

// const p = new Person();

// console.log(p.increment()); // 👉️ 100
// console.log(p.increment()); // 👉️ 200
// console.log(p.increment()); // 👉️ 300
