import React from 'react';
import Router from 'react-router';

const DefaultRoute = Router.DefaultRoute;
const Route = Router.Route;

let routes = (
    <Route name="App" path="/" handler={require('./components/App')}>
        <DefaultRoute handler={require('./components/pages/homePage')} />
        <Route name="about" handler={require('./components/pages/aboutPage')} />
        <Route name="mySkills" handler={require('./components/pages/mySkillsPage')} />
        <Route name="myProjects" handler={require('./components/pages/myProjectsPage')} />
        <Route name="contact" handler={require('./components/pages/contactPage')} />
    </Route>
);

export default routes;