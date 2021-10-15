import { useEffect, useState } from "react";
import Axios from 'axios';
import TodoList from "./components/TodoList";
import Calender from "./components/Calender";

function App() {
  const [datas, setDatas] = useState(null)

  useEffect (() => {
    Axios.get('http://localhost:5000')
    .then ((res) => {
      console.log(res.data)
      setDatas(res.data)
    })
    .catch ((e) =>{
      console.log(e);
  })
  },[]);
    
  return (
    <>
      <Calender/>
      {/* <TodoList datas={datas}/> */}
    </>

  );
}

export default App;