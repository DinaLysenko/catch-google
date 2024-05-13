import {getCatchPoint} from "../../data/data.js";

export function GameResult(){
    let element=document.createElement('div')
    element.append(`CATCH:  ${getCatchPoint()}`)
    return element
}