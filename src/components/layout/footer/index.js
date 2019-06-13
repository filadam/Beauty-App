import React from 'react'
import { FaFacebookF, FaInstagram, FaDribbble } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const styledLink = {
    color: "white",
    textDecoration: "none",
    padding: "30px",
}
const footerStyle = {
    height: "150px",
    width: "100%",
    background: "#1E1E1E",
    fontSize: "0.875rem",
    fontFamily: "'Roboto'",
    fontWeight: 500,
    lineHeight: 1.75,
    letterSpacing: "0.02857em",
    textTransform: "uppercase",
}
const footerNavStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}
const footerIconStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}
const iconStyle = {
    width: "60px",
    height: "30px",
    color: "white",

}
class Footer extends React.Component {
    render() {
        return (
            <div style={footerStyle}>
                <div style={footerNavStyle} className="container">
                    <Link style={styledLink} to="/about">Blog</Link>
                    <Link style={styledLink} to="/about">Contact</Link>
                    <Link style={styledLink} to="/about">Privacy Policy</Link>
                    <Link style={styledLink} to="/about">Terms of service</Link>
                </div>
                <div style={footerIconStyle} className="container">
                    <FaFacebookF style={iconStyle} />
                    <FaInstagram style={iconStyle} />
                    <FaDribbble style={iconStyle} />
                </div>
            </div>
        )
    }
}

export default Footer;