import {
    changeGridSizeSelectOption,
    changePointToMissSelectOption,
    changePointToWinSelectOption
} from "../../data/data.js";


function Select(data, changeHandler, formatOptionText) {
    let selectElement = document.createElement('select');

    data.forEach(item => {
        let optionElement = document.createElement('option');
        optionElement.value = item.id;
        optionElement.selected = item.isSelected;
        optionElement.append(formatOptionText(item));
        selectElement.append(optionElement);
    });

    selectElement.addEventListener('change', changeHandler);

    return selectElement;
}

export function GridSizeSelect(dataForGridSize) {
    return Select(dataForGridSize, changeGridSizeSelectOption, item => `${item.x}x${item.y}`);
}

export function MissPointSelect(dataForMiss) {
    return Select(dataForMiss, changePointToMissSelectOption, item => `${item.miss} miss`);
}

export function PointToWinSelect(dataForPoint) {
    return Select(dataForPoint, changePointToWinSelectOption, item => `${item.point} ptw`);
}