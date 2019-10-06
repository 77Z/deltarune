//require('vq_underscore');

function deltaruneAnimation() {
    const da = {};
    da.loadAnim = function(animationOptions) {
        //var useNewAnimationEngine = true;
//
        //if (useNewAnimationEngine) {
            var charactor = animationOptions.charactor,
                name = animationOptions.animName,
                frames = animationOptions.frames,
                firstFrameLocation = "../img/animations/" + name + "/anim.gif?abc=" + Math.random();

            //this.log("Frame Loaded: " + firstFrameLocation);

            var loop;
            if (animationOptions.loop == undefined) {
                loop = false;
            } else if (animationOptions.loop == true) {
                loop = true;
            } else if (animationOptions.loop == false) {
                loop = false;
            }

            //console.log("loaded")
            //document.getElementById(charactor).style.background = "url(" + firstFrameLocation + ");";
            document.getElementById(charactor).setAttribute('style', 'background-image: url(' + firstFrameLocation +')');
            //document.getElementById("kris").style.backgroundImage = "url(../img/animations/kris-idle/anim.gif";
            //console.log("finishedLOADING")

            if (!loop) {
                setTimeout(function() {
                    document.getElementById(charactor).setAttribute('style', 'background-image: url(../img/animations/' + charactor +'-idle/anim.gif)');
                }, 120 * frames);
            }





        //} else {
        //    var charactor = animationOptions.charactor,
        //        name = animationOptions.animName,
        //        frames = animationOptions.frames,
        //        frameCount = 0,
        //        firstFrameLocation = "../img/animations/" + name + "/sprite_" + frameCount + ".png";
//
        //    this.log("Frame Loaded: " + firstFrameLocation);
//
        //    var loop;
        //    if (animationOptions.loop == undefined) {
        //        loop = false;
        //    } else if (animationOptions.loop == true) {
        //        loop = true;
        //    } else if (animationOptions.loop == false) {
        //        loop = false;
        //    }
//
        //    this.log("loop: " + loop);
//
        //    //var tempChar = document.createElement("img");
        //    //tempChar.src = firstFrameLocation;
        //    //document.body.appendChild(tempChar);
//
        //    //function animate() {
        //    //    requestAnimationFrame(animate);
        //    //    console.log("Frame");
        //    //}
    ////
        //    //animate();
//
        //    var anim = setInterval(function() {
        //        frameCount++;
        //        document.getElementById(charactor).style.backgroundImage = "url(../img/animations/" + name + "/sprite_" + frameCount + ".png)";
        //        if (frameCount == frames) {
        //            if (loop == true) {
        //                frameCount = 0;
        //            } else {
        //                frameCount = 0;
        //            }
        //        }
        //        
        //        //console.log(frameCount);
        //    }, /*1000*/120);
        //    //document.getElementById(charactor).style.backgroundImage = "url(" + firstFrameLocation +")";
        //}

    };
    da.stopAnim = function(charactor) {
        //document.
    };
    da.log = function(message) {
        console.log(`%c[Deltarune Animation Engine] %c${message}`, 'color: violet', 'color: normal');
    };
    da.err = function(message) {
        console.error(`[Deltarune Animation Engine] ${message}`);
    };
    da.bottomWrite = function(message, clrTimeMS) {
        var messageSplit = message.split("");
        console.log(messageSplit);

        var writeProgress = -1;
        var messageLength = messageSplit.length;
        var writeText = setInterval(function() {
            writeProgress++;
            if (writeProgress == messageLength - 1) {
                clearInterval(writeText);
                //deltaruneAnimation().clearTextOnKeypress();
                deltaruneAnimation().clearTextOverTime("bottom", clrTimeMS);
            }

            //console.log(messageSplit[writeProgress]);
            //console.log(writeProgress);
            var td = document.getElementById('td');
            var singleText = document.createTextNode(messageSplit[writeProgress]);
            td.appendChild(singleText);

            

            return "hi";
        }, 20);


        //for(var i = 0; i < messageSplit.length; i++) {
        //    (function (i) {
        //        setTimeout(function() {
        //            write();
        //        });
        //    })(i);
//
        //    function write() {
        //        console.log(messageSplit[i]);
        //    }
        //}
    };
    da.clearTextOnKeypress = function() {
        _(document).keydown("z", () => {
            cls();
        });

        function cls() {
            _('td').empty();
        }
    };
    da.clearTextOverTime = function(textDisplay, delay) {
        setTimeout(function() {
            if (textDisplay == "bottom") {
                _('td').empty();
            } else {
                deltaruneAnimation().err("FATAL ERROR: The text display: \"" + textDisplay + "\" Is not a vaild input\nFor a list of valid imputs run:\n deltaruneAnimation().validTextDisplays();");
            } 
        }, delay);
    };
    da.clearText = function(textDisplay) {
        if (textDisplay == "bottom") {
            _('td').empty();
        } else {
            deltaruneAnimation().err("FATAL ERROR: The text display: \"" + textDisplay + "\" Is not a vaild input\nFor a list of valid imputs run:\n deltaruneAnimation().validTextDisplays();");
        }
    }
    return da;
}