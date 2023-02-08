import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About Me
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Joko, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am Full Stack Developer with passion for building beautiful and user-friendly websites. I have a strong understanding
                of both front-end and back-end development, and i am excited to put my skills to use in a profesional
                setting. I am a quick learner and team player, and i am confident that i can be a
                valueable asset to any web development team.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
