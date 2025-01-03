export {};
let p = document.querySelector("p");
let btnAdd = document.getElementById("add");
let btnClear = document.getElementById("clear");
let input = document.querySelector("input");
let textList: any = [];
let htmlText = "";

btnAdd!.addEventListener("click", () => {
  textList.push(input!.value);
  printList(textList);
  save();
});

btnClear!.addEventListener("click", () => {
  textList = [];
  localStorage.clear();
  printList(textList);
});

function printList(textList: any) {
  for (let i = 0; i < textList.length; i++) {
    htmlText += `<div><span>${textList[i]}</span></div>`;
  }
  p!.innerHTML = htmlText;
  htmlText = "";
}

function save() {
  localStorage.setItem("mytext", JSON.stringify(textList));
}
function load() {
  if (localStorage.getItem("mytext")) {
    textList = JSON.parse(localStorage.getItem("mytext")!);
    printList(textList);
  }
}
function remove() {}
