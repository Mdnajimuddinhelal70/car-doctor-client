import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const {signIn} = useContext(AuthContext)

    const handleLogin = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)

      signIn(email, password)
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
          <form onSubmit={handleLogin} className="card-body">
          <h1 className="text-3xl text-center text-sky-500 font-bold">Login</h1>
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
            <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center mb-4">New here? go to <Link to='/signup' className="text-amber-500 font-bold">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
