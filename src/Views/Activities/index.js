import React, { Component } from 'react';
import { 
    Container 
  , Row, Col 
  , Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle
  , Button
  , ListGroup, ListGroupItem
} from 'reactstrap';
import YouTube from 'react-youtube';

import Banner from "../Home/Banner";
import Highlight from "../Home/Highlight";
import Sponsor from "../Home/Sponsor";
import Gallery from "./Gallery";
import bg from '../../assets/images/bg/bg-1-1.jpg';

class Activities extends Component {
    constructor(props) {
      super(props);
    }

    render() {

        const youtubeOpts = {
            playerVars: {  }
        };

        return (
            <React.Fragment>
                <Banner />
                
                <section id="Activities" className="section cover color-1" style={{
                    backgroundImage: `url(${bg})`,
                }}>
                    <Container>
                        <header className="section-header">
                            <h2 className="site-title"><strong>Activities</strong></h2>
                        </header>

                        <div className="section-content">
                            <article className="text-editor">
                                <p><strong>KICK-OFF MEETING INTER BEAUTY VIETNAM IN THAILAND</strong></p>
                                <p>On Thursday July 19th 2018, Queen Sirikit National Convention Center </p>
                                <p>Hanoi, The Next 1st Beauty Economic Driver</p>
                                <p>Golden opportunity in Vietnam: Run a profitable beauty business, attend “INTER BEAUTY VIETNAM 2019”</p>
                            </article>
                        </div>
                    </Container>

                    <Container><hr className="section-hr" /></Container>

                    <Gallery />
                    
                    <Container><hr className="section-hr" /></Container>

                    <Container>
                        <section className="section about-youtube-container text-center">
                            <div className="about-youtube-wrap">
                                <YouTube
                                    videoId="waeh4qIcryE"
                                    opts={youtubeOpts}
                                    onReady={this._onReady}
                                    className="home-youtube-iframe"
                                />
                            </div>
                        </section>
                    </Container>

                    <Container>
                        <section className="section about-youtube-container text-center">
                            <div className="about-youtube-wrap">
                                <YouTube
                                    videoId="waeh4qIcryE"
                                    opts={youtubeOpts}
                                    onReady={this._onReady}
                                    className="home-youtube-iframe"
                                />
                            </div>
                        </section>
                    </Container>

                    <Container>
                        <section className="section about-youtube-container text-center">
                            <div className="about-youtube-wrap">
                                <YouTube
                                    videoId="waeh4qIcryE"
                                    opts={youtubeOpts}
                                    onReady={this._onReady}
                                    className="home-youtube-iframe"
                                />
                            </div>
                        </section>
                    </Container>

                    <Container>
                        <div className="section-content">
                            <article className="text-editor">
                                <p>Global Exhibition and Convention Service have united with Vietnam partner to organize Inter Beauty Vietnam 2019, inviting Thai businessmen or entrepreneurs to penetrate the Vietnamese beauty market, offering special privileges and perks.</p>
 
                                <p>“The beauty industry in the Socialist Republic of Vietnam has witnessed surging growth of 30%, thanks especially to the middle-income group,” said Mrs. Ladda Mongkolchaiwiwat, managing director of Global Exhibition and Convention Service Co., Ltd. (GECS) – the leading international exhibition company in the CLMV bloc (Cambodia, Laos, Myanmar, Vietnam). “The beauty segment will involve an increasing number of the population – up to 33 million by 2022. Vietnam now has a population of more than 95 million, 30% of whom are a new generation, or millennials, who are knowledgeable, love to use cosmetics and take good care of their health. They give first priority to using quality products and services from abroad,” she revealed. </p>
  
                                <p>In 2017, Vietnamese spent US$6 billion (THB200 billion) – three times higher than in 2016 – on cosmetics and skin-nourishing products from foreign countries. A major contributing factor was a proliferation of local and foreign department stores including cosmetic outlets expanding their branches, such as Medicare, Guardian and Pharmacy.</p>
  
                                <p>Vietnamese consumers are also contributing to the growth with widespread belief that good looks boosts career prospects, increases income and leads to success. They are influenced by bloggers, artists and movie/music stars. The consumer segment that should be captured is made up of women aged 15-39 who love applying make-up and nourishing their skin. This segment accounts for 20 million people, 40% of the Vietnamese population.</p>
  
                                <p>Global Exhibition and Convention Service has now teamed up with Vietnam partner to organize the Inter Beauty Vietnam 2019 embodying products and services to do with beauty innovations and technology – for the first time at the Hanoi International Center for Exhibitions (HICE) in Vietnam from March 7-9, 2019.</p>
  
                                <p>On display at Inter Beauty Vietnam 2019 will be a fascinating array of products and services from over 230 cosmetics brands. The event is expected to attract more than 7,000 visitors.</p>
                            </article>
                        </div>
                        </Container>

                </section>

                <Highlight />

                <Sponsor />
            </React.Fragment>
        );
    }
}

export default Activities;