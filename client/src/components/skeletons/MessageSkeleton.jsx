import React from 'react'

const MessageSkeleton = () => {
    return (
        <>
            <div className='flex gap-3 items-center justify-start mb-2'>
                <div className='skeleton w-10 h-10 rounded-full shrink-0'></div>
                <div className='skeleton h-10 w-40'></div>
            </div>
            <div className='flex gap-3 items-center justify-end mb-2'>
                <div className='skeleton h-10 w-40'></div>
                <div className='skeleton w-10 h-10 rounded-full shrink-0'></div>
            </div>
            <div className='flex gap-3 items-center justify-start mb-2'>
                <div className='skeleton w-10 h-10 rounded-full shrink-0'></div>
                <div className='skeleton h-10 w-40'></div>
            </div>
            <div className='flex gap-3 items-center justify-end'>
                <div className='skeleton h-10 w-40'></div>
                <div className='skeleton w-10 h-10 rounded-full shrink-0'></div>
            </div>
        </>
    )
}

export default MessageSkeleton