import React, {useState} from 'react'

export default function Form() {
    const [color, setColor] = useState("#555555");

    const ChangeColor = () => {
        setColor("green");
    };

  return (
    <div style={{backgroundColor: `${color}`}}>
      <h1>Hamza</h1>
      <button onClick={ChangeColor}>Click me</button>
    </div>
  )
}
