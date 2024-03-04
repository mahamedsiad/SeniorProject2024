import React , {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

function Teams() {
     const [nba, setNba] = useState([])
     useEffect(() => {
       const getTeamINfo = async () => {
         const res = await fetch(
           "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard"
         )
         const data = await res.json()
         console.log(data)
         data.events ? setNba(data.events) : ""
       }
       getTeamINfo()
     }, [])
     const getMonthAndDate = (isoDate) => {
      /*grabs*/
       const dateObj = new Date(isoDate)
       const month = dateObj.toLocaleString("en-US", { month: "short" })
       const day = dateObj.toLocaleString("en-US", { weekday: "short" })
       const date = dateObj.getDate()
       return { month, day, date }
     }


 return (
  /*I'm looping through the Api*/
   <div class="container">
     <div class="matchs" id="match-date">
       {nba.map((teams, index) => (
        <>
        
        <div class="match">
           <div key="index" class="flags">
             <div class="home-flag">
               <img
                 class="flag"
                 src={teams.competitions[0].competitors[0].team.logo}
               ></img>
               <h3 class="home-team">
                 {teams.competitions[0].competitors[0].team.displayName}
               </h3>
             </div>
             <span class="vs">vs</span>
             <div class="away-flag">
               <img
                 class="flag"
                 src={teams.competitions[0].competitors[1].team.logo}
               ></img>
               <h3 class="home-team">
                 {teams.competitions[0].competitors[1].team.displayName}
               </h3>
             </div>
           </div>
           <div class="time-area">
             <div class="time">
               <h4 class="month">{getMonthAndDate(teams.date).month}</h4>
               <h4 class="day">{getMonthAndDate(teams.date).day}</h4>
               <h4 class="date">{getMonthAndDate(teams.date).date}</h4>
             </div>
             <h4 class="match-time">{teams.date.slice(11, 16)}</h4>
             
           </div>
           <button><Link to={`/SaveGames/${teams.id}`}>Save Games</Link></button>
         </div>
        </>
         
       ))}
     </div>
   </div>
 )
}


export default Teams

