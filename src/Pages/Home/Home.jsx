import React from 'react'
import {useState} from 'react'

import './home.css'
import Createform from '../../Components/Create/Createform'

const Home = () => {
  const [modal, setModal] = useState(false);

  const toggle = () =>{
    setModal(!modal);
  }
  return (
    <>
    <div className= "header text-center">
      <h1>Todo List</h1>
      <button className='btn btn-primary mt-2'  onClick= {()=>setModal(true)} >Create Task</button>
    </div>

    <div className='task-container'>

    </div>

   <Createform toggle= {toggle} modal={modal}/> 
    </>
    
  )
}

export default Home
