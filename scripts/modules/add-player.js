import { inyectDuckPlayer } from "./carrousell.js";
import { deletePlayer } from "./delete-player.js";
import { modifyPlayer } from "./modify-player.js";
import { repeatName } from "./name-no-repeat.js"

var playerList = []

export function addPlayer() {
    var playerName = document.getElementById('player-input').value
    var players = document.getElementById('player-list')
    if(!repeatName(playerName, playerList)){
        playerList.push(playerName)
        inyectPlayer(playerName)
        eventToAssignFunctions()
        inyectDuckPlayer(playerName)
    }
    let cleanInput = document.getElementById("player-input").value = ""
}

export function inyectPlayer(name) {
    let list = document.getElementById('player-list')
    var newItem = `
    <div id="${name}">
        <p> ${name} </p>
        <button class="btn-delete"> X </button>
        <button class="btn-modify"> * </button>
    </div>`

    list.innerHTML += newItem
}

export function eventToAssignFunctions()
{
    const btnsDelete = document.querySelectorAll('.btn-delete');
    const btnsModify = document.querySelectorAll('.btn-modify');

    btnsDelete.forEach( btn => {
        btn.addEventListener('click', (e) => {
            deletePlayer(e.target.parentNode.id);
        })
    })

    btnsModify.forEach( btn => {
        btn.addEventListener('click', (e) => {
            modifyPlayer(e.target.parentNode.id);
        })
    })
}



// export function addPlayer() {
//     let playerName = document.getElementById('player-input').value
//     let listCheck = localStorage.getItem('playerList')
//     if (listCheck == null) {
//         localStorage.setItem('playerList', playerName)
//     }
//     if (listCheck != null) {
//         localStorage.setItem('playerList', listCheck + "#" + playerName)
//     }
//     inyectPlayer(playerName)
// }
