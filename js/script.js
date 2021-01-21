const baseUrl = "https://lybo.dev/cms/wp-json/wc/store/products/";

fetch (baseUrl) 
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createProduct(json);
    })
    .catch(function(error){
        console.log(error);
    });

function createProduct(json) {
    const results = json;
    const container = document.querySelector(".products");
    let html = "";

    results.forEach(function(product) {
        const name = product.name;
        const image = product.images[0].src;
        const price = product.prices.price_prefix + product.prices.price + ".00";
        const id = product.id;

        const productCard = `<div class="product-card">
                                <a href="details.html?id=${id}">
                                    <div class="card-img">
                                        <img class="product-image" src="${image}" alt="${name}">
                                        <div class="img-hover">
                                            <div class="more-btn btn">View more</div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="product-name">${name}</div>
                                        <h2 class="price">${price}</h2>
                                        <div class="mobile-btn btn">View more</div>
                                    </div>
                                </a>
                            </div>`;

        html += productCard;
    });

    container.innerHTML = html;
}