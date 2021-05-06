import { useList } from "../DataProvider/VideoListProvider"
import { Link } from "react-router-dom";

export function WatchLater() {
    const { watchLaterList,setWatchLaterList } = useList();
    return <ul className="sidebar-page">
        <h1>WatchList</h1>
        { watchLaterList.map(({id,channel_name,heading,img}) =>{
        return <li key={id} className="playlist-card">
        <img src={`${img}`} alt="Image" className="playlist-img"/>
        <div className="playlist-header">
            <h3 className="video-heading">{heading}</h3>
            <p>{channel_name}</p>
            <div style={{display:"flex"}}>
                <Link to={`/watch/${id}`} >
                    <button className="primary-btn">Watch Now</button>
                </Link>
                <button
                    onClick={() =>setWatchLaterList(watchLaterList.filter((item) =>item.id === id ? !item  :  item) )}
                    className="secondary-btn"
                >
                    Remove
                </button>
            </div>
        </div>
        
    </li>
        
    })}
    </ul>
}