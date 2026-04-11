import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

function App(){
  return(
    <div>
      <Topbar/>
      <div>
        <Sidebar appName="Trackify" isLoggedIn={true}/>
        <main>
          <p>Main content goes here</p>
        </main>
      </div>
    </div>
  )
}
export default App