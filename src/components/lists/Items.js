import React, {useEffect, useRef, useState} from 'react'
import { v4 as uuidv4 } from "uuid";

const Items = () => {
  const text = useRef();
  const [data, setData] = useState([]);


  useEffect(() => {
    const setData = () => {

      const getData = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];

      console.log(data.id)
      if (data.id !== undefined) {
        getData.push(data)
      }
      localStorage.setItem("list", JSON.stringify(getData))
    }
   
    return setData(); 
  }, [data])

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({
      id: uuidv4(),
      name: text.current.value,
    })
    
    text.current.value = ""
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={text} type="text" />
        <button>submit</button>
      </form>
      <div>

      </div>
    </>
  )
}

export default Items