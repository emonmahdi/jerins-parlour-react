import React, { useEffect, useState } from "react";
import ServiceCard from "../../shared/ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => {
            setServices(data);
            // console.log(data);
        })
    }, [])

  return (
    <div className="py-16 container mx-auto w-fit overflow-hidden">
      <h2 className="text-3xl text-center font-bold mb-6">
        Our Awesome <span className="text-primary">Services</span>{" "}
      </h2>
      <div className="grid lg:grid-cols-3 gap-4 hover:drop-shadow-2xl">
        {
            services.map(service => <ServiceCard
            key={service._id}
            service={service}
            ></ServiceCard>)
        }
         
      </div>
      <div className="text-center mt-12">
        <button className="btn bg-primary border-0 text-accent">Explore More</button>
      </div> 
    </div>
  );
};

export default Services;
