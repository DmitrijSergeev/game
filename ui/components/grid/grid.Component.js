import {getGridSize} from "../../../core/state-manager.js";
import {CellComponent} from "../cellComponent/cell.Component.js";

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
            const cellComponent = CellComponent(x, y);
            rowElement.append(cellComponent.element)
        }
        element.append(rowElement)
    }
}