import styled from 'styled-components'
import plus from '../img/plusbutton.png'
// import Axios from 'axios';
import { useState, useCallback } from 'react';

const AddButton = styled.img`
  width: 45px;
  height: 45px;
  position: absolute;
  top: 525px;
  cursor: pointer;
`

// 여기서 input 상태관리하고, app 컴포넌트에는 todos 배열에 새로운 객체를 추가하는 함수를 만들어야함
const TodoInsert = ({onInsert}) => {

  const [value, setValue] = useState('');

  const onSubmit = useCallback(e => {
    onInsert(value);
    setValue('');
    e.preventDefault();
  }, [onInsert, value]);

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  return(
    // <form onSubmit={onSubmit}>
    //   <AddButton onClick={addSchedule} src={plus} alt="일정추가"></AddButton>
    // </form>
    <form onSubmit={onSubmit}>
      <input
        placeholder='할 일을 입력하세요'
        value={value}
        onChange={onChange}
      />
      <button type='submit'>등록</button>
    </form>

  )
}

export default TodoInsert;