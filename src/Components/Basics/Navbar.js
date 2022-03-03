import { auth } from '../Firebase/config/firebaseConfig'
import { GetUser } from '../Firebase/config/UserContext'
import { Navbar, Nav } from 'react-bootstrap'
export default function NavbarNav() {
    const { user } = GetUser()
    return (
        <>
            <Navbar bg="light" expand="lg" className="shadow-sm sticky-top">
                <Navbar.Brand className="navbar-brand" href="/">TRAVEL</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mb-2 mb-lg-0">
                        <Nav.Link href="/">HOME</Nav.Link>
                        <Nav.Link href="/popularplaces">POPULAR PLACES</Nav.Link>
                        <Nav.Link href="#aboutus">ABOUT</Nav.Link>
                        <Nav.Link href="#aboutus">CONTACTS</Nav.Link>
                        {user === null ? null : <Nav.Link href="/account">ACCOUNT</Nav.Link>}
                        {user === null ?
                            <Nav.Link
                                className=" btn btn-primary rounded-pill text-white"
                                href="/signup">SIGN UP</Nav.Link>
                            :
                            <button
                                className="nav-link btn btn-primary rounded-pill text-white"
                                onClick={() => auth.signOut().then(() => {
                                    alert('You have logged out')
                                })}> LOG OUT</button>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
