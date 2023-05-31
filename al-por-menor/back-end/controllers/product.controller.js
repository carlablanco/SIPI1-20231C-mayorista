const productService = require('../services/product.service');

async function getProductsForSubscription(req, res, next) {
    const { subscriptionId } = req.params;
  
    try {
      const products = await productService.getProductsForSubscription(subscriptionId);
      res.json(products);
    } catch (error) {
      console.error('Error retrieving products for subscription:', error);
      next(error);
    }
  }

async function getProduct(req, res, next) {
    const { productId } = req.params;

    try {
        const product = await productService.getProduct(productId);
        res.json(product);
    } catch (error) {
        console.error('Error retrieving product:', error);
        next(error);
    }
}

async function createProduct(req, res, next) {
    const { name, description, measurementUnit, brand, supplyingCompany, category, price, imgUrl } = req.body;

    try {
        const product = await productService.createProduct({ name, description, measurementUnit, brand, supplyingCompany, category, price, imgUrl });
        res.status(201).json(product);
    } catch (error) {
        console.error('Error creating product:', error);
        next(error);
    }
}

async function updateProduct(req, res, next) {
    const { productId } = req.params;
    const { name, description, measurementUnit, brand, supplyingCompany, category, price, imgUrl } = req.body;

    try {
        const product = await productService.updateProduct(productId, { name, description, measurementUnit, brand, supplyingCompany, category, price, imgUrl });
        res.json(product);
    } catch (error) {
        console.error('Error updating product:', error);
        next(error);
    }
}

async function deleteProduct(req, res, next) {
    const { productId } = req.params;

    try {
        await productService.deleteProduct(productId);
        res.sendStatus(204);
    } catch (error) {
        console.error('Error deleting product:', error);
        next(error);
    }
}

module.exports = {
    getProductsForSubscription,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
};
