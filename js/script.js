// console.log("hello");

// basic loop
// for (let count = 0; count < 10; count++) {
//   console.log(count);
// }

for (let i = 0; i < 4; i++){
  // console.log(`The current iteration of the loop is ${i}`);
};

const result = document.getElementById('result');
// loop to show lots of products on the screen

// const amountOfProducts = 100;
//
// for (let i = 0; i < amountOfProducts; i++) {
//   // this gets looped over
//   result.innerHTML += `
//   <div class="product">
//     <h3>Product name</h3>
//     <p>This is a product description</p>
//     <h4>$${i * 10 + 6}</h4>
//   </div>
//   `;
// };

// Activity:
// Show 6 bootstrap icons on the screen using a loop.
// Duplicate the same icon 6 times.
//
// Activity:
// Buddy up -
// Create a button on the screen (in HTML)
// When the button is clicked, start a loop
// and show 20 products on the screen.

const btn = document.getElementById('button');
btn.onclick = function() {
  // const amountOfProducts = 20;
  // for (let i = 0; i < amountOfProducts; i++) {
  //   // this gets looped over
  //   result.innerHTML += `
  //   <div class="product">
  //     <h3>Product name</h3>
  //     <p>This is a product description</p>
  //     <h4>$${i * 10 + 6}</h4>
  //   </div>
  //   `;
  // };

  // loop to render random images
  for (let i = 0; i < 10; i++) {
    result.innerHTML += `
      <img src="https://picsum.photos/seed/f23f${i * 1000 + 65}dwf23/200/300" alt="random image">
    `
  }
}

// Arrays
const artists = [
  // index 0
  "Charli XCX",
  // index 1
  "Lady Gaga",
  // index 2
  "Coldplay",
  // index 3
  "James Blake",
  "Morrisey"
];

// console.log("The length of the artists array is " + artists.length);

// console.log(artists);
// console.log(artists[0]);
// console.log(artists[1]);
// console.log(artists[2]);
//
// for( let i=0; i < artists.length; i++ ) {
//   console.log(artists[i]);
// }

const students = [
  "Dow",
  "Vincent",
  "Rebekah",
  "Molly",
  "Phoebe"
];

// Task: Create an array called students,
// and include 5 people's names in it from the class
// Use a console log to show each student (loop through array).

// If you've finished, show the students on the screen with
// a bootstrap icon (person icon) next to each name.

// adding a new student to the array
students.push("Holly");
console.log(students);

let newStudent = prompt("Enter name of new student");
students.push(inputValue);

for (let i=0; i< students.length; i++){
  console.log(students[i]);
  result.innerHTML += `
  <div class="person"><i class="bi bi-person-fill"></i> ${students[i]}</div>
  `
}

// ----CLOUD-----
//
// Create a text input on the page, with a label of “Add a new sport”.
// Create a button which says “Submit”.
// When the user clicks on the button, push() the text to an array called sports
// Each new click of “Submit” should update a list of sports on the page.
// Extra task: style the list of sports to make it look cool.
//
// Hint:
// Look at the last project we did in class to see how to get a value of an input and put it into a variable.
