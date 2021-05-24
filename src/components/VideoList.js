import { useList } from "../DataProvider/VideoListProvider";
import { Link } from "react-router-dom";

export function VideoList({id,channel_name,heading,img,pid}){
    const { dispatch: videoDispatch } = useList();
    return <li key={id} className="playlist-card">
        <img src={`${img}`} alt="video-image" className="playlist-img"/>
        <div className="playlist-header">
            <h3 className="video-heading">{heading}</h3>
            <p>{channel_name}</p>
            <Link to={`/watch/${id}`} >
                <button className="primary-btn">Watch Now</button>
            </Link>
            <button className="secondary-btn" onClick={() => videoDispatch({type:"REMOVE_FROM_PLAYLIST",payload: {pid,id}})}>Remove</button>
        </div>
        
    </li>
}