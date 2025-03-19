"use client";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../Shared/Dialog";

function Search({ products }: { products: Product[] }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [open, setOpen] = useState(false)
    const router = useRouter()

    const filteredProducts = useMemo(() => {
        if (!searchTerm) return [];
        return products.filter((product) =>
            [product.title, product.description]
                .join(" ")
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, products]);


    function handleClick(id: number) {
        router.push(`/product/${id}`)
        setOpen(false)

    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className="text-black hover:text-gray-600
       transition-colors duration-200 font-medium cursor-pointer">
                <SearchIcon />
            </DialogTrigger>
            <DialogContent className="">
                <div className=" lg:w-[650px] lg:h-[550px] overflow-clip
                w-[350px] h-[450px]">
                    <div className="w-full mb-0">
                        <input
                            className="w-full bg-transparent border-b placeholder:text-gray-300 
              text-white font-medium text-base px-3.5 py-3 border-neutral-400
               focus:outline-none placeholder:font-normal"
                            placeholder="Start typing to search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col  overflow-y-auto h-full">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <div key={product.id} className="px-4 py-2.5 border-b border-neutral-400 last:border-b-0 last:pb-16
                                cursor-pointer group hover:bg-neutral-600/20"
                                    onClick={() => handleClick(product.id)}
                                >
                                    <p className=" text-white font-sans 
                                    tracking-tight font-medium text-sm">{product.title}</p>
                                    <p className="text-xs text-gray-300 line-clamp-2
                                    font-sans tracking-tight ">
                                        {product.description}
                                    </p>
                                </div>
                            ))
                        ) : (
                            searchTerm && (
                                <div className="w-full h-full flex items-center justify-center">
                                <p className="text-sm text-gray-300">No results found.</p>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default Search;
