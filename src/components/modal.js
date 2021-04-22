import { useState } from "react";
import { useList } from "../DataProvider/VideoListProvider"

export function Modal(){
    const { setShowModal,playlist,setPlaylist } = useList();
    const [customPlaylist,setCustomPlaylist] = useState(false);
    const [newPlaylist,setNewPlaylist] = useState("");
    return <div class="modal">
        <div class="modal-header">
            <h4 class="modal-title">Save to...</h4>
            <button onClick={()=> setShowModal(false)} className="close-btn">X</button>
        </div>
        <hr />
        <div class="modal-body">
            <label><input type="checkbox"></input>Watch Later</label>
        </div>
        <hr />
        <div class="modal-body">
            <button onClick={()=>setCustomPlaylist(true)}>+ Create PlayList</button>
        </div>
        {customPlaylist && <><hr />
        <div className="modal-body">
            <input placeholder="Enter Playlist Name" value={newPlaylist} onChange={(e)=>setNewPlaylist(e.currentTarget.value)}></input>
            <button class="primary-btn" onClick={()=>{
                setPlaylist([...playlist,newPlaylist]);
                setNewPlaylist("");
            }}>Create</button>
        </div></>}
    </div>
}