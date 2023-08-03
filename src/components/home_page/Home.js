
import'./Home.css';

import React from 'react'

function home() {
  return (
    <div>
       <div className='main'>
       <a  className='profile' href="/">view your public profile</a>
       <a  className='edit' href="/">Edit</a>
        <p className='name'>User Name</p>
        <p className='add'>Address</p>
        <p className='head'>Where are you in your job search?</p>
        <p className='subhead'>Keep your job status up-to-date to inform employers of your search.</p>
       
          <select  id="menue">
          <option value="ready">Ready to interwiev</option>
           <option value="open">Open to offer</option>
           <option value="colse">Close offer</option>
          
          </select>
       
        
      
        
       
       </div>
       
    </div>
  )
}

export default home