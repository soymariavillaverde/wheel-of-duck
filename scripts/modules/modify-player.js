import { eventToAssignFunctions } from "./add-player.js";

export function modifyPlayer(player) {
    
    console.log('modificando...')

    let modifiedPlayer = document.getElementById(player);

    var newItem = `
        <input id="${player}Input" type="text" value="${player}"> 
        <button class="btn-delete"> X </button>
        <button id="${player}btn-modify"> * </button>
    `

    modifiedPlayer.innerHTML = newItem

    let nameIdBtn = player+"btn-modify"
    const btnModify = document.getElementById(nameIdBtn)
    btnModify.addEventListener('click', () => {
        modifyIdDiv(player);
    })

}

export function modifyIdDiv(player){
    let parentId = document.getElementById(player)
    let nameIdInput = player+"Input";
    let idInput = document.getElementById(nameIdInput).value;
    var newItem = `
        <p> ${idInput} </p>
        <button class="btn-delete"> X </button>
        <button class="btn-modify"> * </button>
    `
    parentId.innerHTML = newItem
    parentId.id = idInput
    eventToAssignFunctions()
}