import React from 'react'

const meStyle = {
    color:  "white",
    backgroundColor: "black",
    width: "75%",
    margin: "auto",
    paddingBottom: "75px",
    boxShadow: "20px 20px green",
    marginTop: "100px"
}

export default class Followers extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                {this.props.state.map(X => {
                    return(
                        <div style={meStyle} key={X.id}>
                            <h1>This is user: {X.login}</h1>
                            <img src={X.avatar_url} alt="Person's IMG of profile"/>
                        </div>
                    )
                })}
            </div>
        )
    }
}