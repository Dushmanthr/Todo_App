import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { GiTrashCan } from "react-icons/gi";
import { FaCheck } from "react-icons/fa6";
import "./card.css"

const Card = () => {
  return (
    <div className="card-wrapper mr-5">
        <div className="card-top">
            
        </div>
        <div className="task_holder">
        <span className="card-header">
            Lorem, ipsum.        
        </span>
        <div>
        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        
        <div className="icons">
            <i className="edit"><FaRegEdit /></i>
            <i className="trash"><GiTrashCan /></i>
            <i className="check"><FaCheck /></i>
        </div>     
        </div>
    </div>
  )
}

export default Card


