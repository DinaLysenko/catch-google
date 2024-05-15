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
        gridSize: {
            x: 4,
            y: 4
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
export function getGameStatus(){
    return _data.gameStatus
}

let setIntervalId

export function start() {
    _data.gameStatus = GAME_STATUS.GAME_IN_PROGRESS
    setIntervalId = setInterval(() => {
        changeGoogleCoords()
        _data.miss++
        subscriber()
    }, 3000)
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
    stopInterval()
    _data.catch++
    if (_data.catch === _data.settings.pointToWin) {

    }

    changeGoogleCoords()
    start()
    subscriber()
}

let subscriber = () => {
}

export function rerender(callback) {
    subscriber = callback
}



