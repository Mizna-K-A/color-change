import './App.css'
import React, { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('black');

  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <>
     <div className='d-flex justify-content-center align-item-center mt-4'>
       <div className='text-center' style={{width:'800px',height:'600px',backgroundColor:bgColor}}>
        <h4 className='text-light mt-5'>Background color Change</h4>
        <button onClick={() => changeColor('red')} className='button-style'>Red</button>
        <button onClick={() => changeColor('blue')} className='button-style'>Blue</button>
        <button onClick={() => changeColor('green')} className='button-style'>Green</button>
        <button onClick={() => changeColor('purple')} className='button-style'>Purple</button>
        <button onClick={() => changeColor('orange')} className='button-style'>Orange</button>
       </div>
     </div>
    </>
  )
}

export default App
