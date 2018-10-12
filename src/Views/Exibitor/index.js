import React, { Component } from 'react';
import { 
    Container 
  , Row, Col 
//   , Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle
//   , Button
//   , ListGroup, ListGroupItem
    , TabContent, TabPane
    , Nav, NavItem, NavLink
} from 'reactstrap';
import classnames from 'classnames';

import Banner from "../Home/Banner";
import Sponsor from "../Home/Sponsor";

import image_clip from '../../assets/images/clip.jpg';
import Modal from 'react-modal';

import YouTube from 'react-youtube';

import bg from '../../assets/images/bg/bg-1-1.jpg';

const items = [
    {
        title: 'Beauty and Cosmetics',
        items: [
              'Skin Care'
            , 'Personal Care Products, Equipment & Solution' 
            , 'Children, Baby, Maternity Care' 
            , 'Men Care' 
            , 'Facial Mask' 
            , 'Make-up and Color Cosmetics' 
            , 'Makeup Accessories' 
            , 'Perfumery and Fragrances' 
            , 'Household Detergent' 
        ]
    },
    {
        title: 'Hair and Nails',
        items: [
              'Hair Salon Products'
            , 'Hair Equipments & Furnishings Nail, Eyelash & Tattoo' 
            , 'Manicure & Pedicure Products'
        ]
    },
    {
        title: 'Herbal & Health',
        items: [
              'Health Food & Beverages'
            , 'Natural & Organic' 
            , 'Nutraceuticals & Dietary Supplements'
        ]
    },
    {
        title: 'Beauty Salon and Spa',
        items: [
              'Beauty Salon and Spa'
            , 'Beauty Salon & Spa Products' 
            , 'Beauty Salon & Spa Equipment, Furnishings' 
            , 'Medical Beauty Products'
        ]
    },
    {
        title: 'OEM and Packaging',
        items: [
              'Raw Materials, Ingredients & Formulations'
            , 'Development & Design' 
            , 'Packaging Material' 
            , 'Packaging Machinery' 
            , 'Contract Manufacturing & Private Label (OEM, ODM)' 
            , 'Other Services'
        ]
    },
];


class Exibitor extends Component {
    constructor(props) {
      super(props);
        
        this.toggle = this.toggle.bind(this);

        this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

        this.state = {
            activeTab: 0,
            modalIsOpen: false
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    openModal() {
        this.setState({modalIsOpen: true});
      }
     
      afterOpenModal() {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
      }
     
      closeModal() {
        this.setState({modalIsOpen: false});
      }

    render() {

        const youtubeOpts = {
            playerVars: { }
        };

        return (
            <React.Fragment>
                <Banner />
                
                <section className="section cover color-1" style={{
                    backgroundImage: `url(${bg})`,
                }}>
                    <Container>
                        <header className="section-header">
                            <h2 className="site-title">Exhibitor <strong>Profile</strong></h2>
                        </header>

                        <div className="section-content">

                            <article className="text-editor">

                                <Nav tabs>
                                { items.map((val, key)=>{

                                    return <NavItem key={key}>
                                        <NavLink 
                                            className={classnames({ active: this.state.activeTab === key })} 
                                            onClick={() => { this.toggle(key); }}
                                        >{val.title}
                                        </NavLink>
                                    </NavItem>
                                }) }

                                </Nav>

                                <TabContent activeTab={this.state.activeTab}>

                                    { items.map((val, key)=>{
                                    return <TabPane key={key} tabId={key}>
                                        <h3 className="tab-title" onClick={() => { this.toggle(key); }}>{val.title}</h3>
                                        <ul className="tab-body">
                                            { val.items.map( (item, index)=>{
                                                return <li key={index}><i className="fa fa-check"></i><span className="">{item}</span></li>;
                                            } ) }
                                        </ul>
                                    </TabPane>
                                    }) }
                                </TabContent>

                            </article>
                        </div>

                        <hr className="section-hr" />
                    </Container>

                </section>

                
                
                <button type="button" className="ImageClip" onClick={this.openModal}>
                    <img src={image_clip} alt="" />
                </button>
                <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        style={{
                            zIndex: 400
                        }}
                    // contentLabel="Example Modal"

                        className="effect-1"
                        backdrop="static"
                    >

                    <div className="about-youtube-container text-center">
                        <div className="about-youtube-wrap">
                            <YouTube
                                videoId="waeh4qIcryE"
                                opts={youtubeOpts}
                                onReady={this._onReady}
                                className="home-youtube-iframe"
                            />
                        </div>
                    </div>
                    
                </Modal>



                
                <Sponsor />
            </React.Fragment>
            
        );
    }
}

export default Exibitor;