import { useContext } from "react"
import { AppContext } from "../context/AppContext"

        interface SidebarProps{
    isLoggedIn:boolean
}

const navItems =[
    {id:1, icon: "-", label:"Dashboard"},
    {id:2, icon: "-", label:"Users"},
    {id:3, icon: "-", label: "Orders"},
    {id:4, icon: "-", label:"Settings"},
    {id:5, icon: "-", label: "Reports"},
]
function Sidebar(props:SidebarProps){
    const {appName,version} = useContext(AppContext)
    return(
        <div>
            <h2>{appName}</h2>
            <p>v{version}.0</p>
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