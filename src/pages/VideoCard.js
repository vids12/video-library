import { useState } from "react";
import { useList } from "../DataProvider/VideoListProvider";

export function VideoCard({src,heading}) {
    const [likeCount,setLikeCount] = useState(500);
    const [dislikeCount,setDislikeCount] = useState(20);
    const { setShowModal } = useList();
    return  <li>
            {console.log({src,heading})}
            <iframe width="700" height="480" src={`${src} `}className="video" title="Youtube-video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true" ></iframe>
            <h5 style={{marginLeft:"4.2rem"}}>{heading}</h5>
            <div className="video-heading">
                <span style={{marginLeft:"4.2rem"}}>1,464,917 views • Nov 15, 2020</span>
                <div>
                    <i className="fa fa-thumbs-up tooltip" aria-hidden="true"  onClick={()=>setLikeCount(prev=>prev+1)}></i> {likeCount}
                    <span className="tooltip-text">Like</span>
                    <i class="fa fa-thumbs-down tooltip" aria-hidden="true" onClick={()=>setDislikeCount(prev=>prev+1)} ></i>{dislikeCount}
                    <span className="tooltip-text">Dislike</span>
                    <button className="tooltip" onClick={()=>setShowModal(true)}>Save to playlist</button>
                    <span className="tooltip-text">Save</span>
                </div>
            </div>
       </li>
}