export const GAME_STATUS = {
    GAME_SETTINGS: 'settings',
    GAME_IN_PROGRESS: 'progress',
    GAME_WIN: 'win',
    GAME_LOSE: 'lose'
}
const _data = {
    gameStatus: GAME_STATUS.GAME_SETTINGS,
    catch: 0,
    miss: 0,
    time: new Date(),
    settings: {
        gridSize: [
            {
                x: 4,
                y: 4
            },
            {
                x: 5,
                y: 5
            },
            {
                x: 6,
                y: 6
            },
            {
                x: 7,
                y: 7
            },
            {
                x: 8,
                y: 8
            },
        ],
        currentGridSize: {
            x: 0,
            y: 0
        },
        pointToWin: 5,
        pointToLose: 5
    },
    heroes: {
        google: {
            googleCoords: {
                x: 0,
                y: 0
            }
        },
        player1: {},
        player2: {}
    }
}


// getters
export function getCatchPoint() {
    return _data.catch
}

export function getMissPoint() {
    return _data.miss
}

export function getGridSize() {
    return {
        ..._data.settings.gridSize
    }
}

export function getGoogleCoords() {
    return {..._data.heroes.google.googleCoords}
}

export function getGameStatus() {
    return _data.gameStatus
}

let setIntervalId

export function start() {
    _data.gameStatus = GAME_STATUS.GAME_IN_PROGRESS

    setIntervalId = setInterval(() => {
        console.log('l')
        _data.miss++
        if (_data.miss === _data.settings.pointToLose) {
            _data.gameStatus = GAME_STATUS.GAME_LOSE
            stopInterval()
        } else {
            changeGoogleCoords()
        }
        subscriber()

    }, 1000)

    subscriber()

}

function stopInterval() {
    clearInterval(setIntervalId)
}

function randomCoords(coords) {
    return Math.floor(Math.random() * coords);
}

export function changeGoogleCoords() {
    let newGoogleRowCoords = randomCoords(_data.settings.gridSize.x);
    let newGoogleCellCoords = randomCoords(_data.settings.gridSize.y);
    if (newGoogleRowCoords === _data.heroes.google.googleCoords.x && newGoogleCellCoords === _data.heroes.google.googleCoords.y) {
        newGoogleRowCoords = randomCoords(_data.settings.gridSize.x)
        newGoogleCellCoords = randomCoords(_data.settings.gridSize.y)
    }
    _data.heroes.google.googleCoords.x = newGoogleRowCoords
    _data.heroes.google.googleCoords.y = newGoogleCellCoords
    subscriber()
}

export function catchGoogle() {
    _data.catch++
    stopInterval()
    if (_data.catch === _data.settings.pointToWin) {
        _data.gameStatus = GAME_STATUS.GAME_WIN
    } else {
        changeGoogleCoords()
        start()
    }
    subscriber()
}

export function playAgain() {
    _data.catch = 0
    _data.miss = 0
    _data.gameStatus = GAME_STATUS.GAME_SETTINGS
    subscriber()
}

let subscriber = () => {
}

export function rerender(callback) {
    subscriber = callback
}



