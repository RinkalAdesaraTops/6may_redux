import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './reduxtoolkit/CounterReducer'
import { add, deleteuser } from './reduxtoolkit/UserDataReducer'

function App() {
  const count = useSelector((state)=>state.Counter.count)
  const data = useSelector((state)=>state.Users.data)

  const [udata,setUdata] = useState({
    id:"",
    name:"",
    age:""
  })

  const handleChange = (e)=>{
    const {name,value} = e.target
    setUdata({
      ...udata,
      [name]:value
    })

  }
  const dispatch = useDispatch()

  const saveData = (e)=>{
    e.preventDefault()
    udata.id = data.length!=0?data.length+1:1
    dispatch(add(udata))
  }
  return (
    <>
      <h4>Redux Toolkit Example</h4>
      <h5>Counter is -- {count}</h5>
      <button onClick={()=>dispatch(increment())}>Add</button>
      <button onClick={()=>dispatch(decrement())}>Minus</button>
      <form action="#" method='post' name='frm' onSubmit={saveData}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" id="" value={udata.name} onChange={handleChange}/><br /><br />

        <label htmlFor="">Age</label>
        <input type="text" name="age" id="" value={udata.age} onChange={handleChange}/><br /><br />

    <input type="submit" value="Save Data" />
      </form>
      <table border={"2"}>
        <tr>
          <td>ID</td>
          <td>NAME</td>
          <td>AGE</td>
          <td>Action</td>
        </tr>
        {
          data.map((i)=>{
return(
  <tr>
          <td>{i.id}</td>
          <td>{i.name}</td>
          <td>{i.age}</td>
          <td><button onClick={()=>dispatch(deleteuser(i.id))}>Delete</button></td>
        </tr>
)
          })
        }
      </table>
    </>
  )
}

export default App
