import * as ReactBS from 'react-bootstrap'
import Link from 'next/link'

export default function Logo() {
    return (
        <Link href="/">
            <ReactBS.Navbar.Brand href="/">
                UAOG LVIV
            </ReactBS.Navbar.Brand>
        </Link>
    )
}