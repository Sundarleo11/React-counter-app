import React, { Component } from 'react';

class counter extends Component {

    state = {
        count: 0,
        tags: ["tag1", "tag2", "tag3"]

    };

    styles = {
        fontSize: 10,
        fontWight: 'Bold'
    }

    handleIncrement() {
        console.log("Increment");
    }
    render() {

        let classes = this.getBadgeMehod();
        return (



            <div>

                <span className={classes}>{this.formatcount()}</span>
                <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button>
                <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
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
