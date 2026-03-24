export const Form =()=>{
    return(
        <div>
            <h1>Form</h1>
            <p>This is the Form page.</p>
            <div className="t1">
                <form className="form-container">   
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" size="30" />
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" />
                <label htmlFor="contact">Contact no:</label>
                <input type="text" id="contact" name="contact" />
                <label htmlFor="password">Password:</label>
                <input type="text" id="password" name="password" />
                <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}