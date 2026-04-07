interface SidebarProps{
    appName:string
    isLoggedIn:boolean
}

const navItems =[
    {id:1, icon: "-", label:"Dashboard"},
    {id:2, icon: "-", label:"Users"},
    {id:3, icon: "-", label: "Orders"},
    {id:4, icon: "-", label:"Settings"},
]
function Sidebar(props:SidebarProps){
    return(
        <div>
            <h2>{props.appName}</h2>
            {props.isLoggedIn?(
                <nav>
                    {navItems.map((item)=>(
                        <p key={item.id}>{item.icon}{item.label}</p>
                    ))}
                </nav>
            ):(
                <p>Pleace log in to see the menu</p>
            )}
        </div>    
    )
}
export default Sidebar