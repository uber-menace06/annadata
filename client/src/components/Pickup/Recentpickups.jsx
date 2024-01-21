import React from 'react'

const Recentpickups = ({ title, description }) => {
    return (
        <div className="bg-white dark:bg-dark-bg p-4 rounded-md shadow-md mb-4">
            <div className="mb-4">
                <p className="text-xl font-semibold mb-2">Food: {title}</p>
                <p className="text-gray-600 dark:text-gray-300">Details: {description}</p>
            </div>
        </div>
    )
}

export default Recentpickups