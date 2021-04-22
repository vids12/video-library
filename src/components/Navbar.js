import { SearchBar } from "./Searchbar";

export function Navbar() {
    return <div className="nav-bar">
      <img
          src="https://themeforshop.github.io/kala-pottery-demo/images/logo.png"
          alt="logo"
        />
        <nav>
        <SearchBar />
        </nav>
    </div>
  }