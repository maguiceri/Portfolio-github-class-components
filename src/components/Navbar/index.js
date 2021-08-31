import React from 'react';
import styles from './styles.scss'
class Navbar extends React.Component {

    render() {
        const {name} = this.props

        return(
            <nav>
            <h1 className="title">Startup Argentina</h1>
            <p>{name}</p>
            </nav>
        )
    }
} 

export default Navbar;