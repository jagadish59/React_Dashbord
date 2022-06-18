import React, { useContext }  from 'react';
import {Routes, Route  } from 'react-router-dom';
import { List } from './pages/Dashbord/list/List';
import { Home } from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Dashbord } from './pages/Dashbord/Dashbord';
import { Homes } from './pages/Dashbord/home/Homes';
import { Single } from './pages/Dashbord/single/Single';
import { New } from './pages/Dashbord/new/New';
import NavBar from './components/NavBar';
import 'react-circular-progressbar/dist/styles.css';
import { productInputs, userInputs } from './formSource';
import './style/dark.scss';
import { darkModeCreateContext } from './createContext/DarkModeContext';



function App() {

  const {darkMode}=useContext(darkModeCreateContext)
  return (<div className= {darkMode?'app dark':'app'}>




    {/* <Routes>
    <Route  path='/' element={< Home />}></Route>
    <Route exact path='/about' element={< About />}></Route>
    <Route exact path='/contact' element={< Contact />}></Route>
    <Route  path='/dashbord'>

       </Route>
</Routes> */}

<Routes>
  <Route path='/'>


    {/* <Route index element={<Home/>}/>
    
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path=''> */}
      
    <Route index element={<Homes/>}/>
      <Route path='users'>
      <Route index element={<List/>}/>
      <Route path='new' element={<New inputs={userInputs} title='Add new User' />}/>
      <Route path=':userId' element={<Single/>}/>
    </Route>
    <Route path='product'>
      <Route index element={<List/>}/>
      <Route path='new' element={<New inputs={productInputs} title='Add new Product' />}/>
      <Route path=':productId' element={<Single/>}/>
    </Route>

    </Route>
  {/* </Route> */}
  
  </Routes>    


</div>);
}

export default App;
