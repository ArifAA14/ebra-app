import React from 'react'
import Product from './Product';
import { getAllProducts } from '@/app/actions/main-actions';

async function ProductList() {
    const products = await getAllProducts();

  return (
		<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-4">
			{products.map((product) => (
				<Product key={product.id} product={product} />
			))}
		</div>
	);
}

export default ProductList