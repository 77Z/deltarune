var isDodging = false;

let img = new Image();
img.src = "../img/dodge/soul.png";
img.onload = function() {
    window.requestAnimationFrame(init);
};

const SCALE = 2;

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

//function init() {
//    //ctx.drawImage(img, 0, 0, 18, 18, 0, 0, 18 * SCALE, 18 * SCALE);
//    ctx.drawImage(img, 0, 0, 18, 18, 0, 0, 18, 18);
//}

const MOVEMENT_SPEED = 2;
var positionX = 50;
var positionY = 50;

var WIDTH = 18;
var HEIGHT = 18;
var FPS = 12;

function drawFrame(x, y) {
    ctx.drawImage(img, 0, 0, WIDTH, HEIGHT,
                    x, y, WIDTH, HEIGHT);
}

var projectileForce;
var projectilePosX;
var projectilePosY;

function createProjectile(x, y, direction, force) {
    var spade = new Image(34, 36);
    spade.src = "../img/dodge/jevil-spade.png";
    spade.onload = function() {
        ctx.drawImage(spade, x, y, 34, 36);
    };
    projectileForce = force;
    projectilePosX = x;
    projectilePosY = y;
}

let keyPresses = {};
window.addEventListener("keydown", (event) => {
    keyPresses[event.key] = true;
})
window.addEventListener("keyup", (event) => {
    keyPresses[event.key] = false;
})



function moveSoul(deltaX, deltaY) {
    //positionX += deltaX;
    //positionY += deltaY;

    //  ^^^^ OLD ^^^^

    if (positionX + deltaX > 0 && positionX + 18 + deltaX < canvas.width) {
        positionX += deltaX;
    }
    if (positionY + deltaY > 0 && positionY + 18 + deltaY < canvas.height) {
        positionY += deltaY;
    }
}


function init() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);



    if (isDodging) {
        if (keyPresses.ArrowUp) {
            moveSoul(0, -MOVEMENT_SPEED);
        } else if (keyPresses.ArrowDown) {
            moveSoul(0, MOVEMENT_SPEED);
        }
        
        if (keyPresses.ArrowRight) {
            moveSoul(MOVEMENT_SPEED, 0);
        } else if (keyPresses.ArrowLeft) {
            moveSoul(-MOVEMENT_SPEED, 0);
        }
    }

    drawFrame(positionX, positionY);
    createProjectile(10, 10, 10, 10);
    projectilePosX += 1;

    //setTimeout(function() {
        window.requestAnimationFrame(init);
    //}, 1000 / FPS);

    
}

//_(document).keydown("x", () => {
//    deltaruneFightSystem().loadAttack();
//});
//
//_(document).keydown("c", () => {
//    deltaruneFightSystem().stopAttack();
//});

function deltaruneFightSystem() {
    const dfs = {};

    dfs.loadAttack = function() {
        var canvas = document.getElementById("arena");

        canvas.style.transform = "scale(2) rotate(0deg)";

        isDodging = true;
    };

    dfs.stopAttack = function() {
        var canvas = document.getElementById("arena");

        canvas.style.transform = "scale(0) rotate(-180deg)";

        isDodging = false;
    };

    return dfs;
}