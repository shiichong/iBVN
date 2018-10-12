import React, { Component } from 'react';
import { 
    Container, Row, Col, 
    Button, Form, FormGroup, Label, Input, FormText 
} from 'reactstrap';

import bg from '../../assets/images/bg/bg-2-1.jpg';

import Banner from "../Home/Banner";
import Sponsor from "../Home/Sponsor";

class registration extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <React.Fragment>

                <Banner />

                <section id="Pre-registration" className="section cover" style={{
                    backgroundImage: `url(${bg})`,
                }}>
                    <Container>
                        <header className="section-header">
                            <h2 className="site-title color-1">Pre-<strong>registration</strong></h2>
                        </header>

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
                                        <div className="col-sm-12 col-md-6">
                                            <FormGroup>
                                                <Label for="">Email*</Label>
                                                <Input type="email" name="email" placeholder="" />
                                            </FormGroup>
                                        </div>
                                        <div className="col-sm-12 col-md-6">
                                            <FormGroup>
                                                <Label for="">Job Title*</Label>
                                                <Input type="text" name="title" placeholder="" />
                                            </FormGroup>
                                        </div>
                                    </Row>

                                    <Row>
                                        <div className="col-sm-12 col-md-6">
                                            <FormGroup>
                                                <Label for="">Company Name*</Label>
                                                <Input type="text" name="name" placeholder="" />
                                            </FormGroup>
                                        </div>
                                        <div className="col-sm-12 col-md-6">
                                            <FormGroup>
                                                <Label for="">&nbsp;</Label>
                                                <Input type="select" name="email" placeholder="">
                                                    <option>Company Profile</option>
                                                </Input>
                
                                            </FormGroup>
                                        </div>
                                    </Row>

                                    <Row>
                                        <div className="col-sm-12 col-md-12">
                                            <FormGroup>
                                                <Label for="">Company Address*</Label>
                                                <Input type="textarea" name="address" placeholder="" />
                                                    
                                                
                                            </FormGroup>
                                        </div>
                                    </Row>

                                    <Row>
                                        <div className="col-sm-12 col-md-6">
                                            <FormGroup>
                                                <Label for="">Telephone No.**</Label>
                                                <Input type="text" name="telephone" placeholder="" />
                                            </FormGroup>
                                        </div>
                                        <div className="col-sm-12 col-md-6">
                                            <FormGroup>
                                                <Label for="">Company Website</Label>
                                                <Input type="text" name="website" placeholder="" />
                                            </FormGroup>
                                        </div>
                                    </Row>

                                    <Row>
                                        <div className="col-sm-12 col-md-6">
                                            <FormGroup>
                                                <Label for="">&nbsp;</Label>
                                                <Input type="select" name="country" placeholder="">
                                                    <option>Country</option>
                                                </Input>
                                            </FormGroup>
                                        </div>
                                        <div className="col-sm-12 col-md-6">
                                            <FormGroup>
                                                <Label for="">&nbsp;</Label>
                                                <Input type="select" name="purpose" placeholder="">
                                                    <option>Purpose of visiting</option>
                                                </Input>
                                            </FormGroup>
                                        </div>
                                    </Row>

                                    <Row>
                                        <div className="col-sm-12 col-md-6">
                                            <FormGroup>
                                                <Label for="">&nbsp;</Label>
                                                <Input type="select" name="purpose" placeholder="">
                                                    <option>How did you find about us</option>
                                                </Input>
                                            </FormGroup>
                                        </div>
                                        <div className="col-sm-12 col-md-6"></div>
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

export default registration;