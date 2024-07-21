import React from 'react';

function Projects(props) {
  return (
    <React.Fragment>
      <div className='absolute top-[88%] left-[4%] w-[92%] h-[100%]'>
        <h5 className='relative top-[1%] text-[18px] font-semibold'>● PROJECT {props.num}</h5>
        <div className='relative top-[26%] w-[40%]'>
          <h1 className='text-[50px] font-bold pb-[20px]'>{props.name}</h1>
          <p className='text-[25px] pb-[50px]'>{props.desc}</p>
          <button className='p-[15px] w-[190px] rounded-[45px] bg-transparent border-[2px] border-[#999966] text-[#999966] text-[20px] transition duration-300 ease-in-out hover:rounded-full hover:bg-[#999966] hover:text-white'>
            Github
          </button>
        </div>
        <hr className='absolute top-[75%] w-[100%] h-[3px] bg-black'/>
        <div className='absolute border-l-2 h-[670px] w-[3px] left-[45%] top-[1%] bg-black transition duration-300 ease-in-out hover:w-[10px]'></div>
        <div className='absolute top-[1%] left-[48%]'>
        <img src={props.src} className='w-[875px] h-[670px] transition-all duration-[400ms] ease-in hover:rounded-[100px]' alt='Project Visual'/>
        </div>
        </div>
    </React.Fragment>
  );
}

export default Projects;
