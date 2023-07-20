import React from 'react'
import "./highlights.css"

const Highlights = ({ moreDetails }) => {

    const{ feels_like,temp_min,temp_max,pressure,humidity,sunrise,sunset,speed,visibility } = moreDetails

    const convertTimestamptoTime = (timestamp) => {
      const date = new Date(timestamp * 1000)
      const hours = date.getHours()
      const minutes = date.getMinutes()
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = (hours % 12 === 0) ? 12 : hours % 12;
      const formattedMinutes = minutes.toString().padStart(2, '0');
      return `${formattedHours}:${formattedMinutes} ${ampm}`;
    }

    const formattedSunrise = convertTimestamptoTime(sunrise)
    const formattedSunset = convertTimestamptoTime(sunset);

  return (
    <div className='highlights-container'>
      <p>Today's Highlights</p>
      <section className='top-container'>
          <div className='temp-container'>
            <h4>Temperature details:</h4>
            <div className='temp-details'>
              <img src='https://cdn-icons-png.flaticon.com/128/1684/1684324.png' className='t-icon' alt='icon'/>
              <div className='t-d'>
                <div className='f-l'>
                  <h5>Feels like: </h5>
                  <span>{feels_like}°C</span>
                </div>
                <div className='mi-t'>
                  <h5>Min Temp: </h5>
                  <span>{temp_min}°C</span>
                </div>
                <div className='ma-t'>
                  <h5>Max Temp: </h5>
                  <span>{temp_max}°C</span>
                </div>
              </div>
            </div>
          </div>
          <div className='sun-container'>
            <h4>Sunrise & Sunset:</h4>
            <div className='sun-details'>
              <div className='rise-container'>
                <img src='https://cdn-icons-png.flaticon.com/128/3920/3920639.png' className='r-icon' alt='icon'/>
                <div className='rise-details'>
                  <h5>Sunrise:</h5>
                  <span>{formattedSunrise}</span>
                </div>
              </div>
              <div className='set-container'>
              <img src='https://cdn-icons-png.flaticon.com/128/3920/3920728.png' className='s-icon' alt='icon'/>
                <div className='set-details'>
                  <h5>Sunset:</h5>
                  <span>{formattedSunset}</span>
                </div>
              </div>
            </div>
          </div>           
      </section>

      <section className='bot-container'>
          <div className='d-container'>
            <h5>Pressure:</h5>

            <div className='d-details'>
              <img src='https://cdn-icons-png.flaticon.com/128/7334/7334246.png' className='d-icon' alt='icon'/>
              <span>{pressure} hPa</span>
            </div>
          </div>
          <div className='d-container'>
            <h5>Humidity:</h5>
            <div className='d-details'>
              <img src='https://cdn-icons-png.flaticon.com/128/727/727790.png' className='d-icon' alt='icon'/>
              <span>{humidity} %</span>
            </div>
          </div>
          <div className='d-container'>
            <h5>Visibility:</h5>
            <div className='d-details'>
              <img src='https://cdn-icons-png.flaticon.com/128/3395/3395544.png' className='d-icon' alt='icon'/>
              <span>{visibility/1000} km</span>
            </div>
          </div>
          <div className='d-container'>
            <h5>Wind speed:</h5>
            <div className='d-details'>
              <img src='https://cdn-icons-png.flaticon.com/128/6015/6015171.png' className='d-icon' alt='icon'/>

              <span>{speed} kmph</span>
            </div>
          </div>
      </section>
        
    </div>
  )
}

export default Highlights