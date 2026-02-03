import React, { useState } from 'react'
import './Statistics.scss'
import { Outlet } from 'react-router-dom'
import StatisticsNavbar from './StatisticsNavbar/StatisticsNavbar'
import StatisticsTop from './StatisticsTop/StatisticsTop'
import Statistics_imgs1 from './Statistics_imgs/icons8-menu-48.png'
import { FaChevronDown } from "react-icons/fa";
function Statistics() {
    const [poplog, Setpoplog] = useState(true)
    const handleclick404 = () => {
        Setpoplog(!poplog)
    }
    return (
        <div className='Statistics'>
            <div className={poplog?"isolated":"isolated isolated_extra"}>
                <StatisticsNavbar />
                <button onClick={handleclick404} className='change_icon'>{poplog?<FaChevronDown className='FaChevronDown'/>:<img src={Statistics_imgs1} alt="" />}</button>
            </div>
            <section className={poplog ? 'combined combined_extra' : 'combined'}>
                <StatisticsTop />
                <Outlet />
            </section>
        </div>
    )
}

export default Statistics
