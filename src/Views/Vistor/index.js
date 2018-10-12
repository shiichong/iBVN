import React, { Component } from 'react';
import { 
      Container 
    , Row, Col 

    , TabContent, TabPane
    , Nav, NavItem, NavLink
} from 'reactstrap';
import classnames from 'classnames';

import Banner from "../Home/Banner";
import Highlight from "../Home/Highlight";
import Sponsor from "../Home/Sponsor";

import image_clip from '../../assets/images/clip.jpg';
import Modal from 'react-modal';
import YouTube from 'react-youtube';

import bg from '../../assets/images/bg/bg-1-1.jpg';

const items = [
    {
        title: 'Distributors / Agents / Importers',
        items: [
              'Retailers (Department Stores, Hypermarket , Supermarket Retail Chains , Chain Store, Franchises)'
            , 'Hotel & Resort' 
            , 'Airline & Duty Free Shop' 
            , 'Manufacturers (Including R&D and Purchasers)' 
            , 'Third-Party Manufacturer(OEM, ODM)' 
            , 'Brand Owner' 
            , 'Perfumery • Cosmetics • Hair products •Nail products • Personal Care Products • Toiletries' 
            , 'Dietary Supplement • Beauty Salon & Spa' 
            , 'Aesthetic & Wellness Center • Aesthetic Clinic' 
        ]
    },
];

class Vistor extends Component {
    constructor(props) {
        super(props);
        
        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: 0,
            modalIsOpen: false
        };

          this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
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
                            <h2 className="site-title">Vistor Information</h2>
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
                        <Container><hr className="section-hr" /></Container>

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

                <Highlight />

                <Sponsor />
            </React.Fragment>
        );
    }
}

export default Vistor;