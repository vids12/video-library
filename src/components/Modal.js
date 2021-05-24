import { useList } from "../DataProvider/VideoListProvider";

export function Modal({id}){
    const { playlist,dispatch: modalDispatch,dispatch: watchLaterListDispatch,dispatch: playlistDispatch,watchLaterList } = useList();
    return <>
        <div class="modal">
        <div class="modal-header">
            <h4 class="modal-title">Save to...</h4>
            <button onClick={() => modalDispatch({type:"CLOSE_MODAL"})} className="close-btn">X</button>
        </div>
        <div class="modal-body">
            <label>
                <input type="checkbox" onChange={() => watchLaterListDispatch({type:"ADD_TO_WATCH_LATER",payload: id})} className="checkbox" checked={watchLaterList.find(obj=> obj.id === id) ? true : false }></input>
            </label>Watch Later
            <ul>
                {playlist.map(({name,pid})=> <li key={pid}>
                    <label>
                        <input type="checkbox" onChange={() => playlistDispatch({type:"ADD_TO_EXISTING_CUSTOM_PLAYLIST",payload: {id,pid}})} className="checkbox" checked={playlist.find(obj => obj.pid===pid) ? true : false} ></input>
                    </label>{name}
                </li>
            )}
            </ul>
        </div>
    </div>
    <div class="modal-overlay" id="modal-overlay">
    </div>
    </>
}
