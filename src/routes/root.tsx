import { Outlet, Link } from "react-router-dom";

import "../css/root.css"

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
                        
                        <li id="rsvp"><Link to={'guest-code'}>RSVP</Link></li>
                    </ul>
                </nav>
            </div>

            <div className={"body"}>
                <Outlet />
            </div>

            <div className={"footer"}>
                <footer>
                    <p>Questions? <a href="mailto:itbeginswithak@gmail.com">Email us.</a></p>
                </footer>
            </div>
        </>
    )
}