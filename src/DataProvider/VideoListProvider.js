import { createContext, useContext,useReducer,useState } from "react";
import { VideoListReducer } from "./VideoListReducer";
import faker from "faker";
const createVideoList = createContext();

export function VideoListProvider({children}) {
    const [ showSearchPage, setShowSearchPage ] = useState(false);
    const [showWatchLater,setShowWatchLater] = useState(false);
    const [search,setSearch] = useState("");
    let [newPlaylist,setNewPlaylist] = useState("");
    const [watchLaterList,setWatchLaterList] = useState([]);
    const [state,dispatch] = useReducer(VideoListReducer,{
        playlist: [{pid: faker.datatype.uuid(), name: "", videoes:[]}],
        addToPlaylist: false,
        showModal: false
    });
    return <createVideoList.Provider value={{
        showModal:state.showModal,
        showWatchLater,
        setShowWatchLater,
        watchLaterList,
        setWatchLaterList,
        playlist: state.playlist,
        search,
        setSearch,
        newPlaylist,
        setNewPlaylist,
        showSearchPage,
        setShowSearchPage,
        addToPlaylist:state.addToPlaylist,
        dispatch
    }}>
        {children}
    </createVideoList.Provider>
}
export function useList() {
    return useContext(createVideoList);
}