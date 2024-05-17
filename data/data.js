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
                id: 0,
                x: 4,
                y: 4,
                isSelected: false
            },
            {
                id: 1,
                x: 5,
                y: 5,
                isSelected: false
            },
            {
                id: 2,
                x: 6,
                y: 6,
                isSelected: false
            },
            {
                id: 3,
                x: 7,
                y: 7,
                isSelected: false
            },
            {
                id: 4,
                x: 8,
                y: 8,
                isSelected: false
            },
        ],
        currentGridSize: {
            x: 4,
            y: 4
        },
        pointToWin: 5,
        //currentPointToWin: 5,
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
    return _data.settings.gridSize
}

export function getCurrentGridSize() {
    return _data.settings.currentGridSize
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

    }, 3000)

    subscriber()

}

function stopInterval() {
    clearInterval(setIntervalId)
}

function randomCoords(coords) {
    return Math.floor(Math.random() * coords);
}

export function changeGoogleCoords() {
    let newGoogleRowCoords = randomCoords(_data.settings.currentGridSize.x);
    let newGoogleCellCoords = randomCoords(_data.settings.currentGridSize.y);
    if (newGoogleRowCoords === _data.heroes.google.googleCoords.x && newGoogleCellCoords === _data.heroes.google.googleCoords.y) {
        newGoogleRowCoords = randomCoords(_data.settings.currentGridSize.x)
        newGoogleCellCoords = randomCoords(_data.settings.currentGridSize.y)
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

export function changeSelectOption(e) {
    let id = e.currentTarget.value
    _data.settings.currentGridSize.x = _data.settings.gridSize[id].x
    _data.settings.currentGridSize.y = _data.settings.gridSize[id].y
    _data.settings.gridSize[id].isSelected = true
    subscriber()
}

let subscriber = () => {
}

export function rerender(callback) {
    subscriber = callback
}



