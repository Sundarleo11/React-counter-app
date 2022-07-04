import React, { Component } from 'react';

class counter extends Component {

    state = { count: 0 };

    styles = {
        fontSize: 10,
        fontWight: 'Bold'
    }
    render() {

        let classes = this.getBadgeMehod();
        return (



            <div>

                <span className={classes}>{this.formatcount()}</span>
                <button className='btn btn-secondary btn-sm'>Increment</button>
            </div>

        );

    }

    getBadgeMehod() {
        let classes = "badge  m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary ";
        return classes;
    }

    formatcount() {
        const { count } = this.state;
        return count === 0 ? 'zero' : count;

    }
}

export default counter;
