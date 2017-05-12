function component () {
    var element = document.createElement('div');

    element.innerHTML = "Hello World from Webpack 2 with config!";

    return element;
}

document.body.appendChild(component());
