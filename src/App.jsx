import { Fragment, useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {

  const [todos, settodos] = useState([
    { id: 1, title: "kamm karle bhai", isCompleted: false }
  ]);


  return (
    <div className="w-screen h-screen flex bg-gray-700 p-10">
      <Create todos={todos} settodos={settodos} />
      <Read todos={todos} settodos={settodos} />
    </div>
  );
};

export default App;
