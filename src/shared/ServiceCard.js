import React from 'react'

const ServiceCard = ({service}) => {
    const {title, img, description, price} = service;
  return (
    <div className="hover:shadow-lg p-12 rounded-lg text-center cursor-pointer">
        <img src={img} className='w-20 mx-auto' alt="" />
        <h3 className='text-lg font-bold mt-2'> {title}</h3>
        <p className='text-primary font-bold'>${price}</p>
        <p>{description}</p>
    </div> 
  )
}

export default ServiceCard
