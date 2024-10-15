import React from 'react';

export default function About() {
  return (
    <>
      <div className='container'>
        <div className='icons'>
          <div className='row mt-3 justify-content-center'>
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
                Track supply and <br />medication refills by last <br />requested date by <br />patient's family
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
                Transparent Scheduling <br />for all team members on <br />shared calendars with <br />mobile access
              </p>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-6 text-center mb-4 cards1'>
              <div className='circle1'>
              <div className='mini_icons'>
              <img src='./pics/Compliance.png' alt='Compliance' />
              </div>
              </div>
              <p className='messaging'>Compliance</p>
              <p className='messaging2'>Ensure compliance by <br />allowing patients to have <br />mobile, up-to date access <br />to their medication list</p>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-6 text-center mb-4 cards1'>
              <div className='circle1'>
              <div className='mini_icons'>
              <img src='./pics/Track-Visit.png' alt='Track Visit' />
              </div>
              </div>
              <p className='messaging'>Track Visit</p>
              <p className='messaging2'>
                Track your staff's made <br />visits to each patient
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
