import {getMissPoint} from "../../../data/data.js";

export function MissPoint(){
    let element=document.createElement('div')
    element.append(`MISS: ${getMissPoint()}` )
    return element
}