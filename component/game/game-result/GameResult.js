import {getCatchPoint} from "../../../data/data.js";

export function GameResult(){
    let element=document.createElement('span')
    element.append(`CATCH:  ${getCatchPoint()}`)
    return element
}