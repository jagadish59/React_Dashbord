import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './table.scss';


const List = () => {
    const rows=[
        {
            id:123123,
            product:"Samsung",
            img:'https://picsum.photos/200/300',
            customer:"Hari karki",
            date:"1 Jun",
            amount:'200',
            method:"cash on delivery",
            status:'Approved'
        },
        {
            id:123124,
            product:"Samsung",
            img:'https://picsum.photos/200/300',
            customer:"Hari karki",
            date:"1 March",
            amount:'200',
            method:"cash on delivery",
            status:'Approved'
        },
        {
            id:123125,
            product:"Samsung",
            img:'https://picsum.photos/200/300',
            customer:"Hari karki",
            date:"1 March",
            amount:'200',
            method:"cash on delivery",
            status:'Approved'
        },
        {
            id:123126,
            product:"Samsung",
            img:'https://picsum.photos/200/300',
            customer:"Hari karki",
            date:"1 March",
            amount:'200',
            method:"cash on delivery",
            status:'Pending'
        },
        
    ]
  return (
     <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Id</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>

            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell  className='tableCell'>Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className='tableCell'>{row.id}</TableCell>
              <TableCell className='tableCell'>
                  <div className="cellwrapper">
                      <img src={row.img} alt='' className='image'/>
                      {row.product}
                  </div>
            </TableCell>
              <TableCell className='tableCell'>{row.customer}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className='tableCell'>
                  <span className={`status ${row.status} `} > {row.status} </span>
                  </TableCell>
              
            </TableRow>
          ))} 
        </TableBody>
      </Table>
    </TableContainer>
    
  )
}

export default List