import react from "react";

export default function One() {
    let [count,setConunt] = react.useState(0);
    return (
        <div style={{border:"1px solid black",width:"200px",margin:"2%"}}>
            <h2>Program 1</h2>
            <h4>Count: {count}</h4>
            <button onClick={() => setConunt(count + 1)}>Increment</button> 

            <button onClick={() => setConunt(count - 1)}>Decrement</button> 
            <button onClick={() => setConunt(0)}>Reset</button>
        </div>
    )
}