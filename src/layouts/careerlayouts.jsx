import { Outlet } from 'react-router-dom';

const CareersLayout = () => {
  return (
    <div className='career-layout'>
      <h2>Careers</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        consequatur excepturi suscipit cumque fuga similique nam, in,
        repudiandae optio modi laudantium odio. Reprehenderit nihil suscipit
        sit, molestias dolorem quia nemo.
      </p>
      <Outlet />
    </div>
  );
};

export default CareersLayout;
