import React from 'react';
import "./styles.scss"

class Info extends React.Component {
    render() {

        const {profilePic, bio} = this.props

        return (
            <div className="info">
                <img className="img" src={profilePic} />
                <p className="bio">{bio}</p>
            </div>
        )
    }
}

export default Info;