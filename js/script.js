var canvas = document.getElementById("canvas");
var canvasx = document.getElementById("problems");
var ctx = canvas.getContext("2d");
var context = canvasx.getContext("2d");
var dogimage = new Image();
var x = 50;
var y = 80;
canvas.style.left = x + "%";
canvas.style.top = 80 + "%";
canvasx.height = 60;
canvasx.width = 60;
canvasx.style.background = "black";
canvasx.style.borderRadius = '50%';
canvasx.style.position = "absolute";
var canvasxleft = xxx = Math.floor(Math.random() * 100);
if (canvasxleft > 90) {
    canvasxleft = canvasxleft - 10;
}
var canvasxtop = 0;
var canvastop = 10;
var canvasxright = 90;
var canvasright = 50;
var canvasxbottom = 90;

canvas.width = 60;
canvas.height = 45;
dogimage.src = "images/shadow_dog.png";
var spritewidth = 50;
var spriteheight = 45;
var gameframe = 0;

var action = 0;
var numberofframes = 7;

function animate() {
    ctx.clearRect(0, 0, 50, 45);
    var position = Math.floor((gameframe / 5) % 7);
    var framex = spritewidth * position;
    ctx.drawImage(dogimage, framex, action, spritewidth, spriteheight, 0, 0, spritewidth, spriteheight);
    gameframe++;
    requestAnimationFrame(animate);

    if (canvasxleft != 90) {
        canvasx.style.left = canvasxleft + 1 + '%';
        canvasxleft++;
    }
    else if (canvasxright != 0) {
        canvasx.style.left = canvasxright - 1 + '%';
        canvasxright--;
    }
    else {
        canvasxleft = 0;
        canvasxright = 90;
    }
    if (canvasxtop != 90) {
        canvasx.style.top = canvasxtop + 1 + '%';
        canvasxtop++;
    }
    else if (canvasxbottom != 0) {
        canvasx.style.top = canvasxbottom - 1 + '%';
        canvasxbottom--;
    }
    else {
        canvasxtop = 0;
        canvasxbottom = 90;
    }

    var xx = '';
    for (var i = 0; i < 2; i++) {
        xx = xx + canvasx.style.left[i];
    }

    var ss = '';
    for (var i = 0; i < 2; i++) {
        ss = ss + canvas.style.left[i];
    }

    var xx2 = '';
    for (var i = 0; i < 2; i++) {
        xx2 = xx2 + canvasx.style.top[i];
    }

    var ss2 = '';
    for (var i = 0; i < 2; i++) {
        ss2 = ss2 + canvas.style.top[i];
    }

    if (parseInt(xx) - parseInt(ss) < 5 && parseInt(xx) - parseInt(ss) > -5
        && parseInt(xx2) - parseInt(ss2) < 5 && parseInt(xx2) - parseInt(ss2) > -5) {
        alert("you've lost!!");
        canvasxtop = 0;
    }
};
animate();

var moveby = 5;


window.addEventListener("load", (e) => {
    canvas.style.position = "absolute";
});

window.addEventListener("keyup", (e) => {
    switch (e.key) {
        case "ArrowLeft":
            if (canvas.style.left != "5%") {
                action = spriteheight * 3;
                numberofframes = 9;
                canvas.style.left = x - moveby + "%";
                x -= moveby;
                break;
            }
            else {
                break;
            }
        case "ArrowRight":
            if (canvas.style.left != "90%") {
                action = spriteheight * 3;
                numberofframes = 9;
                canvas.style.left = x + moveby + "%";
                x += moveby;
                break;
            }
            else { break; }
        case "ArrowUp":
            if (canvas.style.top != "5%") {
                action = spriteheight * 3;
                numberofframes = 9;
                canvas.style.top = y - moveby + "%";
                y -= moveby;
                break;
            }
            else { break; }
        case "ArrowDown":
            if (canvas.style.top != "90%") {
                action = spriteheight * 3;
                numberofframes = 9;
                canvas.style.top = y + moveby + "%";
                y += moveby;
                break;
            }
            else { break; }
    }
});