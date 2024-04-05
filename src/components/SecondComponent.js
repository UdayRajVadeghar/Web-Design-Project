import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import googleio from '../assets/google-io.png';
import picture1 from '../assets/picture1.jpg';
import picture4 from '../assets/picture4.png';
import picture5 from '../assets/picture5.png';
import picture6 from '../assets/picture6.png';
import subclub from '../assets/podcast.webp';
import profile1 from '../assets/profile1.jpg';
import profile2 from '../assets/profile2.png';
import profile3 from '../assets/profile3.png';




const SecondComponent = () => {
  return (
    <div className='mb-10 pb-4'>
      <div className='flex flex-col md:flex-row justify-center md:justify-around items-center pt-5'>
        <div className='flex flex-wrap justify-center md:justify-start'>
          <button className='p-3 border-2 border-yellow-400 rounded-full text-white bg-yellow-400'>All articles</button>
          <button className='p-3'>Company</button>
          <button className='p-3'>Engineering</button>
          <button className='p-3'>Growth</button>
        </div>

        <div className='flex flex-wrap justify-center md:justify-end'>
          <p className='p-3'>Follow for updates</p>
          <div className='pt-3'>
            <FontAwesomeIcon icon={faWifi} className='pr-3'/>
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          
        </div>
      </div>

      <div className='lg:grid md:grid grid-cols-3 grid-rows-2 gap-2 p-10 mx-10 place-items-center   '>
          <div className='border-2 p-4 m-2 w-7/8 rounded-2xl shadow-sm'>
            <div>
              <img src={picture1}></img><br></br>
              <button className='border-2 rounded-full p-2 border-red-400 text-red-400'>Company</button>
              <p className='p-2 font-bold text-lg'>Here at RevenueCat , Employees are Customers Too</p>
              <p className='p-2 text-md'>At RevenueCat, we prioritize our employees as internal customers,ensuring their satisfaction and growth align with our values</p>
              <br></br>
              <div className='flex'>
                <img src={profile1} className='w-10 h-10'></img>
                <p className='pl-2'><span className='font-bold'>Mark Robert </span><br></br>March 31, 2024</p>
              </div>
            </div>
          </div>
          <div className='border-2 p-4 m-2 w-7/8 rounded-2xl shadow-sm'>
            <div>
              <img src={googleio  }></img><br></br>
              <button className='border-2 rounded-full p-2 text-green-400 border-green-400'>Growth</button>
              <p className='p-2 font-bold text-lg'>Google-IO 2022</p>
              <p className='p-2 text-md'>Google I/O 2022: Unveiling groundbreaking technologies and innovations shaping the future of digital experiences</p>
              <br></br>
              <div className='flex'>
                <img src={profile2} className='w-10 h-10'></img>
                <p className='pl-2'><span className='font-bold'>John Abraham</span><br></br>Feb 31, 2024</p>
              </div>
            </div>
          </div>
          <div className='border-2 p-4 m-2 w-7/8 rounded-2xl shadow-sm'>
            <div>
              <img src={subclub}></img><br></br>
              <button className='border-2 rounded-full p-2 text-yellow-400 border-yellow-400'>Company</button>
              <p className='p-2 font-bold text-lg'>Listen to podcasts in the integrated toolbase</p>
              <p className='p-2 text-md'>Sharing app building ideas in our Employee App club</p>
              <br></br>
              <div className='flex'>
                <img src={profile3} className='w-10 h-10'></img>
                <p className='pl-2'><span className='font-bold'>Suizie Madame</span><br></br>Feb 13, 2024</p>
              </div>
            </div>
          </div>
          <div className='border-2 p-4 m-2 w-7/8 rounded-2xl shadow-sm'>
            <div>
              <img src={picture4}></img><br></br>
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
              <img src={picture5}></img><br></br>
              <button className='border-2 rounded-full p-2 text-purple-700 border-purple-700'>Company</button>
              <p className='p-2 font-bold text-lg'>Work Life Balance</p>
              <p className='p-2 text-md'>"Balance of life": Striving for equilibrium between personal, professional, and social aspects to promote overall well-being and fulfillment</p>
              <br></br>
              <div className='flex'>
                <img src={profile1} className='w-10 h-10'></img>
                <p className='pl-2'><span className='font-bold'>Lopez Lupez</span><br></br>Jan 1, 2024</p>
              </div>
            </div>
          </div>
          <div className='border-2 p-4 m-2 w-7/8 rounded-2xl shadow-sm bg-black text-white'>
            <div>
              <img src={picture6}></img><br></br>
              <button className='border-2 rounded-full p-2'>Company</button>
              <p className='p-2 font-bold text-lg'>Non-Toxic Environment</p>
              <p className='p-2 text-md'> Leaders who possess empathy, active listening skills, and a deep understanding of their team members' strengths, weaknesses, and needs, enabling effective communication.</p>
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

export default SecondComponent
