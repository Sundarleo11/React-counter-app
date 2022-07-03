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
        const { count } = this.state;
        return count === 0 ? 'zero' : count;

    }
}

export default counter;
