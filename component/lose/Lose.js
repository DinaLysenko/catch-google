import {playAgain} from "../../data/data.js";

export function Lose(){
    let element=document.createElement('div')
    element.append('YOU LOSE')
    let button=document.createElement('button')
    button.append('Play again')
    button.addEventListener('click', playAgain)
    element.append(button)
    return element
}