import React from 'react'
import './feature.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
const Feature = () => {
  return (
    <div className='feature' >
        <div className="top">
            <h1 className="title">Total revinue</h1>
            <MoreVertIcon fontSize='small'/>

        </div>
        <div className="bottom">
            <div className="featureChart">
                <CircularProgressbar value={70} text='70%' strokeWidth={5}/>
            </div>
            <p className="title">Totle sale made today</p>
            <p className="amount">$240</p>
            <p className="disc">This is Compont the amout.Title isa laso the good</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult">
                    <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                        <div className="resultAmount">$12.4K</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last week</div>
                    <div className="itemResult positive">
                    <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                        <div className="resultAmount">$12.4K</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last month</div>
                    <div className="itemResult negative">
                    <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                        <div className="resultAmount">$12.4K</div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Feature