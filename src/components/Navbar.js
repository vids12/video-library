import { useState } from "react";
import { useList } from "../DataProvider/VideoListProvider";
import { SearchBar } from "./Searchbar";

export function Navbar() {
    const { setShowSearchPage,showSearchPage } = useList();
    return <div className="nav-bar">
      <img
          src="https://themeforshop.github.io/kala-pottery-demo/images/logo.png"
          alt="logo"
        />
        <nav>
          <i className="fas fa-search" onClick={()=>setShowSearchPage(true)}></i>
          {showSearchPage && <SearchBar />}
        </nav>
    </div>
  }