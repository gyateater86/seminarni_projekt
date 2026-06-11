const loadProduct = async () => {
    const params = new URLSearchParams(document.location.search);
    const id = parseInt(params.get('id'));

    try {
        const response = await fetch('./assets/json/products.json');
        const products = await response.json();
        const product = products.find(p => p.id === id);

        if (!product) return;

        document.getElementById('nazevProduktu').textContent = product.name;
        document.getElementById('popisProduktu').textContent = product.description;
        document.title = `Synapse | ${product.name}`;

        if (product.features) {
            const container = document.getElementById('productFeatures');
            if (container) {
                container.innerHTML = product.features.map(f => `
                    <div class="value-item">
                        <h6>${f.title}</h6>
                        <p>${f.text}</p>
                    </div>
                `).join('');
            }
        }

        if (product.benefits) {
            const heading = document.getElementById('benefitsHeading');
            const text = document.getElementById('benefitsText');
            if (heading) heading.textContent = product.benefits.heading;
            if (text) text.textContent = product.benefits.text;
        }
    } catch (err) {
        console.error('Failed to load product:', err);
    }
};

loadProduct();
