import {validatePlayerNumber} from "../../../../data/data.js";

export function Player(playerNumber) {
    validatePlayerNumber(playerNumber)
    let element = document.createElement('img')
    element.classList.add('player')
    element.src = `assets/images/player${playerNumber}.png`
    return element
}