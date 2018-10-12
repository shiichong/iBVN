import React, { Component } from 'react';
import { 
    Container 
  , Row, Col 
//   , Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle
  , Button
//   , ListGroup, ListGroupItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

import Viewer from 'react-viewer';
import 'react-viewer/dist/index.css';

import bg from '../../assets/images/bg/bg-1-1.jpg';

import img1 from '../../assets/images/home-gallery/1.jpg';
import img2 from '../../assets/images/home-gallery/2.jpg';
import img3 from '../../assets/images/home-gallery/3.jpg';
import img4 from '../../assets/images/home-gallery/4.jpg';
import img5 from '../../assets/images/home-gallery/5.jpg';
import img6 from '../../assets/images/home-gallery/6.jpg';

const items = [
  { alt: '',  src: img1 },
  { alt: '',  src: img2 },
  { alt: '',  src: img3 },
  { alt: '',  src: img4 },
  { alt: '',  src: img5 },
  { alt: '',  src: img6 },
];

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
        visible: false,
        activeIndex: 0
    };
  }
  render() {
    return (
        <section id="" className="section cover color-1" style={{
            backgroundImage: `url(${bg})`,
        }}>

            {/* <Container> */}
                <header className="section-header"><h2 className="title">Photo <strong>Gallery</strong></h2></header>

                <hr className="section-hr" />
                
                <Row className="no-gutters">
                    {items.map((val, i) => {
                        return ( 
                            <Col key={i} sm="4" className="piclist-item">
                                <div  onClick={() => { this.setState({ visible: !this.state.visible, activeIndex: i }); } }>
                                {val.alt && <div className="tt">{val.alt}</div>}
                                <figure className="pic"><img src={val.src} alt={val.alt} /></figure>
                                <div className="pattern"></div>

                                </div>
                            </Col>
                        )
                    })}
                </Row>
            {/* </Container> */}

            <Viewer
                visible={this.state.visible}
                onClose={() => { this.setState({ visible: false }); } }

                onMaskClick={(e) => { console.log( e ); } }

                images={items}
                noFooter={true}

                drag={false}
                rotatable={false} // หมุน
                noImgDetails={true}
                changeable={false} // เปลี่ยนได้
                scalable={false} // สามารถปรับขนาดได้
                // noClose={true}
    
                zoomable={true}
                noToolbar={true}
                noNavbar={false}
    
                zoomSpeed={0.1}
    
                activeIndex={this.state.activeIndex}
            />
            
        </section>
    );
  }
}

export default Gallery;