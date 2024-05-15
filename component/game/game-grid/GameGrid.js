import {getGoogleCoords, getGridSize} from "../../../data/data.js";
import {Google} from "./google/Google.js";

export function GameGrid() {
    let grid = document.createElement('table')
    for (let x = 0; x < getGridSize().x; x++) {
        let row = document.createElement('tr')
        for (let y = 0; y < getGridSize().y; y++) {
            let cell = document.createElement('td')
            row.append(cell)
            if (getGoogleCoords().x === x && getGoogleCoords().y === y) {
                cell.append(Google())
            }
        }
        grid.append(row)
    }
    return grid
}