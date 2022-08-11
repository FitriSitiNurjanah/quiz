// Why are global variables bad?
// - global variable dapat diubah dimana saja (dapat ditima)
//  sehingga akhirnya merubah value dari variable tersebut

// What are the 3 ways a global variable is created?
// mendeklarasikan variable diluar function
//dengan menggunakan funcsi windows

// What is the global object in the browser?
// window js

// What are the differences between var and let?
// var : function scope
// let : block scope
// hoisting var lebih rentan terhadap kesalahan, sedangkan let akan memunculkan pesan error saat hoisting

// What is the result of these expressions 1 == true, true + 1
// result error

//How to remove a property from an object?
// delete object.property;

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12",
  },
};

const increments = (func) => {
  let a = 0;
  ret;
};

// NUMBER 1
console.log("================NUMBER 1=================");
companies.forEach((company) => console.log(company.name));

//NUMBER 2
console.log("==============NUMBER 2===================");
var result = companies.filter((company) => (company.start > 1987 ? console.log(company.name) : false));
console.log(result);

// //NUMBER 3
// console.log("==============NUMBER 3===================");
// companies
//   .filter((company) => company.category == "Retail")
//   .forEach((x) => {
//     document.write("<div> Name : ", x.name, "</div>", "<div> Category : ", x.category, "</div>", "<div> Start : ", x.start, "</div>", "<div> End : ", x.end, "</div>", "<br>");
//   });

//NUMBER 4
console.log("==============NUMBER 4===================");
arr = [];
companies.forEach((company) => arr.push(company));
let sortArr = arr.sort((a, b) => a.end - b.end);
console.log(sortArr);

//NUMBER 5
console.log("==============NUMBER 5===================");
let highestToLowest = ages.sort((a, b) => b - a);
console.log(highestToLowest);

// NUMBER 6
console.log("==============NUMBER 6===================");
const initialValue = 0;
const sumWithInitial = ages.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);

console.log(sumWithInitial);

//NUMBER 7
console.log("==============NUMBER 7===================");
const objectBaru = {
  ...companies[0],
  print() {
    console.log(objectBaru.name);
  },
};
objectBaru.print();

//NUMBER 8
console.log("==============NUMBER 8===================");
function add(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}

add(2, 3);
add(5, 3, 7, 2);

//NUMBER 9
console.log("==============NUMBER 9===================");
const {
  name,
  address: { street },
} = person;

const named = `${street}`;
console.log(named);

//NUMBER10
console.log("==============NUMBER 10===================");
var increment = (function (a) {
  return function () {
    a += 1;
    return a;
  };
})(0);
console.log(increment());
console.log(increment());
console.log(increment());
