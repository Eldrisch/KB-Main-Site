import React from 'react';
import KBWeather from '../../images/pogodowa.jpg';

const Projects = () => {

    return (
        <div className="projects_container">
            <h3>Moje Projekty:</h3>
            <a href="http://kbweather.kbaranowski.pl/" className="projects_box">
                <img src={KBWeather} alt="KBWeather" className="projects_img" />
                <p className="projects_text">Strona pogodowa dla DevPractice</p>
            </a>

        </div>
    );

}
export default Projects;