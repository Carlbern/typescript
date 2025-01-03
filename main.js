"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var p = document.querySelector("p");
var btnAdd = document.getElementById("add");
var btnClear = document.getElementById("clear");
var input = document.querySelector("input");
var textList = [];
var htmlText = "";
btnAdd.addEventListener("click", function () {
    textList.push(input.value);
    printList(textList);
    save();
});
btnClear.addEventListener("click", function () {
    textList = [];
    localStorage.clear();
    printList(textList);
});
function printList(textList) {
    for (var i = 0; i < textList.length; i++) {
        htmlText += "<div><span>".concat(textList[i], "</span></div>");
    }
    p.innerHTML = htmlText;
    htmlText = "";
}
function save() {
    localStorage.setItem("mytext", JSON.stringify(textList));
}
function load() {
    if (localStorage.getItem("mytext")) {
        textList = JSON.parse(localStorage.getItem("mytext"));
        printList(textList);
    }
}
function remove() { }
