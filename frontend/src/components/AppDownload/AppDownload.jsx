import React from 'react'
// import react librairies that allow us to react components
import "./AppDownload.css"
import { assets } from '../../assets/assets'


const AppDownload = () => {
  
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download <br /> Chrystal Legacy App</p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}
//----------------------------[app download]
export default AppDownload