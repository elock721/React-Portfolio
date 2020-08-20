import React from "react";
const Footer = (props) => {
    return (
        <div className="footer bg-dark py-4">
            <div className="footer-wrapper">
                <ul className="footer-info">
                    <li>Elliott Lockwood</li>
                    <li><a href="/src/img/EJL.pdf" class="button" download> <i class="fa fa-download"></i>Download Resume</a></li>
                </ul>
                <ul className="footer-media">
                    <li><a href="https://www.linkedin.com/in/elliottjlockwood" target="_blank">Linkedin</a></li>
                    <li><a href="https://github.com/elock721" target="_blank">Github</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Footer;