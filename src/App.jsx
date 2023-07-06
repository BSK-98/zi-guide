import { Route, Routes } from 'react-router-dom'
import './App.css'
import { TopBar, SideBar } from './components'
import { Home } from './Views'

function App() {

  return (
    
    <div id="wrapper">
      <div className="header"></div>
      <div className="wrapper">
          <TopBar />
          <SideBar />
          <main>
            <Routes>
              <Route index element={<Home />} />
              {/* <Route /> */}
            </Routes>
          </main>
      </div>
    </div>  
  )
}

export default App
