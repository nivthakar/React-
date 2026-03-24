import React, { createContext, useContext } from 'react'

const ThemeContext = createContext();

function NineChild() {

  const theme = useContext(ThemeContext);

  return <h2>{theme}</h2>;
}

export default function Nine() {

  return (
    <>
      <div style={{border:"1px solid black",width:"200px",margin:"2%"}}>
         <h2>Program 9</h2>
      <ThemeContext.Provider value="Dark Theme">
        <NineChild />
      </ThemeContext.Provider>
      </div>
    </>
  );

}