import { useRef } from "react";

 
export default function Six() {
   const input=useRef();

     const handleFocus=()=>{    
        input.current.focus();
     }

     return (
        <>
         <div style={{border:"1px solid black",width:"200px",margin:"2%"}}>
          <input ref={input} />
          <button onClick={handleFocus}>Focus Input</button>
          </div>
        </>
     )
}
