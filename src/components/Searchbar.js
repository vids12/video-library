import { useList } from "../DataProvider/VideoListProvider"

export function SearchBar(){
    const { setSearch,setShowSearchPage } = useList();

    return <div className="search-page">
        <div class="search-div">
            <h3 class="search-title">Start typing</h3>
        </div>
        <input type="search" placeholder="Search" className="search-box" onChange={(e)=>setSearch(e.target.value)}></input>
        <div>
            <button className="search-close-btn close-btn" onClick={()=>setShowSearchPage(false)}>X</button>
        </div>
    </div>

    
}