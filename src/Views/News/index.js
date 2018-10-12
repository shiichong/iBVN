import React, { Component } from 'react';
import { 
    Container, Row, Col
} from 'reactstrap';

import Banner from "../Home/Banner";
import Sponsor from "../Home/Sponsor";

import img1 from '../../assets/images/news/1.jpg';
import img2 from '../../assets/images/news/2.jpg';
import img3 from '../../assets/images/news/3.jpg';

const items = [
    {
        id: 1,
        title: 'ขุมทองใหม่ธุรกิจความงาม "Inter Beauty Vietnam 2019"',
        detail: 'โกลบอล เอ็กซิบิชั่น แอนด์ คอนเวนชั่น เซอร์วิส เปิดทางลัด จัดงาน Inter Beauty Vietnam 2019 เชิญชวนนักธุรกิจไทย รุกตลาดความงามในเวียดนาม มอบสิทธิพิเศษและสิทธิประโยชน',

        image: {
            src: img1,
            alt: ''
        }
    },
    {
        id: 2,
        title: 'เนรมิต "Inter Beauty Vietnam 2019"',
        detail: 'นางลัดดา มงคลชัยวิวัฒน์ กรรมการผู้จัดการ บริษัท โกลบอลเอ็กซิบิชั่นแอนด์ คอนเวนชั่น เซอร์วิส จำกัด หรือ เก็คส์ บริษัทชั้นนำระดับนานาชาติในการจัดงาน แสดงสินค้าและนิทรรศการกลุ่ม CLMVกล่าวว่า อุตสาหกรรมความงามของ สาธารณรัฐสังคมนิยมเวียดนาม เติบโตก้าวกระโดด',

        image: {
            src: img2,
            alt: ''
        }
    },
    {
        id: 3,
        title: 'ธุรกิจความงามโตต่อเนื่องรุกจัด "Inter Beauty Vietnam 2019"',
        detail: 'อุตสาหกรรมความงามของสาธารณรัฐสังคมนิยมเวียดนาม หรือ เวียดนาม เติบโตก้าวกระโดด มีอัตราเติบโตสูงถึงร้อยละ 30 โดยเฉพาะในกลุ่มมีผู้รายได้ระดับ ปานกลาง ซึ่งมีประชากรเพิ่มขึ้นถึง 33 ล้านคนในปี 2565 ปัจจุบันเวียดนามมีประชากร สูงกว่า 95 ล้านราย ร้อยละ 30 เป็นกลุ่มคนรุ่นใหม่ หรือ millennials ',

        image: {
            src: img3,
            alt: ''
        }
    },
];

class News extends Component {
    constructor(props) {
      super(props);
    }

    render() {

        return (
            <React.Fragment>
                <Banner />

                <section id="news" className="section cover">
                    <Container>
                        <header className="section-header">
                            <h2 className="site-title color-1">News <strong>Update</strong></h2>
                        </header>

                        <hr className="section-hr" />

                        <div className="section-content">
                            { items.map( (val, key)=>{

                            return (
                                <div key={key} className="post article-summary">
                                    <Row>
                                        <Col sm="12" md="5">
                                            <div className="pic"><img src={val.image.src} alt={val.image.alt} /></div>
                                        </Col>
                                        <Col sm="12" md="7">
                                            <div className="post-content">
                                                <h3 className="color-1">{val.title}</h3>
                                                <p>{val.detail}</p>

                                                <div className="text-right mt-3">
                                                    <button type="button" className="btn btn-primary btn-more">Read more</button>
                                                </div>
                                            </div>
                                        </Col>
                                        
                                    </Row>
                                    <hr className="section-hr" />
                                </div>
                                )
                            } ) }
                        </div>
                    </Container>
                </section>

                {/* <Container><hr className="section-hr" /></Container> */}

                <Sponsor />
            </React.Fragment>
        );
    }
}

export default News;