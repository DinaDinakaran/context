import React, { useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import "./app.css"
import Sidebar from "./component/sidebar/Sidebar"
import Home from "./Pages/home/Home"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Student from './component/Student/Student'
import AllStudents from './component/Student/All-Students/AllStudents'
import SrudentsData from "../src/data.json"
import Addstudent from './component/Student/Add-student/Addstudent'
import Edit from './component/Student/Edit/Edit'

export const StudentContext = React.createContext();
//please click student button one ui .......

export default function App() {
  const [studata, setStudata] = useState(SrudentsData);
  return (
    <Router>
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <StudentContext.Provider value={{ studata, setStudata }}>
          <Routes>
            <Route path="/student" element={<Student />} />
            <Route path="/allstudents" element={<AllStudents />} />
            <Route path='/addstudent' element={<Addstudent />} />
            <Route path='/edit/:id' element={<Edit />} />
          </Routes>
        </StudentContext.Provider>




      </div>
    </Router>


  )
}
