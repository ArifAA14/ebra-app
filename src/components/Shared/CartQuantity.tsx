"use client";
import { useCartStore } from "@/lib/store/cartStore";
import { MinusIcon, PlusIcon } from "lucide-react";

interface QuantitySelectorProps {
	id: number;
	quantity: number;
}

export default function QuantitySelector({
	id,
	quantity,
}: QuantitySelectorProps) {
	const updateQuantity = useCartStore((state) => state.updateQuantity);

	return (
		<div className="flex items-center gap-0 px-2 border border-neutral-200 w-fit  py-1">
			<button
				onClick={() => updateQuantity(id, quantity - 1)}
				className="w-full flex items-center justify-center  text-black text-xl
          transition hover:opacity-80 cursor-pointer"
			>
				<MinusIcon className="size-3.5 text-gray-600" />
			</button>
			<span className="px-3 text-center text-sm font-medium">{quantity}</span>
			<button
				onClick={() => updateQuantity(id, quantity + 1)}
				className="w-full flex items-center justify-center  text-black text-xl
          transition hover:opacity-80"
			>
				<PlusIcon className="size-3.5 text-gray-600" />
			</button>
		</div>
	);
}
