import ProductList from "@/components/Products/ProductList";
import ProductListSkeleton from "@/components/Skeletons/ProductListSkeleton";
import { Suspense } from "react";

export default async function Home() {
	return (
		<div className="w-full h-full flex mt-10 flex-col gap-6">
			<Suspense fallback={<ProductListSkeleton />}>
				<ProductList />
			</Suspense>
		</div>
	);
}
