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
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"></path></svg>
            </button>
        </div>
        <div className='current-location' onClick={getUserCoordinates}>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M13,4.069V2h-2v2.069C7.389,4.522,4.523,7.389,4.069,11H2v2h2.069c0.454,3.611,3.319,6.478,6.931,6.931V22h2v-2.069 c3.611-0.453,6.478-3.319,6.931-6.931H22v-2h-2.069C19.478,7.389,16.611,4.522,13,4.069z M12,18c-3.309,0-6-2.691-6-6s2.691-6,6-6 s6,2.691,6,6S15.309,18,12,18z"></path></svg>
            <span className='c-l'>Current location</span>
        </div>
    </nav>
  )
}

export default Navbar