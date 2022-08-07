import React from 'react'
import "./navbar.css"
import profileimg from "./natasha.png"

//icons-search
import SearchIcon from '@mui/icons-material/Search';

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="navbarwarrap">
            <div className="rightcontend">
              <div className="navbarTitle">
                School Manegment
              </div>
            </div>
            <div className="leftcontend">
              <div className="searchbar">
                <input type="text" placeholder='Search..' className="searchbox" />
                <SearchIcon className='searchbtn'/>
              </div>
              <div className="profile">
                <img src={profileimg} alt="name" className="profileImg" />
                <span className="profileName">Natasha</span>
              </div>
            </div>
        </div>
    </div>
  )
}
