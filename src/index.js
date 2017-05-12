function component () {
    var element = document.createElement('div');

    element.innerHTML = "Hello World from Javascript!";

    return element;
}

document.body.appendChild(component());
