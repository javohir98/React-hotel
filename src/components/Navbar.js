/** @format */

import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import lan from '../images/lan.png';
import logo from '../images/logo.png';

import './Navbar.css';

class Navbar extends Component {
	constructor() {
		super();
		this.state = {
			click: true,
			dropActive: true
		};
	}

	render() {
		return (
			<>
				<div
					className={`offcanvas-menu_overlay ${
						!this.state.click ? 'active' : ''
					}`}
					onClick={() =>
						this.setState({ click: this.state.click ? false : true })
					}></div>
				<div
					className={`offcanvas-menu-wrapper ${
						!this.state.click ? 'active' : ''
					}`}>
					<div className='offcanvas__logo'>
						<Link to='/'>
							<img src={logo} alt='' />
						</Link>
					</div>
					<div id='mobile-menu-wrap'>
						<div className='slicknav_menu'>
							<Link
								href='#'
								aria-haspopup='true'
								role='button'
								tabindex='0'
								class='slicknav_btn slicknav_collapsed'>
								<span class='slicknav_menutxt'>MENU</span>
								<span class='slicknav_icon'>
									<span class='slicknav_icon-bar'></span>
									<span class='slicknav_icon-bar'></span>
									<span class='slicknav_icon-bar'></span>
								</span>
							</Link>
							<ul
								class='slicknav_nav slicknav_hidden'
								aria-hidden='true'
								role='menu'>
								<li class='active'>
									<Link to='/' role='menuitem' tabindex='-1'>
										Home
									</Link>
								</li>
								<li>
									<Link to='/rooms' role='menuitem' tabindex='-1'>
										Rooms
									</Link>
								</li>
								<li>
									<Link to='/about-us' role='menuitem' tabindex='-1'>
										About Us
									</Link>
								</li>
								<li class='slicknav_collapsed slicknav_parent'>
									<Link
										to='#'
										role='menuitem'
										aria-haspopup='true'
										tabindex='-1'
										class='slicknav_item slicknav_row'
										// style=''
									>
										<Link to='#' tabindex='-1'>
											Pages
										</Link>
										<i
											className={`ml-2 ${
												this.state.dropActive
													? 'fas fa-angle-right'
													: 'fas fa-angle-down'
											}`}
											onClick={() =>
												this.setState({
													dropActive: this.state.dropActive ? false : true
												})
											}
										/>
									</Link>
									<ul
										className={`dropdown slicknav_hidden ${
											!this.state.dropActive ? 'active' : ''
										}`}
										role='menu'
										aria-hidden='true'>
										<li>
											<Link to='/about-us' role='menuitem' tabindex='-1'>
												About Us
											</Link>
										</li>
										<li>
											<Link to='/room-details' role='menuitem' tabindex='-1'>
												Room Details
											</Link>
										</li>
										<li>
											<Link to='/blog-details' role='menuitem' tabindex='-1'>
												Blog Details
											</Link>
										</li>
									</ul>
								</li>
								<li>
									<Link to='/news' role='menuitem' tabindex='-1'>
										News
									</Link>
								</li>
								<li>
									<Link to='/contact' role='menuitem' tabindex='-1'>
										Contact
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className='offcanvas__btn__widget'>
						<a href='#'>
							Book Now <i class='fas fa-arrow-right' />
						</a>
					</div>
					<div className='offcanvas__widget'>
						<ul>
							<li>
								<i class='fas fa-map-marker-alt' /> 96 Ernser Vista Suite 437,
								NY, US
							</li>
							<li>
								<i className='fas fa-phone-alt' /> (123) 456-78-910
							</li>
						</ul>
					</div>
					<div className='offcanvas__language'>
						<img src={lan} alt='' />
						<span>English</span>
						<i class='fa fa-angle-down' />
						<ul>
							<li>English</li>
							<li>Bangla</li>
						</ul>
					</div>
					<div className='offcanvas__auth'>
						<ul>
							<li className='li'>
								<a href='#'>Login</a>
							</li>
							<li>
								<a href='#'>Register</a>
							</li>
						</ul>
					</div>
				</div>
				<header>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-7'>
								<div className='header_top_left'>
									<ul>
										<li className='mr-5'>
											<i class='fas fa-map-marker-alt' />
											<span>96 Ernser Vista Suite 437, NY, US</span>
										</li>
										<li>
											<i className='fas fa-phone-alt' />
											<span>(123) 456-78-910</span>
										</li>
									</ul>
								</div>
							</div>
							<div className='col-lg-5'>
								<div className='header_top_right'>
									<div className='header-top-auth'>
										<ul>
											<li className='pr-1 border-teal border-right'>
												<Link>Login</Link>
											</li>
											<li className='pl-1'>
												<Link>Register</Link>
											</li>
										</ul>
									</div>
									<div className='header_top_language'>
										<img className='ml-3 mr-3' src={lan} alt='language' />
										<span>English</span>
										<i className='fas fa-angle-down ml-1' />
										<ul>
											<li>English</li>
											<li>Bangla</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='header_nav_option'>
						<div className='container'>
							<div className='row'>
								<div className='col-lg-2'>
									<div className='header_logo'>
										<Link to='/'>
											<img src={logo} alt='' />
										</Link>
									</div>
								</div>
								<div className='col-lg-10'>
									<div className='header_nav ml-4'>
										<nav className='header_menu'>
											<NavLink exact to='/'>
												Home
											</NavLink>
											<NavLink to='/rooms'>Rooms</NavLink>
											<NavLink to='/about-us'>AboutUs</NavLink>
											<a href='#'>Pages</a>
											<NavLink to='/news'>News</NavLink>
											<NavLink to='/contact'>Contact</NavLink>
										</nav>
										<div class='header__nav__widget'>
											<Link href='#'>
												Book Now <i class='fas fa-arrow-right' />
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div className='canvas_open'>
								<span
									class='fa fa-bars'
									onClick={() =>
										this.setState({ click: this.state.click ? false : true })
									}></span>
							</div>
						</div>
					</div>
				</header>
			</>
		);
	}
}

export default Navbar;
