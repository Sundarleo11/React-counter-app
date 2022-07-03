import React, { Component } from 'react';

class counter extends Component {

    state = { count: 0 };

    styles = {
        fontSize: 10,
        fontWight: 'Bold'
    }
    render() {
        return (

            <div>

                <span style={this.styles} className='badge badge-primary m-2'>{this.formatcount()}</span>
                <button className='btn btn-secondary btn-sm'>Increment</button>
            </div>

        );

    }

    formatcount() {
        const { count } = this.state;
        return count === 0 ? 'zero' : count;

    }
}

export default counter;
