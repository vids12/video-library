import { useList } from "../DataProvider/VideoListProvider";
import { Modal } from "../components/Modal";
import { useState } from "react";

export function VideoCard({src,heading,views,id,channel_name,img}) {
    const { dispatch,setWatchLaterList,watchLaterList,showModal,setNewPlaylist,newPlaylist } = useList();
    const [customPlaylist,setCustomPlaylist] = useState(false);
    return  <section className="watch-video-page">
        <iframe className="iframe" src={`${src} `} title="Youtube-video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true" ></iframe>
        <h5 className="video-heading">{heading}</h5>
        <div className="video-header">
            <span>{views}</span>
            <span>
                <span className="tooltip">
                    <button onClick={()=> setWatchLaterList(watchLaterList.concat({id,channel_name,heading,img}))} className="primary-btn">Add to watchLater</button>
                    <span className="tooltiptext">Watch</span> 
                </span>
                <span className="tooltip">
                    <button onClick={()=>setCustomPlaylist(true)}  className="primary-btn">+ Create PlayList</button>
                    <span className="tooltiptext">Create</span> 
                </span>
                <span className="tooltip">
                    <button className="secondary-btn" onClick={()=>dispatch({type:"SHOW_MODAL"})} style={{marginRight: "5rem"}}>Save to playlist</button>
                    <span className="tooltiptext">Save</span> 
                </span>
            </span>
        </div>
        {customPlaylist && <>
                <div className="modal-body">
                <input placeholder="Enter Playlist Name" value={newPlaylist} onChange={(e)=>setNewPlaylist(e.currentTarget.value)}></input>
                <button class="primary-btn" onClick={()=>{
                    dispatch({type:"ADD_TO_CUSTOM_PLAYLIST", payload:{newPlaylist,id,heading,img,channel_name}});
                    setNewPlaylist("");
                }}>Create</button>
                </div>
            </>
        }
        {showModal && <Modal id={id}/>}
    </section>
}