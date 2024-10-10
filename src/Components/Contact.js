import React from 'react'
import { FaMobileScreenButton } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

export default function Contact() {
  return (
    <div className='container'>
        <div className='icons3'>
            <div className='row' style={{ marginTop:'6rem'}}>
                <div className='col-lg-5'>
                    <div style={{marginLeft:'1rem'}}>
                    <p className='stay'>STAY IN TOUCH</p>
                    <p className='contact'>Contact us</p>
                    <p className='dot2'>_ _</p>
                    <div className='row mt-5'>
                    <div className='wid1'>
                        <p className='mini_icons2'><FaMobileScreenButton/></p>
                    </div>
                    <div className='wid2 mini_text'>1-541-754-3010</div>
                    </div>
                    <div className='row'>
                    <div className='wid1'>
                        <p className='mini_icons2'><MdOutlineMail /></p>
                    </div>
                    <div className='wid2 mini_text'>spport@jointreaty.com</div>
                    </div>
                    <div className='row'>
                    <div className='wid1'>
                        <p className='mini_icons2'><IoLocationOutline/></p>
                    </div>
                    <div className='wid2 mini_text'>3782 Shady Pines Drive USA</div>
                    </div>
                    <div className='row mt-4'>
                        <img src='./pics/fb.png' className='main_icons' alt='facebook'/>
                        <img src='./pics/twitter.png' className='main_icons' alt='twitter'/>
                        <img src='./pics/instagram.png' className='main_icons' alt='instagram'/>
                        <img src='./pics/youtube.png' className='main_icons' alt='youtube'/>
                    </div>
                    </div>
                </div>
                <div className='col-lg-7'>
                    <div className='box'>
                        <div className='container'>
                            <div className='row mt-5'>
                                <div className='col-lg-6'>
                                <input type='text' className='fields' placeholder='NAME *'/>
                                <input type='text' className='fields' placeholder='EMAIL *'/>
                                <input type='text' className='fields' placeholder='SUBJECT *'/>
                                </div>
                                <div className='col-lg-6'>
                                   <textarea type='textarea'  rows="15" cols="30" className='area1' placeholder='MESSAGE *'/>
                                </div>
                            </div>
                            <div className='row btn_m'>
                                <div className='col-lg-6'></div>
                                <div className='col-lg-6'>
                                    <button type='submit' className='btn2'>SEND MESSAGE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
