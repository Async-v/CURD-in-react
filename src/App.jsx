import React from "react";
import { useState } from "react";

const App = () => {

  const [todos, settodos] = useState([
    {id: 1, title: "kamm karle bhai", isCompleted: false}
  ]);

  const [title, settitle] = useState("")
  const [completed, setcompleted] = useState(true)
  const [gender, setgender] = useState("male")
  const [city, setcity] = useState("mumbai")

  return(
    <div>
      <h1>Form way binding form element</h1>
      <form>
        <input onChange={(e)=> settitle(e.target.value)} value={title} type="text" placeholder="title"/>
        <br/>
        <br/>
        <input onChange={(e)=> setcompleted(e.target.checked)} checked={completed} type="checkbox" /> Completed
        <br/>
        <br/>
        <input onChange={(e)=>setgender(e.target.value)} value="male" checked={gender == "male" && true} type="radio" /> male
        <input onChange={(e)=>setgender(e.target.value)} value="female" checked={gender == "female" && true} type="radio" /> female
        <br/>
        <br/>
        <select value={city} onChange={(e)=> setcity(e.target.value)}>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
          <option value="kolkata">Kolkata</option>
        </select>
      </form>
    </div>
  );
};

export default App;
