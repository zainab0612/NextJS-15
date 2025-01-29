import React from 'react'
type Param = { params: { slug: string[] } }

const page = async ({ params }: Param) => {
    const { slug } = await params
    if (slug?.length === 2) {
        return (
            <>
                <h1>Viewing Docs for feature {slug[0]} and concept {slug[1]}</h1>
            </>
        )
    } else if (slug?.length === 1) {
        return (
            <>
                <h1>Viewing docs for feature {slug[0]}</h1>
            </>
        )
    }
    return (
        <>
            <div>
                Docs HomePage
            </div>
        </>
    )
}


export default page