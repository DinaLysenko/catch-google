import {EVENTS, getCatchPoint, rerender} from "../../../data/data.js";

export function GameResult() {
    function render() {
        element.innerHTML = ''
        let catch1 = document.createElement('div')
        let catch2 = document.createElement('div')
        catch1.append(`Player1:  ${getCatchPoint().player1}`)
        catch2.append(`Player2:  ${getCatchPoint().player2}`)
        element.append(catch1, catch2)
    }

    rerender((e) => {
        if (e.name === EVENTS.SCORES_CHANGED) {
            render()
        }
    })
    let element = document.createElement('div')
    render()
    return element
}