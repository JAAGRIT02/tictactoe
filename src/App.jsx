import './App.css'
import Foursides from './components/Foursides'

function App() {
  return (
  <>
  <div className='card'>
      <h1>title</h1>
      <img src="vite.svg" alt="" />

      <Foursides value ="1">
      <div>hii</div>
      <h3>you there</h3>
      </Foursides>
      <Foursides value ="2"/>
      <Foursides value ="3"/>
      <Foursides value ="4"/>
      <Foursides value ="5"/>
  </div>
  </>
  )
}

export default App
