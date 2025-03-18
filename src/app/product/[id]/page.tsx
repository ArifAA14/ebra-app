import { getProduct } from "@/app/actions/main-actions";
import Breadcrumb from "@/components/Product-Page/Breadcrumb";
import Image from "next/image";
import productImage from "../../../../public/prod_img.png";
import Stars from "@/components/Product-Page/Stars";
import { HeartIcon } from "lucide-react";

export default async function ProductPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	if (!id) return <div>No product found</div>;
  const product = await getProduct(id);
  console.log(product)
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

					<div className="flex flex-col gap-4">
						<button
							className="w-full max-w-[95%] mx-auto h-full bg-neutral-100 text-neutral-800 font-medium 
            font-sans tracking-tight text-base px-4 py-3 cursor-pointer
            hover:bg-neutral-200/90 transition-all ease-in-out duration-200 flex items-center gap-2 justify-center"
            >
              <HeartIcon className="size-4"/>
							Wishlist
						</button>
						<button
							className="w-full max-w-[95%] mx-auto h-full bg-black text-white font-medium 
            font-sans tracking-tight text-base px-4 py-3 cursor-pointer
            hover:bg-black/90 transition-all ease-in-out duration-200"
						>
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
