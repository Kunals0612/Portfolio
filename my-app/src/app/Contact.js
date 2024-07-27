'use client'
import React, { useEffect } from 'react';

function Contact() {

    function adjustHoverLineClass() {
        const header = document.querySelector('h1.hover-line');
        if (!header) return;

        if (window.innerWidth < 395) {
            header.classList.remove('hover-line');
        } else {
            header.classList.add('hover-line');
        }
    }

    useEffect(() => {
        // Initial check
        adjustHoverLineClass();

        // Adjust on resize
        window.addEventListener('resize', adjustHoverLineClass);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', adjustHoverLineClass);
        };
    }, []);

    return (
        <React.Fragment>
            <div className='ml-[4vw] mt-[2vw] contactme'>
                <h5 className='font-semibold text-[1vw]'>● CONTACT</h5>
                <div className='text-[5.5vw] mt-[8vw] mb-[8vw] font-bold email'>
                    <h1 className=''>Get in touch</h1>
                    <div>
                        <h1 className='text-[#999966] hover-line'>kunalshinde0612@gmail.com</h1>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Contact;
