import { Row , Col , Image } from 'react-bootstrap'
import Seguridad from "../../../public/assets/RedesCard.webp"
import CardComponent from '../CardComponent/CardComponent'


const ContentListContainer = () => {
  return (
    <>
    <h1>Mis habilidades</h1>
    <Row>
        <Col xs={6}>
            <CardComponent img={Seguridad} title={"Cyber Seguridad"} description={"Python & Redes"}/>
        </Col>
        <Col xs={6} className='mt-5'>
            <CardComponent img={Seguridad} title={"Desarrollo Front End"} description={"JavaScript & React.JS"}/>
        </Col>
        <Col xs={6}>
            <CardComponent img={Seguridad} title={"Diseño y Animación"} description={"CSS & Sass"}/>
        </Col>
        <Col xs={6} className='mt-5'>
            <CardComponent img={Seguridad} title={"Educación y capacitación"} description={"Didactica y pedagogia"}/>
        </Col>
        
    </Row>

    <Row>
        <h2>Mis Estudios / Educación</h2>

    </Row>

    <Row>
        <p>Pongamonos en contacto</p>
        <h2>rodrigo1998.rz@gmail.com</h2>

    </Row>
    
    </>
  )
}

export default ContentListContainer