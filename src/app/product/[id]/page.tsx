import ProductDetails from "@/components/Product-Page/ProductContent";
import ProductPageSkeleton from "@/components/Skeletons/ProductPageSkeleton";
import { Suspense } from "react";

export default async function ProductPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	if (!id) return <div>No product found</div>;
	return (
		<div className="w-full h-full flex flex-col ">
			<Suspense fallback={<ProductPageSkeleton/>}>
				<ProductDetails id={id} />
			</Suspense>
		</div>
	);
}
