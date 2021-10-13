import styled from "styled-components";
import TodoList from "./components/TodoList";

const Container = styled.div`
  width: 370px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-items: center;
`

function App() {

  return (
    <Container>
      <TodoList/>
    </Container>
  );
}

export default App;