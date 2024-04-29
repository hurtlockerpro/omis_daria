import React, { useState } from 'react';
import MyButton from '../button/MyButton';


const Counter = () => {
    
  const [clicks, setClicks] = useState(0)

  function increment(){
    console.log('clicked inc')
    setClicks(clicks + 1) 
  }

  function decrement(){
    console.log('clicked dec')
    setClicks(clicks - 1)
  }

  const containerCss = { 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center' 
  } 

    return (
        <div style={containerCss}>

            <h1>{clicks}</h1>

            <div style={ { display: 'flex', justifyContent: 'space-between'} }>
                <MyButton title="+1" onClickFn={increment} />
                <MyButton title="-1" onClickFn={decrement} />
            </div>
        </div>
    );
};

export default Counter;