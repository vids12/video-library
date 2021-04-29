import { Markdown } from "../components/Markdown";
import { Modal } from "../components/Modal";
import { useList } from "../DataProvider/VideoListProvider";
import { VideoCard } from "./VideoCard";
import { list } from "../DataProvider/data";
import { useParams } from "react-router-dom";


export function VideoPage(){
    const { showModal } = useList();
    const { videoId } = useParams();
    function getProductDetails(videoList, videoId) {
        return videoList.find(obj => obj.id == videoId);
    }
    const video = getProductDetails(list, videoId);
    return <div className="sidebar-page">
        <VideoCard {...video} />
        {showModal && <Modal />}
        <Markdown />
    </div>
}