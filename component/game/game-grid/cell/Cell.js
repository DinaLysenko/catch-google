import {getGoogleCoords, getPlayer1Coords, getPlayer2Coords} from "../../../../data/data.js";
import {Google} from "../google/Google.js";
import {Player} from "../player/Player.js";

export function Cell(x, y){
    let cell = document.createElement('td')

    if (getGoogleCoords().x === x && getGoogleCoords().y === y) {
        cell.append(Google())
    }
    if (getPlayer1Coords().x === x && getPlayer1Coords().y === y) {
        cell.append(Player(1))
    }
    if (getPlayer2Coords().x === x && getPlayer2Coords().y === y) {
        cell.append(Player(2))
    }
    return cell
}