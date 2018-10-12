import React, { Component } from 'react';
import {
    Container
  , Row, Col
  , Carousel, CarouselItem,  CarouselControl, CarouselIndicators, CarouselCaption
} from 'reactstrap';

// import m1 from '../../assets/images/slide-banner/n2.jpg';
import m1 from '../../assets/images/banner/banner-001.jpg';
// import logoWhite from '../../assets/images/logo-white.svg';

const items = [
  {
    src: m1,
    alt: '7-9 Marc 2019 | Hanoi, The Next 1st Beauty Economic Driver',

    // alt: ''
  },
  // {
  //   src: m1,
  //   alt: '7-9 Marc 2019 | Hanoi, The Next 1st Beauty Economic Driver',

  //   caption: {
  //     title: '7-9 Marc 2019',
  //     text: 'Hanoi, The Next 1st Beauty Economic Driver.'
  //   }
  // },
  
];

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <div className="pic"><img src={item.src} alt={item.alt} /></div>

          {/* <div className="carousel-caption">
            <Container className="h-100">
              <Row className="h-100">
                <div className="col-xs-12 col-md-6 h-100">
                  <div className="d-table h-100">
                    <div className="d-table-cell align-middle text-center">

                      <div className="carousel-caption-box" data-animate-in="fade" data-animate-in-delay="400">
                        { item.caption.image 
                          ? <figure><img src={item.caption.image} alt={item.caption.title} /></figure>
                          : (null) 
                        }

                        { item.caption.tag 
                          ? <Row>
                              <Col sm="12" md="auto"><h1>{item.caption.title}</h1></Col>
                              <Col sm="12" md="4"><h3 className="tag">{item.caption.tag}</h3></Col>
                            </Row>
                          : <h1>{item.caption.title}</h1>
                        }
                        
                        <h2>{item.caption.text}</h2>
                      </div>

                    </div>
                  </div>
                </div>
              </Row>
              
            </Container>
          </div> */}

          {/* <CarouselCaption captionText={item.caption.text} captionHeader={item.title} /> */}
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} /> */}
        {slides}

        { items.length>1
          ? <React.Fragment>
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </React.Fragment>
          : (null)
        }
        
      </Carousel>
    );
  }
}


export default Banner;