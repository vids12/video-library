import { useState } from "react";
import { VideoPage } from "./videoPage";
import { Link } from "react-router-dom";

export function LandingPage(){
    const [ route,setRoute ] = useState(false);
    return <>
            
            {/* <div style={{display:route ? "none":"block"}}>
                <button className="primary-btn">Videos</button>
                <button className="primary-btn">PlayList</button>
            </div> */}
            <Link to="/video">
            <button onClick={()=>setRoute(true)} style={{display:route ? "none":"block"}} className="sidebar-page">Abhi yahan kuch aayega</button>
            </Link>
        <div>{route && <VideoPage/>}</div>
        
    </>
}