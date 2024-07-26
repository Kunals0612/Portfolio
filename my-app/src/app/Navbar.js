import React from 'react'
// import '../styles/Navbar.css'
function Navbar() {
  return (
    <React.Fragment>
        <nav className=' navbar flex font-normal text-[18px] justify-between p-[1vw]'>
          <div className='left-nav'>
            <p>KUNAL S</p>
          </div>
          <div className='right-nav'>
            <p>CONTACT ME</p>
          </div>
        </nav>
        <hr className='w-[100%] h-[1.5px] bg-black'/>
    </React.Fragment>
  )
}

export default Navbar