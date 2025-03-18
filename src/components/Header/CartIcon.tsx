'use client'
import { useCartStore } from '@/lib/store/cartStore';
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

function CartIcon() {
	const {  totalItems } = useCartStore();
  return (
		<Link
			href={"/cart"}
			className="text-black hover:text-gray-600 transition-colors
			 duration-200 font-medium relative"
		>
			<ShoppingBag />

			<p className='absolute -top-2 -right-3.5 bg-red-600 w-5 h-5 flex items-center 
			justify-center rounded-full text-white text-xs font-medium '>
				{totalItems}
				</p>

		</Link>
	);
}

export default CartIcon;