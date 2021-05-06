import { useState } from "react";
import { useList } from "../DataProvider/VideoListProvider";
import { list } from "../DataProvider/data";

export function Modal({id}){
    const { playlist,dispatch } = useList();
    function getVideo(list,id){
        return list.find(obj=>obj.id===id)
    }
    const video = getVideo(list,id);
    console.log(video);
    return <>
        <div class="modal">
        <div class="modal-header">
            <h4 class="modal-title">Save to...</h4>
            <button onClick={()=>dispatch({type:"CLOSE_MODAL"})} className="close-btn">X</button>
        </div>
        <hr />
        <div class="modal-body">
            <ul>
            {playlist.map(({name,pid,videoes})=> <li key={pid}>
                {console.log(videoes)}
                <label>
                    <input type="checkbox" onChange={()=>videoes.concat(video)} ></input>{name}
                </label>
            </li>
            )}
            </ul>
        </div>
    </div>
    <div class="modal-overlay" id="modal-overlay">
    </div>
    </>
}
