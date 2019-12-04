

//global variables ('cause why not?)

var currentPlayerTurn = null;
var selectedOption = 1;

//global charactor health values
//max by default when fight starts

var krisHealth = 90,
    krisMaxHealth = 90,
    susieHealth = 110,
    susieMaxHealth = 110,
    ralseiHealth = 70,
    ralseiMaxHealth = 70;

//                To update variables above use
//                krisHealth -= <numberToSubtractFromHealth>
//                                 or
//                krisHealth += <numberToAddToHealth>


function deltarune() {
    const dr = {};

    dr.debug = function() {
        document.getElementById("pos").style.display = "block";
    };

    dr.shake = function(objectID) {
        if (objectID == undefined) {
            //shake body
            //document.body.style.animation = "shake 0.5 infinite";
            _('body').style('animation', 'shake 0.5 infinite');
            setTimeout(function() {
                //document.body.style.animation = "none";
                _('body').style('animation', 'none');
            }, 500);
        }
    };

    dr.updateHealth = function() {
        //update all charactors text displays to match variables
        _('health-text-kris').edit(krisHealth + " / " + krisMaxHealth);
        _('health-text-susie').edit(susieHealth + " / " + susieMaxHealth);
        _('health-text-ralsei').edit(ralseiHealth + " / " + ralseiMaxHealth);

        //update all visual health bar displays to the correct percent

        //kris
        var krisOpOne = krisHealth / krisMaxHealth;
        var krisOpTwo = krisOpOne * 100;

        _('kris-health').style('width', krisOpTwo + "%");

        //susie
        var susieOpOne = susieHealth / susieMaxHealth;
        var susieOpTwo = susieOpOne * 100;
        
        _('susie-health').style('width', susieOpTwo + "%");

        //ralsei
        var ralseiOpOne = ralseiHealth / ralseiMaxHealth;
        var ralseiOpTwo = ralseiOpOne * 100;

        _('ralsei-health').style('width', ralseiOpTwo + "%");
    };

    dr.setTurn = function() {

        const drturn = {};

        drturn.kris = function() {
            var krisNamePlate = document.getElementById('krisPlate');

            currentPlayerTurn = "kris";

            krisNamePlate.style.bottom = "calc(25% + 70px)";
        };

        drturn.susie = function() {
            var susieNamePlate = document.getElementById("susiePlate");

            currentPlayerTurn = "susie";

            susieNamePlate.style.bottom = "calc(25% + 70px)";
        };

        drturn.ralsei = function() {
            var ralseiNamePlate = document.getElementById("ralseiPlate");

            currentPlayerTurn = "ralsei";

            ralseiNamePlate.style.bottom = "calc(25% + 70px)";
        }

        return drturn;

    };

    dr.stopTurn = function() {
        const drsturn = {};

        drsturn.kris = function() {
            var krisNamePlate = document.getElementById('krisPlate');

            currentPlayerTurn = null;

            krisNamePlate.style.bottom = "25%";
        };

        drsturn.susie = function() {
            var susieNamePlate = document.getElementById("susiePlate");

            currentPlayerTurn = null;

            susieNamePlate.style.bottom = "25%";
        };

        drsturn.ralsei = function() {
            var ralseiNamePlate = document.getElementById("ralseiPlate");

            currentPlayerTurn = null;

            ralseiNamePlate.style.bottom = "25%";
        };

        return drsturn;
    };

    dr.health = function() {
        const drhealth = {};

        drhealth.add = function() {
            const setChar = {};

            setChar.kris = function(healthAmount) {

                //document.getElementById("kris-health").style.width = healthAmount + "%";
                krisHealth += healthAmount;
                deltarune().updateHealth();

            };

            setChar.susie = function(healthAmount) {
                susieHealth += healthAmount;
                deltarune().updateHealth();
            };

            setChar.ralsei = function(healthAmount) {
                ralseiHealth += healthAmount;
                deltarune().updateHealth();
            };

            return setChar;
        };

        return drhealth;
    };

    dr.selectOption = function() {
        const drso = {};

        drso.next = function() {
            if (currentPlayerTurn !== null) {
                if (selectedOption !== 5) {
                    selectedOption++;
                    this.update();
                } else {
                    selectedOption = 1;
                    this.update();
                }
            }
        };

        drso.back = function() {
            if (currentPlayerTurn !== null) {
                if (selectedOption !== 1) {
                    selectedOption--;
                    this.update();
                } else {
                    selectedOption = 5;
                    this.update();
                }
            }
        };

        drso.update = function() {
            //console.log(selectedOption);

            var option = document.getElementById(currentPlayerTurn + "-" + selectedOption);

            if (currentPlayerTurn == "kris") {
                if (selectedOption == 1) {
                    option.setAttribute('src', '../img/ui/options/fight-active.png');
                    document.getElementById(currentPlayerTurn + "-2").setAttribute('src', '../img/ui/options/act.png');
                    document.getElementById(currentPlayerTurn + "-3").setAttribute('src', '../img/ui/options/item.png');
                    document.getElementById(currentPlayerTurn + "-4").setAttribute('src', '../img/ui/options/spare.png');
                    document.getElementById(currentPlayerTurn + "-5").setAttribute('src', '../img/ui/options/defend.png');
                } else if (selectedOption == 2) {
                    document.getElementById(currentPlayerTurn + "-1").setAttribute('src', '../img/ui/options/fight.png');
                    option.setAttribute('src', '../img/ui/options/act-active.png');
                    document.getElementById(currentPlayerTurn + "-3").setAttribute('src', '../img/ui/options/item.png');
                    document.getElementById(currentPlayerTurn + "-4").setAttribute('src', '../img/ui/options/spare.png');
                    document.getElementById(currentPlayerTurn + "-5").setAttribute('src', '../img/ui/options/defend.png');
                } else if (selectedOption == 3) {
                    document.getElementById(currentPlayerTurn + "-1").setAttribute('src', '../img/ui/options/fight.png');
                    document.getElementById(currentPlayerTurn + "-2").setAttribute('src', '../img/ui/options/act.png');
                    option.setAttribute('src', '../img/ui/options/item-active.png');
                    document.getElementById(currentPlayerTurn + "-4").setAttribute('src', '../img/ui/options/spare.png');
                    document.getElementById(currentPlayerTurn + "-5").setAttribute('src', '../img/ui/options/defend.png');
                } else if (selectedOption == 4) {
                    document.getElementById(currentPlayerTurn + "-1").setAttribute('src', '../img/ui/options/fight.png');
                    document.getElementById(currentPlayerTurn + "-2").setAttribute('src', '../img/ui/options/act.png');
                    document.getElementById(currentPlayerTurn + "-3").setAttribute('src', '../img/ui/options/item.png');
                    option.setAttribute('src', '../img/ui/options/spare-active.png');
                    document.getElementById(currentPlayerTurn + "-5").setAttribute('src', '../img/ui/options/defend.png');
                } else if (selectedOption == 5) {
                    document.getElementById(currentPlayerTurn + "-1").setAttribute('src', '../img/ui/options/fight.png');
                    document.getElementById(currentPlayerTurn + "-2").setAttribute('src', '../img/ui/options/act.png');
                    document.getElementById(currentPlayerTurn + "-3").setAttribute('src', '../img/ui/options/item.png');
                    document.getElementById(currentPlayerTurn + "-4").setAttribute('src', '../img/ui/options/spare.png');
                    option.setAttribute('src', '../img/ui/options/defend-active.png');
                }
            } else {
                if (selectedOption == 1) {
                    option.setAttribute('src', '../img/ui/options/fight-active.png');
                    document.getElementById(currentPlayerTurn + "-2").setAttribute('src', '../img/ui/options/magic.png');
                    document.getElementById(currentPlayerTurn + "-3").setAttribute('src', '../img/ui/options/item.png');
                    document.getElementById(currentPlayerTurn + "-4").setAttribute('src', '../img/ui/options/spare.png');
                    document.getElementById(currentPlayerTurn + "-5").setAttribute('src', '../img/ui/options/defend.png');
                } else if (selectedOption == 2) {
                    document.getElementById(currentPlayerTurn + "-1").setAttribute('src', '../img/ui/options/fight.png');
                    option.setAttribute('src', '../img/ui/options/magic-active.png');
                    document.getElementById(currentPlayerTurn + "-3").setAttribute('src', '../img/ui/options/item.png');
                    document.getElementById(currentPlayerTurn + "-4").setAttribute('src', '../img/ui/options/spare.png');
                    document.getElementById(currentPlayerTurn + "-5").setAttribute('src', '../img/ui/options/defend.png');
                } else if (selectedOption == 3) {
                    document.getElementById(currentPlayerTurn + "-1").setAttribute('src', '../img/ui/options/fight.png');
                    document.getElementById(currentPlayerTurn + "-2").setAttribute('src', '../img/ui/options/magic.png');
                    option.setAttribute('src', '../img/ui/options/item-active.png');
                    document.getElementById(currentPlayerTurn + "-4").setAttribute('src', '../img/ui/options/spare.png');
                    document.getElementById(currentPlayerTurn + "-5").setAttribute('src', '../img/ui/options/defend.png');
                } else if (selectedOption == 4) {
                    document.getElementById(currentPlayerTurn + "-1").setAttribute('src', '../img/ui/options/fight.png');
                    document.getElementById(currentPlayerTurn + "-2").setAttribute('src', '../img/ui/options/magic.png');
                    document.getElementById(currentPlayerTurn + "-3").setAttribute('src', '../img/ui/options/item.png');
                    option.setAttribute('src', '../img/ui/options/spare-active.png');
                    document.getElementById(currentPlayerTurn + "-5").setAttribute('src', '../img/ui/options/defend.png');
                } else if (selectedOption == 5) {
                    document.getElementById(currentPlayerTurn + "-1").setAttribute('src', '../img/ui/options/fight.png');
                    document.getElementById(currentPlayerTurn + "-2").setAttribute('src', '../img/ui/options/magic.png');
                    document.getElementById(currentPlayerTurn + "-3").setAttribute('src', '../img/ui/options/item.png');
                    document.getElementById(currentPlayerTurn + "-4").setAttribute('src', '../img/ui/options/spare.png');
                    option.setAttribute('src', '../img/ui/options/defend-active.png');
                }
            }

            
            
        };

        return drso;
    };

    dr.select = function() {
        if (selectedOption == 1) {
            //Fight
            deltaruneAnimation().loadAnim({
                charactor: "kris",
                animName: "kris-fight",
                frames: 7,
                loop: false
            });
        }
    };

    return dr;
}