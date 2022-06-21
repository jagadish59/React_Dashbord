import React, { useContext }  from 'react';
import {Routes, Route  } from 'react-router-dom';
import { List } from './pages/Dashbord/list/List';
import { Homes } from './pages/Dashbord/home/Homes';
import { Single } from './pages/Dashbord/single/Single';
import { New } from './pages/Dashbord/new/New';
import 'react-circular-progressbar/dist/styles.css';
import { productInputs, userInputs } from './formSource';
import './style/dark.scss';
import { darkModeCreateContext } from './createContext/DarkModeContext';



function App() {

  const {darkMode}=useContext(darkModeCreateContext)
  return (<div className= {darkMode?'app dark':'app'}>

<Routes>
  <Route path='/'>
      
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
