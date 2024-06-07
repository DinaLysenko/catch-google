import {getCatchPoint} from "../../../data/data.js";

export function GameResult(number){
    let element=document.createElement('div')
    let catch1=document.createElement('div')
    let catch2=document.createElement('div')
    catch1.append(`Player1:  ${getCatchPoint().player1}`)
    catch2.append(`Player2:  ${getCatchPoint().player2}`)
    return element.append(catch1,catch2)
}