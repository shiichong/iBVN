import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

const social = [
    { key: 'facebook', name: 'Facebook', link: '/', icon: 'facebook-f' }
  , { key: 'twitter', name: 'Twitter', link: '/', icon: 'twitter' }
  , { key: 'linkedin', name: 'Linked In', link: '/', icon: 'linkedin' }
];

const contact = [
    'Global Exhibition and Convention Services'
  , '129 Rama 9 Road Huaykwang  Bangkok 10310, Thailand'
  , 'Tel: (+66) 2 026 3583'
  , 'E-mail: info@gecsasia.com'
  , 'Website: www.gecsasia.com'
];

class Footer extends Component {

  constructor(props){
    super(props);

    this.state = {
      copyright: 'Copyright © 2018. All Rights Reserved',
    }
  }

  render() {

    return (
      <footer id="footer-primary">
          <Container>
            <Row> 
              <Col sm="12" md="6">

                  <section className="section color-2">
                    <h3 className="site-title">Contact Us</h3>

                    <ul className="contact-list">{contact.map((value, key) => {
                        return (
                          <li key={key}><span>{value}</span></li>
                        )
                      })}</ul>
                  </section>
              </Col>
              <Col sm="12" md="6">
                <section className="section color-2">
                  <h3 className="site-title">Follow Us</h3>
                      
                  <ul className="social-list">{social.map(value => {
                    return (
                      <li key={value.name} className={value.name}><a className="link"><i className={'fa fa-'+value.icon}></i><span>{value.name}</span></a></li>
                    )
                  })}</ul>

                  </section>
              </Col>
            </Row>

            <div className="copyright">{this.state.copyright}</div>
          </Container>
      </footer>
    );
  }
}

export default Footer;