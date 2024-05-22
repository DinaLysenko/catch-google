import {getGridSize, getMissPoint, getPointToWin, start} from "../../data/data.js";
import {GridSizeSelect} from "./GridSizeSelect.js";
import {PointToWinSelect} from "./PointToWinSelect.js";
import {MissPointSelect} from "./MissPointSelect.js";

export function Settings() {
    let container = document.createElement('div')


    let startButton = document.createElement('button')
    startButton.append('Start Game')
    startButton.addEventListener('click', start)
    container.append(GridSizeSelect(getGridSize()), PointToWinSelect(getPointToWin()),MissPointSelect(getMissPoint()), startButton)
    return container
}