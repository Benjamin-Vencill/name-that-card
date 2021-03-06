import React, { Component } from 'react';

export default class Square extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <button className={this.props.class} onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}