const GAME_STATUS={

}
const _data = {
    catch: 0,
    miss: 0,
    time: new Date(),
    settings: {
        gridSize: {
            x: 4,
            y: 4
        }
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

export function getCatchPoint() {
    return _data.catch
}

export function getMissPoint() {
    return _data.miss
}

export function getGridSize() {
    return _data.settings.gridSize
}

export function getGoogleCoords() {
    return _data.heroes.google.googleCoords
}

let setIntervalId

export function start() {
    setIntervalId = setInterval(()=> {
        changeGoogleCoords()
            _data.miss++
            subscriber()
    }, 3000)
}

export function changeGoogleCoords() {
    let newGoogleRowCoords = Math.floor(Math.random() * _data.settings.gridSize.x);
    _data.heroes.google.googleCoords.x = newGoogleRowCoords
    let newGoogleCellCoords = Math.floor(Math.random() * _data.settings.gridSize.y);
    _data.heroes.google.googleCoords.y = newGoogleCellCoords
    subscriber()
}

let subscriber = () => {
}

export function rerender(callback) {
    subscriber = callback
}
function stopInterval(){
    clearInterval(setIntervalId)
}
export function catchGoogle() {
    _data.catch++
    stopInterval()
    changeGoogleCoords()
    start()
    subscriber()
}

