import React from 'react';
import "./styles.scss"

class Proyect extends React.Component {
    render() {
        const {id, repo} = this.props
        return (
            <li>{id}: {repo.name}</li>
        )
    }
}

export default Proyect;