'use client'
import { useCartStore } from '@/lib/store/cartStore';
import { ShoppingBag, ShoppingBasketIcon } from "lucide-react";
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

			<PopoverContent className="w-full h-full flex flex-col gap-4 ">
				{totalItems > 0 ? (
					cart.map((item) => <CartPopoverItem key={item.id} product={item} />)
				) : (
					<div className="flex flex-col gap-2 items-center justify-between">
						<ShoppingBasketIcon className="size-8 text-black" strokeWidth={1} />
						<p className="text-sm font-medium font-sans tracking-tight text-gray-600">
							Nothing here yet..
						</p>
					</div>
				)}
			</PopoverContent>
		</Popover>
	);
}

export default CartIcon;