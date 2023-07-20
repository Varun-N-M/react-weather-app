import React from 'react'
import "./currentweather.css"

const Currentweather = ({ currentWeather }) => {

  const { name, icon, description, temp, date} = currentWeather
  
  return (
    <div>
      <div className='current-container'>
        <div className='top-details'>
          <div className='details-container'>
            <p>Now</p>
            <h2 className='temp-value'>{temp} <span className='temp-unit'>°C</span></h2>
            <h5 className='details'>{description}</h5>
          </div>
          <img src={`https://openweathermap.org/img/wn/${icon}@4x.png`} alt='icon' className='icon-img'/>
        </div>
        <hr/>
        <div className='bot-details'>
          <h5 className='bot-detail'>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M4.998 8H19V20H4.998z"></path><path d="M2.999,6v2v12c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2V8V6c0-1.103-0.897-2-2-2h-2V2h-2v2h-6V2h-2v2h-2 C3.896,4,2.999,4.897,2.999,6z M19.001,20H4.999V8h14L19.001,20z"></path></svg>
            <span className='details'>{date}</span>
          </h5>
          <h5 className='bot-detail'>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 12 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
            <span className='details'>{name}</span>
          </h5>
        </div>
      </div>
    </div>
  )
}

export default Currentweather