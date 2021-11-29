import { addPlayer, eventToAssignFunctions, inyectPlayer } from "./modules/add-player.js";
import { carrouselAnimation } from "./modules/animations.js";
import { repeatName } from "./modules/name-no-repeat.js";
import { deletePlayer } from "./modules/delete-player.js";
import {inyectDuckPlayer} from "./modules/carrousell.js";


const addBtn = document.getElementById('btn-add-player');
const modBtn = document.getElementById('btn-modify-player');

function app(){
    
    addBtn.onclick = addPlayer;
    
}

app();


/*console.log(delBtn);
console.log(window.playerName) */


/* export function getIdBtnDel(){

    let interval = setInterval(()=>{

        const delBtn = document.getElementById('btn-delete-player');
    
        if(delBtn){
    
            console.log(delBtn);
            delBtn.onclick = deletePlayer();
            clearInterval(interval);
        }
    
    }, 1000);
} 

getIdBtnDel(); */





window.onload = localStorage.clear();