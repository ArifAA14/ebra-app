'use client'
import { useCartStore } from '@/lib/store/cartStore';
import { HeartIcon } from 'lucide-react';
import React from 'react'
import { toast } from 'sonner';

function ActionButtons({ product }: { product: Product }) {
  const {  addToCart } = useCartStore();

	function handleAdd() {
		addToCart(product);
		toast.success('Item added to your bag!')
	}

  return (
		<div className="flex flex-col gap-4">
			<button
				className="w-full max-w-[95%] mx-auto h-full bg-neutral-100 text-neutral-800 font-medium 
            font-sans tracking-tight text-base px-4 py-3 cursor-pointer
            hover:bg-neutral-200/90 transition-all ease-in-out duration-200 flex items-center gap-2 justify-center"
			>
				<HeartIcon className="size-4" />
				Wishlist
			</button>
			<button
				className="w-full max-w-[95%] mx-auto h-full bg-black text-white font-medium 
            font-sans tracking-tight text-base px-4 py-3 cursor-pointer
            hover:bg-black/90 transition-all ease-in-out duration-200"
        onClick={handleAdd}
			>
				Add to Cart
			</button>
		</div>
	);
}

export default ActionButtons