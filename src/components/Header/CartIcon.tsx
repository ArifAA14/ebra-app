'use client'
import { useCartStore } from '@/lib/store/cartStore';
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import CartPopoverItem from "../Cart/CartPopover/CartPopoverItem";
import { Popover, PopoverContent, PopoverTrigger } from "../Shared/Popover";

function CartIcon() {
	const { cart, totalItems } = useCartStore();

	return (
		<Popover>
			<PopoverTrigger
				className="text-black hover:text-gray-600 transition-colors
			 duration-200 font-medium relative cursor-pointer"
			>
				<ShoppingBag />

				<p
					className="absolute -top-2 -right-3.5 bg-red-600 w-5 h-5 flex items-center 
			justify-center rounded-full text-white text-xs font-medium "
				>
					{totalItems}
				</p>
			</PopoverTrigger>

			<PopoverContent className="w-full h-full">
				<div className="flex flex-col gap-4">
					{totalItems > 0 ? (
						<>
							{cart.map((item) => (
								<CartPopoverItem key={item.id} product={item} />
							))}
							<Link
								href={"/cart"}
								className="w-full flex items-center justify-center px-4 py-2 bg-black text-white cursor-pointer
					font-medium font-sans tracking-tight text-sm hover:bg-black/90 transition-all ease-in-out duration-200"
							>
								View Cart
							</Link>
						</>
					) : (
						<div className="flex flex-col gap-0.5 items-center justify-center">
							<p className="text-sm font-normal font-sans tracking-tight text-black">
								Your cart is empty
							</p>
						</div>
					)}
				</div>
			</PopoverContent>
		</Popover>
	);
}

export default CartIcon;