import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderArea, HeaderNav, NavMenu, MobileNavMenu, MobileNav } from './styled';

import { Icon } from '@iconify/react';
import menu2Fill from '@iconify-icons/eva/menu-2-fill';
import closeFill from '@iconify-icons/eva/close-fill';
import { useClickOutside } from '../../hooks/useOutsideClick';


const Header = () => {
    // menu
    const [open, setOpen] = useState(false);

    // outside click
    let domNode = useRef();
    useClickOutside(() => {
        setOpen(false);
    }, domNode);


    return (
        <HeaderArea>
            <MobileNav>
                <img className="nav_logo_img" src='https://avatars.githubusercontent.com/u/56954039?v=4' alt="mahabubdev" />

                <span onClick={() => setOpen(true)}>
                    <Icon icon={menu2Fill} />
                </span>
            </MobileNav>


            <HeaderNav>
                <NavMenu>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/about">about</Link>
                    </li>
                    <li>
                        <Link to="/projects">projects</Link>
                    </li>
                    <li>
                        <Link target="_blank" to="//mahabubdev.medium.com/">blog</Link>
                    </li>
                    <li>
                        <Link className="btn btn-pr" target="_blank" to="//linkedin.com/in/mahabub2000/">hire me</Link>
                    </li>
                </NavMenu>



                <MobileNavMenu className={open ? 'active' : ''} ref={domNode}>
                    <li className="menu_switch">
                        <Icon onClick={() => setOpen(false)} icon={closeFill} />
                    </li>
                    <li>
                        <Link onClick={() => setOpen(false)} to="/">home</Link>
                    </li>
                    <li>
                        <Link onClick={() => setOpen(false)} to="/about">about</Link>
                    </li>
                    <li>
                        <Link onClick={() => setOpen(false)} to="/projects">projects</Link>
                    </li>
                    <li>
                        <Link onClick={() => setOpen(false)} to="/blog">blog</Link>
                    </li>
                    <li>
                        <Link onClick={() => setOpen(false)} className="btn btn-pr" target="_blank" to="//linkedin.com/in/mahabub2000/">hire me</Link>
                    </li>
                </MobileNavMenu>
            </HeaderNav>
        </HeaderArea>
    )
}

export default Header;