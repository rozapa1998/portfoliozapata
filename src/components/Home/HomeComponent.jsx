import { useState , useEffect } from "react"
import { Container } from "react-bootstrap"
import {Col} from "react-bootstrap"
import {Row} from "react-bootstrap"
import IphonePNG from "../../../public/assets/iphonePNG.png"
import TypeWriter from "../TypeWriter/TypeWriter"


const HomeComponent = () => {

    const [ShowDescription, setShowDescription] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            return(
                setShowDescription(true)
             )}, 8000);
    }, [])
    
   
        

  
    return (
    <Container className="mt-5">
        <Row className="justify-content-end">
            <Col xs={4}><img className="animate__animated animate__fadeInLeft" src={IphonePNG} height={"800px"} /></Col>
            <Col xs={2}></Col>
            <Col xs={6}> <p className="welcome-font pe-4">¡Hola 👋!</p>
            <p className="welcome-font">Bienvenido/a</p>
            <Row className="justify-content-start">
            <span>
                <TypeWriter text={"Mi nombre es Rodrigo Zapata, un Analista de seguridad y desarrollador web."} delay={100} />
            </span>
            <span className="pt-5">
                {ShowDescription ? <TypeWriter text={"Dentro de esta web muestro un poco de mi trabajo para que me conozcan mejor..."} delay={100}/> : null}
            </span>
            </Row>
            
            </Col>
        </Row>
        
        
    </Container>
    
  )
}

export default HomeComponent