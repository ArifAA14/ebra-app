"use client";
import CartPageItem from "@/components/Cart/CartPage/CartPageItem";
import { useCartStore } from "@/lib/store/cartStore";

function CartPage() {
	const { cart, totalItems, totalPrice } = useCartStore();
	return (
		<div className="w-full h-full flex flex-col gap-6 mt-4
		lg:max-w-[80%] md:max-w-[90%] mx-auto  lg:p-8 p-6
		">

			{totalItems > 0 &&
				<div className="flex flex-col gap-1.5">
					<h2 className="text-2xl font-medium font-sans tracking-tight  text-black">
						Order Summary
					</h2>
					<p className="text-base font-normal font-sans tracking-tight text-gray-600 text-pretty">
						Please review your order and its details before continuing to
						checkout.
					</p>
				</div>
			}
			{totalItems > 0 ? (
				<div className="grid lg:grid-cols-[60%_40%] md:grid-cols-[50%_50] grid-cols-1 w-full h-full gap-10">
					<div className="flex flex-col gap-6 mt-6">
						{
							cart.map((item) => (
								<CartPageItem key={item.id} product={item} />
							))
						}
					</div>

					<div className="flex flex-col gap-4  bg-neutral-50 border-neutral-200 p-5">
						<h4 className="font-sans font-medium tracking-tight text-black text-lg">
							Order Details
						</h4>

						<div className="flex items-center w-full justify-between">
							<p className="font-normal font-sans tracking-tight text-black text-base">
								Subtotal ({totalItems} Items)
							</p>
							<p className="font-normal font-sans tracking-tight text-black text-base">
								£{totalPrice.toFixed(2)}
							</p>
						</div>


						<div className="flex items-center w-full justify-between border-b border-neutral-200 pb-4">
							<p className="font-normal font-sans tracking-tight text-black text-base">
								Shipping (3-5 Days)
							</p>
							<p className="font-normal font-sans tracking-tight text-black text-base">
								£9.99
							</p>
						</div>



						<div className="flex items-center w-full justify-between ">
							<p className="font-medium font-sans tracking-tight text-black text-base">
								Total
							</p>
							<p className="font-medium font-sans tracking-tight text-black text-base">
								£{(totalPrice + 9.99).toFixed(2)}
							</p>
						</div>
						<button className="w-full px-4 py-2 mt-2 cursor-pointer bg-black text-center font-sans font-medium text-base
					tracking-tight text-white hover:bg-black/90 transition-all ease-linear duration-300">
							Checkout
						</button>
					</div>
				</div>
			) : (
				<div className="w-full h-full flex mt-10 items-center justify-center">
					<h4 className="font-sans font-normal text-2xl text-black tracking-tight">
						Oh no, nothing here yet..
					</h4>
				</div>
			)
			}
		</div>
	);
}

export default CartPage;
