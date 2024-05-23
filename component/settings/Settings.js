import {getGridSize, getMissPoint, getPointToWin, start} from "../../data/data.js";
import {GridSizeSelect} from "./GridSizeSelect.js";
import {PointToWinSelect} from "./PointToWinSelect.js";
import {MissPointSelect} from "./MissPointSelect.js";
import {Button} from "../button/Button.js";

export function Settings() {
    let container = document.createElement('div')
    container.append(GridSizeSelect(getGridSize()), PointToWinSelect(getPointToWin()),MissPointSelect(getMissPoint()))
    container.append(Button('Start Game', start))
    return container
}