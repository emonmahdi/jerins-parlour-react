import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify"; 
import logo from "../Assets/logo.png";
import auth from "../firebase.init";
import useServiceDetails from "../hook/useServiceDetails";

const Booking = () => {
  const [user] = useAuthState(auth);
  const { Id } = useParams(); 
  const [service] = useServiceDetails(Id);  
 
 /*  useEffect(() => {
    
  }, [id]);  */ 
 /*  useEffect(() => {
    const unique = services.filter((s) => s?._id === id);
    setGet(unique);
    // console.log(unique);
  }, [services]); */

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");


  const order = { 
    name:user?.displayName,
    email:user?.email,
    phone,
    address,
    serviceTitle: service.title,
    servicePrice: service.price,
    serviceImg: service.img,

  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log(order);
    
    const url = `http://localhost:5000/service`;
    axios.post(url, order )
    .then(res => {
      const {data} = res;
      if(data.insertedId){
        toast.success('Your order confirmed successfully!');
        
      }
      console.log(res);
    })
    /* fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application.json'
      }, 
      body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    }) */
  };

  return (
    <>
      <div className="text-center mt-14">
        <Link to="/">
          <img src={logo} className="w-32 mx-auto" alt="" />
        </Link>
      </div>
      <div className="w-1/3 mx-auto border p-8 shadow-2xl rounded-xl overflow-hidden mt-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-primary text-center mb-4">
              {" "} 
              {service?.title}
            </h2>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary text-center mb-4">
              {" "}
              ${service?.price}
            </h2>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              value={user?.displayName} 
              onChange={(e) => setName(e.target.value)}
              className="w-full border-b-2 px-2 py-2 mb-4 outline-0"
              placeholder="User Name"
            />
          </div>
          <div>
            <input
              type="email"
              name='email'
              value={user?.email} 
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b-2 px-2 py-2 mb-4 outline-0"
              placeholder="User email"
            />
          </div>
          <div>
            <input
              type="text"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border-b-2 px-2 py-2 mb-4 outline-0"
              placeholder="Phone Number"
            />
          </div>
          <div>
            <input
              type="text"
              name="address"
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border-b-2 px-2 py-2 mb-4 outline-0"
              placeholder="User Address"
            />
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
  );
};

export default Booking;
