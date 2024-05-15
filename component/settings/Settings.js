import {start} from "../../data/data.js";

export function Settings(){
    let startButton=document.createElement('button')
    startButton.append('Start Game')
    startButton.addEventListener('click', start)
    return startButton
}