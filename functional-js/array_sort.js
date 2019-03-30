var arr = [10, 4, 6, 40, 78, 67, 90, 23, 45, 78, 98];

arr.sort(function (a, b) {
  return a - b;
});

// arr.sort();



console.log(arr);

// descending order 
arr.sort(function (a, b) {
  return b - a;
});

// console.log(arr);



var people = [{
    name: "Anis",
    age: 27
  },
  {
    name: "Rashed",
    age: 30
  },
  {
    name: "Manik",
    age: 20
  },
  {
    name: "Shahid",
    age: 25
  },
  {
    name: "Abdullah",
    age: 26
  },
  {
    name: "Liza",
    age: 23
  }
];

// Ascending order for age
people.sort(function (a, b) {
  return a.age - b.age;
});

console.log("Aescending order:\n", people);



// descending order for age
people.sort(function (a, b) {
  return b.age - a.age;
});

console.log("Descending order:\n", people);


// Ascending order for name
people.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  } else if (a.name < b.name) {
    return -1;
  } else {
    return 0;
  }
});

console.log("Aescending order:\n", people);