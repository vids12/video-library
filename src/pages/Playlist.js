import { useList } from "../DataProvider/VideoListProvider";
import { Link } from "react-router-dom";

function VideoList({id,channel_name,heading,img}){
    return <li key={id} className="playlist-card">
        <img src={`${img}`} alt="Image" className="playlist-img"/>
        <div className="playlist-header">
            <h3 className="video-heading">{heading}</h3>
            <p>{channel_name}</p>
            <Link to={`/watch/${id}`} >
                <button className="primary-btn">Watch Now</button>
            </Link>
            
        </div>
        
    </li>
}
export function Playlist() {
    const { playlist } = useList();
    console.log(playlist);
    return <div className="sidebar-page">
        <h1 style={{textAlign:"center"}}>Playlist</h1>
        {console.log(playlist)}
        <ul style={{marginLeft:"1rem"}}>
            {playlist.map(({id,name,videoes})=>{
                    return <li key= { id }>
                        <h3 className="playlist-name-header">{name}</h3>
                        <ul>
                            {videoes.map(obj=><VideoList {...obj} />) }
                        </ul>
                    </li>
                })
            }
        </ul>
    </div>
}