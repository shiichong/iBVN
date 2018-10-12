import React, { Component } from 'react';
import { 
    Container, Row, Col
} from 'reactstrap';

import Banner from "../Home/Banner";
import Sponsor from "../Home/Sponsor";

import img1 from '../../assets/images/travel/1.jpg';
import img2 from '../../assets/images/travel/2.jpg';
import img3 from '../../assets/images/travel/3.jpg';


const items = [
    {
        id: 1,
        title: 'About Vietnam',
        detail: 'Vietnam’s development record over the past 25 years is remarkable. Economic and political reforms under Đổi Mới, launched in 1986, have spurred rapid economic growth and development and transformed Vietnam from one of the world’s poorest to a lower middle-income country.',

        image: {
            src: img1,
            alt: ''
        }
    },
    {
        id: 2,
        title: 'Venue',
        detail: 'Vietnam’s development record over the past 25 years is remarkable. Economic and political reforms under Đổi Mới, launched in 1986, have spurred rapid economic growth and development and transformed Vietnam from one of the world’s poorest to a lower middle-income country.',

        image: {
            src: img2,
            alt: ''
        }
    },
    {
        id: 3,
        title: 'Accommodation',
        detail: 'The best hotels in Hanoi are found mostly in the city centre, surrounded by popular cultural landmarks and attractions. Indeed, some of Saigon’s best hotels are famous in their own right thanks to their role in novels and movies.',

        image: {
            src: img3,
            alt: ''
        }
    },
];


class Travel extends Component {
    constructor(props) {
      super(props);

    }

    render() {

        return (
            <React.Fragment>
                <Banner />
                

                <section id="news" className="section cover">
                    <Container>
                        <header className="section-header">
                            <h2 className="site-title color-1">Travel and <strong>Accomodation</strong></h2>
                        </header>

                        <hr className="section-hr" />

                        <div className="section-content">
                            { items.map( (val, key)=>{

                            return (
                                <div key={key} className="post article-summary">
                                    <Row>
                                        <Col sm="12" md="5">
                                            <div className="pic"><img src={val.image.src} alt={val.image.alt} /></div>
                                        </Col>
                                        <Col sm="12" md="7">
                                            <div className="post-content">
                                                <h3 className="color-1">{val.title}</h3>
                                                <p>{val.detail}</p>

                                                <div className="text-right mt-3">
                                                    <button type="button" className="btn btn-primary btn-more">Read more</button>
                                                </div>
                                            </div>
                                        </Col>
                                        
                                    </Row>
                                    <hr className="section-hr" />
                                </div>
                                )
                            } ) }
                        </div>
                    </Container>
                </section>


                <Sponsor />
            </React.Fragment>
        );
    }
}

export default Travel;