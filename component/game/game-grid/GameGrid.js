
import {Cell} from "./cell/Cell.js";
import {getCurrentGridSize} from "../../../data/data.js";

export function GameGrid() {
    let grid = document.createElement('table')
    for (let y = 0; y < getCurrentGridSize().y; y++) {
        let row = document.createElement('tr')
        for (let x = 0; x < getCurrentGridSize().x; x++) {
            let cell=Cell(x, y)
            row.append(cell)
        }
        grid.append(row)
    }
    return grid
}