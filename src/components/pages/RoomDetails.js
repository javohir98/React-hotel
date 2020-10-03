import React, { Component } from 'react';

import OwlCarousel from 'react-owl-carousel';
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css';
import '../../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css';
import './styles/RoomDetails.css'

import rooms__1 from '../../images/rooms/room-1.jpg'
import rooms__2 from '../../images/rooms/room-2.jpg'
import rooms__3 from '../../images/rooms/room-3.jpg'
import rooms__4 from '../../images/rooms/room-4.jpg'


export default class RoomDetails extends Component {
    render() {
        return (
            <div className='main__carasuel'>
                <div className='carasuel'>
                    <OwlCarousel
                        className="owl-dots text-center"
                        autoplay
                        autoplayTimeout={3000}
                        smartSpeed={2500}
                        loop
                        nav
                    >
                        <div class="item"><img src={rooms__1} /></div>
                        <div class="item"><img src={rooms__2} /></div>
                        <div class="item"><img src={rooms__3} /></div>
                        <div class="item"><img src={rooms__4} /></div>
                        <div class="item"><img src={rooms__1} /></div>
                        <div class="item"><img src={rooms__2} /></div>
                        <div class="item"><img src={rooms__3} /></div>
                        <div class="item"><img src={rooms__4} /></div>
                    </OwlCarousel>
                </div>

            </div>
        )
    }
}
