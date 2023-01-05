import React from 'react'
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id, title, img, description, price} = service;
  return (
    <div className="hover:shadow-lg p-12 rounded-lg text-center cursor-pointer border">
        <img src={img} className='w-20 mx-auto' alt="" />
        <h3 className='text-lg font-bold mt-2'> {title}</h3>
        <p className='text-primary font-bold'>${price}</p>
        <p className='mt-4'>{description}</p>
        <div className="text-center mt-6">
          <Link to={`/booking/${_id}`}>
            <button className="btn bg-primary border-0 text-accent">Booking</button>
          </Link>
      </div> 
    </div> 
  )
}

export default ServiceCard
