import { useState } from "react"
function useNotifications(){
    const[notifications,setNotifications] = useState([
        {id: 1 ,message: 'New user signed up'},
        {id: 2 ,message: 'Orders received'},
        {id: 3 ,message: 'Payment confirmed'},
    ])
    function removeNotification(id:number){
        setNotifications(notifications.filter((n)=>n.id !==id))
    }
    return{notifications,removeNotification}
}
export default useNotifications