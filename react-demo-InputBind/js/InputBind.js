import React from 'react';
import "../css/InputBind.css"

class BindInput extends React.Component {

    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <div className="bind-div">{this.state.value}</div>
                <Input handleChange={this.handleChange.bind(this)} />
            </div>
        )
    }
}

class Input extends React.Component {

    render() {
        return (
            <input type="text" onChange={this.props.handleChange} />
        )

    }
}

export default BindInput;