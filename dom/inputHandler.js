//TODO: Vince. Please put something in here

//               - Vince

var attackSequence = 0;



_(document).keydown("z", () => {
  actionButton();
});

_(document).keydown("Enter", () => {
  actionButton();
});

_(document).keydown("x", () => {
  backButton();
});

_(document).keydown("Shift", () => {
  backButton();
});

_(document).keydown("F2", () => {
  deltarune().debug();
});

function actionButton() {
  if (currentPlayerTurn !== null) {
    //Fight Selection
    if (currentPlayerTurn == "kris") {
      deltarune().stopTurn().kris();
      deltarune().setTurn().susie();
    } else if (currentPlayerTurn == "susie") {
      deltarune().stopTurn().susie();
      deltarune().setTurn().ralsei();
    } else if (currentPlayerTurn == "ralsei") {
      deltarune().stopTurn().ralsei();
      deltaruneFightSystem().loadAttack();

      if (attackSequence == 0) {
        foePatterns().explode(24);
        attackSequence++;
      } else if (attackSequence == 1) {
        foePatterns().wall();
        attackSequence++;
      } else if (attackSequence == 2) {
        foePatterns().crosshair();
        attackSequence = 1;
      }



      setTimeout(function() {
        deltaruneFightSystem().stopAttack();
        deltarune().setTurn().kris();
      }, 5000);
    }
  }
}

function backButton() {
  if (currentPlayerTurn !== null) {
    //go back a player
    if (currentPlayerTurn == "susie") {
      deltarune().stopTurn().susie();
      deltarune().setTurn().kris();
    } else if (currentPlayerTurn == "ralsei") {
      deltarune().stopTurn().ralsei();
      deltarune().setTurn().susie();
    }
  }

}


/*
         ,----,       ,----,             
       .'   .`|     .'   .`|      ,----, 
    .'   .'   ;  .'   .'   ;    .'   .`| 
  ,---, '    .',---, '    .' .'   .'   ; 
  |   :     ./ |   :     ./,---, '    .' 
  ;   | .'  /  ;   | .'  / |   :     ./  
  `---' /  ;   `---' /  ;  ;   | .'  /   
    /  ;  /      /  ;  /   `---' /  ;    
   ;  /  /      ;  /  /      /  ;  /     
  /  /  /      /  /  /      ;  /  /--,   
./__;  /     ./__;  /      /  /  / .`|   
|   : /      |   : /     ./__;       :   
;   |/       ;   |/      |   :     .'    
`---'        `---'       ;   |  .'       
                         `---'           

  ______ ______ ______
 |____  |____  |___  /  ™
     / /    / /   / / 
    / /    / /   / /  
   / /    / /   / /__ 
  /_/    /_/   /_____|
                      
                      

*/
