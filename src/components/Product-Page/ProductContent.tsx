import { getProduct } from "@/app/actions/main-actions";
import Image from "next/image";
import productImage from "../../../public/prod_img.png";
import ActionButtons from "./ActionButtons";
import Breadcrumb from "./Breadcrumb";
import Stars from "./Stars";

export default async function ProductDetails({ id }: { id: string }) {
    const product = await getProduct(id);

    return (
        <div
            className="w-full h-full flex flex-col gap-6 mt-4
		lg:max-w-[80%] md:max-w-[90%] mx-auto lg:p-8 p-6"
        >
            <Breadcrumb product={product} />
            <div
                className="w-full h-full grid lg:grid-cols-[40%_60%] border p-6
        border-neutral-200 md:grid-cols-1 grid-cols-1 gap-6 lg:gap-4 mt-4"
            >
                <Image
                    src={productImage}
                    alt={product.title}
                    width={800}
                    height={800}
                    className="object-contain w-full h-full"
                    quality={100}
                />

                <div className="w-full h-full flex flex-col gap-6 justify-between">
                    <div className="flex flex-col gap-4">
                        <Stars product={product} />
                        <h2 className="text-2xl font-medium text-black">{product.title}</h2>
                        <p className="text-base text-gray-600 lg:max-w-[80%]">
                            {product.description}
                        </p>
                        <h4 className="text-xl font-medium text-black">£{product.price}</h4>
                    </div>

                    <ActionButtons product={product} />
                </div>
            </div>
        </div>
    );
}
