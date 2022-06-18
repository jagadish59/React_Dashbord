import React, { useState } from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userrow, usercolumns } from '../../../DataTable'
import { Link } from 'react-router-dom';






const DataTable = () => {
  const [data, setData] = useState(userrow);

  const actionColum = [
    {
      field: 'action', headerName: 'Actions', width: 200,
      renderCell: (params) => {
        return (
          <div className='cellAction'>
            <Link to='/users/test' style={{ textDecoration: 'none' }} className='link'>
              <div className='viewButton'> View</div>
            </Link>
            <div className='deleteButton' onClick={() => setData(data.filter(item => item.id !== params.row.id))}> Delete</div>

          </div>
        )
      }

    }
  ]

  return (
    <div className='datatable'>
      <div className="dataTableTitle">
        Add New User
        <Link to='/users/new' style={{ textDecoration: 'none' }} className='link'>
          Add user
        </Link>
      </div>
      <DataGrid
        className='dataGrid'
        rows={data}
        columns={usercolumns.concat(actionColum)}
        pageSize={9}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />

    </div>
  )
}

export default DataTable