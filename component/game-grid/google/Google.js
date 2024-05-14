import {catchGoogle} from "../../../data/data.js";

export function Google(){
    let element=document.createElement('span')
    element.append('GOOGLE')
    element.addEventListener('click', catchGoogle)
    return element
}