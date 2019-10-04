window.onload = function() {
    deltaruneAnimation().loadAnim({
        charactor: "jevil",
        animName: "jevil-idle",
        frames: 7,
        loop: true
    });

    deltaruneAnimation().loadAnim({
        charactor: 'kris',
        animName: "kris-idle",
        frames: 5,
        loop: true
    });

    _(document).keydown("e", () => {
        //deltaruneAnimation()
    });

    deltaruneAnimation().bottomWrite("* LET THE GAMES BEGIN!", 1000);
};