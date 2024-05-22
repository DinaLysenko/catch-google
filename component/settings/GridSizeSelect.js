import {changeGridSizeSelectOption, changePointToWinSelectOption} from "../../data/data.js";

export function GridSizeSelect(dataForGridSize) {

    let element = document.createElement('div')
    let gridSizeSelect = document.createElement('select')
    for (let i = 0; i < dataForGridSize.length; i++) {
        let gridSizeSelectOption = document.createElement('option')
        gridSizeSelectOption.value = dataForGridSize[i].id
        gridSizeSelectOption.selected = dataForGridSize[i].isSelected
        gridSizeSelectOption.append(`${dataForGridSize[i].x}x${dataForGridSize[i].y}`)
        gridSizeSelect.append(gridSizeSelectOption)
    }
    gridSizeSelect.addEventListener('change', (e) => {
        changeGridSizeSelectOption(e)
    })

    element.append(gridSizeSelect)
    return element
}