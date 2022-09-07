import { Col, Container, Row, Tab, Nav} from "react-bootstrap";
import ProjectCard from "./projectCard";
import colorsharp2 from '../assets/img/color-sharp2.png'
import calc from '../assets/img/calc.jpg'
import weath from '../assets/img/weather.jpg'
import store from '../assets/img/store.jpg'



const Projects = () => {

    const project=[
        {
            title:"Simple Calculator",
            discription:"Simple Calculator built using React js",
            imgUrl:calc,
            link:'https://github.com/YugeshKK/calculator'
        },
        {
            title:"Weather Forecast",
            discription:"Weather API project built using React js",
            imgUrl:weath,
            link:'https://github.com/YugeshKK/weather-api'
        },
        {
            title:"Shoppig Cart",
            discription:"Shoppig Cart site built using React js and Typescript",
            imgUrl:store,
            link:'https://github.com/YugeshKK/shopping-cart'
        }
    ]
    return ( 
        <section className="project" id="portfolio">
            <Container fluid>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <Tab.Container id="projects-tab" defaultActiveKey='first'>
                        <Nav variant="pills" defaultActiveKey="/home">
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey='first'>
                                <Row>
                                    {
                                    project.map((proj, index)=> {
                                        return (
                                            <ProjectCard 
                                                key={index}
                                                {...proj}
                                            />
                                        )                                        
                                    })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorsharp2}/>
        </section>
     );
}
 
export default Projects;