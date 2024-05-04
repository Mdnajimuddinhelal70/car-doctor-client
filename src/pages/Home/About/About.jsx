
import persopn from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200 mt-10">
      <div className="hero-content flex-col lg:flex-row">
       <div className='lg:w-1/2 relative'>
       <img
          src={persopn}
          className="w-3/4 rounded-lg shadow-2xl"
        />
       <img
          src={parts}
          className="w-1/2 right-5 top-1/2 border-8 border-x-white absolute rounded-lg shadow-2xl"
        />
       </div>
        <div className='lg:w-1/2 space-y-5 p-4'>
            <h3 className='font-bold text-orange-500 text-3xl'>About us</h3>
          <h1 className="text-5xl font-bold">MY Office News!</h1>
          <p className="py-6">
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime hic dolore quae non ipsa quam dolores ad molestias doloremque nesciunt labore aut ex, repellat nihil tenetur similique soluta eligendi rem?
          </p>
          <p className="py-6">
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime hic dolore quae non ipsa quam dolores ad molestias doloremque nesciunt labore aut ex, repellat nihil tenetur similique soluta eligendi rem?
          </p>
          <button className="btn btn-warning">Get more info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
