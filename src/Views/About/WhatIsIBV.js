import React, { Component } from 'react';
import { 
    Container 
//   , Row, Col 
//   , Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle
//   , Button
//   , ListGroup, ListGroupItem
} from 'reactstrap';

import Banner from "../Home/Banner";
import Highlight from "../Home/Highlight";
import Sponsor from "../Home/Sponsor";

import bg from '../../assets/images/bg/bg-1-1.jpg';

import image_clip from '../../assets/images/clip.jpg';
import Modal from 'react-modal';

import YouTube from 'react-youtube';

class WhatIsIBV extends Component {
    constructor(props) {
      super(props);

      this.state = {
        modalIsOpen: false
    };

      this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
            // height: '390',
            // width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              // autoplay: 1
            }
        };

        return (
            <React.Fragment>

                <Banner />

                <section id="WhatIsIBV" className="section cover color-1" style={{
                    backgroundImage: `url(${bg})`,
                }}>
                    <Container>
                        <header className="section-header">
                            <h2 className="site-title"><strong>What is</strong> Inter Beauty Vietnam ?</h2>
                        </header>

                        <div className="section-content">
                            <article className="text-editor">

                                <p className="text-center">Inter Beauty Vietnam, the B2B beauty trade show that brings all providers of beauty industry in Southeast Asia to present their products and services . It will bring the new channels for distribution, packaging and manufacturing thru building relationship with leading beauty companies and retailers. The show also allows beauty business to experience new innovative product, establish commercial network, exchange idea from industry insights, seminars and educational workshop.</p>
                            </article>
                        </div>
                    </Container>
                
                
                <Container><hr className="section-hr" /></Container>
                
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

export default WhatIsIBV;