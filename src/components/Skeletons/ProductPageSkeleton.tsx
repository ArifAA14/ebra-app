import React from 'react'

function ProductPageSkeleton() {
    return (
        <div className='w-full h-full grid grid-cols-1 lg:grid-cols-2
       gap-6 mt-4
		lg:max-w-[80%] md:max-w-[90%] mx-auto lg:p-8 p-6'>
            <div className='w-full min-h-[400px] bg-neutral-200 animate-pulse' />

            <div className='w-full h-full flex flex-col gap-6'>
                <div className='px-6 py-3 w-[150px] animate-pulse bg-neutral-200' />
                <div className='px-6 py-3 w-full h-[150px] animate-pulse bg-neutral-200' />

                <div className='px-6 py-3 w-full h-[60px] mt-6 animate-pulse bg-neutral-200' />
            </div>
        </div>
    )
}

export default ProductPageSkeleton