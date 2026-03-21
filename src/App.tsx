import { Activity } from "react";
import Header from "./Header";
function App() {

  return (
    <div>
      {/*  */}
      <Header user="Edwin"/>
      <p>Right now i can import</p>
      <ul>
        {activities.map((item, index)=>(
          <li>
            key={index}>{item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
