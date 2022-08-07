import React, { useState, useContext } from 'react'
import { StudentContext } from "../../../App"
import { useParams, useNavigate } from "react-router-dom"
import "./edit.css"

export default function Edit() {
  const navigate = useNavigate()
  const params = useParams();
  const id = params.id
  const context = useContext(StudentContext);
  const Maincontext = context.studata
  const data = Maincontext.filter((e) => e.id === id)
  const [email, setEmail] = useState(data[0].email)
  const [phone, setPhone] = useState(data[0].phone)
  const [age, setAge] = useState(data[0].age)
  const [rank, setRank] = useState(data[0].rank)
  const [name, setName] = useState(data[0].name)




  const handleupdate = () => {
    const resultdata = [...context.studata]
    const datas = {
      id,
      name,
      email,
      age,
      phone,
      rank
    }
    resultdata.splice(id - 1, 1, datas)
    context.setStudata(resultdata)
    navigate("/allstudents")
  }

  return (
    <div className='Edit'>
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
        <button className='submit-btn' onClick={() => handleupdate()}>Update</button>
      </>

    </div>
  )
}
