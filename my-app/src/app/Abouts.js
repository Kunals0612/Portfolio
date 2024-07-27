import React from 'react'

function Abouts() {
  return (
     <React.Fragment>
        <div className='aboutme ml-[4vw] mt-[1vw]'>
            <div className='aboutmetop'>
              <h5 className='text-[1vw] font-semibold'>● ABOUT</h5>
            </div>
            <div className='aboutmemain flex flex-row ml-[6vw] mt-[2vw] pb-[4vw] mr-[4vw]'>
                <div className='aboutmeleft mt-[2vw]'>
                   <img className="w-[60vw] h-[40vw]" src="https://uploads-ssl.webflow.com/64daf5c0c154912f54a34b6e/64db0023bf49c009ffe8fad8_ReefWalk.png"></img>
                </div>
                <div className='aboutmeright flex flex-col gap-[1vw] mt-[15vw] ml-[6vw] text-[1.5vw] font-semibold'>
                  <p className=''>
                  I am a web development enthusiast and UI/UX designer passionate about creating intuitive and engaging digital experiences.
                  </p>
                  <p className=''>
                  I’m excited to partner on projects that blend creativity with technology to deliver exceptional user solutions.
                  </p>
                  <p>
                  Based in Diverse Country India.
                  </p>
                </div>
            </div>
            <hr className='projecthr w-[92vw] h-[2px] bg-black'/>
        </div>

     </React.Fragment>
  )
}

export default Abouts