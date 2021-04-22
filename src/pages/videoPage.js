import { useState } from "react"
import { Markdown } from "../components/Markdown";
import { Modal } from "../components/Modal";
import { useList } from "../DataProvider/VideoListProvider";

export function VideoPage(){
    const [likeCount,setLikeCount] = useState(500);
    const [dislikeCount,setDislikeCount] = useState(20);
    const { showModal,setShowModal,setPlaylist,playlist } = useList();
    return <div className="sidebar-page">
        <div>
        <iframe width="700" height="480" src="https://www.youtube.com/embed/erXfC_hs7Ew" className="video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        <h5 style={{marginLeft:"4.2rem"}}>How I make ceramic planters at home | Process of Ceramic | Studio Vlog | ASMR Vlog | Clay ASMR</h5>
        <div className="video-heading">
            <span style={{marginLeft:"4.2rem"}}>1,464,917 views • Nov 15, 2020</span>
            {/* <img src="../image/like.svg" alt="like-btn" /> */}
            <div>
                <button onClick={()=>setLikeCount(prev=>prev+1)} className="tooltip">like {likeCount}</button>
                <span className="tooltip-text">Like</span>
                <button onClick={()=>setDislikeCount(prev=>prev+1)} className="tooltip">dislike {dislikeCount}</button>
                <span className="tooltip-text">Dislike</span>
                <button className="tooltip" onClick={()=>setShowModal(true)}>Save to playlist</button>
                <span className="tooltip-text">Save</span>
            </div>
        </div>
       {showModal && <Modal />}
        </div>
        <Markdown />
    </div>
}