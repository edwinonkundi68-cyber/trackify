import { useState } from "react";
function Topbar(){
    const[searchText,setSearchText]=useState('')
    function handleSearch(e:React.ChangeEvent<HTMLInputElement>){
        setSearchText(e.target.value)
    }
    return(
        <div>
            <h3>Dashbord</h3>
            <input type="text"
            placeholder="Search..."
            onChange={handleSearch}
             />
             <span>EO</span>
             <p>You searched:{searchText}</p>
        </div>
    )
}
export default Topbar