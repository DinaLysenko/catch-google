import {getMiss} from "../../../data/data.js";

export function MissPoint(){
    let element=document.createElement('div')
    element.append(`MISS: ${getMiss()}` )
    return element
}