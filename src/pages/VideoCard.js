import { useList } from "../DataProvider/VideoListProvider";
import { Modal } from "../components/Modal";
import { PlayListModal } from "../components/PlaylistModal";
import { useState } from "react";

export function VideoCard({src,heading,views,id,channel_name,img,desc}) {
    const { dispatch: modalDispatch,showModal,dispatch: PlayListModalDispatch,showPlaylistModal } = useList();
    const [ showDescription,setShowDescription ] = useState(false); 
    
    return  <section className="watch-video-page">
        <iframe className="iframe" src={`${src} `} title="Youtube-video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} ></iframe>
        <h5 className="video-heading">{heading}</h5>
        <div className="video-header">
            <span>{views}</span>
            <span>
                <span className="tooltip">
                    <button onClick={() => PlayListModalDispatch({type:"SHOW_PLAYLIST_MODAL"}) }  className="primary-btn">+ Create PlayList</button>
                    <span className="tooltiptext">Create</span> 
                </span>
                <span className="tooltip">
                    <button className="secondary-btn" onClick={()=>modalDispatch({type:"SHOW_MODAL"})} style={{marginRight: "5rem"}}>Save to playlist</button>
                    <span className="tooltiptext">Save</span> 
                </span>
            </span>
        </div>
        {showPlaylistModal && <PlayListModal  id={id} heading= {heading} channel_name={channel_name} img={img} />}
        {showModal && <Modal id={id}/>}
        { showDescription ? <i class="fa fa-caret-down" onClick={()=>setShowDescription(false)}></i> : <i class="fa fa-caret-up" onClick={()=>setShowDescription(true)}></i>}
        {showDescription && <p>{desc}</p>}
    </section>
}