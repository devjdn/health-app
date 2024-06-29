const SearchBar = () => {
    return(
        <form className="search-bar">
            <input type="search" spellCheck="false" autoComplete="false" autoCapitalize="false"/>
            <label htmlFor="search">Search for a food item...</label>
        </form>
    );
}

export default SearchBar;