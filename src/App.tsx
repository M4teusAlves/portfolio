import './App.css'
import { Menu } from './components/Menu'
import { Home } from './components/Home'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'

function App() {
  

  return (
    <>
      <Menu/>
      <main>
      <Home/>
      <Experience/>
      <Projects/>
      </main>
      
    </>
  )
}

export default App
