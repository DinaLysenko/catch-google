const _data = {
    catch: 0,
    time: new Date(),
    settings: {
        gridSize: {
            x: 4,
            y: 4
        }
    },
    heroes: {
        google: {},
        player1: {},
        player2: {}
    }
}

export function getCatchPoint() {
    return _data.catch
}

