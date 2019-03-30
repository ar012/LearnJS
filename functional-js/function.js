// A function can be stored in a variable
function sayName(name) {
  return 'Hello, ' + name;
}


var hello = sayName;

// var result = sayName("Arif");

// console.log(hello("Manik"));



var person = {
  name: "AR",
  sayName: sayName
};

// console.log(person.sayName("Arif"));




// var sum = 10 + (function () {
//   return 100;
// })();

// console.log(sum);



function wow(name, fun) {
  return fun(name);
}


// console.log(wow("Arif", sayName));


function name(firstName, lastName, gender) {
  var output;

  if (gender === "male") {
    output = 'Mr. ' + firstName + ' ' + lastName;
  } else if (gender === 'female') {
    output = 'Ms. ' + firstName + ' ' + lastName;
  }

  return output;
}

var fullName = name("AR", "Khamaru", "male");

// console.log(fullName);


function funcObj() {
  return {
    name: "Abdur Razzak",
    skills: ["Python", "JavaScript", "R", "Julia"],
    print: function () {
      return "Name: " + this.name + "\nSkills: " + this.skills;
    }
  };
}


var obj = funcObj();
console.log(obj.print());