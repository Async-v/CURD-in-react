import { Fragment, useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {

  const [todos, settodos] = useState([
    { id: 1, title: "kamm karle bhai", isCompleted: false }
  ]);


  return (
    <Fragment>
      <Create todos={todos} settodos={settodos} />
      <br />
      <hr />
      <br />
      <Read todos={todos} settodos={settodos} />
    </Fragment>
  );
};

export default App;
