import React from 'react';

function Projects(props) {
  return (
    <React.Fragment>
      <div className='project ml-[4vw] mt-[2vw] flex flex-row flex-wrap justify-between '>
        <div className='projectintro mt-[1vw] w-[30vw]'>
          <h5 className='text-[1vw] font-semibold mb-[10vw]'>● PROJECT {props.num}</h5>
          <h1 className='text-[3vw] font-bold mb-[1vw]'>{props.name}</h1>
          <p className='text-[1.3vw]'>{props.desc}</p>
          <div className='btndiv'>
            <button className='btn p-[1vw] w-[9vw] mt-[2vw] rounded-[45px] bg-transparent border-[2px] border-[#999966] text-[#999966] text-[1vw] transition duration-300 ease-in-out hover:rounded-full hover:bg-[#999966] hover:text-white'>
              Github
            </button>
          </div>
        </div>
        <div className='vl h-[40vw] border-black border-l-[1px]'></div>
        <div className='flex justify-end projectimg'>
          <img src={props.src} className='h-[40vw] w-[50vw] mr-[4vw] transition-all duration-[400ms] ease-in hover:rounded-[100px]' alt='Project Visual'/>
        </div>
      </div>
       <hr className='projecthr ml-[4vw] w-[92vw] h-[2px] bg-black'/>
    </React.Fragment>
  );
}

export default Projects;
