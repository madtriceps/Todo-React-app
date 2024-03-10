import { useState } from 'react'
import './Counter.css'
import CounterButton from './CounterButton'

export default function Counter(){
    const [count,setCount]=useState(0)

    function incrementCounterParentMethod(by){
        setCount(count+by)
    }

    function decrementCounterParentMethod(by){
        setCount(count-by)
    }

    function reset(){
        setCount(0)
    }
    return(
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1}  
                           incrementMethod={incrementCounterParentMethod} 
                           decrementMethod={decrementCounterParentMethod}/>
            <CounterButton by={2}
                           incrementMethod={incrementCounterParentMethod}
                           decrementMethod={decrementCounterParentMethod}/>
            <CounterButton by={5}  
                           incrementMethod={incrementCounterParentMethod} 
                           decrementMethod={decrementCounterParentMethod}/>
            <button className ="resetButton" 
                        onClick={reset}
                >Reset</button>
        </>    
    )
}
