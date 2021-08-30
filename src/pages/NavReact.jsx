import { Navbar, Container, Nav, Button } from "react-bootstrap"

export default function NavReact() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">  <img style={{ width: '25px'}} src="/img/logo_transparent.png" alt=""/> NoticiasYA!</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Destacadas</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <Button className="m-auto"> login</Button> 
            </Navbar>
        </div>
    )
}
