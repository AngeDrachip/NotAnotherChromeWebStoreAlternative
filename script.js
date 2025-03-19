document.addEventListener("DOMContentLoaded", function () {
    fetch("extensions/extensions.json")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("extensions-container");
            data.forEach(ext => {
                const div = document.createElement("div");
                div.className = "extension";
                div.innerHTML = `
                    <img src="${ext.icon}" alt="${ext.name}">
                    <h2>${ext.name}</h2>
                    <p>${ext.description}</p>
                    <a href="${ext.download}" target="_blank">Télécharger</a>
                `;
                container.appendChild(div);
            });
        })
        .catch(error => console.error("Erreur de chargement des extensions :", error));
});
