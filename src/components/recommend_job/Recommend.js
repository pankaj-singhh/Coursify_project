import React from 'react'
// import image from 'image_bg'
import './Recommend.css'
function Recommend(props) {
  return (
    <div>
        <div className='subhome'>
        <a className='ref' href="/">{props.link}</a>
        <p className='start'>{props.job}</p>
        <p className='substart'>{props.subjob}</p>
        
          <img className='image' src="image_bg.png" alt="image" />
        <p className='text'>{props.textimg}</p>
        <p className='subtext'>{props.subtext}</p>
        {/* <a className='brws' href="/"><button>{props.browse}</button></a> */}
        <button className='brws'><a className='only'  href="/">{props.browse}</a></button>
       
        </div>
       
    </div>
  )
}

export default Recommend