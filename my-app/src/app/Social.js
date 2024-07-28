'use client'
import React, { useEffect } from 'react';

function Social() {

    useEffect(() => {
        const linkedinElement = document.querySelector('.linkedin');
        const twitterElement = document.querySelector('.twitter');
        const leetcodeElement = document.querySelector('.leetcode');

        function handleLinkedInMouseEnter() {
            document.documentElement.style.backgroundColor = 'rgb(10, 102, 194)'; // light blue
            document.body.style.backgroundColor = 'rgb(10,102,194)';
        }

        function handleLinkedInMouseLeave() {
            document.documentElement.style.backgroundColor = '';
            document.body.style.backgroundColor = '';
        }

        function handleTwitterMouseEnter() {
            document.documentElement.style.backgroundColor = 'rgb(234, 76, 137)'; // light green
            document.body.style.backgroundColor = 'rgb(234, 76, 137)';
        }

        function handleTwitterMouseLeave() {
            document.documentElement.style.backgroundColor = '';
            document.body.style.backgroundColor = '';
        }

        function handleLeetCodeMouseEnter() {
            document.documentElement.style.backgroundColor = 'rgb(5, 62, 255)'; // light yellow
            document.body.style.backgroundColor = 'rgb(5, 62, 255)';
        }

        function handleLeetCodeMouseLeave() {
            document.documentElement.style.backgroundColor = '';
            document.body.style.backgroundColor = '';
        }

        // Adding event listeners
        if (linkedinElement) {
            linkedinElement.addEventListener('mouseenter', handleLinkedInMouseEnter);
            linkedinElement.addEventListener('mouseleave', handleLinkedInMouseLeave);
        }

        if (twitterElement) {
            twitterElement.addEventListener('mouseenter', handleTwitterMouseEnter);
            twitterElement.addEventListener('mouseleave', handleTwitterMouseLeave);
        }

        if (leetcodeElement) {
            leetcodeElement.addEventListener('mouseenter', handleLeetCodeMouseEnter);
            leetcodeElement.addEventListener('mouseleave', handleLeetCodeMouseLeave);
        }

        // Cleanup event listeners on component unmount
        return () => {
            if (linkedinElement) {
                linkedinElement.removeEventListener('mouseenter', handleLinkedInMouseEnter);
                linkedinElement.removeEventListener('mouseleave', handleLinkedInMouseLeave);
            }

            if (twitterElement) {
                twitterElement.removeEventListener('mouseenter', handleTwitterMouseEnter);
                twitterElement.removeEventListener('mouseleave', handleTwitterMouseLeave);
            }

            if (leetcodeElement) {
                leetcodeElement.removeEventListener('mouseenter', handleLeetCodeMouseEnter);
                leetcodeElement.removeEventListener('mouseleave', handleLeetCodeMouseLeave);
            }
        };
    }, []);

    return (
        <React.Fragment>
            <div className='social flex flex-row font-medium h-[10vw]'>
                <div className='socials linkedin w-[33vw] border-black border-solid border-l-[2px]'>
                    <p className='pl-[2vw] pt-[4vw] text-[3vw]'>LinkedIn</p>
                </div>
                <div className='socials twitter justify-center w-[33vw] border-black border-solid border-l-[2px]'>
                    <p className='pl-[2vw] pt-[4vw] text-[3vw]'>Twitter</p>
                </div>
                <div className='socials leetcode justify-center w-[33.3vw] border-black border-solid border-l-[2px]'>
                    <p className='pl-[2vw] pt-[4vw] text-[3vw]'>LeetCode</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Social;
