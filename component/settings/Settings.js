import {getGridSize, getMissPoint, getPointToWin, start} from "../../data/data.js";
import {Button} from "../button/Button.js";
import {MissPointSelect, PointToWinSelect, GridSizeSelect} from "./Select.js";
import {ChosePlayMode} from "./ChosePlayMode.js";


export function Settings() {
    let container = document.createElement('div')
    container.append(GridSizeSelect(getGridSize()) , PointToWinSelect(getPointToWin()),MissPointSelect(getMissPoint()), ChosePlayMode())
    container.append(Button('Start Game', start))
    return container
}