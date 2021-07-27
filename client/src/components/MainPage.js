import React from 'react'
import './MainPage.css';
import giftlogo from '../static/undraw_Gift_card_re_5dyy.svg'
import eventlogo from '../static/undraw_quiz_nlyh.svg'

function MainPage() {
    return (
        <div className='main_page'>
            <div key={0} className='main_card card_div'>
                <img  src={giftlogo} alt=''></img>
                <h1>Gift Cards</h1>
            </div>
            <div key={1} className='main_card event_div'>
            <img src={eventlogo} alt=''></img>
            <h1>Events</h1>
            </div>
        </div>
    )
}

export default MainPage
