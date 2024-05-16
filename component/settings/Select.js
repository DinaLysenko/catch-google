export function Select(){
    let gridSizeSelect = document.createElement('select')

    let gridSizeSelectOption1 = document.createElement('option')
    gridSizeSelectOption1.value = "4x4"
    gridSizeSelectOption1.append("4x4")
    let gridSizeSelectOption2 = document.createElement('option')
    gridSizeSelectOption2.value = "5x5"
    gridSizeSelectOption2.append("5x5")
    let gridSizeSelectOption3 = document.createElement('option')
    gridSizeSelectOption3.value = "6x6"
    gridSizeSelectOption3.append("6x6")
    let gridSizeSelectOption4 = document.createElement('option')
    gridSizeSelectOption4.value = "7x7"
    gridSizeSelectOption4.append("7x7")
    let gridSizeSelectOption5 = document.createElement('option')
    gridSizeSelectOption5.value = "8x8"
    gridSizeSelectOption5.append("8x8")
    gridSizeSelect.append(gridSizeSelectOption1, gridSizeSelectOption2, gridSizeSelectOption3, gridSizeSelectOption4, gridSizeSelectOption5)

    let pointsToWinSelect = document.createElement('select')
    let pointsToWinSelect1 = document.createElement('option')
    pointsToWinSelect1.value = '20ptw'
    pointsToWinSelect1.append('20 ptw')
    let pointsToWinSelect2 = document.createElement('option')
    pointsToWinSelect2.value = '40ptw'
    pointsToWinSelect2.append('40 ptw')
    let pointsToWinSelect3 = document.createElement('option')
    pointsToWinSelect3.value = '50ptw'
    pointsToWinSelect3.append('50 ptw')
    let pointsToWinSelect4 = document.createElement('option')
    pointsToWinSelect4.value = '60ptw'
    pointsToWinSelect4.append('60 ptw')
    let pointsToWinSelect5 = document.createElement('option')
    pointsToWinSelect5.value = '80ptw'
    pointsToWinSelect5.append('80 ptw')
    pointsToWinSelect.append(pointsToWinSelect1, pointsToWinSelect2, pointsToWinSelect3, pointsToWinSelect4, pointsToWinSelect5)

    let maxMissSelect = document.createElement('select')
    let maxMissSelect1 = document.createElement('option')
    maxMissSelect1.value = '5miss'
    maxMissSelect1.append('5 miss')
    let maxMissSelect2 = document.createElement('option')
    maxMissSelect2.value = '10miss'
    maxMissSelect2.append('10 miss')
    let maxMissSelect3 = document.createElement('option')
    maxMissSelect3.value = '15miss'
    maxMissSelect3.append('15 miss')
    let maxMissSelect4 = document.createElement('option')
    maxMissSelect4.value = '20miss'
    maxMissSelect4.append('20 miss')
    let maxMissSelect5 = document.createElement('option')
    maxMissSelect5.value = '25miss'
    maxMissSelect5.append('25 miss')
    maxMissSelect.append(maxMissSelect1, maxMissSelect2, maxMissSelect3, maxMissSelect4, maxMissSelect5)
}