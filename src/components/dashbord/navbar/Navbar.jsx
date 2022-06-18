import React, { useContext } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import './navbar.scss'
import { darkModeCreateContext } from '../../../createContext/DarkModeContext';
const Navbar = () => {
  const { dispatch }=useContext(darkModeCreateContext)
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Enter...' />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className='icon'/>
              English
          </div>
          <div className="item" onClick={()=>dispatch({type:'togle'})}>
            <DarkModeOutlinedIcon   className='icon'/>
          </div>
          <div className="item">
            <SettingsOutlinedIcon className='icon'/>

            <div className="counter">1</div>
              
          </div>
          <div className="item">
            <NotificationsOutlinedIcon className='icon'/>
            <div className="counter">2</div>
              
          </div>
          <div className="item">
            <img 
            src='https://picsum.photos/200/300'
            className='avatar'
            alt=''
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar