//Choose a random color
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
const hex = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FFC0CB', '#A020F0']

let btn1 = document.getElementById("button1");
let btn2 = document.getElementById("button2");

btn1.addEventListener("click", handle);

function handle() {
    let random = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[random];
    btn2.innerHTML = hex[random];

}