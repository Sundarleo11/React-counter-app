import React, { Component } from 'react';

class counter extends Component {

    state = { count: 1 };
    render() {
        return (<div>

            <span>{this.formatcount()}</span>
            <button>clicked</button>
        </div>)

    }

    formatcount() {
        const { counter } = this.state;
        return counter === 0 ? 'zero' : counter;

    }
}

export default counter;
