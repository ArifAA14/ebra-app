import { Star } from "lucide-react";
import React from "react";

function Stars({ product }: { product: Product }) {
	const rating = Math.round(product.rating.rate); 

	return (
		<div className="w-full flex items-center gap-1 ml-0.5 mt-2">
			{Array(rating)
				.fill(null)
				.map((_, index) => (
					<Star key={index} className="text-black fill-black size-4" />
				))}

			{Array(5 - rating)
				.fill(null)
				.map((_, index) => (
					<Star key={index + rating} className="text-gray-300 size-4 fill-gray-300" />
				))}

			<p className="text-sm font-medium ml-2 text-gray-600 tracking-tight">
				{product.rating.count} Reviews
			</p>
		</div>
	);
}

export default Stars;
