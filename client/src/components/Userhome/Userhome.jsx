import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Leaderboard from '../Leaderboard/Leaderboard.jsx'
import { useSelector } from 'react-redux';
import Pickup from "../Pickup/Recentpickups.jsx";

const Userhome = () => {
    const { user } = useSelector(state => state.auth);
    return (
        <div className='flex justify-between mx-8'>
            <div><Sidebar /></div>
            <div className='my-4 bg-gray-100 p-4 rounded-lg shadow-md h-[80vh]  overflow-auto'>
                <h2 className='text-2xl font-bold mb-4 text-gray-800'>Recent Contributions</h2>
                <div className='w-[35vw]'>
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

            <div className='h-[82vh] overflow-auto'><Leaderboard /></div>
        </div>
    )
}

export default Userhome