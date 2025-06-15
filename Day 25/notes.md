# JavaScript And Classes 
## OOP
## Object
-- collection of properties and methods 
-- toLowerCase

## why use OOp
## 
## Parts of OOP
object Literal 
-- Constructor function
-- Prototypes
-- Classes
--Instances ( new , this)


## 4 Pillars 
-- Abstraction
-- Encapsulation 
-- Inheritance
--Polymorphism




---

# 🔥 **JavaScript & Classes (OOP Concepts)**

---

## ✅ **OOP (Object-Oriented Programming)**

OOP ek programming paradigm hai jisme **code ko real-world objects jaise structure** mein likhte hain.

🧠 **Object** kya hota hai?

> Ek object **properties** (data) aur **methods** (functions) ka collection hota hai.

```js
let person = {
  name: "Devesh",
  age: 22,
  greet: function() {
    console.log("Hello!");
  }
}
```

Jaise upar example mein `person` object mein `name`, `age` (properties) hain aur `greet()` method hai.

Example method:

```js
"HELLO".toLowerCase(); // Output: "hello"
```

---

## ❓ **Why use OOP in JavaScript?**

✅ Code reusable hota hai (DRY principle)
✅ Maintainable & scalable code ban jata hai
✅ Real-world modeling easy hoti hai (Bank, User, Car, etc.)
✅ Team work mein code divide karna easy hota hai

---

## ⚙️ **Parts of OOP in JavaScript**

### 🔸 **Object Literal**

Sabse basic way to create object:

```js
const user = {
  username: "dev",
  login: function() {
    console.log("User logged in");
  }
};
```

### 🔸 **Constructor Function**

Function jiska use karke multiple objects bana sakte hain.

```js
function User(name) {
  this.name = name;
}
const user1 = new User("Devesh");
```

### 🔸 **Prototypes**

Constructor se banaye objects ke liye shared methods define karte hain.

```js
User.prototype.sayHello = function() {
  console.log("Hello " + this.name);
};
```

### 🔸 **Classes**

ES6 se `class` keyword aaya jo OOP ko aur readable banata hai.

```js
class Student {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hi, I am ${this.name}`);
  }
}
```

### 🔸 **Instances** (`new`, `this`)

* `new` keyword se object banate hain (instance of class)
* `this` refers to the current object

```js
const s1 = new Student("Devesh"); // Instance
s1.greet();
```

---

## 🔒 **4 Pillars of OOP**

---

### 1️⃣ **Abstraction**

Only **important details** show karo, **complexity hide** karo.

Example:
Tum `.toLowerCase()` use karte ho but uska internal logic nahi dekhte. That is abstraction.

---

### 2️⃣ **Encapsulation**

Data + methods ko ek class mein **bundle** karna aur **direct access rokna** (via private fields)

```js
class BankAccount {
  #balance = 0; // private field

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}
```

---

### 3️⃣ **Inheritance**

Ek class doosri class ke features **inherit** karti hai.

```js
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog barks");
  }
}

const d = new Dog();
d.speak(); // inherited
```

---

### 4️⃣ **Polymorphism**

**Same method name**, but **different behavior** in different classes.

```js
class Shape {
  draw() {
    console.log("Drawing shape");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing circle");
  }
}

const s = new Circle();
s.draw(); // Circle ka version run hoga
```

---

🧾 **Quick Summary (1 Line for Each):**

* **Object** = Properties + Methods
* **OOP** = Real-world modeling + Clean architecture
* **Constructor** = Object factory
* **Prototype** = Shared method memory-efficient banaata hai
* **Class** = ES6 OOP structure
* **new/this** = Object banana aur reference










