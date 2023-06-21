import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#111827] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/c3d4b13a-033d-4c6d-aea6-2ea4b1d51158" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>Submit the form below or shoot me an email</p>
        </div>
        <input className='bg-slate-500 p-2' type="text" name='name' placeholder='Enter your name' />
        <input className='my-4 bg-slate-500 p-2' type="email" name='email' placeholder='Enter your email'  />
        <textarea className='bg-slate-500 p-2' name="message" placeholder="Enter your message" cols="30" rows="10"></textarea>
        <button className='text-white border-2 my-8 px-4 py-3 flex items-center mx-auto hover:border-pink-600 hover:bg-pink-600'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact
