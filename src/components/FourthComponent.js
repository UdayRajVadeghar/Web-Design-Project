import React from 'react';
import googleio from '../assets/google-io.png';
import picture1 from '../assets/growth.webp';
import subclub from '../assets/podcast.webp';
import profile1 from '../assets/profile1.jpg';
import profile2 from '../assets/profile2.png';
import profile3 from '../assets/profile3.png';



const FourthComponent = () => {
  return (
    <div>
      <div>
        <div className='p-12 m-10 bg-black flex justify-around'>
          <div>
            <p className='text-white pt-3 text-3xl'>Subscribe to our monthly newsletter</p>
          </div>
          <div className='xs:pt-10 sm:pt-10'>
            <input type='text' placeholder='Enter your Email' className='font-serif rounded-full p-4'></input>
      
          </div>
        </div>
      
          <div className='lg:grid md:grid grid-cols-3 grid-rows-1 gap-2 p-10 mx-10 place-items-center   '>
              <div className='border-2 p-4 m-2 w-7/8 rounded-2xl shadow-lg'>
                <div>
                  <img src={picture1}></img><br></br>
                  <button className='border-2 rounded-full p-2'>Company</button>
                  <p className='p-2 font-bold text-lg'>Early Stage Subscription App Growth Stack</p>
                  <p className='p-2 text-md'>An integrated toolkit of strategies and tools designed to drive rapid user acquisition</p>
                  <br></br>
                  <div className='flex'>
                    <img src={profile1} className='w-10 h-10'></img>
                    <p className='pl-2'><span className='font-bold'>Mark Hudson</span><br></br>Jan 26, 2024</p>
                  </div>
                </div>
              </div>
              <div className='border-2 p-4 m-2 w-7/8 rounded-2xl shadow-lg'>
                <div>
                  <div>
                    <img src={subclub} className=''></img><br></br>
                    <button className='border-2 rounded-full p-2'>Company</button>
                    <p className='p-2 font-bold text-lg'>Listen to podcasts in the integrated toolbase</p>
                    <p className='p-2 text-md'>Sharing app building ideas in our Employee App club</p>
                    <br></br>
                    <div className='flex'>
                      <img src={profile2} className='w-10 h-10'></img>
                      <p className='pl-2'><span className='font-bold'>John Bam</span><br></br>Jan 13, 2024</p>
                    </div>
                </div>
                </div>
              </div>
              <div className='border-2 p-4 m-2 w-7/8 rounded-2xl shadow-lg'>
                <div>
                  <img src={googleio}></img><br></br>
                  <button className='border-2 rounded-full p-2'>Company</button>
                  <p className='p-2 font-bold text-lg'>Hybrid SDK Architecture at ReveueCat</p>
                  <p className='p-2 text-md'>Adding a layer to reduce complexity which allows user to eemlessly work without many challanges.</p>
                  <br></br>
                  <div className='flex'>
                    <img src={profile3} className='w-10 h-10'></img>
                    <p className='pl-2'><span className='font-bold'>Will Taylor</span><br></br>May 31, 2022</p>
                  </div>
                </div>
              </div>
            </div>
      </div>
      <div className='flex justify-between px-10'>
        <div className='pl-10 ml-5'>
          <button className='px-2 border-1 bg-yellow-200 rounded-full'>1</button>
          <button className='px-2'>2</button>
          <button className='px-2'>...</button>
          <button className='px-2'>8</button>
        </div>
        <div>
          <button className='pr-10 mr-5'>Next Page</button>
        </div>
      </div>
      
    </div>
  )
}

export default FourthComponent
