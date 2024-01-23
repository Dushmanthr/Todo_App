import React, {useState} from 'react'
//import useState from 'react'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Createform = ({modal, toggle}) => {//destructure properties
     const [taskName, setTaskName]= useState('');
    const [description, setDescription]= useState('');

    const handleChange = (e) =>{
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value);
        }else{
            setDescription(value);
        }
       
    }
 
  return (
    <Modal isOpen={modal} toggle={toggle}>
    <ModalHeader toggle={toggle}>Create Task</ModalHeader>
    <ModalBody>
      <form className="createTask">
        <div className="form-group mt-2">
            <label>Title</label> 
            <input type="text" className='form-control mt-2' value={taskName} name= "taskName" onChange = {handleChange}/>
        </div>
        <div className="form-group mt-2">
            <label >Description</label>
            <textarea name="description" id="" cols="30" rows="5" className="form-control mt-2"  value={description}  onChange = {handleChange} ></textarea>
        </div>
      </form>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={toggle}>
        Create
      </Button>{' '}
      <Button color="secondary" onClick={toggle}>
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
  )
}

export default Createform
