import {playAgain} from "../../data/data.js";

export function Win(){
    let element= document.createElement('div')
    element.append('YOU WIN')
    let button=document.createElement('button')
    button.append('Play again')
    element.append(button)
    button.addEventListener('click', playAgain)
    return element
}