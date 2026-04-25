import { createContext } from "react"
interface AppContextType {
    appName: string
    version: number
}
export const AppContext = createContext<AppContextType>({
    appName: "Trackify",
    version: 1.0
})  
