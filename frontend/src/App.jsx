import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { VideoGrid } from './components/VideoGrid'
import { Appbar } from './components/Appbar'
import { SideBar } from './components/SideBar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <SideBar/>
    </div>
  )
}

export default App
