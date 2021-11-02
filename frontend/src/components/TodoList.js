import TodoListItem from './TodoListItem'


// todos는 현재 날짜에 해당하는 데이터를 받아온거야
const TodoList = ({todos}) => {
  console.log(todos)
  return (
    <div>
      <div className="day-info-container">
          <div className="day-info-left">
            <div className="day">13</div>
            <div className="day-info-left-inner">
              <div className="month">OCT</div>
              <div className="year">2021</div>
            </div>
          </div>
          <div className="day-info-right">THURSDAY</div>
        </div>
        <div className="list-content-container">
          {todos && todos.map((todo) => {
            return(
              // 여러 종류의 값을 전달해야 하는 경우 객체를 통째로 전달하는 편이 나중에 성능 최적화를 할 때 편하다.
              <TodoListItem key={todo.id} todo={todo}/>
            ) 
          })}
        </div>
    </div>   
  )
}

export default TodoList;