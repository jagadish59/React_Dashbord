import React from 'react'
import Navbar from '../../../components/dashbord/navbar/Navbar'
import Sidebar from '../../../components/dashbord/sidebar/Sidebar'
import Chart from '../../../components/dashbord/char/Chart'
import './single.scss'
import List from '../../../components/dashbord/table/Table'


export const Single = () => {
  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="edit">Edit</div>
            <h1 className='title'>Information</h1>
            <div className="item">
              <img src="https://picsum.photos/200/300" alt="" className="itemimage" />
            <div className="details">
              <div className="itemTitle">Arul kafle</div>

              <div className="itemDetail">
                <span className='itemKey'>Email:</span>
                <span className='itemVaue'>jkhadka932@gmail.com</span>
              </div>
              <div className="itemDetail">
                <span className='itemKey'>Phone:</span>
                <span className='itemVaue'>94584224524</span>
              </div>
              <div className="itemDetail">
                <span className='itemKey'>County:</span>
                <span className='itemVaue'>Nepal</span>
              </div>
              <div className="itemDetail">
                <span className='itemKey'>Address:</span>
                <span className='itemVaue'>KTM ,nepal</span>
              </div>
            </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title='Last 6 mont user revinue:'/>
          </div>
        </div>
        <div className="bottom">
          <h1 className='title'> Last Transaction</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}
