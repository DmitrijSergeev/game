import {SettingsComponent} from "./settings/settings.Component.js";
import {ResultPanelComponent} from "./resultPanel/resultPanel.Component.js";
import {GridComponent} from "./grid/grid.Component.js";

export function AppComponent() {
    const element = document.createElement('div')

    render(element);

    return {element}
}

async function render (element){
    const settingsComponent = SettingsComponent();
    const resultPanelComponent = ResultPanelComponent();
    const gridComponent= GridComponent()

    element.append(settingsComponent.element, resultPanelComponent.element, gridComponent.element)
}