import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBooking(data)
      });
  }, []);

  const handleDelete = (id) => {
    const procced = confirm("Are you sure you want to delete?");
    if (procced) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfull");
            const remaining = booking.filter(book => book._id !== id)
            setBooking(remaining)
          }
        });
    }
  };

  const handleConfirm = id => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
       body: JSON.stringify({status: 'confirm'})
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.modifiedCoun > 0){
        // update state
        const remaining = booking.filter(book => book._id !== id);
        const updated = booking.find(book => book._id === id);
        updated.status = 'confirm'
        const newBooking = [updated, ...remaining];
        setBooking(newBooking);
      }
    })
  }
  return (
    <div>
      <h2 className="text-2xl">Your bookings: {booking.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <div className="text-center justify-start">
                <th>Image</th>
                <th>Service</th>
                <th>Date</th>
                <th>Price</th>
                <th>Status</th>
              </div>
            </tr>
          </thead>
          <tbody>
            {booking.map((book) => (
              <BookingRow
                key={Math.random}
                book={book}
                handleDelete={handleDelete}
                handleConfirm={handleConfirm}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
