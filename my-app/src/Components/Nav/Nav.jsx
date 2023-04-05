import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';




const Nav = (props) => {
// debugger;
    // let friendsElement = props.state.friends.map( d => <friendsItem name={d.name}  id={d.id} />);

    return <nav className={s.nav}>
        <div>
            <NavLink to='/Profile' className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
        </div>
        <div>
            <NavLink to='/Dialogs' className={navData => navData.isActive ? s.active : s.item}>Masseges</NavLink>
        </div>
        <div>
            <NavLink to='/News' className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
        </div>
        <div>
            <NavLink to='/Music' className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
        </div>
        <div>
            <NavLink to='/Settings' className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
        </div>
        <div>
            {/* { friendsElement } */}
        </div>

    </nav>
}

export default Nav;