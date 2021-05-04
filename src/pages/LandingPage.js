import { Link } from "react-router-dom";
import { list } from "../DataProvider/data";
import { useList } from "../DataProvider/VideoListProvider";

export function LandingPage(){
    const { search } = useList();
    function getSearchData(list,search) {
        return list.filter(obj=>(obj.heading).toLowerCase().includes(search.toLowerCase()) ? obj : !obj)
    }
    const searchedData = getSearchData(list,search)
    return <div className="sidebar-page">
        <ul className="video-column">
            {
                searchedData.map(({id,avatarImg,heading,img}) =>{
                    return <li key={id} className="video-card">
                        <img src={`${img}`} alt="Image" />
                        <div className="video-header">
                            <img src={`${avatarImg}`} alt="avatar" className="avatar" />
                            <span className="video-heading">{heading}</span>
                        </div>
                        <Link to={`/watch/${id}`} >
                            <button className="primary-btn">Watch Now</button>
                        </Link>
                    </li>
                })
            }
        </ul>
    </div>
}