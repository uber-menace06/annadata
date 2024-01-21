import React from 'react';
import { useSelector } from 'react-redux';
import Leaderboard from '../Leaderboard/Leaderboard.jsx';
import Sidebar from '../Sidebar/Sidebar';

const Userhome = () => {
    const { user } = useSelector(state => state.auth);
    return (
        <div className='flex justify-between mx-8'>
            <div><Sidebar /></div>
            <div className='my-4 bg-gray-100 p-4 rounded-lg shadow-md h-fit overflow-auto'>
<<<<<<< HEAD
                <h2 className='text-2xl font-bold mb-4 text-gray-800'>Recent Contributions</h2>
=======
                <h2 className='text-2xl font-bold p-4 mb-4 text-gray-800'>Recent Contributions</h2>
>>>>>>> 2497ac90992ba683b383d3331a5b529c089044dc
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

            <div><Leaderboard /></div>
        </div>
    )
}

export default Userhome