import {changePointToWinSelectOption} from "../../data/data.js";

export function PointToWinSelect(dataForPoint){

    let pointsToWinSelect = document.createElement('select')
    for (let i = 0; i < dataForPoint.length; i++) {
        let pointsToWinSelectOption = document.createElement('option')
        pointsToWinSelectOption.value = dataForPoint[i].id
        pointsToWinSelectOption.selected = dataForPoint[i].isSelected
        pointsToWinSelectOption.append(`${dataForPoint[i].point} ptw`)
        pointsToWinSelect.append(pointsToWinSelectOption)
    }
    pointsToWinSelect.addEventListener('change', (e) => {
        changePointToWinSelectOption(e)
    })
    return pointsToWinSelect
}