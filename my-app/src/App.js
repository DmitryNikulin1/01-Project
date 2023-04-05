import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav  />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/Profile' element={<Profile profilePage = {props.state.profilePage}  dispatch = {props.dispatch} />} />
            <Route path='/Dialogs' element={<Dialogs store={props.store} />} />
            </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}



export default App;


// state={props.state.siteBar}