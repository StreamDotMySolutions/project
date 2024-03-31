import { Container, Col } from "react-bootstrap"
import Breadcrumbs from "./components/Breadcrumbs"
import Navigation from "./components/Navigation"
import Banner from "./components/Banner"

export default function Index () {

    return (<>
        <Navigation />

        <Container>
             <Breadcrumbs />
        </Container>

        <Container>
            <Banner />
        </Container>

        <Container className="mt-3 mb-3">
            <Col className="border border-1" style={{'height': '300px'}}>
                Footer
            </Col>  
        </Container>
       
    </>)
}