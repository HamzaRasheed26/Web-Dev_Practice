import React, {useState} from 'react'

export default function Form() {
    const [color, setColor] = useState("#555555");

    const ChangeColor = () => {
        setColor("green");
    };

  return (
    <div >
      <h1>Color Picker</h1>
      <div className='form' style={{backgroundColor: `${color}`}}>
        <h2>Form</h2>
        <div className='name'>
            <input type="text" placeholder='First name' className='first'/>
            <input type="text" placeholder='Last name'className='last'/>
        </div>
        <br />
        <input type="text" placeholder='Address' className='address'/> <br />
        <input type="text" placeholder='Email' className='email'/> <br />
        <input type="text" placeholder='Phone' className='phone'/> <br />
        <input type="color" name="" className="colorPicker" placeholder='Color Picker'/> <br />
        <button className='submit' onClick={ChangeColor}>Change Color</button>
      </div>
      
    </div>
  )
}
