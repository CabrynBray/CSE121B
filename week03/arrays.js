// Activity 1 Map

const steps = ["one", "two", "three"];
const stepsHtml = steps.map(function (step) {
  return `<li>${step}</li>`;
});
document.getElementById("myList").innerHTML = stepsHtml.join();

// Activity 2 Map

const grades = ["A", "B", "A"];
function returnGpa(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    }
    return points;
}

const gpaPoints = grades.map(returnGpa);

// Activity 3 Reduce

// const pointsTotal = gpaPoints.reduce(function (total, item) {
//     return total + item;
// });

// const gpa = pointsTotal / gpaPoints.length;

// example 2
// this is the same thing as above, but with an arrow function
// const pointsTotal = gpaPoints.reduce((total, item) => total + item);
// const gpa = pointsTotal / gpaPoints.length;

// this could be further simplified as

const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

// Activity 4 Fillter

const fruits = ["watermelon", "peach", "apple", "tpmato", "grape"];

// const shortWords = words.filter(function (word) {
//     return word.length < 6;
//   });

//same thing with an arrow function
const result = fruits.filter((fruit) => fruit.length > 6);

console.log(result);

// Activity 5 IndexOf

const numbers = [12, 34, 21, 54];

console.log(numbers.indexOf(21));

// const myArray = [12, 34, 21, 54];
// const luckyNumber = 21;
// let luckyIndex = myArray.indexOf(luckyNumber);