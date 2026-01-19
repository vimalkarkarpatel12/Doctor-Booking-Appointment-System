import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

       <div className='text-center pt-10 '>
        <p className='text-gray-300 text-3xl font-medium'>About <span className='text-gray-700'>Us</span></p>
       </div>
       {/* image  */}
       <div className='flex flex-col md:flex-row gap-10 my-10'>
          <img className='rounded-lg shadow-lg w-full md:max-w-[360px]' src={assets.about_image} alt="" />
          <div className='flex flex-col justify-center md:w-2/3 text-gray-700 space-y-6'>
            <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
            <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
            <b className='text-gray-700'>Our Vision</b>
            <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
          </div>
       </div>

    <div className='text-xl my-8 pt-32'>
      <h2 className="text-3xl font-semibold text-gray-300 text-center mb-12">WHY <span className="text-gray-900 font-bold">CHOOSE US</span></h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700 pb-52" >
      <div className="border p-7 rounded-lg shadow-sm hover:text-gray-500 transition-all duration-300 cursor-pointer">
        <h3 className='font-semibold mb-3'>Efficiency:</h3>
        <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
      </div>

      <div className="border p-7 rounded-lg shadow-sm hover:text-gray-500 transition-all duration-300 cursor-pointer">
        <h3 className='font-semibold mb-3'>Convenience:</h3>
        <p>Access to a network of trusted healthcare professionals in your area.</p>
      </div>

      <div className="border p-7 rounded-lg shadow-sm hover:text-gray-500 transition-all duration-300 cursor-pointer">
        <h3 className='font-semibold mb-3'>Personalization:</h3>
        <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
      </div>
    </div>




    </div>
  )
}

export default About
