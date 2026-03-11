export const Info = () =>{
    const name = "Krish"
    return(
        <div className="info">
            <h1>This is the Info Component</h1>
            <p>My name is {name}</p>
        </div>
        )
}

export const Info2 = () =>{
    let a=21;
    let b=10;
    return(
        <div className="info2">
            <h1>This is the Info2 Component</h1>
            <p>Sum of a and b is {a+b}</p>
            </div> 
        )
}
