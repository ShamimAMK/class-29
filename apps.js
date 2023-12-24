"use strict";

// class Person {
//   //public field/
//   firstName;
//   lastName;
//   gender = "Female";
//   birthYear;
//   constructor(firstName, lastName, gender, birthYear) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     // this.gender = gender;
//     this.birthYear = birthYear;
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   getGender() {
//     return this.gender;
//   }

//   getAge() {
//     return new Date().getFullYear().this.birthYear;
//   }
// }

// class Student extends Person {
//   // #level = "A";
//   // #rollNumber= "100"; // private field
//   level;
//   rollNumber= "100";
//   constructor(firstName, lastName, gender, birthYear, level, rollNumber) {
//     super(firstName, lastName, gender, birthYear);
//     this.level = level;
//     this.rollNumber = rollNumber;
//   }

//   // getIntro() {
//   //   return `Hello, I am ${this.firstName} ${this.lastName}. I read in class ${this.#level} and my roll number is ${this.#rollNumber}.`;
//   // }
//   getIntro() {
//     return `Hello, I am ${this.firstName} ${this.lastName}. I read in class ${this.level} and my roll number is ${this.rollNumber}.`;
//   }

//   static getLevel(){
//     const now = new Date().getFullYear();
//     return now;
//   }
// }

// const person1 = new Person("Kaushik", "Shaha", "Male", "1995");
// const student1 = new Student(
//   "Tahia",
//   "Bushra",
//   "Female",
//   1998,
//   "Honors",
//   124544
// );

// // console.log(student1.getIntro());
// console.log(person1.getGender());

const inputName = document.querySelector(".input_name");
const inputDonate = document.querySelector(".input_donate");
const btnDonate = document.querySelector(".btnDonate");
const donorsContainer = document.querySelector(".donor_container");

class BloodDonationCamp {
  name;
  donation;
  li;

  constructor() {
    btnDonate.addEventListener("click", this.getDonation);
  }

  getDonation() {
    this.name = inputName.value;
    this.donation = inputDonate.value;

    createListItem(this.name, donation);
  }

  this.createListItem(this.name, this.donation) {
    this.li = document.createElement("li");\
    this.li.textContent = `${name}- ${donation}`;

    console.log(this.li);
  }
}

// new BloodDonationCamp();
