import React from 'react'
// import 'styles/_colors.scss'
import './home.scss'


import Sidebar from '../../../components/dashbord/sidebar/Sidebar'
import Navbar from '../../../components/dashbord/navbar/Navbar'
import Widget from '../../../components/dashbord/widget/Widget'
import Feature from '../../../components/dashbord/feature/Feature'
import Chart from '../../../components/dashbord/char/Chart'
import Table from '../../../components/dashbord/table/Table'
export const Homes = () => {
  return (
    

    <div className='home'>
      <Sidebar/>
      <div className='homecontainer'>
        <Navbar/>
      <div className="widgets">
        <Widget type='user'/>
        <Widget type='order'/>
        <Widget  type='earning'/>
        <Widget type='balance'/>
      </div>
      <div className="charts">
        <Feature/>
        <Chart aspect={2/1} title="last 6 month Revinue"/>
      </div>
      <div className="listContainer">
        <div className="listTitle">Latest Transction</div>
        <Table/>
      </div>
    
      </div>

    </div>


  )
}
