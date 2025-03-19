import Link from 'next/link';
import CartIcon from "./CartIcon";
import Search from './Search';
import { getAllProducts } from '@/app/actions/main-actions';

async function Header() {
	const products = await getAllProducts();
	return (
		<div className="w-full h-full flex items-center justify-between lg:max-w-[80%] md:max-w-[90%] mx-auto
		lg:px-8 px-6 pt-8 ">
			<Link
				href={"/"}
				className="lg:text-2xl font-medium font-sans tracking-tight text-black text-xl"
			>
				ebra.
			</Link>

			<div className="flex items-center gap-6">
				<Search products={products} />
				<CartIcon />
			</div>
		</div>
	);
}

export default Header