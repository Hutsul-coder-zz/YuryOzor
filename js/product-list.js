(function() {

    const products = [
        {
            id: 1,
            title: "Table",
            description: "Wodden table",
            prise: 4000,
            image: "img/table.jpg"
        },
        {
            id: 2,
            title: "Kitchen table",
            description: "Wodden kitchen table",
            prise: 6000,
            image: "img/kitchen-table.jpg"
        }
    ];

    function renderProducts (products) {
        const productsContainer = document.querySelector(".products");
        for (const product of products) {
            productsContainer.innerHTML += `
            <article>
                <img class="image-products" src="${product.image}" alt="${product.title}"/>
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <div class="buttons">
                    <a class="button" href="product-info.html">Info</a>
                    <button>${product.prise} - Купити</button>
                </div>
            </article>
            `;
        }
    }
renderProducts(products);

})();