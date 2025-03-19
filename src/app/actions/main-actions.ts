

export async function getAllProducts(): Promise<Product[]> {
    try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
            throw new Error(`Failed to fetch products: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error: unknown) {
        console.error("Error fetching all products:", error);
        throw new Error("Please try again later.");
    }
}

export async function getProduct(id: string): Promise<Product> {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch product ${id}: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error: unknown) {
        console.error(`Error fetching product ${id}:`, error);
        throw new Error(`Please try again later.`);
    }
}

