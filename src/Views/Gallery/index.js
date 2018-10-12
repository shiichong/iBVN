import React, { Component } from 'react';


import Banner from "../Home/Banner";
import Highlight from "../Home/Highlight";
import Sponsor from "../Home/Sponsor";


import Photo from "./Gallery";

class Gallery extends Component {
    constructor(props) {
      super(props);

    }

    render() {

        return (
            <React.Fragment>
                <Banner />

                <Photo />
                
                <Highlight />

                <Sponsor />
            </React.Fragment>
        );
    }
}

export default Gallery;