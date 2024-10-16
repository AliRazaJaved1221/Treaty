import React from 'react';

export default function About() {
  return (
    <>
      <div className='container'>
        <div className='icons'>
          <div className='row justify-content-center'>
            <div className='col-lg-2 col-md-4 col-sm-6 text-center mb-4 cards1'>
              <div className='circle1'>
                <div className='mini_icons'>
                <img src='./pics/chat.png'  alt='chat' />
                </div>
              </div>
              <p className='messaging'>Messaging</p>
              <p className='messaging2'>Direct and Group <br />Message your team</p>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-6 text-center mb-4 cards1'>
              <div className='circle1'>
              <div className='mini_icons'>
              <img src='./pics/medication.png' alt='Medication' />
              </div>
              </div>
              <p className='messaging'>Medication</p>
              <p className='messaging2'>
                Track supply and medication refills by last requested date by patient's family
              </p>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-6 text-center mb-4 cards1'>
              <div className='circle1'>
              <div className='mini_icons'>
              <img src='./pics/Schedule.png' alt='Schedule' />
              </div>
              </div>
              <p className='messaging'>Schedule</p>
              <p className='messaging2'>
                Transparent Scheduling for all team members on shared calendars with mobile access
              </p>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-6 text-center mb-4 cards1'>
              <div className='circle1'>
              <div className='mini_icons'>
              <img src='./pics/Compliance.png' alt='Compliance' />
              </div>
              </div>
              <p className='messaging'>Compliance</p>
              <p className='messaging2'>Ensure compliance by allowing patients to have mobile, up-to date access to their medication list</p>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-6 text-center mb-4 cards1'>
              <div className='circle1'>
              <div className='mini_icons'>
              <img src='./pics/Track-Visit.png' alt='Track Visit' />
              </div>
              </div>
              <p className='messaging'>Track Visit</p>
              <p className='messaging2'>
                Track your staff's made visits to each patient
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
