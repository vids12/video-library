import { useList } from "../DataProvider/VideoListProvider"

export function SearchBar(){
    const { setSearch } = useList();
    return <input type="search" placeholder="Search" className="search-box" onChange={(e)=>setSearch(e.target.value)}></input>
    
}