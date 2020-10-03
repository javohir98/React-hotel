/** @format */

import React, { Component } from 'react';
import './styles/Rooms.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import room__1 from '../../images/rooms/room-1.jpg';
import room__2 from '../../images/rooms/room-2.jpg';
import room__3 from '../../images/rooms/room-3.jpg';
import room__4 from '../../images/rooms/room-4.jpg';

export default class Rooms extends Component {
	render() {
		return (
			<div>
				<div class='breadcrumb-option set-bg'>
					<div class='container'>
						<div class='row'>
							<div class='col-lg-12 text-center'>
								<div class='breadcrumb__text'>
									<h1>Our Room</h1>
									<div class='breadcrumb__links'>
										<a href='./index.html'>Home</a>
										<span>Rooms</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<section className='rooms spad'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-6 p-0 order-lg-2 order-md-2 col-md-6'>
								<div className='main__carasuel'>
									<div className='carasuel'>
										<OwlCarousel
											className='owl-dots text-center'
											autoplay
											autoplayTimeout={3000}
											smartSpeed={2500}
											loop
											nav>
											<div class='item'>
												<img src={room__1} />
											</div>
											<div class='item'>
												<img src={room__2} />
											</div>
											<div class='item'>
												<img src={room__3} />
											</div>
											<div class='item'>
												<img src={room__4} />
											</div>
											<div class='item'>
												<img src={room__1} />
											</div>
											<div class='item'>
												<img src={room__2} />
											</div>
											<div class='item'>
												<img src={room__3} />
											</div>
											<div class='item'>
												<img src={room__4} />
											</div>
										</OwlCarousel>
									</div>
								</div>
							</div>
							<div className='col-lg-6 p-0 order-lg-1 order-md-1 col-md-6'>
								<div class='room__text'>
									<h3>Premium King Room</h3>
									<h2>
										<sup>$</sup>99<span>/day</span>
									</h2>
									<ul>
										<li>
											<span>Size:</span>30 ft
										</li>
										<li>
											<span>Capacity:</span>Max persion 3
										</li>
										<li>
											<span>Bed:</span>King Beds
										</li>
										<li>
											<span>Services:</span>Wifi, Television, Bathroom,...
										</li>
										<li>
											<span>View:</span>Sea View
										</li>
									</ul>
									<a href='#'>View Details</a>
								</div>
							</div>
							<div className='col-lg-6 p-0 order-lg-3 order-md-3 col-md-6'>
								<div className='main__carasuel'>
									<div className='carasuel'>
										<OwlCarousel
											className='owl-dots text-center'
											autoplay
											autoplayTimeout={3000}
											smartSpeed={2500}
											loop
											nav>
											<div class='item'>
												<img src={room__2} />
											</div>
											<div class='item'>
												<img src={room__3} />
											</div>
											<div class='item'>
												<img src={room__4} />
											</div>
											<div class='item'>
												<img src={room__1} />
											</div>
											<div class='item'>
												<img src={room__2} />
											</div>
											<div class='item'>
												<img src={room__3} />
											</div>
											<div class='item'>
												<img src={room__4} />
											</div>
											<div class='item'>
												<img src={room__1} />
											</div>
										</OwlCarousel>
									</div>
								</div>
							</div>
							<div className='col-lg-6 p-0 order-lg-4 order-md-4 col-md-6'>
								<div class='room__text right__text'>
									<h3>Deluxe Room</h3>
									<h2>
										<sup>$</sup>86<span>/day</span>
									</h2>
									<ul>
										<li>
											<span>Size:</span>30 ft
										</li>
										<li>
											<span>Capacity:</span>Max persion 3
										</li>
										<li>
											<span>Bed:</span>King Beds
										</li>
										<li>
											<span>Services:</span>Wifi, Television, Bathroom,...
										</li>
										<li>
											<span>View:</span>Sea View
										</li>
									</ul>
									<a href='#'>View Details</a>
								</div>
							</div>
							<div className='col-lg-6 p-0 order-lg-6 order-md-6 col-md-6'>
								<div className='main__carasuel'>
									<div className='carasuel'>
										<OwlCarousel
											className='owl-dots text-center'
											autoplay
											autoplayTimeout={3000}
											smartSpeed={2500}
											loop
											nav>
											<div class='item'>
												<img src={room__3} />
											</div>
											<div class='item'>
												<img src={room__4} />
											</div>
											<div class='item'>
												<img src={room__1} />
											</div>
											<div class='item'>
												<img src={room__2} />
											</div>
											<div class='item'>
												<img src={room__3} />
											</div>
											<div class='item'>
												<img src={room__4} />
											</div>
											<div class='item'>
												<img src={room__1} />
											</div>
											<div class='item'>
												<img src={room__2} />
											</div>
										</OwlCarousel>
									</div>
								</div>
							</div>
							<div className='col-lg-6 p-0 order-lg-5 order-md-5 col-md-6'>
								<div class='room__text'>
									<h3>Double Room</h3>
									<h2>
										<sup>$</sup>71<span>/day</span>
									</h2>
									<ul>
										<li>
											<span>Size:</span>30 ft
										</li>
										<li>
											<span>Capacity:</span>Max persion 3
										</li>
										<li>
											<span>Bed:</span>King Beds
										</li>
										<li>
											<span>Services:</span>Wifi, Television, Bathroom,...
										</li>
										<li>
											<span>View:</span>Sea View
										</li>
									</ul>
									<a href='#'>View Details</a>
								</div>
							</div>
							<div className='col-lg-6 p-0 order-lg-7 order-md-7 col-md-6'>
								<div className='main__carasuel'>
									<div className='carasuel'>
										<OwlCarousel
											className='owl-dots text-center'
											autoplay
											autoplayTimeout={3000}
											smartSpeed={2500}
											loop
											nav>
											<div class='item'>
												<img src={room__4} />
											</div>
											<div class='item'>
												<img src={room__1} />
											</div>
											<div class='item'>
												<img src={room__2} />
											</div>
											<div class='item'>
												<img src={room__3} />
											</div>
											<div class='item'>
												<img src={room__4} />
											</div>
											<div class='item'>
												<img src={room__1} />
											</div>
											<div class='item'>
												<img src={room__2} />
											</div>
											<div class='item'>
												<img src={room__3} />
											</div>
										</OwlCarousel>
									</div>
								</div>
							</div>
							<div className='col-lg-6 p-0 order-lg-8 order-md-8 col-md-6'>
								<div class='room__text right__text'>
									<h3>Luxury Room</h3>
									<h2>
										<sup>$</sup>79<span>/day</span>
									</h2>
									<ul>
										<li>
											<span>Size:</span>30 ft
										</li>
										<li>
											<span>Capacity:</span>Max persion 3
										</li>
										<li>
											<span>Bed:</span>King Beds
										</li>
										<li>
											<span>Services:</span>Wifi, Television, Bathroom,...
										</li>
										<li>
											<span>View:</span>Sea View
										</li>
									</ul>
									<a href='#'>View Details</a>
								</div>
							</div>
						</div>
						<div className='row'>
							<div class='col-lg-12'>
								<div class='pagination__number'>
									<a href='#'>1</a>
									<a href='#'>2</a>
									<a href='#'>
										Next <i class='fas fa-arrow-right' />
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
