import React from 'react'
import { Link , useNavigate } from 'react-router-dom'
import headerImg  from '../img/Part-GTY-1951191788-1-1-0.jpg'
const Home = () => {
    const navigate = useNavigate()
    const handleNavigateToTeams = () => {
        navigate('/Teams');
      };
  return (
   <React.Fragment>

<header class="section__container header__container">
      <div class="header__content">
        <span class="bg__blur"></span>
        <span class="bg__blur header__blur"></span>
      
        <h1><span>Do</span> YOU LIKE THE NBA?</h1>
        <p>
          Stay up to date with the latest games by using our website, click below to check out the games
        </p>
        {/* <button class="btn">Get Started</button> */}
        <button className="btn" onClick={handleNavigateToTeams}>Games</button>
      </div>
      <div class="header__image">
        <img   src={headerImg} alt="header" />
      </div>
    </header>



   </React.Fragment>
  )
}

export default Home