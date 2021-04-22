export function SearchBar(){
    return <input type="search" placeholder="Search" className="search-box" onChange={(e)=>console.log(e.target.value)}></input>
    
}