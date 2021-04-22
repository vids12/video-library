import { useList } from "../DataProvider/VideoListProvider"

export function Playlist() {
    const { playlist } = useList();
    console.log(playlist)
    return <div className="sidebar-page">
        <h1>Playlist</h1>
        <ul>
            {playlist.map(name=><li>{name}</li>)}
        </ul>
    </div>
}