import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const {user} = useContext(AuthContext)
  const { title, _id, price, img } = service;

  const handleBookService = e => {
    e.preventDefault();
   
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
        customerName: name,
        email,
        img,
        date,
        service_id: _id,
        price: price
    }
    console.log(booking)

    fetch('http://localhost:5000/bookings', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.insertedId){
          alert('Data added successfully')
        }
    })
  }
  return (
    <div>
      <h2>Book service : {title}</h2>

      <form onSubmit={handleBookService} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
             defaultValue={user?.displayName}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          {/*  */}
          <div className="form-control">
            <label className="label">
            
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due amount</span>
            </label>
            <input
              type="text"
               name="price"
             defaultValue={"$" + price}
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="form-control mt-6">
          <input
            type="submit"
            className="btn btn-primary btn-block"
            value="Order confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
