import React from 'react'

const meStyle = {
    color:  "white",
    backgroundColor: "black",
    width: "75%",
    margin: "auto",
    paddingBottom: "75px",
    boxShadow: "20px 20px green"
}

export default class Display extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div style={meStyle}>              
                <h1>This is user: {this.props.state.login}</h1>
                <h2>{this.props.state.name}</h2>
                <h3>Followers {this.props.state.followers}</h3>
                <h3>Following {this.props.state.following}</h3>
                <img src={this.props.state.avatar_url} alt="Person's IMG of profile"/>

            </div>
        )
    }
}

