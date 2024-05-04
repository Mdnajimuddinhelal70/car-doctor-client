import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";



const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
    },[])
  return (
    <div className="mt-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-orange-500">Services</h2>
        <h1 className="text-5xl">Our services Area</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          ipsum culpa deleniti pariatur ipsa necessitatibus animi, sed
          aspernatur natus ducimus voluptas officiis rem eius ullam. Odio saepe
          ut omnis eaque!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            services?.map(service => <ServiceCard
            key={Math.random}
            service={service}
            ></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;
