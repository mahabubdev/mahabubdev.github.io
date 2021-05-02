import { Link } from 'react-router-dom';
import { HeaderArea, HeaderNav, NavMenu, MobileNavMenu, MobileNav } from './styled';

import { Icon } from '@iconify/react';
import menu2Fill from '@iconify-icons/eva/menu-2-fill';




const Header = () => {
    return (
        <HeaderArea>
            <MobileNav>
                <img className="nav_logo_img" src='https://avatars.githubusercontent.com/u/56954039?v=4' alt="mahabubdev" />

                <span>
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
                        <Link to="/blog">blog</Link>
                    </li>
                    <li>
                        <Link className="btn btn-pr" target="_blank" to="//linkedin.com/in/mahabub2000/">hire me</Link>
                    </li>
                </NavMenu>



                <MobileNavMenu>
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
                        <Link to="/blog">blog</Link>
                    </li>
                    <li>
                        <Link className="btn btn-pr" target="_blank" to="//linkedin.com/in/mahabub2000/">hire me</Link>
                    </li>
                </MobileNavMenu>
            </HeaderNav>
        </HeaderArea>
    )
}

export default Header;