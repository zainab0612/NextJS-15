'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const NotFound = () => {
    const router = useRouter();
    setTimeout(() => {
        router.push('/')
    }, 2000)

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-2xl font-bold">Page Not Found</h1>
                <p className="text-gray-500">Redirecting...</p>
            </div>
        </>
    )
}

export default NotFound