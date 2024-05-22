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
        pointToWin: [
            {
                id: 0,
                point: 20,
                isSelected: false
            },
            {
                id: 1,
                point: 40,
                isSelected: false
            },
            {
                id: 2,
                point: 50,
                isSelected: false
            },
            {
                id: 3,
                point: 60,
                isSelected: false
            },
            {
                id: 4,
                point: 80,
                isSelected: false
            },
        ],
        pointToLose: [
            {
                id: 0,
                miss: 5,
                isSelected: false
            },
            {
                id: 1,
                miss: 10,
                isSelected: false
            },
            {
                id: 2,
                miss: 15,
                isSelected: false
            },
            {
                id: 3,
                miss: 20,
                isSelected: false
            },
            {
                id: 4,
                miss: 25,
                isSelected: false
            },
        ],
        currentGridSize: {
            x: 4,
            y: 4
        },
        currentPointToWin: 20,
        currentPointToLose: 20
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

export function getMiss() {
    return _data.miss
}

export function getMissPoint() {
    return _data.settings.pointToLose
}

export function getGridSize() {
    return _data.settings.gridSize
}

export function getPointToWin() {
    return _data.settings.pointToWin
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
        _data.miss++
        if (_data.miss === _data.settings.currentPointToLose) {
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
    if (_data.catch === _data.settings.currentPointToWin) {
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

export function changeGridSizeSelectOption(e) {
    let id = +e.currentTarget.value
    _data.settings.currentGridSize.x = _data.settings.gridSize[id].x
    _data.settings.currentGridSize.y = _data.settings.gridSize[id].y
    _data.settings.gridSize = _data.settings.gridSize.map((el => el.id === id ? {...el, isSelected: true} : {
        ...el,
        isSelected: false
    }))
    subscriber()
}

export function changePointToWinSelectOption(e) {
    let id = +e.currentTarget.value
    _data.settings.currentPointToWin = _data.settings.pointToWin[id].point
    _data.settings.pointToWin = _data.settings.pointToWin.map(el => el.id === id ? {...el, isSelected: true} : {
        ...el,
        isSelected: false
    })
    subscriber()
}

export function changePointToMissSelectOption(e) {
    let id = +e.currentTarget.value
    _data.settings.currentPointToLose = _data.settings.pointToLose[id].miss
    _data.settings.pointToLose = _data.settings.pointToLose.map(el => el.id === id ? {...el, isSelected: true} : {
        ...el,
        isSelected: false
    })
    subscriber()
}

let subscriber = () => {
}

export function rerender(callback) {
    subscriber = callback
}



