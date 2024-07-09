import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Row, Col } from "react-bootstrap";

export default function Dashboard() {
    return (
        <Container>
            <h1>Dashboard</h1>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Sigma School Analytics</Card.Title>
                            <Card.Text>People who graduate who get jobs: 80%</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}