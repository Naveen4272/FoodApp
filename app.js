import React from "react";
import ReactDOM from "react-dom/client"

const Title=()=>{
  return(
    <div className="title">
      <h1>title</h1>
    </div>
  )
}

const Heading=()=>{
  return(
    <div id="heading">
      <Title/>
      <Title></Title>
      {Title()}
      {10000}
      <h1>heading</h1>
    </div>
  )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>)
