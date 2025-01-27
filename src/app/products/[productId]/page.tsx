import React from 'react'
type Param = { params: { productId: string } }

const page = async ({ params }: Param) => {
    const productId = await params.productId
    return (
        <div>page {productId}</div>
    )
}

export default page