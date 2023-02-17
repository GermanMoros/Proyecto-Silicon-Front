import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import {Link, Route, Routes} from 'react-router-dom'
// import './App.css'
import { Principal } from './componentes/Desing/Principal'
import { ListBuzos } from './componentes/stock/buzosycamperas'
import { ListChanclas } from './componentes/stock/chanclas'
import { ListMallas } from './componentes/stock/mallas'
import { ListPantalones } from './componentes/stock/pantalones'
import { ListRemeras } from './componentes/stock/remeras'

function App() {

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Banzai Clothes</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to={'/'}>Inicio</Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Stock de productos
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link className="dropdown-item" to={'/listar_buzos'}>Buzos y camperas</Link>
          <Link className="dropdown-item" to={'/listar_chanclas'}>Chanclas</Link>
          <Link className="dropdown-item" to={'/listar_mallas'}>Mallas</Link>
          <Link className="dropdown-item" to={'/listar_pantalones'}>Pantalones</Link>
          <Link className="dropdown-item" to={'/listar_remeras'}>Remeras</Link>
        </div>
      </li>
    

    </ul>
  </div>
</nav>
  

<div className='container'>  
        <Routes>
          <Route path='/' element={<Principal/>}></Route>
          <Route path='/listar_buzos' element={<ListBuzos/>}></Route>
          <Route path='/listar_chanclas' element={<ListChanclas/>}></Route>
          <Route path='/listar_mallas' element={<ListMallas/>}></Route>
          <Route path='/listar_pantalones' element={<ListPantalones/>}></Route>
          <Route path='/listar_remeras' element={<ListRemeras/>}></Route>

        </Routes>
  </div>    
    </>
  )
}

export default App
