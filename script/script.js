function getComputerChoice(){
    let choice;
    switch ( Math.ceil(Math.random()*3) ){
        case 1: 
            choice="rock";
            break;
        case 2:
            choice="paper"
            break;
        case 3:
            choice="scissors"
    }

    return choice;
}

function comparator(choice1, choice2){
    /* The function returns -1 if choices have an error ,0 if choice1 wins over choice2, 1 if its a tie, 2 if choice1 losses over choice2 */
    let result=-1;
   
    if (choice1==choice2)
        result=1;
    else if (choice1=="rock"){
        //WINNERS AND LOSERS AGAINST ROCK
        if(choice2=="paper")
            result=2;
        else if (choice2=="scissors")
            result=0;
    }else if (choice1=="paper"){ 
        //WINNERS AND LOSERS AGAINST PAPER
        if(choice2=="scissors")
            result=2;
        else if (choice2=="rock")
            result=0; 
    }else if (choice1=="scissors"){
        //WINNERS AND LOSERS AGAINST SCISSORS
        if(choice2=="rock")
            result=2;
        else if (choice2=="paper")
            result=0;
    }
    
    return result;
    
}

function getHumanChoice(){
    //made case insensitive
    return prompt("Ingrese su jugada").toLowerCase();
}


function playGame(){
    function playRound(humanChoice, computerChoice){
    
        let result=comparator(humanChoice, computerChoice);
        let strOut;
        if(result==-1)
            strOut="There was a mistake in the input";
        else if (result==0){
            strOut=`You win, ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        }else if (result==2){
            strOut=`You lose, ${computerChoice} beats ${humanChoice}`;
            computerScore++;
        }else 
            strOut="There was a tie!"
        console.log(strOut);
    }


    let humanScore=0, computerScore=0;

    while(humanScore<3 && computerScore<3){
        playRound(getHumanChoice(), getComputerChoice());
    }

    if(humanScore===3)
        console.log("You win the game!");
    else
        console.log("You lose the game...");
}


playGame();