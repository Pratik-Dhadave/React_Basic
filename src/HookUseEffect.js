import React,{useEffect,useState} from 'react'

const HookUseEffect = () => {
    const [count , setCount] = useState(0);
    const addCount = ()=>{
      setCount(()=>count+1);
    //   console.log(count);
    }
  
    const subCount = () =>{
      setCount(()=>count-1);
    //   console.log(count)
    }
  
    useEffect (()=>{
      console.log("i ran");
    })
  
    return (
      <div>
        <button onClick={subCount}>-</button>
        <span>{count}</span>
        <button onClick={addCount}>+</button>
      </div>
    )
}

export default HookUseEffect