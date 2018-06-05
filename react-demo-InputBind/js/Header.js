import React from 'react';
import '../css/Header.css'

class Header extends React.Component {

    render() {
        return (
            <header className="header">{this.props.content}</header>
        )
    }
}

export default Header;