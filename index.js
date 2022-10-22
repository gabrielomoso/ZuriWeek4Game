var name;
var stage;
const rangeStart = 1;
var rangeEnd;
var lives = 0;
//Initial declarations.....

function gameWelcome(){
  console.log("Welcome to GabzWrld Game");
  name = prompt("What is your name: ");
  console.log(`Ok ${name}, The Rules are very simple \n You are to guess the correct number at every stage of the game \n Lets Begin`);

  //Welcome statements
  
  game();
  //Game start
}

function game(){
  
  stage = 0;
  rangeEnd = 1;
  //This resets the values if the game is called from the gameReset function
  //It is also used to avoid adding a life for stage 1 when the game is reset

  while(true){
    
    if(rangeEnd % 2 == 0){
      lives++;
    } 
    //This statement increases the lives/ trials of the user for every even number stages
    //(stage 2 = 1live, stage 4 = 2 lives) etc....
    
    stage++;
    rangeEnd++;
    //Basic increment in state and range as the user levels up
    
    console.log(` \n Welcome to Stage ${stage} \n You have ${lives} lives for this round \n Guess the numbers from ${rangeStart} and ${rangeEnd}`);
    
    let randomNumber = Math.floor(Math.random() * rangeEnd) + 1;
    //This generates a random number in the given range per stage
    
    let answer = prompt("What is your guess: ");
    //collects the inputs
    
    let check = gameCheck(answer, randomNumber);
    //calls the gameCheck fucntion to check if the random number and the user input is same
    //Returns a boolean value
    
    if(check == true){
      console.log(`Correct Answer ${name}, You have leveled up`);
      continue;
      //This continue statement will ignore everyother code below and go back to the start of the while loop
      //Therefore increasing lives and stage/range
      
    }else{
      
      //The code below executes when the user has some lives after a wrong answer
      var redo;
      for(lives; lives > 0; lives--){ //decreases the value of lives after each tries
        console.log(`Wrong answer, Try again \n You have ${lives - 1} lives`);
        answer = prompt(`What is your guess: `);
        redo = gameCheck(answer, randomNumber);
        // basic checking
        
        if(redo == true){ //levels up if the user gives correct anser
          console.log(`Correct Answer ${name}, You have leveled up`);
          
          break;
          //This statement will break out of the current loop (For loop)
          //and continue executing the codes in the while loop
        }

        //if the redo is not true.. the code will re-execute the for loop until the condition is met
        
      }

      //when broken out of the for loop.. this code below will execute
      if(redo != true){ //when the correct answer in redo has not been given.. This executes
         gameReset();
        //goes to reset the game
      break;
        //will break out of the game(While loop) when it is being returned by the gameReset function
        //Therefore bringing the game to an end
      }

      continue;
      //will go back to the starting (while loop) when the redo is true
    } 
  }
}


function gameCheck(number, random){
  if (number == random){
    return true;
  } else {
    return false;
  }
}


function gameReset(){
  let option = prompt(`Wrong Answer ${name}, You ran out of lives, Do you want to start over? (Yes or No) : `);
  if (option == "Yes" || "yes"){
    console.log(`Alright ${name}, The game has started over`);
    game();
    //This will take the game to the start of the game function(not the while loop).
  } else{
    console.log("Thank you for playing");
    return;
    //This will return the game back to who called the gameReset function(redo !true) 
  }
}

gameWelcome();
//Starts the game!!!!!