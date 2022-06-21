import React, { useContext } from 'react'
// import './sidebar.scss'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Link } from 'react-router-dom';
import { darkModeCreateContext } from '../../../createContext/DarkModeContext';

const Sidebar = () => {

    const { dispatch }=useContext(darkModeCreateContext)
    return (
        <div className='sidebar'>
            <div className='top'>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <span className='logo'>Dashbord</span>
                </Link>
            </div>
            <hr />

            <div className='center'>
                <ul>
                    <p className="title">Main</p>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                    <li>
                        
                            <DashboardIcon className='icon' />
                            <span>Dashbored</span>
                        
                    </li>
                    </Link>
                    <p className="title">LIST</p>
                    
                        <Link to='/users' style={{ textDecoration: 'none' }}>
                        <li>
                            <PersonOutlineIcon className='icon' />
                            <span>Users</span>
                            </li>
                        </Link>
                    
                        <Link to='/product' style={{ textDecoration: 'none' }}>
                    <li>
                        
                            <AccountCircleIcon className='icon' />
                            <span>Profile</span>
                        
                    </li>
                    </Link>
                    <li>
                        <ExitToAppOutlinedIcon className='icon' />
                        <span>Logout</span>
                    </li>
                    <li>
                        <SettingsOutlinedIcon className='icon' />
                        <span>Setting</span>
                    </li>
                </ul>
            </div>
            <div className='bottom'>
                <div className="coloroption" onClick={()=>dispatch({type:"Light"})}></div>
                <div className="coloroption" onClick={()=>dispatch({type:"Dark"})}></div>
            </div>
        </div>
    )
}

export default Sidebar