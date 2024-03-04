import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SaveGames = () => {
  const { id } = useParams();
  const [displaySavedGames, setDisplaySavedGames] = useState();

  useEffect(() => {
    const fetchSavedGames = async () => {
      try {
        const res = await fetch("https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard");
        const data = await res.json();

        // Find the specific game with the matching ID
        const clickedGame = data.events.find(date => date.competitions.some(game => game.id === id));

        // Extract home and away team information from the clicked game
        const homeTeam = clickedGame?.competitions[0]?.competitors[0]?.team;
        const awayTeam = clickedGame?.competitions[0]?.competitors[1]?.team;

        // Log the team information to the console to see
        console.log("Home Team:", homeTeam?.displayName);
        console.log("Home Team Logo:", homeTeam?.logo);
        console.log("Away Team:", awayTeam?.displayName);
        console.log("Away Team Logo:", awayTeam?.logo);

        // You can set the team information in the state if needed
        //Putting the info in the use state
        setDisplaySavedGames({ homeTeam, awayTeam });
      } catch (error) {
        console.error("Error fetching saved games:", error);
      }
    };

    // Call the fetchSavedGames function
    fetchSavedGames();
  }, [id]); // Update the dependency array to include id


  return (
    <div>
      <h2>Saved Games</h2>
      {/* Display the team information in the UI if needed */}
      {displaySavedGames && (
        /*showing the api information the user clicked on*/
        <div class="matchs" id="match-date">
            <div class="match">
            <div key="index" class="flags">
             <div class="home-flag">
             <img src={displaySavedGames.homeTeam?.logo} alt={`${displaySavedGames.homeTeam?.displayName} Logo`} />
              
             </div>
             <span class="vs">vs</span>
             <div class="away-flag">
             { <img src={displaySavedGames.awayTeam?.logo} alt={`${displaySavedGames.awayTeam?.displayName} Logo`} /> }
             
             </div>
           </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default SaveGames;
