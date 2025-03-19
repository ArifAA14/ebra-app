import Image from 'next/image';
import React from 'react'
import productImage from '../../../../public/prod_img.png';
import { useCartStore } from '@/lib/store/cartStore';
import { Trash2Icon } from 'lucide-react';

function CartPageItem({ product }: { product: CartItem }) {
  const {removeFromCart, updateQuantity} = useCartStore()
  return (
		<div className="w-full h-full flex items-center justify-between border border-neutral-200 p-4">
			<div className="flex gap-6 w-full h-full">
				<Image
					src={productImage}
					alt="product image"
					width={100}
					height={150}
					className="object-contain w-auto h-fit"
					quality={100}
				/>
				<div className="flex flex-col gap-1.5">
					<h2 className="text-xl font-medium font-sans tracking-tight text-black">
						{product.title}
					</h2>
		
					<p className="text-base font-normal font-sans tracking-tight text-black text-pretty">
						Price - £{product.price.toFixed(2)}
					</p>
					<p className="text-base font-normal font-sans tracking-tight text-black text-pretty">
						Subtotal - £{(product.price * product.quantity).toFixed(2)}
          </p>
          <p className="text-base font-normal font-sans tracking-tight text-black text-pretty">
						Quantity - {product.quantity}
          </p>

          <button className='flex items-center gap-2 border text-red-800 cursor-pointer
          text-sm  border-red-800 w-fit px-4 py-1.5'>
            <Trash2Icon className="size-3.5 text-red-800" />
            Remove
          </button>
				</div>
			</div>
		</div>
	);
}

export default CartPageItem