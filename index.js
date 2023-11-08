import { getData } from "./httpRequest.js";

const inputProduct = document.querySelector('.input-product');
const buttonSearch = document.querySelector('.button-search');
const listItems = document.querySelectorAll('li');
const productContent = document.querySelector('.card-container');

let allProducts = null;

const init = async () => {
    allProducts = await getProducts();
    showProducts(allProducts);
}

const getProducts = async () => {
    const response = await getData('products');
    return response;
}

const showProducts = (products) => {
    productContent.innerHTML = '';
    products.forEach(product => {
        const jsx = `<div class='card'>
        <img src='${product.image}'>
        <h3>${product.title.split(' ')[0] + " " + product.title.split(' ')[1]}</h3>
        <p>${product.description.split(' ')[0]}</p>
        <span>${product.price} $</span>
        </div>`
        productContent.innerHTML += jsx;
    });
};

const searchHandler = () => {
    const query = inputProduct.value.trim().toLowerCase();
    if (query) {
        const filteredProducts = allProducts.filter((item) => item.title.toLowerCase().includes(query));
        showProducts(filteredProducts);
    } else {
        showProducts(allProducts);
    }
};

const filtercategory = (event) => {
    const category = event.target.innerHTML;
    const filteredProducts = allProducts.filter((product) => product.category === category);
    showProducts(filteredProducts)
}

document.addEventListener('DOMContentLoaded', init);
buttonSearch.addEventListener('click', searchHandler);
listItems.forEach((li) => li.addEventListener('click',filtercategory))
