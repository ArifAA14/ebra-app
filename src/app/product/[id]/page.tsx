import { getProduct } from "@/app/actions/main-actions";
import ActionButtons from "@/components/Product-Page/ActionButtons";
import Breadcrumb from "@/components/Product-Page/Breadcrumb";
import Stars from "@/components/Product-Page/Stars";
import Image from "next/image";
import productImage from "../../../../public/prod_img.png";
import { Suspense } from "react";
import ProductDetails from "@/components/Product-Page/ProductContent";
import ProductPageSkeleton from "@/components/Skeletons/ProductPageSkeleton";

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
