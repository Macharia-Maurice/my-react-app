import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './counterSlice'

export default function Counter() {
    const count=useSelector((state)=>state.counter.count)
    const dispatch=useDispatch()


  return (


    // const template =()=>(

    // )
    <div>
        <p>{count}</p>
        <button onClick={()=>dispatch(increment())}>add</button>
    </div>
  )
}
