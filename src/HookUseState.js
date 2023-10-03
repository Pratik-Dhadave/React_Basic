import React,{useState}from 'react'

const HookUseState = () => {
const [count , setCount] = useState(0);
  const addCount = ()=>{
    setCount(()=>count+1);
  }

  const subCount = () =>{
    setCount(()=>count-1);
  }

  return (
    <div>
      <button onClick={subCount}>-</button>
      <span>{count}</span>
      <button onClick={addCount}>+</button>
    </div>
  )
}

export default HookUseState