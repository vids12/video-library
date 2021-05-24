import { createContext, useContext,useReducer,useState } from "react";
import { VideoListReducer } from "./VideoListReducer";
const createVideoList = createContext();

export function VideoListProvider({children}) {
    const [ showSearchPage, setShowSearchPage ] = useState(false);
    const [showWatchLater,setShowWatchLater] = useState(false);
    const [search,setSearch] = useState("");
    let [newPlaylist,setNewPlaylist] = useState("");
    const [state,dispatch] = useReducer(VideoListReducer,{
        playlist: [],
        watchLaterList: [],
        showModal: false,
        showPlaylistModal: false
    });
    return <createVideoList.Provider value={{
        showModal:state.showModal,
        showWatchLater,
        setShowWatchLater,
        showPlaylistModal: state.showPlaylistModal,
        watchLaterList: state.watchLaterList,
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