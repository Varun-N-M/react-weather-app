import React, { useState } from 'react'
import "./navbar.css"

const Navbar = ({onCityChange,getUserCoordinates}) => {

    const [searchTerm, setSearchTerm] = useState("")

    function handleClick(){
        onCityChange(searchTerm)
    }

    function handleKey(e){
        if(e.key === "Enter"){
            onCityChange(searchTerm)
        }
    }

  return (
    <nav>
        <div className='logo-container'>
            <img 
                src='https://cdn-icons-png.flaticon.com/128/4814/4814489.png' 
                alt='logo'
                autoFocus
                className='logo-img'/>
            <h2 className='logo-title'>weatherio</h2>
        </div>
        <div className='search-container'>
            <input
                type='text'
                placeholder='Search city...'
                className='search-bar'
                onChange={e => setSearchTerm(e.target.value)}
                onKeyDown={handleKey}
            />
            <button className='search-button' onClick={handleClick}>
                <img src='https://cdn-icons-png.flaticon.com/128/2811/2811806.png' className='search-icon'/>
            </button>
        </div>
        <div className='current-location' onClick={getUserCoordinates}>
            <img src='https://cdn-icons-png.flaticon.com/128/1549/1549624.png' className='gps-icon'/>
            <span className='c-l'>Current location</span>
        </div>
    </nav>
  )
}

export default Navbar