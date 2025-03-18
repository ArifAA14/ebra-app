import { Search, ShoppingBag } from 'lucide-react';
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
		<div className="w-full h-full flex items-center justify-between ">
			<Link
				href={"/"}
				className="lg:text-2xl font-medium font-sans tracking-tight text-black text-xl"
			>
				Ebra
			</Link>

			<div className="flex items-center gap-6">
				<Link
					href={"/search"}
					className="text-black hover:text-gray-600 transition-colors duration-200 font-medium"
				>
					<Search />
				</Link>
				<Link
					href={"/cart"}
					className="text-black hover:text-gray-600 transition-colors duration-200 font-medium"
				>
					<ShoppingBag />
				</Link>
			</div>
		</div>
	);
}

export default Header