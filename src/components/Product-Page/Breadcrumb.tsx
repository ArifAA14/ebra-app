import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

function Breadcrumb({ product }: { product: Product }) {
  return (
		<Link
			href={"/"}
			className="text-gray-400 hover:text-gray-600 flex items-center gap-3 transition-colors duration-200 font-medium"
		>
			<ArrowLeft />
			<p className="text-xs lg:text-sm font-normal font-sans text-gray-400 text-pretty tracking-tight">
				Products
			</p>
			<p className="text-xs lg:text-sm font-normal font-sans text-gray-400 text-pretty tracking-tight">
				&gt;
			</p>
			<p className="text-xs lg:text-sm capitalize font-normal font-sans text-gray-400 text-pretty tracking-tight line-clamp-1">
				{product.category}
			</p>
			<p className="text-xs lg:text-sm font-normal font-sans text-gray-400 text-pretty tracking-tight">
				&gt;
			</p>
			<p className="text-xs lg:text-sm capitalize italic font-normal font-sans text-black text-pretty tracking-tight line-clamp-1">
				{product.title}
			</p>
		</Link>
	);
}

export default Breadcrumb