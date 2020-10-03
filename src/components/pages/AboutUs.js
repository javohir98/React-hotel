/** @format */

import React, { Component } from 'react';
import './styles/AboutUs.css';

import history__1 from '../../images/history/history-1.jpg';
import history__2 from '../../images/history/history-2.jpg';
import history__3 from '../../images/history/history-3.jpg';
import history__4 from '../../images/history/history-4.jpg';
import Services from '../Services';

export default class AboutUs extends Component {
	render() {
		return (
			<div>
				<div class='breadcrumb-option set-bg'>
					<div class='container'>
						<div class='row'>
							<div class='col-lg-12 text-center'>
								<div class='breadcrumb__text'>
									<h1>About Us</h1>
									<div class='breadcrumb__links'>
										<a href='./index.html'>Home</a>
										<span>About Us</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<section className='about spad'>
					<div className='container'>
						<div className='about__content'>
							<div className='row'>
								<div className='col-lg-5'>
									<div class='section-title'>
										<h5>Our Specialization</h5>
										<h2>Welcome Hiroto</h2>
									</div>
								</div>
								<div className='col-lg-7'>
									<div class='about__text'>
										<p>
											Metasurfaces are generally designed by placing scatterers
											in periodic or pseudo-periodic grids.
										</p>
										<p>
											I am convinced the only way to make money online is to
											have a consistent Advertising plan. A plan you are willing
											to work hard on and commit to for a selected period of
											time. When making this plan, you need to do two things.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className='row'>
							<Services />
						</div>
					</div>
				</section>
				<div class='chooseus spad set-bg'>
					<div class='container'>
						<div class='row d-flex justify-content-center'>
							<div class='col-lg-8 text-center'>
								<div class='chooseus__text'>
									<div class='section-title'>
										<h5>WHY CHOOSE US</h5>
										<h2>
											Contact us now to get the latest deals and for the next
											booking
										</h2>
									</div>
									<a href='#' class='primary-btn'>
										Booking Now
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<section className='history spad'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								<div class='section-title history-title'>
									<h5>Our History</h5>
									<h2>Explore Our Hotel</h2>
								</div>
							</div>
						</div>
						<div className='history__content'>
							<div class='row'>
								<div class='col-lg-5 col-md-5'>
									<div class='history__item left__item'>
										<div class='history__date'></div>
										<span>11 Dec 1990</span>
										<h4>Start Up Building Hotel</h4>
										<img src={history__1} alt='' />
										<p>
											The young woman who turned a style setback into an envious
											outfit has officially inspired a major clothing retailer
											with her impromptu ingenuity
										</p>
									</div>
									<div class='history__item left__item mb-0'>
										<div class='history__date'></div>
										<span>29 Jan 1990</span>
										<h4>Building Pool In The Beach</h4>
										<img src={history__3} alt='' />
										<p>
											The young woman who turned a style setback into an envious
											outfit has officially inspired a major clothing retailer
											with her impromptu ingenuity
										</p>
									</div>
								</div>
								<div class='col-lg-5 offset-lg-2 col-md-5 offset-md-2'>
									<div class='history__item right__first__item'>
										<div class='history__date'></div>
										<span>08 March 1990</span>
										<h4>Best Hotel Award Of The Year</h4>
										<img src={history__2} alt='' />
										<p>
											The young woman who turned a style setback into an envious
											outfit has officially inspired a major clothing retailer
											with her impromptu ingenuity
										</p>
									</div>
									<div class='history__item mb-0'>
										<div class='history__date'></div>
										<span>06 July 1990</span>
										<h4>Open New Hotel In New York</h4>
										<img src={history__4} alt='' />
										<p>
											The young woman who turned a style setback into an envious
											outfit has officially inspired a major clothing retailer
											with her impromptu ingenuity
										</p>
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
