import {catchGoogle} from "../../../../data/data.js";

export function Google(){
    let element=document.createElement('img')
    element.src='image/google.png'
    element.addEventListener('click', catchGoogle)
    return element
}