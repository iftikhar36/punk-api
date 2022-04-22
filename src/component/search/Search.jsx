import React from "react";

const Search = (props) =>{
    const [setSearchText, searchBeers] = props;
    console.log('dragon :', props);
    return (
        <input type="text" placeholder="Search by name" onChange={(e) => {searchBeers(e.target.value);setSearchText(e.target.value)}} />
    )
}
export default Search;