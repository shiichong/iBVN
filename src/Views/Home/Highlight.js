import React, { Component } from 'react';
import { 
    Container 
  , Row, Col 
//   , Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle
//   , Button
//   , ListGroup, ListGroupItem
} from 'reactstrap';
import { Link } from "react-router-dom";


class Highlight extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
        <React.Fragment>

        <section id="home-highlight">
            <Container>
                <Row>
                    <Col sm="12" md="4">
                        <div className="home-highlight-box">
                            <div className="cardbox first"><div className="cardbox-header text-center"><h3>COUNTDOWN</h3></div><div className="cardbox-content"><div className="row"><div className="col text-center"><label className="label">DAYS</label><span className="data">365</span></div><div className="col text-center"><label className="label">HOURS</label><span className="data">24</span></div><div className="col text-center"><label className="label">MINS</label><span className="data">60</span></div><div className="col text-center"><label className="label">SECS</label><span className="data">60</span></div></div></div></div>
                        </div>
                    </Col>

                    <Col sm="12" md="4">
                        <Link to="/vistor/registration" className="cardbox hover"><div className="cardbox-outer"><div className="cardbox-inner text-center"><h3 className="text"><span>PRE-REGISTER</span><i className="ico register"></i></h3></div></div></Link>
                    </Col>

                    <Col sm="12" md="4">
                        <a href="/uploads/Finalbeautybrochure.pdf" target="_blank" className="cardbox hover last"><div className="cardbox-outer"><div className="cardbox-inner text-center"><h3 className="text"><span>DOWNLOAD</span><i className="ico download"></i></h3></div></div></a>
                    </Col>
                    
                </Row>
            </Container>
        </section>
        

        </React.Fragment>
    );
  }
}

export default Highlight;