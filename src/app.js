import "./style.css";

window.onload = () => {
  document.querySelector(".top").innerHTML = "&spades;";
  document.querySelector(".number").innerHTML = number[cardNumber];
  document.querySelector(".bottom").innerHTML = "&spades;";

  let number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let type = ["♥", "♣", "♠", "♦"];

  let cardNumber = Math.floor(Math.random() * number.length);
  let cardType = Math.floor(Math.random() * type.length);
};

//window.onload = function cardBuilder() {
//write your code here

// let numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
//let symbols = ["♦", "♥", "♠", "♣"];
// let number = Math.floor(Math.random() * numbers.length);

// document.querySelector(".number").innerHTML = numbers[number]; //elemento del array aleatorio

// let symbol = Math.floor(Math.random() * symbols.length);

// document.querySelector(".icon-left").innerHTML = symbols[symbol];
// document.querySelector(".icon-right").innerHTML = symbols[symbol];
//};
