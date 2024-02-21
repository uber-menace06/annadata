import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Leaderboard from '../Leaderboard/Leaderboard.jsx';
import Sidebar from '../Sidebar/Sidebar';

const Userhome = () => {
    const { user } = useSelector(state => state.auth);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className='flex justify-between mx-8'>
            <div>
                <img
                    src='https://assets.leetcode.com/users/default_avatar.jpg'
                    alt="Avatar"
                    className="w-12 h-12 rounded-full cursor-pointer"
                    onClick={toggleSidebar}
                />
            </div>
            <div>{sidebarOpen && <Sidebar />}</div>
            <div className={`my-4 p-4 rounded-lg shadow-lg h-fit overflow-auto ${sidebarOpen ? '' : 'w-3/5'}`}>
                <h2 className='text-2xl font-bold mb-4 text-gray-800'>Recent Contributions</h2>
                <div className={`w-${sidebarOpen ? '[35vw]' : 'full'}`}>
                    {user && user.pickups.map((item) => (
                        <div key={item._id} className='bg-white p-4 mb-4 rounded-md shadow-md'>
                            <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
                            <p className='text-gray-700'>{item.description}</p>
                            <div className={`mt-2 ${item.completed ? 'text-green-600' : 'text-yellow-600'}`}>
                                {item.completed ? 'Completed' : 'Pending'}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div><Leaderboard /></div>
        </div>
    )
}

export default Userhome;
