/** @format */

import React, { Component } from 'react';
import './styles/Home.css';

import home__about__sign from '../../images/home-about/sign.png';
import home__about from '../../images/home-about/home-about.png';
import testimonial__left from '../../images/testimonial-left.jpg';
import Services from '../Services';

export default class Home extends Component {
	render() {
		return (
			<div>
				<section className='hero spad set-bg'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12 mb-5'>
								<div class='hero__text'>
									<h5>WELCOME HIROTO</h5>
									<h2>Experience the greatest for you holidays.</h2>
								</div>
								<form action='#' className='filter__form'>
									<div class='filter__form__item filter__form__item--search'>
										<p>Location</p>
										<div class='filter__form__input'>
											<input type='text' placeholder='Search Location' />
											<i className='fas fa-search' />
										</div>
									</div>
									<div class='filter__form__item'>
										<p>Check In</p>
										<div class='filter__form__datepicker'>
											<i class='fas fa-calendar calendar' />
											<input
												type='text'
												class='datepicker_pop check__in hasDatepicker'
												id='dp1601369730130'
											/>
											<i class='fas fa-arrow-down'></i>
										</div>
									</div>
									<div class='filter__form__item'>
										<p>Check In</p>
										<div class='filter__form__datepicker'>
											<i class='fas fa-calendar calendar' />
											<input
												type='text'
												class='datepicker_pop check__in hasDatepicker'
												id='dp1601369730130'
											/>
											<i class='fas fa-arrow-down'></i>
										</div>
									</div>
									<div class='filter__form__item filter__form__item--select'>
										<p>Person</p>
										<div class='filter__form__select'>
											<span class='icon_group'></span>
											<select style={{ display: 'none' }}>
												<option value=''>2 Adult, 1 Children</option>
												<option value=''>2 Adult</option>
												<option value=''>1 Adult</option>
											</select>
											<div class='nice-select' tabindex='0'>
												<span class='current'>2 Adult, 1 Children</span>
												<ul class='list'>
													<li data-value='' class='option selected focus'>
														2 Adult, 1 Children
													</li>
													<li data-value='' class='option'>
														2 Adult
													</li>
													<li data-value='' class='option'>
														1 Adult
													</li>
												</ul>
											</div>
										</div>
									</div>
									<button type='submit'>BOOK NOW</button>
								</form>
							</div>
						</div>
					</div>
				</section>
				<section className='home-about'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-6 mb-5'>
								<div class='home__about__text'>
									<div class='section-title'>
										<h5>ABOUT US</h5>
										<h2>Welcome Hiroto Hotel In Street L’Abreuvoir</h2>
									</div>
									<p class='first-para'>
										Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
										odit aut fugit, sed quia consequuntur magni dolores eos qui
										ratione voluptatem sequi nesciunt.
									</p>
									<p class='last-para'>
										Sed ut perspiciatis unde omnis iste natus error sit
										voluptatem accusantium doloremque.
									</p>
									<img src={home__about__sign} alt='' />
								</div>
							</div>
							<div className='col-lg-6'>
								<div class='home__about__pic'>
									<img src={home__about} alt='' />
								</div>
							</div>
						</div>
					</div>
				</section>
				<Services />
				<section className='home-room spad'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								<div class='section-title'>
									<h5>OUR ROOM</h5>
									<h2>Explore Our Hotel</h2>
								</div>
							</div>
						</div>
					</div>
					<div className='container-fluid'>
						<div className='row'>
							<div className='col-lg-3 col-md-6 col-sm-6 p-0'>
								<div className='home__room__item hr-1 set-bg'>
									<div class='home__room__title'>
										<h4>Deluxe Room</h4>
										<h2>
											<sup>$</sup>55<span>/day</span>
										</h2>
									</div>
									<a href='#'>Booking Now</a>
								</div>
							</div>
							<div className='col-lg-3 col-md-6 col-sm-6 p-0'>
								<div className='home__room__item hr-2 set-bg'>
									<div class='home__room__title'>
										<h4>Deluxe Room</h4>
										<h2>
											<sup>$</sup>85<span>/day</span>
										</h2>
									</div>
									<a href='#'>Booking Now</a>
								</div>
							</div>
							<div className='col-lg-3 col-md-6 col-sm-6 p-0'>
								<div className='home__room__item hr-3 set-bg'>
									<div class='home__room__title'>
										<h4>Deluxe Room</h4>
										<h2>
											<sup>$</sup>94<span>/day</span>
										</h2>
									</div>
									<a href='#'>Booking Now</a>
								</div>
							</div>
							<div className='col-lg-3 col-md-6 col-sm-6 p-0'>
								<div className='home__room__item hr-4 set-bg'>
									<div class='home__room__title'>
										<h4>Deluxe Room</h4>
										<h2>
											<sup>$</sup>71<span>/day</span>
										</h2>
									</div>
									<a href='#'>Booking Now</a>
								</div>
							</div>
						</div>
					</div>
					<div className='container'>
						<div class='home__explore'>
							<div class='row'>
								<div class='col-lg-9 col-md-8'>
									<h3>Planning your next trip? Save up to 25% on your hotel</h3>
								</div>
								<div class='col-lg-3 col-md-4 text-center'>
									<a href='#' class='primary-btn'>
										Explorer More
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='testimonial spad'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-5'>
								<div class='testimonial__pic'>
									<img src={testimonial__left} alt='' />
								</div>
							</div>
							<div className='col-lg-7'>
								<div className='testimonial__text'>
									<div class='section-title'>
										<h5>Testimonials</h5>
										<h2>What do customers say about us?</h2>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
