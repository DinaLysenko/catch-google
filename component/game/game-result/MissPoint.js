import {EVENTS, getMiss, rerender} from "../../../data/data.js";

export function MissPoint() {
    function render() {
        element.innerHTML = ''
        element.append(`MISS: ${getMiss()}`)
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