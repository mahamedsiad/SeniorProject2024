import React , {useState ,useEffect} from 'react'
import Team1 from '../img/Unknown.png'
import Team2 from '../img/slide_2.jpg'
const Teams = () => {
    const [nba, setNba] = useState([]);
  useEffect(() => {
    const getTeamINfo = async () => {
      const res = await fetch(
        "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard",
      );
      const data = await res.json();
      console.log(data);
      data.events ? setNba(data.events) : "";
    };
    getTeamINfo();
  }, []);
  const getMonthAndDate = (isoDate) => {
    const dateObj = new Date(isoDate);
    const month = dateObj.toLocaleString("en-US", { month: "short" });
    const day = dateObj.toLocaleString("en-US", { weekday: "short" });
    const date = dateObj.getDate();
    return { month, day, date };
  };
  return (
      <React.Fragment>
      
      <div class="container">
      <div class="matchs" id="match-date">
       
          <div class="match">
            <div key="index" class="flags">
              <div class="home-flag">
                <img
                  class="flag"
                  src={Team1}
                ></img>
                <h3 class="home-team">
                home team
                </h3>
              </div>
              <span class="vs">vs</span>
              <div class="away-flag">
                <img
                  class="flag"
                  src={Team2}
                ></img>
                <h3 class="home-team">
                 away team
                </h3>
              </div>
              
            </div>
            <div class="time-area">
              {/* <div class="time">
                // <h4 class="month">{getMonthAndDate(teams.date).month}</h4>
                <h4 class="day">{getMonthAndDate(teams.date).day}</h4>
                <h4 class="date">{getMonthAndDate(teams.date).date}</h4>
              </div> */}
              {/* <h4 class="match-time">{teams.date.slice(11, 16)}</h4> */}
            </div>
          </div>
       
      </div>
    </div>
<div class="container">
      <div class="matchs" id="match-date">
       
          <div class="match">
            <div key="index" class="flags">
              <div class="home-flag">
                <img
                  class="flag"
                  src={Team1}
                ></img>
                <h3 class="home-team">
                home team
                </h3>
              </div>
              <span class="vs">vs</span>
              <div class="away-flag">
                <img
                  class="flag"
                  src={Team2}
                ></img>
                <h3 class="home-team">
                 away team
                </h3>
              </div>
              
            </div>
            <div class="time-area">
              {/* <div class="time">
                // <h4 class="month">{getMonthAndDate(teams.date).month}</h4>
                <h4 class="day">{getMonthAndDate(teams.date).day}</h4>
                <h4 class="date">{getMonthAndDate(teams.date).date}</h4>
              </div> */}
              {/* <h4 class="match-time">{teams.date.slice(11, 16)}</h4> */}
            </div>
          </div>
       
      </div>
    </div>
    <div class="container">
      <div class="matchs" id="match-date">
       
          <div class="match">
            <div key="index" class="flags">
              <div class="home-flag">
                <img
                  class="flag"
                  src={Team1}
                ></img>
                <h3 class="home-team">
                home team
                </h3>
              </div>
              <span class="vs">vs</span>
              <div class="away-flag">
                <img
                  class="flag"
                  src={Team2}
                ></img>
                <h3 class="home-team">
                 away team
                </h3>
              </div>
              
            </div>
            <div class="time-area">
              {/* <div class="time">
                // <h4 class="month">{getMonthAndDate(teams.date).month}</h4>
                <h4 class="day">{getMonthAndDate(teams.date).day}</h4>
                <h4 class="date">{getMonthAndDate(teams.date).date}</h4>
              </div> */}
              {/* <h4 class="match-time">{teams.date.slice(11, 16)}</h4> */}
            </div>
          </div>
       
      </div>
    </div>
    <div class="container">
      <div class="matchs" id="match-date">
       
          <div class="match">
            <div key="index" class="flags">
              <div class="home-flag">
                <img
                  class="flag"
                  src={Team1}
                ></img>
                <h3 class="home-team">
                home team
                </h3>
              </div>
              <span class="vs">vs</span>
              <div class="away-flag">
                <img
                  class="flag"
                  src={Team2}
                ></img>
                <h3 class="home-team">
                 away team
                </h3>
              </div>
              
            </div>
            <div class="time-area">
              {/* <div class="time">
                // <h4 class="month">{getMonthAndDate(teams.date).month}</h4>
                <h4 class="day">{getMonthAndDate(teams.date).day}</h4>
                <h4 class="date">{getMonthAndDate(teams.date).date}</h4>
              </div> */}
              {/* <h4 class="match-time">{teams.date.slice(11, 16)}</h4> */}
            </div>
          </div>
       
      </div>
    </div>
       
    
      </React.Fragment>
  )
}

export default Teams