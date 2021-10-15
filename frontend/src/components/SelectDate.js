import { useState } from "react"

const SelectDate = ({date}) => {
  const [checked,setChecked] = useState(false)

  const selectDate = () => {
    if (checked === true) {
      setChecked(false)
    } else {
      setChecked(true)
    }
  }
  return(
    <>
    {checked === false
      ? <div onClick={selectDate}>{date}</div>
      : <div className="selecteddate" onClick={selectDate}>{date}</div>

    }
    </>
  )
}

export default SelectDate