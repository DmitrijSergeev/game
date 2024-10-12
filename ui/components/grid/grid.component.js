import {getGridSize} from "../../../core/state-manager.js";

export function GridComponent() {
    const element = document.createElement('table')
    element.classList.add('grid')
    render(element)

    return {element};
}

async function render(element) {
    const gridSize = await getGridSize()
    for (let y = 0; y < gridSize.rows; y++) {
        const rowElement = document.createElement('tr')

        for (let x = 0; x < gridSize.columns; x++) {
            const cellElement = document.createElement('td')
            cellElement.append(`${x}, ${y}`)
            rowElement.append(cellElement)
        }
        element.append(rowElement)
    }
}