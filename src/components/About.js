import { Container,Col,Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'


const About = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


    return ( 
       <section className='skill' id='about'>
        <Container fluid>
            <Row>
                <Col>
                    <div className='skill-bx'>
                        <h2>
                            About
                        </h2>
                        <p>I am a Computer Science graduate <br/> I graduated in the year 2022 from 
                        Jawaharlal Nehru National College of Engineering shimoga</p>
                        <p>Intrested in Devloping amazing websites to let people connect and enjoy through the portal called Internet</p>
                        <h1>Skills</h1>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className="item">
                                <img src={meter1}/>
                                <h5>React JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter2}/>
                                <h5>Bootstrap 5</h5>
                            </div>
                            <div className="item">
                                <img src={meter2}/>
                                <h5>Html and CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3}/>
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={meter3}/>
                                <h5>Fluent in 5 Languages</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
  
       </section>
     );
}
 
export default About;