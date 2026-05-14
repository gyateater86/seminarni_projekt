let params = new URLSearchParams(document.location.search);
let id = params.get("id");

fetch('./assets/json/products.json')
    .then((response) => response.json())
    .then((json) => json.find(p => p.id === parseInt(id)))
    .then((product) => {
        document.getElementById("nazevProduktu").textContent = product.name;
        document.getElementById("popisProduktu").textContent = product.description;
    });