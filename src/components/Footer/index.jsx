import { Link } from "react-router-dom";
import { FooterArea } from "./styled";


const Footer = () => {

    let currentYear = new Date().getFullYear();
    const footerYear = () => {
        if (currentYear === 2021) {
            return `2021`;
        } else {
            return `2021 - ${currentYear}`;
        }
    }


    return (
        <FooterArea>
            <p>
                Copyright © <Link to="//github.com/mahabubdev">@mahabubdev</Link> 
                {' ' + footerYear()}. All rights reserved.
            </p>
        </FooterArea>
    )
}

export default Footer;