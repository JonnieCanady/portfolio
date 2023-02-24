const toggle = document.querySelector("#toggle");
let mode = "light";

const body = document.querySelector("body")
const h1 = document.querySelector("h1")
const h2 = document.querySelectorAll("h2")
const h3 = document.querySelectorAll('h3')
const h4 = document.querySelectorAll('h4')
const p = document.querySelectorAll("p")
const label = document.querySelectorAll("label")

function flip() {
    if (mode === "light") {
        mode = "dark";
        body.style.backgroundColor = "black";
        h1.style.color = 'gold';
        h2.forEach(function(ele, idx) {
            ele.style.color = 'gold';
         });
        h3.forEach(function(ele, idx) {
            ele.style.color = 'gold';
         });
        h4.forEach(function(ele, idx) {
            ele.style.color = 'gold';
        });
        p.forEach(function(ele, idx) {
            ele.style.color = 'gold';
        });
        label.forEach(function(ele, idx) {
            ele.style.color= 'gold';
        })
    } else {
        mode = "light"
        body.style.backgroundColor = "#ededed"
        h1.style.color = 'white';
        h2.forEach(function(ele, idx) {
            ele.style.color = 'white';
         });
        h3.forEach(function(ele, idx) {
            ele.style.color = 'white';
         });
        h4.forEach(function(ele, idx) {
            ele.style.color = 'black';
        });
        p.forEach(function(ele, idx) {
            ele.style.color = 'black';
        });
        label.forEach(function(ele, idx) {
            ele.style.color= 'black';
        })
    }
};

toggle.addEventListener("click", () => {
    flip();
});

