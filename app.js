const url = 'https://course-api.com/javascript-store-products';
const productDOM = document.querySelector('.products-center');

const fetchProducts = async () => {
    productDOM.innerHTML = '<div class="loading"></div>'
    try {
        const resp = await fetch(url);
        const data = await resp.json();
        return data;
    } catch(error) {
        productDOM.innerHTML = '<p class="error">there was an error</p>'
    };
}

const dispalyProducts = (list) => {
    const productList = list.map((product) => {
        const {id} = product;
        const {name: title, price} = product.fields;
        const {url: img} = product.fields.image[0];
        const formatPrice = price / 100;
        return `<a class="single-product" href="product.html?id=${id}&name=john&age=25">
            <img src="${img}" class="single-product-img img" alt="${title}">
            <footer>
                <h5 class="name">${title}</h5>
                <span class"price>${formatPrice}</span>
            </footer>
            </a>`;
    }).join("");
    productDOM.innerHTML = `<div class-".products-container">${productList}</div>`
}

const start = async () => {
    const data = await fetchProducts();
    dispalyProducts(data);
}
start();