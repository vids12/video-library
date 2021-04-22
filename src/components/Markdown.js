import { useState } from "react"

export function Markdown() {
    const [ disableTextarea,setDisableTextarea ] = useState(false);
    return <div className="video">
        <div>
        <button onClick={()=>setDisableTextarea(false)}>Edit</button>
        <button onClick={()=>setDisableTextarea(true)}>Save</button>
        </div>
        <textarea cols="50" rows="20" disabled={disableTextarea}></textarea>
    </div>
}