import './App.css';

import { useState } from 'react';

function App() {
  const [showModal, setShowModal]= useState(false);

  function handleClick() {
    setShowModal(!showModal);
    
  }
  return (
    <div className="App">
      <button type='button' className='button' onClick={handleClick}>Login to the dashboard</button>
      {showModal &&  
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
        <button className='button' onClick={handleClick}>Cancel</button>
      </div>
      </div>
    </div>}
    </div>
  );
}

export default App;
