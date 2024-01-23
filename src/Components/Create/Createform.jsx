import React from 'react'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Createform = ({modal, toggle}) => {//destructure properties
  return (
    <Modal isOpen={modal} toggle={toggle}>
    <ModalHeader toggle={toggle}>Create Task</ModalHeader>
    <ModalBody>
      <form className="createTask">
        <div className="form-group mt-2">
            <label>Title</label>
            <input type="text" className='form-control mt-2'/>
        </div>
        <div className="form-group mt-2">
            <label >Description</label>
            <textarea name="" id="" cols="30" rows="5" className="form-control mt-2"></textarea>
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
