document.body.onload = createElement;

function createElement() { // Création d'une div et puis d'un bouton
    const newDiv = document.createElement("div"); // div
    newDiv.setAttribute("id", "newDiv"); // ajout d'un id pour pouvoir le reséléctionner
    const newButton = document.createElement("button"); // bouton
    newButton.textContent = "Click me"; // Texte du bouton
    newDiv.appendChild(newButton);
    document.body.appendChild(newDiv);

    newButton.addEventListener("click", function () {
        const newDiv2 = document.createElement("div");
        fetch('data.json') 
        .then(response => response.json())
        .then(data => {
            const list = document.createElement('list');
            newDiv.appendChild(list);
            list.innerHTML = '';
            data.members.forEach(member => {
                const listItem = document.createElement('li');
                listItem.textContent = `${member.role} : ${member.name} - ${member.powers}`;
                list.appendChild(listItem);
            });
        })
        .catch(error => console.error('Erreur lors du chargement du fichier JSON:', error));
});
}