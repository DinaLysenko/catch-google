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
        // case 'ArrowLeft':
        //     movePlayer(1, MOVING_DIRECTION.LEFT)
        //     break;
        //
        // case 'ArrowRight':
        //     movePlayer(1, MOVING_DIRECTION.RIGHT)
        //     break;
        //
        // case 'ArrowUp':
        //     movePlayer(1, MOVING_DIRECTION.UP)
        //     break;
        // case 'ArrowDown':
        //     movePlayer(1, MOVING_DIRECTION.DOWN)
        //     break;

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

// Create a new instance of the speech recognition API
const recognition = new webkitSpeechRecognition();

// Set the recognition language to English
recognition.lang = "en-US";

// Specify if the recognition should be continuous
recognition.continuous = true;

// Установка промежуточных результатов в true, чтобы получать результаты по мере поступления
recognition.interimResults = true;

// Event listener for when recognition starts
recognition.onstart = () => {
    console.log("Speech recognition started");
};

recognition.onresult = event => {
    const result = event.results[event.results.length - 1]
    const word = result[0].transcript.trim().toLowerCase()
    if (result.isFinal) {
        switch (word) {
            case "left": {
                movePlayer(1, MOVING_DIRECTION.LEFT);
                break;
            }
            case "right": {
                movePlayer(1, MOVING_DIRECTION.RIGHT);
                break;
            }
            case "up": {
                movePlayer(1, MOVING_DIRECTION.UP);
                break;
            }
            case "down": {
                movePlayer(1, MOVING_DIRECTION.DOWN);
                break;
            }
        }
    }
};
// Event listener for when recognition ends
recognition.onend = () => {
    console.log("Speech recognition ended");
};

// Event listener for any recognition errors
recognition.onerror = event => {
    console.error(`Speech recognition error: ${event.error}`);
};

// Start recognition
recognition.start();

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


