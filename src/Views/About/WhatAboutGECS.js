import React, { Component } from 'react';
import { 
    Container 
  , Row, Col 
//   , Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle
//   , Button
//   , ListGroup, ListGroupItem
} from 'reactstrap';
import bg from '../../assets/images/bg/bg-2-1.jpg';



import image from '../../assets/images/sponsor/logo-gec.png';

class WhatAboutGECS extends Component {
    constructor(props) {
      super(props);
    }

    render() {

        return (
            <section id="WhatAboutGECS" className="section cover color-1" style={{
                backgroundImage: `url(${bg})`,
            }}>
                <Container>
                    {/* <header className="section-header">
                        <h2 className="site-title">What About <strong>GECS</strong></h2>
                    </header> */}

                    <div className="section-content">
                        <article className="text-editor">

                            
                            <Row>
                                <Col sm="12" md="auto"><div class="text-center"><img src={image} alt="" width="150" /></div></Col>
                                <Col>
                                    <p>Global Exhibition and Convention Service Co., Ltd. is the joint-venture between Thailand Exhibition Expertise team with two decades of experience in both local and international trade fair and network namely China, Japan, Korea, India, Taiwan, Vietnam, Myanmar, Cambodia, Philippines, etc. with Minh Vi Exhibition and</p>
                                </Col>
                            </Row>
                            <p>Advertisement Services Co., Ltd. (also known as VEAS) a renowned market leader in Vietnam ; Meetings, Incentives, Conferences and Exhibitions (MICE) industry.</p>

                            <p>Since its founding in 2007, VEAS has successfully promoted and organized over 500 business events across 30 industries that attract thousands of meeting-goers, incentive winners, convention attendees and exhibition participants all over the world. In the key market for the Greater Mekong Region, which includes Vietnam, Cambodia, Laos, Thailand and Myanmar. VEAS’ events play a vital role in connecting organizations in creating opportunities for businesses, especially for Small and Medium Enterprises (SMEs) across the region.</p>
                        </article>

                        
                    </div>
                </Container>

                <Container><hr className="section-hr" /></Container>
            </section>
        );
    }
}

export default WhatAboutGECS;