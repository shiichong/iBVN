import React, { Component } from 'react';

import { 
    Container, Row, Col, 
    Button, Form, FormGroup, Label, Input, FormText 
} from 'reactstrap';

import Banner from "../Home/Banner";
import Sponsor from "../Home/Sponsor";

import bg from '../../assets/images/bg/bg-1-1.jpg';

class Contact extends Component {
    constructor(props) {
      super(props);
    }
    
    render() {

        return (
            <React.Fragment>
                <Banner />
                
                
                <section id="" className="section cover color-1" style={{
                    backgroundImage: `url(${bg})`,
                }}>
                
                <Container>

                <header className="section-header"><h2 className="title">Contact <strong>US</strong></h2></header>

                <hr className="section-hr" />
                
                <div className="section-content">
                    <article className="text-editor">
                        <Form>

                            <Row>
                                <div className="col-sm-12 col-md-6">
                                    <FormGroup>
                                        <Label for="">Name*</Label>
                                        <Input type="text" name="name" placeholder="" />
                                    </FormGroup>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <FormGroup>
                                        <Label for="">Surname*</Label>
                                        <Input type="text" name="surname" placeholder="" />
                                    </FormGroup>
                                </div>
                            </Row>

                            <Row>
                                        <div className="col-sm-12 col-md-12">
                                            <FormGroup>
                                                <Label for="">Supject*</Label>
                                                <Input type="text" name="surname" placeholder="" />
                                            </FormGroup>
                                        </div>
                                    </Row>


                            <Row>
                                        <div className="col-sm-12 col-md-12">
                                            <FormGroup>
                                                <Label for="">Message*</Label>
                                                <Input type="textarea" name="address" placeholder="" />
                                                    
                                                
                                            </FormGroup>
                                        </div>
                                    </Row>
                            
                                    <Row className="actions">
                                        <div className="col-sm-12 col-md-12">
                                            <Button color="primary" className="btn-lg">Send</Button>
                                        </div>
                                    </Row>
                        </Form>
                    </article>
                </div>
                
                </Container>

                </section>

                <Sponsor />
            </React.Fragment>
        );
    }
}

export default Contact;