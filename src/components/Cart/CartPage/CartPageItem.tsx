import QuantitySelector from '@/components/Shared/CartQuantity';
import { useCartStore } from '@/lib/store/cartStore';
import { Trash2Icon } from 'lucide-react';
import Image from 'next/image';
import productImage from '../../../../public/prod_img.png';

function CartPageItem({ product }: { product: CartItem }) {
	const { removeFromCart } = useCartStore()
	return (
		<div className="flex gap-6 w-full h-full ">
			<Image
				src={productImage}
				alt="product image"
				width={80}
				height={60}
				className="object-cover w-auto h-fit"
				quality={100}
			/>
			<div className="flex flex-col gap-4 w-full">
				<div className='w-full lg:gap-0 gap-2  flex items-baseline lg:justify-between lg:flex-row flex-col'>
					<h2 className="text-lg font-medium font-sans max-w-full w-full  tracking-tight text-black">
						{product.title}
					</h2>
					<p className="text-base  font-normal font-sans tracking-tight text-black text-pretty">
						£{(product.price * product.quantity).toFixed(2)}
					</p>
				</div>

				<div className='flex gap-6 flex-row'>
					<QuantitySelector quantity={product.quantity}
						id={product.id}
						key={product.id + 'qtySelector'}
					/>

					<button className='w-fit cursor-pointer'
						onClick={() => removeFromCart(product.id)}
					>
						<Trash2Icon className='size-5 text-black' strokeWidth={1.5} />
					</button>
				</div>


			</div>
		</div>

	);
}

export default CartPageItem