console.log("Hello from the Javaside")
function getComputerChoice(){
    let rock=Math.random();
    let paper=Math.random();
    let scissors=Math.random();
    
    return rock > paper? (rock > scissors? "rock": "scissors"):(paper>scissors? "paper":"scissors")
}
console.log(getComputerChoice())
