import React from 'react'

function Abouts() {
  return (
     <React.Fragment>
        <div className='absolute top-[245%] w-[90%] h-[80%]'>
            <h5 className='relative top-[2%] left-[4.5%] font-semibold text-[18px]'>● ABOUT ME</h5>
            <div className='relative top-[30%] left-[60%] w-[40%] text-2xl'>
                <p className='pb-11'>
                I am a web development enthusiast and UI/UX designer passionate about creating intuitive and engaging digital experiences.
                </p>
                <p className='pb-11'>
                 With a strong design background and a collaborative spirit, I’m excited to partner on projects that blend creativity with technology to deliver exceptional user solutions. Let’s build something amazing together!
                </p>
                <p>
                 Based in Diverse Country India.
                </p>
            </div>
            <hr className='absolute left-[4.5%] top-[100%] w-[103%] h-[3px] bg-black'/>
        </div>

     </React.Fragment>
  )
}

export default Abouts