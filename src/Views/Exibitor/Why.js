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
import Highlight from "../Home/Highlight";
import Sponsor from "../Home/Sponsor";

import image_clip from '../../assets/images/clip.jpg';
import Modal from 'react-modal';

import YouTube from 'react-youtube';

import bg from '../../assets/images/bg/bg-1-1.jpg';

class Why extends Component {
    constructor(props) {
      super(props);
        
        this.toggle = this.toggle.bind(this);

        this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

        this.state = {
            activeTab: '1',
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
                            <h2 className="site-title">Why Exhibit At <strong>Inter Beauty ?</strong></h2>
                        </header>

                        <div className="section-content">

                            <article className="text-editor">

                                <p>Vietnam beauty market has a highest potential future markets with a growing middle class and population 
over 95 million. The revenue of Vietnam cosmetics and personal care market accounted for US$ 1,620 million in 2018(Statista, 2018) and the expected market growth in 2018-2022 is 8.6%. Hanoi trading opportunities are 
extremely convenient, either for domestic or international route. As one of the fastest-growing tourist 
destinations in Vietnam, the event takes place in Hanoi, where is the most popular city that attracts both 
domestic and international visitors due to its good location and connectivity to neighboring countries. 
Now is a good time to penetrate Hanoi and the Vietnam North Region market.</p>

                            </article>
                        </div>

                        <hr className="section-hr" />

                        <header className="section-header"> 
                            <h2 className="site-title"><strong>The show</strong> will provide you</h2>
                        </header>

                        <div className="section-content">

                            <article className="text-editor">

                                <ul style={{
                                    margin: 'auto',
                                    maxWidth: 760,
                                    fontSize: 20,
                                }}>
                                    <li><i className="fa fa-check"></i><span className="ml-2">Opportunity to present and promote new products and services.</span></li>
                                    <li><i className="fa fa-check"></i><span className="ml-2">Expanding new channels for distribution, packaging and manufacturing.</span></li>
                                    <li><i className="fa fa-check"></i><span className="ml-2">Discover new innovative products and latest technologies in beauty manufacturing process.</span></li>
                                    <li><i className="fa fa-check"></i><span className="ml-2">Building new commercial network from business matching program from overseas buyers,   manufacturers, distributors and agents.</span></li>
                                    <li><i className="fa fa-check"></i><span className="ml-2">Exchange & gain knowledge from industry insights, professionals, seminars, conferences and educational workshop.</span></li>
                                </ul>
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

                <Highlight />
                <Sponsor />
            </React.Fragment>
            
        );
    }
}

export default Why;