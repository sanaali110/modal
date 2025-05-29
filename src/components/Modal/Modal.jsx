import React from 'react'
import './Modal.css';

function Modal(props) {
  const { title, children } = props
  return (
    <div className="modal-wrapper">
      <div className='modal'>
        <div className="modal-header">
          <h2>{title}</h2>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  )
}


export default Modal
