import  React, { useState , useEffect } from 'react'

export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div style={{marginLeft:"100px"}}>
            <br/>            <p style={{color:"white",fontSize:"50px",fontFamily:"serif"}}>  
            {date.toLocaleTimeString()}</p>
           
          <p style={{color:"white",fontSize:"50px",fontFamily:"serif"}}>  {date.toLocaleDateString()}</p>

        </div>
    )
}

export default DateTime;