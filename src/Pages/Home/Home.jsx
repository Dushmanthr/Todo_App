import React from 'react'
import {useState} from 'react'

import './home.css'
import Createform from '../../Components/Create/Createform'
import Card  from '../../Components/Card/Card'

const Home = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([])

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
     <Card /> 
     <Card /> 
     <Card /> 
     <Card /> 
     <Card /> 
     <Card /> 
    </div>

   <Createform toggle= {toggle} modal={modal}/> 
    </>
    
  )
}

export default Home
