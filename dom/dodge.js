//var isDodging = false;
//
//let img = new Image();
//img.src = "../img/dodge/soul.png";
//img.onload = function() {
//    window.requestAnimationFrame(init);
//};
//
//const SCALE = 2;
//
//let canvas = document.querySelector("canvas");
//let ctx = canvas.getContext("2d");
//
////function init() {
////    //ctx.drawImage(img, 0, 0, 18, 18, 0, 0, 18 * SCALE, 18 * SCALE);
////    ctx.drawImage(img, 0, 0, 18, 18, 0, 0, 18, 18);
////}
//
//const MOVEMENT_SPEED = 2;
//var positionX = 50;
//var positionY = 50;
//
//var WIDTH = 18;
//var HEIGHT = 18;
//var FPS = 12;
//
//function drawFrame(x, y) {
//    ctx.drawImage(img, 0, 0, WIDTH, HEIGHT,
//                    x, y, WIDTH, HEIGHT);
//}
//
//var projectileForce;
//var projectilePosX;
//var projectilePosY;
//
//function createProjectile(x, y, direction, force) {
//    var spade = new Image(34, 36);
//    spade.src = "../img/dodge/jevil-spade.png";
//    spade.onload = function() {
//        ctx.drawImage(spade, x, y, 34, 36);
//    };
//    projectileForce = force;
//    projectilePosX = x;
//    projectilePosY = y;
//}
//
//let keyPresses = {};
//window.addEventListener("keydown", (event) => {
//    keyPresses[event.key] = true;
//})
//window.addEventListener("keyup", (event) => {
//    keyPresses[event.key] = false;
//})
//
//
//
//function moveSoul(deltaX, deltaY) {
//    //positionX += deltaX;
//    //positionY += deltaY;
//
//    //  ^^^^ OLD ^^^^
//
//    if (positionX + deltaX > 0 && positionX + 18 + deltaX < canvas.width) {
//        positionX += deltaX;
//    }
//    if (positionY + deltaY > 0 && positionY + 18 + deltaY < canvas.height) {
//        positionY += deltaY;
//    }
//}
//
//
//function init() {
//    ctx.clearRect(0, 0, canvas.width, canvas.height);
//
//
//
//    if (isDodging) {
//        if (keyPresses.ArrowUp) {
//            moveSoul(0, -MOVEMENT_SPEED);
//        } else if (keyPresses.ArrowDown) {
//            moveSoul(0, MOVEMENT_SPEED);
//        }
//        
//        if (keyPresses.ArrowRight) {
//            moveSoul(MOVEMENT_SPEED, 0);
//        } else if (keyPresses.ArrowLeft) {
//            moveSoul(-MOVEMENT_SPEED, 0);
//        }
//    }
//
//    drawFrame(positionX, positionY);
//    createProjectile(10, 10, 10, 10);
//    projectilePosX += 1;
//
//    //setTimeout(function() {
//        window.requestAnimationFrame(init);
//    //}, 1000 / FPS);
//
//    
//}
//
////_(document).keydown("x", () => {
////    deltaruneFightSystem().loadAttack();
////});
////
////_(document).keydown("c", () => {
////    deltaruneFightSystem().stopAttack();
////});
//
//function deltaruneFightSystem() {
//    const dfs = {};
//
//    dfs.loadAttack = function() {
//        var canvas = document.getElementById("arena");
//
//        canvas.style.transform = "scale(2) rotate(0deg)";
//
//        isDodging = true;
//    };
//
//    dfs.stopAttack = function() {
//        var canvas = document.getElementById("arena");
//
//        canvas.style.transform = "scale(0) rotate(-180deg)";
//
//        isDodging = false;
//    };
//
//    return dfs;
//}

var immune = false;
var immuneTime = 1500;
var isDodging = false;
window.requestAnimationFrame(init);
var soul = document.getElementById("soul");
soul.style.left = "10px";
soul.style.top = "10px";

//Code
var MOVEMENT_SPEED = 6;
let keyPresses = {};
window.addEventListener("keydown", (event) => {
    keyPresses[event.key] = true;
});
window.addEventListener("keyup", () => {
    keyPresses[event.key] = false;
});

function moveSoul(deltaX, deltaY) {
    var currentX = parseInt(soul.style.left.substr(0, soul.style.left.length - 2));
    var currentY = parseInt(soul.style.top.substr(0, soul.style.top.length - 2));
//
    //soul.style.left = currentX += deltaX + "px";
    //soul.style.top = currentY += deltaY + "px";

    if (currentX + deltaX > 0 && currentX + 36 + deltaX < 240) {
        soul.style.left = parseInt(soul.style.left.substr(0, soul.style.left.length - 2)) + deltaX + "px";
    }
    if (currentY + deltaY > 0 && currentY + 36 + deltaY < 240) {
        soul.style.top = parseInt(soul.style.top.substr(0, soul.style.top.length - 2)) + deltaY + "px";
    }
}

function init() {

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
    

    document.getElementById("pos").innerHTML = "x: " +
    soul.getBoundingClientRect().x + " y: " + soul.getBoundingClientRect().y;
    //document.getElementById("testBullet").getBoundingClientRect().x;


    window.requestAnimationFrame(init);
}

function foe() {
    const foe = {};

    foe.createBullet = function(direction, velocity, x, y) {
        var bullet = document.createElement("div");
        var bulletId = "bullet" + Math.random().toString().split(".")[1]
        bullet.setAttribute("class", "bullet");
        bullet.setAttribute("id", bulletId);
        bullet.style.left = x + "px";
        bullet.style.top = y + "px";


        if (direction == "up") {
            bullet.style.transform = "rotate(-90deg)";
        } else if (direction == "right") {
            //none
        } else if (direction == "left") {
            bullet.style.transform = "rotate(180deg)";
        } else if (direction == "down") {
            bullet.style.transform = "rotate(90deg)";
        }

        var bulletInter = setInterval(function() {
            //bullet.style.left = parseInt(document.getElementById(bulletId).style.left.substr(0, document.getElementById(bulletId).style.left.length - 2)) + velocity + "px";

            //console.log(bullet.getBoundingClientRect());
            if (bullet.getBoundingClientRect().x > 2000) {
                clearInterval(bulletInter);
                bullet.remove();
            }

            if (!immune) {
                if (logic().between(bullet.getBoundingClientRect().x, soul.getBoundingClientRect().x, soul.getBoundingClientRect().x + 36) && logic().between(bullet.getBoundingClientRect().y, soul.getBoundingClientRect().y, soul.getBoundingClientRect().y + 36)) {
                    console.log("HIT!");
                    console.log("bullet x: " + bullet.getBoundingClientRect().x + " bullet y: " + bullet.getBoundingClientRect().y +
                    " soul x: " + soul.getBoundingClientRect().x + " soul y: " + soul.getBoundingClientRect().y);
                    deltaruneFightSystem().takeDamage();
                }
            }
            

            if (direction == "up") {
                bullet.style.top = parseInt(bullet.style.top.substr(0, bullet.style.top.length - 2)) - velocity + "px";
            } else if (direction == "right") {
                bullet.style.left = parseInt(bullet.style.left.substr(0, bullet.style.left.length - 2)) + velocity + "px";
            } else if (direction == "left") {
                bullet.style.left = parseInt(bullet.style.left.substr(0, bullet.style.left.length - 2)) - velocity + "px";
            } else if (direction == "down") {
                bullet.style.top = parseInt(bullet.style.top.substr(0, bullet.style.top.length - 2)) + velocity + "px";
            }
        }, 30);

        document.getElementById('battle-area').appendChild(bullet);
    };

    return foe;
}

function foePatterns() {
    const patterns = {};

    patterns.explode = function(velocity) {
        foe().createBullet("right", velocity, 400, 400);
        foe().createBullet("left", velocity, 325, 400);
        foe().createBullet("up", velocity, 360, 350);
        foe().createBullet("down", velocity, 360, 450);
    };

    patterns.wall = function() {
        foe().createBullet("right", 8, 100, 300);
        foe().createBullet("right", 8, 100, 350);
        foe().createBullet("right", 8, 100, 400);

        setTimeout(function() {
            foe().createBullet("right", 8, 100, 200);
            foe().createBullet("right", 8, 100, 250);
            foe().createBullet("right", 8, 100, 300);
            foe().createBullet("right", 8, 100, 350);
        }, 1000);
    };

    patterns.crosshair = function() {
        foe().createBullet("right", 20, 100, soul.getBoundingClientRect().y);
        foe().createBullet("right", 20, 50, soul.getBoundingClientRect().y);
        foe().createBullet("left", 20, 1500, soul.getBoundingClientRect().y);
        setTimeout(function() {
            foe().createBullet("right", 20, 100, soul.getBoundingClientRect().y);
            setTimeout(function() {
                foe().createBullet("right", 20, 100, soul.getBoundingClientRect().y);
                setTimeout(function() {
                    foe().createBullet("right", 20, 100, soul.getBoundingClientRect().y);
                }, 1000);
            }, 1000);
        }, 1000);
    };

    return patterns;
}


function deltaruneFightSystem() {
    const dfs = {};

    dfs.loadAttack = function() {
        var canvas = document.getElementById("battle-box");

        canvas.style.transform = "scale(1) rotate(0deg)";

        isDodging = true;
    };

    dfs.stopAttack = function() {
        var canvas = document.getElementById("battle-box");

        canvas.style.transform = "scale(0) rotate(-180deg)";

        isDodging = false;
    };

    dfs.takeDamage = function() {


        this.setImmune();

        deltarune().health().add().kris(-15);



        //var battleBox = document.getElementById('battle-box');
        //var currentBoxX = parseInt(battleBox.style.left.substr(0, battleBox.style.left.length - 2));
        //battleBox.style.transition = "0";
        //battleBox.style.left = currentBoxX - 20 + "px";
        //setTimeout(function() {
        //    battleBox.style.left = currentBoxX + 40 + "px";
        //    setTimeout(function() {
        //        battleBox.style.left = currentBoxX - 20 + "px";
        //    }, 100);
        //}, 100);
    };

    dfs.setImmune = function() {
        immune = true;
        soul.style.background = "url(../img/dodge/soul-dark.png)";
        soul.style.backgroundPosition = "center";
        soul.style.backgroundSize = "cover";
        soul.style.backgroundRepeat = "no-repeat";
        

        setTimeout(function() {
            immune = false;
            soul.style.background = "url(../img/dodge/soul.png)";
            soul.style.backgroundPosition = "center";
            soul.style.backgroundSize = "cover";
            soul.style.backgroundRepeat = "no-repeat";
        }, immuneTime);
    };

    return dfs;
}