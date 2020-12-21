
var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function() {    
    
    //Alert Players that they are starting the round
    window.alert("Welcome to the Robot Gladiators!"); 
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?");
    console.log(promptFight);

    if (promptFight === 'fight' || promptFight === "Fight" ){
                //remove enemy's health 
        enemyHealth = enemyHealth - playerAttack;
            console.log(playerName + " attacked " + enemyName + '. ' +enemyName + " now has " + enemyHealth + " health remaining.");
                //check enemy's health
        if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }   
            // check player's health
        playerHealth = playerHealth - enemyAttack;
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        if (playerHealth <=0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
            
        }
                //if player chooses to skip fight
    } else if (promptFight === "skip" || promptFight === "SKIP") {
                //confirm player wants to leave the fight
        var confirmSkip = window.confirm("are you sure you'd like to quit?");

                //if true
        if(confirmSkip) {        
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money from player
        playerMoney = playerMoney - 2;
    }           //if false
     else { 
        fight();
    }
}
};    
    

fight();





































