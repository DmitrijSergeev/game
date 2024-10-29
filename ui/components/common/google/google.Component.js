export function GoogleComponent(x, y) {
    const element = document.createElement('img')

    render(element)

    return {element}
}

async function render(element) {
    element.src = 'ui/assets/images/google.png'
}