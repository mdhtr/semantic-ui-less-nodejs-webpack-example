function component () {
    var element = document.createElement('div');

    element.innerHTML = "Hello World from Webpack 2!";

    return element;
}

document.body.appendChild(component());
