export const GAME_STATUS = {
    GAME_SETTINGS: 'settings',
    GAME_IN_PROGRESS: 'progress',
    GAME_WIN: 'win',
    GAME_LOSE: 'lose'
}
export const MOVING_DIRECTION = {
    LEFT: 'left',
    RIGHT: 'right',
    UP: 'up',
    DOWN: 'down'
}

const _data = {
    gameStatus: GAME_STATUS.GAME_SETTINGS,
    catch: {
        player1: 0,
        player2: 0,
    },
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
        currentPointToLose: 5
    },
    heroes: {
        google: {
            googleCoords: {
                x: 0,
                y: 0
            }
        },
        player1: {
            x: 1,
            y: 1
        },
        player2: {
            x: 2,
            y: 2
        }
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

export function getPlayer1Coords() {
    return _data.heroes.player1
}

export function getPlayer2Coords() {
    return _data.heroes.player2
}
export function getPlayerNumberToWin(){
    return _data.catch.player1>_data.catch.player2?1:2
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
    let newX = _data.heroes.google.googleCoords.x
    let newY = _data.heroes.google.googleCoords.y
    do {
        newX = randomCoords(_data.settings.currentGridSize.x);
        newY = randomCoords(_data.settings.currentGridSize.y);
    }
    while (newX === _data.heroes.google.googleCoords.x && newY === _data.heroes.google.googleCoords.y
        || newX === _data.heroes.player1.x && newY === _data.heroes.player1.y
        || newX === _data.heroes.player2.x && newY === _data.heroes.player2.y
        )
    _data.heroes.google.googleCoords.x = newX
    _data.heroes.google.googleCoords.y = newY

    subscriber()
}

function catchGoogle(playerNumber) {
    _data.catch[`player${playerNumber}`]++
    stopInterval()
    if (_data.catch[`player${playerNumber}`] === _data.settings.currentPointToWin) {
        _data.gameStatus = GAME_STATUS.GAME_WIN
    } else {
        changeGoogleCoords()
        start()
    }
    subscriber()
}

export function playAgain() {
    _data.catch.player1=0
    _data.catch.player2=0
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

export function movePlayer(playerNumber, direction) {
    let newCoords = {..._data.heroes[`player${playerNumber}`]}
    switch (direction) {
        case MOVING_DIRECTION.LEFT: {
            newCoords.x--;
            break;
        }
        case MOVING_DIRECTION.RIGHT: {
            newCoords.x++;
            break;
        }
        case MOVING_DIRECTION.DOWN: {
            newCoords.y++;
            break;
        }
        case MOVING_DIRECTION.UP: {
            newCoords.y--;
            break;
        }
    }
    let isValid = checkIsValidCoords(newCoords)
    if (!isValid) return
    let isMatchWithOtherPlayer = checkWithOtherPlayer(newCoords)
    if (isMatchWithOtherPlayer) return
    let isMatchWithGoogle = checkWithGoogle(newCoords)
    if (isMatchWithGoogle) {
        catchGoogle(playerNumber)
    }
    _data.heroes[`player${playerNumber}`] = newCoords

    subscriber()
}

function checkIsValidCoords(coords) {
    const xIsCorrect = coords.x >=0 && coords.x < _data.settings.currentGridSize.x
    const yIsCorrect = coords.y >=0 && coords.y < _data.settings.currentGridSize.y
    return xIsCorrect && yIsCorrect
}

function checkWithOtherPlayer(coords) {
    const isMatchWithPlayer1 = coords.x === _data.heroes.player1.x && coords.y === _data.heroes.player1.y
    const isMatchWithPlayer2 = coords.x === _data.heroes.player2.x && coords.y === _data.heroes.player2.y
    return isMatchWithPlayer1 || isMatchWithPlayer2
}

function checkWithGoogle(coords) {
    let xMatchWithGoogle = coords.x === _data.heroes.google.googleCoords.x
    let yMatchWithGoogle = coords.y === _data.heroes.google.googleCoords.y
    return xMatchWithGoogle && yMatchWithGoogle
}


export function validatePlayerNumber(playerNumber) {
    if (![1, 2].some(number => number === playerNumber)) {
        throw new Error('Incorrect player number')
    }
}

let subscriber = () => {
}

export function rerender(callback) {
    subscriber = callback
}



