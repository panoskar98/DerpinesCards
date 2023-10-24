function CombineProducts(products) {
    const productMap = {};

    products.forEach((product) => {
        const { title, type, weight, colour } = product;
        const key = `${title}_${type}_${weight}`;

        if (productMap[key]) {
            // Product with the same title, type, and weight already exists
            productMap[key].colour.push(colour);
        } else {
            // Create a new product entry without productId and dateAdded
            const { productId, dateAdded, ...newProduct } = product;
            productMap[key] = { ...newProduct, colour: [colour] };
        }
    });
    // Convert the object values back to an array
    const combinedProducts = Object.values(productMap);

    return combinedProducts;
}

export default CombineProducts;