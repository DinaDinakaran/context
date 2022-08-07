import React, { useState, useContext } from 'react'
import { StudentContext } from "../../../App"
import "./addstudent.css"
import { useNavigate } from "react-router-dom"

export default function Addstudent() {
  const navigate = useNavigate()
  var context = useContext(StudentContext);
  var value = context.studata
  var value1 = value.length
  const id = ++value1

  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [age, setAge] = useState(0)
  const [rank, setRank] = useState(0)
  const [name, setName] = useState('')
  const handleAdd = () => {
    const addstu = [...context.studata]
    const data = {
      id,
      name,
      email,
      age,
      phone,
      rank
    }
    addstu.push(data)
    context.setStudata(addstu)
    navigate("/allstudents")
  }
  return (
    <div className='addstudent'>
      <>
        <label className='title'>Name:</label><br />
        <input className='inputval' type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
        <label className='title'>Email:</label><br />
        <input className='inputval' type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <label className='title'>Age:</label><br />
        <input className='inputval' type="number" value={age} onChange={(e) => setAge(e.target.value)} /><br />
        <label>phon Number:</label><br />
        <input className='inputval' type="text" value={phone} onChange={(e) => setPhone(e.target.value)} /><br />
        <label className='title'>Rank:</label><br />
        <input className='inputval' type="text" value={rank} onChange={(e) => setRank(e.target.value)} />
        <br />
        <button className='submit-btn' onClick={() => handleAdd()}>Add Student</button>
      </>
    </div>
  )
}
