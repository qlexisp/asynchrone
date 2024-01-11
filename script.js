document.body.onload = createElement;

function createElement() {
    const newDiv = document.createElement("div");
    const newButton = document.createElement("button");
    newButton.textContent = "Click me";
    newDiv.appendChild(newButton);
    document.body.appendChild(newDiv);
}
