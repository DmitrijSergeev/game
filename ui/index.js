import {AppComponent} from "./components/app.Component.js";

const rootElement = document.getElementById('root')

rootElement.innerHTML = '';

const appComponent = AppComponent()

rootElement.append(appComponent.element)
