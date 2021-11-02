import { useState } from "react";
// import Axios from 'axios';
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import Calender from "./components/Calender";

function App() {
  
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Buy new sweatshirt',
      checked: false
    },
    {
      id: 2,
      text: 'Begin promotional phase',
      checked: true
    },
    {
      id: 3,
      text: 'Read and article',
      checked: false
    },
    {
      id: 4,
      text: 'Try not to fall asleep',
      checked: false
    },
    {
      id: 5,
      text: "Watch 'Sherlock'",
      checked: false
    },
    {
      id: 6,
      text: "Begin QA for the product",
      checked: false
    },
    {
      id: 7,
      text: "Go for a walk",
      checked: false
    }
  ])

  // useEffect (() => {
  //   Axios.get('http://localhost:5000')
  //   .then ((res) => {
  //     console.log(res.data)
  //     settodos(res.data)
  //   })
  //   .catch ((e) =>{
  //     console.log(e);
  // })
  // },[]);

  console.log(todos)
  return (
    <>
      <Calender/> 
      <TodoTemplate >
        <TodoInsert/>
        <TodoList todos={todos}/>
      </TodoTemplate>
    </>
  );
}

export default App;