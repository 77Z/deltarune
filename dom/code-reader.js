window.onload = function() {
    //deltaruneAnimation().loadAnim({
    //    charactor: "jevil",
    //    animName: "jevil-idle",
    //    frames: 7,
    //    loop: true
    //});

    //deltaruneAnimation().loadAnim({
    //    charactor: 'kris',
    //    animName: "kris-idle",
    //    frames: 5,
    //    loop: true
    //});

    _(document).keydown("e", () => {
        this.deltaruneAnimation().loadAnim({
            charactor: "kris",
            animName: "kris-fight",
            frames: 7,
            loop: false
        });
    });

    _(document).keydown("w", () => {
        this.deltaruneAnimation().loadAnim({
            charactor: "kris",
            animName: "kris-sword-put-away",
            frames: 8,
            loop: true
        });
    });

    _(document).keydown("q", () => {
        this.deltaruneAnimation().loadAnim({
            charactor: "kris",
            animName: "kris-sword-take-out",
            frames: 11,
            loop: false
        });
    });

    _(document).keydown("r", () => {
        this.deltaruneAnimation().loadAnim({
            charactor: "kris",
            animName: "kris-defend",
            frames: 4,
            loop: true
        });
    });

    //this.deltaruneAnimation().bottomWrite("* WEEE", 999999);

    //load Beginning Attack
    function loadBeginAttack() {
        var commandAmount = beginningAttack.OnStart.split(",");
        for (var i = 0; i < commandAmount.length; i++) {
            var fullCommand = commandAmount[i];
            var command = fullCommand.split(":")[0];

            if (command == "writeBottom") {
                var textParam = fullCommand.split(":")[1];
                var timeParam = fullCommand.split(":")[2];
                this.deltaruneAnimation().bottomWrite(textParam, parseInt(timeParam));
            } else if (command == "playAnim") {
                var splitParams = fullCommand.split(":");
                var charactor = splitParams[1];
                var animName = splitParams[2];
                var frames = splitParams[3];
                var loop = splitParams[4];

                deltaruneAnimation().loadAnim({
                    charactor: charactor,
                    animName: animName,
                    frames: parseInt(frames),
                    loop: loop
                });
            } else if (command == "clearText") {
                var splitParams = fullCommand.split(":");
                var displayToClear = splitParams[1];

                this.deltaruneAnimation().clearText(displayToClear);
            }
        }
    }
    
    loadBeginAttack();
    //deltaruneAnimation().bottomWrite("* LET THE GAMES BEGIN!", 1000);

    //this.deltaruneAnimation().loadAnim({
    //    charactor: "kris",
    //    animName: "kris-idle",
    //    frames: "5",
    //    loop: true
    //})
};
