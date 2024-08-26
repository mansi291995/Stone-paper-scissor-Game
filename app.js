let userS=0;
let compS=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScored=document.querySelector("#userScore");
const compScored=document.querySelector("#compScore");
const drawGame=()=>
{
    
    msg.innerText="Game Draw!";
    msg.style.backgroundColor="grey";
}
const showWinnner=(userWin)=>
{
    if(userWin)
    {
        
        userS++;
        userScored.innerText=userS;
        msg.innerText="You Win!";
        msg.style.backgroundColor="green";
    }
    else{
        
        compS++;
        compScored.innerText=compS;
        msg.innerText="You loose!";
        msg.style.backgroundColor="red";
    }
}
const GenCompChoice=()=>
{
    const options=["stone","paper","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}
const playGame=(userChoice)=>
{
    console.log("user choice =",userChoice)
    const CompChoice=GenCompChoice();
    console.log("computer choice=",CompChoice);
    if(userChoice===CompChoice)
    {
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="stone")
        {
            userWin=CompChoice==="paper" ? false: true;
        }
        else if(userChoice==="paper")
        {
            userWin=CompChoice==="scissors" ? false:true;
        }
        else{
            userWin=CompChoice==="stone" ? false:true;
        }
        showWinnner(userWin);
    }
};
choices.forEach((choice)=>
{
    console.log(choice);
    choice.addEventListener("click",()=>
    {
        const userChoice=choice.getAttribute("id");
        
        playGame(userChoice);
});
});
