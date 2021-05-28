// Exceeds attempt
let editButton = document.getElementById("edits");

editButton.addEventListener("click", () => {
  makeEdits();
});

let makeEdits = () => {
  document.body.style.backgroundColor = "#16DBC2";

  document.querySelector(".slogan-p").textContent = "Occupy Mars!!!";

  let values = document.querySelector(".core-list");
  let valueList = values.children;
  values.removeChild(valueList[0]);
};

// -----------------------------------------------
let imageBehavior = document.getElementsByClassName("image")[0];

imageBehavior.addEventListener("mouseover", () => {
  hoverSlogan();
});

let hoverSlogan = () => {
  alert("Occupy Mars!!!");
};

// -----------------------------------------------
let valueBehavior = document.getElementsByClassName("list")[0];
// console.log(valueBehavior)
valueBehavior.addEventListener("mouseover", () => {
  valueColor();
});

let valueColor = () => {
  valueBehavior.style.color = "blue";
};


let valueBehavior1 = document.getElementsByClassName("list")[1];
// console.log(valueBehavior)
valueBehavior1.addEventListener("mouseover", () => {
  valueColor1();
});

let valueColor1 = () => {
  valueBehavior1.style.color = "blue";
};

//
let valueBehavior2 = document.getElementsByClassName("list")[2];
// console.log(valueBehavior)
valueBehavior2.addEventListener("mouseover", () => {
  valueColor2();
});

let valueColor2 = () => {
  valueBehavior2.style.color = "blue";
};

//
let songButton = document.getElementById("song");

songButton.addEventListener("click", () => {
  singSong();
});

let singSong = () => {
  alert("My favorite songs lyrics!!! lol");
};

// --------------------------------------------

// let lists = document.getElementsByClassName("core-list");
// // console.log(lists)
// // console.log(lists.children[0])
// let list = lists.children
// lists.forEach(function(list) {
//   list.addEventListener("mouseover", () => {listColor()})
// })


// for ( list of lists) {
//   list.addEventListener("mouseover", () => {listColor()})
// }

// list.forEach(sentence => {
//   sentence.addEventListener("mouseover", () => {listColor()
// })})
// let list = lists.children[0]

// for(i=0; i<=2; i++) {
  
//   list.addEventListener("mouseover", () => {
//     listColor();
//   })
// }

// list.forEach = (list) => {
//   list.addEventListener("mouseover", () => {
//     listColor();
// })
// }

// function listColor() {
//   list.style.color = "blue";
// }
