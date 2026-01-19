import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-xl my-8 pt-8'>
        <h2 className="text-2xl text-gray-300 items-center justify-center text-center mb-12">CONTACT <span className="text-gray-900 font-bold">US</span></h2>
      </div>

    <div className="max-w-6xl mx-auto px-2 py-10 pb-48">
      <div className="flex flex-col md:flex-row gap-16 items-center justify-center">
        
        <img
          className="rounded-lg shadow-lg w-full max-w-96 object-cover"
          src={assets.contact_image}
          alt="Contact"
        />

        <div className="text-center md:text-left">
          
          <div className="text-gray-700 space-y-5 pt-3">
            <h2 className="text-xl font-semibold text-gray-900">OUR OFFICE</h2>
            <p>
              Zone-1 Processing Area <br /> GIFT SEZ, Gift City, Gandhinagar, Gujarat
            </p>
            <p className="mt-2">
              Tel: (+91) 8347437793 <br /> Email: vimalkarkar21@gmail.com
            </p>
          </div>

          <div className="pt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">CAREERS AT PRESCRIPTO</h2>
            <p>Learn more about our teams and job openings.</p>
            <button className="mt-4 px-6 py-2 border border-gray-400 rounded hover:bg-gray-100 transition">
              Explore Jobs
            </button>
          </div>

        </div>

      </div>
    </div>


    </div>
  )
}

export default Contact
