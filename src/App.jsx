import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Navbar} from './components/Navbar'
import {Home} from './components/Home'
import {Shop} from './components/Shop'
import {Collection} from './components/Collection'
import {Footer} from './components/Footer'
import './App.css'

function App() {
  

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/shop" element = {<Shop/>}/>
        <Route path="/collection" element = {<Collection/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
