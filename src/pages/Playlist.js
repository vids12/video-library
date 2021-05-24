import { useList } from "../DataProvider/VideoListProvider";
import { VideoList } from "../components/VideoList";

export function Playlist() {
    const { playlist,dispatch: playlistDispatch } = useList();
    return <div className="sidebar-page">
        <h1 style={{textAlign:"center"}}>Playlist</h1>
        <ul style={{marginLeft:"1rem"}}>
            {playlist.map(({pid,name,videoes})=>{
                    return <li key= { pid }>
                        <h3 className="playlist-name-header">{name}</h3>
                        <button className="secondary-btn" onClick={() => playlistDispatch({type:"REMOVE_PLAYLIST",payload: pid})}>Delete Playlist</button>
                        <ul>
                            {videoes.map(obj=><VideoList {...obj} pid={pid} />) }
                        </ul>
                    </li>
                })
            }
        </ul>
    </div>
}