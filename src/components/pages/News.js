/** @format */

import React from 'react';
import './styles/News.css';

import blog__large from '../../images/blog/blog-large.jpg';
import blog__1 from '../../images/blog/blog-1.jpg';
import blog__2 from '../../images/blog/blog-2.jpg';
import blog__3 from '../../images/blog/blog-3.jpg';
import blog__4 from '../../images/blog/blog-4.jpg';
import blog__5 from '../../images/blog/blog-5.jpg';
import blog__6 from '../../images/blog/blog-6.jpg';
import recent__1 from '../../images/blog/sidebar/recent-1.jpg';
import recent__2 from '../../images/blog/sidebar/recent-2.jpg';
import recent__3 from '../../images/blog/sidebar/recent-3.jpg';

export default function News() {
	return (
		<div>
			<div class='breadcrumb-option set-bg'>
				<div class='container'>
					<div class='row'>
						<div class='col-lg-12 text-center'>
							<div class='breadcrumb__text'>
								<h1>Our Blog</h1>
								<div class='breadcrumb__links'>
									<a href='./index.html'>Home</a>
									<span>Blog</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className='blog spad'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-8 col-md-8'>
							<div className='blog__item__large'>
								<div className='blog__item__large__pic'>
									<img src={blog__large} alt='' />
									<div className='tag'>Hotel</div>
								</div>
								<div className='blog__item__large__text'>
									<p>
										<i class='fa fa-clock-o' /> 01th March, 2019
									</p>
									<h4>
										<a href='#'>
											Classifieds are usually the first place you think of when
											you are
										</a>
									</h4>
								</div>
							</div>
							<div className='row'>
								<div className='col-lg-6 col-md-6'>
									<div className='blog__item'>
										<div className='blog__item__pic'>
											<img src={blog__1} alt='' />
											<div className='tag'>Event</div>
										</div>
										<div class='blog__item__text'>
											<p>
												<i class='fa fa-clock-o' /> 02th March, 2019
											</p>
											<h5>
												<a href='#'>Guests think these services would be</a>
											</h5>
										</div>
									</div>
								</div>
								<div className='col-lg-6 col-md-6'>
									<div class='blog__item'>
										<div class='blog__item__pic'>
											<img src={blog__2} alt='' />
											<div class='tag'>Travel</div>
										</div>
										<div class='blog__item__text'>
											<p>
												<i class='fa fa-clock-o'></i> 03th March, 2019
											</p>
											<h5>
												<a href='#'>Europe's 2018 hotel strengths belie</a>
											</h5>
										</div>
									</div>
								</div>
								<div className='col-lg-6 col-md-6'>
									<div class='blog__item'>
										<div class='blog__item__pic'>
											<img src={blog__3} alt='' />
											<div class='tag'>Restaurant</div>
										</div>
										<div class='blog__item__text'>
											<p>
												<i class='fa fa-clock-o'></i> 04th March, 2019
											</p>
											<h5>
												<a href='#'>Tribute Portfolio opens The Alida in</a>
											</h5>
										</div>
									</div>
								</div>
								<div className='col-lg-6 col-md-6'>
									<div class='blog__item'>
										<div class='blog__item__pic'>
											<img src={blog__4} alt='' />
											<div class='tag'>Hotel</div>
										</div>
										<div class='blog__item__text'>
											<p>
												<i class='fa fa-clock-o'></i> 05th March, 2019
											</p>
											<h5>
												<a href='#'>Rocco Forte Hotels unveils its second</a>
											</h5>
										</div>
									</div>
								</div>
								<div className='col-lg-6 col-md-6'>
									<div class='blog__item'>
										<div class='blog__item__pic'>
											<img src={blog__5} alt='' />
											<div class='tag'>Travel</div>
										</div>
										<div class='blog__item__text'>
											<p>
												<i class='fa fa-clock-o'></i> 07th March, 2019
											</p>
											<h5>
												<a href='#'>The Ritz-Carlton, St. Louis renovates</a>
											</h5>
										</div>
									</div>
								</div>
								<div className='col-lg-6 col-md-6'>
									<div class='blog__item'>
										<div class='blog__item__pic'>
											<img src={blog__6} alt='' />
											<div class='tag'>Restaurant</div>
										</div>
										<div class='blog__item__text'>
											<p>
												<i class='fa fa-clock-o'></i> 08th March, 2019
											</p>
											<h5>
												<a href='#'>NexPoint Hospitality Trust to acquire</a>
											</h5>
										</div>
									</div>
								</div>
								<div className='col-lg-12'>
									<div class='pagination__number blog__pagination'>
										<a href='#'>1</a>
										<a href='#'>2</a>
										<a href='#'>
											Next <span class='arrow_right'></span>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className='col-lg-4 col-md-4'>
							<div className='blog__sidebar'>
								<div class='blog__sidebar__search'>
									<h4>Search</h4>
									<form action='#'>
										<input type='text' placeholder='Search...' />
										<button type='submit'>Search</button>
									</form>
								</div>
								<div class='blog__sidebar__recent'>
									<h4>Recent Posts</h4>
									<a href='#' class='blog__sidebar__recent__item'>
										<div class='blog__sidebar__recent__item__pic'>
											<img src={recent__1} alt='' />
										</div>
										<div class='blog__sidebar__recent__item__text'>
											<h6>Smart HVAC Solutions Keep It</h6>
											<div class='time'>
												<i class='fa fa-clock-o'></i> 01th March, 2019
											</div>
										</div>
									</a>
									<a href='#' class='blog__sidebar__recent__item'>
										<div class='blog__sidebar__recent__item__pic'>
											<img src={recent__2} alt='' />
										</div>
										<div class='blog__sidebar__recent__item__text'>
											<h6>Guests think these services</h6>
											<div class='time'>
												<i class='fa fa-clock-o'></i> 02th March, 2019
											</div>
										</div>
									</a>
									<a href='#' class='blog__sidebar__recent__item'>
										<div class='blog__sidebar__recent__item__pic'>
											<img src={recent__3} alt='' />
										</div>
										<div class='blog__sidebar__recent__item__text'>
											<h6>Europe's 2018 hotel strengths</h6>
											<div class='time'>
												<i class='fa fa-clock-o'></i> 03th March, 2019
											</div>
										</div>
									</a>
								</div>
								<div class='blog__sidebar__categories'>
									<h4>Categories</h4>
									<ul>
										<li>
											<a href='#'>Life Style</a>
										</li>
										<li>
											<a href='#'>Photography</a>
										</li>
										<li>
											<a href='#'>Work</a>
										</li>
										<li>
											<a href='#'>Travel</a>
										</li>
										<li>
											<a href='#'>Sport</a>
										</li>
									</ul>
								</div>
								<div class='blog__sidebar__comment'>
									<h4>Recent Comments</h4>
									<p>
										Attending a trade show can be a very effective method of
										promoting your company and its
									</p>
									<span>Smart HVAC Solutions Keep It Comfortable</span>
									<p>
										When I was just starting 6th grade I got my first job.
										Paperboy! Boy, was I excited. At that
									</p>
									<span>Guests think these services would be easier</span>
									<p>
										Classifieds are usually the first place you think of when
										you are getting ready to make a
									</p>
									<span>Europe's 2018 hotel strengths belie</span>
								</div>
								<div class='blog__sidebar__tags'>
									<h4>Popular Tags</h4>
									<a href='#'>Creative</a>
									<a href='#'>Unique</a>
									<a href='#'>Travel</a>
									<a href='#'>Restaurant</a>
									<a href='#'>Workpress Template</a>
									<a href='#'>Idea</a>
									<a href='#'>Hotel</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
