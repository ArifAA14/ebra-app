import Image from "next/image";
import React from "react";
import productImage from "../../../public/prod_img.png";
import Link from "next/link";

function Product({ product }: { product: Product }) {
	return (
		<Link key={product.id} className="flex flex-col gap-4 cursor-pointer group "
			href={`/product/${product.id}`}
			target="_blank"
		>
			{/* <div className="w-full flex justify-center items-center h-[200px] sm:h-[220px] lg:h-[250px]">
				<Image
					src={product.image}
					alt={product.title}
					width={200} 
					height={200}
					className="object-contain w-auto h-full" 
					quality={100}
				/>
				// this would be the code for the product image, but using the one below for design purposes as these
				images are simply too ugly.
			</div> */}
			<div className="w-full flex justify-center items-center ">
				<Image
					src={productImage} // static image taken from figma design provided.
					alt={product.title}
					quality={100}
					priority
					className="object-cover w-full rounded h-full group-hover:brightness-95 
          transition-all ease-in-out duration-200"
				/>
			</div>

			<div className="flex flex-col gap-2">
				<h3 className="text-base font-medium font-sans tracking-tight text-black line-clamp-1">
					{product.title}
				</h3>
				<p className="text-base font-medium font-sans  text-black">
					£{product.price}
				</p>
			</div>
		</Link>
	);
}

export default Product;
