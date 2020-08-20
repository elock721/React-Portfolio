import React, {useState} from "react";
import ProjectCard from "./ProjectCard";
const Projects = (props) => {
    const [data, setData] = useState([{
        name: "Fish Guide Friend",
        description: "Fish Guide Friend is an application that allows the user to find the mostly highly rated fishing guides in a specific area",
        github: "https://github.com/elock721/Fish-Guide-Friend",
        deployed: "https://mcui1997.github.io/Fish-Guide-Friend/"
    }, {
        name: "Find My Fare",
        description: "Find My Fare is an application that allows the user to find the best food trucks available in the Austin Area",
        github: "https://github.com/elock721/Project-2-Idea",
        deployed: "https://find-my-fare.herokuapp.com/  "
    }, {
        name: "Progressive Budget",
        description: "This application the user to keep track of their budget with or with out the internet",
        github: "https://github.com/elock721/Progressive-Budget",
        deployed: "https://intense-garden-04775.herokuapp.com/"
    }, {
        name: "Note Taker Application",
        description: "This note taking application allows you to write, save and delete notes",
        github: "https://github.com/elock721/Note-Taker",
        deployed: "https://blooming-earth-28937.herokuapp.com/"
    }, {
        name: "Weather Forecaster",
        description: "Easily get the weather forcast for any city you search",
        github: "https://github.com/elock721/Weather-Dashboard",
        deployed: "https://elock721.github.io/Weather-Dashboard/"
    }, {
        name: "Day Planner",
        description: "This day planning application helps you keep track of your day",
        github: "https://github.com/elock721/Work-Day-Planner",
        deployed: "https://elock721.github.io/Work-Day-Planner"
    }])
    return (
        <div>
            <h1>Projects</h1>
            {data.map((project, i)=> (<ProjectCard key={i} project={project}/>))}
        </div>
    )
}
export default Projects;