import QuantitySelector from '@/components/Shared/CartQuantity';
import Image from 'next/image';
import productImage from "../../../../public/prod_img.png";

function CartPopoverItem({ product }: { product: CartItem }) {
	return (
		<div className="flex items-center justify-between w-full border-b last:border-b-0 border-neutral-200 pb-3.5 last:pb-0  ">
			<div className="w-full h-full flex gap-4 items-center">
				<Image
					src={productImage}
					alt="product image"
					width={50}
					height={50}
					quality={100}
					className="object-contain border border-neutral-200"
				/>
				<div className="flex flex-col gap-0.5">
					<p className="text-sm font-normal font-sans tracking-tight text-black line-clamp-1 max-w-[80%] ">
						{product.title}
					</p>

					<div className="flex items-center gap-3 mt-2 cursor-pointer">
						<QuantitySelector id={product.id} quantity={product.quantity} />
					</div>
				</div>
			</div>
			<div className=" h-full">
				<p className="text-sm font-medium font-sans tracking-tight text-black">
					${(product.price * product.quantity).toFixed(2)}
				</p>
			</div>
		</div>
	);
}

export default CartPopoverItem