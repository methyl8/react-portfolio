import React from "react";
import Project from "../Project"
//import project images
import playlistProducerImg from "../assets/images/playlistProducer.png";
import couchPotatoImg from "../assets/images/couchPotato.png"
import jateImg from "../assets/images/jate.png"
import weatherImg from "../assets/images/weatherDashboard.png"
import noteTakerImg from "../assets/images/noteTaker.png"
import workdayImg from "../assets/images/workdayScheduler.png"


function Portfolio() {
//array of project objects
  const projects = [
    {
      id: 1,
      name: "Playlist Producer",
      description: "Gets popular playlists using the Napster API based on user-selected moods, represented by emojis.",
      image: playlistProducerImg,
      gitlink: "https://github.com/jessicamorse23/Playlist-Producer",
      livelink: "https://jessicamorse23.github.io/Playlist-Producer"
    },
    {
      id: 2,
      name: "Couch Potato",
      description: "Allows user to save favorite movies from a list of the top 1000 movies in IMDB.  With login, allows search by genre and title.  Without login it displays a random selection of 10 movies.",
      image: couchPotatoImg,
      gitlink: "https://github.com/mbronstein1/Couch-Potato",
      livelink: "https://infinite-river-93616.herokuapp.com/"
    },
    {
      id: 3,
      name: "Just Another Text Editor",
      description: "Modify starter code to deploy a Progressive Web App that allows text entry.",
      image: jateImg,
      gitlink: "https://github.com/methyl8/Challenge-19-Text-Editor",
      livelink: ""
    },
    {
      id: 4,
      name: "Weather Dashboard",
      description: "Use OpenWeather API to get the weather for a searched US city destination.  Previous searches are stored in local storage.",
      image: weatherImg,
      gitlink: "https://github.com/methyl8/Challenge-6-Weather-App",
      livelink: "https://methyl8.github.io/Challenge-6-Weather-App/"
    },
    {
      id: 5,
      name: "Note Taker",
      description: "A note-taking application that allows entry and deletion of personal notes using an Express JS server.",
      image: noteTakerImg,
      gitlink: "https://github.com/methyl8/Challenge-11-Note-Taker",
      livelink: "https://still-meadow-45845.herokuapp.com/"

    },
    {
      id: 6,
      name: "Workday Scheduler",
      description: "An hourly calendar for the current work day.",
      image: workdayImg,
      gitlink: "https://github.com/methyl8/Challenge-5-Workday-Scheduler",
      livelink: "https://methyl8.github.io/Challenge-5-Workday-Scheduler/"

    }

  ]
return(
<>
<h1 className="text-center">Portfolio</h1>
<div className="row">
  {projects.map((project) => <Project key={project.id} {...project} />)}
</div>
</>
)
}

export default Portfolio;