import { Link } from 'react-router-dom';
import { HeaderArea, HeaderNav, NavMenu } from './styled';

const Header = () => {
    return (
        <HeaderArea>
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
                        <Link to="/contact">contact</Link>
                    </li>
                </NavMenu>
            </HeaderNav>
        </HeaderArea>
    )
}

export default Header;