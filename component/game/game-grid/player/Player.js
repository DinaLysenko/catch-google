import {validatePlayerNumber} from "../../../../data/data.js";

export function Player(playerNumber) {
    validatePlayerNumber(playerNumber)
    let element = document.createElement('img')
    element.src = `image/player${playerNumber}.png`
    return element
}