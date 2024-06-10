import {playAgain} from "../../data/data.js";

export function Win(playerNumber, point){
    let element= document.createElement('div')
    element.append('YOU WIN')
    let player=document.createElement('p')
    player.append(`Player ${playerNumber}`)
    element.append(player)
    let pointNumber=document.createElement('p')
    pointNumber.append(`Catch ${point[`player${playerNumber}`]}`)
    element.append(pointNumber)
    let button=document.createElement('button')
    button.append('Play again')
    element.append(button)
    button.addEventListener('click', playAgain)
    return element
}