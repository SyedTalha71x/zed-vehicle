import Sidebar from "../components/sidebar"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
       <Outlet/>
      </div>
    </div>
  )
}

export default App
