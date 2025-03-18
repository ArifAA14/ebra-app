import { getProduct } from "@/app/actions/main-actions";
import Breadcrumb from "@/components/Product-Page/Breadcrumb";
import Image from "next/image";
import productImage from "../../../../public/prod_img.png";
import Stars from "@/components/Product-Page/Stars";
import { HeartIcon } from "lucide-react";
import ActionButtons from "@/components/Product-Page/ActionButtons";

export default async function ProductPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	if (!id) return <div>No product found</div>;
	const product = await getProduct(id);
	return (
		<div className="w-full h-full flex flex-col gap-6 mt-10">
			<Breadcrumb product={product} />
			<div
				className="w-full h-full grid lg:grid-cols-[40%_60%] border p-6
       border-neutral-200  md:grid-cols-1 grid-cols-1 gap-6 lg:gap-4 mt-4"
			>
				<Image
					src={productImage}
					alt={product.title}
					width={800}
					height={800}
					className="object-contain w-full h-full"
					quality={100}
				/>

				<div className="w-full h-full flex flex-col gap-6 justify-between ">
					<div className="flex flex-col gap-4  ">
						<Stars product={product} />
						<h2 className="text-2xl font-medium font-sans tracking-tight  text-black">
							{product.title}
						</h2>
						<p className="text-base font-normal lg:max-w-[80%] font-sans text-gray-600 text-pretty tracking-tight">
							{product.description}
						</p>

						<h4 className="text-xl font-medium font-sans tracking-tight text-black">
							£{product.price}
						</h4>
					</div>

					<ActionButtons product={product} />
				</div>
			</div>
		</div>
	);
}
