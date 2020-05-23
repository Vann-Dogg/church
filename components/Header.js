import * as ReactBS from 'react-bootstrap'
import Logo from '../components/header/Logo'
import Menu from '../components/header/Menu'

export default function Header() {
    return(
        <header id="header" className="fixed w-100">
            <ReactBS.Container>
                <ReactBS.Navbar>
                    <Logo />
                    <ReactBS.Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <ReactBS.Navbar.Collapse id="basic-navbar-nav">
                        <Menu />
                    </ReactBS.Navbar.Collapse>
                </ReactBS.Navbar>
            </ReactBS.Container>
        </header>
    )
}