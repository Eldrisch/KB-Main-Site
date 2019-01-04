import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="contact_container">
                <h3>Kontakt do mnie:</h3>
                <h6>Telefoniczny:</h6>
                <i>797-418-814</i>
                <h6>Mail'owy:</h6>
                <i>kb@kbaranowski.pl</i>
                <h6>Profile:</h6>
                <p><a href="https://github.com/Eldrisch"><i>GitHub</i></a>, <a href="https://www.linkedin.com/in/kbaranowski1211/"><i>LinkedIn</i></a></p>
            </div>
        );
    }
}
export default Contact;