import { useContext } from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { AuthContext } from "../AuthContext";

export default function Navigation() {
    const setToken = useContext(AuthContext).setToken
    const token = useContext(AuthContext).token
    function logout() {
        setToken(null)
    }

    const logoutButton = token ?
        <Nav>
            <Button variant="danger" onClick={logout}>Logout</Button>
        </Nav> : null


    return (
        <Navbar expand="lg" className="bg-body-tertiary mb-3">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                    </Nav>
                    {logoutButton}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}