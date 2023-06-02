const { Product } = require('../models');


async function getProduct(productId) {
    try {
        const product = await Product.findByPk(productId);
        if (!product) {
            throw new Error('Product not found');
        }
        return product;
    } catch (error) {
        console.error('Error retrieving product:', error);
        throw error;
    }
}

async function createProduct(productData) {
    try {
        const product = await Product.create(productData);
        return product;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
}

async function updateProduct(productId, productData) {
    try {
        const product = await getProduct(productId);
        await product.update(productData);
        return product;
    } catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
}

async function deleteProduct(productId) {
    try {
        const product = await getProduct(productId);
        await product.destroy();
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
}

module.exports = {
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
};
