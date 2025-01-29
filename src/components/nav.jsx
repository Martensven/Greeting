import { Link } from "react-router-dom";

let NavLink = () => {

    return (
        <nav className="headNav">
            <Link to="/Greeting" className="navLink"><button>Home</button></Link>
            <Link to="/Memory" className="navLink"><button>Memory</button></Link>
            <Link to="/Stopwatch" className="navLink"><button>Stop-watch</button></Link>
            <Link to="/TodoAll" className="navLink"><button>Todo-list</button></Link>
        </nav>
    )
}

export default NavLink