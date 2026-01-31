import React from 'react'
import './Statistics.scss'
import { Outlet } from 'react-router-dom'
import StatisticsNavbar from './StatisticsNavbar/StatisticsNavbar'
import StatisticsTop from './StatisticsTop/StatisticsTop'
import Statistics_imgs1 from './Statistics_imgs/icons8-menu-48.png'
function Statistics() {
    return (
        <div className='Statistics'>
            <StatisticsNavbar />
            <section className="combined">
                <StatisticsTop />
                <Outlet />
            </section>
        </div>
    )
}

export default Statistics
