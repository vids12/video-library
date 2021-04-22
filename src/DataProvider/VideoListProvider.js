import { createContext, useContext,useState } from "react";

const createVideoList = createContext();

export function VideoListProvider({children}) {
    const [showModal,setShowModal] = useState(false);
    const [playlist,setPlaylist] = useState([]);
    const [search,setSearch] = useState("");
    return <createVideoList.Provider value={{showModal,setShowModal,playlist,setPlaylist,search,setSearch}}>
        {children}
    </createVideoList.Provider>
}
export function useList() {
    return useContext(createVideoList);
}