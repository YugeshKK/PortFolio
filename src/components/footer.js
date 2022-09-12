import { Container, Row ,Col} from "react-bootstrap";
import logo from '../components/ykk_logo.png'
import icons from '../assets/img/mail.svg'
import me from '../assets/img/me.jpg'


const Footer = () => {
    return ( 
        <footer className="footer">
        <Container fluid>
          <Row className="align-items-center">
            <Col size={12} sm={6}>
              <img src={logo} alt="Logo" />
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
            <img src={me} style={{minHeight:"40px"}} alt='image'/> 
            </Col>
            <Col size={12} sm={7}>
            <div className="mail" >
              <img src={icons} style={{width:"30px"}}  alt='image'/>
              <a>yugeshkk2001@gmail</a>
              <p>Feel free to connect</p>
              <p>Be a Lannister and send your'e Regards...</p>
              <h5>Yugesh KK (YKK)</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
     );
}
 
export default Footer;