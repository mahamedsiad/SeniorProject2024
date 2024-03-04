
import React, { useState } from 'react';
import { Link  } from 'react-router-dom';
import Logo from '../img/user.jpg';
import { auth } from '../Firebase';
import { signOut } from 'firebase/auth';

function Nav({ user }) {
  const [menuActive, setMenuActive] = useState(false);

  const handleProfileClick = () => {
    setMenuActive(!menuActive);
  };

  const handleSignOut = async ()=>{
    await signOut(auth)
  }

  return (
    <nav>
      <div className="menu-toggle">
        <div className="content">
          <Link to='Home'>
            <h3 style={{ color: 'white' }}>Home</h3>
          </Link>
          {/* <h3>Teams</h3> */}
          <Link to="Teams">
                  <h3 style={{color:'white'}}>Teams</h3>
                </Link>
        
          <Link to="SaveGames">
                  <h3 style={{color:'white'}}>Saved Games</h3>
                </Link>
        
        </div>
      </div>
      <div className="profile" onClick={handleProfileClick}>
        <div className="user">
          <h3 style={{color:'white'}}>{user ? user.email : ''}</h3>
        </div>
        <div className="img-box">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className={`menu ${menuActive ? 'active' : ''}`}>
        <ul>
          {user ? (
            // If user is authenticated, show Logout button
          <>
            <li>
              
              <Link  >
                <i className="ph-bold ph-sign-out"></i>&nbsp;games  
              </Link>
            </li>
            <li>
              
              <Link to="" onClick={handleSignOut} >
                <i className="ph-bold ph-sign-out"></i>&nbsp;Sign out
              </Link>
            </li>
          </>
          
          ) : (
            // If user is not authenticated, show Login and Signup links
            <>
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
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

