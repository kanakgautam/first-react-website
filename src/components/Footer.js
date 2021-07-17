import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Subscribe to get best vacation deals.
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time
                </p>
                <div className='input-area'>
                    <form>
                        {/* <label className='footer-subscription-text'>Email: </label> */}
                        <input type='email' name='email' placeholder='Your Email' className='footer-input'/>
                        <Button buttonStyle='btn--outline' buttonSize='btn--large' className='footer-button'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it Works</Link>
                        <Link to='/'>Testimonials</Link> 
                        <Link to='/'>Careers</Link> 
                        <Link to='/'>Investors</Link> 
                        <Link to='/'>Terms of Services</Link> 
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>support</Link> 
                        <Link to='/'>Destinations</Link> 
                        <Link to='/'>Sponsorships</Link> 
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit Videos</Link>
                        <Link to='/'>Ambassador</Link> 
                        <Link to='/'>Influencer</Link> 
                        <Link to='/'>Agency</Link> 
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>facebook</Link>
                        <Link to='/'>Instagram</Link> 
                        <Link to='/'>Youtube</Link> 
                        <Link to='/'>Twitter</Link> 
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            WanderLust
                        </Link>
                    </div>
                    <small className='website-rights'>WanderLust 2020</small>
                    <div className='social-icons'>
                        <Link to='/' target='_blank' aria-label='Facebook' className='social-icon-link facebook'>
                            <i className='fab fa-facebook' />
                        </Link>
                        <Link to='/' target='_blank' aria-label='Instagram' className='social-icon-link instagram'>
                            <i className='fab fa-instagram' />
                        </Link>
                        <Link to='/' target='_blank' aria-label='linkedin' className='social-icon-link linkedin'>
                            <i className='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
