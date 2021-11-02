import { useState, useRef, useCallback } from "react";
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

  // 값을 변경해도 컴포넌트가 재렌더링되지 않는다.
  const nextId = useRef(8);

  const onInsert = useCallback( text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false
    };
    setTodos(todos.concat(todo));
    nextId.current += 1
  }, [todos])

  return (
    <>
      <Calender/> 
      <TodoTemplate >
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos}/>
      </TodoTemplate>
    </>
  );
}

export default App;

// 새로운 객체를 만들 때마다 id 값에 1씩 더해 주어야 하는데 id 값은 useRef를 사용하여 관리 
// 여기서 useState가 아닌 useRef를 사용하여 컴포넌트에서 사용할 변수를 만드는 이유는 id 값은 렌더링되는 정보가 아니기 때문
// 예를 들어 이 값은 화면에 보이지도 않고, 이 값이 바뀐다고 해서 컴포넌트가 리렌더링될 필요도 없다. 단순히 새로운 항목을 만들 때 참조되는 값일 뿐이다.
// onInsert 함수는 컴포넌트의 성능을 아낄 수 있도록 useCallback으로 감싸 준다. props로 전달해야 할 함수를 만들 때는 useCallback을 사용하여 함수를 감싸는 것을 습관화해야한다.

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