import { useLoaderData, useParams } from 'react-router-dom';

const CareerDetailes = () => {
  const { id } = useParams();

  const career = useLoaderData();

  return (
    <div className='career-detailes'>
      <h2>Career Detailes for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className='detailes'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          dolore amet est, impedit esse, hic dolorum expedita illum blanditiis
          eos repellendus corporis veniam placeat accusantium dolores sapiente
          sint fugit accusamus.
        </p>
      </div>
    </div>
  );
};

export default CareerDetailes;

export const careerDetailesLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`http://localhost:4000/careers/${id}`);

  if (!res.ok) {
    throw Error('Could not find that career');
  }
  return res.json();
};
