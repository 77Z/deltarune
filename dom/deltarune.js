

//global variables ('cause why not?)

var currentPlayerTurn = null;
var selectedOption = 1;


function deltarune() {
    const dr = {};

    dr.setTurn = function() {

        const drturn = {};

        drturn.kris = function() {
            var krisNamePlate = document.getElementById('krisPlate');

            currentPlayerTurn = "kris";

            krisNamePlate.style.bottom = "calc(25% + 70px)";
        };

        return drturn;

    };

    dr.health = function() {
        const drhealth = {};

        drhealth.set = function() {
            const setChar = {};

            setChar.kris = function(healthAmount) {

                document.getElementById("kris-health").style.width = healthAmount + "%";

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
                }
            }
        };

        drso.back = function() {
            if (currentPlayerTurn !== null) {
                if (selectedOption !== 1) {
                    selectedOption--;
                    this.update();
                }
            }
        };

        drso.update = function() {
            console.log(selectedOption);

            var option = document.getElementById(currentPlayerTurn + "-" + selectedOption);

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