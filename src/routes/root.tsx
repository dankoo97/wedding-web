import { Outlet, Link } from "react-router-dom";

import "../css/nav.css"

export default function Root() {
    return (
        <>
            <div className={"header"}>
                <nav>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'info'}>Wedding Info</Link></li>
                        <li><Link to={'story'}>Our Story</Link></li>
                        <li><Link to={'gallery'}>Image Gallery</Link></li>
                        <li><Link to={'faq'}>FAQ</Link></li>
                        <li><Link to={'rva'}>Things To Do</Link></li>
                        
                        <li id="rsvp"><Link to={'rsvp'}>RSVP</Link></li>
                    </ul>
                </nav>
            </div>

            <div>
                <Outlet />
            </div>

            <div className={"footer"}>

            </div>
        </>
    )
}