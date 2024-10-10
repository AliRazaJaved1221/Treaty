import React from 'react'

export default function About() {
  return (
  <div>
    <div className='icons'>
    <div className='row' >
      <div className='col-lg-2 cards1'>
      <div className='circle1'><img src='./pics/chat.png' className='mini_icons' alt='chat'/></div>
      <p className='messaging'>Messaging</p>
      <p className='messaging2'>Direct and Group <br/>Message your team</p>
      </div>
      <div className='col-lg-2 cards1'>
      <div className='circle1'><img src='./pics/medication.png' className='mini_icons' alt='Medication'/></div>
      <p className='messaging'>Medication</p>
      <p className='messaging2'>Track supply and <br/>medication refills by last 
      <br/>requested date by <br/>patient's family</p>
      </div>
      <div className='col-lg-2 cards1'>
      <div className='circle1'><img src='./pics/Schedule.png' className='mini_icons' alt='Schedule'/></div>
      <p className='messaging'>Schedule</p>
      <p className='messaging2'>Transparent Scheduling <br/>for all team members on 
      <br/>shared calendars with <br/>mobile access</p>
      </div>
      <div className='col-lg-2 cards1'>
      <div className='circle1'><img src='./pics/Compliance.png' className='mini_icons' alt='Compliance'/></div>
      <p className='messaging'>Compliance</p>
      <p className='messaging2'>Ensure compliance by <br/>allowing patients to have 
      <br/>mobile, up-to date access <br/>to their medication list</p>
      </div>
      <div className='col-lg-2 cards1'>
      <div className='circle1'><img src='./pics/Track-Visit.png' className='mini_icons' alt='Track Visit'/></div>
      <p className='messaging'>Track Visit</p>
      <p className='messaging2'>Track your staff's made <br/>visits to each patient</p>
      </div>
    </div>
    </div>
    <hr/>
  </div>
  )
}
