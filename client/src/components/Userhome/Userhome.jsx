import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Leaderboard from '../Leaderboard/Leaderboard.jsx'
const Userhome = () => {
    return (
        <div className='flex'>
            <div><Sidebar /></div>
            <div className='mx-10'><Leaderboard /></div>
        </div>
    )
}

export default Userhome