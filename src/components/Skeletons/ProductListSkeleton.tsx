import React from 'react'


function ItemSkeleton() {
  return (
		<div className="w-full h-full flex flex-col gap-6">
			<div className="w-full h-[400px] bg-gradient-to-r from-gray-200 to-gray-100  animate-pulse"></div>
			<div className="px-3 py-2 w-[150px] bg-gradient-to-r from-gray-200 to-gray-100  animate-pulse"></div>
			<div className="px-3 py-2 w-[100px] bg-gradient-to-r from-gray-200 to-gray-100  animate-pulse"></div>
		</div>
	);
}

function ProductListSkeleton() {
  return (
		<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10">
      {Array(9).fill(null).map((_, index) => (
        <ItemSkeleton key={index} />
      ))}
		</div>
	);
}

export default ProductListSkeleton