// function Person() {
//   this.name = "Selftics";
// }

// function Teacher() {
//   Person.call(this);
//   this.subject = 'Selfconfidance';
// }

// var teacher = new Teacher();

// console.log(teacher);

// var name = teacher.name;
// console.log(name);

// var subject = teacher.subject;

function Person(name) {
  this.name = name;
}

Person.prototype.printName = function(){
  console.log('Name: ' + this.name);
};

function Student (name, id) {
  Person.call(this, name);
  this.id = id;
}

// Student.prototype = Object.create(Person.prototype);

Object.setPrototypeOf(Student.prototype, Person.prototype);

var student = new Student('Nasir Hossain', 1001);

console.log(student);

// Student.prototype.constructor = Student;
student.printName();

// Person.prototype.skill = "Python and JS";

Student.prototype.skill = "Python and JS";

console.log(student.skill);


