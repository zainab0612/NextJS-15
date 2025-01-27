import React from 'react'
type Param = { params: { productId: string; reviewId: string; } }
const page = async ({ params }: Param) => {
    const { productId, reviewId } = await params
    return (
        <div>Review {reviewId} for product {productId}</div>
    )
}

export default page