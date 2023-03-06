import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Soory</h2>
            <p>That page cannot be found</p>
            <Link to="/">Home page</Link>
        </div>
    );
}

export default NotFound;