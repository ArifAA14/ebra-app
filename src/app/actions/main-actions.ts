

export  async function getAllProducts(): Promise<Product[]> {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
}


export  async function getProduct(id: string): Promise<Product> {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
}
