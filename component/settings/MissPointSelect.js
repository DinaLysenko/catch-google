import {changePointToMissSelectOption} from "../../data/data.js";

export function MissPointSelect(dataForMiss){
    let maxMissSelect = document.createElement('select')
    for (let i = 0; i < dataForMiss.length; i++) {
        let maxMissSelectOption = document.createElement('option')
        maxMissSelectOption.value = dataForMiss[i].id
        maxMissSelectOption.selected = dataForMiss[i].isSelected
        maxMissSelectOption.append(`${dataForMiss[i].miss} miss`)
        maxMissSelect.append(maxMissSelectOption)
    }
    maxMissSelect.addEventListener('change', (e) => {
        changePointToMissSelectOption(e)
    })
    return maxMissSelect
}