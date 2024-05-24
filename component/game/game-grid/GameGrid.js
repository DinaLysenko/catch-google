import {getCurrentGridSize, getGoogleCoords, getPlayer1Coords, getPlayer2Coords} from "../../../data/data.js";
import {Google} from "./google/Google.js";
import {Player} from "./player/Player.js";

export function GameGrid() {
    let grid = document.createElement('table')
    for (let x = 0; x < getCurrentGridSize().x; x++) {
        let row = document.createElement('tr')
        for (let y = 0; y < getCurrentGridSize().y; y++) {
            let cell = document.createElement('td')
            row.append(cell)
            if (getGoogleCoords().x === x && getGoogleCoords().y === y) {
                cell.append(Google())
            }
            if (getPlayer1Coords().x === x && getPlayer1Coords().y === y) {
                cell.append(Player(1))
            }
            if (getPlayer2Coords().x === x && getPlayer2Coords().y === y) {
                cell.append(Player(2))
            }
        }
        grid.append(row)
    }
    return grid
}