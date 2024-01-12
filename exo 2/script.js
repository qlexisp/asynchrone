document.getElementById('predictButton').addEventListener('click', function() {
    var name = document.getElementById('nameInput').value;
    if (name) {
        fetch(`https://api.nationalize.io/?name=${name}`)
	.then((response) => response.json())
	.then((data) => {
		resultat = document.getElementById("results");
        var country = data.country[0] ? data.country[0].country_id : "Inconnu";
        resultat.textContent = `Prénom: ${name} Pays: ${country}`;
	})
	.catch((error) => {
		console.log("There was an error!", error);
	});
}});