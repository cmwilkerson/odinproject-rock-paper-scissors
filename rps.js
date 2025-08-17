console.log("Hello from the Javaside")
 const validValues = ['rock', 'paper', 'scissors'];
document.getElementById('nextRound').addEventListener('click',function(){
    playRound();
});
document.getElementById('resetGame').addEventListener('click',function(){
    reset();
});
function getComputerChoice(){
    let rock=Math.random();
    let paper=Math.random();
    let scissors=Math.random();
    
    return rock > paper? (rock > scissors? "rock": "scissors"):(paper>scissors? "paper":"scissors")
}
function getUserInput(){
   
    let input = prompt("Choice Between:\n Rock/Paper/Scissors");
 if(!(validValues.includes(input.toLowerCase()))){
    alert(`${input} is not a valid entry for this game. \nStoping this Round`);
    return 
 }
 return input
 
}
function playRound(player=getUserInput(),computer=getComputerChoice()){
player=validValues.indexOf(player)
computer=validValues.indexOf(computer)
console.log("------------------------------\nPlayRound()")
console.log(player);
console.log(computer);
console.log("------------------------------")
changeScoreboard(determineWinner(player,computer));

}
function determineWinner(player,computer){
return (player-computer+3)%3
}
function changeScoreboard(result){
    let temp =0
    switch (result){
        case 0:
            alert("Round is a Tie");
            return;
        
        case 1:
            temp=parseInt(document.getElementById("playerScore").innerHTML);
            document.getElementById("playerScore").innerHTML = temp+1
            temp=parseInt(document.getElementById("totalRounds").innerHTML);
            document.getElementById("totalRounds").innerHTML = temp+1;
            alert("You Won this Round");
            return;
        case 2:
             temp=parseInt(document.getElementById("compScore").innerHTML);
            document.getElementById("compScore").innerHTML = temp+1
            temp=parseInt(document.getElementById("totalRounds").innerHTML);
            document.getElementById("totalRounds").innerHTML = temp+1;
            alert("The Computer beat you this Round");
            return;
    }
}
function reset(){
document.getElementById("compScore").innerHTML = 0;
document.getElementById("playerScore").innerHTML = 0;
document.getElementById("totalRounds").innerHTML = 0;
alert("Game has been Reset");
}