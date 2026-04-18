import { useState } from "react"
function Topbar(){
    const[searchText,setSearchText]=useState('')
    const[notifications,setNotifications]=useState([
        {id: 1,message:'New user signed up'},
        {id: 2,message: 'Orders received'},
        {id: 3,message: 'Payment confirmed'}
    ])
    function handleSearch(e:React.ChangeEvent<HTMLInputElement>){
        setSearchText(e.target.value)
    }
    function clearSearch(){
        setSearchText('')
    }
    function removeNotification(_id:number){
        setNotifications(notifications.filter((n)=>n.id !== _id))
    }
    return(
        <div>
            <h3>Dashbord</h3>
            <input type="text"
            placeholder="Search..."
            onChange={handleSearch}
             />
             <button onClick={clearSearch}>Clear</button>
             <span>EO</span>
             <p>You searched:{searchText}</p>
             <div>
                <h4>Notifications({notifications.length})</h4>
                {notifications.map((n)=>(
                    <div key={n.id}>
                        <p>{n.message}</p>
                        <button onClick={()=>removeNotification(n.id)}>
                            Dismiss
                        </button>
                    </div>
                ))}
             </div>
        </div>
    )
}
export default Topbar