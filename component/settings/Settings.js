import {getGridSize, start} from "../../data/data.js";
import {Select} from "./Select.js";

export function Settings() {
    let container = document.createElement('div')


    let startButton = document.createElement('button')
    startButton.append('Start Game')
    startButton.addEventListener('click', start)
    container.append(Select(getGridSize()), startButton)
    return container
}