import {changeSelectOption} from "../../data/data.js";

export function Select(dataForSelect) {

    let element = document.createElement('div')
    let gridSizeSelect = document.createElement('select')
    for (let i = 0; i < dataForSelect.length; i++) {
        let gridSizeSelectOption = document.createElement('option')
        gridSizeSelectOption.value = dataForSelect[i].id
        gridSizeSelectOption.selected = dataForSelect[i].isSelected
        gridSizeSelectOption.append(`${dataForSelect[i].x}x${dataForSelect[i].y}`)
        gridSizeSelect.append(gridSizeSelectOption)
    }
    gridSizeSelect.addEventListener('change', (e) => {
        changeSelectOption(e)
    })

    let pointsToWinSelect = document.createElement('select')
    let pointsToWinSelect1 = document.createElement('option')
    pointsToWinSelect1.value = '20'
    pointsToWinSelect1.append('20 ptw')
    let pointsToWinSelect2 = document.createElement('option')
    pointsToWinSelect2.value = '40'
    pointsToWinSelect2.append('40 ptw')
    let pointsToWinSelect3 = document.createElement('option')
    pointsToWinSelect3.value = '50'
    pointsToWinSelect3.append('50 ptw')
    let pointsToWinSelect4 = document.createElement('option')
    pointsToWinSelect4.value = '60'
    pointsToWinSelect4.append('60 ptw')
    let pointsToWinSelect5 = document.createElement('option')
    pointsToWinSelect5.value = '80'
    pointsToWinSelect5.append('80 ptw')
    pointsToWinSelect.append(pointsToWinSelect1, pointsToWinSelect2, pointsToWinSelect3, pointsToWinSelect4, pointsToWinSelect5)

    let maxMissSelect = document.createElement('select')
    let maxMissSelect1 = document.createElement('option')
    maxMissSelect1.value = '5'
    maxMissSelect1.append('5 miss')
    let maxMissSelect2 = document.createElement('option')
    maxMissSelect2.value = '10'
    maxMissSelect2.append('10 miss')
    let maxMissSelect3 = document.createElement('option')
    maxMissSelect3.value = '15'
    maxMissSelect3.append('15 miss')
    let maxMissSelect4 = document.createElement('option')
    maxMissSelect4.value = '20'
    maxMissSelect4.append('20 miss')
    let maxMissSelect5 = document.createElement('option')
    maxMissSelect5.value = '25'
    maxMissSelect5.append('25 miss')
    maxMissSelect.append(maxMissSelect1, maxMissSelect2, maxMissSelect3, maxMissSelect4, maxMissSelect5)
    element.append(gridSizeSelect, pointsToWinSelect, maxMissSelect)
    return element
}