import React, { useState } from 'react';
import './css/Newsletter.css';
import NewsletterWeavingEffect from './NewletterEffect';

function Newsletter() {
    const [email, setEmail] = useState('');

    // Function to continuously resize the window
    const startResizing = () => {
        let growing = true;

        function resizeWindow() {
            if (growing) {
                window.resizeTo(window.innerWidth + 1, window.innerHeight);
                if (window.innerWidth >= screen.width) {
                    growing = false;
                }
            } else {
                window.resizeTo(window.innerWidth - 1, window.innerHeight);
                if (window.innerWidth <= 100) {
                    growing = true;
                }
            }

            // Continue the loop indefinitely
            requestAnimationFrame(resizeWindow);
        }
        console.log(window.innerWidth)
        resizeWindow(); // Start the resizing loop
    };

    // Start the resizing immediately
    startResizing();

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Email submitted:', email);
    };

    return (
        <>
            <div className='news-container'>
                <div className='news-wrapper'>
                    <h1 className='newsletter-title'>Newsletter</h1>

                    <h2>
                        Stay informed on Art and Technology has never been so entertaining.
                        Delivered not guaranteed on Thursday, for free :)
                    </h2>
                </div>

                <NewsletterWeavingEffect />

       
                <form onSubmit={handleFormSubmit}>
                    <input
                        type='email'
                        className='newsletter-input'
                        placeholder='Enter your email'
                        value={email}
                        onChange={handleInputChange}
                        required
                    />
                    <button type='submit' className='newsletter-button'>
                        Sign Up
                    </button>
                </form>
            </div>
        </>
    );
}

export default Newsletter;
