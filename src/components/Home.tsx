import MyFooter from './Myfooter'
import MyNavbar from "./MyNavbar";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AllArticle from "./AllArticles";

const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={12}>
                    <MyNavbar />
                    <AllArticle />
                    <MyFooter/>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;