import React from 'react';
import { default as firebaseimage } from '../assets/firebase.png';
import picture4 from '../assets/picture4.png';
import picture5 from '../assets/picture5.png';
import picture6 from '../assets/picture6.png';
import profile1 from '../assets/profile1.jpg';
import profile2 from '../assets/profile2.png';


const ThirdComponent = () => {
  return (
    <div className='mb-10 pb-10'>
      <div className='md:grid lg:grid grid-cols-2 grid-rows-1 pl-10 ml-10 mr-20'>
        <div className='pr-10'>
          <img src={firebaseimage} className='border-1 rounded-xl shadow-sm'></img>
        </div>
        <div className='p-4 '>
          <button className='border-2 text-blue-500 border-blue-500 rounded-full p-2'> Engineering </button>
          <p className='font-bold text-4xl font-serif py-4'>Introducing our Firebase <br></br>Extension</p>
          <p className='text-xl'>Firebase developers get plug and play in-app purchase<br></br>infrastucture</p><br></br>
          <div className='flex justify-start items-end'>
                  <img src={profile2} className='w-10 h-10 pb-1'></img>
                  <p className='pl-2'><span className='font-bold'>Ganion Smith</span><br></br>June 21, 2024</p>
          </div>
        </div>
      </div>  
        <div className='lg:grid md:grid grid-cols-3 grid-rows-1 gap-2 p-10 mx-10 place-items-center '>
        <div className='border-2 p-4 m-2 w-7/8 rounded-2xl shadow-sm'>
            <div>
              <img src={picture6}></img><br></br>
              <button className='border-2 rounded-full p-2 border-blue-600 text-blue-400'>Engineering</button>
              <p className='p-2 font-bold text-lg'>Freedom and development of our employees</p>
              <p className='p-2 text-md'>We prioritize the freedom and development of our     employees to foster innovation and drive organizational success we earn through it.
              </p>
              <br></br>
              <div className='flex'>
                <img src={profile1} className='w-10 h-10'></img>
                <p className='pl-2'><span className='font-bold'>Polo Marco</span><br></br>Jan 24, 2024</p>
              </div>
            </div>
          </div>
          <div className='border-2 p-4 m-2 w-7/8 rounded-2xl shadow-sm'>
            <div>
              <img src={picture4}></img><br></br>
              <button className='border-2 rounded-full p-2 text-purple-700 border-purple-700'>Company</button>
              <p className='p-2 font-bold text-lg'>Work Life Balance</p>
              <p className='p-2 text-md'>"Balance of life": Striving for equilibrium between personal, professional, and social aspects to promote overall well-being and fulfillment. This is the major feedbakc we have heard from our employees.</p>
              <br></br>
              <div className='flex'>
                <img src={profile1} className='w-10 h-10'></img>
                <p className='pl-2'><span className='font-bold'>Lopez Lupez</span><br></br>Jan 1, 2024</p>
              </div>
            </div>
          </div>
          <div className='border-2 p-4 m-2 w-7/8 rounded-2xl shadow-sm'>
            <div>
              <img src={picture5}></img><br></br>
              <button className='border-2 rounded-full p-2'>Company</button>
              <p className='p-2 font-bold text-lg'>Non-Toxic Environment</p>
              <p className='p-2 text-md'> Leaders who possess empathy, active listening skills, and a deep understanding of their team members' strengths, weaknesses, and needs..</p>
              <br></br>
              <div className='flex'>
                <img src={profile1} className='w-10 h-10'></img>
                <p className='pl-2'><span className='font-bold'>Cena Mellow</span><br></br>December 31, 2023</p>
              </div>
            </div>
          </div>
          </div>
    </div>

      

    
  )
}

export default ThirdComponent
