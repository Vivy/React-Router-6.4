import { Link } from 'react-router-dom';

const NotFount = () => {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quod
        temporibus maxime doloremque recusandae exercitationem, natus veritatis
        omnis minus esse possimus maiores praesentium tempora tempore optio
        nisi? Quis, natus labore.
      </p>
      <p>
        Go to the <Link to='/'>HomePage</Link>.
      </p>
    </div>
  );
};

export default NotFount;
