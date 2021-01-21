const queryString = document.location.search;
const params = new URLSearchParams(queryString);
let id;

if (params.has("id")) {
    id = params.get("id")
} else {
    document.location.search = "#";
}

const baseUrl = "https://lybo.dev/cms/wp-json/wc/store/products/";
const productUrl = `${baseUrl}${id}`;

fetch(productUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createProduct(json);
    })
    .catch(function(error) {
        console.dir(error);
    });

    function createProduct(json) {
        const product = json;
        const container = document.querySelector(".details");

        const name = product.name;
        const image = product.images[0].src;
        const price = product.prices.price_prefix + product.prices.price + ".00";
        const description = product.description;
        let inStock;

        if (product.is_in_stock) {
            inStock = "In stock";
        } else {
            inStock = "Not in stock";
        }

        const details = `<div class="details-img-container">
                            <img class="details-img" src="${image}" alt="${name}">
                        </div>
                        <div class="details-info">
                            <h1 class="details-name">${name}</h1>
                            <h2 class="details-price">${price}</h2>
                            <p class="instock">${inStock}</p>
                            ${description}
                            <a href="#"><div class="add-btn btn">Add to cart</div></a>
                        </div>`;
        
        container.innerHTML += details;

        const activeBreadcrumb = document.querySelector(".breadcrumb-active");
        activeBreadcrumb.innerText = name;
    }