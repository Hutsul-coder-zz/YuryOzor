(function() {

    const products = [
        {
            id: 1,
            title: "Стіл",
            description: "Дерев'яний стіл в стилі лофт",
            prise: 4000,
            image: "img/table.jpg",
            link: "products/wooden-table.html" /* Need add new html pages for this products */
        },
        {
            id: 2,
            title: "Стіл для кухні",
            description: "Дерев'яний стіл для кухні",
            prise: 6000,
            image: "img/kitchen-table.jpg",
            link: "products/kitchen-table.html"
        },
        {
            id: 3,
            title: "Сервант",
            description: "Сервант для посуду",
            prise: 8000,
            image: "img/servant.jpg",
            link: "products/servant.html" 
        },
        {
            id: 4,
            title: "bad",
            description: "Ліжко",
            prise: 15000,
            image: "img/bad.jpg", /* Need add image */
            link: "products/bad.html"
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
                    <a class="button" href="${product.link}">Інформація</a>
                    <button>${product.prise} грн - Замовити</button>
                </div>
            </article>
            `;
        }
    }
renderProducts(products);

})();