"use client";
import { useCartStore } from "@/lib/store/cartStore";
import Image from "next/image";
import React from "react";
import productImage from "../../../public/prod_img.png";
import CartPageItem from "@/components/Cart/CartPage/CartPageItem";

function CartPage() {
	const { cart } = useCartStore();
	return (
		<div className="w-full h-full flex flex-col gap-6 mt-10">
			<div className="flex flex-col gap-1.5">
				<h2 className="text-2xl font-medium font-sans tracking-tight  text-black">
					Order Summary
				</h2>
				<p className="text-base font-normal font-sans tracking-tight text-gray-600 text-pretty">
					Please review your order and its details before continuing to
					checkout.
				</p>
			</div>

			<div className="flex flex-col gap-6 mt-6">
        {
          cart.map((item) => (
            <CartPageItem key={item.id} product={item} />
          ))
}
			</div>
		</div>
	);
}

export default CartPage;
