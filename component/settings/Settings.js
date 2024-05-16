import {start} from "../../data/data.js";

export function Settings() {
    let container = document.createElement('div')


    let startButton = document.createElement('button')
    startButton.append('Start Game')
    startButton.addEventListener('click', start)
    container.append(gridSizeSelect, pointsToWinSelect, maxMissSelect, startButton)
    return container
}