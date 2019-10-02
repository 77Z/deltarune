function deltaruneAnimation() {
    const da = {};
    da.loadAnim = function(animationOptions) {
        var charactor = animationOptions.charactor,
            name = animationOptions.animName,
            frames = animationOptions.frames,
            frameCount = 0,
            firstFrameLocation = "../img/animations/" + name + "/sprite_" + frameCount + ".png";

        this.log("Frame Loaded: " + firstFrameLocation);

        var loop;
        if (animationOptions.loop == undefined) {
            loop = false;
        } else if (animationOptions.loop == true) {
            loop = true;
        } else if (animationOptions.loop == false) {
            loop = false;
        }

        this.log("loop: " + loop);

        //var tempChar = document.createElement("img");
        //tempChar.src = firstFrameLocation;
        //document.body.appendChild(tempChar);

        //function animate() {
        //    requestAnimationFrame(animate);
        //    console.log("Frame");
        //}
//
        //animate();

        setInterval(function() {
            frameCount++;
            document.getElementById(charactor).style.backgroundImage = "url(../img/animations/" + name + "/sprite_" + frameCount + ".png)";
            if (frameCount == frames) {
                if (loop == true) {
                    frameCount = 0;
                } else {
                    frameCount = 0;
                }
            }
            
            console.log(frameCount);
        }, /*1000*/120);
        //document.getElementById(charactor).style.backgroundImage = "url(" + firstFrameLocation +")";

    };
    da.log = function(message) {
        console.log(`%c[Deltarune Animation Engine] %c${message}`, 'color: violet', 'color: normal');
    }
    return da;
}