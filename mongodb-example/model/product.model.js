const Products = require('./product.schema');

async function getProductById(id) {
    const product = await Products.findOne({ id });
    return product;
}

async function getProducts() {
    const allProducts = await Products.find();
    return allProducts;
}

module.exports = { getProducts, getProductById }