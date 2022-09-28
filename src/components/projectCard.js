import { Col } from "react-bootstrap";



const ProjectCard = ({title, discription, imgUrl,link,link1}) => {
    return ( 
        <Col sm={6} md={4}>
        <div className="proj-imgbx">
        <img src={imgUrl} className='img-fluid' />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{discription}</span>
            </div>
        </div>
        <a href={link} className='btn btn-dark m-2'>Git Code</a>
        <a href={link1} className='btn btn-dark m-2'>View</a>
          
        </Col>
     );
}
 
export default ProjectCard;