import { useState,useEffect } from "react"
function useclock(){
    const[time,setTime]=useState(new Date())

    useEffect(()=>{
        const timer = setInterval(()=>{
            setTime(new Date())
        },1000)
        return()=>clearInterval(timer)
    },[])
    return time
}
export default useclock