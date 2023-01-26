import { NavLink, Outlet } from 'react-router-dom';

const HelpLayout = () => {
  return (
    <div className='help-layout'>
      <h2>Website Help</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque fugiat
        in repellendus odio a rem, consectetur necessitatibus officia numquam
        deleniti temporibus architecto dolorum quisquam atque laboriosam facere
        cupiditate, sed dolores!
      </p>
      <nav>
        <NavLink to='faq'>FAQ</NavLink>
        <NavLink to='contact'>Contact</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HelpLayout;
