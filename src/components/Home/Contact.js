import React from 'react'

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div className='bg-red-50 py-16'>
    <h2 className='text-4xl text-center text-neutral font-bold mb-12'>Let us handle your
      <br /> 
        project, professionally.
    </h2>
    
    <div className='container mx-auto px-16 '>
      
    <form onSubmit={handleSubmit}> 
    <div className="contact-form mx-auto w-2/4">
        <div className='flex w-full gap-4'>
            <div className='w-2/4'>
                <input type="text" placeholder="First Name" className="input w-full" />
            </div> 
            <div className='w-2/4'>
                <input type="text" placeholder="Last Name" className="input w-full" />
            </div> 
        </div>
        <div className='flex gap-4 mt-4'>
            <div className='w-2/4'>
                <input type="email" placeholder="Email Address" className="input w-full" />
            </div> 
            <div className='w-2/4'>
                <input type="text" placeholder="Phone Number" className="input w-full" />
            </div> 
        </div>
        <div className='mt-4'>
            <textarea className="textarea w-full h-48" placeholder="Message"></textarea>
        </div>
        <div className='text-center mt-4'>
            <input type="submit" value='Send Message' className='btn btn-primary text-white' />
        </div>
    </div>
    </form>
    </div>
    </div>
  )
}

export default Contact
