import {
    GAME_STATUS,
    getCatchPoint,
    getGameStatus,
    getPlayerNumberToWin,
    movePlayer,
    MOVING_DIRECTION
} from "../../data/data.js";
import {Settings} from "../settings/Settings.js";
import {GameResult} from "./game-result/GameResult.js";
import {MissPoint} from "./game-result/MissPoint.js";
import {GameGrid} from "./game-grid/GameGrid.js";
import {Win} from "../win/Win.js";
import {Lose} from "../lose/Lose.js";


document.addEventListener('keyup', event => {
    switch (event.code) {
        case 'ArrowLeft':
            movePlayer(1, MOVING_DIRECTION.LEFT)
            break;

        case 'ArrowRight':
            movePlayer(1, MOVING_DIRECTION.RIGHT)
            break;

        case 'ArrowUp':
            movePlayer(1, MOVING_DIRECTION.UP)
            break;
        case 'ArrowDown':
            movePlayer(1, MOVING_DIRECTION.DOWN)
            break;

        case 'KeyA':
            movePlayer(2, MOVING_DIRECTION.LEFT)
            break;

        case 'KeyD':
            movePlayer(2, MOVING_DIRECTION.RIGHT)
            break;

        case 'KeyW':
            movePlayer(2, MOVING_DIRECTION.UP)
            break;

        case 'KeyS':
            movePlayer(2, MOVING_DIRECTION.DOWN)
            break;

    }
})

export function Game() {
    let element = document.createElement('div')
    let gameStatus = getGameStatus()
    switch (gameStatus) {
        case GAME_STATUS.GAME_SETTINGS: {
            element.append(Settings());
            break;
        }
        case GAME_STATUS.GAME_IN_PROGRESS: {
            element.append(GameResult(), MissPoint(), GameGrid());
            break;
        }
        case GAME_STATUS.GAME_WIN: {
            element.append(Win(getPlayerNumberToWin(), getCatchPoint()));
            break;
        }
        case GAME_STATUS.GAME_LOSE: {
            element.append(Lose());
            break;
        }
    }
    return element
}


