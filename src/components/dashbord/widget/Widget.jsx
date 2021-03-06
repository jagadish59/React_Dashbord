import React from 'react'
import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

import CreditCardIcon from '@mui/icons-material/CreditCard';

const Widget = ({ type }) => {
    let data;
    let amount=100;

    switch (type) {
        case 'user':
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <PersonOutlineOutlinedIcon className='icon' />

            }
            break;
        case 'order':
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "See all orders",
                icon: <StorefrontIcon className='icon' />

            }
            break;
        case 'earning':
            data = {
                title: "Earning",
                isMoney: true,
                link: "See all earning",
                icon: <CurrencyRupeeIcon className='icon' />

            }
            break;
        case 'balance':
            data={
                title:"Balance",
                isMoney:true,
                link:"See all balance",
                icon:<CreditCardIcon className='icon'/>
            }
            break;



        default:
            break;


    }
    return (
        <div className='widget'>
            <div className="left">
                <span className='title' >{data.title}</span>
                <span className="counter">{data.isMoney&& '$'}{amount} </span>
                <span className="link">{data.link} </span>
            </div>
            <div className="right">
                <div className="percntage">
                    <KeyboardArrowUpOutlinedIcon />

                    20%
                </div>
                {data.icon}
            </div>
        </div>

    )
}

export default Widget