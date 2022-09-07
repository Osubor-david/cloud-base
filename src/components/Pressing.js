import React from 'react'
import {AiOutlineCheck} from 'react-icons/ai'
function Pressing() {
  return (
    <div name="pricing" className='w-full text-white my-24'>
      <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>
      <div className='container mx-auto py-12'>
      <div className='text-center py-6 text-slate-300'>
        <h2 className='text-2xl uppercase '>Pricing</h2>
        <h3 className='md:text-3xl text-2xl  font-bold text-white px-2 py-8'>The right price for your research.</h3>
        <p className='text-1xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
            laudantium odio ullam inventore aliquid ipsum quasi tenetur velit
            voluptatum iste.</p>
        </div> 
        <div className='grid  md:grid-cols-2'>
          <div className='bg-white  text-slate-900 m-4 p-4 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
            <div>
                <p className='text-6xl font-bold py-4 flex'>$49<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-2xl lg:text-1xl py-8 text-slate-500'>
            Lorem ipsum dolor, sit amet consectetur adipisicing.
            </p>
            <div className='relative'>
                <p className=' py-4 flex text-green-600'><AiOutlineCheck className='mr-5'  size={20}/>Lorem, ipsum dolor.</p>
                <p className=' py-4 flex text-green-600'><AiOutlineCheck className='mr-5' size={20}/>Lorem, ipsum dolor.</p>
                <p className=' py-4 flex text-green-600'><AiOutlineCheck className='mr-5' size={20}/>Lorem, ipsum dolor.</p>
                <p className=' py-4 flex text-green-600'><AiOutlineCheck className='mr-5' size={20}/>Lorem, ipsum dolor.</p>
                <p className='py-4 flex text-green-600'><AiOutlineCheck className='mr-5' size={20}/>Lorem, ipsum dolor.</p>
                <button  className='w-full py-4 my-3'>Get Started</button>
            </div>
            </div>

                   <div className='bg-white  text-slate-900 m-4 p-4 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
            <div>
                <p className='text-6xl font-bold py-4 flex'>$99<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-2xl lg:text-1xl py-8 text-slate-500'>
            Lorem ipsum dolor, sit amet consectetur adipisicing.
            </p>
            <div className='relative'>
                <p className=' py-4 flex text-green-600'><AiOutlineCheck className='mr-5'  size={20}/>Lorem, ipsum dolor.</p>
                <p className=' py-4 flex text-green-600'><AiOutlineCheck className='mr-5' size={20}/>Lorem, ipsum dolor.</p>
                <p className=' py-4 flex text-green-600'><AiOutlineCheck className='mr-5' size={20}/>Lorem, ipsum dolor.</p>
                <p className=' py-4 flex text-green-600'><AiOutlineCheck className='mr-5' size={20}/>Lorem, ipsum dolor.</p>
                <p className='py-4 flex text-green-600'><AiOutlineCheck className='mr-5' size={20}/>Lorem, ipsum dolor.</p>
                <button  className='w-full py-4 my-3'>Get Started</button>
            </div>
            </div>   
       </div>      
    </div>
    </div>
  )
}

export default Pressing