import React, { useState } from 'react'
import Navbar from '../../../components/dashbord/navbar/Navbar';
import Sidebar from '../../../components/dashbord/sidebar/Sidebar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import './new.scss';

export const New = ({inputs,title}) => {
  const[file,setFile]=useState('')
  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1 className="title">{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file?URL.createObjectURL(file):"https://picsum.photos/200/300?nature"} alt="" className="image" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor='file'> Image:<DriveFolderUploadIcon className='icon'/></label>
                <input type='file' onChange={(e)=>setFile(e.target.files[0])} id='file' style={{display:'none'}}/>
              </div>
              {
                inputs.map((user)=>(
                  <div className="formInput" key={user.id}>
                  <lable>{user.lebel}</lable>
                  <input type={user.type} placeholder={user.placeholder} />
                  </div>

                ))
              }

              {/* <div className="formInput">
              <lable>Name and sername</lable>
              <input type='text' placeholder='Name and sername'/>
              </div>
              <div className="formInput">
              <lable>Phone Number</lable>
              <input type='text' placeholder='1234567'/>
              </div>
              <div className="formInput">
              <lable>Email</lable>
              <input type='email' placeholder='hello@gmail.com'/>
              </div>
              <div className="formInput">
              <lable>Password</lable>
              <input type='password' placeholder='**********'/>

              </div>
              <div className="formInput">
              <lable>Address</lable>
              <input type='text' placeholder='Nepal,ktm'/>
              </div>
              <div className="formInput">
              <lable>Country</lable>
              <input type='text' placeholder='Nepal'/>
              </div> */}
              <button>send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
