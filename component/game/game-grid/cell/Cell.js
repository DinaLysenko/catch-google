import {EVENTS, getGoogleCoords, getPlayer1Coords, getPlayer2Coords, rerender} from "../../../../data/data.js";
import {Google} from "../google/Google.js";
import {Player} from "../player/Player.js";

const CELL_STATUS = {
    EMPTY: 1,
    GOOGLE: 2,
    PLAYER1: 3,
    PLAYER2: 4
}

export function Cell(x, y) {
    let state = {
        prevStatus: CELL_STATUS.EMPTY
    }

    function render() {
        console.log(x, y)
        cell.innerHTML = ''
        if (getGoogleCoords().x === x && getGoogleCoords().y === y) {
            cell.append(Google())
            state.prevStatus = CELL_STATUS.GOOGLE
        } else if (getPlayer1Coords().x === x && getPlayer1Coords().y === y) {
            cell.append(Player(1))
            state.prevStatus = CELL_STATUS.PLAYER1
        } else if (getPlayer2Coords().x === x && getPlayer2Coords().y === y) {
            cell.append(Player(2))
            state.prevStatus = CELL_STATUS.PLAYER2
        } else {
            state.prevStatus = CELL_STATUS.EMPTY
        }
    }

    rerender((e) => {
            const transitions = {
                [EVENTS.GOOGLE_CHANGED]: () => {
                    switch (state.prevStatus) {
                        case CELL_STATUS.GOOGLE: {
                            render()
                        }
                            break;
                        case CELL_STATUS.PLAYER1:
                        case CELL_STATUS.PLAYER2: {
                            break;
                        }
                        case CELL_STATUS.EMPTY: {
                            if (getGoogleCoords().x === x && getGoogleCoords().y === y) {
                                render()
                            }
                            break;
                        }
                    }

                },
                [EVENTS.PLAYER1_MOVED]: () => {
                    switch (state.prevStatus) {
                        case CELL_STATUS.PLAYER1: {
                            render()
                        }
                            break;
                        case CELL_STATUS.PLAYER2: {
                            break;
                        }
                        case CELL_STATUS.GOOGLE:
                        case CELL_STATUS.EMPTY: {
                            if (getPlayer1Coords().x === x && getPlayer1Coords().y === y) {
                                render()
                            }
                            break;
                        }

                    }
                },
                [EVENTS.PLAYER2_MOVED]: () => {
                    switch (state.prevStatus) {
                        case CELL_STATUS.PLAYER1: {
                            break;
                        }
                        case CELL_STATUS.PLAYER2: {
                            render()
                        }
                            break;
                        case CELL_STATUS.GOOGLE:
                        case CELL_STATUS.EMPTY: {
                            if (getPlayer2Coords().x === x && getPlayer2Coords().y === y) {
                                render()
                            }
                            break;
                        }
                    }
                }
            }
        }
    )
    let cell = document.createElement('td')

    render()
    return cell
}