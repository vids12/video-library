import { Modal } from "../components/Modal";
import { useList } from "../DataProvider/VideoListProvider";
import { VideoCard } from "./VideoCard";
import { list } from "../DataProvider/data";
import { useParams } from "react-router-dom";


export function VideoPage(){
    const { showModal,setVideoID } = useList();
    // const [showModal,setShowModal] = useState(false);
    const { videoId } = useParams();
    function getProductDetails(videoList, videoId) {
        setVideoID(videoId);
        return videoList.find(obj => obj.id === videoId);
    }
    const video = getProductDetails(list, videoId);
    return <div className="sidebar-page">
        <VideoCard {...video} />
        {showModal && <Modal />}
    </div>
}