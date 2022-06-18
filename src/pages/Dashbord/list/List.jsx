import React from 'react'
import DataTable from '../../../components/dashbord/datatable/DataTable'
import Navbar from '../../../components/dashbord/navbar/Navbar'
import Sidebar from '../../../components/dashbord/sidebar/Sidebar'
import './list.scss'

export const List = () => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DataTable/>
      </div>

    </div>
  )
}
