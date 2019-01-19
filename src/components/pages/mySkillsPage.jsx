import React from 'react';
import JsLogo from '../../images/JS.png';
import Css3Logo from '../../images/css3.png';
import Html5Logo from '../../images/html5.png';
import NodeJsLogo from '../../images/nodejs.png';
import JQueryLogo from '../../images/jquery.png';
import ReactLogo from '../../images/react.png';
import AngularLogo from '../../images/angular.svg';
import VueLogo from '../../images/vue.png';
import CppLogo from '../../images/c++.png';
import JavaLogo from '../../images/java.png';

const Skills = () => {
    
        return (
            <div className="skills_container">
                <div className="skills_box">
                    <img src={JsLogo} alt="Javascript" className="skills_tech_logo" />
                    <div className="skills_box_info">
                        <h6>Javascript</h6>
                        <p>Potrafię napisać skrypty poprawiające dynamikę strony, rozumiem podstawowe zagadnienia związane z tym językiem czy model programowania obiektowego. </p>
                        <p>Wiem czym są prototypy, promise, funkcje asynchroniczne, pliki JSON, klasy, obiekty, strict mode, this, funkcje callback, czyli wszystko co potrzebne do stworzenia strony.</p>
                    </div>
                </div>
                <div className="skills_box">
                    <img src={Css3Logo} alt="CSS3" className="skills_tech_logo" />
                    <div className="skills_box_info">
                        <h6>Cascading Style Sheets</h6>
                        <p>Wiem co to Box Model, jak stylować tekst, poprawnie rozkładać treści na stronie. </p>
                        <p>Znam model siatki (CSS Grid) i jak go używać z Flexbox'em. </p>
                        <p>Rozumiem czym polega działanie LESS i SASS, uczę się ich używać, oraz Bootsrap czy innych frameworków CSS.</p>
                        <p>Potrafię zaimplementować RWD (Responsive Web Design) poprzez Media Queries. </p>
                    </div>
                </div>
                <div className="skills_box">
                    <img src={Html5Logo} alt="HTML5" className="skills_tech_logo" />
                    <div className="skills_box_info">
                        <h6>Hypertext Markup Language</h6>
                        <p>Potrafię stworzyć funkcjonalny szkielet strony internetowej, używać tabel, list, importowania obrazów, filmów wideo, audio. </p>
                        <p>Wiem jak wstawić skrypty potrzebne zdynamizowania strony czy podłączyć dokument stylów kaskadowych.</p>
                        <p>Posiadam podstawową wiedzę o HTML Canvas, WebRTC czy Caching, HTTP requests.</p>
                    </div>
                </div>
                <div className="skills_box">
                    <img src={NodeJsLogo} alt="NodeJs" className="skills_tech_logo" />
                    <div className="skills_box_info">
                        <h6>Node.js</h6>
                        <p>Potrafię stworzyć środowisko, które pomaga w budowie aplikacji Web'owej, znam podstawowe frameworki tj Express, Babel, Selenium, esLint czy Nodemon. </p>
                        <p>Wiem jak uzywać komend NPM w podstawowym zakresie, rozumiem ideę testowania, debuggowania, RESTful API, stosowania szablonów czy łączenia się z bazami danych SQL, MongoDB.</p>
                    </div>
                </div >
                <div className="skills_box">
                    <img src={JQueryLogo} alt="JQuery" className="skills_tech_logo" />
                    <div className="skills_box_info">
                        <h6>jQuery</h6>
                        <p>Znam podstawowe funkcje i właściwości tej biblioteki, umiem manipulować elementami DOM.</p>
                        <p>Potrafię stworzyć funkcjonalną stronę za pomocą jQuery.</p>
                    </div>
                </div>
                <div className="skills_box">
                    <img src={ReactLogo} alt="ReactJS" className="skills_tech_logo" />
                    <div className="skills_box_info">
                        <h6>ReactJS</h6>
                        <p>Znam podstawy biblioteki, React Router, praca w metodologii Flux.</p>
                        <p>Jestem w stanie zbudować strony oparte na ReactJS.</p>
                    </div>
                </div>
                <div className="skills_box">
                    <img src={AngularLogo} alt="AngularJS" className="skills_tech_logo" />
                    <div className="skills_box_info">
                        <h6>Angular</h6>
                        <p>Jestem w trakcie nauki...</p>
                    </div>
                </div>
                <div className="skills_box">
                    <img src={VueLogo} alt="VueJS" className="skills_tech_logo" />
                    <div className="skills_box_info">
                        <h6>Vue.js</h6>
                        <p>Niewiele wiem na jego temat, ale z chęcią rozpocząłbym jego naukę, jeżeli wymagałoby ode mnie tego stanowisko.</p>
                    </div>
                </div>
                <div className="skills_box">
                    <img src={CppLogo}alt="C++" className="skills_tech_logo" />
                    <div className="skills_box_info">
                        <h6>C++</h6>
                        <p>Bardzo popularny język do programowania złożonych aplikacji. Chcę się go nauczyć pod kątem tworzenia gier.</p>
                        <p>Chciałbym go poznać na tyle dobrze aby móc dodawać nowe rozwiązania do JavaScript.</p>
                    </div>
                </div>
                <div className="skills_box">
                    <img src={JavaLogo} alt="Java" className="skills_tech_logo" />
                    <div className="skills_box_info">
                        <h6>Java</h6>
                        <p>Jestem w trakcie nauki...</p>
                    </div>
                </div>
            </div >
        );
    
}
export default Skills;