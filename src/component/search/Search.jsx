import React, {useEffect} from "react";

const Search = (props) =>{
    const {setSearchText, searchBeers} = props;

    useEffect(() => {
        console.log('props :', props);
    })
    return (
        <input type="text" placeholder="Search by name" onChange={(e) => {searchBeers(e.target.value);setSearchText(e.target.value)}} />
    )
}
export default Search;