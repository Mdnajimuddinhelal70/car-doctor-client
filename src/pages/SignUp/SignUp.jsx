import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const SignUp = () => {
  const {createUser} = useContext(AuthContext)
    const handleSignUp = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password)

       createUser(email, password)
       .then(result => {
        console.log(result.user)
       })
       .catch(error => {
        console.log(error)
       })
    }
    return (
        <div className="hero min-h-screen bg-base-200 mt-7">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 mr-16">
           
           <img src={img} alt="" />
          </div>
          <div className="card shrink-0 bg-lime-400 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-3xl text-center text-sky-500 font-bold">Sign Up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
               <input className="btn btn-primary" type="submit" value="Submit" />
              </div>
            </form>
            <p className="text-center mb-4">Already have an acount? go to <Link to='/login' className="text-cyan-600 font-bold">Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;