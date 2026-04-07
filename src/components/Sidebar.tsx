interface SidebarProps{
    appName:string
}

function Sidebar(props:SidebarProps){
    return(
        <div>
            <h2>{props.appName}</h2>
            <nav>
                <p>Dashboard</p>
                <p>Users</p>
                <p>Orders</p>
                <p>Setting</p>
            </nav>
        </div>
    )
}
 export default Sidebar