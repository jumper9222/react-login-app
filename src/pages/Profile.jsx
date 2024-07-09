import { Card, Row, Col, Container } from "react-bootstrap";

export default function Profile() {

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Profile</h1>
                    <Card>
                        <Card.Body>
                            <Card.Title>Welcome</Card.Title>
                            <Card.Text>This is your profile</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}