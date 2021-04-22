import { Link } from "react-router-dom";

export function Sidebar() {

    return <div className="sidebar">
        <Link to="/">Home</Link>
        <hr />
        <Link to="/playlist">PlayList</Link>
        <hr />
        <Link to="/watchlater">Watch Later</Link>
        <hr />
        <Link to="/likedvideos">Liked Videos</Link>
    </div>
}