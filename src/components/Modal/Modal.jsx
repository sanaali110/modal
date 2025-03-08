import React, { useState } from 'react'
import './Modal.css';
function Modal() {

  function handleClose(){

  }
  return (
    <div className="modal-wrapper">
    <div className='modal'>
      <div className="modal-header">
        <h5>Login</h5>
      </div>
      <div className="modal-body">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reprehenderit assumenda quas sint magnam adipisci neque corporis. Vitae nobis placeat minima soluta sed odio? Natus quas blanditiis ad voluptas aliquam.
        <form>
        <input type="email" className='input-styles' placeholder='type your email' />
        <input type="password" className='input-styles' placeholder='type your password' />
        </form>

        
      </div>
      <div className="modal-footer">
        <button className='button login-button'>Login</button>
        <button className='button' onClick="">Cancel</button>
      </div>
      
    </div>
    </div>
  )}


export default Modal
