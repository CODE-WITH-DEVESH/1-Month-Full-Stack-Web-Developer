import React from 'react'

const Card = () => {
    return (
        <>
            <div className="max-w-xs p-6 rounded-md shadow-md bg-red">
                <img
                    src="https://cdn.pixabay.com/photo/2024/01/30/16/46/horse-8542469_1280.jpg"
                    alt=""
                    className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
                />
                <div className="mt-6 mb-2">
                    <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
                        Title
                    </span>
                    <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
                </div>
                <p className="text-gray-300">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
                    amet
                </p>
            </div>
        </>
    )
}

export default Card
