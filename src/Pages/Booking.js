import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import logo from '../Assets/logo.png'

const Booking = () => {
    const {id} = useParams();
    const [services, setServices] = useState([]);
    const [get, setGet] = useState('')

    useEffect(() => {
        fetch('/services.json')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setServices(data);
        })
    }, [])

    useEffect(() => {
        const unique = services.filter(s => s.id == id);
        setGet(unique)
        console.log(unique);
    }, [services])

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')


    const handleSubmit =(e) => {
        e.preventDefault();
        const order ={
            name, 
            email,
            phone, 
            address
        }
        console.log(order);
    }

  return (<>
    <div className='text-center mt-14'>
           <Link to='/'>
                 <img src={logo} className='w-32 mx-auto' alt="" />
            </Link> 
        </div>
    <div className="w-1/3 mx-auto border p-8 shadow-2xl rounded-xl overflow-hidden mt-8">
      <div className='flex justify-between items-center'>
        <div>
            <h2 className='text-2xl font-bold text-primary text-center mb-4'> {get[0]?.title}</h2>
        </div>
        <div>
            <h2 className='text-2xl font-bold text-primary text-center mb-4'> ${get[0]?.price}</h2>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="name" onChange={(e) => setName(e.target.value)} className="w-full border-b-2 px-2 py-2 mb-4 outline-0" placeholder="User Name" />
        </div>
        <div>
          <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} className="w-full border-b-2 px-2 py-2 mb-4 outline-0" placeholder="User email" />
        </div>
        <div>
          <input type="text" name="phone" onChange={(e) => setPhone(e.target.value)} className="w-full border-b-2 px-2 py-2 mb-4 outline-0" placeholder="Phone Number" />
        </div>
        <div>
          <input type="text" name="address" onChange={(e) => setAddress(e.target.value)} className="w-full border-b-2 px-2 py-2 mb-4 outline-0" placeholder="User Address" />
        </div>
        <div>
          <input
            type="submit"
            className="btn btn-primary w-full my-4"
            value="Book Order"
          />
        </div>
      </form>
    </div>
    </>
  )
}

export default Booking
