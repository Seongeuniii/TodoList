import { useEffect, useState } from "react";
import Axios from 'axios';
import TodoList from "./components/TodoList";
// import AddList from "./components/AddList";

function App() {
  const [datas, setDatas] = useState(null)

  useEffect (() => {
    Axios.get('http://localhost:5000')
    .then ((res) => {
      setDatas(res.data)
    })
    .catch ((e) =>{
      console.log(e);
  })},[]);
    
  return (
    <>
      <TodoList datas={datas}/>
      {/* <AddList/> */}
    </>

  );
}

export default App;