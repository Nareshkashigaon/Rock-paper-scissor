let userScore=0;
let compScore=0;
const userscore=document.querySelector("#user-score");
const compscore=document.querySelector("#comp-score");

const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg p");

const gencompChoice=()=>{
    const options = ["Rock","Paper","Scissor"];
    const rdmIdx = Math.floor(Math.random()*3);
   return options[rdmIdx];
  
}
const drawGame=()=>{
    console.log("Game was Draw!");
    msg.innerHTML="Game was draw play again";
    document.querySelector("#msg p").style.backgroundColor="#092635";
};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("you Won");
        let userScoreValue=userScore++;
        userscore.innerHTML=userScoreValue;

        msg.innerHTML=`You Won! your ${userChoice} beats ${compChoice}`;
        document.querySelector("#msg p").style.backgroundColor="green";

    }else{
        console.log("You loss");
        let compScoreValue=compScore++;
        compscore.innerHTML=compScoreValue;
        msg.innerHTML=`You loss!  ${compChoice} beats your ${userChoice}`;
        document.querySelector("#msg p").style.backgroundColor="red";
    }
};


const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
//genarate computer choice
const compChoice=gencompChoice();
console.log("computer Choice =",compChoice);
if(userChoice===compChoice){
    drawGame();
}else{
    let userWin=true;
    if(userChoice==="Rock"){
        // computer choice is => paperr or scissor
        userWin=compChoice==="Paper" ? false : true;
    }else if(userChoice==="Paper"){
        //computer choice is => rock or scissor
        userWin=compChoice==="Scissor" ? false : true;
    }else{
        //user choice=>scissor
        ////computer choice is => rock or paper
        userWin=compChoice==="Rock" ? false: true;
    }
    showWinner(userWin,userChoice,compChoice);
}

};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

