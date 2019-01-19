import React from 'react';
import Me from '../../images/portrait.jpg';

const Home = () => {
    
        return (
            <div className="home_container">
                <h3>Strona główna</h3>
                <div className="home_main">
                    <img src={Me} alt="Powinienem być ja!" className="home_me" />
                    <div className="home_description">
                        <p>Cześć, jestem Kacper!</p>
                        <p>Witam na mojej stronie portfolio. Jest ona aktualizowana na bieżąco, staram się wprowadzać nowo poznane rozwiązania.</p>
                        <p>Jest to druga wersja tej witryny. Pierwsza jest dostępna jako archiwum pod tym <a href="https://github.com/Eldrisch/Mini-Portfolio-Site">linkiem</a>.</p>
                        <p>Zapraszam również na mój profil <a href="https://github.com/Eldrisch">GitHub</a>, gdzie będę dodawać swoje nowe projekty.</p>
                    </div>
                </div>

                <h2 className="home_info">Strona w fazie modernizacji :)</h2>
            </div>
        );
    
}
export default Home;