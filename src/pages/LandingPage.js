import { useState } from "react";
import { VideoPage } from "./videoPage";
import { Link } from "react-router-dom";
import { list } from "../DataProvider/data";
import { useList } from "../DataProvider/VideoListProvider";

export function LandingPage(){
    const [ route,setRoute ] = useState(false);
    const { search } = useList();
    function getSearchData(list,search) {
        return list.filter(obj=>(obj.heading).toLowerCase().includes(search.toLowerCase()) ? obj : !obj)
    }
    const searchedData = getSearchData(list,search)
    return <div className="sidebar-page">
        <ul className="video-column" style={{listStyle:"none"}}>
            {
                searchedData.map(({id,avatarImg,heading,img}) =>{
                    return <li key={id} className="video-card">
                        <img src={img} alt="Image" />
                        <div className="video-heading">
                            <img src={avatarImg} alt="avatar" className="avatar" />
                            <span style={{fontSize:"0.6rem"}}>{heading}</span>
                        </div>
                        <Link to={`/watch/${id}`} >
                            <button onClick={()=>setRoute(true)}>Watch Now</button>
                        </Link>
                    </li>
                })
            }
        </ul>
        <div>{route && <VideoPage/>}</div>
    </div>
}