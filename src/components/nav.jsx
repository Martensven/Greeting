import { Link } from "react-router-dom";

let NavLink = () => {

    return (
        <nav className="headNav">
            <button ><Link to="/Greeting" className="navLink">Home</Link></button>
            <button><Link to="/Memory" className="navLink">Memory</Link></button>
        </nav>
    )
}

export default NavLink