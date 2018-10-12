import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Banner from "../Home/Banner";
import Sponsor from "../Home/Sponsor";


class Primary extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        console.log( this.props.match.params );

        return (
            <React.Fragment>
                <Banner />

                <section id="news" className="section cover">
                    
                </section>

                {/* <Container><hr className="section-hr" /></Container> */}

                <Sponsor />
            </React.Fragment>
        );
    }
}

export default Primary;