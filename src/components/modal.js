import { useState } from "react";
import { useList } from "../DataProvider/VideoListProvider";


export function Modal({id}){
    const { playlist,dispatch } = useList();
    
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
                    <input type="checkbox" onChange={()=>videoes.concat({id})} ></input>{name}
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