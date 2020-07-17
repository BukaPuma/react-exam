import React from 'react'

import axios from 'axios'

// function UserList() {
//     axios.get("http://localhost:5555/apiV1/user")
//         .then(response => console.log("response", response.data))
// }

export default class UserList extends React.Component {
    state = {
        user: []
    }
    componentDidMount() {
        axios.get(`http://localhost:5555/apiV1/user`)
            .then(res => {
                const user = res.data;
                this.setState({ user });
            })
    }

    render() {
        return (
            <ol>
                {this.state.user.map(person => <li>{person.name}</li>)}
            </ol>
        )
    }
}



