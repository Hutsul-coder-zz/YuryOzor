(function() {

    const products = [
        {
            id: 1,
            title: "Стіл",
            description: "Дерев'яний стіл в стилі лофт",
            prise: 4000,
            image: "img/table.jpg"
        },
        {
            id: 2,
            title: "Стіл для кухні",
            description: "Дерев'яний стіл для кухні",
            prise: 6000,
            image: "img/kitchen-table.jpg"
        },
        {
            id: 2,
            title: "Сервант",
            description: "Сервант для посуду",
            prise: 8000,
            image: "img/servant.jpg"
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
                    <a class="button" href="product-info.html">Інформація</a>
                    <button>${product.prise} грн - Замовити</button>
                </div>
            </article>
            `;
        }
    }
renderProducts(products);

})();