import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const About = () => {
  const [user, setUser] = useState('cucubau');

  if (!user) {
    return <Navigate to='/' replace={true} />;
  }

  return (
    <div className='about'>
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima esse eos
        quasi saepe officiis fugiat beatae necessitatibus voluptates fuga iure
        tenetur voluptatem, cumque nihil recusandae ex cum nobis harum ullam.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, iste
        temporibus tenetur deserunt recusandae rerum eveniet, tempore sed,
        praesentium quod amet sequi. Veritatis laudantium neque, fuga ea nihil
        aliquid repellat!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        nulla sapiente deserunt voluptatem blanditiis culpa aut autem placeat
        dicta, magnam enim ratione laboriosam qui, nobis modi repudiandae sunt
        aliquam corporis.
      </p>

      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
};

export default About;
