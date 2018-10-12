import React, { Component } from 'react';
import { 
    Container 
//   , Row, Col 
//   , Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle
//   , Button
//   , ListGroup, ListGroupItem
} from 'reactstrap';

import Banner from "../Home/Banner";
import Sponsor from "../Home/Sponsor";


import WhatAboutGECS from "./WhatAboutGECS";
// import WhatIsIBV from "./WhatIsIBV";




class About extends Component {
    constructor(props) {
      super(props);
  
    }

    render() {

        return (
            <React.Fragment>
                <Banner />

                <WhatAboutGECS />

                <Sponsor />
            </React.Fragment>
        );
    }
}

export default About;