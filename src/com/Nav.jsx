import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Logo from '../img/user.jpg'
function Nav({ user }) {
  const [menuActive, setMenuActive] = useState(false);

  const handleProfileClick = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav>
      <div className="menu-toggle">
        <div className="content">
            <Link to='/'><h3 style={{color:'white'}}>Home</h3></Link>
          
          <h3>Teams</h3>
        </div>
      </div>
      <div className="profile" onClick={handleProfileClick}>
        <div className="user">
        <h3>{user ? user.email : 'Guest'}</h3>
         
        </div>
        <div className="img-box">
          {/* <img src="https://i.postimg.cc/BvNYhMHS/user-img.jpg" alt="some user image" /> */}
          <img src={Logo} alt="" />
          {/* <i class="fa-regular fa-user"></i> */}
        </div>
      </div>
      <div className={`menu ${menuActive ? 'active' : ''}`}>
        <ul>
          <li>
            <Link to="Login">
              <i className="ph-bold ph-question"></i>&nbsp;Login
            </Link>
          </li>
          <li>
            <Link to="Signup">
              <i className="ph-bold ph-sign-out"></i>&nbsp;Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
