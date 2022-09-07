import React from 'react'
import {BsFillTelephoneFill, BsArrowRight} from 'react-icons/bs'
import {TbWorld} from 'react-icons/tb'
import{RiSettings2Line} from 'react-icons/ri'
import image from '../asset/support.jpg'
function Support() {
  return (
    <div name="support" className='w-full  mt-24'>
        <div className='w-full h-[700px] bg-gray-900/90 absolute'>
       <img src={image} alt=""  className='w-full h-full object-cover mix-blend-overlay'/>
       </div>
       <div className='container mx-auto text-white relative'>
         <div className='px-4 py-12'>
         <h2 className='pt-4 text-slate-300 uppercase text-center text-3xl'>Support</h2>
         <p className='text-3xl md:text-5xl font-bold py-6 text-center'>Finding the right team</p>
         <p className='py-4 text-2xl px-2  text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae 
            veritatis ratione error tenetur, voluptates architecto possimus ad!
             Omnis minima ea quidem quisquam unde beatae, minus illo et cum vel?</p>
       </div>
       <div className='grid  grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-6 md:px-4 pt-12 sm:pt-20 text-black '>
        <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
                 
                <BsFillTelephoneFill size={35} className='p-1 text-white mt-[-3rem]  bg-indigo-600'/>
                
                <h3 className='font-bold text-2xl my-6'>Sales</h3>
                <p className='text-gray-600 text-lg fill-current'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
                <p className='flex items-center text-indigo-600'>Contact Us <BsArrowRight size={20} className='ml-2'/> </p>
            </div>
        </div>
        <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
                 
                <TbWorld size={35} className='p-1 text-white mt-[-3rem]  bg-indigo-600'/>
                
                <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                <p className='text-gray-600 text-lg fill-current'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
                <p className='flex items-center text-indigo-600'>Contact Us <BsArrowRight size={20} className='ml-2'/> </p>
            </div>
        </div>
        <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
                 
                <RiSettings2Line size={35} className='p-1 text-white mt-[-3rem]  bg-indigo-600'/>
                
                <h3 className='font-bold text-2xl my-6'>Media Inquiries</h3>
                <p className='text-gray-600 text-lg fill-current'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
                <p className='flex items-center text-indigo-600'>Contact Us <BsArrowRight size={20} className='ml-2'/> </p>
            </div>
        </div>
        </div>
       </div>
    </div>
  )
}

export default Support