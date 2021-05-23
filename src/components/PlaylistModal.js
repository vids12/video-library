import { useList } from "../DataProvider/VideoListProvider";

export function PlayListModal({id,heading,channel_name,img}){
    const { dispatch:playlistDispatch,setNewPlaylist,newPlaylist,dispatch: PlayListModalDispatch } = useList();
    return <div>
        <div className="playlist-modal">
            <div class="modal-header">
                <h4 class="modal-title">Create Playlist</h4>
                <button onClick={() => PlayListModalDispatch({type:"CLOSE_PLAYLIST_MODAL"})} className="close-btn">X</button>
            </div>
            <input placeholder="Enter Playlist Name" value={newPlaylist} onChange={(e)=>setNewPlaylist(e.target.value)} className="playlist-input"></input>
            <button class="primary-btn" onClick={()=>{
                playlistDispatch({type:"ADD_TO_CUSTOM_PLAYLIST",type:"CLOSE_PLAYLIST_MODAL",payload:{newPlaylist,id,heading,img,channel_name}});
                setNewPlaylist("");
            }}>Create</button>
        </div>
        <div class="modal-overlay" id="modal-overlay"></div>
    </div>
}