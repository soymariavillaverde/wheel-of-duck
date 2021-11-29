export function inyectDuckPlayer(name){
    let duckList = document.getElementById('duck_player_id')
    var newDuck = ` 
        <div class="boxDuckName">               
            <img src="assets/duck-alive.png" alt="Duck">
            <p class="player-name">${name}</p>
        </div>
    `
    console.log(duckList)
    duckList.innerHTML += newDuck
    
}

/* export function addPlayer() {
    let playerName = document.getElementById('player-input').value
    if(!repeatName(playerName, playerList)){
        playerList.push(playerName)
        inyectPlayer(playerName)
    }
    let cleanInput = document.getElementById("player-input").value = ""
} */