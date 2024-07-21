import React from 'react'

function Navbar() {
  return (
    <React.Fragment>
        <div className='flex flex-row font-normal text-base'>
            <p className='absolute top-[1.5%] left-[2%]'>KUNAL S</p>
            <p className='absolute top-[1.5%] right-[2%]'>CONTACT ME</p>
        </div>
        <hr className='absolute top-[5%] w-[100%] h-[3px] bg-black'/>
    </React.Fragment>
  )
}

export default Navbar